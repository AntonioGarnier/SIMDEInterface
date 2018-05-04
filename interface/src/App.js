import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, withRouter, BrowserRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress'
import ControlPanel from './Components/ControlPanel'
import Login from './Components/Login'
import firebase from './Components/FirebaseProvider/firebase'
import { store } from './Store'
import { currentUser } from './Actions'
import Routes from './Routes'
import Loading from './Components/Loading'


window.store = store

const mapDispatchToProps = (dispatch) => {
    return {
        currentUser: user => dispatch(currentUser(user)),
    }
}

class App extends Component {
    state = {
        isLoading: true,
        userLogged: true,
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            console.log('user')
            console.log(user)
            if (user) {
                console.log('user1')
                console.log('user2')
                this.props.currentUser({
                    displayName: user.providerData[0].displayName,
                    email: user.email,
                    picture: user.photoURL,
                    creationTime: user.metadata.creationTime,
                    lastSignInTime: user.metadata.lastSignInTime,
                })
                this.setState({ isLoading: false, userLogged: true })
                console.log(this.state.userLogged)
                console.log('user3')
            } else {
                this.setState({ isLoading: false, userLogged: false })
            }
            // console.log(`USER: ${this.state.userLogged} - LOADING: ${this.state.isLoading}`)
        })
    }

    renderApp() {
        console.log(`USER: ${this.state.userLogged} - LOADING: ${this.state.isLoading}`)
        if (!this.state.isLoading && this.state.userLogged)
            return <Redirect to="/controlPanel" />
        else if (!this.state.isLoading && !this.state.userLogged)
            return <Redirect to="/login" />
        return (
            <Loading />
        )
    }

    // {console.log(`USERLOGGED: ${this.state.userLogged}`)}
    render() {
        return (
            <BrowserRouter>
                {
                    this.state.userLogged === undefined
                        ? <Loading />
                        : (
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    render={() => (
                                        this.state.userLogged
                                            ? <Redirect to="/controlPanel" />
                                            : <Login />
                                    )}
                                />
                                <Route
                                    path="/login"
                                    render
                                />
                                <Route path="/controlPanel" component={ControlPanel} />
                            </Switch>
                        )
                }
            </BrowserRouter>
        )
    }
}

App.propTypes = {
    currentUser: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(App)

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../Components/Login'
import ControlPanel from '../Components/ControlPanel'
import Loading from '../Components/Loading'
import App from '../App'
import firebase from '../Components/FirebaseProvider/firebase'
import { currentUser } from '../Actions'


const mapDispatchToProps = (dispatch) => {
    return {
        currentUser: user => dispatch(currentUser(user)),
    }
}

class Routes extends Component {
    state = {
        isLoading: true,
        userLogged: false,
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            console.log('user')
            console.log(firebase.auth().currentUser)
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

    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    component={
                        () => {
                            if (!this.state.isLoading && this.state.userLogged)
                                return <Redirect to="/controlPanel" />
                            else if (!this.state.isLoading && !this.state.userLogged)
                                return <Redirect to="/login" />
                            return (<Loading />)
                        }
                    }
                />
                <Route path="/login" component={Login} />
                <Route
                    exact
                    path="/logout"
                    render={() => {
                        return <Redirect to="/login" />
                    }}
                />
                <Route path="/controlPanel" component={ControlPanel} />
            </Switch>
        )
    }
}

Routes.propTypes = {
    currentUser: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Routes)

import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import SIMDETheme from './Components/styles/SIMDETheme'
import ControlPanel from './Components/ControlPanel'
import Login from './Components/Login'
import firebase from './Components/FirebaseProvider'


class App extends Component {
    state = {
        user: null,
    }

    async componentDidMount() {
        /* firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
            } else {
                this.setState({ user: null })
            }
        }) */
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(SIMDETheme)}>
                {
                    this.state.user
                        ? <ControlPanel />
                        : <Login />
                }
            </MuiThemeProvider>
        )
    }
}

export default App

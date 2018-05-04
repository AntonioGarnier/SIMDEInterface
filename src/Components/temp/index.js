import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import auth from '../FirebaseProvider'
import firebase from '../FirebaseProvider/firebase'


const ManageLoginView = (WrappedControlPanel) => {
    class Login extends Component {
        state = {
            user: null,
        }

        async componentDidMount() {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.setState({ user })
                } else {
                    this.setState({ user: null })
                }
            })
        }

        handleLogin = async () => {
            try {
                const show = await auth.doSignIn()
                console.log(`Logged In: ${show}`)
            } catch (error) {
                console.log(error)
            }
        }

        handleLogOut = async () => {
            try {
                const show = await auth.doSignOut()
                console.log(`Logged Out: ${show}`)
            } catch (error) {
                console.log(error)
            }
        }

        render() {
            return (
                <RaisedButton
                    label="Sign in with Google"
                    icon="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    onClick={this.handleLogin}
                />
            )
        }
    }

    const displayName = WrappedControlPanel.displayName || WrappedControlPanel.name
    Login.displayName = `Login(${displayName})`
    return Login
}

export default ManageLoginView

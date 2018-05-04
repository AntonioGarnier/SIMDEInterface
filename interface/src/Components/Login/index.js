import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import auth from '../FirebaseProvider'
import firebase from '../FirebaseProvider/firebase'
import './style.css'
import CustomButton from '../Elements/CustomButton'


class Login extends Component {
    state = {

    }

    handleLogin = async () => {
        try {
            await auth.signIn()
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        if (firebase.auth().currentUser) return <Redirect to="/" />
        return (
            <div className="loginFull">
                <Paper style={{ borderRadius: '27px' }} zDepth={5} >
                    <div className="loginStyle" >
                        <h1 className="title" >Bienvenido a SIMDE</h1>
                        <h1 className="title">Regístrate con Google utilizando tu cuenta institucional</h1>
                        <CustomButton
                            label="Sign in with Google"
                            backgroundColor="#e34e53"
                            colorText="white"
                            urlIcon="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                            onClick={this.handleLogin}
                        />
                    </div>
                </Paper>
            </div>
        )
    }
}

export default Login

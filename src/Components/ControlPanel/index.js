import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import HeaderControlPanel from '../HeaderControlPanel'
import AdminSideBar from '../Elements/AdminSideBar'
import PersonalData from '../PersonalData'
import firebase from '../FirebaseProvider/firebase'

class ControlPanel extends Component {
    state = {
        sideBarOpen: false,
    }

    handleOnMenuClick = () => {
        this.setState({
            sideBarOpen: !this.state.sideBarOpen,
        })
    }

    render() {
        const contentStyle = {
            transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)',
            marginLeft: '0px',
            padding: '5%',
        }
        if (this.state.sideBarOpen)
            contentStyle.marginLeft = '250px'
        else
            contentStyle.marginLeft = '0px'
        if (!firebase.auth().currentUser) return <Redirect to="/" />
        return (
            <div>
                <HeaderControlPanel
                    handleOnMenuClick={this.handleOnMenuClick}
                />
                <AdminSideBar
                    open={this.state.sideBarOpen}
                    handleOnMenuClick={this.handleOnMenuClick}
                />
                <div style={contentStyle} >
                    <PersonalData />
                </div>
            </div>
        )
    }
}

export default ControlPanel

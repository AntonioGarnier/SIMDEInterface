import React, { Component } from 'react'
import BodyAdminPanel from '../BodyAdminPanel'
import HeaderAdminPanel from '../HeaderAdminPanel'
import AdminSideBar from '../Elements/AdminSideBar'


class ControlPanel extends Component {
    state = {
        user: null,
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
        return (
            <div>
                <HeaderAdminPanel
                    title="SIMDE Admin"
                    userName="Antonio Jesús"
                    url="https://lh3.googleusercontent.com/-oGeIk2IC4EQ/AAAAAAAAAAI/AAAAAAAAAAA/AIcfdXDB-6IcnBFQSeZuDG357ICKl_vqGQ/mo/photo.jpg?sz=46"
                    handleOnMenuClick={this.handleOnMenuClick}
                />
                <AdminSideBar
                    open={this.state.sideBarOpen}
                    handleOnMenuClick={this.handleOnMenuClick}
                />
                <div style={contentStyle} >
                    <p>{console.log(this.state.user)}</p>
                    <button onClick={this.handleLogOut} >Log Out</button>
                    <BodyAdminPanel />
                </div>
            </div>
        )
    }
}

export default ControlPanel

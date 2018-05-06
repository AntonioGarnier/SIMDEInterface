import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeaderControlPanel from '../HeaderControlPanel'
import AdminSideBar from '../Elements/AdminSideBar'


class ControlPanel extends Component {
    static propTypes = {
        children: PropTypes.any.isRequired,
    }

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
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ControlPanel

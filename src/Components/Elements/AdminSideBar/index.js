import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import { Menu, MenuItem } from 'material-ui/Menu'
import Person from 'material-ui/svg-icons/social/person'
import Info from 'material-ui/svg-icons/action/info'
import FormatListBulleted from 'material-ui/svg-icons/editor/format-list-bulleted'
import PlayListAdd from 'material-ui/svg-icons/av/playlist-add'
import './style.css'


const AdminSideBar = (props) => {
    const contentStyle = {
        transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)',
        marginLeft: '0px',
        padding: '5%',
    }

    if (props.open)
        contentStyle.marginLeft = '250px'
    else
        contentStyle.marginLeft = '0px'

    return (
        <Drawer
            open={props.open}
            zDepth={0}
            docked
        >
            <AppBar
                title="Options"
                showMenuIconButton
                onLeftIconButtonClick={props.handleOnMenuClick}
                style={{ height: '64px' }}
            />
            <Menu>
                <NavLink to="/personalData" className="showUnderline">
                    <MenuItem
                        primaryText="Personal Data"
                        leftIcon={<Person />}
                    />
                </NavLink>
                <NavLink to="/problemList" className="showUnderline">
                    <MenuItem
                        primaryText="Problem List"
                        leftIcon={<FormatListBulleted />}
                    />
                </NavLink>
                <NavLink to="/roomList" className="showUnderline">
                    <MenuItem
                        primaryText="Room List"
                        leftIcon={<FormatListBulleted />}
                    />
                </NavLink>
                <NavLink to="/createProblem" className="showUnderline">
                    <MenuItem
                        primaryText="Create Problem"
                        leftIcon={<PlayListAdd />}
                    />
                </NavLink>
                <NavLink to="/createRoom" className="showUnderline">
                    <MenuItem
                        primaryText="Create Room"
                        leftIcon={<PlayListAdd />}
                    />
                </NavLink>
                <NavLink to="/about" className="showUnderline">
                    <MenuItem
                        primaryText="About"
                        leftIcon={<Info />}
                    />
                </NavLink>
            </Menu>
        </Drawer>
    )
}

AdminSideBar.propTypes = {
    open: PropTypes.bool.isRequired,
    handleOnMenuClick: PropTypes.func.isRequired,
}

export default AdminSideBar

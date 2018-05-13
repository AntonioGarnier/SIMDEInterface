import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavLink } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import { Menu, MenuItem } from 'material-ui/Menu'
import Person from 'material-ui/svg-icons/social/person'
import Info from 'material-ui/svg-icons/action/info'
import FormatListBulleted from 'material-ui/svg-icons/editor/format-list-bulleted'
import PlayListAdd from 'material-ui/svg-icons/av/playlist-add'
import { closeSideBar } from '../../../Actions'
import './style.css'


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        closeSideBar,
    }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        toggleSideBar: state.toggleSideBar,
    }
}

const AdminSideBar = (props) => {
    return (
        <Drawer
            open={props.toggleSideBar}
            zDepth={0}
            docked
        >
            <AppBar
                title="Options"
                showMenuIconButton
                onLeftIconButtonClick={props.closeSideBar}
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
    toggleSideBar: PropTypes.bool.isRequired,
    closeSideBar: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminSideBar)


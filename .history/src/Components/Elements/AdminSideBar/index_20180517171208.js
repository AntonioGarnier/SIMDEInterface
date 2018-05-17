import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'
import { NavLink, withRouter } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import { Menu, MenuItem } from 'material-ui/Menu'
import Person from 'material-ui/svg-icons/social/person'
import Info from 'material-ui/svg-icons/action/info'
import FormatListBulleted from 'material-ui/svg-icons/editor/format-list-bulleted'
import PlayListAdd from 'material-ui/svg-icons/av/playlist-add'
import { closeSideBar } from '../../../Actions'
import sideBarElements from './SideBarElements'
import style from './style.css'


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
            <Menu style={{}}
                {
                    sideBarElements
                        .map((element) => {
                            return (
                                <NavLink
                                    to={element.to}
                                    className="showUnderline"
                                    key={element.name}
                                >
                                    <MenuItem
                                        leftIcon={element.leftIcon}
                                    >
                                        {element.name}
                                    </MenuItem>
                                </NavLink>
                            )
                        })
                }
            </Menu>
        </Drawer>
    )
}

AdminSideBar.propTypes = {
    toggleSideBar: PropTypes.bool.isRequired,
    closeSideBar: PropTypes.func.isRequired,
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(AdminSideBar)


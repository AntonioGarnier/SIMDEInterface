import React from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import Person from 'material-ui/svg-icons/social/person'
import Info from 'material-ui/svg-icons/action/info'
import FormatListBulleted from 'material-ui/svg-icons/editor/format-list-bulleted'
import PlayListAdd from 'material-ui/svg-icons/av/playlist-add'


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
            <List>
                <ListItem
                    primaryText="Personal data"
                    leftIcon={<Person />}
                    onClick={() => console.log('Informacion Personal del usuario logeado')}
                />
                <ListItem
                    primaryText="Problem List"
                    leftIcon={<FormatListBulleted />}
                    onClick={() => console.log('Lista de problemas, si no hay problemas, boton a crear problema')}
                />
                <ListItem
                    primaryText="Room List"
                    leftIcon={<FormatListBulleted />}
                    onClick={() => console.log('Lista de salas, si no hay salas, boton a crear sala')}
                />
                <ListItem
                    primaryText="Create Problem"
                    leftIcon={<PlayListAdd />}
                    onClick={() => console.log('Crear problemas')}
                />
                <ListItem
                    primaryText="Create Room"
                    leftIcon={<PlayListAdd />}
                    onClick={() => console.log('Crear salas')}
                />
                <ListItem
                    primaryText="About"
                    leftIcon={<Info />}
                    onClick={() => console.log('Informacion sobre la interfaz')}
                />
            </List>
        </Drawer>
    )
}

AdminSideBar.propTypes = {
    open: PropTypes.bool.isRequired,
    handleOnMenuClick: PropTypes.func.isRequired,
}

export default AdminSideBar

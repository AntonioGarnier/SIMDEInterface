import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import ActionPowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new'
import auth from '../FirebaseProvider'
import { HEADER_BAR_TITLE } from '../../Constants'
import { removeState } from '../../Store/LocalStorage'
import './style.css'


const mapStateToProps = (state) => {
    return {
        user: {
            displayName: state.user.displayName,
            picture: state.user.picture,
        },
    }
}

const handleLogOut = async () => {
    try {
        await auth.signOut()
        removeState()
    } catch (error) {
        console.log(error)
    }
}

const HeaderControlPanel = ({
    user,
    handleOnMenuClick,
}) => {
    return (
        <AppBar
            title={HEADER_BAR_TITLE}
            style={{ position: 'fixed', top: '0px' }}
            showMenuIconButton
            onLeftIconButtonClick={handleOnMenuClick}
            iconElementRight={
                <div style={{ display: 'flex', alignItems: 'center', color: 'white' }} >
                    <Avatar style={{ marginRight: '20px' }} src={user.picture} />
                    {user.displayName}
                    <Link to="/" >
                        <IconButton
                            style={{ marginLeft: '20px' }}
                            onClick={handleLogOut}
                        >
                            <ActionPowerSettingsNew color="white" />
                        </IconButton>
                    </Link>
                </div>
            }
        />
    )
}

HeaderControlPanel.propTypes = {
    user: PropTypes.shape({
        displayName: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    }).isRequired,
    handleOnMenuClick: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(HeaderControlPanel)

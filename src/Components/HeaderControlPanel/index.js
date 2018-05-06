import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import ActionPowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new'
import { HEADER_BAR_TITLE } from '../../Constants'
import { logout } from '../../Actions'
import './style.css'


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        logout,
    }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        user: {
            displayName: state.user.displayName,
            picture: state.user.picture,
        },
    }
}

const HeaderControlPanel = ({
    logout,
    user,
    handleOnMenuClick,
}) => {
    return (
        <AppBar
            title={<Link to="/" className="noFormatText" >{HEADER_BAR_TITLE}</Link>}
            style={{ position: 'fixed', top: '0px' }}
            showMenuIconButton
            onLeftIconButtonClick={handleOnMenuClick}
            iconElementRight={
                <div style={{ display: 'flex', alignItems: 'center', color: 'white' }} >
                    <Avatar style={{ marginRight: '20px' }} src={user.picture} />
                    <IconButton
                        style={{ marginLeft: '20px' }}
                        onClick={logout}
                    >
                        <ActionPowerSettingsNew color="white" />
                    </IconButton>
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
    logout: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderControlPanel)

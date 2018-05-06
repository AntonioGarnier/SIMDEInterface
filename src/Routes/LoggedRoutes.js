import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ControlPanel from '../Components/ControlPanel'
import PersonalData from '../Components/PersonalData'


export default function LoggedRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={ControlPanel} />
            <Route path="/login" render={() => <Redirect to="/" />} />
        </Switch>
    )
}

import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ControlPanel from '../Components/ControlPanel'
import PersonalData from '../Components/PersonalData'


export default function SideNavRoutes() {
    return (
        <Switch>
            <Route path="/personalData" component={PersonalData} />
            <Route path="/problemList" component={ControlPanel} />
            <Route path="/roomList" component={PersonalData} />
            <Route path="/createProblem" component={ControlPanel} />
            <Route path="/createRoom" component={PersonalData} />
            <Route path="/about" component={ControlPanel} />
        </Switch>
    )
}

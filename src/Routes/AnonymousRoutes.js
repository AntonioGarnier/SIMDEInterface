import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../Components/Login'


export default function AnonymousRoutes() {
    return (
        <Switch>
            <Route path="/login" component={Login} exact />
            <Route render={() => <Redirect to="/login" />} />
        </Switch>
    )
}

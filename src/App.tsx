import React from 'react'
import { NativeRouter as Router, Route, Switch } from 'react-router-native'
import App from './view/main/App'
import Login from './view/login'

const RouterList = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={App} />
        </Switch>
    </Router>
)

export default RouterList

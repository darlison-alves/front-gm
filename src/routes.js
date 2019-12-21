import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from './redux/actions/auth'
import { SignConnected } from './pages/SignIn/connected';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => isAuthenticated() ? (<Component {...props} />) : (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)}
        />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignConnected} />
            <PrivateRoute path="/app" component={ () => <h1> APP </h1>} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
)

export { Routes }
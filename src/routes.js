import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from './redux/actions/auth'
import { SignIn } from './pages/SignIn';
import { ProfileConnected } from './Components/Profile/ProfileConnected';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => isAuthenticated() ? (<Component {...props} />) : (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)}
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>            
            <Route exact path="/" component={SignIn} />
            <PrivateRoute path="/app" component={ProfileConnected} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
)

export { Routes }
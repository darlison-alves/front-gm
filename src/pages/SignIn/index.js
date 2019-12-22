import React from 'react';
import { ErrorBoundary } from '../../Components/Error/ErrorBoundary';
import { SignConnected } from './connected';
export function SignIn({ history }) {

    return (
        <ErrorBoundary>
            <SignConnected history={history} />
        </ErrorBoundary>
    )
}
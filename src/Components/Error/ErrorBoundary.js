import React from 'react';
import { ErrorText } from './style';

export class ErrorBoundary extends React.Component {

    constructor() {
        super()
        this.state = {
            hasError: false,
            error: null
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({error})
        console.log('error', error)
        console.log('errorInfo', errorInfo)
    }

    render() {

        return (
            <div>
                { this.state.hasError && (<ErrorText>{this.state.error}</ErrorText>)}
                { this.props.children }
            </div>
        )

    }
}
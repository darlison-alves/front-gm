import React from 'react'
import { Container, Form } from './styles';
import { Loading } from '../Loading';
export function SignInForm({ login, loading_data_user, user = {}, history, error, setError }) {
    const [data, setData] = React.useState({ username: "" })

    React.useEffect(() => {
        if (Object.keys(user).length)
            history.push('/app')
    })

    React.useEffect(() => {
        if (error) {
            setError()
            throw error
        }

    })

    return (
        <Container>
            <Form onSubmit={(e) => {
                e.preventDefault()
                login(data)
            }}>
                <input onBlur={(evt) => setData({ ...data, username: evt.target.value })} type="text" name="username" placeholder="username GITHUB" />
                <AccessButton loading={loading_data_user} />
            </Form>
        </Container>
    )
}

export const AccessButton = ({ loading }) => {
    if (loading) return <button type="submit"> <Loading /> </button>
    return <button type="submit"> ACESSAR </button>
}
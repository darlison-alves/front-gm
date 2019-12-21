import React from 'react';

import { Container, Form } from './styles'

export function SignIn({login}) {
    const [data, setData] = React.useState({ username: "" })
    return (
        <Container>
            <Form onSubmit={(e) => {
                e.preventDefault()
                login(data)
            }}>
                <input onBlur={(evt) => setData({ ...data, username: evt.target.value })} type="text" name="username" placeholder="username GITHUB" />
                <button type="submit"> ACESSAR </button>
            </Form>
        </Container>
    )
}
import { Button, Form } from 'react-bootstrap'

import './Login.css'

function Login() {
    return (
        <>
            <div id='SignIn'></div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Control className='ctrl' type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Control className='ctrl' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="ck mb-3" controlId="formBasicUser">
                    <Form.Check className="text-light" type="checkbox" label="Keep me signed in on this device" />
                </Form.Group>
                <Button className='btn px-5 mb-4' variant="warning" type="submit">
                    Sign In
                </Button>
            </Form>
        </>
    )
}



export default Login
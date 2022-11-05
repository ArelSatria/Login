import { Button, Form } from 'react-bootstrap'

import './Register.css'

function Register() {
    return (
        <>
            <div id='SignUp'></div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Control className='ctrl' type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Control className='ctrl' type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Control className='ctrl' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Control className='ctrl' type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group className="ck mb-3" controlId="formBasicUser">
                    <Form.Check className="text-light" type="checkbox" label="I agree with term & condition" />
                </Form.Group>
                <Button className='btn px-5 mb-4' variant="warning" type="submit">
                    Sign Up
                </Button>
            </Form>
        </>
    )
}



export default Register
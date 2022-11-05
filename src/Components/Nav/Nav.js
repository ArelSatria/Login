import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Mform() {
    return (
        <>
            <Navbar className='text-dark mb-3'>
                <Container>
                    <Nav className="mx-auto">
                        <Link class="nav-link text-light nv" to={'/'}><b>Sign In</b></Link>
                        <Link class="nav-link text-light nv" to={'/SignUp'}><b>Sign Up</b></Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Mform
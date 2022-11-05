import { Container } from 'react-bootstrap'
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Mform from './Components/Nav/Nav'
import SignUp from './Components/Register/Register'
import SignIn from './Components/Login/Login'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container className='ca'>
          <div className='main-form shadow px-5 py-3 me-auto rounded'>
            <Mform />

            <Routes>
              <Route index element={<SignIn />} />
              <Route path="SignUp" element={<SignUp />} />
            </Routes>

          </div>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;

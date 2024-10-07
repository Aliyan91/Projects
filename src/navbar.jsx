import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navber.css";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Menu() {
  return (
    <Navbar expand="lg" className="Navbar bg-white" >
      <Container fluid >
        <Navbar.Brand href="#home" className='brand'><img src="https://www.internee.pk/assets/logo-DKUUqbKl.png" className='img'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className='container'>
            <Nav className="alignment ">
              <Nav.Link href="#home" className='items items1'>Internship</Nav.Link>
              <Nav.Link href="#link" className='items items1'>Company Collaboration</Nav.Link>
              <Nav.Link href="#link" className='items items1'>Contact Us</Nav.Link>
              <Button className='btn btn-success button button1'>Job Portal</Button>
              <Button className='button2 '>Internee's Login</Button>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
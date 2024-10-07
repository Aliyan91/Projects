import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./navber.css";
import { Button } from 'react-bootstrap';

import './accordia.css'
import { useState, useEffect } from 'react';

function InterneeHeader() {
    const [show,setShow]=useState(false);

    useEffect(()=>{
        setShow(true);
    },[]);

  return (
      <Row className='App'>
        <Col className='.text-container'>
          <h1 className='h1'>Looking for dream Internship</h1>
          <h1 className={`slide-in-text ${show ? 'show' : ''}`}>Get a competitive job</h1>
          <br></br>
          <p className='para'>
            Internee.pk kickstart student's tech careers with first
            internships, providing industry exposure, practical
            skills, and networking opportunities, paving the way for
            their success in the tech industry.
          </p>
          <section style={{textAlign:"left"}}>
            <img style={{height:'150x',width:'200px',marginRight:"20px"}} src='https://www.internee.pk/assets/see-B4KGe8oa.png'></img>
            <img style={{height:'80px',width:'80px',marginRight:"20px"}} src='	https://www.internee.pk/assets/nic-DRZpfK9-.png'></img>
            <img style={{height:'59px',width:'100px'}} src='	https://www.internee.pk/assets/pitb-BxRSQRWU.png'></img>
          </section>
          <section className='sec'>
            <Button style={{marginRight:'60px'}}
            className='btn btn-success button button1'>Job Portal</Button>
            <Button className='button2 '>Internee's Login</Button>
          </section>
        </Col>
        <Col>
        <img style={{height:'670px',width:'670px'}}
        src='https://www.internee.pk/assets/hero-DtZd5n8h.webp'></img>
        </Col>
      </Row>
  );
}

export default InterneeHeader;
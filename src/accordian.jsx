import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        </Col>
        <Col>2 of 2</Col>
      </Row>
  );
}

export default InterneeHeader;
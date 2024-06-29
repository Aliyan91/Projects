import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './accordia.css'

function InterneeHeader() {
  return (
      <Row>
        <Col>
            <h1 className='h1'>Looking for dream Internship</h1>
            <h1 className='h1 .shadow-transition-text '>Gives handson experience</h1>
        </Col>
        <Col>2 of 2</Col>
      </Row>
  );
}

export default InterneeHeader;
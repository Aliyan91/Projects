import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './navbar';
import InterneeHeader from './accordian';
import { Container } from 'react-bootstrap';
import "./App.css"
import Sectiom from './sectiom';


function App() {
  return (
    <Container fluid className='Container'>
      <Menu></Menu>
      <InterneeHeader></InterneeHeader>
      <Sectiom></Sectiom>
    </Container>
  );
}

export default App;

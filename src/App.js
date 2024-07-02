import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './navbar';
import InterneeHeader from './accordian';
import { Container } from 'react-bootstrap';
import "./App.css"


function App() {
  return (
    <Container fluid className='Container'>
      <Menu></Menu>
      <InterneeHeader></InterneeHeader>
    </Container>
  );
}

export default App;

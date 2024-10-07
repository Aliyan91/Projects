import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './sectiom.css'

export default function Sectiom(){
    return(
        <Container className='sectiom'>
            <div>
                <img className="image"src='	https://www.internee.pk/assets/icon-BT8woF2N.jpg'></img>
            </div>
            <br />
            <div>
                <h1 style={{fontSize:"48px",fontWeight:"bold",margin:"20px"}}>What is Interne.pk?</h1>
            </div>
            <br />
            <div>
                <p  style={{lineHeight:"160%",opacity:"0.8",fontSize:'20px'}}>
                    
                  The ultimate platform designed to turbocharge the IT sector
                  in Pakistan! We recognize the immense potential of talented
                  individuals in the country and aim to bridge the gap between
                  them and the thriving IT industry. Internee.pk offers a
                  comprehensive range of virtual internship opportunities
                  exclusively in the IT field.
                
                </p>
            </div>
        </Container>
    );
}
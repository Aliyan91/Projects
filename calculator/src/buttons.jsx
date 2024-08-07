import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './buttons.modules.css';
import { useState } from "react";


export default function CalButtons(props) {

    const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/','=','C','.'];

    const [calval,newcalval]=useState("");
    function handleclick(event)
    {
        const Displayval=calval + event.target.innerText;
        if(event.target.innerText==='C')
        {
            newcalval("");
        }
        else if(event.target.innerText==='='){
            const result = eval(calval);
            newcalval(result);
        }
        else{
            newcalval(Displayval);
        }
    }

    return (
        <div className="position-relative">
            <Card className="position-relative top-0 start-50 translate-middle-x text-center" style={{ width: '250px' }}>
                <Card.Header><h4>Calculator</h4></Card.Header>
                <Card.Body>
                    <input type="text" style={{width:'100%'}} value={calval} readOnly></input>
                    {digits.map(item => <button className='m-1' style={{width:'50px',height:'50px'}} onClick={handleclick}>{item}</button>)}
                </Card.Body>
            </Card>
        </div>
    )
};
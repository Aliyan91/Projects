import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function RegistrationForm() {
    const [Name, newName] = useState({ value: "", isValid: undefined, helpMessage: "Min 3 characters required", helpCSS: "text-muted" });
    const [Email, newEmail] = useState({ value: "", isValid: undefined, helpMessage: "Enter an Email", helpCSS: "text-muted" });
    const [password, newPassword] = useState({ value: "", isValid: undefined, helpMessage: "Min 8 characters required", helpCSS: "text-muted" });
    const [checked, newchecked] = useState({ helpCSS: "disabled" });

    function validateName(e) {
        const temp = e.target.value;
        if (temp.length > 3) {
            newName({
                value: temp,
                isValid: true,
                helpMessage: "Name is Valid",
                helpCSS: "text-success"
            })
        }
        else {
            newName({
                value: temp,
                isValid: false,
                helpMessage: "Enter Valid Name",
                helpCSS: "text-danger"
            })
        }
    }
    function validatePassword(e) {
        const temp = e.target.value;
        if (temp.length >= 8) {
            newPassword({
                value: temp,
                isValid: true,
                helpMessage: "Password meets the requirement",
                helpCSS: "text-success"
            })
        }
        else {
            newPassword({
                value: temp,
                isValid: false,
                helpMessage: "Password Does'nt meets the requirements",
                helpCSS: "text-danger"
            })
        }
    }
    function validateEmail(e) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const temp = e.target.value;
        if (emailRegex.test(temp)) {
            newEmail({
                value: temp,
                isValid: true,
                helpMessage: "Email is Valid",
                helpCSS: "text-success"
            })
        }
        else {
            newEmail({
                value: temp,
                isValid: false,
                helpMessage: "Email is not Valid",
                helpCSS: "text-danger"
            })
        }
    }
    function buttondisable() {
        if ((Name.isValid && password.isValid && Email.isValid)) {
            newchecked({
                helpCSS: "disaled"
            })
        }
        else {
            newchecked({
                helpCSS: "enabled"
            })
        }
    }

    function submission() {
        if (Name.isValid && password.isValid && Email.isValid) {
            alert("Login SuccessFull");
        }
        else {
            alert("Login Failed");
        }

    }

    return (
        <>
            <div className='position-relative'>
                <Card style={{ width: '500px' }} className='position-relative top-0 start-50 translate-middle-x' >
                    <Card.Header style={{}}>Login Form</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="Name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Name" onBlur={validateName} />
                                <Form.Text className={Name.helpCSS}>{Name.helpMessage}</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Email" onBlur={validateEmail} />
                                <Form.Text className={Email.helpCSS}>{Email.helpMessage}</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' onBlur={validatePassword} onMouseOut={buttondisable} />
                                <Form.Text className={password.helpCSS}>{password.helpMessage}</Form.Text>
                            </Form.Group>
                            <Button variant="primary" className={checked.helpCSS} onClick={submission}>Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
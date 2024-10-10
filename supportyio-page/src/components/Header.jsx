import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { useState } from "react";

export default function Headerbuttons() {

    const [selected, setselected] = useState("Template");

    return (
        <div className="container d-flex gap-2 justify-content-center py-5">
            <div className="responsive">
                <button className={`button2 rounded-pill px-3 m-2 ${selected === 'Template' && "selected"}`} onClick={() => setselected("Template")}>All Templates</button>
                <button className={`button2 rounded-pill px-3  m-2 ${selected === 'Education' && "selected"}`} type="button" onClick={() => setselected("Education")}>Education</button>
                <button className={`button2 rounded-pill px-3  m-2 ${selected === 'Support' && "selected"}`} type="button" onClick={() => setselected("Support")}>Support</button>
                <button className={`button2 rounded-pill px-3  m-2 ${selected === 'Email' && "selected"}`} type="button" onClick={() => setselected("Email")}>Email</button>
                <button className={`button2 rounded-pill px-3  m-2 ${selected === 'Language' && "selected"}`} type="button" onClick={() => setselected("Language")}>Language</button>
                <button className={`button2 rounded-pill px-3  m-2 ${selected === 'Writing Content' && "selected"}`} type="button" onClick={() => setselected("Writing Content")}>Writing Content</button>
                <button className={`button2 rounded-pill px-3  m-2 ${selected === 'Other' && "selected"}`} type="button" onClick={() => setselected("Other")}>Other</button>
                <button className={`button2 rounded-pill px-3  m-2 ${selected === 'Favourites' && "selected"}`} type="button" onClick={() => setselected("Favourites")}>Favourites</button>
            </div>
        </div>
    )
};

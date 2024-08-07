import 'bootstrap/dist/css/bootstrap.min.css';
import { MdDelete } from "react-icons/md";
import { useState } from 'react';

export default function Todoitem1({todoDate,todoName,deleteitem}){

    return(
    <div className="container text-center">
        <div className="row">
            <div className="col-6 fs-2 text-start" style={{paddingLeft:"0px"}}>
                {todoName}
            </div>
            <div className="col-4 fs-2 text-start">
                {todoDate}
            </div>
            <div className="col-2">
                <button type="button"  className="btn btn-danger" onClick={deleteitem(todoName)}><MdDelete/></button>
            </div>
        </div>
    </div>
    );
}
import { useEffect, useRef } from "react";
import "./Addtodo.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdAdd } from "react-icons/io";
import { Todoitemcontext } from "./store/todoitems-store";

export default function Addtodo({addItem}){

    const todoNameElement=useRef();
    const TodoDateElement=useRef();

    function handleaddbutton(){
        const todoName=todoNameElement.current.value;
        const todoDate=TodoDateElement.current.value;
        todoNameElement.current.value='';
        TodoDateElement.current.value='';
        addItem(todoName,todoDate);
       
    }

    const mystyle ={
        width:"70px",
        margin:"0px 5px 5px -15px"
    }
    return(
        <div className="container text-center">
            <div className="row">
                <div className="col-6">
                    <input type="text" placeholder="Enter Todo" ref={todoNameElement}>
                    </input>
                </div>
                <div className="col-4">
                    <input type="date" ref={TodoDateElement}></input>
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success kg-button" onClick={handleaddbutton} style={mystyle}><IoMdAdd/></button>
                </div>
            </div>
        </div>
    );
}
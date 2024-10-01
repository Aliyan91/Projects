import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { useRef } from "react";

export default function Counter() {

    const value=useSelector(store=>store.counter);
    const dispatch=useDispatch();
    const Add=useRef();

    function increment(){
        dispatch({type:"Increment"});
    }

    function deccrement(){
        dispatch({type:"Decrement"});
    }

    function handleAdd(){
        dispatch({type:"Add",
            payload:{
                num:Add.current.value,
            },
        });
        Add.current.value=0;
    }
    
    function handleminus(){
        dispatch({type:"Minus",
            payload:{
                num:Add.current.value,
            },
        });
        Add.current.value=0;
    }

    return (
       <>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">Counter current value :{value}</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" class="btn btn-primary btn-lg px-4 gap-3" onClick={increment}>Add</button>
                        <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={deccrement}>Subtract</button>
                    </div>
            </div>
            <div class="col-lg-6 mx-auto my-3">
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <input className="input" type="number" ref={Add}></input>
                        <button type="button" class="btn btn-primary px-4" onClick={handleAdd}>Add</button>
                        <button type="button" class="btn btn-outline-secondary px-4" onClick={handleminus}>Subtract</button>
                    </div>
            </div>
        </>

    )
};
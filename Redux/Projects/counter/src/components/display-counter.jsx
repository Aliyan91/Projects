import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {

    const value=useSelector(store=>store.counter);
    const dispatch=useDispatch();

    function increment(){
        dispatch({type:"Increment"});
    }

    function deccrement(){
        dispatch({type:"Decrement"});
    }
    

    return (
       
        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Counter current value :{value}</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" class="btn btn-primary btn-lg px-4 gap-3" onClick={increment}>Add</button>
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={deccrement}>Subtract</button>
                </div>
        </div>

    )
};
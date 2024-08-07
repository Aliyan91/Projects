import 'bootstrap/dist/css/bootstrap.min.css';
import { MdDelete } from "react-icons/md";
export default function Todoitem1(props){
    return(
    <div className="container text-center">
        <div className="row">
            <div className="col-6 fs-2 text-start" style={{paddingLeft:"0px"}}>
                {props.todoName}
            </div>
            <div className="col-4 fs-2 text-start">
                {props.todoDate}
            </div>
            <div className="col-2">
                <button type="button"  className="btn btn-danger" onClick={()=>props.onDeleteClick(props.todoName)}><MdDelete/></button>
            </div>
        </div>
    </div>
    );
}
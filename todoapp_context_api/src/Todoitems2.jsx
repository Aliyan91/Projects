import 'bootstrap/dist/css/bootstrap.min.css';
import Todoitem1 from './Todoitem1';
import { Todoitemcontext } from './store/todoitems-store';
import { useContext } from 'react';
export default function Todoitem2({items,deletetodo}){
    return(
    <div className="container">
        {items.map(i=>(
        <Todoitem1 
            todoDate={i.date} 
            todoName={i.name} 
            deleteitem={deletetodo}
            key={i.name}>
        </Todoitem1>))}
    </div>
    );
}
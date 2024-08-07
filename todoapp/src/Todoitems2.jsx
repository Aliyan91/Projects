import 'bootstrap/dist/css/bootstrap.min.css';
import Todoitem1 from './Todoitem1';
import { todoitemsContext } from './todoitems-stor';
import { useContext } from 'react';
export default function Todoitem2(){


    const tdfc =useContext(todoitemsContext);
    const items=tdfc.items;
    const onClick=tdfc.deleteitem;
    return(
    <div className="container">
        {items.map(i=>(
        <Todoitem1 
            todoDate={i.date} 
            todoName={i.name} 
            onDeleteClick={onClick}>
            key={i.name}
        </Todoitem1>))}
    </div>
    );
}
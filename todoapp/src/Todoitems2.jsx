import 'bootstrap/dist/css/bootstrap.min.css';
import Todoitem1 from './Todoitem1';
export default function Todoitem2({items,onClick}){
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
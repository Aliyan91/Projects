import Todoitem2 from './Todoitems2';
import './App.css';
import Appame from './AppName';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addtodo from './Addtodo';
import { useReducer, useState } from 'react';
import WelcomeMessage from './WelcomeMessage';

const todoitemreducer =(currentTodo,action)=>{
  console.log(`Name:${action.payload.itemname} Date:${action.payload.itemdate}`)

  let redTodoItem=currentTodo;
  if (action.type==="NEW_ITEM"){
    redTodoItem=[...currentTodo,{name:action.payload.itemname,date:action.payload.itemdate}];
  }
  else if(action.type==="DELETE_ITEM"){
    redTodoItem=currentTodo.filter(item => item.name !== action.payload.itemname);
  }
  return redTodoItem;
}

function App() {
  const data=[
   
  ];

  //const [todoitem,newtodoitem]=useState([]);
  
  return (
    <div className="cotainer text-center">
      <Appame></Appame>
      <Addtodo onNewItem={NewItem}></Addtodo>
      {todoitem.length===0 && <WelcomeMessage></WelcomeMessage>}
      <Todoitem2 items={todoitem} onClick={handledelete}></Todoitem2>
    </div>
  );
}

export default App;

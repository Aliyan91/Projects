import Todoitem2 from './Todoitems2';
import './App.css';
import Appame from './AppName';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addtodo from './Addtodo';
import { useState } from 'react';
import WelcomeMessage from './WelcomeMessage';

function App() {

  const [todoitem,newtodoitem]=useState([]);

  function addNewItem(itemname,itemdate){
    console.log(`Name:${itemname} Date:${itemdate}`)
    if(itemname.length>0 && itemdate.length>0){
      const newdata=[...todoitem,{name:itemname,date:itemdate}];
      newtodoitem(newdata);
    }
    
  };
  
  function deleteitem(todoitemname){
    const newitems=todoitem.filter(item => item.name !== todoitemname);
    newtodoitem(newitems);
  }
  

  return (
      <div className="cotainer text-center">
        <Appame></Appame>
        <Addtodo addItem={addNewItem}></Addtodo>
        <WelcomeMessage todoitems={todoitem}></WelcomeMessage>
        <Todoitem2 deletetodo={deleteitem} items={todoitem}></Todoitem2>
      </div>
  );
}

export default App;

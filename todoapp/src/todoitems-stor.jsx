import { createContext } from "react";
import { useReducer } from "react";

export const todoitemsContext=createContext({

});

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
};

const TodoitemsContextProvider = ({children}) =>{
  const [todoitem ,dispatch] = useReducer(todoitemreducer,[]);

  function NewItem(itemname,itemdate){
    if(itemname.length>0 && itemdate.length>0){
      const newItemAction={
         
        type:"NEW_ITEM",
        payload:{
          itemname,
          itemdate
        }
      };
      dispatch(newItemAction);
      /*const newdata=[...todoitem,{name:itemname,date:itemdate}];
      newtodoitem(newdata);*/
    }
    
  }
  function handledelete(todoitemname){
    const delItemAction={
      type:"DELETE_ITEM",
      payload:{
        itemname:todoitemname,
      }
    };
    dispatch(delItemAction);
    /*const newitems=todoitem.filter(item => item.name !== todoitemname);
    newtodoitem(newitems);*/
  };
  return (
    <todoitemsContext.Provider value={{
      items:todoitem,
      addnewitems: NewItem,
      deleteitem:handledelete,
    }}>
      {children}
    </todoitemsContext.Provider>
  );
};
export default TodoitemsContextProvider;

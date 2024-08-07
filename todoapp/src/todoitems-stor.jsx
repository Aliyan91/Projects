import { createContext } from "react";

export default function todoitemsContextProvider(){
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
  }

}

import { createContext } from "react";

export const Todoitemcontext = createContext({
    todoItem:[],
    addNewItem:()=>{},
    deleteItem:()=>{}
});

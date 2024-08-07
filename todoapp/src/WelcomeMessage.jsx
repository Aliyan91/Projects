import { useContext } from "react"
import { todoitemsContext } from "./todoitems-stor"


export default function WelcomeMessage(){

    const contextObj = useContext(todoitemsContext);
    const todoitem=contextObj.items;

    return todoitem.length===0 && <h3>Enjoy Your Day</h3>
    
}
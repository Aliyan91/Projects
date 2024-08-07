import { useContext } from "react";
import { Todoitemcontext } from "./store/todoitems-store";
export default function WelcomeMessage({todoitems}){
    return(
        todoitems.length===0  && <h3>Enjoy Your Day</h3>
    )
}
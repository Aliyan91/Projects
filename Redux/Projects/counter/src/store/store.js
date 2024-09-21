import {createStore} from "redux";

const Initial_Value={
    counter:0
}

const counterReducer=(store=Initial_Value,action)=>{
    if(action.type==="Increment"){
        return {counter:store.counter+1};
    }
    else if(action.type==="Decrement"){
        return {counter:store.counter-1};
    }
    return store;
}

const counterStore=createStore(counterReducer);

export default counterStore;


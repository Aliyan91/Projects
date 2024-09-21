const redux=require('redux');

const initial={
    counter:0
};

const Reducer = (store=initial,action)=>{
    let newStore=store;
    if(action.type==="Increment"){
        return {counter:store.counter+1};
    }
    return newStore;
}
const store =redux.createStore(Reducer);

const subscriber = () =>{
    const state=store.getState();
    console.log(state);
}
store.subscribe(subscriber);

store.dispatch({type:"Increment"});
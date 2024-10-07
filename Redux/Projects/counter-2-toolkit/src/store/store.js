import {configureStore,  createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({
    name:"Counter",
    initialState:{counterVal: 0},
    reducers:{
        increment:(state)=>{
            state.counterVal++;
        },
        decrement:(state)=>{
            state.counterVal--;

        },
        add:(state,action)=>{
            state.counterVal += Number(action.payload);
        },
        minus:(state,action)=>{
            state.counterVal -= Number(action.payload);

        }
    },
});

const privacySlice=createSlice({
    name:"privacy",
    initialState:false,
    reducers:{
        toogle:(state)=>{
            return state=!state;
        }
    }
})



const counterStore=configureStore({reducer:{
    Counter:counterSlice.reducer,
    privacy:privacySlice.reducer,
}});

export const privacyActions=privacySlice.actions;
export const counterActions=counterSlice.actions;
export default counterStore;

// const Initial_Value={
//     counter:0
// }
// const counterReducer=(store=Initial_Value,action)=>{
//     if(action.type==="Increment"){
//         return {counter:store.counter+1};
//     }
//     else if(action.type==="Decrement"){
//         return {counter:store.counter-1};
//     }
//     else if(action.type==="Add"){
//         return {counter: store.counter + Number(action.payload.num)};
//     }
//     else if(action.type==="Minus"){
//         return {counter: store.counter - Number(action.payload.num)};
//     }
//     return store;
// }
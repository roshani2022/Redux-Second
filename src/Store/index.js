
import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialState =  { counter: 0, showCounter:true }

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increase(state){
            state.counter++
        },
        increment(state,action) {
            state.counter = state.counter + action.payload
        },
        decrement(state,action) {
            state.counter = state.counter - action.payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
})


const store = configureStore({
    reducer:counterSlice.reducer
});

export const counterAction = counterSlice.actions

export default store;

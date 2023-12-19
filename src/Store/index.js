
import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialCounterState =  { counter: 0, showCounter:true }
const initialAuthenticationState = {isAuthenticated:false}

const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
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

const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthenticationState,
    reducers:{
      login(state){
         state.isAuthenticated=true
      },
      logout(state){
        state.isAuthenticated=false
      }
    }
})


const store = configureStore({
    reducer:{counter:counterSlice.reducer,auth:authSlice.reducer}
});

export const counterAction = counterSlice.actions
export const authAction = authSlice.actions

export default store;

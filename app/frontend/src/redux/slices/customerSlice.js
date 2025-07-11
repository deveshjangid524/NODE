import {createSlice} from '@reduxjs/toolkit'

const initialState  = {
    orderId:"",
    customerName:"",
    customerPhone:"",
    guests:0,
    table:null
}

const customerSlice = createSlice({
    name:"Customer",
    initialState,
    reducers:{
        setCustomer:(state,action) =>{
            const {name,phone,guests} = action.payload;
            state.orderId = Math.random().toString(36).substring(2, 6).toUpperCase();

            state.customerName = name;
            state.customerPhone = phone;
            state.guests = guests;
        },

        removeCustomer: (state) => {
            state.customerName = "",
            state.customerPhone = "",
            state.guests = 0,
            state.table = null,
            state.orderId=""
        },

        updateTable : (state,action) => {
            state.table = action.payload.table;
        }
    }
})

export const {setCustomer, removeCustomer , updateTable} = customerSlice.actions;

export default customerSlice.reducer;
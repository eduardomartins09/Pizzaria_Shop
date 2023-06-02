import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        data: [], 
    },
    reducers: {
        setFilterData(state, action) {        
            state.data = action.payload   
        }
    }
})

export const { setFilterData } = filterSlice.actions
export default filterSlice.reducer
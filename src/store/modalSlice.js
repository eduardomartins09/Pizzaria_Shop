import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    let dataProduct = localStorage.getItem('dataProduct');
    
    if(dataProduct){
        return JSON.parse(localStorage.getItem('dataProduct'))
    } else {
        return [];
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('dataProduct', JSON.stringify(data))
}

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        data: fetchFromLocalStorage(), 
    },
    reducers: {
        setModalData(state, action) {
            state.data = action.payload    
            storeInLocalStorage(state.data)       
        }
    }
})

export const { setModalData } = modalSlice.actions
export default modalSlice.reducer
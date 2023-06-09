import { createSlice } from "@reduxjs/toolkit";
import { goToTheTop } from "../helper/util";

const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    
    if(cart){
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return [];
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data))
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: fetchFromLocalStorage(), 
        totalItems: 0,
        totalAmount: 0,
        deliveryCharge: 10.00
    },
    reducers: {
        addToCart(state, action) {           
            const tempItem = state.data.find(item => item.id === action.payload.id && item.idB === action.payload.idB);           
            
            if(tempItem){          
                const tempCart = state.data.map(item => {
                    
                    if(item.id === action.payload.id && item.idB === action.payload.idB){                       
                        let newQty = item.quantity + action.payload.quantity;
                        let newTotalPrice = newQty * item.preco;
                        return { ...item, quantity: newQty, totalPrice: newTotalPrice };
                    } else {
                        return { ...item};
                    }
                });
                state.data = tempCart;               
                storeInLocalStorage(state.data);
            } else {             
                state.data.push(action.payload);
                storeInLocalStorage(state.data);             
            }
        },
        toggleCartQty(state, action){
            const tempCart = state.data.map(item => {
                if(item.id === action.payload.id){
                    let tempQty = item.quantity;
                    let tempTotalPrice = item.totalPrice;

                    if(action.payload.type === "INC"){
                        tempQty++;
                        tempTotalPrice = item.segundoSabor !== "" ? (tempQty * (Number(item.preco) + Number(item.segundoSabor.precoS))) / 2 : tempQty * item.preco                                            
                    }

                    if(action.payload.type === "DEC"){
                        tempQty--;
                        if(tempQty < 1) tempQty = 1;
                        tempTotalPrice = item.segundoSabor !== "" ? (tempQty * (Number(item.preco) + Number(item.segundoSabor.precoS))) / 2 : tempQty * item.preco
                    }

                    return {...item, quantity: tempQty, totalPrice: tempTotalPrice};
                } else {
                    return item;
                }
            });
            state.data = tempCart;
            storeInLocalStorage(state.data);
        },
        clearCart(state){
            state.data = [];
            storeInLocalStorage(state.data);
            goToTheTop()
        },
        getCartTotal(state){
            state.totalAmount = state.data.reduce((cartTotal, cartItem) => {
                return cartTotal += cartItem.totalPrice;
            }, 0);
            state.totalItems = state.data.length;
        },
        removeFromCart(state, action){           
            const tempCart = state.data.filter(item => item.id !== action.payload);          
            state.data = tempCart;
            storeInLocalStorage(state.data);
        }
    }
})

export const { addToCart, toggleCartQty, getCartTotal, clearCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
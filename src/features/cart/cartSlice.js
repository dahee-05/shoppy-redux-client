import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartList : [],
  cartCount : 0 ,
  totalPrice : 0,
  isAdded : false
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartCount(state, action){
      state.cartCount = action.payload.resultCount;
    },
    clearCartCount(state){
      state.cartCount = 0;
    },
    setCartList(state, action){
      console.log('cartList확인', action.payload.result);
      state.cartList = action.payload.result; // {result:[cartList...]}
    },
    cartListReset(state){
      state.cartList = [];
    },
    setTotalPrice(state, action){
      const list = action.payload.result;
      state.totalPrice = list.reduce((sum, item) => sum + item.price * item.qty, 0);
    }, 
    setIsAdded(state, action){
      if(action.payload.result_rows){ state.isAdded = true;}  
    },
    setIsAddedReset(state){
      state.isAdded = false;
    }
  },
})


// Action creators are generated for each case reducer function
export const { setCartCount, clearCartCount, setCartList, cartListReset, setTotalPrice, setIsAdded, setIsAddedReset } = cartSlice.actions

export default cartSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn : false,
  isError : false,
}


export const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // 로그인 처리에 필요한 함수 , state:자기자신이 갖고 있는 변수에 접근, action: 외부에서의 넘어오는 파라미터 값
      setIsLoggedIn(state, action){
        console.log('action >> ', action.payload.result_rows);
        if(action.payload.result_rows){
          state.isLoggedIn = true;
        }else{
          state.isError = true;
        }
    },
    setIsLogout(state){
      state.isLoggedIn= false;
    },
    setLoginReset(state){
      state.isError = false;
    }
    
  },
})



// Action creators are generated for each case reducer function
export const { setIsLoggedIn, setIsLogout, setLoginReset } = authSlice.actions

export default authSlice.reducer
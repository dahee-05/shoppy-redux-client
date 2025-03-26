import { setIsLoggedIn, setIsLogout, setLoginReset } from "../features/auth/authSlice.js";
import { axiosPost } from "./api.js";

export const getLogin = (formData) => async(dispatch) =>{
    const url = `http://3.35.233.94:9000/member/login`;
    const data = formData;  
    
    const loginResult = await axiosPost({url, data});
    const result_rows = loginResult.result_rows;

    if(result_rows){
        localStorage.setItem("token", loginResult.token);
        localStorage.setItem("user_id", formData.id);                        
        dispatch(setIsLoggedIn({result_rows})); // 1: 리듀서(슬라이스)의 함수 호출 
    }else{
        dispatch(setIsLoggedIn({result_rows})); // 0 :리듀서(슬라이스)의 함수 호출 
    }
};


export const getLogout = () => (dispatch) =>{
    // localStorage.removeItem("token");
    // localStorage.removeItem("user_id");
    localStorage.clear(); // 로컬스토리지 전체 삭제
    dispatch(setIsLogout(false));
};


export const getLoginReset = () => (dispatch)=> {
    dispatch(setLoginReset());
}
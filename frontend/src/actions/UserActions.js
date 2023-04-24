import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/UserContants"
import axios from "axios"
 export const login=(email,password)=>async(dispatch)=>{
    try{
        dispatch({type:USER_LOGIN_REQUEST})
        const config={
          headers:{
            "Content-type":"application/json"
          }
        }
        // setLoading(true)
        const {data}=await axios.post('http://localhost:5000/api/users/login',{email,password},config)
        console.log(data)
        dispatch({type:USER_LOGIN_SUCCESS,payload:data})
        localStorage.setItem('userInfo',JSON.stringify(data))
      }
      catch(error){
            dispatch({
                type:USER_LOGIN_FAIL,
                payload:
                error.response && error.response.data.message
                ?error.response.data.message
                :error.message,
            })
   
      }
 }
 export const logout=()=>async(dispatch)=>{
  localStorage.removeItem('userInfo')
  dispatch({type:USER_LOGOUT})
 }
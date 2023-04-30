import axios from "axios";
export const listNotes=()=>async(dispatch,getState)=>{
    try{
        dispatch({
            type:'NOTE_LIST_REQUEST'
        })
        // getstate will provide the current state of userInfo in userLogin  
        const {
            userLogin:{userInfo}
        }=getState()
            const config={
                headers:{
                    Authorization:`Bearer ${userInfo.token}`
                }
            }
            const {data}=await axios.get('http://localhost:5000/api/notes',config) 
            console.log(data)
            dispatch({
                type:'NOTE_LIST_SUCCESS',
                payload:data,
            })
    }
    catch(error){
            const message=error.response && error.response.data.message
            ?error.response.data.message
            :error.message
            dispatch({
                type:'NOT_LIST_FAIL',
                payload:message
            })
    }
}
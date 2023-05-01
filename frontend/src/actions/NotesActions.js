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
            // console.log(data)
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
                type:'NOTE_LIST_FAIL',
                payload:message
            })
    }
}

export const createNotes=(title,content,category)=>async(dispatch,getState)=>{
    try{
        dispatch({
            type:'NOTE_CREATE_REQUEST',
        })
        // getstate will provide the current state of userInfo in userLogin  
        const {
            userLogin:{userInfo}
        }=getState()
            const config={
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${userInfo.token}`
                }
            }
            const {data}=await axios.post('http://localhost:5000/api/notes/create',{title,content,category},config) 
            // console.log(data)
            dispatch({
                type:'NOTE_CREATE_SUCCESS',
                payload:data,
            })
    }
    catch(error){
            const message=error.response && error.response.data.message
            ?error.response.data.message
            :error.message
            dispatch({
                type:'NOTE_CREATE_FAIL',
                payload:message
            })
    }
}

export const updateNotes=(id,title,content,category)=>async(dispatch,getState)=>{
    try{
        dispatch({
            type:'NOTE_UPDATE_REQUEST',
        })
        // getstate will provide the current state of userInfo in userLogin  
        const {
            userLogin:{userInfo}
        }=getState()
            const config={
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${userInfo.token}`
                }
            }
            const {data}=await axios.put(`http://localhost:5000/api/notes/${id}`,{title,content,category},config) 
            // console.log(data)
            dispatch({
                type:'NOTE_UPDATE_SUCCESS',
                payload:data,
            })
    }
    catch(error){
            const message=error.response && error.response.data.message
            ?error.response.data.message
            :error.message
            dispatch({
                type:'NOTE_UPDATE_FAIL',
                payload:message
            })
    }
}

export const deleteNotes=(id)=>async(dispatch,getState)=>{
    try{
        dispatch({
            type:'NOTE_DELETE_REQUEST',
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
            const {data}=await axios.delete(`http://localhost:5000/api/notes/${id}`,config) 
            // console.log(data)
            dispatch({
                type:'NOTE_DELETE_SUCCESS',
                payload:data,
            })
    }
    catch(error){
            const message=error.response && error.response.data.message
            ?error.response.data.message
            :error.message
            dispatch({
                type:'NOTE_DELETE_FAIL',
                payload:message
            })
    }
}

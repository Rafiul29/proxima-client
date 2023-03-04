import { useState } from "react";
import {useAuthContext} from './useAuthContext'

export const useLogin=()=>{
    const [error,setError]=useState(null)
    const [loading,setLoding]=useState(false)

    const {dispatch}=useAuthContext();

    const login=async(email,password)=>{
        setLoding(true)
        setError(null)
        const res=await fetch(`${process.env.REACT_APP_BASE_URL}/api/user/login`,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({email,password})
        })
        const json =await res.json()
        //res.ok ===false
        if(!res.ok){
            setLoding(false)
            setError(json.error)
        }
        //res.ok ===true
        if(res.ok){
            //update auth context
            dispatch({type:"LOGIN", payload:json});
            //save user to local storage
            localStorage.setItem("user",JSON.stringify(json))
            setLoding(false)
        }
        
    }
    return {login ,error,loading}
}
import { useState } from "react";
import {useAuthContext} from './useAuthContext'

export const useSignup=()=>{
    const [error,setError]=useState(null)
    const [loading,setLoding]=useState(false)

    const {dispatch}=useAuthContext();

    const signup=async(email,password)=>{
        setLoding(true)
        setError(null)
        const res=await fetch("http://localhost:8000/api/user/signup",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({email,password})
        })
        const json =await res.json()
        console.log(json)
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
    return {signup ,error,loading}
}
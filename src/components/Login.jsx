
import React, { useState, useEffect } from "react";
import { UserAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";


const Login = ()=>{

    const {googleSignIn, user} = UserAuth();
    const navigate = useNavigate()
    const handleGoogleSignIn = async ()=>{
        try {
          await googleSignIn()
        
          console.log("test")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(user != null){
            navigate('./components/application/Routing')
        }
    }, [user])
    


return(
        
            <div>
                <img src="/src/assets/app_logo.png" alt="app logo" className="relative h-[100px] mx-auto top-[20vh]"/>
                
                
                <div className="loginbox relative flex flex-col items-center rounded-lg justify-center top-[20vh] mx-5 h-auto p-3">
                    <h2 className="font-title font-semibold text-[20px] p-3 text-lightbox">LOGIN</h2>
                <form className="flex flex-col items-center" >

                    <button type="button" onClick={handleGoogleSignIn} className="bg-black rounded-lg placehol p-2 h-10 w-[100%] mt-2 text-lightbox">Sign-in with Google</button>
                </form>
                </div>
 
            </div>
        
)
}

export default Login;
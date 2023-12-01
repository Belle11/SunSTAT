
import { auth } from "../firebase"
import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../firebase";
export const Auth = () => {

const signInWithGoogle = async () =>{
    try{
        await signInWithPopup(auth, googleProvider);
    }catch(err){
        console.error(err);
    }
};
return(
        
            <div>
                <img src="/src/assets/app_logo.png" alt="app logo" className="relative h-[100px] mx-auto top-[20vh]"/>
                
                
                <div className="loginbox relative flex flex-col items-center rounded-lg justify-center top-[20vh] mx-5 h-auto p-3">
                    <h2 className="font-title font-semibold text-[20px] p-3 text-lightbox">LOGIN</h2>
                <form className="flex flex-col items-center">
                    {/* <input className="loginbx"type="text"  placeholder="Email or username" />
                    <input className="loginbx"type="text"  placeholder="Password" />

                    <button type="button" className="bg-black rounded-lg h-10 w-[100%] mt-2 text-lightbox">Log in</button>
                     */}
                    <button type="button" onClick={signInWithGoogle} className="bg-black rounded-lg placehol p-2 h-10 w-[100%] mt-2 text-lightbox">Sign-in with Google</button>
                </form>
                </div>
 
            </div>
        
)
}



// function Login() {
//     return(

//         <>
//             <div>
//                 <img src="/src/assets/app_logo.png" alt="app logo" className="relative h-[100px] mx-auto top-[20vh]"/>
                
                
//                 <div className="loginbox relative flex flex-col items-center rounded-lg justify-center top-[20vh] mx-5 h-auto p-3">
//                     <h2 className="font-title font-semibold text-[20px] p-3 text-lightbox">LOGIN</h2>
//                 <form className="flex flex-col items-center">
//                     <input className="loginbx"type="text"  placeholder="Email or username" />
//                     <input className="loginbx"type="text"  placeholder="Password" />

//                     <button type="button" className="bg-black rounded-lg placehol h-10 w-[100%] mt-2 text-lightbox">Log in</button>
                    
//                     <button type="button" className="bg-black rounded-lg placehol h-10 w-[100%] mt-2 text-lightbox">Sign-in with Google</button>
//                 {/* SUP FRESHIES!!!! */}
//                 </form>
//                 </div>
 
//             </div>
//         </>
//     )
    
// }

// export default Login;
import { create } from "zustand";
import { axiosInstand  } from "../RequestHTTP/RequestHttp";
import toast from "react-hot-toast";



export const AuthStore = create((set)=>({

    token : null ,
    is_auth : false, 
    user : null , 
    loading : true , 

    Register : async(fullname , email , password , role )=>{
        set({loading : true}) 
        try{
            const res =await  axiosInstand.post("api/register/" , {
                fullname : fullname , 
                email : email , 
                password : password
            }); 

            set({
                token : res.data.tokens.access , 
                is_auth :true , 
                loading : false , 
            }); 

            localStorage.setItem("token" , res.data.tokens.access) ; 
            return true 

        }catch(error){
            set({loading : false})
            // debug 
            console.log(error.response?.data?.message || "Probleme dans le service register ") ; 
            toast.error(error.response?.data?.message || "Problemme dans le service Register ") ; 
        }
    }, 

    Login : async(email , password )=>{
        set({loading : true})
        try {
            const res = await axiosInstand.post("api/login/", {
                email : email , 
                password : password 
            }); 

            set({
                token : res.data.tokens.access , 
                user : res.data.user , 
                is_auth : true, 
                loading:false 
            }); 

            localStorage.setItem("token" , res.data.tokens.access) ; 
            return user ; 

        } catch (error) {
            set({loading : false})
            // debug 
            console.log(error.response?.data?.message || "Porblemme dans service login ") ; 
            toast.error(error.response?.data?.message || "Problemme dans le service login ") ; 

        }
    }, 

    chekAuth : async()=>{
        
        // cheker ets ce que user est authentifie 
        const token = localStorage.getItem("token"); 
        console.log(token) ; 
        if(!token){
           set({loading : false})
            console.log("le token n'existe pas ") ; 
            return null ; 
        }

        try {
            const res = await axiosInstand.post("api/auth/user" ,{}, {
                
                headers :{Authorization : `Bearer ${token}`}
            }); 

            set({
                user : res.data.user , 
                is_auth : true, 
                loading : false 

            }); 

            console.log(res.data.user)
        } catch (error) {
            set({loading : false})
            // debug 
            console.log(error.response?.data?.message || "Problemme dans authetication user ") ; 
            

        }
    }


}))
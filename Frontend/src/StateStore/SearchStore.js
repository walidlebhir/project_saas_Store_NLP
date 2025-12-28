import { create } from "zustand";
import { axiosInstand } from "../RequestHTTP/RequestHttp";
import toast from "react-hot-toast";



export const SearchStore = create((set)=>({

    Datasearch :[] , 
    loading : false , 

    serachImage : async(imageFile)=>{
        // cree la recherche par image 
        try{
            const formData = new FormData();
            formData.append("image", imageFile);

            const res = await axiosInstand.post(
            "api/client/search/images",
            formData,
            {
                headers: {
                "Content-Type": "multipart/form-data",
                },
            }
            );

            set({
                Datasearch : res.data
            }); 
        }catch(error){
            console.log(error.response?.data?.message || "probleme inconu dans serch par image " ) ; 
            toast.error(error.response?.data?.message || "probleme dans search par image ") ; 
        }
    }, 


    search_Text : async(prompt_search)=>{
        try {
            const res = await axiosInstand.post("/api/client/searchtext/" ,{ prompt_search: prompt_search }); 
            set({
                Datasearch : res.data 
            }); 

        } catch (error) {
            // debug 
            console.log(error.response?.data?.message || "problemem dans search par text") 
            toast.error(error.response?.data?.message || "problemme dans le search text ") 
        }
    }






}))
import axios from "axios";

export const API_BASE_URL="http://localhost:8080";

const api=axios.create({baseURL:API_BASE_URL});


api.interceptors.request.use((config)=>{
    
    const jwt=localStorage.getItem("jwt");

    if(jwt){
        config.headers["Authorization"]=`Bearer ${jwt}`;
    }
    return config;
});

api.defaults.headers.post["Content-Type"]="application/json"

export default api;


export const sentContactUsMail=async (data)=>{
    try{
        const response=await axios.post(`${API_BASE_URL}/contactUs`,data);
        console.log(response);
        return response.data;
    }catch(error){
        console.error("Error sending contact us mail:", error);
        throw error;
    }
}
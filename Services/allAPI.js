
import { commonAPI } from "./AxiosApi.js"
import SERVER_URL from "./serverURL"


//register API
export const registerAPI=async(student)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,student,"")
}
//get API
export const getResultApi=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/all-data`,"","")
}
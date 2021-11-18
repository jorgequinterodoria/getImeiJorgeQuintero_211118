import { services } from "./services";

export const postImei = async(value)=>{
    
    const body ={
        imei: value.imei,
        idCompany: value.idCompany
    }
    const response = await services.postImei(body)
    console.log(response)
    return await response;
}
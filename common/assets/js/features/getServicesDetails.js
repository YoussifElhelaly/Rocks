import apiUrl from "../global.js";

export default async function getServicesDetails(ServiceID) {
    try {  
       const res = await fetch(`${apiUrl}/services-detials/${ServiceID}`)
        return res
    }catch (err) {
        console.log(err)
    }
}
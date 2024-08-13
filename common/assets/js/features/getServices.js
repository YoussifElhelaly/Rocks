import apiUrl from "../global.js";

export default async function getServices() {
    try {  
       const res = await fetch(`${apiUrl}/Home-services`)
        return res
    }catch (err) {
        console.log(err)
    }
}
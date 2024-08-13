import apiUrl from "../global.js";

export default async function getProjects() {
    try {  
       const res = await fetch(`${apiUrl}/test`)
        return res
    }catch (err) {
        console.log(err)
    }
}
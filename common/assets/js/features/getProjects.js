import apiUrl from "../global.js";

export default async function getProjects() {
    try {  
       const res = await fetch(`${apiUrl}/homeProjects`)
        return res
    }catch (err) {
        console.log(err)
    }
}
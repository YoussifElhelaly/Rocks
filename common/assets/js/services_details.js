import getServicesDetails from "./features/getServicesDetails.js"

let coverPhotoDetails = document.getElementById('coverPhotoDetails')

async function showProducts() {
    let services = await getServicesDetails(4)
    .then(res => res.json())
    console.log(services) 

    coverPhotoDetails.src = services.service.image     
}

showProducts()
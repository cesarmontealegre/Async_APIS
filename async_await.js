const axios = require('axios')
const url = `https://dinosaur-facts-api.shultzlab.com/dinosaurs`

async function leerDinos() {
    const response = await axios.get(url).then((response) => {
        response.data.forEach(element => {
            console.log(element.Name)
            console.log("+++++++++++++++++")
        });
    })
    .catch((error) => console.log(error))
   
}

leerDinos()
const axios = require('axios')
const url = `https://fakestoreapi.com/products`

async function leerProdcutos() {
    const response = await axios.get(url).then((response) => {
        response.data.forEach(element => {
            console.log(element.title)
            console.log(element.price)
            console.log(element.description)
            console.log("+++++++++++++++++")
        });
    })
    .catch((error) => console.log(error))
   
}

leerProdcutos()
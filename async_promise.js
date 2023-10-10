const needle = require('needle')


const url = `https://dinosaur-facts-api.shultzlab.com/dinosaurs`

needle('get', url, {join:true})
    .then((response)=>{
        let dinosarurios = response.body
        dinosarurios.forEach(dinosarurio =>{
            console.log(dinosarurio.Name)
            console.log('-----------------------')
        });
    })
    .catch((error)=>{
        console.log(error)
    })
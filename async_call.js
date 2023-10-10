// Dependias para request modo callback
//Tipo de dependencias
//commonjs: require
//-module: import

const request = require('request')

// url de conexion a la api rest(dinosarurios)

const url = `https://pokeapi.co/api/v2/pokemon`

//Transaccion asincrona: conexion a la api
let r = request(url, 
                {json:true}, 
                function(error, response, body)
                {
                    if (error) {
                        console.log(error)
                    } else {
                        let pokemones = body.results
                        pokemones.forEach((pokemon) => {
                                console.log(pokemon.name)
                                console.log("------------------")
                        
                        });
                    }
                }) 
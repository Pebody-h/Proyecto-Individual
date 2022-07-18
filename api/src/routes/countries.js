const {Router} = require('express')
const {Country, Activity} = require('../db')
const {Op} = require('sequelize')
//  const fetch = require('node-fetch') //para la version 3 nose puede con require por ello se usa la version 2
const axios = require('axios')
const router = Router()


// utlizo un get para cubir  GET /countries y GET /countries?name
// router.get('/', async (req, res) => {
//     // hago destructuring de name si viene por query para despues hacer la busqueda por su nombre
//     const {name} = req.query
//     try{
//         // guardo en una constante el resulado de buscar todos paises si estan en db incluyendo las actividades que se hayan asociado a cada pais
//         const allCountries = await Country.findAll({include: {model: Activity}})
//         const allApicountries = (await axios.get('https://restcountries.com/v3/all')).data;
//         //valido si no viene nada por query y si mi base de datos ya tiene dartos cargados para manejarlos desde alli
//         if(allCountries.length > 0 && !name) return res.status(200).json(allCountries)
//         //valido si viene query para buscar por el name y que mi base de datos tenga datos
//         if(allCountries.length > 0 && name !== undefined){
//             console.log('hola')
//             const country = await Country.findOne({
//                 where: {name: name},
//                 include: Activity
//             })
//             return res.status(200).json(country)
//         }else { // lleno mi db con datos
//             await Country.bulkCreate(allApicountries.map(e => {
//                 return {
//                     id: e.cca3,
//                     name: e.name.common.toLowerCase(),
//                     flagImage: e.flags[0],
//                     continent: e.continents[0],
//                     capital: e.capital === undefined ? "capital no definida" : e.capital[0],
//                     subRegion: e.subregion,
//                     area: Number(e.area),
//                     population: Number(e.population)
//                 }
//             }))
//             // una ves cargados los datos en db los busco y respondo con ellos
//             if(allCountries.length > 0 && !name) res.status(202).json(allCountries);
//             else {
//                 const country = await Country.findOne({ where:{ name: name } });
//                 res.status(202).json(country);
//             }
//         }
//         // await fetch('https://restcountries.com/v3/all')
//         //     .then(r => r.json())
//         //     .then(r => r.map(e => Country.create({
//         //         id: r.fifa,
//         //         name: r.name.common,
//         //         flagImage: r.flags.svg,
//         //         continent: r.continents,
//         //         capital: r.capital,
//         //         subRegion: r.subregion,
//         //         area: r.area,
//         //         population: r.population
//         //     })))
//         // const countries = await Country.findAll({
//         //     attributes: ['flagImage', 'id', 'name', 'continent']
//         // })
//         // res.status(200).json(countries)
//     }catch(error){
//         console.log(error)
//         res.status(404).json({error: `No se encontro información`})
//     }
// })

router.get('/', async (req, res) => {
    try{
        const {name} = req.query
        if (name) {
            const country = await Country.findOne({
            where: {name: name},
            include: Activity})
            if (country)return res.status(200).json(country)
            else return `El pais ${name} no existe`
        }else{
        const allCountries = await Country.findAll({include: {model: Activity}})
        if(allCountries.length > 0) return res.status(200).json(allCountries)
        const allApicountries = (await axios.get('https://restcountries.com/v3/all')).data
        await Country.bulkCreate(allApicountries.map(e => {
            return {
                id: e.cca3.toLowerCase(),
                name: e.name.common.toLowerCase(),
                flagImage: e.flags[0],
                continent: e.continents[0],
                capital: e.capital === undefined ? "capital no definida" : e.capital[0],
                subRegion: e.subregion,
                area: Number(e.area),
                population: Number(e.population)
            }
        }))
        // una ves cargados los datos en db los busco y respondo con ellos
        if(allCountries.length > 0) res.status(200).json(allCountries)
        }
    }catch(error){
        console.log(error)
        res.status(404).json({error: `No se encontro información`})
    }
})

// router.get('/', async (req, res) => {
//     try{
//         const allCountries = await Country.findAll({include: {model: Activity}})
//         if(allCountries.length > 0) return res.status(200).json(allCountries)
//         const allApicountries = (await axios.get('https://restcountries.com/v3/all')).data
//         await Country.bulkCreate(allApicountries.map(e => {
//             return {
//                 id: e.cca3,
//                 name: e.name.common.toLowerCase(),
//                 flagImage: e.flags[0],
//                 continent: e.continents[0],
//                 capital: e.capital === undefined ? "capital no definida" : e.capital[0],
//                 subRegion: e.subregion,
//                 area: Number(e.area),
//                 population: Number(e.population)
//             }
//         }))
//         // una ves cargados los datos en db los busco y respondo con ellos
//         if(allCountries.length > 0) res.status(202).json(allCountries);
//     }catch(error){
//         console.log(error)
//         res.status(404).json({error: `No se encontro información`})
//     }
// })

// //GET /countries?name="..." busqueda por name
// router.get('/', async (req, res) => {
//     const {name} = req.query
//     try{
//         const countries = await Country.findAll({
//             where:{
//                 name: [name]
//             }
//         })
//         if (!countries) return  res.status(404).send(`No existe un pais con el nombre ${name}`)
//         res.status(200).json(countries)
//     }catch(e){
//         res.status(404).json(e.message)
//     }
// })

//GET /countries/{idPais} busqueda por primari key
router.get('/:idCountry', async (req, res) => {
    const {idCountry} = req.params
    try{
        const detailCountry = await Country.findOne({
            where: {id: idCountry},
            include: Activity})
        res.status(200).json(detailCountry)
    }catch(error){
        res.status(404).json({error: `El ${idCountry} es invalido`})
    }
})

module.exports = router;

//el método Sequelize bulkCreate() puede ser muy conveniente cuando una base de datos tiene relaciones de muchos a muchos y se necesita una inserción de registros múltiples para mantener la integridad de los datos.
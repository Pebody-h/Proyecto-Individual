const {Router} = require('express')
const {Country, Activity} = require('../db')
const {Op} = require('sequelize')
//  const fetch = require('node-fetch') //para la version 3 nose puede con require por ello se usa la version 2
const axios = require('axios')
const router = Router()

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
        const countris = await Country.findAll({include: {model: Activity}})
        if(countris.length > 0) res.status(200).json(countris)
        }
    }catch(error){
        console.log(error)
        res.status(404).json({error: `No se encontro información`})
    }
})

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
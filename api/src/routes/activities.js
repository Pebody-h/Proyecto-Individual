const {Router} = require('express')
const {Activity, Country} = require('../db')
const router = Router()

router.post('/', async (req, res) => {
    const {nameCountry, name, difficulty, duration, season} = req.body
    // console.log(name)
    // console.log(difficulty)
    // console.log(duration)
    // console.log(season)
    // console.log(typeof(nameCountry))
    try{
        if (typeof(nameCountry) === "string"){
            //me guardo en un constate la busqueda de la cuidad por su name ya que los paises estan mapeados para ser consultadoes en la db
            const findCountry = await Country.findOne({where: {name: nameCountry}})
            //valido si existe un pais con ese nombre
            if (!findCountry) return res.status(404).json('El pais selecionado no existe')
            //busco la actividad por su name si no existe la creo
            const [newActivity, created] = await Activity.findOrCreate({
                where: {
                    name: name
                },
                defaults: {
                    difficulty: difficulty,
                    duration: duration,
                    season: season,
                }
            })
            // relaciono la cuidad con su actividad si existe el pais y la actividad no esta creada
            findCountry.addActivity(newActivity)
            const activities = await Activity.findAll()
            res.json(activities)
        }else {
            const newActivitie = await nameCountry.map( async e => {
                const findCountry = await Country.findOne({ where : { name : e }})
                if (!findCountry) return res.json({ info: "El pais selecionado no existe" })
                const [newActivity, created] = await Activity.findOrCreate({
                    where:{ 
                        name: name,
                    }, 
                    defaults: { 
                        difficulty: difficulty,
                        duration: duration,
                        season: season,
                    }
                })
                return findCountry.addActivity(newActivity)
            })
            res.status(200).json(newActivitie)
        }
    }catch(error){
        res.status(404).json({error: 'La informacion enviada no es valida'})
    }
})

module.exports = router;
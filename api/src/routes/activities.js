const {Router} = require('express')
const {Activity, Country} = require('../db')
const router = Router()

router.post('/', async (req, res) => {
    const {nameCountry, name, difficulty, duration, season} = req.body
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
            res.status(200).json(activities)
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

router.get("/activities", async (req,res) => {
    // this request brings all activities created by users
    // so that in the fontend it is updated in the filters
    try{
        const allActivities = await Activity.findAll({ include : Country })
        // only an array of strings of the names is sent
        res.json( allActivities ) 
    } catch (err){
        res.json({error:"Could not query or find activities"})
    }
})

router.put("/activities/:id", async (req, res) => {
    const { id } = req.params;
    try{
        const activitiDelete = await Activity.destroy({where: {id}})
        return res.send({deleteStatus: "Activity successfully removed"})
    } catch (error) {
        // if the country does not exist, an error is displayed
        res.json({ error: 'invalid id' })
    }
})

module.exports = router;
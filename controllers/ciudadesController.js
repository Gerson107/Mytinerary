const Ciudades = require('../models/cities')

const ciudadesController = {

    getCities: async (req, res)=>{
        let cities
        let error = null

        try{
            cities = await Ciudades.find()
            .populate('Itinerarios')
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {cities},
            success: error ? false : true,
            error: error
        })
    },

    getOneCity: async(req, res)=> {
        const id = req.params.id
        let city 
        let error = null

        try{
            city = await Ciudades.findOne({_id:id})
            .populate('Itinerarios')
        }catch(err){
            error = err
        }
        res.json({
            response: error ? 'ERROR' : city,
            succes: error ? false : true,
        })
    },
    createCities: async(req, res)=> {
        const { image, name, ciudad, description} = req.body.input
        new Ciudades({
            image: image,
            name: name,
            ciudad: ciudad,
                description: description,              
            }).save()
                .then((respuesta)=> res.json({respuesta}))
        },

    deleteCities: async(req, res)=> {
        const id = req.params.id

        await Ciudades.findOneAndDelete({_id:id})
    },
    updateCities: async(req, res)=> {
        const id = req.params.id
        const ciudad = req.body.dataInput

        let ciudaddb = await Ciudades.findOneAndUpdate({_id:id}, ciudad)
    }
    

}
module.exports = ciudadesController
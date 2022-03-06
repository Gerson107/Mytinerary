const Itinerarios = require('../models/Itinerarios')

const ItinerariosController = {

    getitinerios: async (req, res)=>{
        let itinerario
        let error = null

        try{
            itinerario= await Itinerarios.find()
           
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {itinerario},
            success: error ? false : true,
            error: error
        })
    },

    getOneItinerario: async(req, res)=> {
        const id = req.params.id
        let itinerario 
        let error = null

        try{
            itinerario = await Itinerarios.findOne({_id:id})
        }catch(err){
            error = err
        }
        res.json({
            response: error ? 'ERROR' : ciudad,
            succes: error ? false : true,
        })
    },
    createItinerarios: async(req, res)=> {
        const { image, name, price, duration} = req.body.input
        new Itinerarios({
             image,
            name,
             price,
               duration,              
            }).save()
                .then((respuesta)=> res.json({respuesta}))
        },

    deleteItinerarios: async(req, res)=> {
        const id = req.params.id

        await Itinerarios.findOneAndDelete({_id:id})
    },
    updateItinerarios: async(req, res)=> {
        const id = req.params.id
        const itinerarios= req.body.dataInput

        let ciudaddb = await Itinerarios.findOneAndUpdate({_id:id}, itinerarios)
    }
    

}
module.exports = ItinerariosController
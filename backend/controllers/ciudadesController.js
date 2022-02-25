const Ciudades = require('../models/cities')

const ciudadesController = {

    getCities: async (req, res)=>{
        let cities
        let error = null

        try{
            cities = await Ciudades.find()
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {cities},
            success: error ? false : true,
            error: error
        })
    }

}
module.exports = ciudadesController
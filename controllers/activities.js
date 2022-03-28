const Activities = require('../models/activities')

const activitiesController = {

    addActivity: async (req, res)=>{
        let newactivities = await Activities({ ...req.body })
        let error = null

        try{
            await newactivities.save()
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {...newactivities},
            success: error ? false : true,
            error: error
        })
    },

    activityOfItinerary: async(req, res)=> {
        try{
          let  activityItinerary  = await Activities.find({itineraryId: req.params.itineraryId,})
              
          res.json({ success: true, response: activityItinerary})
       console.log('estoy')
        }catch(error){
           res.json({
            response: false,
            success: error.message
        })
    }
    },
   

}
module.exports = activitiesController
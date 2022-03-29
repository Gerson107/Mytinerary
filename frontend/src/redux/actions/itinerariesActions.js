import axios from "axios";

const itinerayActions = {

  fetchearItinerarios: () => {
    return async(dispatch, getState)=>{
        const res = await axios.get('https://mitinerary.herokuapp.com/api/v1/allitinerarios')
        console.log(res)
        dispatch({type:'fetch', payload: res.data.response})
    }
},

  getOneItinerarios: (id) => {
    return async (dispatch, getState) => {
      const res = await axios.get('https://mitinerary.herokuapp.com/api/v1/allitinerarios/' + id)
      return res
    }
  },
    
  LikeAndDislike: (itinerarioId, cityId) => {
    console.log(itinerarioId)
     const token = localStorage.getItem("token");
    return async () => {
     
      try {
       const res = await axios.put(
         ` https://mitinerary.herokuapp.com/api/v1/itinerarios/likes/${itinerarioId}/${cityId}`, {}, 
          { headers: { Authorization: "Bearer " + token } }
        );
        console.log(res.data.response)
        return res.data.response;
      } catch (e) {
        console.log(e);
      }
    };
  },
};

export default itinerayActions;

import axios from "axios";

const itinerayActions = {

  fetchearItinerarios: () => {
    return async(dispatch, getState)=>{
        const res = await axios.get('https://mytinerary-383s.onrender.com/api/v1/allitinerarios')
        console.log(res)
        dispatch({type:'fetch', payload: res.data.response})
    }
},

  getOneItinerarios: (id) => {
    return async (dispatch, getState) => {
      const res = await axios.get('https://mytinerary-383s.onrender.com/api/v1/allitinerarios/' + id)
      return res
    }
  },
    
  LikeAndDislike: (itinerarioId, cityId) => {
     const token = localStorage.getItem("token");
    return async () => {
     
      try {
       const res = await axios.put(
         `https://mytinerary-383s.onrender.com/api/v1/itinerarios/likes/${itinerarioId}/${cityId}`, {}, 
          { headers: { Authorization: "Bearer " + token } }
        );
        console.log(res)
        return res.data.response;
      } catch (e) {
        console.log(e);
      }
    };
  },
};

export default itinerayActions;

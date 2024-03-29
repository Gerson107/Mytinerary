import axios from 'axios';

const citesActions = {

    fetchearCities: () => {
        return async(dispatch, getState)=>{
            const res = await axios.get('https://mytinerary-383s.onrender.com/api/v1/allcities')
            dispatch({type:'fetch', payload:res.data.response.cities})
        }
    },
    fetchearOneCity: (id) => {
        return async(dispatch, getState) => {
            const res = await axios.get('https://mytinerary-383s.onrender.com/api/v1/allcities/'+id)
            return(res.data.response)
        }
    },
    deleteCities: (id)=>{
        return async(dispatch, getState)=>{
            try {
                const res = await axios.delete('https://mytinerary-383s.onrender.com/api/v1/allcities/'+id)
                dispatch({type:'delete', payload:res.data.response.cities})
            }catch(err){
                console.log(err)
            }
        }
    },
    filter: (cities, value)=>{
        return (dispatch, getState)=>{
            dispatch({type:'filtro', payload:{cities, value}})
        }
    },
    chargeCities: (name, ciudad)=>{
        return async(dispatch, getState)=>{
            const res = await axios.post('https://mytinerary-383s.onrender.com/api/v1/allcities',{name,ciudad})
            dispatch({type:'chargeCities', payload:res.data.response.cities})
        }
    }
}
export default citesActions;
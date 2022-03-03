import axios from 'axios';

const citesActions = {

    fetchearCities: () => {
        return async(dispatch, getState)=>{
            const res = await axios.get('http://localhost:4000/api/v1/allcities')
            dispatch({type:'fetch', payload:res.data.response.cities})
        }
    },

    deleteCities: (id)=>{
        return async(dispatch, getState)=>{
            try {
                const res = await axios.delete('http://localhost:4000/api/v1/allcities/'+id)
                dispatch({type:'delete', payload:res.data.response.cities})
            }catch(err){
                console.log(err)
            }
        }
    },
    filter: (productos, value)=>{
        return (dispatch, getState)=>{
            dispatch({type:'filtro', payload:{productos, value}})
        }
    },
    chargeCities: (name, ciudad)=>{
        return async(dispatch, getState)=>{
            const res = await axios.post('http://localhost:4000/api/v1/allcities',{name,ciudad})
            dispatch({type:'chargeCities', payload:res.data.response.cities})
        }
    }
}
export default citesActions;
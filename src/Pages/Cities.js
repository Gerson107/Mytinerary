import React, {useEffect}  from 'react';
import './Cities.css';
import Cards from '../Components/Card/Card'
import axios from 'axios'

function Cities(){

  useEffect(()=>{
    axios.get(`http://localhost:4000/api/v1/allcities`)
    .then(respuesta=>console.log(respuesta.data.response.cities))
  }, [])
  
    return (
      <>
      <Cards/>
    
      </>
    )
  }


export default Cities
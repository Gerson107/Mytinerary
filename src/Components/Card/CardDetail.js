import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Card.css';
import { Link as LinkRouter } from "react-router-dom";
function CardDetail() {
    const [data, setData] = useState();
    let {id} = useParams()
    useEffect(()=>{
        axios
        .get(`http://localhost:4000/api/v1/allcities`)
        .then((respuesta) => setData(respuesta.data.response.cities.filter(city=> city._id === id)) 
       
        );
       
      }, [])
  return (
    <>
 
    {data?.map(city =>
        <div className='detail'>
              <h1 className='detalletitulo'>Welcome to the city of:  {city.ciudad}</h1>
              <img  src={process.env.PUBLIC_URL + `/imagenes/${city.image}`}></img>
              <p>---our new website---</p>
             <h2> UNDER CONSTRUCTION</h2>
             <LinkRouter to="/cities" className="link">
             Return Cities
            </LinkRouter>
             
        </div>
     

  

       
        )}
      
    </>
 )
 }

export default CardDetail
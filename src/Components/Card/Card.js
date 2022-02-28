import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { Link as LinkRouter } from "react-router-dom";
import "./Card.css";

function Cards() {
  const [data, setData] = useState();
  const [city, setCity] = useState();
  const[search, setSearch] = useState();
  const[searchResult, setSearchResult] = useState();
 

useEffect(()=>{
  axios
  .get(`http://localhost:4000/api/v1/allcities`)
  .then((respuesta) => setData(respuesta.data.response.cities) 
 
  );
 
}, [])

useEffect(()=> {
  if(searchResult !== undefined){
 setCity(searchResult)
  }
  else{
       setCity(data)
  }
}, [searchResult])

  const handleChange =e=>{
    setSearch(e.target.value);
    filters(e.target.value)
    
  }

  const filters = (search)=>{
    console.log(search)
    console.log(data)
     setSearchResult(data.filter((data) => data.name.toLowerCase().startsWith(search.toLowerCase().trim())))
  
      
    }
  
  return (
    <>
    <div className="cities">
      <div className="cities_search">
        <h1>The most visited places in the world</h1>
        <form className="form">
          <label for="name">Buscar por pais:</label>
          <input
            type="text"
            id="name"
            placeholder="Nombre de pais"
            name="user_name"
            onChange={handleChange}
          />

          <label for="mail">Buscar por ciudad:</label>
          <input
            type="email"
            id="mail"
            placeholder="Nombre de ciudad"
            name="user_email"
          />
        </form>
      </div>

      <div className="cities_card">
      {city?.map((city) =>(
        <Card className="cards">
          <Card.Img className="imgn" variant="top" src={process.env.PUBLIC_URL + `/imagenes/${city.image}`} />

          <Card.Body>
            <div className="card_detail">
              <Card.Title className="title">{city.name}</Card.Title>
              <Card.Title className="subtitle">{city.ciudad}</Card.Title>
            </div>
            <Card.Text className="text">
              {city.description}
            </Card.Text>
        <LinkRouter to={`/detalle/${city._id}`}>
         <Button className="boton">Show</Button>
        </LinkRouter>
           
          </Card.Body>
        </Card> ))}
      </div>
    </div>
    </>
  );
}

export default Cards;

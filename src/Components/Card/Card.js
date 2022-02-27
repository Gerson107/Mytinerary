import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import "./Card.css";

function Cards() {
  const [data, setData] = useState();
  const[search, setSearch] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/allcities`)
      .then((respuesta) => setData(respuesta.data.response.cities));
  }, []);

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
      {data?.map((city) =>(
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

            <Button className="boton">Show</Button>
          </Card.Body>
        </Card> ))}
      </div>
    </div>
    </>
  );
}

export default Cards;

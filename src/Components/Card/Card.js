import React from "react";
import CardItem from "./CardItem";
import "./Card.css";

function Cities() {
  return (
    <div className="cities">
      <div className="cities_search">
        <h1>
        The most visited places in the world</h1>
        <form className="form">
          <label for="name">Buscar por pais:</label>
          <input type="text" id="name"  placeholder="Nombre de pais" name="user_name" />

          <label for="mail">Buscar por ciudad:</label>
          <input type="email" id="mail" placeholder="Nombre de ciudad" name="user_email" />

        </form>
      </div>

      <div className="cities_card">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
}

export default Cities;

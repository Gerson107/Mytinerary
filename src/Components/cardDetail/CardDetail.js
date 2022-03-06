import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CardDetail.css";
import Itinerario from '../itinirerios/Itinerario'
//import {connect} from 'react-redux';
//import citiesActions from '../../redux/actions/citiesActions';

function CardDetail() {
  const [data, setData] = useState();

  let { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/allcities")
      .then((respuesta) =>
        setData(
          respuesta.data.response.cities.filter((city) => city._id === id)
        )
      );
    console.log(data);
  }, []);
  console.log(data);

  //  state ={element:{}}

  //  id = this.props.params.id

  //  componentDidMount() {
  //      this.setState({element:this.props.cities.find(city=> city._id === this.id)})
  //  }
  //   render() {
  return (
    <>
      {data?.map((city) => (
        <div className="detail_pais">
          <div className="detail_info">
            <div className="title_flag">
              <img></img>
              <h1 className="detalletitulo"> {city.name}</h1>
            </div>
            <div className="detail_datos">
            <div>
             <p>Ciudad: {city.ciudad}</p>
              <p>Hoteles: {city.hotels}</p>
              <p>Restaurants: {city.restaurants}</p>
            </div>
             <div>
                <p>Hospitales: {city.hospitals}</p>
              <p>Lenguages: {city.lenguage}</p>
             </div>
           
            </div>
          </div>

          <div className="img_city">
            <img src={process.env.PUBLIC_URL + `/imagenes/${city.image}`}></img>
          </div>
        </div>
      ))}

<Itinerario/>
    </>
  );
}

// const mapStateToProps = (state) => {
//     return{
//         cities: state.Data.cities
//     }
// }
export default CardDetail;

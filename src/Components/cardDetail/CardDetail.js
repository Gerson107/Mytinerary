import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CardDetail.css";
import Itinerario from '../itinirerios/Itinerario'
//import  from '../../redux/actions/citiesActions'
import {connect} from 'react-redux';
import citiesActions from '../../redux/actions/citiesActions';

function CardDetail(props) {

let { id } = useParams();
const [data, setData] = useState({element:props.cities.find(city=> city._id.toString() === id.toString())});

useEffect(()=>{
  if(props.cities.length < 1){
    props.fetchearOneCity(id)
    .then(city => setData({element:city}))
  }
}, [])
console.log(data.element)
if(!data.element){
  return(<h1>..loading</h1>)
}
  return (
    <>
        <div className="detail_pais">
          <div className="detail_info">
            <div className="title_flag">
              <img></img>
              <h1 className="detalletitulo"> {data.element.name}</h1>
            </div>
            <div className="detail_datos">
            <div>
             <p><b>Ciudad: </b>{data.element.ciudad}</p>
              <p><b>Hoteles:</b> {data.element.hotels}</p>
              <p><b>Restaurants:</b> {data.element.restaurants}</p>
            </div>
             <div>
                <p><b>Hospitales:</b> {data.element.hospitals}</p>
              <p><b>Lenguages:</b> {data.element.lenguage}</p>
              <p><b>Lenguages:</b> {data.element.lenguage}</p>
             </div>
           
            </div>
          </div>

          <div className="img_city">
            <img src={process.env.PUBLIC_URL + `/imagenes/${data.element.image}`}></img>
          </div>
        </div>
<Itinerario/>
    </>
  );
}

const mapDispatchToProps = {
  fetchearCities: citiesActions.fetchearCities,
  fetchearOneCity: citiesActions.fetchearOneCity

}
const mapStateToProps = (state) => {
  return {
    cities: state.Data.cities,
    auxiliar: state.Data.auxiliar,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardDetail);

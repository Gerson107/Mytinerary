import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CardDetail.css";
import Itinerario from "../itinirerios/Itinerario";
//import  from '../../redux/actions/citiesActions'
import { connect } from "react-redux";
import citiesActions from "../../redux/actions/citiesActions";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AbcIcon from '@mui/icons-material/Abc';

function CardDetail(props) {
  let { id } = useParams();
  const [data, setData] = useState({
    element: props.cities.find((city) => city._id.toString() === id.toString()),
   
  });

  useEffect(() => {
    if (props.cities.length < 1) {
      props.fetchearOneCity(id).then((city) => setData({ element: city }));
    }
  }, []);

  if (!data.element) {
    return <h1>..loading</h1>;
  }
  console.log(data)
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
            
              <p>
                <LocationCityIcon/><b>Cities: </b>
                {data.element.ciudad}
              </p>
              <p>
               <HotelIcon/> <b>Hoteles:</b> {data.element.hotels}
              </p>
              <p>
                <RestaurantIcon/> <b>Restaurants:</b> {data.element.restaurants}
              </p>
            </div>
            <div>
              <p>
               <LocalHospitalIcon/> <b>Hospitales:</b> {data.element.hospitals}
              </p>
              <p>
                <AbcIcon/> <b>Lenguages:</b> {data.element.lenguage}
              </p>
             
            </div>
          </div>
        </div>

        <div className="img_city">
          <img
            className="imagcity"
            src={process.env.PUBLIC_URL + `/imagenes/${data.element.image}`}
          ></img>
        </div>
      </div>
      <h2>Itinerarios</h2>
      {data?.element.Itinerarios.map( data => 
      <Itinerario CityId={id} data={data} />
      )}
    </>
  );
}

const mapDispatchToProps = {
  fetchearCities: citiesActions.fetchearCities,
  fetchearOneCity: citiesActions.fetchearOneCity,
};
const mapStateToProps = (state) => {
  return {
    cities: state.Data.cities,
    auxiliar: state.Data.auxiliar,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CardDetail);

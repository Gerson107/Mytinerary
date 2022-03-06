import React from 'react'
import '../Card/Card.css'
function filter(props) {
    const {cities, filter} = props;
  return (
    <>
    <form className="form">
 
            <label for="name">Buscar por pais:</label>
            <input
              type="text"
              id="name"
              placeholder="Nombre de pais"
              name="user_name"
             onChange={(evento)=>filter(cities,evento.target.value)}
            />
          </form>
    
    </>
  )
}

export default filter
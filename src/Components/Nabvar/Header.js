import React from "react";
import logo from "./mytinerary.svg";
import logoUser from "./user.svg";
import { connect } from 'react-redux';
import { Link as LinkRouter } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Header.css";


function Header(props) {
  const [age, setAge] = React.useState("");
console.log(props.user)
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="header">
        <div className="header_div">
          <img src={logo}></img>
          <div className="nav">
            <LinkRouter to="home" className="link">
              Home
            </LinkRouter>
            <LinkRouter to="cities" className="link">
              Cities
            </LinkRouter>
          </div>
        </div>

        <div className="logouser">
          <FormControl sx={{ minWidth: 60 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              {" "}
              {props.user ? (<img src={props.user.profile}></img>) : (<img src={logoUser}></img>) } 
              
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
            >
              <MenuItem value="">
                <em>Home</em>
              </MenuItem>
              <LinkRouter to="/signin">
                <MenuItem value={10}>Sing In</MenuItem>
              </LinkRouter>

              <LinkRouter to="/signup">
                <MenuItem value={21}>Sing Up</MenuItem>
              </LinkRouter>
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user,
  }
}
 
export default connect(mapStateToProps, null)(Header);

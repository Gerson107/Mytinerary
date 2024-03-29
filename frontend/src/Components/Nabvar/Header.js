import React from "react";
import logo from "./mytinerary.svg";
import logoUser from "./user.svg";
import { connect } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import userActions from "../../redux/actions/userActions";
import "./Header.css";

function Header(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  function SignOut() {
    props.signOutUser(props);
  }

  return (
    <>
      <div className="header">
        <div className="header_div">
          <div className="img">
          <img src={logo} alt="logo"></img>

          </div>
          <div className="nav">
            <LinkRouter to="home" className="link">
              Home
            </LinkRouter>
            <LinkRouter to="cities" className="link">
              Cities
            </LinkRouter>
          </div>

          <div className="logouser">
          {props.user ? (
                <img className="imgprofile" src={props.user.profile} alt="imgUser"></img>
              ) : (
                <img  className="logoUser" src={logoUser} alt="logouser"></img>
              )}
          {props.user ? <p className="nameUser">{props.user.fullName}</p> : <p className="nameUser">Start</p>}
          <FormControl color="info" sx={{ minWidth: 60 }}>
            <InputLabel
              className="log"
              id="demo-simple-select-autowidth-label"
            >
              
            </InputLabel>

            <Select
            
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue="I"
              onChange={handleChange}
              autoWidth
            >
              {props.user === null ? (
                <div>
                 
                  <LinkRouter to="/signin">
                    <MenuItem className="selectc" value={10}>Sing In</MenuItem>
                  </LinkRouter>
                  <LinkRouter to="/signup">
                    <MenuItem className="selectc"  value={20}>Sing Up</MenuItem>
                  </LinkRouter>
                </div>
              ) : (
                <LinkRouter to="/home">
                  <MenuItem  className="selectc" onClick={SignOut} value={30}>
                    Sing Out
                  </MenuItem>
                </LinkRouter>
              )}
            </Select>
          </FormControl>
        </div>
        </div>

        
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user,
  };
};
const mapDispatchToProps = {
  signOutUser: userActions.signOutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

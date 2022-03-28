import React from "react";
import Swal from 'sweetalert2';
import { Link as LinkRouter } from "react-router-dom";
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FingerprintTwoToneIcon from "@mui/icons-material/FingerprintTwoTone";
import FacebookSignIn from '../facebookUser/FacebookSignIn';
import GoogleSignIn from '../googleUser/GoogleSignIn';
import "./signup.css";


function SignIn(props) {

  const handleSubmit = (event) => {
    event.preventDefault()
    const logedUser = {
      email: event.target[2].value,
      password: event.target[4].value,
      from: "form-Signup"
    }
    
    props.signInUser(logedUser)
    console.log(logedUser)
  }

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChangee = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [name, setName] = React.useState("");
  const handleChange = (event) => {
  setName(event.target.value);
   };
  return (
    <div className="conboxform">
      <div className="infosignin">
        <h1>Welcome Back</h1>
        <p>Sign in to continue acces pages </p>
        <p>Not a member?</p>
        <LinkRouter to="/signup">
          <button type="submit" className="btnsingup">
            SignUp
          </button>
        </LinkRouter>
      </div>

      <Box 
       onSubmit={handleSubmit} id='formin'
        className="boxform"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="headform">
          <h2>Sign in</h2>
          <FingerprintTwoToneIcon sx={{ fontSize: 50 }} />
        </div>
        <GoogleSignIn/>
        <FacebookSignIn/>
        <TextField
          id="outlined-name"
          label="name"
         value={name}
         onChange={handleChange}
          type="text"
        />

        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChangee("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <div className="botonsignin">
          <button type="submit" className="btnsingin">
            SignIn
          </button>
        </div>
      </Box>
    </div>
  );
}
const mapDispatchToProps = {
  signInUser: userActions.signInUser,
}
const mapStateToProps = (state) => {
  return {
   // message: state.UserReducer.message,
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (SignIn);

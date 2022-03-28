import React from "react";
import Swal from "sweetalert2";
import { Link as LinkRouter } from "react-router-dom";
import { connect } from "react-redux";
import userActions from "../../redux/actions/userActions";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import GoogleSignUp from "../googleUser/GoogleSignUp";
import FacebookSignUp from "../facebookUser/FacebookSignUp";
import "./signin.css";

const currencies = [
  {
    value: "unselected",
    label: "unselected",
  },
  {
    value: "Colombia",
    label: "Colombia",
  },
  {
    value: "Argentina",
    label: "Argentina",
  },
  {
    value: "Chile",
    label: "Chile",
  },
  {
    value: "Venezuela",
    label: "Venezuela",
  },
  {
    value: "Peru",
    label: "Peru",
  },
  {
    value: "Bolivia",
    label: "Bolivia",
  },
  {
    value: "Ecuador",
    label: "Ecuador",
  },
  {
    value: "Uruguay",
    label: "Uruguay",
  },
];

function SignUp(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      fullName: event.target[4].value,
      lastName: event.target[6].value,
      email: event.target[8].value,
      country: event.target[0].value,
      password: event.target[10].value,
      profile: event.target[13].value,
      from: "form-Signup",
    };

    props.signUpUser(userData);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const [currency, setCurrency] = React.useState('unselected');
  const handleChangee = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <div className="formulary">
      <div className="titleform">
        <h1>Welcome to Mytinerary</h1>
        <p>
          {" "}
          We have been working very hard to create this version of our site. It
          comes with a lot of new itinerarys, easy guies and images. Check it
          out now!
        </p>
        <div className="router">
          <LinkRouter className="botons botonss" to="/cities">
            <MenuItem value={21}>Show cities</MenuItem>
          </LinkRouter>
          <LinkRouter className="botons" to="/signin">
            <MenuItem value={21}>Sing in</MenuItem>
          </LinkRouter>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} >
          <Box
            sx={{
              width: "27ch",
              "& > :not(style)": { m: 1 },
            }}
          >
            <div className="textform">
              <h2>Sign up now</h2>
              <p>
                Fill in the form below to get instant access:
                <span> Select your country to continue.</span>
              </p>
              <DriveFileRenameOutlineIcon />
            </div>
            <TextField
              id="outlined-select-currency"
              select
              name="country"
              label="country"
              value={currency}
              onChange={handleChange}
              helperText="Please select your country"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {currency !== "unselected" ? (
              <>
                <div className="linee"></div>
                <GoogleSignUp currencies={currency} />
                <FacebookSignUp currencies={currency} />
                <TextField
                  helperText="Please enter your name"
                  label="Full Name"
                  name="fullName"
                  type="text"
                />
                <TextField
                  helperText="Plase enter your Last Name"
                  label="lastName"
                  name="lastName"
                  type="text"
                />
                <TextField
                  helperText="Plase enter your E-mail"
                  label="E-mail"
                  name="email"
                  type="email"
                />

                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    name="password"
                    onChange={handleChangee("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="password"
                  />
                </FormControl>
                <TextField
                  helperText="Plase enter your image"
                  label="profile"
                  name="profile"
                  type="text"
                />
                <div className="buttonsubmit">
                  <button type="submit" className="buttonSubm">
                    Create Account
                  </button>
                </div>
              </>
            ) : (
              <p>Select your country</p>
            )}
          </Box>
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,
};

export default connect(null, mapDispatchToProps)(SignUp);

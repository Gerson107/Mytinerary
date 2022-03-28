import React, { useEffect } from "react";
import Home from "./Pages/Home";
import Cities from "./Pages/Cities";
import Header from "./Components/Nabvar/Header";
import Footer from "./Components/Footer/Footer";
import Detalle from "./Components/cardDetail/CardDetail";
import Signup from "./Components/sign-in/SignUp";
import Signin from "./Components/sign-up/SignIn";
import Ejemplo from "./Pages/ejemplo";
import Snackbar from "./Components/Snackbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import userActions from "./redux/actions/userActions";

function App(props) {
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token");
      props.VerificarToken(token);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/detalle/:id" element={<Detalle />} />
          {!props.user && <Route path="/signin" element={<Signin />} />}
          {!props.user && <Route path="/signup" element={<Signup />} />}
          <Route path="/ejem" element={<Ejemplo />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Snackbar />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user,
  };
};
const mapDispatchToProps = {
  VerificarToken: userActions.VerificarToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

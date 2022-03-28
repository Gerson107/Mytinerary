import React from 'react';
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';


function GoogleSignUp(props) {

  const responseGoogle = async (res) => {
    console.log(res)
    const userData = {
      fullName: res.profileObj.givenName,
      lastName: res.profileObj.familyName,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      profile: res.profileObj.imageUrl,
      from: "google",
      country: props.currencies
    }
    await props.signUpUser(userData)
  }

  return (
    <GoogleLogin
    className="buttonsocial"
      clientId="59842311044-0lqr0pr6re8cicoj9nrqk81ti8id2rsv.apps.googleusercontent.com"
      buttonText="SignUp with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />

  );
}

const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,

}

export default connect(null, mapDispatchToProps)(GoogleSignUp);
import React from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';


function GoogleSignIn(props) {

    const responseGoogle = async (res) =>{
        const logedUser = {
            email: res.profileObj.email,
            password:res.profileObj.googleId,
            from: 'google'
        }
        await props.signInUser(logedUser)
    }
  return (
    <GoogleLogin
    className="buttonsocial"
      clientId="59842311044-svidhb10r6s3h6p5167qto60q1klkoe7.apps.googleusercontent.com"
      buttonText=" with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}

const mapDispatchToProps = {
    signInUser: userActions.signInUser,

}
export default connect(null, mapDispatchToProps)( GoogleSignIn);
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';


function FacebookSignIn(props) {
    const responseFacebook = async(res) => {
        const logedUser = {
            email: res.email,
            password: res.id,
            from: "facebook"
        }
        await props.signInUser(logedUser)
    }
  return (
    <FacebookLogin
    cssClass="buttonsocial my-facebook-button-class"
    icon="fa-facebook"
    textButton='With Facebook'
      appId='654128065856450'
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
    />
  )
}
const mapDispatchToProps = {
    signInUser: userActions.signInUser
}

export default connect(null, mapDispatchToProps)( FacebookSignIn);
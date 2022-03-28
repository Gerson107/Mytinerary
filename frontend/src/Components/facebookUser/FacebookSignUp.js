import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';


function FacebookSignUp(props) {
    
    const responseFacebook = async (res) => {
        const fullNameSeparado = res.name.split(" ")
        let name = fullNameSeparado[0]
        let apellido = fullNameSeparado[1]
        let picture = res.picture.data.url

console.log(res.picture.data.url)
        const userData ={
            fullName: name,
            lastName: apellido,
            email:res.email,
            password:res.id,
            profile: picture,
            from:'facebook',
            country: props.currencies,       
            
        }
        await props.signUpUser(userData)

    }
    console.log(props.currencies)
  return (
    <FacebookLogin
    cssClass="buttonsocial my-facebook-button-class"
    icon="fa-facebook"
    textButton=" SignUp with Facebook"
      appId="654128065856450"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}

    />
  )
}

const mapDispatchToProps = {
    signUpUser: userActions.signUpUser,
  
  }
export default connect(null, mapDispatchToProps) (FacebookSignUp);
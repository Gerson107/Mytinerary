const User = require('../models/users.js');
const bcryptjs = require('bcryptjs');

const userControllers = {

    signUpUsers: async (req, res) => {
        let { fullName, lastName, email, password, profile, country, from } = req.body.userData

        try {
            const userExists = await User.findOne({ email })

            if (userExists) {
                console.log(userExists.from.indexOf(from))
                if (userExists.from.indexOf(from) === 0) {
                    res.json({ success: false, from: "singup", message: "Ya has realizado tu SignUp de esta forma, por favor realiza tu SignIn" })
                } else {
                    const passwordHasheada = bcryptjs.hashSync(password, 10)
                    userExists.from.push(from)
                    userExists.password.push(passwordHasheada)
                    if (from === "form-Signup") {
                        await userExists.save()
                        res.json({
                            success: true,
                            from: "signup",
                            message: "Te enviamos un email para validarlo, por favor verifica tu casilla para completar el signUp y agregarlo a tus metodos de SignIn"
                        })
                    } else {
                        userExists.save()

                        res.json({
                            success: true,
                            from: "signup",
                            message: "Agregamos " + from + " a tus medios para realizar signIn"
                        })
                    }
                }
            } else {
                const passwordHasheada = bcryptjs.hashSync(password, 10)

                const newUser = await new User({
                    fullName,
                    lastName,
                    email,
                    password: [passwordHasheada],
                    emailVerified: true,
                    profile,
                    country,
                    from: [from]

                })
                if (from !== "form-Signup") {
                    await newUser.save()
                    res.json({
                        success: true,
                        from: "signup",
                        message: "Felicidades, se ha creado tu usuario con " + from
                    })
                } else {
                    await newUser.save()

                    res.json({
                        success: true,
                        from: "signup",
                        message: "te enviamos un email para validarlo, por favor verifica tu casilla para completar el signup"
                    })
                }
            }
        } catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo a salido mal intentalo mas tarde" })
        }
    },
    signInUser: async (req, res) => {

        const { email, password, profile, from } = req.body.logedUser
        try {
            const userExists = await User.findOne({ email })

            if (!userExists) {
                res.json({ succes: false, message: "Tu usuario no ha sido registrado, por favor realiza signIn" })
            } else {
                if (from !== "form-Signin") {
                    let paswordAgree = userExists.password.filter(pass => bcryptjs.compareSync(password, pass))
                    if (paswordAgree.length > 0) {
                        const userData = {
                            fullName: userExists.fullName,
                            email: userExists.email,
                            profile: userExists.profile,
                            from: userExists.from
                            
                        }
                        await userExists.save()
                        res.json({
                            success: true,
                            from: from,
                            response: {userData},
                            message: "Bienvenido nuevamente" + userData.fullName,
                            })
                        
                    } else {
                        res.json({
                            from: from,
                            message: "No has realizado el registro con "+from+"si quieres ingresar con este metodo debes hacer el signup con" +from
                        })
                    }
                } else {
                    if(userExists.emailVerified) {
                        let paswordAgree = userExists.password.filter(pass => bcryptjs.compareSync(password, pass))
                        if(paswordAgree.length > 0) {
                        const userData = {
                            fullName: userExists.fullName,
                            email: userExists.email,
                            profile: userExists.profile,
                            from: userExists.from
                           }
                        res.json({ success: true,
                            from: from,
                            response: {userData},
                            message:"Bienvenido nuevamente" + userData.fullName,
                            })
                        } else {
                            res.json({
                                success: false,
                                from: from,
                                message:"El usuario o el password no coinciden"
                            })
                        }
                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: "No has verificado tu email, por favor verifica tu casilla de emails para completar tu signUp"
                        })  
                    }
                }
            }
        } catch (error) {
            console.log(error);
            res.json({ success: false, message: "Algo a salido mal intentalo en unos minutos"})
        }
    },
    signOutUser: async (req, res) => {
        const email = req.body.closeuser
        const user = await User.findOne({ email })
        await user.save()
        res.json(console.log('sesion cerrada' + email))
    },

}
module.exports = userControllers
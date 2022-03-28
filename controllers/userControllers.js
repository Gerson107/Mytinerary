const User = require("../models/users.js");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const sendEmail = async (email, uniqueString) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "mytynerary@gmail.com",
      pass: "12345mitinerary",
    },
  });

  let sender = "mytynerary@gmail.com";
  let mailOptions = {
    from: sender,
    to: email,
    subject: "verification user email",
    html: `
            <div>
                <h1>Click<a href=http://localhost:4000/api/v1/verify/${uniqueString}>here</a>to confirm your email. Thank You</h1>
            </div>
              `,
  };

  await transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("mensaje enviado");
    }
  });
};

const userControllers = {
  verifyEmail: async (req, res) => {
    const { uniqueString } = req.params;

    const user = await User.findOne({ uniqueString: uniqueString });
    console.log("estoy aqui");
    if (user) {
      user.emailVerified = true;
      await user.save();
      res.redirect("http://localhost:3000/signin");
    } else {
      res.json({
        success: false,
        response: "Your email has not been verified",
      });
    }
  },

  signUpUsers: async (req, res) => {
    let { fullName, lastName, email, password, profile, country, from } =
      req.body.userData;

    try {
      const userExists = await User.findOne({ email });

      if (userExists) {
        
        if (userExists.from.indexOf(from) !== -1) {
          res.json({
            success: false,
            from: "singup",
            message:
              "You have already made your SignUp in this way, please make your SignIn",
          });
        } else {
          const passwordHasheada = bcryptjs.hashSync(password, 10);
          userExists.from.push(from);
          userExists.password.push(passwordHasheada);
          if (from === "form-Signup") {
            userExists.uniqueString = crypto.randomBytes(15).toString("hex");
            await userExists.save();
            await sendEmail(email, userExists.uniqueString);
            res.json({
              success: true,
              from: "signup",
              message:
                "We sent you an email to validate it, please check your box to complete the signUp and add it to your SignIn methods.",
            });
          } else {
            userExists.save();

            res.json({
              success: true,
              from: "signup",
              message:
                "Agregamos " + from + " a tus medios para realizar signIn",
            });
          }
        }
      } else {
        const passwordHasheada = bcryptjs.hashSync(password, 10);

        const newUser = await new User({
          fullName,
          lastName,
          email,
          password: [passwordHasheada],
          uniqueString: crypto.randomBytes(15).toString("hex"),
          emailVerified: false,
          profile,
          country,
          from: [from],
        });
        if (from !== "form-Signup") {
          await newUser.save();
          res.json({
            success: true,
            from: "signup",
            message: " Felicidades, se ha creado tu usuario con " + from,
          });
        } else {
          await newUser.save();
          await sendEmail(email, newUser.uniqueString);

          res.json({
            success: true,
            from: "signup",
            message:
              "we send you a code to your email to validate it, please check your box to complete the signup",
          });
        }
      }
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: " 🚨Something went wrong, try again later",
      });
    }
  },
  signInUser: async (req, res) => {
    const { email, password, profile, from } = req.body.logedUser;
    try {
      const userExists = await User.findOne({ email });

      // const indexpass =userExists.from.indexOf(from)
      if (!userExists) {
        res.json({
          succes: false,
          message: "Your user has not been registered, please signIn",
        });
      } else {
        if (from !== "form-Signup") {
          let paswordAgree = userExists.password.filter((pass) =>
            bcryptjs.compareSync(password, pass)
          );
          if (paswordAgree.length > 0) {
            const userData = {
              id: userExists._id,
              fullName: userExists.fullName,
              email: userExists.email,
              profile: userExists.profile,
              from: userExists.from,
              from: from,
            };
            await userExists.save();

            const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, {
              expiresIn: 60 * 60 * 24,
            });

            res.json({
              success: true,
              from: from,
              response: { token, userData },
              message: "🤩Welcome " + userData.fullName,
            });
          } else {
            res.json({
              suceess: false,
              from: from,
              message:
                "You have not registered with " +
                from +
                " If you want to enter with this method you must do the signup with" +
                from,
            });
          }
        } else {
          if (userExists.emailVerified) {
            let paswordAgree = userExists.password.filter((pass) =>
              bcryptjs.compareSync(password, pass)
            );
            if (paswordAgree.length > 0) {
              const userData = {
                id: userExists._id,
                fullName: userExists.fullName,
                email: userExists.email,
                profile: userExists.profile,
                from: userExists.from,
              };
              const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, {
                expiresIn: 60 * 60 * 24,
              });

              res.json({
                success: true,
                from: from,
                response: { token, userData },
                message: " 🤩Welcome🤩 " + userData.fullName,
              });
            } else {
              res.json({
                success: false,
                from: from,
                message: "☹The username or password do not match☹",
              });
            }
          } else {
            res.json({
              success: false,
              from: from,
              message:
                "🙄You have not verified your email, please check your email box to complete your signUp🙄",
            });
          }
        }
      }
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "😴Something went wrong try again in a few minutes😴",
      });
    }
  },
  
  signOutUser: async (req, res) => {
    const email = req.body.closeUser;
    const user = await User.findOne({ email });
    await user.save();
    res.json(console.log(" 🙋‍♀️Closed session🙋‍♂️ " + email));
  },

  getAllUsers: async (req, res) => {
      try {
        const users = await User.find();
        let userArray = [];
        users.map((user) => {
          userArray.push({
                id: user._id,
                fullName:  user.fullName,
                profile: user.profile,
                lastName: user.lastName,
          });      
        });
        res.json({
          success: true,
          response: userArray,
          error: null,
        })
      } catch (error) {
        res.json({ success: false, response: null, error: error})
      }
  },

  verificarToken: (req, res) => {
    if (!req.err) {
      res.json({
        success: true,
        response: {
          id: req.user.id,
          fullName: req.user.fullName,
          email: req.user.email,
          profile: req.user.profile,
          from: "token",
        },
        message: "🤩Welcome Back🤩 " + req.user.fullName,
      });
    } else {
      res.json({
        success: false,
        message: "😥Please SignIn again",
      });
    }
  },

};

module.exports = userControllers;

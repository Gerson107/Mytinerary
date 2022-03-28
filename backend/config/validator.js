const joi = require("joi");

const validator = (req, res, next) => {
  
  const schema = joi.object({
    fullName: joi.string().max(20).min(3).trim().required().messages({
      "string.min": "el nombre debe contener mas de 3 caracteres",
    }),
    lastName: joi.string().max(20).min(3).trim().required().messages({
      "string.min": "tu apellido debe contener mas de 3 caracteres",
    }),
    email: joi.string().email({ minDomainSegments: 2 }).required().messages({
      "string.email": "formato incorrecto de email",
    }),
    password: joi
      .string()
      .pattern(new RegExp("[a-zA-Z0-9]"))
      .required()
      .trim()
      .min(8)
      .max(30)
      .messages({
        "string.min":
          "el password debe contener minimo 8 caracteres y contener mayusculas, minusculas y numeros",
        "string.pattern":
          "el password debe ser alphanumerico y contener un numero",
      }),
    profile: joi.string(),
    country: joi.string(),
    from: joi.string(),
  });

  const validation = schema.validate(req.body.userData, { abortEarly: false });
 
  if (validation.error) {
    return res.json({
      success: false,
      from: "validator",
      message: validation.error.details,
    });
  }

  next();
};
module.exports = validator;

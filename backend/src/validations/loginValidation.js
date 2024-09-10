const {body} = require('express-validator')

const loginValidation = [
    body('email')
        .notEmpty()
        .withMessage('el email es obligatorio')
        .isEmail()
        .withMessage('debe ser un email valido')
        .bail(),
    body('password')
        .notEmpty()
        .withMessage('la contraseña es obligatoria')
        .bail()
]

module.exports= {loginValidation}
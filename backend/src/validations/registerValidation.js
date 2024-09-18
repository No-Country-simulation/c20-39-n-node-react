const {body} = require('express-validator')
const db = require('../database/models')

const registerValidation = [
    body('name')
        .notEmpty()
        .withMessage('el nombre es obligatorio')
        .isAlpha('es-ES')
        .withMessage('solo se permiten caracteres alfabeticos')
        .bail(),
    body('email')
        .notEmpty()
        .withMessage('el email es obligatorio')
        .isEmail()
        .withMessage('debe ser un email valido')
        .custom(async(email)=>{
          try {
            const userInDB = await db.User.findOne({
                where : {email}
            })
            if(userInDB){
                return Promise.reject('el email ya se encuentra en la base de datos')
            }
        }
          catch (error) {
            console.log(error);            
          }})
        .bail(),
    body('password')
        .notEmpty()
        .withMessage('la contraseña es obligatoria')
        .isLength({min:2,max:8})
        .withMessage('la contraseña debe tener un minimo de 2 caracteres y maximo 8 caracteres')
        .bail()
]



module.exports = {registerValidation}
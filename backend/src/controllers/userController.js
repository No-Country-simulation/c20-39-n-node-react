const db = require('../database/models')
const sequelize = db.sequelize
const bcryptjs = require('bcrypt')
const { validationResult} = require('express-validator')

module.exports={
    registerUser: async(req,res)=>{
         let errors = validationResult(req)

        if(errors.isEmpty()){
            try {
                const{name,email,password}= req.body
    
                
                const newUser = await db.User.create({
                    name : name,
                    email,
                    password:bcryptjs.hashSync(password,10)                
                })
    
                return res.status(200).json({
                    ok:true,
                    data: newUser,
                    msg:"Usuario creado con exito"
                })
            } catch (error) {
                return res.status(error.status || 500).json({
                    ok:false,
                    msg : error.message
                })
            }
        } 
        
       
        return res.status(400).json({
            errors : errors.array()
        })
        

    }
}
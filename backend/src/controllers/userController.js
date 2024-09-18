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
                    name : name.replace(/ /g, ""),
                    email,
                    password:bcryptjs.hashSync(password.toString(),10)                
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
        

    },
    loginUser:async(req,res)=>{
        let errors = validationResult(req)

        if(errors.isEmpty()){
            try {
                const {email,password}= req.body
    
                let userInDb = await db.User.findOne(
                    {
                    where : {email},
                    attributes :{
                         exclude : ['createdAt','updatedAt','userId','resenasId']
                        }
                    }
                )
                
                let isOkPass = await bcryptjs.compare(password.toString(),userInDb.password)
    
                if(userInDb && isOkPass){
                    req.session.userLogged = userInDb
                    
                    return res.status(200).json({
                        ok:true,
                        msg : "Usuario logueado exitosamente",
                        data : userInDb                    
                    })
                }else if (!isOkPass){
                    return res.status(400).json({
                        ok : false,
                        error : "credenciales invalidas"
                    })
                }
            } catch (error) {
                return res.status(error.status || 500).json({
                    ok:false,
                    msg : error.message
                })
            }        
        }
            return res.status(400).json({
                ok:false,
                errors : errors.array()
            })
        
       
    }
}
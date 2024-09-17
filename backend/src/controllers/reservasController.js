const moment = require('moment')
const db = require('../database/models')
const sequelize = db.sequelize

module.exports = {
    listarReservaPorUsuario : async(req,res)=>{
        try {
            const userid = req.params.id
            const reservaPorUsuario = await db.User.findOne({
                where : {id : userid},
                include : [{
                    model : db.Reservations,
                    as : "reservas"
                }],
               attributes :{
                exclude : ['rolId','createdAt','updatedAt','resenasId']
               } 
            })

            return res.status(200).json({
                ok:true,
                data: reservaPorUsuario,
                coso: new Date()
            })
        } catch (error) {
            return res.status(500).json({
                ok:false,
                msg:error.message
            })
        }
    },
    crearReserva:async(req,res)=>{
        try {
            const {fecha,horaEntrada,horaSalida,cancha}= req.body

            const userParam = req.params.id
         
            
            const user = await db.User.findOne({
                where : {id : userParam}
            })
            
            const reservaEnBD = await db.Reservations.findOne({
                where : {
                    reservation_date : fecha,
                    start_time :`${fecha} ${horaEntrada}`,
                    end_time : `${fecha} ${horaSalida}`
                }
            }
            )
            if (reservaEnBD) {
                return res.status(400).json({
                    ok:false,
                    msg:"la reserva ya existe"
                })
                
            }else{
                const reserva = await db.Reservations.create({
                    reservation_date: fecha,
                    start_time:`${fecha} ${horaEntrada}`,
                    end_time:`${fecha} ${horaSalida}`,
                    userId : user.id,
                    canchasId : cancha
                })                               
    
                return res.status(201).json({
                    ok:true,
                    data : reserva,
                    msg : "Reserva exitosa!!",
                })
            }           

       

        } catch (error) {            
         return res.status(error.status || 500).json({
            ok:false,
            msg:error.message
         })   
        }
    }
}
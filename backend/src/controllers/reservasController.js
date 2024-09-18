const moment = require('moment')
const db = require('../database/models')
const { log } = require('console')
const sequelize = db.sequelize

module.exports = {
    listarReserva : async(req,res)=>{
        try {
            const reservas = await db.Reservations.findAll({
                order : [["reservation_date", "DESC"]],
                include : [{
                    model:db.Cancha,
                    as:"canchas",
                    attributes : ["id",'jugadores']
                }
                ],
                attributes :{
                    exclude : ['createdAt','updatedAt']
                   } 
            })
            return res.status(200).json({
                ok: true,
                data: reservas
            })
            
        } catch (error) {
            return res.status(500).json({
                ok:false,
                msg: error.message
            })
        }
    },
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

            
            const user = await db.User.findOne({
                where : {id : req.session.userLogged.id}
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
    },
    editarReserva : async(req,res)=>{
        try {
            const reservaId= req.params.id
            const {fecha,horaEntrada,horaSalida,cancha}= req.body

            await db.Reservations.update({
                reservation_date: fecha,
                    start_time:`${fecha} ${horaEntrada}`,
                    end_time:`${fecha} ${horaSalida}`,
                    userId : req.session.userLogged.id,
                    canchasId : cancha                
            },
        {
            where : {id:reservaId}
        })
        return res.status(200).json({
            ok: true,
            msg: "Reserva modificada exitosamente"
        })
            
        } catch (error) {
            return res.status(500).json(
               {ok:false,
               msg:error.message}
            );
            
        }
    },
    eliminarReserva : async(req,res)=>{
        try {
            const reservaId = req.params.id;
            await db.Reservations.destroy({
                where : {
                    id: reservaId
                }
            })
            return res.status(200).json({
                ok:true,
                msg : "la reserva ha sido eliminada!!"
            })
            
        } catch (error) {
            return res.status(500).json(
                {ok:false,
                msg:error.message}
             );
        }
    }
}
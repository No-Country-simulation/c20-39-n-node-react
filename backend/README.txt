/ BACKEND : 
PARA INICIAR EL PROYECTO INSTALAR LO SIGUIENTE:
npm init
npm install express mysql2 sequelize cors dotenv morgan cookie-parser bcrypt express-session

LUEGO CREAR EN LA CARPETA RAIZ ("./backend") el archivo .env con los siguientes datos(copiar y pegarlos asi como estan):

NODE_ENV=development


DB_USERNAME_DEV=root
DB_PASSWORD_DEV=root
DB_DATABASE_DEV=dbFulbitoNC
DB_HOST_DEV=127.0.0.1
DB_PORT_DEV=3306


UNA VEZ CREADO EL ARCHIVO .env, PODES CORRER EL SCRIPT :

npm run dev


y deberia levantar el servido con todas las apis

COMO USAR LAS APIS:

RUTAS USUARIOS:

con metodo "POST"

localhost:3000/api/users/ 
========>>>>>> esta es para registro, recibe:
"name":"string",
"email":"",
"password": "cualquier tipo de dato"

localhost:3000/api/users/login
==========>>>>>> esta es para logueo, recibe:
"email":"",
"password":""



RUTAS RESERVAS:

con metodo "GET"

localhost:3000/api/reservation/
=====Z>>>>> esta trae todas las reservas hechas hasta el momento

localhost:3000/api/reservation/:id

======ZZZZ esta trae las reservas hechas por el usuario pasado como parametro id


con metodo "POST"

localhost:3000/api/reservation/
==========>>>>> crea reserva, recibe :

"fecha":"YYYY-MM-DD",
"horaEntrada":"HH:MM:SS",
"horaSalida":"HH:MM:SS",
"cancha":(1,2 o 3)=====>>> son los id de las canchas

con metodo "PUT"

localhost:3000/api/reservation/:id
===========>>>> edita reserva, recibe:

"fecha":"YYYY-MM-DD",
"horaEntrada":"HH:MM:SS",
"horaSalida":"HH:MM:SS",
"cancha":(1,2 o 3)=====>>> son los id de las canchas


con metodo "DELETE"

localhost:3000/api/reservation/:id
===========>>>>> elimina la reserva por el id q es pasado por parametro

ESPERO Q SE ENTIENDA, SALUDOSSSSSS!!!!!

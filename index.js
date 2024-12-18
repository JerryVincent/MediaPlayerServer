// Step1 import json-server library
const jsonServer= require('json-server')
//Step2 create path for db.json file using router function for storing data.
const router= jsonServer.router('db.json')
//step3 create middleware to convert json to js- defaults()
const middleware = jsonServer.defaults()
// step4 create json-server
const mediaplayerServer= jsonServer.create()
// step5 server should use middleware and router(order important first middleware then router)
mediaplayerServer.use(middleware)
mediaplayerServer.use(router)
// Step6 set port for server(default port is 3000). To set port dynamically use process.env.PORT.
const PORT = 3000 || process.env.PORT
//step7 run server
mediaplayerServer.listen(PORT,()=>{
    console.log(`server running successfully at PORT ${PORT}`);
    
})

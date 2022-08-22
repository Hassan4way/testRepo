
const express=require("express")
const app=express()
const server=require("http").createServer(app)
const io=require("socket.io")(server)

const port =3000 
io.on("connection",socket=>{
    console.log("User Connected")
    socket.on("Chat message",msg=>{
        console.log("Server777777777777777777777777777777777777777777777777777",msg)
        io.emit("Chat message",msg)
    })
    
})
// io.on("connection",socket=>{
//     console.log("User Connected")
//     // socket.on("Chat message",msg=>io.emit("Chat message",msg))
    
// })


   
server.listen(port,()=>console.log("Server is running on port :",port))
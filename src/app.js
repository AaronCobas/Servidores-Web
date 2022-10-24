import express from "express"
import fs from "fs"
let data = fs.readFileSync("./products.json")
let products = JSON.parse(data)
const app = express();
const server = app.listen(8080,()=>console.log("Escuchando"))
app.get("/productos",(request, response)=> {
    response.send(products)
    })
app.get("/productos/productoRandom",(request, response)=> {
    let randomProduct = products[Math.floor(Math.random()*products.length)];
        response.send(randomProduct)
})
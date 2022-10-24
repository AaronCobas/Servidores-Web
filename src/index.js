import Manager from "./manager.js";
const manager = new Manager();


//Propiedades del nuevo producto que se quiera guardar
let product ={
    title: "Ventilador",
    price: 6000,
    thumbnail:"https://images.fravega.com/f1000/b664dd11e6ba5c6b6e448556bb9b3b3d.jpg",
}

//Guardar un nuevo producto
manager.save(product).then((response) =>{
    console.log(response)
})

//Eliminar un producto por su ID
// manager.deleteById(1).then((response) => {
//     console.log(response);
//     });

//Mostrar un producto por su ID
// manager.getById(2).then((response) =>{
//     console.log(response);
//     })

//Mostrar TODOS los produtcos
// manager.getAll().then((response) =>{
//     console.log(response)
// })

//Eliminar TODOS los productos
// manager.deleteAll()
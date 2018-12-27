/*  */

let sujeto = {
    nombre:"nombre",
    apellido:"apellido",
    poder:"",
    getNombre : () =>{
        return nombre
    }
}

let saludar = n => "Hola " + n;


//Destructuracion
let{ nombre:n1, apellido, poder} = sujeto
console.log(n1)
console.log(saludar("fff"))
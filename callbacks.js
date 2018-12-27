/*setTimeout(() => {
    console.log("Hola mundo")
}, 3000);*/

let getUsuarioById = (id, callback) =>{
    let usuario = {
        nombre :"Nombre1",
        id
    }

    if(id === 20){
        callback(`el usuario con id ${ id } no esta`)
    }else{
        callback(null, usuario);
    }
}


getUsuarioById(22, (err,usuario) => {
    if(err){
        return console.log(err)
    }
    console.log('usr bd', usuario);
}) 
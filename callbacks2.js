let empleados = [
    {
        id:1,
        nombre : "nombre1"
    },
    {
        id:2,
        nombre : "nombre1"
    },
    {
        id:3,
        nombre : "nombre1"
    }
];

let salarios = [
    {
        id:1,
        salario: 1000
    },
    {
        id:2,
        salario: 2000
    }
];

let getEmpleado = (id, callback) =>{
    let empleadoDB = empleados.find( empleado => empleado.id === id)    
    if(!empleadoDB){
        callback(`no existe empleado para el id: ${ id }`);
    }else{       
        callback(null, empleadoDB);
    }
    };

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find( salario => salario.id === empleado.id)
    if(!salarioDB){
        callback(`no existe empleado para el id: ${ empleado.id }`);
    }else{
        callback(null, { nombre: empleado.nombre, salario : salarioDB.salario});
    }
}

getEmpleado(3, (err, empleado) => {

    if(err){
        return console.log(err);
    }    

    getSalario(empleado, (err, resp) => {
        if(err){
            return console.log(err)
        }
        console.log(resp);
    });
});


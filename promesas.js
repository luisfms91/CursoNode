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

let getEmpleado = (id) =>{

    return new Promise((result, reject) => {

        let empleadoDB = empleados.find( empleado => empleado.id === id)    
        if(!empleadoDB){
            reject(`no existe empleado para el id: ${ id }`);
        }else{       
            result(empleadoDB);
        }
    });    
    };

let getSalario = (empleado) => {

    return new Promise((result, reject) => {
        let salarioDB = salarios.find( salario => salario.id === empleado.id)
        if(!salarioDB){
            reject(`no existe salario para el id: ${ empleado.id }`);
        }else{
            result({ nombre: empleado.nombre, salario : salarioDB.salario});
        }
    });
    
}
/*
getEmpleado(3).then(empleado => {
    console.log(empleado);
    getSalario(empleado).then(salario => {
        console.log(salario)
    }, (err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
});*/

getEmpleado(3).then(empleado => {
    return getSalario(empleado);
}).then(resp => {
    console.log(resp);
}).catch(err => {
    console.log(err);
});


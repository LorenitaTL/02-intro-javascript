const persona = {
    nombre: 'Hugo',
    apellido: 'Gurrola',
    edad: 26,
    direccion:{
        ciudad: 'Durango',
        zip:12345,
        lat:14.35654,
        lng:34.25684,
    }
}
const persona2 = {...persona};
persona2.nombre = 'Benjamin'

console.log (persona)
console.log (persona2)
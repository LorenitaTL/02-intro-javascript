//Desestructuración
//Asignación desestructurante
const persona ={
    nombre:'Lore',
    edad:23,
    clave:'ISC'
};

//const {nombre, edad, clave} = persona;

//console.log(nombre)
//console.log(edad)
//console.log(clave)

const useContext = ({nombre, edad, rango ='JR Dev', clave})=>{
    //console.log(nombre,edad, rango)
    return{
        nombreClave: clave,
        anios:edad,
        latlng:{
            lat:12.36548,
            lng:45.25832
        }
    }
}
const {nombreClave, anios, latlng:{lat,lng}} = useContext(persona)
console.log(nombreClave)
console.log(anios)
console.log(lat)
console.log(lng)
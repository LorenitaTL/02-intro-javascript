const nombre = 'Lorena'
const apellido = "Trujillo"

const nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto)

function getSaludo(nombre){
    return 'Hola '+nombre
}
console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`)
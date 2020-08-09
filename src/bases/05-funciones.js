//Fuunciones en JS
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;

console.log(saludar('Lore'))
console.log(saludar2('Lore'))
console.log(saludar3('Lore'))
console.log(saludar4('Lore'))

const getUser = () => (
    {
        uid: '456',
        username: 'Lorenita'
    }
)
const user = getUser()
console.log(user)

function getUsuarioActivo(nombre){
    return{
        uid: 'abc',
        username: nombre
    }
}
const usuarioActivo = getUsuarioActivo('LoreTL')
console.log(usuarioActivo)

const getUsuarioActivo2 = (nombre)=>{
    return {
        uid: 'abc',
        username: nombre
    }
}
console.log(getUsuarioActivo2('Lorenita TL'))
const getUsuarioActivo3 = (nombre)=>({
    uid: 'abc',
    username: nombre
})

console.log(getUsuarioActivo3('Lorenita9610'))
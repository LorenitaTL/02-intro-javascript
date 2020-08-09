//Desestructuración de arreglos

const personajes = ['IronMan', 'Capitan', 'Thor']

const [p1] = personajes;
console.log(p1)

const [, p2] = personajes;
console.log(p2)

const [, , p3] = personajes;
console.log(p3)

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros)


const useState = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
}

const [nombre, setNombre] = useState('Lore')
console.log(nombre)
setNombre()
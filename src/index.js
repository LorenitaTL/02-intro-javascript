//import {heroes} from './data/heroes'

//const { heroes } = require("./data/heroes");
//import { heroes } from "./data/heroes";
import {heroes, owners}  from "./data/heroes";

console.log(owners)

//find
const getHeroesById = (id)=> heroes.find((heroe)=> heroe.id===id);

console.log(getHeroesById(3))

//filter
const getHeroesByOwner = (owner)=> heroes.filter((heroe)=> heroe.owner===owner);

console.log(getHeroesByOwner('DC'))
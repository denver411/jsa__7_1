import Character from './js/Character/Character';
import Bowman from './js/Character/instances/Bowman';

const character = new Character('Котик');
const bowman = new Bowman();

console.log(character, bowman, bowman instanceof Character);

import Character from './character';
import Bowerman from './bowerman';
import Swordsman from './swordsman';
import Magician from './magician';
import Undead from './undead';
import Zombie from './zombie';
import Daemon from './daemon';

/* eslint-disable */

const hero = Character('Andy', 'Swordman', 100, 1, 25, 25);
console.log(hero);

const heroBowerman = Bowerman('Nike');
console.log(heroBowerman);

const heroSwordsman = Swordsman('Jilly');
console.log(heroSwordsman);

const heroMagician = Magician('Mike');
console.log(heroMagician);

const heroUndead = Undead('Belly');
console.log(heroUndead);

const heroZombie = Zombie('Zack');
console.log(heroZombie);

const heroDaemon = Daemon('Daemon');
console.log(heroDaemon);

/* eslint-enable */

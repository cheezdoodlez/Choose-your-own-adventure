// Character setup
const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);

const promptTwo = require('prompt-sync')();
console.log('What class will you choose?')
const characterClass = promptTwo('Warrior, Prisoner, Mage ')
console.log(`Your class is ${characterClass}`)

let characterChoice = (characterClass) // initially was ${characterClass}
if (characterChoice === 'Warrior') {
    warriorWeaponChoice()
} else if (characterChoice === 'Prisoner') {
    prisonerWeaponChoice()
} else if (characterChoice === 'Mage') {
    mageWeaponChoice()
}

//how do I get this to display the classes as a list before the question(Answered), Switch lines and variable for 24/25, 32/31, 39/38(done)

function warriorWeaponChoice() {
    const promptWarriorWeapon = require('prompt-sync')();
    console.log('What is your weapon of choice?')
    const warriorWeaponClass = promptWarriorWeapon('Katana Shortsword & shield Claymore ')
    console.log(`You have chosen ${warriorWeaponClass}`)
}

function prisonerWeaponChoice() {
    const promptPrisonerWeapon = require('prompt-sync')();
    console.log('What is your weapon of choice?')
    const prisonerWeaponClass = promptPrisonerWeapon('Ball & chain Soup ladel Bare-knuckle')
    console.log(`You have chosen 2 ${prisonerWeaponClass}`)
}

function mageWeaponChoice() {
    const promptMageWeapon = require('prompt-sync')();
    console.log('What is your weapon of choice?')
    const mageWeaponClass = promptMageWeapon('Staff of death Evil talisman Staff of light')
    console.log(`You have chosen 3 ${mageWeaponClass}`)
}


// Begin quest
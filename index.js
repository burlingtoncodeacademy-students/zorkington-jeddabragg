const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

start();

async function start() {
  const welcomeMessage = `You walk into the UVM ER waiting room and you're late for work. 
  You rushed out of the house and just realize you forgot your work badge and don't remember the 
  door code. To your right is a patient that you recognize. He looks drunk 
  and agitated, per usual. To your left is a new triage nurse that you've never seen before. In front 
  of you is the door with a keypad to get to your office and the patient rooms.`;
  let answer = await ask(welcomeMessage) 
  while (answer !== 'exit') {
  answer = await ask('>_ ')
  }
  if (answer === false) {
    console.log("I don't know that.")
  } else { 
    
  }
  process.exit();
}
class Triage {
  constructor(nurse, patient1, door, keypad) {
  this.nurse = nurse
  this.patient1 = patient1
  this.door = door
  this.keypad = keypad
}


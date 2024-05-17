import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define a class representing a Player
class Player {
  private name: string;
  private health: number;
  private energy: number;

  constructor(name: string) {
    this.name = name;
    this.health = 100; // Initial health
    this.energy = 100; // Initial energy
  }

  // Method to get player's name
  getName(): string {
    return this.name;
  }

  // Method to get player's health
  getHealth(): number {
    return this.health;
  }

  // Method to get player's energy
  getEnergy(): number {
    return this.energy;
  }

  // Method to decrease player's health
  decreaseHealth(amount: number): void {
    this.health -= amount;
    if (this.health <= 0) {
      console.log(`${this.name} has been defeated! Game over.`);
      rl.close();
    } else {
      console.log(`${this.name} has ${this.health} health remaining.`);
    }
  }

  // Method to decrease player's energy
  decreaseEnergy(amount: number): void {
    this.energy -= amount;
    if (this.energy <= 0) {
      console.log(`${this.name} has run out of energy! Game over.`);
      rl.close();
    } else {
      console.log(`${this.name} has ${this.energy} energy remaining.`);
    }
  }
}

// Define a class representing a Monster
class Monster {
  private name: string;
  private health: number;

  constructor(name: string) {
    this.name = name;
    this.health = 50; // Initial health
  }

  // Method to get monster's name
  getName(): string {
    return this.name;
  }

  // Method to get monster's health
  getHealth(): number {
    return this.health;
  }

  // Method representing a monster attack
  attack(player: Player): void {
    const damage = Math.floor(Math.random() * 10) + 1; // Random damage between 1 and 10
    console.log(
      `${this.name} attacks ${player.getName()} for ${damage} damage.`,
    );
    player.decreaseHealth(damage);
  }
}

// Create instance of Player and Monster
const player = new Player("Hero");
const monster = new Monster("Dragon");

// Simulate a battle
console.log(`A wild ${monster.getName()} appears!`);

function battle() {
  rl.question("Press enter to attack: ", () => {
    const playerAttack = Math.floor(Math.random() * 20) + 1; // Random attack between 1 and 20
    const energyConsumption = Math.floor(Math.random() * 10) + 1; // Random energy consumption between 1 and 10
    player.decreaseEnergy(energyConsumption);
    console.log(
      `${player.getName()} attacks ${monster.getName()} for ${playerAttack} damage.`,
    );
    monster.attack(player);
    if (player.getHealth() > 0 && player.getEnergy() > 0) {
      console.log(`======================`);
      console.log(`Next round:`);
      console.log(`Player's Health: ${player.getHealth()}`);
      console.log(`Player's Energy: ${player.getEnergy()}`);
      console.log(`Monster's Health: ${monster.getHealth()}`);
      console.log(`======================`);
      battle();
    } else {
      rl.close();
    }
  });
}

battle();












































// import * as readline from "readline";

// const rl = readline.createInterface({
//     input: Process.stdin,
//     output: Process.stout,
// });
// // define a class representing a player
// class player {
//     private name: string;
//     private health:number;
//     private energy:number;

//     constructor(name: string){
//         this.name    = name
//         this.health  = 100;  //initial health
//         this.energy  = 100;  //initial energy
//     }
//     // method to get player's name
//     getName(): string{
//         return this.name;
//     }
//     //  method to get players's health
//     getHealth(): number{
//         return this.health;
//     }
//      //  method to get players's energy
//      getEnergy(): number{
//         return this.energy;
//     }
//     //  method to decrease players's energy
//     decreaseHealth(amount:  number): void{
//         this.health-= amount;
//         if (this.health <= 0){
//             console.log(`${this.name} has been defeated! Game over.`);
//             rl.close();
//         }else {
//             console.log(`${this.name} has ${this.health} health remaining.`);
//         }
//     }
// }



































// #! /usr/bin/env node
// import inquirer from "inquirer";
// import chalk from "chalk";

// let doContinue = true;

// console.log(chalk.cyan.italic("\n\t **Welcome to the Adventurer Game**\t\n"));

// class Player{
//     name: string;
//     fuel: number = 100;

//     constructor(name: string){
//         this.name = name;
//     };
//     fuelDecrease(){
//         let fuel = this.fuel - 25
//         this.fuel = fuel
//     }
//     fuelIncrease(){
//         this.fuel = 100;
//     }

// };
// class Opponent {
//     name: string;
//     fuel: number = 100;

//     constructor(name: string){
//         this.name = name
//     }
// };

// let player = await inquirer.prompt({
//     type: "input",
//     name: "name",
//     message: chalk.yellowBright("Enter Player's Name:")
// });
// console.log(chalk.blue(player.name));

// let opponent = await inquirer.prompt({
//     type: "list",
//     name: "character",
//     message: chalk.red("Select your Opponent:"),
//     choices: [chalk.magentaBright("Skeleton"), chalk.greenBright("Assassin"), chalk.cyan("Zombie")]
// });
// console.log(chalk.magenta(opponent.character));

// let p1 = new Player(player.name);
// let o1 = new Player(opponent.character);

// while(doContinue){
// if(opponent.character === chalk.magentaBright("Skeleton")){

// let ask = await inquirer.prompt({
//     type: "list",
//     name: "action",
//     message: chalk.green("Select an Action:"),
//     choices: [chalk.red("Attack"), chalk.blue("Drink Portion"), chalk.yellow("Run For Your Life...")]
// });

// if(ask.action == chalk.red("Attack")){
//     let num = Math.floor(Math.random() * 2)

//     if(num > 0){
//         p1.fuelDecrease();
//         console.log(chalk.magentaBright(`\t${p1.name} fuel is ${p1.fuel}\t`));
//         console.log(chalk.yellowBright(`\t${o1.name} fuel is ${o1.fuel}\t`));
        
//     if(p1.fuel <= 0){
//         console.log(chalk.red.italic("\tYou Lose! Better Luck Next Time...\t"));
//         process.exit();
//     }
// }

//     if(num <= 0){
//         o1.fuelDecrease();
//         console.log(chalk.green(`\t${p1.name} fuel is ${p1.fuel}\t`));
//         console.log(chalk.yellow(`\t${o1.name} fuel is ${o1.fuel}\t`));

//     if(o1.fuel <= 0){
//         console.log(chalk.cyan.italic("\tCongratulations! You Won!\t"));
//         process.exit();
//     }
// }
// };
//     if(ask.action == chalk.blue("Drink Portion")){
//         p1.fuelIncrease();
//         console.log(chalk.magentaBright.italic(`\tDrink Health Portion. Your fuel is ${p1.fuel}\t`));
//     }
//     if(ask.action == chalk.yellow("Run For Your Life...")){
//         console.log(chalk.red.italic("\tSorry! You Lose! Better Luck Next Time...\t"));
//     }
// };


// if(opponent.character === chalk.greenBright("Assassin")){

// let ask = await inquirer.prompt({
//     type: "list",
//     name: "action",
//     message: chalk.green("Select an Action:"),
//     choices: [chalk.red("Attack"), chalk.blue("Drink Portion"), chalk.yellow("Run For Your Life...")]
// });

// if(ask.action == chalk.red("Attack")){
//     let num = Math.floor(Math.random() * 2)

//     if(num > 0){
//         p1.fuelDecrease();
//         console.log(chalk.magentaBright(`\t${p1.name} fuel is ${p1.fuel}\t`));
//         console.log(chalk.yellowBright(`\t${o1.name} fuel is ${o1.fuel}\t`));
        
//     if(p1.fuel <= 0){
//         console.log(chalk.red.italic("\tYou Lose! Better Luck Next Time...\t"));
//         process.exit();
//     }
// };
//     if(num <= 0){
//         o1.fuelDecrease();
//         console.log(chalk.green(`\t${p1.name} fuel is ${p1.fuel}\t`));
//         console.log(chalk.yellow(`\t${o1.name} fuel is ${o1.fuel}\t`));

//     if(o1.fuel <= 0){
//         console.log(chalk.cyan.italic("\tCongratulations! You Won!\t"));
//         process.exit();
//     }
// }; 
// };
// if(ask.action == chalk.blue("Drink Portion")){
//     p1.fuelIncrease();
//     console.log(chalk.magentaBright.italic(`\tDrink Health Portion. Your fuel is ${p1.fuel}\t`));
// }
// if(ask.action == chalk.yellow("Run For Your Life...")){
//     console.log(chalk.red.italic("\tSorry! You Lose! Better Luck Next Time...\t"));

// };
// };
// if(opponent.character === chalk.cyan("Zombie")){

//     let ask = await inquirer.prompt({
//         type: "list",
//         name: "action",
//         message: chalk.green("Select an Action:"),
//         choices: [chalk.red("Attack"), chalk.blue("Drink Portion"), chalk.yellow("Run For Your Life...")]
//     });
// if(ask.action == chalk.red("Attack")){
//         let num = Math.floor(Math.random() * 2)
    
//     if(num > 0){
//             p1.fuelDecrease();
//             console.log(chalk.magentaBright(`\t${p1.name} fuel is ${p1.fuel}\t`));
//             console.log(chalk.yellowBright(`\t${o1.name} fuel is ${o1.fuel}\t`));
            
//         if(p1.fuel <= 0){
//             console.log(chalk.red.italic("\tYou Lose! Better Luck Next Time...\t"));
//             process.exit();
//         }
//     }; 
//     if(num <= 0){
//         o1.fuelDecrease();
//         console.log(chalk.blue(`\t${p1.name} fuel is ${p1.fuel}\t`));
//         console.log(chalk.yellow(`\t${o1.name} fuel is ${o1.fuel}\t`));

//         if(o1.fuel <= 0){
//         console.log(chalk.cyan.italic("\tCongratulations! You Won!\t"));
//         process.exit();
//     }
// }; 
// };
// if(ask.action == chalk.blue("Drink Portion")){
//     p1.fuelIncrease();
//     console.log(chalk.magentaBright.italic(`\tDrink Health Portion. Your fuel is ${p1.fuel}\t`));
// }
// if(ask.action == chalk.yellow("Run For Your Life...")){
//     console.log(chalk.red.italic("\tSorry! You Lose! Better Luck Next Time...\t"));

// };

// };

// const startAgain = await inquirer.prompt(
//         {
//             type: "confirm",
//             name: "continue",
//             message: chalk.cyan("\nDo you want to Continue?\n"),
//             default: false
//         }
//     );  doContinue = startAgain.continue;
    
// };


import chalk from "chalk";
import inquirer from "inquirer";


class Player {
    name: string
    fuel: number = 100
    constructor(name: string) {
        this.name = name
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease() {
        this.fuel = 100
    }
}
class Opponent {
    name: string
    fuel: number = 100
    constructor(name: string) {
        this.name = name
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}


let player = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter Your Name:"
    }
]);
let opponent = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        choices: ["Skeleton", "Zombie", "Orc"],
        message: "Select Your Opponent:"
    }
]);


let p1 = new Player(player.name)
let o1 = new Player(opponent.select)

do {
    //Skeleton
    if (opponent.select == "Skeleton") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)

        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                choices: ["Attack", "Portion", "Run"],
                message: "Select Your Move:"
            }
        ]);

        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.yellow(`${o1.name} fuel is ${o1.fuel}`))
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time!"))
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuelDecrease()
                console.log(chalk.bold.blue(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"))
                    process.exit()
                }
            }
        }

        if (ask.option == "Portion") {
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`You used health portion, Your health is  ${p1.fuel}%`))
        }

        if (ask.option == "Run") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time!"))
            process.exit()
        }
    };

    //Zombie
    if (opponent.select == "Zombie") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)

        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                choices: ["Attack", "Portion", "Run"],
                message: "Select Your Move:"
            }
        ]);

        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.yellow(`${o1.name} fuel is ${o1.fuel}`))
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time!"))
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuelDecrease()
                console.log(chalk.bold.blue(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"))
                    process.exit()
                }
            }
        }

        if (ask.option == "Portion") {
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`You used health portion, Your health is  ${p1.fuel}%`))
        }

        if (ask.option == "Run") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time!"))
            process.exit()
        }
    };

    //Orc
    if (opponent.select == "Orc") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)

        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                choices: ["Attack", "Portion", "Run"],
                message: "Select Your Move:"
            }
        ]);

        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.yellow(`${o1.name} fuel is ${o1.fuel}`))
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time!"))
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuelDecrease()
                console.log(chalk.bold.blue(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"))
                    process.exit()
                }
            }
        }

        if (ask.option == "Portion") {
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`You used health portion, Your health is  ${p1.fuel}%`))
        }

        if (ask.option == "Run") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time!"))
            process.exit()
        }
    };
}
while (true)

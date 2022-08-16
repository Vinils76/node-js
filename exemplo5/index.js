import chalk from "chalk";


let aluno = "Bigode";
let idade = 21

if(idade >= 18) {
    console.log(`${aluno}, ${chalk.green ('é maior de idade')}`);
} else {
    console.log(`${aluno}, ${chalk.red ('é menor de idade')}`);
}

// Para instalar o chalk utilizamos o comando npm install chalk

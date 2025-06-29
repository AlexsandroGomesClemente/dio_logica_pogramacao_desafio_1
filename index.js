import readline from "readline";

//Function question serve para fazer o input do sistema.
function question(quest) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(quest, (res) => {
      rl.close();
      resolve(res);
    });
  });
}

//Function main serve para rodar o sistema.
async function main() {
  let heroName = await question("Qual o nome do seu herói? ");
  let missions = Number(await question("Quantos missões seu herói concluiu? "));
  let exp;

  for (let indicator = 0; indicator <= missions; indicator++) {
    if (indicator <= 10) {
      exp = missions * 100;
    } else if (indicator > 10 && indicator <= 20) {
      exp = missions * 200;
    } else {
      exp = missions * 300;
    }
  }

  if (exp < 1000) {
    console.log(`O herói ${heroName} está na divisão Ferro`);
  } else if (exp <= 2000) {
    console.log(`O herói ${heroName} está na divisão Bronze`);
  } else if (exp <= 3000) {
    console.log(`O herói ${heroName} está na divisão Prata`);
  } else if (exp <= 4000) {
    console.log(`O herói ${heroName} está na divisão Ouro`);
  } else if (exp <= 5000) {
    console.log(`O herói ${heroName} está na divisão Platina`);
  } else if (exp <= 6000) {
    console.log(`O herói ${heroName} está na divisão Ascendente`);
  } else if (exp <= 7000) {
    console.log(`O herói ${heroName} está na divisão Imortal`);
  } else if (exp <= 8000) {
    console.log(`O herói ${heroName} está na divisão Radiante`);
  }else {
    console.log(`O herói ${heroName} está na divisão Criador`);
  }
}

main();

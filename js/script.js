const usersMails = [
  "lucio@email.it",
  "giuseppe@email.it",
  "franco@email.it",
  "alice@email.it",
  "veronica@email.it",
  "stefania@email.it",
  "riccardo@email.it",
  "carlotta@email.it",
];

const userInput = prompt("Inserisci la tua email.", "gianni");
let userLogin = false;

for (let i = 0; i < usersMails.length; i++) {
  let checkMail = usersMails[i];
  if (userInput === checkMail) {
    userLogin = true;
  }
}
if (userLogin === true) {
  alert("Accesso autorizzato!");
} else alert("Accesso non autorizzato.");

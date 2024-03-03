let clients = ["John", "Marry", "Kate"];
let clientsHighPriority = [];
let clientsLowPriority = [];

function showClients() {
  for (let i = 0; i <= clients.length - 1; i++) {
    console.log(`${i + 1}. ${clients[i]}`);
  }
}
showClients();

let clienttName = prompt("Provide name of the client");


while (clientName) {

  let isImportant = confirm(`${clientName} is so importantat?`);
  if (isImportant) {
    clientsHighPriority.push(clientName);
  } else {
    clientsLowPriority.push(clientName);
  }
  clientName = prompt("Provide name of the client");
}


for (let i = clientsHighPriority.length - 1; i >= 0; i--) {
  clients.unshift(clientsHighPriority[i]);
}

for (let i = 0; i < clientsLowPriority.length; i++) {
  clients.push(clientsLowPriority[i]);
}


showClients();

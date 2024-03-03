let clients = ["John", "Marry", "Kate"];


function showClients() {
  for (let i = 0; i <= clients.length - 1; i++) {
    console.log(`${i + 1}. ${clients[i]}`);
  }
}
showClients();

let clientName = prompt("Provide name of the client");

while (clientName) {

  let isImportant = confirm(`${clientName} is so importantat?`);
  if (isImportant) {
      clients.unshift(clientName);
  } else {
    clients.push(clientName);
  }

  clientName = prompt("Provide name of the client");
}

showClients();

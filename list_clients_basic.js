let clients = ["John", "Marry", "Kate"];
let clientsHighPriority = ["Tob", "Pete"];
let clientsLowPriority = ["Vicky", "Lessly"];

function showClients() {
  for (let i = 0; i <= clients.length - 1; i++) {
    console.log(`${i + 1}. ${clients[i]}`);
  }
}

showClients();

for (let i = clientsHighPriority.length - 1; i >= 0; i--) {
  clients.unshift(clientsHighPriority[i]);
}
for (let i = 0; i < clientsLowPriority.length; i++) {
  clients.push(clientsLowPriority[i]);
}

showClients();

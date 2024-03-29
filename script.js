const render = (parentElement, data) => {
  const table = document.createElement("table");
  let tr;
  let td;

  data.employees.forEach((employee) => {
    tr = document.createElement("tr");

    Object.keys(employee).forEach((emploeeKey) => {
      td = document.createElement("td");
      if (emploeeKey === "photo") {
        let img = document.createElement("img");
        img.setAttribute("src", employee["photo"]);
        td.append(img);
      } else if (emploeeKey === "contacts") {
        const ul = document.createElement("ul");
        Object.keys(employee["contacts"]).forEach((contactsKey) => {
          if (employee["contacts"][contactsKey] !== "") {
            const li = document.createElement("li");
            const link = document.createElement("a");
            let prefix;
            if (contactsKey === "email") {
              prefix = "mailto:";
            } else if (contactsKey === "phone") {
              prefix = "tel:";
            } else if (contactsKey === "telegramm") {
              prefix = "tg:";
            } else if (contactsKey === "viber") {
              prefix = "viber:";
            }

            link.setAttribute("href", `${prefix}${employee["contacts"][contactsKey]}`);
            link.innerText = employee["contacts"][contactsKey];
            li.append(link);
            ul.append(li);
          }
        });
        td.append(ul);
      } else {
        td.innerText = employee[emploeeKey];
      }

      tr.append(td);
    });
    table.append(tr);
  });

  parentElement.append(table);
};

const content = document.getElementById("content");
render(content, data);

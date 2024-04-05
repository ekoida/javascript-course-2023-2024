const renderCache = {};

const search = (event, data) => {
  const phrase = event.target.value;

  data.employees.filter((employee) => {
    return employee.name.startsWith(phrase);
  });

  render(content, data);
};

//через переменную render обращаемся к arrow функции с аргументами: parentElement, data
const render = (parentElement, data) => {
  parentElement.innerHtml = "";
  //через переменную table создаем элемент "table"
  const table = document.createElement("table");
  //объявляем переменные tr и td
  let tr;
  let td;

  // column headers
  if (renderCache.headers) {
    tr = renderCache.headers;
  } else {
    tr = document.createElement("tr");
    data.fields.forEach((field) => {
      th = document.createElement("th");
      th.innerText = field;
      tr.append(th);
    });

    renderCache.headers = tr;
  }

  table.append(tr);

  // search form
  if (renderCache.searchForm) {
    tr = renderCache.searchForm;
  } else {
    tr = document.createElement("tr");
    td = document.createElement("td");
    td.colSpan = 5;

    let form = document.createElement("form");
    let input = document.createElement("input");
    input.placeholder = "Searcn here...";
    input.addEventListener("keyup", (event) => search(event, data));
    form.append(input);
    td.append(form);
    tr.append(td);

    renderCache.searchForm = tr;
  }

  table.append(tr);

  //Объект названный data имеет свойство employees, который является массивом, к каждому элементу из которых применить метод forEach
  data.employees.forEach((employee) => {
    // запускаем arrow функцию, которая...
    //..для каждого элемента массива employees(в данном случае -это объекты) создает элемент "tr" (ряд) - переменная tr
    tr = document.createElement("tr");
    //Object.keys -метод, который возвращает названия свойств объекта(keys) и к каждому key применяет метод forEach ...
    Object.keys(employee).forEach((emploeeKey) => {
      //..который запускает arrow функцию..
      td = document.createElement("td"); // по созданию элемнта "td" - переменная td
      if (emploeeKey === "photo") {
        //если свойсво объекта(emploeeKey) - это "photo" ...
        let img = document.createElement("img"); // тогда содать элемент "img" - переменная img..
        img.setAttribute("src", employee["photo"]); //..дать img атрибут "src" и заполнить значением url...
        td.append(img); //img ребенок td
      } else if (emploeeKey === "contacts") {
        //если свойсво объекта(emploeeKey) - это "contacts"...
        const ul = document.createElement("ul"); //создать элемент "ul" - переменная ul
        //Object.keys -метод, который возвращает названия свойств объекта "contacts"(keys) и к каждому key применяет метод forEach ...
        Object.keys(employee["contacts"]).forEach((contactsKey) => {
          if (employee["contacts"][contactsKey] !== "") {
            //если (описывается путь к содержанию? key не пустая строка)..
            const li = document.createElement("li"); //создать элемент li - переменная li
            const link = document.createElement("a"); //создать элемент а - переменная а
            let prefix; //объявление переменной prefix
            if (contactsKey === "email") {
              //если свойсво объекта(emploeeKey) -это "email"...
              prefix = "mailto:"; // тогда ....
            } else if (contactsKey === "phone") {
              prefix = "tel:";
            } else if (contactsKey === "telegramm") {
              prefix = "tg:";
            } else if (contactsKey === "viber") {
              prefix = "viber:";
            }

            link.setAttribute("href", `${prefix}${employee["contacts"][contactsKey]}`); //link(а) дать атрибут "href" и заполнить значением префикса и соответственно номером телефона или э.почтой, или вайбером итд
            link.innerText = employee["contacts"][contactsKey]; //в <а> записать contactsKey (это,м.б: email,phone, telegramm )
            li.append(link); //link -ребенок li
            ul.append(li); //li-ребенок ul
          }
        });
        td.append(ul); //ul-ребенок td
      } else {
        //если это не контакты запиши значение оставшихся Key
        td.innerText = employee[emploeeKey];
      }

      tr.append(td);
    });
    table.append(tr);
  });

  parentElement.append(table);
};

//найди элемент с id content; и это нахождение назови переменной content
const content = document.getElementById("content");
//примени функцию рендер, аргументы которой <section id="content">, и объект data
render(content, data);

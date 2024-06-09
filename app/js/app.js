fetch("/api/product")
  .then((response) => response.json())
  .then((json) => {
    const h1 = document.createElement("h1");
    h1.innerText = json.title;
    document.body.append(h1);

    const h2 = document.createElement("h2");
    h2.innerText = json.subtitle;
    document.body.append(h2);

    const img = document.createElement("img");
    img.src = json.image;
    document.body.append(img);

    const ul = document.createElement("ul");
    json.tags.forEach((tag) => {
      const li = document.createElement("li");
      li.innerText = tag;
      ul.append(li);
    });
    document.body.append(ul);

    const p = document.createElement("p");
    p.innerText = json.description;
    document.body.append(p);

    const price = document.createElement("p");
    price.innerText = `${json.price.amount} ${json.price.currency}`;
    document.body.append(price);

    const button = document.createElement("button");
    button.innerText = "ORDER";
    document.body.append(button);

    // pass here id as a argument of the function
    button.addEventListener("click", () => orderProduct(json.id));
  })
  .catch((error) => console.log(error));

const createDOMElement = (element, options) => {
  const el = document.createElement(element);
  if (options) {
    const keys = Object.keys(options);
    keys.forEach((key) => el.setAttribute(key, options[key]));
  }

  return el;
};

const validate = (value) => {
  if (value === "") {
    return false;
  }

  return true;
};

const orderProduct = (productId) => {
  const form = document.createElement("form");

  const inputEmail = createDOMElement("input", {
    placeholder: "Enter your email...",
    name: "orderEmail",
    id: "orderEmail",
  });

  const inputID = createDOMElement("input", {
    type: "hidden",
    value: productId,
    name: "productId",
    id: "productId",
  });

  const addresInput = createDOMElement("input", {
    placeholder: "Add delivery address...",
    name: "address",
    id: "address",
  });

  const phoneNumber = createDOMElement("input", {
    type: "phone",
    placeholder: "+(373)555-444",
    name: "phone",
    id: "phone",
  });

  const pin = createDOMElement("input", {
    placeholder: "choose a secret PIN - 4 numbers",
    type: "password",
    name: "orderPin",
    id: "orderPin",
  });

  // HW1 - set a max/min values
  // so the user is limitted to the 1...10 range
  const quantity = createDOMElement("input", {
    placeholder: "add queantity",
    type: "number",
    name: "orderQuantity",
    id: "orderQuantity",
    value: 1,
    min: 1,
    max: 10,
  });

  quantity.addEventListener("blur", (e) => {
    if (e.target.value < 1 || e.target.value > 10) {
      alert("Value should be in range from 1 to 10");
      e.target.value = 1;
    }
  });

  const button = document.createElement("button");
  button.innerText = "Confirm Order";
  button.addEventListener("click", (e) => {
    // stop default behavior of the form
    e.preventDefault();

    if (
      !validate(document.querySelector("#orderEmail").value) ||
      !validate(document.querySelector("#address").value) ||
      !validate(document.querySelector("#phone").value)
    ) {
      alert("Please fill all fields!");
      return;
    }

    // HW* - clean the form after order placement

    const formData = new FormData(document.querySelector("form"));
    const body = Object.fromEntries(formData);
    fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({
        // HW* : how to fetch form data
        ...body,
        // productId: document.querySelector("#productId").value,
        // orderEmail: document.querySelector("#orderEmail").value,
        // address: document.querySelector("#address").value,
        // phone: document.querySelector("#phone").value,
        // pin: document.querySelector("#orderPin").value,
        // quantity: document.querySelector("#orderQuantity").value,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        // on success we change the text inside of the button
        e.target.innerText = json.message;
      })
      .catch((err) => {
        alert("error");
      })
      .finally(() => {
        const inputs = form.querySelectorAll("input:not([type='hidden'])");
        inputs.forEach((input) => {
          if (input.type === "number") {
            input.value = 1;
          } else {
            input.value = "";
          }
        });
      });
  });

  form.append(
    inputID,
    inputEmail,
    addresInput,
    phoneNumber,
    quantity,
    pin,
    button
  );

  document.body.replaceChild(form, document.body.lastElementChild);
};

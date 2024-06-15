let products = [];
let currentProductIndex = 0;
const pageContent = document.querySelector("#pageContent");

fetch("/api/product", { method: "GET" })
  .then((response) => response.json())
  .then((productsData) => {
    products = productsData;

    renderProduct(currentProductIndex);
  })
  .catch((error) => console.log(error));

const renderProduct = (currentProductIndex) => {
  pageContent.innerHTML = "";
  const product = products[currentProductIndex];

  const h1 = document.createElement("h1");
  h1.innerText = product.title;

  const h2 = document.createElement("h2");
  h2.innerText = product.subtitle;

  const img = document.createElement("img");
  img.src = product.image;

  const ul = document.createElement("ul");
  product.tags.forEach((tag) => {
    const li = document.createElement("li");
    li.innerText = tag;
    ul.append(li);
  });

  const p = document.createElement("p");
  p.innerText = product.description;

  const price = document.createElement("p");
  price.innerText = `${product.price.amount} ${product.price.currency}`;

  const button = document.createElement("button");
  button.innerText = "ORDER";
  document.body.append(button);

  // pass here id as a argument of the function
  button.addEventListener("click", () => orderProduct(product.id));

  // controls
  // HW1 - make the prev button
  // HW2 - make limits to not have errors
  // HW3* - use another carousel (bootstrap... etc)
  let arrowNext = document.createElement("button");
  arrowNext.innerText = ">>>";
  arrowNext.addEventListener("click", () => {
    currentProductIndex++;
    if (currentProductIndex > products.length -1) {
      currentProductIndex = 0;
    }
    renderProduct(currentProductIndex);
  });

  let arrowPrev = document.createElement("button");
  arrowPrev.innerText = "<<<";
  arrowPrev.addEventListener("click", () => {
    currentProductIndex--;
    if (currentProductIndex < 0) {
      currentProductIndex = products.length - 1;
    }
    renderProduct(currentProductIndex);
  });

  pageContent.append(h1, h2, img, ul, p, price, arrowPrev, arrowNext, button);
};

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

    const formData = new FormData(document.querySelector("form"));
    const body = Object.fromEntries(formData);
    fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({ ...body }),
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

  pageContent.replaceChild(form, pageContent.lastElementChild);
};

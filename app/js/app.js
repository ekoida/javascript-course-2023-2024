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

// HW1 - validate so the user doesn't leave empty fields
const validate = (value) => {
  if (value === "") {
    return false;
  }

  return true;
};

const orderProduct = (productId) => {
  const form = document.createElement("form");

  const inputEmail = document.createElement("input");
  inputEmail.placeholder = "Enter your email...";
  inputEmail.id = "orderEmail";

  // add new input to keep id
  const inputID = document.createElement("input");
  // make it hiddnen from UI
  inputID.type = "hidden";
  inputID.value = productId;
  // set id to easier searchin DOM
  inputID.id = "productId";

  const addresInput = createDOMElement("input", {
    placeholder: "Add delivery address...",
    id: "address",
  });
  const phoneNumber = createDOMElement("input", {
    type: "phone",
    placeholder: "+(373)555-444",
    id: "phone",
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

    // Hw2* - add more fields: phone number, address... (any)
    fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({
        // Set the values into JSON object
        productId: document.querySelector("#productId").value,
        orderEmail: document.querySelector("#orderEmail").value,
        address: document.querySelector("#address").value,
        phone: document.querySelector("#phone").value,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        // on success we change the text inside of the button
        e.target.innerText = json.message;
      })
      .catch((err) => {
        alert("error");
      });
  });

  form.append(inputEmail, addresInput, phoneNumber, inputID, button);

  document.body.replaceChild(form, document.body.lastElementChild);
};

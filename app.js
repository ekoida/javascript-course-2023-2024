let order = {
  name: "Pizza",
  price: 100,
  quantity: 0,
  available: true,
  image:
    "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
};

function increaseQuantity() {
  order.quantity++;
  if (order.quantity <= 10) {
    showOrder();
  }
}

function decreaseQuantity() {
  order.quantity--;
  if (order.quantity >= 0) {
    showOrder();
  }
}

function showOrder() {
  content.innerHTML = `
<h2>${order.name}</h2>
<img src="${order.image}" width="200" />
<p>${order.price}</p>
<p>${order.available ? "available" : "not available"}</p>
${
  order.available
    ? `<div>
<button onclick="decreaseQuantity()">-</button>
<span>${order.quantity}</span>
<button onclick="increaseQuantity()">+</button>
</div>`
    : ""
}
${order.quantity === 0 ? "" : `<div>Total cost: ${order.price} x ${order.quantity} = ${order.price * order.quantity}  </div>`}
`;
}

showOrder();

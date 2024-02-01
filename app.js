let order = {
  name: "Pizza",
  price: 100,
  quantity: 0,
  available: true,
  image:
    "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
};

function increaseQuantity() {
  if (order.quantity < 10) {
    order.quantity++;
    showOrder();
  }
}

function decreaseQuantity() {
  if (order.quantity > 0) {
    order.quantity--;
    showOrder();
  }
}

function showOrder() {
  content.innerHTML = `
<h2 class="text">${order.name}</h2>
<img src="${order.image}" width="200" />
<p class="text"><b>Price: </b> ${order.price}MDL</p>
<p class="text">${order.available ? "available" : "not available"}</p>
${
  order.available
    ? `<div>
<button onclick="decreaseQuantity()" class="counter">-</button>
<span><b>${order.quantity}</b></span>
<button onclick="increaseQuantity()" class="counter">+</button>
</div>`
    : ""
}
${order.quantity === 0 ? "" : `<div class="text"><b>Total cost:</b> ${order.price} x ${order.quantity} = ${order.price * order.quantity}MDL</div>`}
`;
}

showOrder();

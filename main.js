const friends = ["johny", "marry", "pete"];

const friendsPanel = document.getElementById("friendsPanel");
const searchInput = friendsPanel.children[1];

const renderFriends = (parentElement, friends) => {
  let ul = document.createElement("ul");

  let li = document.createElement("li");

  // version with for loop
  // for (let i = 0; i < friends.length; i++) {
  //   let clone = li.cloneNode(true);
  //   clone.innerText = friends[i];

  //   ul.appendChild(clone);
  // }

  // fersion with forEach
  friends.forEach((friend) => {
    let clone = li.cloneNode();
    clone.innerText = friend;

    ul.appendChild(clone);
  });

  parentElement.appendChild(ul);
};

searchInput.onkeyup = () => {
  console.log(searchInput.value);
};

renderFriends(friendsPanel, friends);

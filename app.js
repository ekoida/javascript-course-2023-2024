const renderLikeBtn = (rootElement) => {
  let btn = document.createElement("button");
  btn.innerText = "Like";
  btn.onclick = likePost;
  rootElement.appendChild(btn);
};

let likesCounter = 0;
const likePost = () => {
  const btn = document.querySelector("button");
  likesCounter++;
  btn.innerText = `${likesCounter} Like${likesCounter > 1 ? "s" : ""}`;
};
const rootElement = document.getElementById("post");
renderLikeBtn(rootElement);

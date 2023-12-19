console.log("Hello World!");

const btnField: HTMLElement = document.querySelector(".card-btn");

let btn = document.createElement("button");
btn.addEventListener("click", () => {
  console.log("click");
});
btn.textContent = "Valider";

btnField.appendChild(btn);

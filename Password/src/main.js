import "./style.css";
let input = document.querySelector(".mdp input");
let showbtn = document.querySelector(".mdp i");
showbtn.onclick = function () {
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
    showbtn.classList.remove("Active");
  }
};

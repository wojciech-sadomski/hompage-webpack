import "../scss/main.scss";
import moment from "moment";
/* place your code below */
const name = "Wojciech Sadomski";
const age = 36;
const heading = document.querySelector(".global-header--js");
if (heading) {
  heading.innerHTML = `Mam na imię ${name} i mam ${age} lat`;
}
console.log("Dzień dobry, co mi tu w kod zaglądasz 😃");
function calculate(myNumber) {
  console.log(myNumber);
  return myNumber * 7;
}
const myReasult = calculate(age);
console.log(myReasult);

const hello = () => {
  alert(`Dzień dobry nazwyam sie ${name}i mam ${age}lat`);
};
const notatkiWTFtext =
  "Planuję dodać tutaj listy z poszczególnymi tygodniami podzielone na odcinki żeby sobie szybciej sprawdzać co gdzie było";

const createContent = function (querySelectorConten, conten) {
  const element = document.querySelector(querySelectorConten);
  if (element) {
    element.innerHTML = conten;
  }
};

createContent(".section__text--js", notatkiWTFtext);
const nav = document.querySelector(".navigation--js");
const headerFoto = document.querySelector(".section__foto--js");
if (headerFoto) headerFoto.addEventListener("click", hello);

const btn = document.querySelector(".hamburger--js");
const menu = function () {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
};
//Pobieranie danych z zewnątrz

fetch("https://api.github.com/users/wojciech-sadomski/repos")
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const { name, html_url } = repo;
      const repositoryList = document.querySelector(".section__text--list");
      const myTemplate = `<li> ${name} <a href="${html_url}" title="link do repozytorium ${name}">Link do GitHub</a></li>`;
      repositoryList.innerHTML += myTemplate;
    }
  })

  .catch((error) => {
    console.log("Nie udało się pobrać");
  });

// Stefan
console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
const clock = document.querySelector(".clock--js");
const time = moment().format("MMM Do YY");
clock.innerHTML = `${time}`;
btn.addEventListener("click", menu);

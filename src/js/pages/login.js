import { forbiddenWords as fw } from "../constants/forbiddenWords.js";

const form = document.getElementById("login-form");

// La gestion de l'événement submit
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");
});

const email = document.getElementById("email");

// la gestion de l'évenement input
email.addEventListener("input", function (event) {
  console.log(event.target.value);

  const pattern = new RegExp(/^[a-z@.]{4,}$/, "g");

  if (pattern.test(event.target.value) == true) {
    email.style.outline = "green 1px solid";
  } else {
    email.style.outline = "red 1px solid";
  }
});
const password = document.getElementById("password");
password.addEventListener("input", function (event) {
  console.log(event.target.value);
  console.log(event.target.value);

  if (event.target.value == "") {
    const errorSmall = document.getElementById("error-password");
    errorSmall.innerHTML = "";
  }

  for (const word of fw) {
    // pour chaque mot du tableau

    if (event.target.value == word) {
      // si la valeur de la cible est égale à un mot du tableau

      const errorSmall = document.getElementById("error-password");
      errorSmall.innerHTML =
        "<p class='error-message'> Vous avez écrit une bêtise <p>";
      errorSmall.style.color = "#fff";
    }
  }
});

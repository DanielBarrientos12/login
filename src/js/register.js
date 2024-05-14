import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const form = document.forms["loginForm"];

form.addEventListener("submit", function handleFormSubmit(event) {
  event.preventDefault();

  const email = form["email"].value;
  const password = form["password"].value;
  const confirmPassword = form["confirm-password"].value;

  if (password === confirmPassword) {
    createUser(email, password);
  } else {
    let errorMessage = document.createElement("p");
    errorMessage.id = "password-error-message";
    errorMessage.style.color = "#f00";
    form.appendChild(errorMessage);

    errorMessage.textContent =
      "La contraseña y la confirmación de la contraseña no son iguales.";
  }
});

function createUser(email, password) {
  console.log("Creando cuenta...");
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Cuenta creada con éxito", userCredential.user);
      alert("Cuenta creada con éxito");
    })
    .catch((error) => {
      console.error(error);
      alert("Error creando la cuenta: " + error.message);
    });
}

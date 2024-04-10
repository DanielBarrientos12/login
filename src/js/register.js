import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const form = document.forms["loginForm"];

form.addEventListener("submit", function handleFormSubmit(event) {
  event.preventDefault();

  const email = form["email"].value;
  const password = form["password"].value;
  const confirmPassword = form["confirm-password"].value; // Asegúrate de obtener el valor con .value

  console.log(email, password);
  if (password === confirmPassword) {
    createUser(email, password);
  } else {
    // Crear o actualizar un mensaje de error de contraseña no coincidente
    let errorMessage = document.getElementById("password-error-message");
    if (!errorMessage) {
      errorMessage = document.createElement("p");
      errorMessage.id = "password-error-message";
      errorMessage.style.color = "red"; // Estilo de ejemplo, ajusta según necesites
      form.appendChild(errorMessage); // Asumiendo que quieres añadir el mensaje al final del formulario
    }
    errorMessage.textContent =
      "La contraseña y la confirmación de la contraseña no son iguales.";
  }
});

function createUser(email, password) {
  console.log("Creando cuenta...");
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Usar userCredential en lugar de user
      console.log("Cuenta creada con éxito", userCredential.user);
      alert("Cuenta creada con éxito");
    })
    .catch((error) => {
      console.error(error);
      alert("Error creando la cuenta: " + error.message);
    });
}

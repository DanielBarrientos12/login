import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const form = document.forms["loginForm"];

form.addEventListener("submit", function handleFormSubmit(event) {
  event.preventDefault();

  const email = form["email"].value;
  const password = form["password"].value;

  loginUser(email, password);
});

function loginUser(email, password) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Credenciales correctas, ¡bienvenido!");
      localStorage.setItem("user", JSON.stringify(userCredential.user));
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Asegúrate de importar getAuth y signInWithEmailAndPassword en tu archivo index.js
// Esta parte ya debería estar definida en index.html, pero necesitas usar getAuth y signInWithEmailAndPassword
// que deberían importarse de manera similar si decides mover tus importaciones a módulos externos.

// Importa getAuth y signInWithEmailAndPassword directamente desde el CDN en tu archivo HTML o módulo JavaScript si es necesario
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const form = document.forms['loginForm'];

form.addEventListener('submit', function handleFormSubmit(event) {
  event.preventDefault();

  const email = form['email'].value;
  const password = form['password'].value;

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

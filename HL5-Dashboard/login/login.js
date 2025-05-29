const form = document.querySelector("form"),
  eField = form.querySelector(".email"),
  eInput = eField.querySelector("input"),
  pField = form.querySelector(".password"),
  pInput = pField.querySelector("input");

const validUsers = ["EvelynJim", "MelchorArroyo", "PabloRostro", "FabianEli", "JoseFuentes"];
const validPassword = "equipoHL5";

form.onsubmit = (e) => {
  e.preventDefault();

  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(() => {
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = () => { checkEmail(); }
  pInput.onkeyup = () => { checkPass(); }

  function checkEmail() {
    const errorTxt = eField.querySelector(".error-txt");

    if (eInput.value == "") {
      eField.classList.add("error");
      eField.classList.remove("valid");
      errorTxt.innerText = "El nombre de usuario no puede estar vacío";
    } else if (!validUsers.includes(eInput.value)) {
      eField.classList.add("error");
      eField.classList.remove("valid");
      errorTxt.innerText = "Usuario no válido";
    } else {
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass() {
    const errorTxt = pField.querySelector(".error-txt");

    if (pInput.value == "") {
      pField.classList.add("error");
      pField.classList.remove("valid");
      errorTxt.innerText = "La contraseña no puede estar vacía";
    } else if (pInput.value !== validPassword) {
      pField.classList.add("error");
      pField.classList.remove("valid");
      errorTxt.innerText = "Contraseña incorrecta";
    } else {
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  // Si ambos son válidos, redirige
  if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
    window.location.href = form.getAttribute("action"); // redirige a la URL del atributo action
  }
};

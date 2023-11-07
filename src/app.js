/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here

// Agrega este código en el mismo archivo
document.addEventListener("DOMContentLoaded", function() {
  document
    .getElementById("submitBtn")
    .addEventListener("click", function(event) {
      event.preventDefault(); // Detiene el envío del formulario

      // Realiza la validación de los campos aquí
      // Por ejemplo:
      const cardNumber = document.getElementById("Card#").value;
      const cvc = document.getElementById("CVC#").value;
      const amount = document.getElementById("amount").value;

      // Lógica de validación
      let isValid = true;
      if (!cardNumber || cardNumber.length !== 16) {
        // Card # no válido
        isValid = false;
        document.getElementById("Card#").style.backgroundColor = "lightcoral";
      } else {
        document.getElementById("Card#").style.backgroundColor = "";
      }

      if (!cvc || cvc.length !== 4) {
        // CVC # no válido
        isValid = false;
        document.getElementById("CVC#").style.backgroundColor = "lightcoral";
      } else {
        document.getElementById("CVC#").style.backgroundColor = "";
      }

      if (!amount || isNaN(amount)) {
        // Amount no válido
        isValid = false;
        document.getElementById("amount").style.backgroundColor = "lightcoral";
      } else {
        document.getElementById("amount").style.backgroundColor = "";
      }

      // Muestra u oculta el mensaje de error
      const errorMessage = document.getElementById("dangerous");
      if (!isValid) {
        errorMessage.style.display = "block"; // Muestra el mensaje de error
      } else {
        errorMessage.style.display = "none"; // Oculta el mensaje de error
      }
    });
});

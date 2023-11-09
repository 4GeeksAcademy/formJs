/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", function() {
  document
    .getElementById("submitBtn")
    .addEventListener("click", function(event) {
      event.preventDefault(); // Detiene el envío del formulario

      // Lógica de validación
      let isValid = true;
      const errorMessages = [];

      const fieldsToValidate = [
        { id: "Card#", validation: validateCardNumber },
        { id: "CVC#", validation: validateCVC },
        { id: "amount", validation: validateAmount },
        { id: "FirstName#", validation: validateFirstName },
        { id: "LastName#", validation: validateLastName },
        { id: "city", validation: validateCity },
        { id: "postalcode", validation: validatePostalCode }
      ];

      fieldsToValidate.forEach(field => {
        const element = document.getElementById(field.id);
        const value = element.value;
        if (!field.validation(value)) {
          isValid = false;
          element.style.backgroundColor = "lightcoral";
          errorMessages.push(`Invalid ${field.id}`);
        } else {
          element.style.backgroundColor = "white";
        }
      });

      if (!isValid) {
        // Mostrar errores en la parte superior del formulario
        const errorContainer = document.getElementById("dangerous");
        if (errorMessages.length > 0) {
          errorContainer.innerHTML = errorMessages.join("<br>");
          errorContainer.style.display = "block";
        } else {
          errorContainer.style.display = "none";
        }
      }
    });
});

// Funciones de validación
function validateCardNumber(value) {
  // Lógica de validación para el número de tarjeta
  return /^\d{16}$/.test(value);
}

function validateCVC(value) {
  // Lógica de validación para el CVC
  return /^[0-9]{3,4}$/.test(value);
}

function validateAmount(value) {
  // Lógica de validación para el monto
  return !isNaN(value) && parseFloat(value) > 0;
}

function validateFirstName(value) {
  // Lógica de validación para el nombre
  return /^[A-Za-z]+$/.test(value);
}

function validateLastName(value) {
  // Lógica de validación para el apellido
  return /^[A-Za-z]+$/.test(value);
}

function validateCity(value) {
  // Lógica de validación para la ciudad
  return /^[A-Za-z\s]+$/.test(value);
}

function validatePostalCode(value) {
  // Lógica de validación para el código postal
  return /^\d{5}$/.test(value);
}

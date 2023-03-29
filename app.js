const back = document.getElementById("back");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const cardNumber = document.getElementById("cardNumber");
const cardExp = document.getElementById("cardExp");
const cvv = document.getElementById("cvv");
const submit = document.getElementById("submit");

back.addEventListener("click", (e) => {
  if (e.target.id === "back") {
    window.location.href = "https://mjmealey.github.io/central-page/";
  }
});

firstName.addEventListener("input", (e) => {
  if (e.target.id === "firstName") {
    if (firstName.validity.patternMismatch) {
      firstName.setCustomValidity(
        "Please enter the first name that is on your card"
      );
    } else {
      firstName.setCustomValidity("");
    }
  }
});

lastName.addEventListener("input", (e) => {
  if (e.target.id === "lastName") {
    if (lastName.validity.patternMismatch) {
      lastName.setCustomValidity(
        "Please enter the last name that is on your card"
      );
    }
  }
});

cardNumber.addEventListener("input", (e) => {
  if (e.target.id === "cardNumber") {
    if (cardNumber.validity.patternMismatch) {
      cardNumber.setCustomValidity(
        "Please enter the 16 digit number on your card"
      );
    } else if (cardNumber.validity.tooShort) {
      cardNumber.setCustomValidity(
        "Please enter the 16 digit number on your card"
      );
    } else {
      cardNumber.setCustomValidity("");
    }
  }
});

cardExp.addEventListener("input", (e) => {
  if (e.target.id === "cardExp") {
    if (cardExp.validity.tooLong) {
      cardExp.setCustomValidity(
        "Please enter a card expiration date that is before or exactly 1-1-29"
      );
    } else if (cardExp.validity.tooShort) {
      cardExp.setCustomValidity(
        "Please enter a card expiration date that is after or exactly 1-1-24"
      );
    } else {
      cardExp.setCustomValidity("");
    }
  }
});

cvv.addEventListener("input", (e) => {
  if (e.target.id === "cvv") {
    if (cvv.validity.tooLong) {
      cvv.setCustomValidity(
        "Please enter the 3-4 digit cvv number on your card"
      );
    } else if (cvv.validity.tooShort) {
      cvv.setCustomValidity(
        "Please enter the 3-4 digit cvv number on your card"
      );
    } else {
      cvv.setCustomValidity("");
    }
  }
});

submit.addEventListener("input", (e) => {
  if (e.target.id === "submitButton") {
    if (
      firstName.validity() &&
      lastName.validity() &&
      cardNumber.validity() &&
      cardExp.validity() &&
      cvv.validity()
    ) {
      window.location.href = "https://mjmealey.github.io/update-card/";
    }
  }
});

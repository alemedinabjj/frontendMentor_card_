let nameCard = document.getElementById("namecard");
let numCard = document.getElementById("numcard");
let cvv = document.getElementById("cvv");

let ccvvalue = document.getElementById("ccv");

let numchange = document.getElementById("numchange");
let namechange = document.getElementById("namechange");

let day = document.getElementById("dia");
let month = document.getElementById("mes");

const nameValid = document.querySelector("#nameValid");
const numValid = document.querySelector("#numValid");

const regexCardByType = {
  Visa: /^4[0-9]{12}(?:[0-9]{3})/,
  Mastercard:
    /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/,
  Amex: /^3[47][0-9]{13}/,
  DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
  Discover:
    /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
  JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
};

const getCardType = (cardNumber) => {
  const cardType = Object.keys(regexCardByType).find((key) =>
    regexCardByType[key].test(cardNumber)
  );

  return cardType || "unknown";
};

const handleCardType = (event) => {
  const { value } = event.target;
  const cardType = getCardType(value);
  let cardFormatted = cardType.toString().toLocaleLowerCase();
  const cardTypeElement = document.getElementById("card-type");

  for (let i in cardType) {
    if (cardType[i] === cardFormatted) {
      return (cardTypeElement.src = `./assets/${cardFormatted}.svg`);
    }

    return (cardTypeElement.src = `./assets/${cardFormatted}.svg`);
  }

  if (cardType === "unknown") {
    cardTypeElement.src = "./assets/unknown.svg";
  }
};

const maskInputNumCard = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2");
};

const maskInputCvv = (value) => {
  return value.replace(/\D/g, "").replace(/(\d{3})(\d)/, "$1");
};

const handleFormChange = (event) => {
  const { value, id } = event.target;

  if (id === "numcard" && value.length > 1) {
    numCard.classList.remove("border-red-500");
    numValid.style.opacity = 0;
  }

  if (id === "namecard" && value.length > 1) {
    nameCard.classList.remove("border-red-500");
    nameValid.style.opacity = 0;
  }

  if (id === "numcard") {
    return (numchange.innerText = maskInputNumCard(value));
  }

  if (id === "cvv") {
    return (ccvvalue.innerText = maskInputCvv(value));
  }

  if (id === "namecard") {
    return (namechange.innerText = value);
  }

  if (id === "dia") {
    day.innerText = `${value}/`;
  } else if (id === "mes") {
    month.innerText = value;
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const { value: numCardValue } = numCard;
  

  if (nameCard.value === "") {
    nameValid.style.opacity = 1;
    nameCard.classList.add("border-red-500");
  }

  if (numCardValue.length < 16) {
    numValid.style.opacity = 1;
    numCard.classList.add("border-red-500");
  }

  if (numCardValue.length < 16 || nameCard.value === "") {
    return
  }

  return alert("Formulário enviado com sucesso!");
};


function numberOnly(id) {
  const element = document.getElementById(id);
  element.value = element.value.replace(/[^0-9]/gi, "");
  element.maxLength = 16;
}

numCard.addEventListener("input", handleFormChange);
numCard.addEventListener("input", handleCardType);
nameCard.addEventListener("input", handleFormChange);
cvv.addEventListener("input", handleFormChange);
day.addEventListener("input", handleFormChange);
month.addEventListener("input", handleFormChange);
document.getElementById("form").addEventListener("submit", handleFormSubmit);

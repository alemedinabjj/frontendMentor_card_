let nameCard = document.getElementById("namecard");
let numCard = document.getElementById("numcard");
let cvv = document.getElementById("cvv");

let ccvvalue = document.getElementById("ccv");

let numchange = document.getElementById("numchange");
let namechange = document.getElementById("namechange");

let day = document.getElementById("dia");
let month = document.getElementById("mes");


const regexCardByType = {
  Visa: /^4[0-9]{12}(?:[0-9]{3})/,
  Mastercard: /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/,
  Amex: /^3[47][0-9]{13}/,
  DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
  Discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
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
  let cardFormatted = cardType.toString().toLocaleLowerCase()
  const cardTypeElement = document.getElementById("card-type");

  for(let i in cardType) {
    if(cardType[i] === cardFormatted) {
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

  if (id === "numcard") {
    numchange.innerText = maskInputNumCard(value);
  } else if (id === "namecard") {
    namechange.innerText = value;
  } else if (id === "cvv") {
    ccvvalue.innerHTML = maskInputCvv(value);
    console.log(cvv);
  }

  if (id === "dia") {
    day.innerText = `${value}/`;
  } else if (id === "mes") {
    month.innerText = value;
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  if (
    numCard.value.length < 16 ||
    nameCard.value.length < 3 ||
    cvv.value.length < 3
  ) {
    alert("Preencha todos os campos corretamente");
    numCard.classList.add("border-red-500");
    nameCard.classList.add("border-red-500");
    cvv.classList.add("border-red-500");
  } else {
    alert("Pagamento realizado com sucesso");
  }
};

numCard.addEventListener("input", handleFormChange);
numCard.addEventListener("input", handleCardType);
nameCard.addEventListener("input", handleFormChange);
cvv.addEventListener("input", handleFormChange);
day.addEventListener("input", handleFormChange);
month.addEventListener("input", handleFormChange);
document.getElementById("form").addEventListener("submit", handleFormSubmit);

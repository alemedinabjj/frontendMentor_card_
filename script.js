let nameCard = document.getElementById("namecard");
      let numCard = document.getElementById("numcard");
      let cvv = document.getElementById("cvv");

      let ccvvalue = document.getElementById("ccv");

      let numchange = document.getElementById("numchange");
      let namechange = document.getElementById("namechange");

      let day = document.getElementById("dia");
      let month = document.getElementById("mes");


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
    
          if (numCard.value.length < 16 || nameCard.value.length < 3 || cvv.value.length < 3) {
            alert("Preencha todos os campos corretamente");
           numCard.classList.add("border-red-500");
            nameCard.classList.add("border-red-500");
            cvv.classList.add("border-red-500");
          } else {
            alert("Pagamento realizado com sucesso");
          }

        };


        numCard.addEventListener("input", handleFormChange);

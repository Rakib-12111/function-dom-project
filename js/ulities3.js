function getInputValueById(id){
      const addMOney = document.getElementById(id).value;
      const addMoneyNumber = parseFloat(addMOney);
      return addMoneyNumber;
}


function getTextValueById(id){
      const textValue = document.getElementById(id).innerText;
      const textNumber = parseFloat(textValue);
      return textNumber;
}
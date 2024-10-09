function getInputFieldValueById(id){
const addMoney = document.getElementById(id).value;
const addMOneyNumber = parseFloat(addMoney);
return addMOneyNumber;
}

function getTextfieldValueById(id){
      const textValue = document.getElementById(id).innerText;
      return textValue;
}


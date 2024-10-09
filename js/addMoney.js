document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();  
const addMoney = getInputFieldValueById('input-add-money');
const addMoneyNumber = parseFloat(addMoney);
console.log(addMoneyNumber);
const inputPin = getInputFieldValueById('input-pin-number');
console.log(inputPin);
if(inputPin === '1234'){
 
}
else{
      alert('Fail to add Money ! Please try again')
}


      
})
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
      event.preventDefault();
    const addMOney = getInputFieldValueById('input-add-money');
    
   const inputPin = getInputFieldValueById('input-pin-number');
 
  if(inputPin === 1234){
  const balance = getTextfieldValueById('account-balance');
  const newBalance = addMOney + balance;
 document.getElementById('account-balance').innerText = newBalance

      
  }
  else{
      alert('Fail to add Money')
  }
    
      
})
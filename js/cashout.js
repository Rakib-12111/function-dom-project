document.getElementById('cash-out-button')
.addEventListener('click', function(event){
      event.preventDefault();
  const cashOut = getInputValueById('input-cash-out');
  const inputPin = getInputValueById('input-cash-out-pin');
  if(inputPin === 1234){
   const balance = getTextValueById('account-balance');
   const newBalance = balance - cashOut;
   document.getElementById('account-balance').innerText = newBalance;
   
      
  }
  else{
      alert('Fail to cash out')
  }
      
      
})
document.getElementById('add-money-button')
.addEventListener('click', function(event){
      event.preventDefault();
  const addMOney = getInputValueById('input-add-money');
   const inputPin = getInputValueById('input-pinnumber');
  if(inputPin === 1234){
    const balance = getTextValueById('account-balance');
    console.log(balance);
     const newBalance = addMOney + balance;
     document.getElementById('account-balance').innerText = newBalance
      
  }
  else{
      alert('Fail to add money')
  }
      
})

// Withdraw form JS 

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const newWithdrawField = parseFloat(newWithdrawFieldString);
    withdrawField.value = '';
    if (isNaN(newWithdrawField)) {
        alert('Please provide a number');
        return;
    }



    const previousWithdrawElement = document.getElementById('withdraw-total');
    const newWithdrawElementString = previousWithdrawElement.innerText;
    const newWithdrawElement = parseFloat(newWithdrawElementString);





    const balaceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balaceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawField > previousBalanceTotal) {
        alert("You don't have enough balance");
        return;
    }
    const currentWithdrawTotal = newWithdrawElement + newWithdrawField;
    previousWithdrawElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = previousBalanceTotal - newWithdrawField;
    balaceTotalElement.innerText = currentBalanceTotal;



})
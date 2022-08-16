// deposit form JS 

document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposite-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';
    if (isNaN(newDepositAmount)) {
        alert('Please provide a number');
        return;
    }

    const depositTotalElement = document.getElementById('deposit-total');
    const previiousDepositTotalString = depositTotalElement.innerText;
    const previiousDepositTotal = parseFloat(previiousDepositTotalString);
    const currentDepositTotal = newDepositAmount + previiousDepositTotal;
    depositTotalElement.innerText = currentDepositTotal;

    const balaceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balaceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balaceTotalElement.innerText = currentBalanceTotal;


})
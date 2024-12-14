// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the calculate button and the elements for the balances
    const calculateButton = document.getElementById('calc');
    const transferableBalanceInput = document.getElementById('tb');
    const unverifiedBalanceInput = document.getElementById('ub');
    const kycMembersInput = document.getElementById('kyc');
    const referredPeopleInput = document.getElementById('nop');
    const finalBalanceSpan = document.getElementById('fin');
    
    // Add an event listener to the calculate button
    calculateButton.addEventListener('click', function () {
        // Get the values from the inputs, parse them as floats
        const transferableBalance = parseFloat(transferableBalanceInput.value) || 0;
        const unverifiedBalance = parseFloat(unverifiedBalanceInput.value) || 0;
        const kycMembers = parseFloat(kycMembersInput.value) || 0;
        const referredPeople = parseFloat(referredPeopleInput.value) || 0;
        
        // Ensure there are no division by zero errors
        if (referredPeople === 0) {
            alert("Number of referred people cannot be zero.");
            return;
        }
        
        // Perform the calculation: transferableBalance + (unverifiedBalance * (kycMembers / referredPeople))
        const finalBalance = transferableBalance + (unverifiedBalance * (kycMembers / referredPeople));
        
        // Update the final balance span with the calculated value
        finalBalanceSpan.textContent = finalBalance.toFixed(2) + "π"; // Keep two decimals and add the π symbol
    });
});



// disclamer:- this is based on a lecture given by a local islamic scholar 
// this calculator intends to help reduce the load on professionals in mosques

const nisabThreshold = 373.05;


function getValue(id) {
    let value = document.getElementById(id).value;
    console.log(value);
    if (value == "" || isNaN(value)) {
        return 0;
    } else {
        return parseFloat(value);
    }
}

function calculateZakat() {    
        // Income
    let amount_goldAndSilver = getValue("amount_goldAndSilver");
    let amount_cashAtHome    = getValue("amount_cashAtHome");
    let amount_otherSavings = getValue("amount_otherSavings");
    let amount_investments = getValue("amount_investments");
    let amount_owedToYou = getValue("amount_owedToYou");
    let amount_businessAssets = getValue("amount_businessAssets");
        // Expenses
    let amount_moneyYouOwe = getValue("amount_moneyYouOwe");
    let amount_otherOutgoingsDue = getValue("amount_otherOutgoingsDue"); 

    // Results Variables
    let amount_netAssets = document.getElementById("amount_netAssets");
    let amount_zakatTotal =  document.getElementById("amount_zakatTotal");

    

    // Calculating Total Income
    let totalIncome = amount_goldAndSilver + amount_cashAtHome + amount_otherSavings + amount_investments +amount_owedToYou + amount_businessAssets;
    console.log("Total income is: £" + totalIncome)

    // Calculating Expenses
    let totalExpenses = amount_moneyYouOwe + amount_otherOutgoingsDue;
    console.log("Total expenses is: £" + totalExpenses);

    // Zakatable wealth calculation
    let zakatableWealth = totalIncome - totalExpenses;
    console.log("Total zakatable wealth is: £" + zakatableWealth);
        // Update the form
    amount_netAssets.value = "£" + +zakatableWealth.toFixed(2);


    // Check if it's above threshold for Nisab
    let zakatDifference = zakatableWealth - nisabThreshold;
    let zakatTotal = 0;
    if (zakatDifference > 0) {
        zakatTotal = zakatableWealth;
    }

    // Calculate zakat
    zakatTotal = zakatTotal *= 0.025;
    amount_zakatTotal.value = "£" + +zakatTotal.toFixed(2);


}
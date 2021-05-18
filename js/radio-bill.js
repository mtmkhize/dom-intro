// get a reference to the sms or call radio buttons
const billItemType = document.querySelector(".billItemTypeRadio")
//get a reference to the add button
const radioAddButton = document.querySelector(".radioBillAddBtn")
//create a variable that will keep track of the total bill
const callsTotalRadio = document.querySelector(".callTotalTwo")
const smsTotalRadio = document.querySelector(".smsTotalTwo")
const overallRadioTotal = document.querySelector(".totalTwo")
//add an event listener for when the add button is pressed


    var callTotal = 0;
var smsTotals = 0;

function textRadioBillTotal(){
    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    if (checkedRadioBtn){
            var billItemType = checkedRadioBtn.value}
    // update the correct total
    if (billItemType === "call"){
        callTotal += 2.75;
    }
    else if (billItemType === "sms"){
        smsTotals += 0.75;
    }
   

    //update the totals that is displayed on the screen.
    callsTotalRadio.innerHTML = callTotal.toFixed(2);
    smsTotalRadio.innerHTML = smsTotals.toFixed(2);
    var totalsCost = callTotal + smsTotals;
    overallRadioTotal.innerHTML = totalsCost.toFixed(2);
    if (totalsCost >= 50){
        // adding the danger class will make the text red
        overallRadioTotal.classList.add("danger");
    }
    else if (totalsCost >= 30){
        overallRadioTotal.classList.add("warning");
    }
}

radioAddButton.addEventListener('click', textRadioBillTotal);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

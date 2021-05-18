// get a reference to the sms or call radio buttons
const billItemTypeRadio = document.querySelector(".billItemTypeWithSettings")
// get refences to all the settings fields
const totalSettings = document.querySelector(".totalSettings")
//get a reference to the add button
const settingsAddBtn = document.querySelector(".button1")
//get a reference to the 'Update settings' button
const updateButton = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings
const smsSettings = document.querySelector(".smsTotalSettings")
const callSettings = document.querySelector(".callTotalSettings")
const callCostSetting = document.querySelector(".callCostSetting")
const smsCostSetting = document.querySelector(".smsCostSetting")
const warningBtn = document.querySelector(".warningLevelSetting")
const criticalBtn = document.querySelector(".criticalLevelSetting")
// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed
var callTotals = 0;
var smsTotalss = 0;
var total = 0;
var callSetting = 0;
var smsSetting = 0;
var warning = 0;
var critical = 0;

function textSettingBillTotal() {
    callSetting = Number(callCostSetting.value);
    smsSetting = Number(smsCostSetting.value);
    warning = Number(warningBtn.value);
    critical = Number(criticalBtn.value);
}
updateButton.addEventListener('click', textSettingBillTotal);

//add an event listener for when the add button is pressed


function textSettingsBillTotal() {
    // get the value entered in the billType textfield
    var settingsAddBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (settingsAddBtn) {
        var billItemTypeRadio = settingsAddBtn.value
    }
    // update the correct total
    if (billItemTypeRadio == "call") {
        callTotals += callSetting;
    }
    else if (billItemTypeRadio == "sms") {
        smsTotalss += smsSetting;
    }
    callSettings.innerHTML = callTotals.toFixed(2);
    smsSettings.innerHTML = smsTotalss.toFixed(2);
    var totals = callTotals + smsTotalss;
    totalSettings.innerHTML = totals.toFixed(2);
    if (totals >= warning) {
        totalSettings.classList.add("warning")
    }
    if (totals >= critical) {
        totalSettings.classList.add("danger")
    }
    // *if (totals >= 30) {
      //  totalSettings.classList.add("danger")
    //}
    //else if (totals < 30) {
     //   totalSettings.classList.remove("danger")

    //}

}
settingsAddBtn.addEventListener('click', textSettingsBillTotal)

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

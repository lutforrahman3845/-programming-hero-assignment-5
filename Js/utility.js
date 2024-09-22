// Donate btn function return
function moneyDonateBtn(id){
    const donateBtn = document.getElementById(id);
    return donateBtn;
}
// input Filed value return
function inputField(id){
    const input = document.getElementById(id);
    return input;
}
// Received-money for different areas
function receivedMoney(id){
    const received = parseFloat(document.getElementById(id).innerText);
    return received
}
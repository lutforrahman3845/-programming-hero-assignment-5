
/* Add active status of the "Donation" and "History" buttons and change the sections*/
const donateBtn = document.getElementById('donate-btn');
const historyBtn = document.getElementById('history-btn');

// common function for  both buttons
function  changeActiveStatus(btn1 , btn2) {
    btn1.classList.add('font-semibold','bg-primary','text-txtPrimary');
    btn1.classList.remove('font-normal','border','bg-white','text-txtSecondary');
    btn2.classList.add('font-normal','border','bg-white','text-txtSecondary');
    btn2.classList.remove('font-semibold','bg-primary','text-txtPrimary');
}
// DonateBtn
donateBtn.addEventListener('click', function(){
    document.getElementById('donate-section').classList.remove("hidden");
    document.getElementById('history-section').classList.add("hidden");
    changeActiveStatus(donateBtn,historyBtn);
})
// HistoryBtn
historyBtn.addEventListener('click', function(){
    document.getElementById('donate-section').classList.add("hidden");
    document.getElementById('history-section').classList.remove("hidden");
    changeActiveStatus(historyBtn,donateBtn);
});

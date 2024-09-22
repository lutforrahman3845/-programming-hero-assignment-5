
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

/* common function for All "Money-Donate" button */
function  moneyDonateBtnClick(inputId ,receivedAmountId,placeId ) {

     const inputValue = inputField(inputId);
     const donateAmount = parseFloat(inputValue.value);
     const receivedAmount = receivedMoney(receivedAmountId);
     const balance = parseFloat(document.getElementById('balance').innerText);

     if(donateAmount< 0 ||  donateAmount> balance || isNaN(donateAmount)) {
        inputValue.value = "";
       return alert('Invalid Donate Amount');
     }

    if(donateAmount > 0 && donateAmount<= balance) {
         const newBalance = balance - donateAmount;
         document.getElementById('balance').innerText = newBalance;
         const newReceivedAmount =  receivedAmount + donateAmount;
         document.getElementById(receivedAmountId).innerText =  newReceivedAmount;
        // showMpdal 
        document.getElementById('my_modal_1').showModal()
         inputValue.value = "";


         
         // Defind the place where donate money?
         const place =  document.getElementById(placeId).innerText; 
         
         // Histosy section  update
         const historyAdd = document.getElementById('history-section');
         const historyItem = document.createElement('div');
         historyItem.className = 'p-4 md:p-8 border border-[#1111111A] rounded-2xl shadow'
         historyItem.innerHTML = `
                <h1 class="pb-3 text-lg font-bold leading-5 md:text-xl text-txtPrimary">${donateAmount} Taka is ${place}</h1>
                <p class="text-base font-light text-txtSecondary">Date : ${new Date()}</p>
         `
        historyAdd.insertBefore(historyItem, historyAdd.firstChild);

        
    }
};
    // ADD click  event listener to all "Money-Donate" buttons
    moneyDonateBtn('donate-amount-btn1').addEventListener('click',function(){
        moneyDonateBtnClick ('money-inputField1' , 'noakhali-received-money', 'place1');
    })
    moneyDonateBtn('donate-amount-btn2').addEventListener('click',function(){
        moneyDonateBtnClick ('money-inputField2' , 'feni-received-money', 'place2');
    })
    moneyDonateBtn('donate-amount-btn3').addEventListener('click',function(){
        moneyDonateBtnClick ('money-inputField3' , 'forInjuredPeople-received-money', 'place');
    })





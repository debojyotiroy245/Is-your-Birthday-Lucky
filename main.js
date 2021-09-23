const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number") 
const checkNumberButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box")
const privacyPolicyButton = document.querySelector("#privacy-policy")
const privacyBox = document.querySelector("#privacy-box")
const resetButton = document.querySelector("#reset-button")

checkNumberButton.addEventListener("click",function checkBirthDateIsLucky() {
    const dob = dateOfBirth.value;
    const numberToCheck = luckyNumber.value
    const sum = calculateSum(dob)
    if(dob&&numberToCheck){
        compareValues(sum,numberToCheck)
    }
    else{
        showMessage("Please enter both the fields")
    }
})

privacyPolicyButton.addEventListener("click",function privacy(){
    privacyBox.innerText="We are not collecting any of your data. It is just a game and no any concept of numerology is used here."
})

resetButton.addEventListener("click", function(){
    location.reload()
})

function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
        showMessage("Your birthday is lucky🥳 🥳 🥳") 
    }
    else{
        showMessage("Your birthday is not lucky😕") 
    }
}

function calculateSum(dob) {
    dob = dob.replaceAll("-","")
    var sum = 0
    for(let i = 0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i))
    }
    return sum
}

function showMessage(message){
    outputBox.innerText = message
}
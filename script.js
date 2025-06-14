'use strict'
const dayInput=document.getElementById('day');
console.log(dayInput);
const monthInput=document.getElementById('month');
console.log(monthInput);
const yearInput=document.getElementById('year');
console.log(yearInput);

const button = document.querySelector('.check');
console.log( button);

const dayResult = document.querySelector('.days')
const monthResult = document.querySelector('.months')
const yearResult = document.querySelector('.years')


button.addEventListener('click',function(e){
    e.preventDefault();

const day = parseInt(dayInput.value);
const month = parseInt(monthInput.value);
const year = parseInt(yearInput.value);

const today = new Date();
  const birthDate = new Date(year, month - 1, day); // month is 0-based
 if (
    isNaN(day) || isNaN(month) || isNaN(year) ||
    birthDate > today ||
    day <= 0 || day > 31 || month <= 0 || month > 12 || year > today.getFullYear()
  ) {
    alert("Please enter a valid date of birth");
    return;
  }
  let years = today.getFullYear() - year;
  let months = today.getMonth() - (month - 1);
  let days = today.getDate() - day;

   if (days < 0) {
    months--;
    // Get days in previous month
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonth;
  }

   if (months < 0) {
    years--;
    months += 12;
  }
   yearResult.textContent = years;
  monthResult.textContent = months;
  dayResult.textContent = days;
});
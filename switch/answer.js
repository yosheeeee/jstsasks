// 1)
let browser;
if (browser == 'Edge') alert("You've got the Edge")
else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') alert('Okay we support these browsers too')
else alert('We hope that this page looks ok!')

// 2)
const number = +prompt('Введите число между 0 и 3','')
switch (number){
    case 0: 
        alert('Вы ввели число 0')
        break
    case 1:
        alert('Вы ввели чсло 1')
        break
    case 2:
    case 3:
        alert('Вы ввели чило 2, а может и 3')
}
let num = +prompt('Enter a number from 1 to 9');

while (isNaN(num) || num < 1 || num > 9) {
    alert('Number is not correct');
    num = +prompt('Enter a number from 1 to 9');
}

switch (num) {
    case 1:
        alert('!')
        break;
    case 2:
        alert('@')
        break;
    case 3:
        alert('#')
        break;
    case 4:
        alert('$')
        break;
    case 5:
        alert('%')
        break;
    case 6:
        alert('^')
        break;
    case 7:
        alert('&')
        break;
    case 8:
        alert('*')
        break;
    case 9:
        alert('(')
        break;
    default:
        break;
}
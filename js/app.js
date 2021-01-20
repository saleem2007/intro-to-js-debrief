let myNumber = 15;

if (typeof myNumber != 'number') {

    console.log('This is not a number');

}   else if (myNumber % 3 == 0 && myNumber % 5 == 0 && myNumber > 0) {

        console.log('GenBuzz');

}   else if (myNumber % 5 ==0 && myNumber > 0) {

    console.log('Buzz');

}   else if (myNumber % 3 == 0 && myNumber > 0) {

    console.log('Gen');

}    else {

    console.log(`My number is: ${myNumber}`);

}

let someItem = 'Pants';

switch (someItem) {

    case ('Shoes'):
        console.log(`${someItem} are $50`);
        break;
    
    case ('Jeans'):
        console.log(`${someItem} are $25`);
        break;
    
    case ('Hat'):
        console.log(`${someItem} is $12`);
        break;
    
    case ('Socks'):
        console.log(`${someItem} are $2`);
        break;

    default:
        console.log(`${someItem} is not a valid item.`);
        break;


}

let someNumber = Math.floor(Math.random() * 50) + 50;
console.log(someNumber);

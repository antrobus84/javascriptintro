/*
let coffeeIsGrinding = false;
const pressGrindBeans = () =>{
    if(coffeeIsGrinding){
        console.log("stopping the grinding");
        coffeeIsGrinding = false;
    }else{
        console.log("grinding is about to begin");
        coffeeIsGrinding =true;
    }
}
pressGrindBeans();
pressGrindBeans();
*/
/*
const coffeeOrder = (size, typeOfDrink) => {
    console.log(`your ${size}, ${typeOfDrink} is ready`)
}
coffeeOrder ("large", "coffee")
*/
/*
const addUp = (num1, num2) =>{
    return num1 + num2;
}
addUp(7,3);
console.log(addUp(2,5));
*/
/*
const multiplyByNineFifths = (celcius) =>{
    return celcius*(9/5);
};
const getFahrenheit=(celcius)=>{
    return multiplyByNineFifths(celcius)+32;
};
console.log("The temperature is " + getFahrenheit(15) + "°F");
//output: The temparature is 59°F
*/
/*
let orderCount = 1;
const takeOrder =(topping, toppingTwo) => {
    console.log(`Pizza with ${topping} and ${toppingTwo}`);
    orderCount++
}
takeOrder("chicken", "sweetcorn");
takeOrder("bacon", "pepperoni")
*/
/*
let correctAccNum = 7789905
let accBalance = 2500
const moneyWithdraw = (cash, accnum) =>{
if(correctAccNum == accnum && cash <= accBalance){
    console.log(`Withdrawing ${cash} from ${correctAccNum}`)
}
else if (accnum != correctAccNum){
    console.log("Your account number is incorrect")
}
else if (cash > accBalance){
    console.log("you dont have enough in your balance")
}
}
moneyWithdraw(1900, 7789905)
*/
let orderCount = 0;
const takeOrder = (topping, toppingTwo, toppingThree, ToppingFour, ToppingFive) =>{
    console.log(`sub with ${topping}, ${toppingTwo}, ${toppingThree}, ${ToppingFour}, ${ToppingFive}`)
}
takeOrder("chicken", "bacon", "sweetcorn", "lettuce", "mayo")
/*
for (i = 0 ; i < 10; i++){
    console.log(i);
}
//counts from 0 to 9
*/
/*
for (i = 9; i > -1; i--){
    console.log(i);
}
//counts from 9 to 0 in reverse
*/
/*
let favDrinks = [
    "tea",
    "cola",
    "milkshake"
];
for (favDrinks = 0; favDrinks < 1000; favDrinks++){
    console.log(favDrinks)
}
*/
/*
let favFilms = [
    "HTTYD",
    "A Silent Voice",
    "Your Name"
];
favFilms.push("Snatch")
favFilms.push("DBS:Broly")

for (filmIndex = 0; filmIndex < favFilms.length; filmIndex++){
    console.log(favFilms[filmIndex])
}
*/
/*
let cards = ["diamond", "spade", "heart", "club"];
let currentCard = "";
while(currentCard != "spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);
*/
let films = [
    "HTTYD",
    "A Silent Voice",
    "Ghostbusters",
    "Your Name",
    "DBS:Broly"
];
const filmCheck = () =>{
    if(films[2] == "Ghostbusters"){
        console.log("Yay it's Ghostbusters")
    } else {
        console.log("Booo, we want Ghostbusters");
    }
};
filmCheck();
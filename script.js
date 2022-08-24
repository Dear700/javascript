//     Задание 1
var cityName = "Dushanbe";
console.log(cityName);
let countryName = "Tajikistan";
console.log(countryName);
let population = 900000;
console.log(population);


let stadiumExist = true;
let stadiumNotExist = false;

//     Задание 2
let l = 40;
let w = 70;
console.log(l*w);


//     Задание 3
let time = 2;
let speedOfFirst = 95;
let speedOfSecond = 114;

let resultFirst = speedOfFirst*time;
let resultSecond = speedOfSecond*time;
console.log(resultFirst + resultSecond);


    // Задание 4
 const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 20) {
    console.log("randomNumber меньше 20");
} else if (randomNumber > 50) {
    console.log("randomNumber больше 50");
} else {
    console.log("randomNumber больше 20, и меньше 50");
}


//     Задание 5 
const randomNumber2 = Math.floor(Math.random() * 100);
switch (true) {
    case  randomNumber2 < 20  : 
        console.log("randomNumber меньше 20")
    break   
    case  randomNumber2 > 50  : 
        console.log("randomNumber больше 50")
    break;
    default :
    console.log("randomNumber больше 20, и меньше 50");
}
// let keyword
// function doSomething() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log('Finally:' + i);
// }
// doSomething();

// the issue with var is it is avaliable outside the for block here
// var is always scoped to the nearest function - which creates the issue
// this is why you would use let - it scopes it to the nearest block instead

// NOTE : the typescript compiler will error out...but it will still create valid js
// to verify go to terminal, remove main.js, tsc main.ts and run node main.js

// types : number, boolean, string, any, array, 

//constants can have a container to make the code less verbose

enum Color { Red, Green, Blue};

let backgroundColor = Color.Red;

// this is the same code in js : 

// var Color;
// (function (Color) {
//     Color[Color["Red"] = 0] = "Red";
//     Color[Color["Green"] = 1] = "Green";
//     Color[Color["Blue"] = 2] = "Blue";
// })(Color || (Color = {}));
// ;
// var backgroundColor = Color.Red;

let message = 'abc';
let endsWithC = message.endsWith('c');
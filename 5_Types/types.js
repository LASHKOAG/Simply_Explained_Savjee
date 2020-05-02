"use strict";
var isThisDone = false;
var myNumber = 4;
var myName = "UserName";
var greeting = "Hello, " + myName;
var greeting2 = "Hello, " + myName;
//Arrays
var count = [1, 2, 3, 4, 5]; //? without type
var count2 = [1, 2, 3, 4, 5];
var count3 = [1, 2, 3, 4, 5];
var anything = 4;
anything = "Some text";
anything = false;
function greeter(name) {
    console.log("Hello? " + name);
}
greeter("LASKA");
//Enums
var joystickStatus = 1;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
;
if (joystickStatus === Direction.Up) {
}

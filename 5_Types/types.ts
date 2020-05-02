
let isThisDone: boolean = false;

let myNumber: number = 4;

let myName: string = "UserName";

let greeting: string = "Hello, " + myName;

let greeting2: string = `Hello, ${myName}`;

//Arrays
let count = [1, 2, 3, 4, 5]; //? without type

let count2: number[] = [1, 2, 3, 4, 5];

let count3:  Array<number> = [1, 2, 3, 4, 5];

let anything: any = 4;

anything = "Some text";

anything = false;

function greeter(name: string): void{
    console.log("Hello? " + name);
}

greeter("LASKA");

//Enums
let joystickStatus =1;

enum Direction{Up, Down, Left, Right};

if(joystickStatus === Direction.Up){

}
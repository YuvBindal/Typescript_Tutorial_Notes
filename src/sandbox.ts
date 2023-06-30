let names = ['luigi', 'mario', 'yoshi'];
names.push('yahe');

let numbers = [10,20,30,40];
numbers.push(50);

let mixed = ['charmander', 20, 'yuv', 42];
mixed.push('love');
mixed.push(18);

let ninja = {
    name: 'yuv',
    belt: 'black',
    age :18
};

//explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 30;
isLoggedIn = true;
character = 'mario';

//arrays
let ninjas: string[] = [];
ninjas.push('test3.0');
console.log(ninjas);


//union types
let newMix: (string|number)[] = [];
newMix.push('helo');
newMix.push(10);
console.log(newMix);

//object declarations

let ninjaObj: {
    name: string,
    age: number,
    beltColor: string
}

ninjaObj = {name: 'yuv', age:18, beltColor: 'black'};
console.log(ninjaObj);

let num: any = 25;
num = 'string';
console.log(num);

let aMixed: any[] = [];
aMixed.push('heloo');
aMixed.push(2);
aMixed.push(true);
console.log(aMixed);

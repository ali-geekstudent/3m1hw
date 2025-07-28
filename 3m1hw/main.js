// task1

let user = {
    name: "alI",
    age: 12,
    isAdmin: true,
};

console.log(typeof user)


// task2
let age = 24;

if (age < 18) {
    console.log('Ты еще школьник');
} else if (age >= 18 && age <= 25) {
    console.log('Ты студент');
} else {
    console.log('Ты взрослый');
}
// task3

const fruits = ["яблоко", "банан", "груша"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// task4
let Friend = {
    name: "ali Friend",
    age: 12,
    city: "Osh",
    isStudent: true,
};

for (let key in Friend) {
    console.log(key + ": " + Friend[key]);
}
// task5

for (let i = 1; i <= 200; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// task6
const sum = (greet, a, b) => {
    greet();
    return a, b;
};

const greet = () => {
    console.log('Привет, мир!')
}

console.log(sum(() => {
    greet();
}, 20, 20));

// task7

    function user1(name, callback) {
        console.log ("Hello<" + name);
        callback();
    }
    
    user1("", function ()  {
        console.log("Я — колбэк!");
    });



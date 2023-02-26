//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let favFoods = (person3) => {
    for (let x in person3) {
        console.log(x + ': ' ,person3[x])
    }
}
favFoods(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    printInfo = () => {
        return `Name: ${this.name} \n Age: ${this.age}`
    }
    birthday = () => {
        return this.age += 1
    }
    addAge = (increase) => {
        return this.age += increase
    }
    // addAge = (age)
}
let jim = new Person('Jim', 34)
let tammy = new Person('Tammy', 29)

console.log(tammy.printInfo())
console.log(jim.printInfo())
console.log(jim.addAge(9))
console.log(jim.birthday())
console.log(jim.birthday())
console.log(jim.birthday())

// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine
    if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const bigWord = word => {
    return new Promise((resolve, reject) => {
        if (word.length > 10){
            resolve('Big word')
        } else {
            reject('Small word')
        }
    })
}
bigWord('qwefa')
.then((result) => {
    console.log(result)
})
.catch((result) => [
    console.log(result)
])

//------------CW 1--------------
// The goal is to create a function of two inputs number and
// power, that "raises" the number up to power (ie multiplies
// number by itself power times). Not allowed to use '**'

/*def power(num, exp):
    count = exp
    total = 1
    while count > 0:          # Python #
        total *= num
        count -= 1
    return total
print(power(4,4))*/

let power = (num, exponent) => {
    let count = exponent;
    let total = 1
    while(count > 0){
        total *= num;
        count -= 1
    }
    return total
}
console.log(power(4, 3))

//---------------CW 2--------------
let occurence = (letters, letter) => {
    return letters.split(letter).length - 1
}
console.log(occurence('asodyaosufenenenenenenene', 'a'))
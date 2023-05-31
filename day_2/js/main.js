
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
    
    function displayFavoriteFood(person) {
        for (let food in person) {
            if (Array.isArray(person[food])) {
                console.log(`${food}:`);
                person[food].forEach((dish) => {
                    if (typeof dish === "object") {
                        for (let item in dish) {
                            console.log(`- ${dish[item]} from ${item}`);
                        }
                    } else {
                        console.log(`- ${dish}`);
                    }
                });
            } else if (typeof person[food] === "object") {
                console.log(`${food}:`);
                for (let shake in person[food][0]) {
                    console.log(`- ${person[food][0][shake]} from ${shake}`);
                }
            } else {
                console.log(`${food}: ${person[food]}`);
            }
        }
    }
    
    displayFavoriteFood(person3);
    
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
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        }
    
    // Use an arrow function to create the printInfo method
    printInfo = () => {
    console.log('My Name is: ${this.name},My Age is: ${this.age}');
    };
    
    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age
    addAge = (years) => {
        this.age += years;
    };
    }
    // Create two Person objects using the 'new' keyword
    const Thomas = new Person("Thomas", 25);
    const Earl = new Person("Earl", 30);
    
    // Print both persons' info
    Thomas.printInfo();
    Earl.printInfo();
    
    // Increment one person's age by 3 years
    Thomas.addAge(3);
    
    // Print the updated info of the first person
    Thomas.printInfo();
    
    // =============Exercise #3 ============//
    /*
    Create a Promised based function that will check a string to determine if its length is greater than 10.
    If the length is greater than ten, console log "Big word".
    If the length of the string is less than 10, console log "Small Number".
    */
    
    function checkStringLength(string) {
    return new Promise((resolve, reject) => {
    if (string.length > 10) {
    resolve("Big word");
    } else {
    reject("Small Number");
    }
    });
    }
    
    // Example usage:
    checkStringLength("Hello, World!")
    .then((result) => {
    console.log(result);
    })
    .catch((error) => {
    console.log(error);
    });

//     A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(str){
    var alphabet = ['a', 'b', 'c', 'd', 'e',
           'f', 'g', 'h', 'i', 'j',
           'l', 'm', 'n', 'o', 'p',
           'q', 'r', 's', 't', 'u',
           'v', 'w', 'x', 'y', 'z'
         ];
         str=str.toLowerCase();
         for (var i = 0; i < alphabet.length; i++) {
             if (str.indexOf(alphabet[i])<0) {
               return false;
             }
         }
         return true
   }
console.log(isPangram('abcdefghijklmnopqrstuvwxy'));


// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

function twoSum(numbers, target) {
    for(let i = 0; i<numbers.length; i++){
      for(let j = i+1; j<numbers.length; j++){
        let res = numbers[i] + numbers[j]
        if(res == target) return [i,j]
      }
    }
  }

  console.log(twoSum([1,2,3],4))

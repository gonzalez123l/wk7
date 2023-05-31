//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, names) {
    let matched = false;
  
    for (let i = 0; i < names.length; i++) {
      if (string.includes(names[i])) {
        console.log("Matched " + names[i]);
        matched = true;
      }
    }
  
    if (!matched) {
      console.log("No Matches");
    }
  }
//Call method here with parameters
  console.log(findWords(dog_string, dog_names));

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i=0; i<arr.length; i+=2){
        arr.splice(i, 1, "even index");
      }
      return arr;


    }
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

console.log(replaceEvens(arr));


// Codewars Js
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
function solution(str) {
    if (str.length == 0) {
      return []
    };
    
    return (str.length % 2 ? str + '_' : str).match(/../g);
  }

  console.log(solution('abcdef'))

//   Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

//   It should remove all values from list a, which are present in list b keeping their order.
  
//   arrayDiff([1,2],[1]) == [2]
//   If a value is present in b, all of its occurrences must be removed from the other:
  
//   arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    if(b.length==0 || a.length==0)
      return a;
    for(let i =0;i<a.length;i++){
      for(let j=0;j<b.length;j++){
        if(a[i]==b[j]){
          a.splice(i,1);
          i--;
        }
      }
    }
    return a;
  }

  console.log(arrayDiff([1,2],[1]))
  console.log(arrayDiff([1,2,2,2,3],[2]))
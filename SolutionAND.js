/**
* The following is the function where the solution shall be written
*/

function solution (input) {
  if (/\d/.test(input)) {

    var input = input.replace(/\D/g,'');

    const arr = input.toString(10).replace(/\D/g, '0').split('').map(Number);

    const copy = [];

    copy.push(arr[0].toString() + arr[1].toString() + arr[2].toString());
    copy.push(arr[0].toString() + arr[2].toString() + arr[1].toString());
    arr.sort(function(a, b){return b-a});
    copy.push(arr[0].toString() + arr[1].toString() + arr[2].toString());
    copy.push(arr[0].toString() + arr[2].toString() + arr[1].toString());
    arr.sort();
    copy.push(arr[0].toString() + arr[1].toString() + arr[2].toString());
    copy.push(arr[0].toString() + arr[2].toString() + arr[1].toString());

    copy.sort(function(a, b){return b-a});
    
    return copy;
  }

  return "Input contains no integers";
  
}

// some example inputs
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
console.log(solution('ABC')); // expected output Input contains no integers

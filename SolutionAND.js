/**
* The following is the function where the solution shall be written
*/

function solution (input) {
  if (/\d/.test(input)) {

    var input = input.replace(/\D/g,'');

    var array = input.toString(10).replace(/\D/g, '0').split('').map(Number); 

      var length = array.length,
      result = [array.slice()],
      c = new Array(length).fill(0),
      i = 1, k, p;

      while (i < length) {
        if (c[i] < i) {
          k = i % 2 && c[i];
          p = array[i];
          array[i] = array[k];
          array[k] = p;
          ++c[i];
          i = 1;
          result.push(array.slice());
        } else {
          c[i] = 0;
          ++i;
        }
      }
      var i;
      for(i = 0; i < result.length; i++) {
        
        result[i] = result[i].toString();
        result[i] = result[i].replace(/,/g, "")
      }
      return result.sort(function(a, b){return b-a}).toString();
    }
  return "Input contains no integers";
}

// some example inputs
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
console.log(solution('ABC')); // expected output Input contains no integers
console.log(solution('3264'));
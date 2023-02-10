//53 Array Operations
function setFirstElement(arr, a) {
    arr.shift()
    arr.splice(0, 0, a)
    return arr;
  }
  console.log(setFirstElement([1, 2], 3))
  
//54 Array Operations
  function getLastElement(arr) {
    return arr[arr.length - 1]}
  
//55 Sorting an array
  function sort(arr){
   return arr.sort(function (a, b){
       return a-b 
     })
  }
  
//56 Rotate an array
  function rotate(arr){
    // let newArr = [];
    let val = arr.shift()
    arr.push(val)
    return arr;
  }
  rotate(['a', 'b', 'c'])
  
//57 Array Operations
  function add(arr, a){
    if(arr.indexOf(a)>=0){
      return arr
    } else {
      arr.push(a)
  return arr
    }
  }
  add([1, 2], 3)
  
//58 Array operations
  function concatUp(arr1, arr2){
    if(arr1.length <= arr2.length){
      return arr1.concat(arr2);
    } else{
      return arr2.concat(arr1)
    }
  }
  concatUp([1, 2], [3])
  
//59 Array operations
  function halve(arr){
    if(arr.length % 2 == 0){
      return arr.slice(0, arr.length/2)
    } else{
      return arr.slice(0, Math.floor(arr.length/2+1))
    }
  }
  console.log(halve([1, 2, 3, 4, 5, 6]))
  
//60 Array operations
  function list(array) {
    if(array.length == 0){
      return ""
    }
    if(array.length == 1){return array[0]}
      let val = array[array.length-1];
      let newArr = array.slice(0, array.length-1)
      return newArr.join(", ") + " " + "and " + val
  }
  list(['Huey', 'Dewey', 'Louie'])
  
  //61 Flatten an array
  function flat(arr) {
    let newArr = [];
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<arr[i].length; j++){
        newArr.push(arr[i][j])
      }
    }
    return newArr;
  }
  
  //62 Array Operations
  function median(arr){
    if(arr.length % 2 == 0){
      return (arr[arr.length/2] + arr[(arr.length/2)-1])/2
    } else {
      return arr[(arr.length-1)/2]
    }
  }
  console.log(median([1, 2, 10, 11, 12]))
  
  //63 String operations
  function hello(param){
   if(param == undefined){
     return "Hello world!"
   } else {return `Hello ${param}!`}
  }
  hello('Nala')
  
  //64 Array operations
  function cutComment(str){
    if(str.indexOf('/')<0){
      return null
    } else{
      return str.slice(str.indexOf('/') + 3)
    }
  }
  //Alternate Approach
  // let text = "Hello world, // welcome to the universe.";
  // let newArr = text.split(" ")
  // console.log(newArr)
  // let result = newArr.indexOf('//');
  // console.log(result)
  // let output = newArr.slice(result + 1)
  // let answer = output.join(" ")
  // console.log(answer)
  
  //65 Sum of n natural numbers
  function addTo(param){
    let sum = 0;
    for(let i=1; i<=param; i++){
      sum += i
    }
    return sum;
  }
  
  //66 Factorial
  function factorial(param){
    let sum = 1;
    //if(param == 0){
    //  return sum
    //}
    for(let i=1; i<=param; i++){
      sum *= i
    }
    return sum;
  }
  
  //67 Mean of elements of given array
  function mean(arr){
    let sum = 0;
    let length = arr.length;
    for(let i = 0; i<arr.length; i++){
      sum += arr[i];
    }
    return sum/length;
  }
  
  //68 String operations
  function spaces(num){
    let str = '';
    for(let i=0; i<num; i++){
      str = str + " "
    }
    return str
  }
  
  //69 LCM
  function lcm(a, b){
    let upperBound = a*b;
    for(var i=1; i<=upperBound; i++){
      if(i % a == 0 && i % b == 0){
        break;
      }
    }
    return i;
  }
  
  //70 GCD
  function gcd(a, b){
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    let result;
    if(max%min==0){
      return min;
    }
    for(let i = 0; i<=max; i++){
      if(a%i == 0 && b%i == 0){
        result = i;
      }
    }
    return result;
  }
  
  //71 Check if Number is Prime
  function isPrime(num) {
    if(num <= 1){
      return false
    }
    if(num == 2){
      return true
    }
    let arr = [];
    for(let i=3; i<=num; i++){
      let flag = true;
      for(let j=2; j<i; j++){
        if(i % j == 0){
          flag = false;
          break;
        }
      } 
      if(flag){
       arr.push(i)
      }
    }
    return arr[arr.length-1] == num
  }
  
  //72 Sum of elements of a 2-D array
  function sum(arr){
    let total = 0;
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<arr[i].length; j++){
        total = total + arr[i][j];
      }
    }
    return total
  }
  
  //73 Usage of inbuilt arguments object
  function max(){
    let length = arguments.length;
    let largest = arguments[0]
    for(let i=1; i<=length; i++){
      if(arguments[i]>largest){
        largest = arguments[i]
      }
    }
    return largest
  }
  
  //74 This function takes a string and returns the first integer present in the string
  function parseFirstInt(str){
    let newStr = str.split(" ")
    console.log(newStr)
    for(let i=0; i<newStr.length; i++){
      if(!Number.isNaN(parseInt(newStr[i]))){
        return parseInt(newStr[i])
      } 
    }
    return NaN
  }
  
  //75 add('7+12+100') should return 119
  function add(str){
    let newArr = str.split("+")
    let sum = 0;
    for(let i=0; i<newArr.length; i++){
      sum += parseInt(newArr[i])
    }
    return sum;
  }
  
  //76 Functions call functions
  function sum(array){
    let total  = 0;
    for(let i=0; i<array.length; i++){
      total += array[i]
    }
    return total
  }
  function mean(arr1){
    let a = sum(arr1)
    let average = a/arr1.length
    return average;
  }
  
  //77 Reverse a string using Recursion
  function reverse(str){
    if(str.length == 0){
      return ""
    }
    return reverse(str.substr(1)) + str.charAt(0)
  }
  
  //78 Roman to Arabic converter
  function arabic(roman){
      if(roman == null)
          return -1;
      var totalValue = 0,
          value = 0, // Initialise!
          prev = 0;   
      for(var i=0;i<roman.length;i++){
          var current = char_to_int(roman.charAt(i));
          if (current > prev) {
              // Undo the addition that was done, turn it into subtraction
              totalValue -= 2 * value;
          }
          if (current !== prev) { // Different symbol?
              value = 0; // reset the sum for the new symbol
          }
          value += current; // keep adding same symbols
          totalValue += current;
          prev = current;
      }
      return totalValue;
  }
  function char_to_int(character) {
      switch(character){
          case 'I': return 1;
          case 'V': return 5;
          case 'X': return 10;
          case 'L': return 50;
          case 'C': return 100;
          case 'D': return 500;
          case 'M': return 1000;
          default: return -1;
      }
  }
  arabic('IIX');
  
  // 79 Arabic to Roman converter
  function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
    var roman = ''
    for (var i in lookup ) {
      // console.log(i)
      while ( num >= lookup[i] ) {
        console.log(lookup[i])
        roman += i;
        // console.log(roman)
        num -= lookup[i];
      }
    }
    return roman;
  }
  romanize(29999)
  
  //80 Sum of all multiples of 3 and 5 less than provided number
  function sumMultiples(num) {
    let result = 0;
    let newArr = [];
    for(let i=1; i<num; i++){
      if(i % 3 == 0 || i % 5 == 0){
        newArr.push(i)
      }
    }
    for(let i=0; i<newArr.length; i++){
      result += newArr[i]
    }
    return result
  }
  
  //81 Calculate digit sum of an integer
  function digitsum(digit){
    let newStr = digit.toString() 
    let newArr = newStr.split("")
    // console.log(newArr)
    let sum = 0;
    for(let i=0; i<newArr.length; i++){
      sum += parseInt(newArr[i])
    }
    return sum
  }
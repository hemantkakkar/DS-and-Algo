// Factorial

function factorial(n){
  let result = 1;
  for(i=2; i<=n; i++){
    result = result * i
  }
  return result
}

console.log(factorial(0))

// Fibonacci

function fibonacci (n) {
  const arr = [0,1]
  for(i=2; i<n; i++) {
    arr[i] = arr[i-1] + arr[i-2]  
  }
  return arr
}

console.log(fibonacci(7))

// Prime Number
function isPrime(n){
  if(n<2){
    return false
  }
  for(i=2; i<Math.sqrt(n); i++){
    if(n%i === 0){
      return false
    }
  }
  return true
}

console.log(isPrime(5))

// Power of 2
function isPowerOfTwo(n) {
  if(n<1){
    return false
  }
  while(n>1){
    if(n%2 !== 0){
      return false
    }
    n = n/2
  }
  return true
}

// Linear search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === target) {
      return i
    }
  }
  return -1
}

console.log(linearSearch([1,3,5], 5))

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

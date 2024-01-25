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

// Binary search

function binarySearch(arr, target) {
  let leftIndex = 0
  let rightIndex = arr.length-1
  while (leftIndex <= rightIndex) { 
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if(target === arr[middleIndex]) {
      return middleIndex
    }
    if(target < arr[middleIndex]) {
        rightIndex = middleIndex - 1
    } else {
        leftIndex = middleIndex + 1
    }
  }
  return -1
}

console.log(binarySearch([-5,2,4,6,10], 6))

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
  if(leftIndex > rightIndex) {
    return -1
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  if(target === arr[middleIndex]) {
    return middleIndex
  }
  if(target < arr[middleIndex]) {
    rightIndex = middleIndex - 1
    return search(arr, target, leftIndex, rightIndex)
  } else {
    leftIndex = middleIndex + 1
    return search(arr, target, leftIndex, rightIndex)
  }
}

console.log(recursiveBinarySearch([-5,2,4,6,10], 1))

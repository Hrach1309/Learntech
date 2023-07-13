// 1. Array IndexOf Implementation
function ind(arr, elem){
  for(let i = 0; i < arr.length;i++){
    if(arr[i]=== elem){
      return i
    }
  }
  return -1
}

// 2. String charAt implemtation
function charAt(str, index){
  if(str[index] === undefined){
     return "" 
  }
  return str[index]
}

// 3. String replace implementation
function replace(str, toBeReplaced, toReplaceWith ) {
  let result = ""
  for (let i = 0; i < str.length; i++) {
      if (str[i] === toBeReplaced) {
          result += toReplaceWith
      }else{
          result += str[i]
      }
  }
  return result
}

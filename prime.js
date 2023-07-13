// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

function isPrime(num) {
 let check = true;
  if(num==2){
      return true;
  }
  if(num<=1){
    return false;
  }
  for(let x=2; x<num; x++){
    if(num%x==0){
        check = false;
        break;
    }
  }
  return check;
}

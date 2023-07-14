// https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(array){
    return '('+array.slice(0,3).join("")+')'+ ' '+ array.slice(3,6).join("")+"-"+array.slice(6,10).join("");
  }
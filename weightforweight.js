https://www.codewars.com/kata/55c6126177c9441a570000cc/javascript

function sumdigits(n){
    let sum=0;
    while(n>0){
     sum=sum+n%10;
     n=Math.floor(n/10);
    }
    return sum;
}
function weight(s){
  if(s!=""){

  let array= s.split(" ").map(Number);
  for(let i=0; i<array.length;i++){
    for(let j=0; j<array.length;j++){
        if(sumdigits(array[i])<sumdigits(array[j])){
            let temp=array[i];
            array[i]=array[j];
            array[j]=temp;
        }
        else if(sumdigits(array[i])==sumdigits(array[j])){
           if(array[i].toString()<array[j].toString()){
            let temp=array[i];
            array[i]=array[j];
            array[j]=temp;
           }
        }
    }
  } 
  return array.join(" ");
}
else{
    return s="";
}
}


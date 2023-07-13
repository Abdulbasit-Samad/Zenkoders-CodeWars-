// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
function solution(a){
  let array = [];
    if(a<0){
        return 0;
    }
    else{
        for(let x=1; x<a ; x++){
            if(x%3==0 || x%5==0){
                array.push(x);
            }
        }
        
    }
    let sum=0
    for(let x=0; x<array.length;x++){
        sum+=array[x];
    }
    return sum;
}
//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function movingzeros(n){
   let temp = [],count=0;
   for(let x=0;x<n.length;x++){
     if(n[x]!==0){
      temp.push(n[x]);
     }
     else{
        count++;
     }
   }
   for(let x=0;x<count;x++){
    temp.push(0);
   }
   return temp;
}
console.log(movingzeros([false,1,0,1,2,0,1,3,"a"]));
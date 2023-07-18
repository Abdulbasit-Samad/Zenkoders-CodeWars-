//https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript

function msqerror(a,b){
 let temp = [],sum=0;
 for(let x=0;x<a.length;x++){
    temp.push(Math.pow(a[x]-b[x],2));
 }
 for(let x=0;x<temp.length;x++){
    sum+=temp[x];
 }
 return sum/temp.length;
}
console.log(msqerror([10, 20, 10, 2], [10, 25, 5, -2]));
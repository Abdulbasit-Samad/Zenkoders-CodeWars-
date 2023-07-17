//https://www.codewars.com/kata/5552101f47fc5178b1000050
function digitpow(n,p){
    digits = [];
    let len = n.toString().length,sum=0,i=0,temp=n;
    while(n>0){
        digits.push(n%10);
        n=Math.floor(n/10);
    }
    let z = p+len;
    digits.reverse();
    while(p!=z){
      sum=sum+Math.pow(digits[i],p)
      p++;
      i++;
    }
    if(!Number.isInteger(sum/temp) ){
      return -1;
    }
    else{
      return sum/temp;
    }
}


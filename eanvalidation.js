function ean(s){
    let sum = 0,checksum=undefined;
    for(let x=0;x<s.length-1;x++){
     if(x%2 == 0){
      sum+=Number(s[x])*1;
     }
     else{
        sum+=Number(s[x])*3;
     }
    }
    if(sum%10==0){checksum=0;}
    else{
        checksum=10 - (sum % 10);
    }
    
    if(Number(s[s.length-1])==checksum){
        return true;
    }
    else{
        return false;
    }
    
}
console.log(ean("4003301018398"));
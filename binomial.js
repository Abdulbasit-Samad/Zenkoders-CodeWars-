// https://www.codewars.com/kata/540d0fdd3b6532e5c3000b5b/javascript
function fact(n){
    let prod =1;
    for(let x=n;x>=1;x--){
        prod*=x;
    }
    return prod;
}
function combination(n,r){
    return fact(n)/fact(r)*fact(n-r);
}
function variablepow(v,n){
    let constant="",variable="";
for(let x=0;x<v.length;x++){
    if(!(v[x]>='a' && v[x]<='z')){
     constant+=v[x];
    }
    else{
        variable+=v[x];
    }
}
    if(constant==""){
        if(n==0){return "1";}
        else if(n==1){
            return variable;
        }
        else{
        let t = "";
        for(let x=0;x<variable.length;x++){
            t+=variable[x]+'^'+n.toString();
        }
        return t;
    }
    }
    else if(variable==""){
        if(n==0){return "+1";}
        else if(n==1){
            return constant;
        }
        return Math.pow(parseInt(constant),n)>0 ?'+'+Math.pow(parseInt(constant),n):Math.pow(parseInt(constant),n).toString();
    }
    else{

        if(n==0){return "+1";}
        else if(n==1){
            return constant + variable;
        }
        else{
            let t = "";
            for(let x=0;x<variable.length;x++){
                t+=variable[x]+'^'+n.toString();
            }
            return Math.pow(parseInt(constant),n)>0 ?'+'+Math.pow(parseInt(constant),n)+t:Math.pow(parseInt(constant),n).toString()+t;
        }
    }
}
function product(a,b){
    

if(parseInt(a)==0 || parseInt(b)==0)return '0';
else{
  let c1=c2=v1=v2="",x=y=0;
  
  while(x!=a.length){

    if(!(a[x]>='a' && a[x]<='z')){
        c1+=a[x];
       }
       else{
           break;
       }
       x++;
  }
  v1 = x==a.length? "":a.substring(x);

  while(y!=b.length){

    if(!(b[y]>='a' && b[y]<='z')){
        c2+=b[y];
       }
       else{
           break;
       }
       y++
  }

  v2 = y==b.length? "":b.substring(y);
  return parseInt(c1)*parseInt(c2) > 0 ? '+' + parseInt(c1)*parseInt(c2)+ v1 + v2 : parseInt(c1)*parseInt(c2) + v1 + v2;
}


}

function binomial(exp){
    exp=exp.split('+');
    
}
console.log(product(variablepow('2r',0), variablepow('-3a',3)));
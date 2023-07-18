function primegap(g,m,n){
    let prime= [];
    for(let x=m;x<=n;x++){
        let z=2;
        while(z<x){
          if(x%z==0){
            break;
          }
          else{
            z++;
          }
        }
        if(z==x){
            prime.push(x);
        }
        if(prime.length>1){
           if(prime[prime.length-1]-prime[prime.length-2]==g){
             return "("+prime[prime.length-2].toString()+","+prime[prime.length-1].toString()+")";
           }
        }
    }
    return "";
    
}
console.log(primegap(2,3,25));

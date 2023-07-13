//

function arrayDiff(a, b) {
  if(b.length==0){
    return a;
    }
  else{
  for(let i=0;i<b.length;i++){
      for(let j=0;j<a.length;j++){
          if(b[i]==a[j]){
            
          a.splice(j,1);
            j--;
          }
         
      }
  }
  return a;
  }
}

var countBits = function(a) {
  if(a==0){
        return a;
    }
    result= [];
  while(a>=1){
      result.push(Math.floor(a%2));
      a=a/2;
  }
  result.reverse();
  let count=0;
  for(let x=0;x<result.length;x++){
      if(result[x]==1){
          count++;
      }
    }
    return count;
};
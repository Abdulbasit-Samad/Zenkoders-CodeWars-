function getMiddle(num)
{
  let s=""
  if(num.length==1){
      return num;
  }
  else if(num.length==2){
      return s
  }
  else{
      if(num.length%2==0){
          s=num[(num.length/2)-1]+num[num.length/2];
      }
      else{
          s=num[Math.floor(num.length/2)];
      }
      return s;
  }
}
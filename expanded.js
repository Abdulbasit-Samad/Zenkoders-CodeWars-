https://www.codewars.com/kata/5842df8ccbd22792a4000245

function expanded(num){
  let temp = [], answer="";
  while(num>=10){
      let s = num.toString();
      let length =  num.toString().length;
      temp.push(Math.pow(10,length-1)*Number(s[0]));
      num=num-Math.pow(10,length-1)*Number(s[0]);

  }
  temp.push(num);
  for(let x=0;x<temp.length;x++){
     answer+=temp[x].toString();
     if(x==temp.length-1){
        answer+="";
     }
     else{
        answer+=" + "
     }
  }
  return answer;
}

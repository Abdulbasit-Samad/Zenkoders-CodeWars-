//https://www.codewars.com/kata/52742f58faf5485cae000b9a/javascript
function timeduration(s){
    if(s==0)return "now";
    let d=h=m=sec=undefined,timefield = [],answer="";
   while(s!=0){
    if(s>=24*3600){
     d = Math.floor(s/24*3600);
     s-=d*24*3600;
    }
    else if(s>=3600){
     h=Math.floor(s/3600);
     s-=h*3600;
    }
    else if(s>=60){
     m=Math.floor(s/60);
     s-=m*60;
    }
    else if(s>0){
     sec=s;
     s=0;
    }
   }
   if(d!=undefined){
    if(d>1){
      timefield.push(d + " days");
    }
    else{
        timefield.push(d + " day");
    }
   }
   if(h!=undefined){
    if(h>1){
        timefield.push(h + " hours");
      }
      else{
          timefield.push(h + " hour");
      }
     }
    if(m!=undefined){
        if(m>1){
            timefield.push(m + " minutes");
          }
          else{
              timefield.push(m + " minute");
          }
     }
     
     if(sec!=undefined){
        if(sec>1){
            timefield.push(sec + " seconds");
          }
          else{
              timefield.push(sec + " second");
          }
     }  
     for(let x=0;x<timefield.length;x++){
        if(timefield.length==1){
            answer+=timefield[x];
        }
        else if(timefield.length==2){
            answer+=timefield[x] +" and "+timefield[x+1];
            break;
        }
        else{
            if(x<timefield.length-2){
                answer+=timefield[x]+", ";
            }
            else if(x==timefield.length-2){
                answer+=timefield[x]+" and ";
            }
            else{answer+=timefield[x]}
        }
     }
     
     return answer;
     
   }


console.log(timeduration(67628));

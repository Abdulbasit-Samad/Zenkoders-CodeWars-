// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/javascript

function bouncingBall(h,  bounce,  window) {
  
    if(h>0){
      if(bounce>0 && bounce<1){
        if(window<h){
          let count=0;
          while(h>window){
            h=h*bounce;
            count++;
            if (h > window) {
            count++;
        }
            
          }
          return count;
        }
      }
    }
    return -1;
    // your code here
  }
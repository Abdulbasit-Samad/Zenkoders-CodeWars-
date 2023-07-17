https://www.codewars.com/kata/5541f58a944b85ce6d00006a/javascript

function fabonacci(n){
    let prev=0, curr=1, temp=[],check=undefined;
    while(true){
     if(prev*curr==n){
        check=true;
        temp = [prev,curr,check];
        break;
     }
     else if(prev*curr>n){
        check=false;
        temp = [prev,curr,check];
        break;
     }
     else{
        let x=prev;
        prev=curr;
        curr=x+curr;
     }
    }
    return temp;

}
fabonacci(800);
// https://www.codewars.com/kata/580755730b5a77650500010c
function groupoddandeven(s){
    let even = "", odd = "";
    for(let x=0; x<s.length; x++){
        if(x%2==0){
           even+=s[x];
        }
        else{
            odd+=s[x]
        }
    }
    return even + " " +odd;
}
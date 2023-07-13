https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(a){
    a=a.toLowerCase();
    letters = [];
    for(let x=97; x<=122; x++){
        letters.push(String.fromCharCode(x));
    }
    let check=true;
    for(let i=0;i<letters.length;i++){
        if(a.includes(letters[i])==false){
            check=false;
            break;
        }
    }
    return check;
}
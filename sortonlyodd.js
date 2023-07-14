https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/javascript
function sortodd(array){
    for(let x=0; x<array.length;x++){
        for(let y=x+1; y<array.length;y++){
            if(array[x]>array[y] && array[x]%2!=0 && array[y]%2!=0){
               let temp = array[x];
               array[x]=array[y];
               array[y]=temp;
            }
        }
    }
    return array;
}
console.log(sortodd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
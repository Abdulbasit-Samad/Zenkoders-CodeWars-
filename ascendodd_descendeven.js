function oddevensort(array){
    for(let x=0; x<array.length;x++){
        for(let y=x+1; y<array.length;y++){
            if(array[x]>array[y] && array[x]%2!=0 && array[y]%2!=0){
               let temp = array[x];
               array[x]=array[y];
               array[y]=temp;
            }
        }
    }
        for(let x=0; x<array.length;x++){
            for(let y=x+1; y<array.length;y++){
                if(array[x]<array[y] && array[x]%2==0 && array[y]%2==0){
                let temp = array[x];
                array[x]=array[y];
                array[y]=temp;
                }
            }
        }
        return array;

}
let array = [5, 3, 2, 8, 1, 4];
console.log(oddevensort(array));
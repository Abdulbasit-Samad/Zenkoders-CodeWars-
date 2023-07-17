//https://www.codewars.com/kata/54d512e62a5e54c96200019e/javascript

function prime(n){
    let array = [],s="",temp=[];
    const dictionary = new Map();
    while(n!=1){
        for(let i=2;i<=n;i++){
            if(n%i==0){
              array.push(i);
              n/=i;
              break;
            }
        }
    }
    for(let x=0;x<array.length;x++){
       if(temp.indexOf(array[x])==-1){
        temp.push(array[x]);
        let count=0;
        let hold=temp[temp.length-1];
        for(let y=0;y<array.length;y++){
            if(array[y]==hold)count++;
        }
        dictionary.set(hold, count)
    }
    }
    for (let [key, value] of dictionary) {
        s+="("+key.toString();
        if(value>1){
            s+="**"+value.toString();
        }
        s+=")"
      }
      return s;
}

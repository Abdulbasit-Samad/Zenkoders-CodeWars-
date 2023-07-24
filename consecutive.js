function consec(a){

    let array = [],sum=0;

for(let x=1; x<=a ; x++)

{

    for(let y=x; y<=a ; y++)

    {

          for(let k=x; k<=y;k++){

             array.push(k);
             sum+=array[array.length-1];

          }

           console.log(array + '=' + sum);
           array=[];
           sum=0;
          

    }
}

}

consec(6);
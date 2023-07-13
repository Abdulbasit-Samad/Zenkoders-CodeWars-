// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(a, b) {
  let answer = [];
    let result1 = [];
    let result2 = [];
    for(let x = 0; x<a.length; x++){
        result1.push(a[x]);
    }
    for(let x = 0; x<b.length; x++){
        result2.push(b[x]);
    }
    for(let x=0; x<result1.length;x++){
        if(answer.includes(result1[x])==false)
        answer.push(result1[x]);
    }
    for(let x=0; x<result2.length;x++){
        if(answer.includes(result2[x])==false)
        answer.push(result2[x]);
    }
    answer.sort();
    let s = answer.join('');
    return s;
}
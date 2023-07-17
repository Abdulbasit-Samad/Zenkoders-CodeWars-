https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function hashtag(hash){
 if(hash.trim() === ''){return false;}
 let temp = hash.split(/\s+/);
 for(let x=0;x<temp.length;x++){
    temp[x]=temp[x][0].toUpperCase()+ temp[x].slice(1);
 }
temp.unshift("#");
let result=temp.join("");
if(result.len>140 || result.len <=0)return false;
else{
    return result;
}
}
console.log(hashtag(""));
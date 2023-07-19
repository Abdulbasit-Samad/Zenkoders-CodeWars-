//https://www.codewars.com/kata/55f89832ac9a66518f000118/javascript

//expression is solved correctly but arrangements of terms are different :)

function multilinear(s){
    let dictionary = {};
    let exp = [];
    s=s.split("");
    for(let x=0;x<s.length;x++){
        if(s[x]=='-' || s[x]=='+'){
            s.splice(x, 0, " ");
            x++;
        }
    }
    s=s.join(" ");
    s=s.trim();
    s=s.split("  ");
    for(let x=0;x<s.length;x++){
        s[x]=s[x].split("").sort().join("");
        s[x]=s[x].trim();
        if(s[x][0]>='a' && s[x][0]<='z'){
           s[x]='+1'+s[x];
        }
        else if(s[x][1]>='a' && s[x][1]<='z'){
            s[x]=s[x][0]+'1'+s[x].substring(1);
        }
        let temp=s[x].substring(2);
        if(!dictionary.hasOwnProperty(temp)){
            dictionary[temp] = 0;
        }
    }
    for(let key in dictionary){
        let sum=0;
        for(let x=0;x<s.length;x++){
          if(s[x].substring(2)==key){
            sum+=parseInt(s[x].substring(0,2));
          }
        }
        dictionary[key]=sum;
    }
    let ans="",i=0;
    for(let key in dictionary){
      if(Number(dictionary[key])>0){
        if(i!=0){ans+="+"+ dictionary[key].toString()+key;}
        
        else{
            ans+=dictionary[key].toString()+key;
        }
        
      }
      else if(dictionary[key]<0){
        ans+=dictionary[key].toString()+key;
      }
      i++;
    }
    for(let x=0;x<ans.length;x++){
        if(ans[i]!='1'){
            ans=ans.replace('1','');
        }
    }
    return ans;
}
console.log(multilinear("a+5ba+6a-c-2ba+d-a-a"));

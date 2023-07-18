const dictionary = {0:'0',1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'A',11:'B',12:'C',13:'D',14:'E',15:'F'};
function hex(n){
    let ans="";
    while(n>=16){
    ans+=dictionary[n%16];
    n=Math.floor(n/16);
    }
    if(n<16){
         if(ans.length==0){
            return '0'+dictionary[n];
        }
        else{
        ans+=dictionary[n];
        }
    }
    ans=ans.split("").reverse().join("");
    return ans;
}

function rgb(r, g, b){
  if(r<0)r=0; if(g<0)g=0; if(b<0)b=0;
    if(r>255)r=255; if(g>255)g=255; if(b>255)b=255;
    let rhex=hex(r);
    let ghex=hex(g);
    let bhex=hex(b);
    return rhex+ghex+bhex;
}
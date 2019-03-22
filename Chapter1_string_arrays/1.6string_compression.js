const str1 = "aabbcccdd";
const str2 = "aa";
const str3 = "a";

function compress(str) {
    const map = new Map();
    for(let i=0; i<str.length;i++){
        let count = 0;
        const char = str.charAt(i);
        if(map.has(char)) {
            count = map.get(char);
        }
        map.set(char, count+1);
    }
    let newStr = "";
    map.forEach((v,k) =>{
        newStr += k + v;
    });
    return newStr.length>str.length ? str : newStr;
}
console.log(compress(str1)); // smaller than str
console.log(compress(str2)); // same length as str
console.log(compress(str3)); // longer than str
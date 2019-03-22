const str1 = "pale";
const str2 = "paldsl";

function isOneLetterDiff(str1, str2) {
    if(Math.abs(str1.length - str2.length) > 1) return false;
    if(str1.includes(str2) || str2.includes(str1)) return true;
    if(str1.length>str2.length) {
        return insertAway(str1, str2)
    } else if(str1.length<str2.length){
        return insertAway(str2, str1)
    } else {
        return replaceAway(str1, str2)
    }
}

function insertAway(long, short) {
    for(let i=0; i<short.length;i++){
        if(long.charAt(i) != short.charAt(i)) {
            const newLong = long.slice(0, i) + long.slice(i+1, long.length);
            return newLong.includes(short);
        }
    }
    return true;
}

function replaceAway(s1, s2) {
    let diffIndex = [];
    for(let i=0; i<s1.length;i++){
        if(s1.charAt(i) != s2.charAt(i)) {
            diffIndex.push(i);
        }
        if(diffIndex.length>1) return false;
    }
    return true;
}

console.log(isOneLetterDiff(str1, str2))
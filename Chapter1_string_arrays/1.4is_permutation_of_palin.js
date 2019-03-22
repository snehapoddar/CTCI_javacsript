const str = "TACt coa";

function isPermutationOfPalindrome(str) {
    str = str.split(" ").join("");
    str = str.toLowerCase();
    let set = new Set();
    const arr = [...str];
    for(let i=0; i<arr.length;i++){
        if(set.has(arr[i])){
            set.delete(arr[i]);
        } else {
            set.add(arr[i]);
        }
    }
    return set.size < 2;
}
console.log(isPermutationOfPalindrome(str))
const ll = require("./ll.js");

const arr = [1, 2, 3, 1];
const head = ll.arrayToLL(arr);
const k = 2;

// solution 1 convert ll to array, reverse array and return kth

const kth = ll.llToArray(head).reverse()[k-1];
console.log(kth);


// solution 2 -  reverse ll and get kth element
const reversell = ll.reversell(head);

function getKth(reversell){
    let cur = reversell;
    for(let i=1; i<k; i++){
        cur = cur.next;
    }
    return cur.val;
}
console.log(getKth(reversell));
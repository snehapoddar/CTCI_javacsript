// This is not a good solution in terms of space complexity
const ll = require("./ll.js");

const arr1 = [1,2,3,4,5];
const head1 = ll.arrayToLL(arr1);
const arr2 = [8,9,4,5];
const head2 = ll.arrayToLL(arr2);
function intersection(head1, head2) {
    let set = new Set();
    while(head1 || head2){
        if(head1) {
            if(set.has(head1)) return head1;
            set.add(head1);
            head1 = head1.next;
        }
        if(head2) {
            if(set.has(head2)) return head2;
            set.add(head2);
            head2 = head2.next;
        }
    }
    return null;
}
const intersectionNode = intersection(head1, head2);
ll.printLL(intersectionNode);

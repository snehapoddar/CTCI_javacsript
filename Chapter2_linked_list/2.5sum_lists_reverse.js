const ll = require("./ll.js");

const arr1 = [6, 1, 7];
const head1 = ll.arrayToLL(arr1.reverse());
const arr2 = [2, 9, 5];
const head2 = ll.arrayToLL(arr2.reverse());

// ll.printLL(head1);
// ll.printLL(head2);

function sumLists(head1, head2) {
    let newHead = null;
    let carry = 0;
    while (head1 && head2) {
        let sum = carry + head1.val + head2.val;
        if (sum > 9) {
            carry = Math.floor(sum / 10);
            sum = sum-10;
        } else {
            carry = 0;
        }
        newHead = ll.insertNodeAtLast(newHead, sum);
        head1 = head1.next;
        head2 = head2.next;
    }
    if (!head1 && !head2) {
        return carry === 0 ? newHead : ll.insertNodeAtLast(newHead, carry);
    }
    return head1 ? sumRemainingNodes(newHead, head1, carry) : sumRemainingNodes(newHead, head2, carry);
}

// edge case if both linked lists are not of same length
function sumRemainingNodes(newHead, head, carry){
    while (head) {
        let sum = carry + head.val;
        if (sum > 9) {
            carry = Math.floor(sum / 10);
            sum = sum-10;
        } else {
            carry = 0;
        }
        newHead = ll.insertNodeAtLast(newHead, sum);
        head = head.next;
    }
    return carry === 0 ? newHead : ll.insertNodeAtLast(newHead, carry);
}

const sumHead = sumLists(head1, head2);
ll.printLL(sumHead);
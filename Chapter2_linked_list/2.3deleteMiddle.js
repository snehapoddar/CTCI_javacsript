const ll = require("./ll.js");

const arr = [1, 2, 3, 1];
const head = ll.arrayToLL(arr);

const newLL = ll.deleteNode(head,3);
ll.printLL(newLL);
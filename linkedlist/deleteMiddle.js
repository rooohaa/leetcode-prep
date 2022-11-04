function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteMiddle = function (head) {
  if (!head || !head.next) {
    return null;
  }

  let slow = head;
  let fast = head.next.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow.next = slow.next.next;

  return head;
};

function linkedListToArr(head) {
  const arr = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  return arr;
}

// [1, 3, 4, 7, 1, 2, 6]
const list = new ListNode(1);
list.next = new ListNode(3);
list.next.next = new ListNode(4);
list.next.next.next = new ListNode(7);
list.next.next.next.next = new ListNode(1);
list.next.next.next.next.next = new ListNode(2);
list.next.next.next.next.next.next = new ListNode(6);

console.log(deleteMiddle(list));

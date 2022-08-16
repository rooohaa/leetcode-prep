/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

var removeElements = function (head, val) {
  let dummy = new ListNode(0, head)
  let curr = head
  let prev = dummy

  while (curr) {
    let next = curr.next

    if (curr.val === val) {
      prev.next = next
    } else {
      prev = curr
    }

    curr = next
  }

  return dummy.next
}

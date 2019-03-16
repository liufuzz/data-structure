/*
----------使用链表实现队列----------
*/

function LinkedListQueue() {
  function Node(e, next?: null) {
    this.e = e;
    this.next = next;
  }

  var head = new Node(null);
  var tail = new Node(null);
  var size = 0;

  // 获取队列元素个数
  this.getSize = () => {
    return size;
  };

  // 队列是否为空
  this.isEmpty = () => {
    return size == 0;
  };

  // 入队
  this.enqueue = e => {
    if (tail == null) {
      tail = new Node(e);
      head = tail;
    } else {
      tail.next = new Node(e);
      tail = tail.next;
    }
    size++;
  };

  // 出队
  this.dequeue = () => {
    if (size == 0) {
      throw 'cannot dequeue from an empty queue. ';
    }

    var retNode = head;
    head = head.next;
    retNode.next = null;
    if (head == null) {
      tail = null;
    }
    size--;
    return retNode.e;
  };
}

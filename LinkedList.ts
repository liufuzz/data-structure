/*
---------实现链表----------

*/

function LinkedList() {
  function Node(e, next?: null) {
    this.e = e;
    this.next = next;
  }

  var size = 0;
  var dummyHead = new Node(null, null); // 初始化是存在一个虚拟头节点（常用技巧）

  //  获取链表中元素个数
  this.getSize = () => {
    return size;
  };

  // 返回链表是否为空
  this.isEmpty = () => {
    return size == 0;
  };

  // 在链表的index位置添加新元素e
  this.add = (index, e) => {
    if (index < 0 || index > size) {
      throw 'add failed. Illegal index';
    }

    var prev = dummyHead;

    for (var i = 0; i < index; i++) {
      prev = prev.next;
    }
    var node = new Node(e);
    node.next = prev.next;
    prev.next = node;

    size++;
  };

  //在链表头添加新元素e
  this.addFirst = e => {
    this.add(0, e);
  };

  // 在链表末尾添加新元素e
  this.addLast = e => {
    this.add(size, e);
  };

  // 获取链表的第index个位置的元素
  this.get = index => {
    if (index < 0 || index > size) {
      throw 'get failed. Illegal index';
    }

    var cur = dummyHead.next;

    for (var i = 0; i < index; i++) {
      cur = cur.next;
    }
    return cur.e;
  };

  // 获得链表第一个元素
  this.getFirst = () => {
    return this.get(0);
  };

  // 获得链表最后一个元素
  this.getLast = () => {
    return this.get(size - 1);
  };

  // 修改链表的第index个位置的元素为e
  this.set = (index, e) => {
    if (index < 0 || index > size) {
      throw 'set failed. Illegal index';
    }
    var cur = dummyHead.next;
    for (var i = 0; i < index; i++) {
      cur = cur.next;
    }
    cur.e = e;
  };

  // 查找链表中是否含有元素e
  this.contains = e => {
    var cur = dummyHead.next;

    while (cur != null) {
      if (cur.e == e) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  };

  // 打印链表
  this.print = () => {
    var cur = dummyHead.next;
    while (cur != null) {
      console.log(cur.e);
      cur = cur.next;
    }
  };
}


// 测试
var linkedList = new LinkedList();

for (var i = 0; i < 5; i++) {
  linkedList.addFirst(i);
}
linkedList.set(2, 'v');
linkedList.print();

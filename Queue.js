/*

-----------实现队列-------------

enqueue(element):向队列尾部添加一个（或是多个）元素。

dequeue():移除队列的第一个元素，并返回被移除的元素。

front():返回队列的第一个元素——最先被添加的也是最先被移除的元素。队列不做任何变动。

isEmpty():检查队列内是否有元素，如果有返回true，没有返回false。

size():返回队列的长度。

print():打印队列的元素。
*/

function Queue() {
  var queueArr = [];

  this.enqueue = function(element) {
    queueArr.push(element);
  };

  this.dequeue = function() {
    return queueArr.shift();
  };

  this.front = function() {
    return queueArr[0];
  };

  this.isEmpty = function() {
    return queueArr.length == 0;
  };

  this.size = function() {
    return queueArr.length;
  };

  this.print = function() {
    queueArr.forEach(item => {
      console.log(item);
    });
  };

  this.clear = function() {
    queueArr = [];
  };
}


// 测试

var queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue('a');
queue.enqueue('b');

queue.print();

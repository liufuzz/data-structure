/*
-----------实现栈------------

push(element):添加一个或是几个新元素到栈顶。

pop():移除栈顶的元素，同时返回被移除元素。

peek():返回栈顶的元素，但并不对栈顶的元素做出任何的修改。

isEmpty():检查栈内是否有元素，如果有返回true，没有返回false。

clear():清除栈里的元素。

size():返回栈的元素个数。

print():打印栈里的元素。
*/

function Stack() {
  var arr = [];

  this.push = function(element) {
    arr.push(element);
  };

  this.pop = function() {
    return arr.pop();
  };

  this.peek = function() {
    return arr[arr.length - 1];
  };

  this.isEmpty = function() {
    return arr.length == 0;
  };

  this.clear = function() {
    arr = [];
  };

  this.size = function() {
    return arr.length;
  };

  this.print = function() {
    arr.forEach(item => {
      console.log(item);
    });
  };
}

// 测试
var stack = new Stack();

console.log(stack.isEmpty());
stack.push(1);
stack.push(2);

stack.print();

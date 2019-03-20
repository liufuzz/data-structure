/*
----------二分搜索树----------
*/

function BST() {
  function Node(e) {
    (this.e = e), (this.left = null);
    this.right = null;
  }

  var size = 0;
  var root = null;

  this.size = () => {
    return size;
  };

  this.isEmpty = () => {
    return size == 0;
  };

  /**
   * 向二分搜索树中添加元素e(e可比较)
   */
  this.add = e => {
    root = _add(root, e);
  };
  //向以node为跟的二分搜索树插入e, 递归算法
  //返回插入新节点后二分搜索树的跟
  function _add(node, e) {
    if (node == null) {
      size++;
      return new Node(e);
    }

    if (e < node.e) {
      node.left = _add(node.left, e);
    } else if (e > node.e) {
      node.right = _add(node.right, e);
    }

    return node;
  }

  /**
   * 查看二分搜索树中是否含有元素e
   */
  this.contains = e => {
    _contains(root, e);
  };
  //查看以node为跟的二分搜索树中是否含有元素e, 递归实现
  function _contains(node, e) {
    if (node == null) {
      return false;
    }

    if (e == node.e) {
      return true;
    } else if (e < node.e) {
      return _contains(node.left, e);
    } else if (e > node.e) {
      return _contains(node.right, e);
    }
  }

  /**
   * 二分搜索树的前序遍历
   */
  this.preOrder = () => {
    _preOrder(root);
  };
  //前序遍历以node为跟的二分搜索树, 递归实现
  function _preOrder(node) {
    if (node == null) {
      return;
    }

    console.log(node.e);
    _preOrder(node.left);
    _preOrder(node.right);
  }

  //寻找二分搜索树的最小值
  this.minimum = () => {
    if (size == 0) {
      throw 'is Empty';
    }
    return _minimum(root).e;
  };
  //返回以node为根的二分搜索树的最小值所在的节点
  function _minimum(node) {
    if (node.left == null) {
      return node;
    }
    return _minimum(node.left);
  }

  //寻找二分搜索树的最大值
  this.maximum = () => {
    if (size == 0) {
      throw 'is Empty';
    }
    return _maximum(root).e;
  };
  //返回以node为根的二分搜索树的最大值所在的节点
  function _maximum(node) {
    if (node.right == null) {
      return node;
    }
    return _maximum(node.right);
  }
}

/**
 *  测试
 */
var bst = new BST();
var arr = [5, 3, 6, 8, 4, 2, 9];
arr.forEach(x => {
  bst.add(x);
});
bst.preOrder();
bst.preOrderNR();

//非递归前序遍历实现(使用栈实现)
// this.preOrderNR = () => {
//   var stack = new Stack();
//   stack.push(root);
//   while(!stack.isEmpty()){
//     var cur = stack.pop();
//     console.log(cur.e);

//     if(cur.right != null) {
//       stack.push(cur.right);
//     }
//     if(cur.left != null) {
//       stack.push(cur.left);
//     }
//   }
// }

/**
 * -----二叉堆(最大堆)-----
 * 二叉堆由一棵完全二叉树来表示其结构，用一个数组来表示
 * 二叉堆的父节点的键值总是大于或等于(小于或等于)任何一个子节点的键值
 * 当父节点的键值大于或等于(小于或等于)它的每一个子节点的键值时，称为最大堆（最小堆）
 */

class MaxHeap {
  
  public data: Array<any> = [];

  public size() {
    return this.data.length;
  }

  public isEmpty() {
    return this.data.length == 0;
  }

  //返回完全二叉树的数组表示中, 一个索引所表示的元素的父亲节点的索引
  private parent(index: number) {
    if (index == 0) {
      throw 'index-0 no parent';
    }
    return Math.floor((index - 1) / 2);
  }

  //返回完全二叉树的数组表示中, 一个索引所表示的元素的左孩子节点的索引
  private leftChild(index: number) {
    return index * 2 + 1;
  }

  //返回完全二叉树的数组表示中, 一个索引所表示的元素的右孩子节点的索引
  private rightChild(index: number) {
    return index * 2 + 2;
  }

  //向堆中添加元素
  public add(e: any): void {
    this.data.push(e);
    this.siftUp(this.size() - 1);
  }
  //上浮操作
  private siftUp(k: number): void {
    while (k > 0 && this.data[this.parent(k)] < this.data[k]) {
      [ this.data[this.parent(k)], this.data[k] ] = [ this.data[k], this.data[this.parent(k)] ]; //交换位置
      k = this.parent(k);
    }
  }

  //取出堆中最大元素
  public extractMax() {
    let ret = this.data[0]; 

    [this.data[0], this.data[this.data.length - 1]] = [this.data[this.data.length - 1], this.data[0]];
    this.data.pop();
    this.siftDown(0);
    return ret;
  }
  //下沉操作
  private siftDown(k: number): void {
    while (this.leftChild(k) < this.data.length) {
      let j = this.leftChild(k);
      if (j + 1 < this.data.length && this.data[j] < this.data[j + 1]) { //判断是否右右孩子 并且大于左孩子
        j = this.rightChild(k); //this.data[j] 是左右孩子节点中的最大值
      }

      if (this.data[k] >= this.data[j]) {
        return;
      } else {
        [this.data[k], this.data[j]] = [this.data[j], this.data[k]]; //交换位置
        k = j;
      }
    }
  }

  //取出堆中最大元素, 并替换成元素e
  public replace(e: any) {
    let ret = this.data[0];
    this.data[0] = e;
    this.siftDown(0);
    return ret;
  }

  //将一个数组转换成最大堆
  public heapify(arr: Array<any>) {
    this.data = arr;
    for(let i = this.parent(arr.length - 1); i >= 0; i--) {
      this.siftDown(i);
    }
  }
}


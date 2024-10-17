type Node<T> = {
  value: T,
  prev?: Node<T>,
};
// a stack follows the rules of last-in, last-out
// a stack only has a reference to the top element of it

// make a stack class with its functions
export default class Stack<T> {
  public length: number;
  private top?: Node<T>;

  constructor() {
    this.length = 0;
    this.top = undefined;
  }

  private createNode(value: T): Node<T> {
    return { value };
  }

  push(item: T): void {
    const node = this.createNode(item);
    // no value yet
    this.length++;
    if (!this.top) {
      this.top = node;
      return;
    }
    node.prev = this.top;
    this.top = node;
  }

  pop(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }
    const t = this.top;
    if (t) {
      this.top = this.top?.prev;
    }
    this.length--;
    return t?.value;
  }

  peek(): T | undefined {
    return this.top?.value;
  }
}
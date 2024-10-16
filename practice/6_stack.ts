type Node<T> = {
  value: T,
  next?: Node<T>,
};
// a stack follows the rules of last-in, last-out

// make a stack class with its functions
export default class Stack<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  private createNode(value: T): Node<T> {
    return { value };
  }

  push(item: T): void {
    const node = this.createNode(   
  }

  pop(): T | undefined {

  }

  peek(): T | undefined {

  }
}
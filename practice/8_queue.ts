type Node<T> = {
  value: T,
  next?: Node<T>
};
// a queue is the opposite of a stack
// it follows the rule that the first in is the first out
// unlike a stack, a queue keeps references to the head and the tail
// for dequeing and enqueuing

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

  enqueue(item: T): void {
    const node = this.createNode(item);
    // no value yet
    this.length++;
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  deque(): T | undefined {
    const h = this.head;
    if (h) {
      this.head = this.head?.next;
    }
    return h?.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
// question mark operator in javascript (optional chaining) allows us to call a 
// property in an object (if it has it) so that it does not raise an error
type Node<T> = {
  value: T
  next?: Node<T>,
};
// make a singly linked list class with its functions
export default class SinglyLinkedList<T> {
  public length: number;
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    // bookkeeping like storing length is good practice
    // helps us do some quick comparisons (especially checking if empty or not)
    this.length = 0;
    this.head = this.tail = undefined
  }

  private createNode(value: T): Node<T> {
    return { value };
  }

  prepend(item: T): void {
    const node = this.createNode(item);
    this.length++;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    node.next = this.head;
    this.head = node;
  }

  insertAt(item: T, idx: number): void {
    if (!this.tail) {
      this.prepend(item);
      return;
    }
    const node = this.createNode(item);
    let curr: Node<T> | undefined = this.head;
    for (let i = 0; i < idx - 1 && curr; i++) {
      curr = curr.next;
    }
    if (!curr) {
      this.tail.next = node;
      this.tail = node;
      return;
    }
    node.next = curr.next?.next;
    curr.next = node;
  }

  append(item: T): void {
    const node = this.createNode(item);
    this.length++;
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  remove(item: T): T | undefined {
    let curr: Node<T> | undefined = this.head;
    for (let i = 0; i < this.length && curr; i++) {
      if (curr.next?.value === item) {
        const n = curr.next;
        curr.next = curr.next.next;
        return n.value;
      }
      curr = curr.next;
    }
    return undefined;
  }

  get(idx: number): T | undefined {
    let curr = this.head;
    for (let i = 0; i < idx && curr; i++) {
      curr = curr.next;
    }
    return curr?.value;
  }

  removeAt(idx: number): T | undefined {
    let curr: Node<T> | undefined = this.head;
    for (let i = 0; i < idx - 1 && curr; i++) {
      curr = curr.next;
    }
    if (!curr) {
      return undefined;
    }
    if (curr === this.head) {
      const n = this.head;
      this.head.next = this.head.next?.next;
      return n.value;
    }
    const n = curr?.next;
    curr.next = curr?.next?.next;
    return n?.value;
  }
}
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
  }

  insertAt(item: T, idx: number): void {
  }

  append(item: T): void {
  }

  remove(item: T): T | undefined {
  }

  get(idx: number): T | undefined {
  }

  removeAt(idx: number): T | undefined {
  }
}
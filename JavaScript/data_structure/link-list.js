class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    reverse() {
        let prev = null;
        let current = this.head;
        while(current){
            const tempNode = current.next;
            current.next = prev;
            prev = current;
            current = tempNode;
        }
        this.head = prev;
    }

    print() {
        let current = this.head;
        let list = '';
        while (current) {
          list += current.data + ' -> ';
          current = current.next;
        }
        console.log(list + 'null');
      }
}

const list = new LinkedList();

list.append(10);
list.append(15);
list.append(30);
list.append(45);
list.append(50);
list.print();
list.reverse();
list.print();
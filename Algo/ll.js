// below class helps us to create new nodes of linked list

class Node{
    constructor(element){
        this.elem =  element,
        this.next = null
    }

}

// Now we will create Linked list class
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }
    addNode(newNode){
        let currentNode = new Node(newNode);
        let current;

        if(this.head === null){
            this.head = currentNode;
        }else {
            current = this.head;
 
            while (current.next) { 
                current = current.next; 
            } 
            current.next = currentNode; 
           
        }
        this.size++;
     }

    insertAt(element,location){
        if(location > 0 && location >this.size){
            return false
        }
        else{
            let currentNode = new Node(element);
            let curr, prev;
            if(index === 0){
                currentNode.next = this.head;
                this.head = currentNode
            }else{
                
            }
        }
    }
}

const ll = new LinkedList();
ll.addNode(14);
ll.addNode(12);
ll.addNode(13);
console.log(ll);
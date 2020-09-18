class Node{
    constructor(data){
        this.data = data;
        this.children = [];
    }
}


class Tree {
    constructor(){
        this.root = null;
    }

    add(node, toNodeData){
        const newNode = new Node(node);

        const parent = toNodeData ? this.findBFS(toNodeData) : null;
         if(parent){
            parent.children.push(newNode);
         }else{
             if(!this.root){
                 this.root = newNode;
             }
             else{
                 return `Tried to store Node at root but Root Already Exists`
             }

         }
    }

    findBFS(data){
        let temporaryNode = null;
        this.traverseBFS((node) =>{
            if(node.data == data){
                temporaryNode = node;
            }
        })
        return temporaryNode;
    }

    traverseBFS(cb){
        const queue = [this.root];
        if(cb){
            while(queue.length){
              const node = queue.shift();
              cb(node)
              for(const children of node.children){
                  queue.push(children)
              }      
            }
        }
    }

}



const tt = new Tree();
tt.add('node1')
tt.add('node2','node1')
tt.add('node3','node1')
tt.add('node4','node2')
tt.add('node5','node2')

tt.traverseBFS((node) => console.log('current node',node) );
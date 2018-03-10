function Node(data){
	this.data = data;
	this.next = null;
}

function SinglyLinkedList(){
	this.length = 0;
	this.head = null;
	this.tail = null;
}

//LIFO(last in first out);
SinglyLinkedList.prototype.add = function(data){
	let node = new Node(data);

	if(this.length === 0){
		this.head = node;
		this.tail = node;
	}else{
		this.tail.next = node;
		this.tail = node;
	}
	this.length++;
}

SinglyLinkedList.prototype.remove = function(data){
	let previous = this.head;
	let current = this.head;
	while(current){
		if(current.data === data) {
			if(current === this.head){
				this.head = this.head.next;
			}
			if(current === this.tail){
				this.tail = previous;
			}
			previous.next = current.next;
			this.length--;
		}else{
			previous = current;
		}
		current = current.next
	}
}

SinglyLinkedList.prototype.search = function(data){
	let current = this.head;
	while(current){
		if(current.data === data){
			return current;
		}else{
			current = current.next;
		}
	}	
	return null;
}



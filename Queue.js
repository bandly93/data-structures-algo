function Queue(){
	this.array = [];
}

Queue.prototype.enqueue = function(data){
	this.array.push(data);
}

Queue.prototype.dequeue = function(){
	return this.array.splice(1,Queue.length-1);
}

Queue.prototype.peek = function(){
	return this.array[0];
}


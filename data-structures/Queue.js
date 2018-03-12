function Queue(){
	this.array = [];
}

Queue.prototype.enqueue = function(data){
	this.array.push(data);
}

Queue.prototype.dequeue = function(){
	return this.array.shift();
}

Queue.prototype.peek = function(){
	return this.array[0];
}


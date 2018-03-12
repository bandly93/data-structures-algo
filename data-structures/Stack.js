function Stack(){
	this.array = [];
}

Stack.prototype.push = function(data){
	this.array.push(data);
}

Stack.prototype.pop = function(){
	return this.array.pop();
}

Stack.prototype.peep = function(){
	return this.array[this.array.length-1];
}

Stack.prototype.length = function(){
	return this.array.length;
}

// write a simple hash table for quick lookups and insertions.

//hash table constructor
function HashTable(size){
	this.table = {};
	this.numberOfValues = 0;
	this.size = size;
}

//generates a hash code
HashTable.prototype.generateHash = function(key){
	let total = 0;
	for(let i = 0; i < key.length; i++){
		total += key.charCodeAt(i);
	}
	return total % this.size;
}

//create insertion function and make sure to check collision 
HashTable.prototype.add = function(key,value){
	let index = this.generateHash(key);
	if(!this.table.hasOwnProperty(index)){
		this.table[index] = {}
	}
	if(!this.table[index].hasOwnProperty(key)){
		this.numberOfValues++;
	}
	this.table[index][key] = value;
}

//create search function
HashTable.prototype.search = function(key){
	let index = this.generateHash(key);
	if(this.table.hasOwnProperty(index) && this.table[index].hasOwnProperty(key)){
		return this.table[index][key];
	return null;
	}
}

//remove function
HashTable.prototype.remove = function(key){
	let index = this.generateHash(key);
	if(this.search(key){
		delete this.table[index][key]
		this.numberOfValues--;
	}
}

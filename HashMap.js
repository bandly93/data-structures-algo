// write a simple hash table for quick lookups and insertions.

//hash table constructor
const HashTable = (size) => {
	this.table = {};
	this.numberOfValues = 0;
	this.size = size;
}

//create an instance of the hashclass with a array size of 30;
let myHash = new HashTable(30);

//generates a hash code
HashTable.prototype.generateHash = (key) => {
	let total = 0;
	for(let i = 0; i < key.length; i++){
		total += key.charCodeAt(i);
	}
	let hash = total % this.size;
	return hash;
}

//create insertion function and make sure to check collision 

HashTable.prototype.add = (key,value) => {
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
HashTable.prototype.search = (key) => {
	let index = this.generateHash(key);
	if(this.table.hasOwnProperty(index) && this.table[hash].hasOwnProperty(key){
		return this.table[index][key];
	} else { 
		return null;
	}
}



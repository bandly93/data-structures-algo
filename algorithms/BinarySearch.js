const {QuickSort} = require('./QuickSort');

/*
	create a binary search algorithm
*/

function BinarySearch(arr,target){
	let array = QuickSort(arr,0,arr.length-1);
	let midway = Math.floor(array.length/2);
	if(array[midway] === target){
		return array[midway];	
	}
	if(array.length === 0 ){
		return null;
	}else if(array[midway] > target){
		return BinarySearch(array.slice(0,midway),target)
	}else{
		return BinarySearch(array.slice(midway+1,array.length),target);
	}	
}	
 
module.exports = BinarySearch;



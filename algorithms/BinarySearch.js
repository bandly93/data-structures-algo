function QuickSort(array,left,right){
	let index; 
	if(array.length > 1){	
		index = Partition(array,left,right);
		if(left < index -1){
			QuickSort(array,left,index-1);
		}
		if(index < right){
			QuickSort(array,index,right);
		}
	}
	return array;
}	

function Partition(array,left,right){
	let i = left;
	let j = right;
	let pivot = array[Math.floor((right+left)/2)];	
	while(i <= j){
		while(array[i] < pivot){
			i++;
		}
		while(array[j] > pivot){
			j--;
		}
		if(i <= j){
			Swap(array,i,j);
			i++;
			j--;
		}	
	}	
	return i;
}

function Swap(array,firstIndex,secondIndex){
	let firstItem = array[firstIndex];
	let secondItem = array[secondIndex];
	array[firstIndex] = secondItem;
	array[secondIndex] = firstItem;	
}
/*
	create a binary search algorithm
*/

let array = [1,2];
let target = 1

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


/* 
	***** TESTING *****
console.log(BinarySearch([1,2],1));
console.log(BinarySearch([1,3,4,5,6,6,7,8],3));
console.log(BinarySearch([],5));
console.log(BinarySearch([13,4,5],8));
console.log(BinarySearch([],0));
console.log(BinarySearch([1,1,4,77,13,2,5,7,2,3,5,6,712,2,0,-7],-7));

*/




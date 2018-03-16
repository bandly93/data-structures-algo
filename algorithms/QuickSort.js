/*
	Write a quicksort function to sort array items
*/

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
	*****TESTING*******

let array = [3,1,2,0];
let qs = QuickSort(array,0,array.length-1);

*/

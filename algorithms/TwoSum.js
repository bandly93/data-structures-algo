/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
Complexity Analysis:

Time complexity : O(n)O(n). We traverse the list containing nn elements only once. Each look up in the table costs only O(1)O(1) time.
Space complexity : O(n)O(n). The extra space required depends on the number of items stored in the hash table, which stores at most nn elements.
*/

var twoSum = function(nums, target) {
    let obj = {};
    let number;
    for(let i = 0; i < nums.length; i++){
        number = target-nums[i];
        if((i !== obj[number]) && obj.hasOwnProperty(number)){
            if(i < obj[number]){
                return [i,obj[number]];
            }else{
                return [obj[number],i];    
            }
        }
        obj[nums[i]] = i;
    }
    return null;
};

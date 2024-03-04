/*
    https://leetcode.com/problems/jump-game/

    You are given an integer array nums. 
    You are initially positioned at the array's first index, 
    and each element in the array represents your maximum jump length at that position.

    Return true if you can reach the last index, or false otherwise.

    Example 1:

    Input: nums = [2,3,1,1,4]
    Output: true
    Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.


    Example 2:

    Input: nums = [3,2,1,0,4]
    Output: false
    Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
*/

// Backtracking with memo
function canJump(nums) {
    const visited = new Array(nums.length).fill(false);
    const stackOfIndiciesToExplore = [0];
    
    while (stackOfIndiciesToExplore.length > 0) {
        const currentIdx = stackOfIndiciesToExplore.pop();
        const nextFurthestJump = nums[currentIdx];
        
        if (currentIdx == nums.length - 1) {
            return true;
        }
        
        if (visited[currentIdx]) {
            continue;
        } else {
            visited[currentIdx] = true;
        }
        
        for (let i = 1; i <= nextFurthestJump; i++) {
            stackOfIndiciesToExplore.push(currentIdx + i);
        }
    }
    
    return false;    
};

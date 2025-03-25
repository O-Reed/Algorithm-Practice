function findPairWithSum(arr, n, targetSum) {
    // Initialize two pointers
    let left = 0;
    let right = n - 1;
    
    // Continue until pointers meet
    while (left < right) {
        const currentSum = arr[left] + arr[right];
        
        // If we find the target sum
        if (currentSum === targetSum) {
            return {
                found: true,
                pair: [arr[left], arr[right]]
            };
        }
        
        // If current sum is less than target, move left pointer
        if (currentSum < targetSum) {
            left++;
        }
        // If current sum is more than target, move right pointer
        else {
            right--;
        }
    }
    
    // If no pair is found
    return {
        found: false,
        pair: null
    };
}

// Process input and handle output
function processInput(input) {
    // Split input into lines
    const lines = input.trim().split('\n');
    
    // Parse input
    const n = parseInt(lines[0]);
    const arr = lines[1].split(' ').map(Number);
    const targetSum = parseInt(lines[2]);
    
    // Find pair
    const result = findPairWithSum(arr, n, targetSum);
    
    // Output result
    if (result.found) {
        console.log("Yes");
        console.log(`Pair: ${result.pair[0]},${result.pair[1]}`);
    } else {
        console.log("No");
    }
}

// Example usage:
const input1 = `6
1 3 5 7 9 11
10`;

const input2 = `5
1 4 6 7 9
18`;

processInput(input1);
processInput(input2);


/**
 * 
 * Time Complexity: O(n) - where n is the size of the array
 * Space Complexity: O(1) - uses constant extra space
 */
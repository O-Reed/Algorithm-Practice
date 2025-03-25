function findClosestPair(arr1, arr2, m, n, target) {
    let i = 0;
    let j = n - 1;  // Start from end of second array
    
    // Initialize variables to store result
    let minDiff = Number.MAX_SAFE_INTEGER;
    let resultPair = [-1, -1];
    
    // Initialize variables to store indices of closest pair
    let minI = 0;
    let minJ = 0;
    
    // While there are elements to compare
    while (i < m && j >= 0) {
        const sum = arr1[i] + arr2[j];
        const diff = Math.abs(sum - target);
        
        // Update result if current diff is less than minimum diff
        // or if diff is same but current indices are smaller
        if (diff < minDiff || 
            (diff === minDiff && (i < minI || (i === minI && j < minJ)))) {
            minDiff = diff;
            minI = i;
            minJ = j;
            resultPair = [arr1[i], arr2[j]];
        }
        
        // If sum is less than target, increment i to get bigger sum
        if (sum < target) {
            i++;
        }
        // If sum is more than target, decrement j to get smaller sum
        else if (sum > target) {
            j--;
        }
        // If sum equals target, we found the best possible pair
        else {
            break;
        }
    }
    
    return resultPair;
}

function processInput(input) {
    // Split input into lines
    const lines = input.trim().split('\n');
    
    // Parse input
    const [m, n] = lines[0].split(' ').map(Number);
    const arr1 = lines[1].split(' ').map(Number);
    const arr2 = lines[2].split(' ').map(Number);
    const target = parseInt(lines[3]);
    
    // Find closest pair
    const result = findClosestPair(arr1, arr2, m, n, target);
    
    // Output result
    console.log(`The closest pair is [${result[0]}, ${result[1]}]`);
}

// Test cases
const input1 = `3 4
6 7 9
4 5 6 8
16`;

const input2 = `4 4
1 4 5 7
10 20 30 40
50`;

// Run test cases
processInput(input1);
processInput(input2);


/**
 * Time Complexity: O(m + n) where m and n are the lengths of the input arrays
 * Space Complexity: O(1) as it uses constant extra space

 */
// You are given the integer n and the array edges where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.

// Return an array answer of length n where answer[i] is the sum of the distances between the ith node in the tree and all other nodes.

 

// Example 1:


// Input: n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
// Output: [8,12,6,10,10,10]
// Explanation: The tree is shown above.
// We can see that dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5)
// equals 1 + 1 + 2 + 2 + 2 = 8.
// Hence, answer[0] = 8, and so on.
// Example 2:


// Input: n = 1, edges = []
// Output: [0]
// Example 3:


// Input: n = 2, edges = [[1,0]]
// Output: [1,1]
 

// Constraints:

// 1 <= n <= 3 * 104
// edges.length == n - 1
// edges[i].length == 2
// 0 <= ai, bi < n
// ai != bi
// The given input represents a valid tree.

// let map = {1:0,2:0,3:2,4:2,5:2}
// let getDistance = function(n, map,dist) {
//     dist++;
//     if(map[n] != 0){
//         dist = getDistance(map[n],map,dist);
//     }
//     return dist;
// }

let parent_map = {1:0,2:0,3:2,4:2,5:2}
let map = {0:[1,2],2:[3,4,5]}
let getDistance = function(start,end,dist) {
    dist++;
    if(start == end) return dist;
    if(parent_map[start] == end || (map[start] && map[start].includes(end))){
        return dist
    }
    else if(parent_map[start] != undefined && parent_map[start] != end ){
        return getDistance(parent_map[start],end,dist)
    }
    else if(map[start] != undefined && !map[start].includes(end)){
        return getDistance(map[start],end,dist)
    }
}

var sumOfDistancesInTree = function (n, edges) {
    let output = [];
    let keys = [0,1,2,3,4,5]
    for (var j = 0; j < keys.length; j++) {
        let sum = 0;
        for (var i = 1; i < n; i++) {
            let dist = getDistance(i, keys[j], 0)
            console.log("DISTANCE", i, keys[j], dist);
            sum += dist;
        }
        output.push(sum);
        console.log(sum);
    }
    return output;
};

console.log(sumOfDistancesInTree(6, [[0,1],[0,2],[2,3],[2,4],[2,5]]));


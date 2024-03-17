# Code Templates

https://leetcode.com/explore/interview/card/cheatsheets/720/resources/4723/

## Two pointers: one input, opposite ends

```javascript
let fn = (arr) => {
  let left = 0,
    ans = 0,
    right = arr.length - 1;

  while (left < right) {
    // do some logic here with left and right
    if (CONDITION) {
      left++;
    } else {
      right--;
    }
  }

  return ans;
};
```

## Two pointers: two inputs, exhaust both

```javascript
let fn = (arr1, arr2) => {
    let i = 0, j = 0, ans = 0;

    while (i < arr1.length && j < arr2.length) {
        // do some logic here
        if (CONDITION) {
            i++;
        } else {
            j++;
        }
    }

    while (i < arr1.length) {
        // do logic
        i++;
    }

    while (j < arr2.length) {
        // do logic
        j++;
    }

    return ans;
}
};
```

## Sliding window

```javascript
let fn = (arr) => {
  let left = 0,
    ans = 0,
    curr = 0;

  for (let right = 0; right < arr.length; right++) {
    // do logic here to add arr[right] to curr

    while (WINDOW_CONDITION_BROKEN) {
      // remove arr[left] from curr
      left++;
    }

    // update ans
  }

  return ans;
};
```

## Build a prefix sum

```javascript
let fn = (arr) => {
  let prefix = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    prefix.push(prefix[prefix.length - 1] + arr[i]);
  }

  return prefix;
};
```

## Efficient string building

```javascript
// arr is a list of characters
let fn = (arr) => {
  let ans = [];
  for (const c of arr) {
    ans.push(c);
  }

  return ans.join("");
};

let fn = (arr) => {
  let ans = "";
  for (const c of arr) {
    ans += c;
  }

  return ans;
};
```

## Linked list: fast and slow pointer

```javascript
let fn = (head) => {
  let slow = head;
  let fast = head;
  let ans = 0;

  while (fast && fast.next) {
    // do logic
    slow = slow.next;
    fast = fast.next.next;
  }

  return ans;
};
```

## Reversing a linked list

```javascript
let fn = (head) => {
  let curr = head;
  let prev = null;
  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  return prev;
};
```

## Find number of subarrays that fit an exact criteria

```javascript
let fn = (arr, k) => {
  let counts = new Map();
  counts.set(0, 1);
  let ans = 0,
    curr = 0;

  for (const num of arr) {
    // do logic to change curr
    ans += counts.get(curr - k) || 0;
    counts.set(curr, (counts.get(curr) || 0) + 1);
  }

  return ans;
};
```

## Monotonic increasing stack

```javascript
let fn = (arr) => {
  let stack = [];
  let ans = 0;

  for (const num of arr) {
    // for monotonic decreasing, just flip the > to <
    while (stack.length && stack[stack.length - 1] > num) {
      // do logic
      stack.pop();
    }

    stack.push(num);
  }

  return ans;
};
```

## Binary tree: DFS (recursive)

```javascript
let dfs = (root) => {
  if (!root) {
    return;
  }

  let ans = 0;

  // do logic
  dfs(root.left);
  dfs(root.right);
  return ans;
};
```

## Binary tree: DFS (iterative)

```javascript
let dfs = (root) => {
  let stack = [root];
  let ans = 0;

  while (stack.length) {
    let node = stack.pop();
    // do logic
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }

  return ans;
};
```

## Binary tree: BFS

```javascript
let fn = (root) => {
  let queue = [root];
  let ans = 0;

  while (queue.length) {
    let currentLength = queue.length;
    // do logic for current level

    let nextQueue = [];

    for (let i = 0; i < currentLength; i++) {
      let node = queue[i];
      // do logic
      if (node.left) {
        nextQueue.push(node.left);
      }
      if (node.right) {
        nextQueue.push(node.right);
      }
    }

    queue = nextQueue;
  }

  return ans;
};
```

## Graph: DFS (recursive)

For the graph templates, assume the nodes are numbered from 0 to n - 1 and the graph is given as an adjacency list. Depending on the problem, you may need to convert the input into an equivalent adjacency list before using the templates.

```javascript
let fn = (graph) => {
  let dfs = (node) => {
    let ans = 0;
    // do some logic
    for (const neighbor of graph[node]) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        ans += dfs(neighbor);
      }
    }

    return ans;
  };

  let seen = new Set([START_NODE]);
  return dfs(START_NODE);
};
```

## Graph: DFS (iterative)

```javascript
let fn = (graph) => {
  let stack = [START_NODE];
  let seen = new Set([START_NODE]);
  let ans = 0;

  while (stack.length) {
    let node = stack.pop();
    // do some logic
    for (const neighbor of graph[node]) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        stack.push(neighbor);
      }
    }
  }

  return ans;
};
```

## Graph: BFS

```javascript
let fn = (graph) => {
  let queue = [START_NODE];
  let seen = new Set([START_NODE]);
  let ans = 0;

  while (queue.length) {
    let currentLength = queue.length;
    let nextQueue = [];

    for (let i = 0; i < currentLength; i++) {
      let node = queue[i];
      // do some logic
      for (const neighbor of graph[node]) {
        if (!seen.has(neighbor)) {
          seen.add(neighbor);
          nextQueue.push(neighbor);
        }
      }
    }

    queue = nextQueue;
  }

  return ans;
};
```

## Find top k elements with heap

```javascript
// TODO (no built in heap in Javascript)
```

## Binary search

```javascript
let fn = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
      // do something
      return;
    }
    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // left is the insertion point
  return left;
};
```

## Binary search: duplicate elements, left-most insertion point

```javascript
let fn = (arr, target) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
```

## Binary search: duplicate elements, right-most insertion point

```javascript
let fn = (arr, target) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
```

## Binary search: for greedy problems

```javascript
// If looking for a minimum:
let fn = (arr) => {
  let check = (x) => {
    // this function is implemented depending on the problem
    return BOOLEAN;
  };

  let left = MINIMUM_POSSIBLE_ANSWER;
  let right = MAXMIMUM_POSSIBLE_ANSWER;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

// If looking for a maximum:
let fn = (arr) => {
  let check = (x) => {
    // this function is implemented depending on the problem
    return BOOLEAN;
  };

  let left = MINIMUM_POSSIBLE_ANSWER;
  let right = MAXMIMUM_POSSIBLE_ANSWER;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};
```

## Backtracking

```javascript
let backtrack = (curr, OTHER_ARGUMENTS...) => {
    if (BASE_CASE) {
        // modify the answer
        return;
    }

    let ans = 0;
    for (ITERATE_OVER_INPUT) {
        // modify the current state
        ans += backtrack(curr, OTHER_ARGUMENTS...);
        // undo the modification of the current state
    }

    return ans;
}
```

## Dynamic programming: top-down memoization

```javascript
let fn = (arr) => {
  let dp = (STATE) => {
    if (BASE_CASE) {
      return 0;
    }

    if (memo[STATE] != -1) {
      return memo[STATE];
    }

    let ans = RECURRENCE_RELATION(STATE);
    memo[STATE] = ans;
    return ans;
  };

  let memo = ARRAY_SIZED_ACCORDING_TO_STATE;
  return dp(STATE_FOR_WHOLE_INPUT);
};
```

## Build a trie

```javascript
// note: using a class is only necessary if you want to store data at each node.
// otherwise, you can implement a trie using only hash maps.
class TrieNode {
  constructor() {
    // you can store data at nodes if you wish
    this.data = null;
    this.children = new Map();
  }
}

let fn = (words) => {
  let root = new TrieNode();
  for (const word of words) {
    let curr = root;
    for (const c of word) {
      if (!curr.children.has(c)) {
        curr.children.set(c, new TrieNode());
      }
      curr = curr.children.get(c);
    }

    // at this point, you have a full word at curr
    // you can perform more logic here to give curr an attribute if you want
  }

  return root;
};
```

## Dijkstra's algorithm

```javascript
// TODO (no built-in support for heap in JS)
```

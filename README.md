# @zennal/dsa

[![npm version](https://img.shields.io/npm/v/@zennal/dsa.svg)](https://www.npmjs.com/package/@zennal/dsa) [![npm downloads](https://img.shields.io/npm/dm/@zennal/dsa.svg)](https://www.npmjs.com/package/@zennal/dsa) [![GitHub stars](https://img.shields.io/github/stars/girish-kor/zennal-dsa.svg)](https://github.com/girish-kor/zennal-dsa) [![Author](https://img.shields.io/badge/Author-Girish%20Kor-blue)](https://girishkor.dev/)

## Introduction

A comprehensive Javascript/TypeScript npm package providing efficient implementations of data structures and algorithms for competitive programming, education, and software development.

---

## Installation

```bash
npm install @zennal/dsa
```

## Usage

```javascript
import {} from /* your imports */ "@zennal/dsa";
```

---

## Algorithms

<details>
<summary>Backtracking</summary>

- **Combinations** - `combinations(arr, k)`
- **Combination Sum** - `combinationSum(candidates, target)`
- **Combination Sum (Unlimited)** - `combinationSumUnlimited(candidates, target)`
- **Expression Add Operators** - `expressionAddOperators(num, target)`
- **Generate Parentheses** - `generateParentheses(n)`
- **Letter Combinations** - `letterCombinations(digits)`
- **N-Queens** - `nQueens(n)`
- **Palindrome Partitions** - `palindromePartitions(s)`
- **Permutations** - `permutations(arr)`
- **Restore IP Addresses** - `restoreIpAddresses(s)`
- **Subsets** - `subsets(arr)`
- **Subset Sum** - `subsetSum(arr, target)`
- **Sudoku Solver** - `sudokuSolver(board)`
- **Unique Permutations** - `uniquePermutations(arr)`
- **Word Search** - `wordSearch(board, word)`

</details>

<details>
<summary>Dynamic Programming</summary>

- **Coin Change** - `coinChange(coins, amount)`
- **Fibonacci** - `fibonacci(n)`
- **Fibonacci (Memoization)** - `fibonacciMemo(n)`
- **Get Coin Change Solution** - `getCoinChangeSolution(coins, amount)`
- **Get Houses to Rob** - `getHousesToRob(nums)`
- **Get Knapsack 0/1 Items** - `getKnapsack01Items(weights, values, capacity)`
- **Get Longest Increasing Subsequence** - `getLongestIncreasingSubsequence(arr)`
- **Get Matrix Chain Multiplication Order** - `getMatrixChainMultOrder(p)`
- **Get Max Subarray** - `getMaxSubarray(arr)`
- **Get Min Cost Path** - `getMinCostPath(cost)`
- **Get Rod Cutting Pieces** - `getRodCuttingPieces(prices)`
- **House Robber** - `houseRobber(nums)`
- **Knapsack 0/1** - `knapsack01(weights, values, capacity)`
- **Longest Increasing Subsequence** - `longestIncreasingSubsequence(arr)`
- **Matrix Chain Multiplication** - `matrixChainMultiplication(p)`
- **Max Subarray Sum** - `maxSubarraySum(arr)`
- **Min Cost Path** - `minCostPath(cost)`
- **Minimum Steps to One** - `minimumStepsToOne(n)`
- **Perfect Squares** - `perfectSquares(n)`
- **Rod Cutting** - `rodCutting(prices)`
- **Unique Paths** - `uniquePaths(m, n)`

</details>

<details>
<summary>Graph Algorithms</summary>

- **Bellman Ford** - `bellmanFord(n, edges, start)`
- **Bipartite Matching** - `bipartiteMatching(n, edges)`
- **Find Articulation Points** - `findArticulationPoints(n, edges)`
- **Find Bridges** - `findBridges(n, edges)`
- **Floyd Warshall** - `floydWarshall(graph)`
- **Hamiltonian Path** - `hamiltonianPath(n, edges)`
- **Has Cycle (Directed Graph)** - `hasCycleDirGraph(n, edges)`
- **Has Cycle (Undirected Graph)** - `hasCycleUndirGraph(n, edges)`
- **Is Eulerian** - `isEulerian(n, edges)`
- **Kruskal's Algorithm** - `kruskal(n, edges)`
- **Maximum Flow** - `maximumFlow(n, source, sink, edges)`
- **Prim's Algorithm** - `prim(n, edges)`
- **Strongly Connected Components** - `stronglyConnectedComponents(n, edges)`
- **Topological Sort** - `topologicalSort(n, edges)`
- **Weakly Connected Components** - `weaklyConnectedComponents(n, edges)`

</details>

<details>
<summary>Greedy Algorithms</summary>

- **Activity Selection** - `activitySelection(activities)`
- **Coin Change (Greedy)** - `coinChangeGreedy(coins, amount)`
- **Dijkstra's Algorithm** - `dijkstra(n, edges, start)`
- **Egyptian Fraction** - `egyptianFraction(numerator, denominator)`
- **Fractional Knapsack** - `fractionalKnapsack(weights, values, capacity)`
- **Graph Coloring** - `graphColoring(n, edges, colors)`
- **Huffman Coding** - `huffmanCoding(frequencies)`
- **Huffman Decode** - `huffmanDecode(encoded, huffmanTree)`
- **Interval Scheduling** - `intervalScheduling(intervals)`
- **Kruskal with Weights** - `kruskalWithWeights(n, edges)`
- **Minimum Platforms** - `minimumPlatforms(arrivals, departures)`
- **Prim with Weights** - `primWithWeights(n, edges)`
- **Task Scheduling** - `taskScheduling(tasks)`
- **Weighted Job Scheduling** - `weightedJobScheduling(jobs)`

</details>

<details>
<summary>Mathematical Algorithms</summary>

- **All Divisors** - `allDivisors(n)`
- **Bell Numbers** - `bell(n)`
- **Catalan Numbers** - `catalan(n)`
- **Combination** - `combination(n, r)`
- **Count Divisors** - `countDivisors(n)`
- **Digital Root** - `digitalRoot(n)`
- **Digit Sum** - `digitSum(n)`
- **Extended GCD** - `extendedGcd(a, b)`
- **Factorial** - `factorial(n)`
- **Fibonacci Matrix** - `fibonacciMatrix(n)`
- **GCD** - `gcd(a, b)`
- **GCD Multiple** - `gcdMultiple(nums)`
- **Integer Square Root** - `intSqrt(n)`
- **Is Abundant Number** - `isAbundantNumber(n)`
- **Is Armstrong Number** - `isArmstrongNumber(n)`
- **Is Deficient Number** - `isDeficientNumber(n)`
- **Is Miller-Rabin Prime** - `isMillerRabinPrime(n, k)`
- **Is Neon Number** - `isNeonNumber(n)`
- **Is Perfect Number** - `isPerfectNumber(n)`
- **Is Perfect Square** - `isPerfectSquare(n)`
- **Is Prime** - `isPrime(n)`
- **LCM** - `lcm(a, b)`
- **LCM Multiple** - `lcmMultiple(nums)`
- **Modular Inverse** - `modInverse(a, m)`
- **Modular Exponentiation** - `modPow(base, exp, mod)`
- **Pascal's Triangle** - `pascalTriangle(n)`
- **Permutation** - `permutation(n, r)`
- **Power** - `power(base, exp)`
- **Prime Factorization** - `primeFactorization(n)`
- **Prime Factorization (Map)** - `primeFactorizationMap(n)`
- **Segmented Sieve** - `segmentedSieve(left, right)`
- **Sieve of Eratosthenes** - `sieveOfEratosthenes(n)`
- **Stirling Numbers** - `stirling(n, k)`
- **Sum of Divisors** - `sumOfDivisors(n)`

</details>

<details>
<summary>Searching Algorithms</summary>

- **Binary Search** - `binarySearch(array, target, compareFn)`
- **Binary Search (Recursive)** - `binarySearchRecursive(array, target, compareFn)`
- **Exponential Search** - `exponentialSearch(array, target, compareFn)`
- **Fibonacci Search** - `fibonacciSearch(array, target, compareFn)`
- **Find First** - `findFirst(array, target, compareFn)`
- **Find Insert Position** - `findInsertPosition(array, target, compareFn)`
- **Find Last** - `findLast(array, target, compareFn)`
- **Interpolation Search** - `interpolationSearch(array, target)`
- **Jump Search** - `jumpSearch(array, target, compareFn)`
- **Linear Search** - `linearSearch(array, target, compareFn)`
- **Linear Search All** - `linearSearchAll(array, target, compareFn)`
- **Sentinel Linear Search** - `sentinelLinearSearch(array, target, compareFn)`
- **Ternary Search** - `ternarySearch(array, target, compareFn)`

</details>

<details>
<summary>Sorting Algorithms</summary>

- **Bubble Sort** - `bubbleSort(array, compareFn)`
- **Heap Sort** - `heapSort(array, compareFn)`
- **Insertion Sort** - `insertionSort(array, compareFn)`
- **Merge Sort** - `mergeSort(array, compareFn)`
- **Quick Sort** - `quickSort(array, compareFn)`
- **Selection Sort** - `selectionSort(array, compareFn)`

</details>

<details>
<summary>String Algorithms</summary>

- **Boyer-Moore** - `boyerMoore(text, pattern)`
- **Count Occurrences** - `countOccurrences(text, pattern)`
- **Edit Distance** - `editDistance(s1, s2)`
- **Get All Unique Substrings** - `getAllUniqueSubstrings(s)`
- **Get Edit Operations** - `getEditOperations(s1, s2)`
- **Get Longest Common Subsequence** - `getLongestCommonSubsequence(s1, s2)`
- **Has Unique Characters** - `hasUniqueCharacters(s)`
- **Is Palindrome** - `isPalindrome(s)`
- **Is Rotation** - `isRotation(s1, s2)`
- **KMP Search** - `kmpSearch(text, pattern)`
- **Longest Common Subsequence** - `longestCommonSubsequence(s1, s2)`
- **Longest Palindrome** - `longestPalindrome(s)`
- **Longest Palindrome (Expand)** - `longestPalindromeExpand(s)`
- **Rabin-Karp** - `rabinKarp(text, pattern)`
- **Reverse Words** - `reverseWords(s)`

</details>

---

## Data Structures

<details>
<summary>Buffers</summary>

- **Array Deque** - `new ArrayDeque()` - FIFO/LIFO double-ended queue with array-backed storage
- **Circular Buffer** - `new CircularBuffer(capacity)` - Fixed-size ring buffer for efficient memory usage
- **Gap Buffer** - `new GapBuffer()` - Two-sided buffer optimized for text editing operations

</details>

<details>
<summary>Graphs</summary>

- **Graph** - `new Graph(directed)` - Adjacency list-based graph supporting directed/undirected edges

</details>

<details>
<summary>Hash Maps</summary>

- **Bloom Filter** - `new BloomFilter(size, hashFunctions)` - Probabilistic data structure for set membership testing
- **HashMap** - `new HashMap(keyHashFn, initialCapacity)` - Hash table with separate chaining collision resolution
- **LRU Cache** - `new LRUCache(capacity)` - Least Recently Used cache with O(1) operations

</details>

<details>
<summary>Hashing Variants</summary>

- **Cuckoo HashMap** - `new CuckooHashMap()` - Hash map with cuckoo hashing for collision resolution
- **Robin Hood HashMap** - `new RobinHoodHashMap()` - Hash map with Robin Hood hashing for better distribution

</details>

<details>
<summary>Heaps</summary>

- **Heap** - `new Heap(compareFn, type)` - Min/max heap implementation

</details>

<details>
<summary>Linear Structures</summary>

- **ArrayList** - `new ArrayList()` - Resizable array-based list with dynamic capacity
- **Deque** - `new Deque()` - Double-ended queue (FIFO/LIFO operations from both ends)
- **Linked List** - `new LinkedList()` - Singly linked list with sequential access
- **Priority Queue** - `new PriorityQueue(compareFn)` - Queue with priority-based ordering
- **Queue** - `new Queue()` - FIFO queue data structure
- **Stack** - `new Stack()` - LIFO stack data structure

</details>

<details>
<summary>Sets</summary>

- **Disjoint Set (Union-Find)** - `new DisjointSet(n)` - Data structure for managing disjoint sets with union and find operations

</details>

<details>
<summary>Sketches & Probabilistic</summary>

- **Count-Min Sketch** - `new CountMinSketch(width, depth)` - Probabilistic data structure for frequency estimation
- **Quotient Filter** - `new QuotientFilter(size, quotientBits)` - Space-efficient hash filter
- **XOR Filter** - `new XorFilter()` - Fast and compact filter for set membership

</details>

<details>
<summary>Specialized Trees</summary>

- **Binary Lifting** - `new BinaryLifting(n, edges)` - LCA and path query optimization
- **Cartesian Tree** - `new CartesianTree(arr)` - Tree with range minimum query capabilities
- **Square Root Tree** - `new SqrtTree(arr)` - Structure for fast range queries

</details>

<details>
<summary>Trees</summary>

- **AVL Tree** - `new AVLTree(compareFn)` - Self-balancing binary search tree with height constraints
- **Binary Search Tree** - `new BinarySearchTree(compareFn)` - Ordered tree for efficient searching
- **Fenwick Tree (Binary Indexed Tree)** - `new FenwickTree(n)` - Data structure for prefix sum and range update queries
- **Red-Black Tree** - `new RedBlackTree(compareFn)` - Self-balancing binary search tree with color properties
- **Segment Tree** - `new SegmentTree(arr, operation)` - Tree for range queries and updates
- **Trie** - `new Trie()` - Prefix tree for efficient string searching and storage

</details>

---

## Contributing

We welcome contributions! Whether it's fixing bugs, adding new algorithms, improving documentation, or suggesting features, your input is valuable. Please check out our [contributing guidelines](https://github.com/girish-kor/zennal-dsa/blob/main/CONTRIBUTING.md) and feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

_Built with ❤️ for the developer community. Happy coding!_
#   z e n n a l - d s a  
 
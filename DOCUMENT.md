# @zennal/dsa Documentation

## Table of Contents

### [Backtracking Algorithms](#backtracking-algorithms)

- [Combinations - Generate all combinations of k elements from array.](#combinations-generate-all-combinations-of-k-elements-from-array)
- [Combination Sum - Find combinations that sum to target (no duplicates).](#combination-sum-find-combinations-that-sum-to-target-no-duplicates)
- [Combination Sum (Unlimited) - Each number can be used unlimited times.](#combination-sum-unlimited-each-number-can-be-used-unlimited-times)
- [Expression Add Operators - Add operators to make expression equal target.](#expression-add-operators-add-operators-to-make-expression-equal-target)
- [Generate Parentheses - Generate all valid parentheses combinations.](#generate-parentheses-generate-all-valid-parentheses-combinations)
- [Letter Combinations - Letter combinations of a phone number.](#letter-combinations-letter-combinations-of-a-phone-number)
- [N-Queens - Solve N-Queens problem.](#n-queens-solve-n-queens-problem)
- [Palindrome Partitions - Partition string into palindromic substrings.](#palindrome-partitions-partition-string-into-palindromic-substrings)
- [Permutations - Generate all permutations of array.](#permutations-generate-all-permutations-of-array)
- [Restore IP Addresses - Restore IP addresses from string.](#restore-ip-addresses-restore-ip-addresses-from-string)
- [Subsets - Generate all subsets of array.](#subsets-generate-all-subsets-of-array)
- [Subset Sum - Find subsets that sum to target.](#subset-sum-find-subsets-that-sum-to-target)
- [Sudoku Solver - Solve Sudoku puzzle.](#sudoku-solver-solve-sudoku-puzzle)
- [Unique Permutations - Generate unique permutations of string with duplicates.](#unique-permutations-generate-unique-permutations-of-string-with-duplicates)
- [Word Search - Search for word in 2D board.](#word-search-search-for-word-in-2d-board)

### [Dp Algorithms](#dp-algorithms)

- [Coin Change - Minimum coins to make amount.](#coin-change-minimum-coins-to-make-amount)
- [Fibonacci - Nth Fibonacci number.](#fibonacci-nth-fibonacci-number)
- [Fibonacci (Memoization) - Nth Fibonacci with memoization.](#fibonacci-memoization-nth-fibonacci-with-memoization)
- [Get Coin Change Solution - Coins used for minimum change.](#get-coin-change-solution-coins-used-for-minimum-change)
- [Get Houses to Rob - Houses to rob for max profit.](#get-houses-to-rob-houses-to-rob-for-max-profit)
- [Get Knapsack 0/1 Items - Items selected in 0/1 knapsack.](#get-knapsack-01-items-items-selected-in-01-knapsack)
- [Get Longest Increasing Subsequence - LIS array.](#get-longest-increasing-subsequence-lis-array)
- [Get Matrix Chain Multiplication Order - Optimal order.](#get-matrix-chain-multiplication-order-optimal-order)
- [Get Max Subarray - Maximum subarray.](#get-max-subarray-maximum-subarray)
- [Get Min Cost Path - Path with minimum cost.](#get-min-cost-path-path-with-minimum-cost)
- [Get Rod Cutting Pieces - Pieces for max profit.](#get-rod-cutting-pieces-pieces-for-max-profit)
- [House Robber - Maximum amount from robbing houses.](#house-robber-maximum-amount-from-robbing-houses)
- [Knapsack 0/1 - Maximum value in 0/1 knapsack.](#knapsack-01-maximum-value-in-01-knapsack)
- [Longest Increasing Subsequence - Length of LIS.](#longest-increasing-subsequence-length-of-lis)
- [Matrix Chain Multiplication - Minimum multiplications.](#matrix-chain-multiplication-minimum-multiplications)
- [Max Subarray Sum - Maximum subarray sum.](#max-subarray-sum-maximum-subarray-sum)
- [Min Cost Path - Minimum cost to reach end.](#min-cost-path-minimum-cost-to-reach-end)
- [Minimum Steps to One - Steps to reduce n to 1.](#minimum-steps-to-one-steps-to-reduce-n-to-1)
- [Perfect Squares - Least number of perfect squares summing to n.](#perfect-squares-least-number-of-perfect-squares-summing-to-n)
- [Rod Cutting - Maximum profit from cutting rod.](#rod-cutting-maximum-profit-from-cutting-rod)
- [Unique Paths - Number of unique paths in grid.](#unique-paths-number-of-unique-paths-in-grid)

### [Graphs Algorithms](#graphs-algorithms)

- [Bellman-Ford - Shortest paths from source, detects negative cycles.](#bellman-ford-shortest-paths-from-source-detects-negative-cycles)
- [Bipartite Matching - Maximum matching in bipartite graph.](#bipartite-matching-maximum-matching-in-bipartite-graph)
- [Find Articulation Points - Critical vertices in undirected graph.](#find-articulation-points-critical-vertices-in-undirected-graph)
- [Find Bridges - Critical edges in undirected graph.](#find-bridges-critical-edges-in-undirected-graph)
- [Floyd-Warshall - All-pairs shortest paths.](#floyd-warshall-all-pairs-shortest-paths)
- [Hamiltonian Path - Check if Hamiltonian path exists.](#hamiltonian-path-check-if-hamiltonian-path-exists)
- [Has Cycle (Directed) - Check for cycles in directed graph.](#has-cycle-directed-check-for-cycles-in-directed-graph)
- [Has Cycle (Undirected) - Check for cycles in undirected graph.](#has-cycle-undirected-check-for-cycles-in-undirected-graph)
- [Is Eulerian - Check if graph has Eulerian path/circuit.](#is-eulerian-check-if-graph-has-eulerian-pathcircuit)
- [Kruskal - Minimum Spanning Tree using Kruskal's algorithm.](#kruskal-minimum-spanning-tree-using-kruskals-algorithm)
- [Maximum Flow - Maximum flow in flow network.](#maximum-flow-maximum-flow-in-flow-network)
- [Prim - Minimum Spanning Tree using Prim's algorithm.](#prim-minimum-spanning-tree-using-prims-algorithm)
- [Strongly Connected Components - SCCs in directed graph.](#strongly-connected-components-sccs-in-directed-graph)
- [Topological Sort - Linear ordering of vertices.](#topological-sort-linear-ordering-of-vertices)
- [Weakly Connected Components - WCCs in directed graph.](#weakly-connected-components-wccs-in-directed-graph)

### [Greedy Algorithms](#greedy-algorithms)

- [Activity Selection - Select maximum number of non-overlapping activities.](#activity-selection-select-maximum-number-of-non-overlapping-activities)
- [Coin Change Greedy - Minimum coins using greedy approach.](#coin-change-greedy-minimum-coins-using-greedy-approach)
- [Dijkstra - Shortest paths from source.](#dijkstra-shortest-paths-from-source)
- [Egyptian Fraction - Represent fraction as sum of distinct unit fractions.](#egyptian-fraction-represent-fraction-as-sum-of-distinct-unit-fractions)
- [Fractional Knapsack - Maximize value in knapsack allowing fractions.](#fractional-knapsack-maximize-value-in-knapsack-allowing-fractions)
- [Graph Coloring - Color graph using greedy approach.](#graph-coloring-color-graph-using-greedy-approach)
- [Huffman Coding - Build Huffman codes for data.](#huffman-coding-build-huffman-codes-for-data)
- [Huffman Decode - Decode Huffman encoded string.](#huffman-decode-decode-huffman-encoded-string)
- [Interval Scheduling - Select maximum non-overlapping intervals.](#interval-scheduling-select-maximum-non-overlapping-intervals)
- [Minimum Platforms - Minimum platforms needed for trains.](#minimum-platforms-minimum-platforms-needed-for-trains)
- [Task Scheduling - Schedule tasks to maximize profit.](#task-scheduling-schedule-tasks-to-maximize-profit)
- [Weighted Job Scheduling - Maximum profit from weighted jobs.](#weighted-job-scheduling-maximum-profit-from-weighted-jobs)

### [Math Algorithms](#math-algorithms)

- [GCD - Greatest Common Divisor.](#gcd-greatest-common-divisor)
- [Is Prime - Check if number is prime.](#is-prime-check-if-number-is-prime)
- [Factorial - Compute factorial of n.](#factorial-compute-factorial-of-n)
- [Prime Factorization - Get prime factors.](#prime-factorization-get-prime-factors)
- [Sieve of Eratosthenes - Generate primes up to n.](#sieve-of-eratosthenes-generate-primes-up-to-n)
- [Modular Exponentiation - Compute base^exp mod mod.](#modular-exponentiation-compute-baseexp-mod-mod)
- [Pascal Triangle - Binomial coefficient C(n, k).](#pascal-triangle-binomial-coefficient-cn-k)
- [Combination - Binomial coefficient.](#combination-binomial-coefficient)
- [LCM - Least Common Multiple.](#lcm-least-common-multiple)
- [Modular Inverse - Find inverse modulo m.](#modular-inverse-find-inverse-modulo-m)
- [Extended GCD - GCD with coefficients.](#extended-gcd-gcd-with-coefficients)
- [Is Perfect Number - Check if sum of divisors equals number.](#is-perfect-number-check-if-sum-of-divisors-equals-number)
- [Is Armstrong Number - Check Armstrong number.](#is-armstrong-number-check-armstrong-number)
- [Digital Root - Sum of digits repeatedly.](#digital-root-sum-of-digits-repeatedly)
- [Sum of Divisors - Sum of all divisors.](#sum-of-divisors-sum-of-all-divisors)

### [Searching Algorithms](#searching-algorithms)

- [Binary Search - Search in sorted array.](#binary-search-search-in-sorted-array)
- [Linear Search - Search in unsorted array.](#linear-search-search-in-unsorted-array)
- [Jump Search - Search in sorted array with jump steps.](#jump-search-search-in-sorted-array-with-jump-steps)
- [Interpolation Search - Search in uniformly distributed sorted array.](#interpolation-search-search-in-uniformly-distributed-sorted-array)
- [Exponential Search - Search in sorted array with exponential bounds.](#exponential-search-search-in-sorted-array-with-exponential-bounds)
- [Ternary Search - Search in sorted array by dividing into thirds.](#ternary-search-search-in-sorted-array-by-dividing-into-thirds)
- [Fibonacci Search - Search using Fibonacci numbers.](#fibonacci-search-search-using-fibonacci-numbers)

### [Sorting Algorithms](#sorting-algorithms)

- [Bubble Sort - Sort by repeatedly swapping adjacent elements.](#bubble-sort-sort-by-repeatedly-swapping-adjacent-elements)
- [Heap Sort - Sort using heap data structure.](#heap-sort-sort-using-heap-data-structure)
- [Insertion Sort - Sort by inserting elements into sorted portion.](#insertion-sort-sort-by-inserting-elements-into-sorted-portion)
- [Merge Sort - Sort by dividing and merging.](#merge-sort-sort-by-dividing-and-merging)
- [Quick Sort - Sort using partitioning.](#quick-sort-sort-using-partitioning)
- [Selection Sort - Sort by selecting minimum element.](#selection-sort-sort-by-selecting-minimum-element)

### [Strings Algorithms](#strings-algorithms)

- [Is Palindrome - Check if string is palindrome.](#is-palindrome-check-if-string-is-palindrome)
- [Longest Palindrome - Find longest palindromic substring.](#longest-palindrome-find-longest-palindromic-substring)
- [KMP Search - Search pattern in text using KMP.](#kmp-search-search-pattern-in-text-using-kmp)
- [Edit Distance - Minimum operations to transform one string to another.](#edit-distance-minimum-operations-to-transform-one-string-to-another)
- [Reverse Words - Reverse words in a string.](#reverse-words-reverse-words-in-a-string)
- [Has Unique Characters - Check if all characters are unique.](#has-unique-characters-check-if-all-characters-are-unique)
- [Count Occurrences - Count occurrences of substring.](#count-occurrences-count-occurrences-of-substring)
- [Is Rotation - Check if one string is rotation of another.](#is-rotation-check-if-one-string-is-rotation-of-another)

### [Buffer Data Structures](#buffer-data-structures)

- [ArrayDeque - A double-ended queue with array-backed storage, supporting FIFO/LIFO operations.](#arraydeque-a-double-ended-queue-with-array-backed-storage-supporting-fifolifo-operations)
- [GapBuffer - A two-sided buffer optimized for text editing operations.](#gapbuffer-a-two-sided-buffer-optimized-for-text-editing-operations)

### [Graphs Data Structures](#graphs-data-structures)

- [Undirected Graph - Adjacency list-based graph with bidirectional edges.](#undirected-graph-adjacency-list-based-graph-with-bidirectional-edges)
- [Directed Graph - Adjacency list-based graph with one-way edges.](#directed-graph-adjacency-list-based-graph-with-one-way-edges)

### [Hash Maps Data Structures](#hash-maps-data-structures)

- [BloomFilter - Probabilistic data structure for set membership testing.](#bloomfilter-probabilistic-data-structure-for-set-membership-testing)
- [HashMap - Hash table with separate chaining collision resolution.](#hashmap-hash-table-with-separate-chaining-collision-resolution)
- [LRUCache - Least Recently Used cache with O(1) operations.](#lrucache-least-recently-used-cache-with-o1-operations)

### [Hashing Varients Data Structures](#hashing-varients-data-structures)

- [CuckooHashMap - Hash map with cuckoo hashing for collision resolution.](#cuckoohashmap-hash-map-with-cuckoo-hashing-for-collision-resolution)
- [RobinHoodHashMap - Hash map with Robin Hood hashing for better distribution.](#robinhoodhashmap-hash-map-with-robin-hood-hashing-for-better-distribution)

### [Heap Data Structures](#heap-data-structures)

- [Min Heap - Smallest element at root.](#min-heap-smallest-element-at-root)
- [Max Heap - Largest element at root.](#max-heap-largest-element-at-root)

### [Linear Data Structures](#linear-data-structures)

- [ArrayList - Resizable array-based list with dynamic capacity.](#arraylist-resizable-array-based-list-with-dynamic-capacity)
- [Deque - Double-ended queue (FIFO/LIFO operations from both ends).](#deque-double-ended-queue-fifolifo-operations-from-both-ends)
- [LinkedList - Singly linked list with sequential access.](#linkedlist-singly-linked-list-with-sequential-access)
- [PriorityQueue - Queue with priority-based ordering.](#priorityqueue-queue-with-priority-based-ordering)
- [Queue - FIFO queue data structure.](#queue-fifo-queue-data-structure)
- [Stack - LIFO stack data structure.](#stack-lifo-stack-data-structure)

### [Sets Data Structures](#sets-data-structures)

- [DisjointSet (Union-Find) - Data structure for managing disjoint sets with union and find operations.](#disjointset-union-find-data-structure-for-managing-disjoint-sets-with-union-and-find-operations)

### [Sketches Data Structures](#sketches-data-structures)

- [CountMinSketch - Probabilistic data structure for frequency estimation.](#countminsketch-probabilistic-data-structure-for-frequency-estimation)
- [QuotientFilter - Space-efficient hash filter.](#quotientfilter-space-efficient-hash-filter)
- [XorFilter - Fast and compact filter for set membership.](#xorfilter-fast-and-compact-filter-for-set-membership)

### [Specialized Trees Data Structures](#specialized-trees-data-structures)

- [BinaryLifting - LCA and path query optimization.](#binarylifting-lca-and-path-query-optimization)
- [CartesianTree - Tree with range minimum query capabilities.](#cartesiantree-tree-with-range-minimum-query-capabilities)
- [SqrtTree - Structure for fast range queries.](#sqrttree-structure-for-fast-range-queries)

### [Trees Data Structures](#trees-data-structures)

- [AVLTree - Self-balancing binary search tree with height constraints.](#avltree-self-balancing-binary-search-tree-with-height-constraints)
- [BinarySearchTree - Ordered tree for efficient searching.](#binarysearchtree-ordered-tree-for-efficient-searching)
- [FenwickTree - Data structure for prefix sum and range update queries.](#fenwicktree-data-structure-for-prefix-sum-and-range-update-queries)
- [RedBlackTree - Self-balancing binary search tree with color properties.](#redblacktree-self-balancing-binary-search-tree-with-color-properties)
- [SegmentTree - Tree for range queries and updates.](#segmenttree-tree-for-range-queries-and-updates)
- [Trie - Prefix tree for efficient string searching and storage.](#trie-prefix-tree-for-efficient-string-searching-and-storage)

## Examples

## Backtracking Algorithms

### Combinations - Generate all combinations of k elements from array.

**Usage Example:**

```bash
import { combinations } from "@zennal/dsa";
console.log(
  "Combinations of [1,2,3,4] choose 2:",
  combinations([1, 2, 3, 4], 2)
);
```

**Expected Outcome:**

```
[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
```

### Combination Sum - Find combinations that sum to target (no duplicates).

**Usage Example:**

```bash
import { combinationSum } from "@zennal/dsa";
console.log(
  "Combination sum [2,3,6,7] target 7:",
  combinationSum([2, 3, 6, 7], 7)
);
```

**Expected Outcome:**

```
[[2,2,3],[7]]
```

### Combination Sum (Unlimited) - Each number can be used unlimited times.

**Usage Example:**

```bash
import { combinationSumUnlimited } from "@zennal/dsa";
console.log(
  "Combination sum unlimited [2,3,5] target 8:",
  combinationSumUnlimited([2, 3, 5], 8)
);
```

**Expected Outcome:**

```
[[2,2,2,2],[2,3,3],[2,2,3,1],[2,5,1],[3,5],[8]]
```

### Expression Add Operators - Add operators to make expression equal target.

**Usage Example:**

```bash
import { expressionAddOperators } from "@zennal/dsa";
console.log(
  "Expression add operators '123' target 6:",
  expressionAddOperators("123", 6)
);
```

**Expected Outcome:**

```
["1+2+3","1*2*3"]
```

### Generate Parentheses - Generate all valid parentheses combinations.

**Usage Example:**

```bash
import { generateParentheses } from "@zennal/dsa";
console.log("Generate parentheses n=3:", generateParentheses(3));
```

**Expected Outcome:**

```
["((()))","(()())","(())()","()(())","()()()"]
```

### Letter Combinations - Letter combinations of a phone number.

**Usage Example:**

```bash
import { letterCombinations } from "@zennal/dsa";
console.log("Letter combinations '23':", letterCombinations("23"));
```

**Expected Outcome:**

```
["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

### N-Queens - Solve N-Queens problem.

**Usage Example:**

```bash
import { nQueens } from "@zennal/dsa";
console.log("N-Queens n=4 (first solution):", nQueens(4)[0]);
```

**Expected Outcome:**

```
[[".Q..","...Q","Q...","..Q."]]
```

### Palindrome Partitions - Partition string into palindromic substrings.

**Usage Example:**

```bash
import { palindromePartitions } from "@zennal/dsa";
console.log("Palindrome partitions 'aab':", palindromePartitions("aab"));
```

**Expected Outcome:**

```
[["a","a","b"],["aa","b"]]
```

### Permutations - Generate all permutations of array.

**Usage Example:**

```bash
import { permutations } from "@zennal/dsa";
console.log("Permutations [1,2,3]:", permutations([1, 2, 3]));
```

**Expected Outcome:**

```
[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

### Restore IP Addresses - Restore IP addresses from string.

**Usage Example:**

```bash
import { restoreIpAddresses } from "@zennal/dsa";
console.log(
  "Restore IP addresses '25525511135':",
  restoreIpAddresses("25525511135")
);
```

**Expected Outcome:**

```
["255.255.11.135","255.255.111.35"]
```

### Subsets - Generate all subsets of array.

**Usage Example:**

```bash
import { subsets } from "@zennal/dsa";
console.log("Subsets [1,2,3]:", subsets([1, 2, 3]));
```

**Expected Outcome:**

```
[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

### Subset Sum - Find subsets that sum to target.

**Usage Example:**

```bash
import { subsetSum } from "@zennal/dsa";
console.log(
  "Subset sum [3,34,4,12,5,2] target 9:",
  subsetSum([3, 34, 4, 12, 5, 2], 9)
);
```

**Expected Outcome:**

```
[[3,4,2],[3,2,4],[4,3,2],[4,2,3],[2,3,4],[2,4,3]]
```

### Sudoku Solver - Solve Sudoku puzzle.

**Usage Example:**

```bash
import { sudokuSolver } from "@zennal/dsa";
const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
sudokuSolver(board);
console.log("Sudoku solved (first row):", board[0]);
```

**Expected Outcome:**

```
["5","3","4","6","7","8","9","1","2"]
```

### Unique Permutations - Generate unique permutations of string with duplicates.

**Usage Example:**

```bash
import { uniquePermutations } from "@zennal/dsa";
console.log("Unique permutations '112':", uniquePermutations("112"));
```

**Expected Outcome:**

```
["112","121","211"]
```

### Word Search - Search for word in 2D board.

**Usage Example:**

```bash
import { wordSearch } from "@zennal/dsa";
const wordBoard = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
console.log("Word search 'ABCCED':", wordSearch(wordBoard, "ABCCED"));
console.log("Word search 'SEE':", wordSearch(wordBoard, "SEE"));
console.log("Word search 'ABCB':", wordSearch(wordBoard, "ABCB"));
```

**Expected Outcome:**

```
true
true
false
```

## Dp Algorithms

### Coin Change - Minimum coins to make amount.

**Usage Example:**

```bash
import { coinChange } from "@zennal/dsa";
console.log("Coin change [1,2,5] amount 11:", coinChange([1, 2, 5], 11));
```

**Expected Outcome:**

```
3
```

### Fibonacci - Nth Fibonacci number.

**Usage Example:**

```bash
import { fibonacci } from "@zennal/dsa";
console.log("Fibonacci 10:", fibonacci(10));
```

**Expected Outcome:**

```
55
```

### Fibonacci (Memoization) - Nth Fibonacci with memoization.

**Usage Example:**

```bash
import { fibonacciMemo } from "@zennal/dsa";
console.log("Fibonacci memo 10:", fibonacciMemo(10));
```

**Expected Outcome:**

```
55
```

### Get Coin Change Solution - Coins used for minimum change.

**Usage Example:**

```bash
import { getCoinChangeSolution } from "@zennal/dsa";
console.log(
  "Get coin change solution [1,2,5] 11:",
  getCoinChangeSolution([1, 2, 5], 11)
);
```

**Expected Outcome:**

```
[5,5,1]
```

### Get Houses to Rob - Houses to rob for max profit.

**Usage Example:**

```bash
import { getHousesToRob } from "@zennal/dsa";
console.log("Get houses to rob [1,2,3,1]:", getHousesToRob([1, 2, 3, 1]));
```

**Expected Outcome:**

```
[2,4]
```

### Get Knapsack 0/1 Items - Items selected in 0/1 knapsack.

**Usage Example:**

```bash
import { getKnapsack01Items } from "@zennal/dsa";
console.log(
  "Get knapsack items weights [1,2,3] values [6,10,12] capacity 5:",
  getKnapsack01Items([1, 2, 3], [6, 10, 12], 5)
);
```

**Expected Outcome:**

```
[2,3]
```

### Get Longest Increasing Subsequence - LIS array.

**Usage Example:**

```bash
import { getLongestIncreasingSubsequence } from "@zennal/dsa";
console.log(
  "Get LIS [10,9,2,5,3,7,101,18]:",
  getLongestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18])
);
```

**Expected Outcome:**

```
[2,3,7,101]
```

### Get Matrix Chain Multiplication Order - Optimal order.

**Usage Example:**

```bash
import { getMatrixChainMultOrder } from "@zennal/dsa";
console.log(
  "Get matrix chain order [10,20,30,40,30]:",
  getMatrixChainMultOrder([10, 20, 30, 40, 30])
);
```

**Expected Outcome:**

```
[[0,3],[4,4],[0,0],[1,3],[2,3],[0,2],[3,4],[1,1],[2,2],[1,4],[0,4]]
```

### Get Max Subarray - Maximum subarray.

**Usage Example:**

```bash
import { getMaxSubarray } from "@zennal/dsa";
console.log(
  "Get max subarray [-2,1,-3,4,-1,2,1,-5,4]:",
  getMaxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);
```

**Expected Outcome:**

```
[4,-1,2,1]
```

### Get Min Cost Path - Path with minimum cost.

**Usage Example:**

```bash
import { getMinCostPath } from "@zennal/dsa";
const costMatrix = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.log("Get min cost path:", getMinCostPath(costMatrix));
```

**Expected Outcome:**

```
[[0,0],[0,1],[0,2],[1,2],[2,2]]
```

### Get Rod Cutting Pieces - Pieces for max profit.

**Usage Example:**

```bash
import { getRodCuttingPieces } from "@zennal/dsa";
console.log(
  "Get rod cutting pieces [1,5,8,9,10,17,17,20] length 4:",
  getRodCuttingPieces([1, 5, 8, 9, 10, 17, 17, 20], 4)
);
```

**Expected Outcome:**

```
[2,2]
```

### House Robber - Maximum amount from robbing houses.

**Usage Example:**

```bash
import { houseRobber } from "@zennal/dsa";
console.log("House robber [1,2,3,1]:", houseRobber([1, 2, 3, 1]));
```

**Expected Outcome:**

```
4
```

### Knapsack 0/1 - Maximum value in 0/1 knapsack.

**Usage Example:**

```bash
import { knapsack01 } from "@zennal/dsa";
console.log(
  "Knapsack weights [1,2,3] values [6,10,12] capacity 5:",
  knapsack01([1, 2, 3], [6, 10, 12], 5)
);
```

**Expected Outcome:**

```
22
```

### Longest Increasing Subsequence - Length of LIS.

**Usage Example:**

```bash
import { longestIncreasingSubsequence } from "@zennal/dsa";
console.log(
  "LIS length [10,9,2,5,3,7,101,18]:",
  longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18])
);
```

**Expected Outcome:**

```
4
```

### Matrix Chain Multiplication - Minimum multiplications.

**Usage Example:**

```bash
import { matrixChainMultiplication } from "@zennal/dsa";
console.log(
  "Matrix chain mult [10,20,30]:",
  matrixChainMultiplication([10, 20, 30])
);
```

**Expected Outcome:**

```
6000
```

### Max Subarray Sum - Maximum subarray sum.

**Usage Example:**

```bash
import { maxSubarraySum } from "@zennal/dsa";
console.log(
  "Max subarray sum [-2,1,-3,4,-1,2,1,-5,4]:",
  maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);
```

**Expected Outcome:**

```
6
```

### Min Cost Path - Minimum cost to reach end.

**Usage Example:**

```bash
import { minCostPath } from "@zennal/dsa";
console.log("Min cost path:", minCostPath(costMatrix));
```

**Expected Outcome:**

```
7
```

### Minimum Steps to One - Steps to reduce n to 1.

**Usage Example:**

```bash
import { minimumStepsToOne } from "@zennal/dsa";
console.log("Min steps to one 10:", minimumStepsToOne(10));
```

**Expected Outcome:**

```
3
```

### Perfect Squares - Least number of perfect squares summing to n.

**Usage Example:**

```bash
import { perfectSquares } from "@zennal/dsa";
console.log("Perfect squares 12:", perfectSquares(12));
```

**Expected Outcome:**

```
3
```

### Rod Cutting - Maximum profit from cutting rod.

**Usage Example:**

```bash
import { rodCutting } from "@zennal/dsa";
console.log(
  "Rod cutting [1,5,8,9,10,17,17,20] length 4:",
  rodCutting([1, 5, 8, 9, 10, 17, 17, 20], 4)
);
```

**Expected Outcome:**

```
10
```

### Unique Paths - Number of unique paths in grid.

**Usage Example:**

```bash
import { uniquePaths } from "@zennal/dsa";
console.log("Unique paths 3x7:", uniquePaths(3, 7));
```

**Expected Outcome:**

```
28
```

## Graphs Algorithms

### Bellman-Ford - Shortest paths from source, detects negative cycles.

**Usage Example:**

```bash
import { bellmanFord } from "@zennal/dsa";
const bfEdges = [
  [0, 1, -1],
  [0, 2, 4],
  [1, 2, 3],
  [1, 3, 2],
  [1, 4, 2],
  [3, 2, 5],
  [3, 1, 1],
  [4, 3, -3],
];
console.log("Bellman-Ford n=5 start=0:", bellmanFord(5, bfEdges, 0));
```

**Expected Outcome:**

```
[0, -1, 2, -2, 1]
```

### Bipartite Matching - Maximum matching in bipartite graph.

**Usage Example:**

```bash
import { bipartiteMatching } from "@zennal/dsa";
const bmEdges = [
  [0, 0],
  [0, 1],
  [1, 0],
  [2, 1],
];
console.log("Bipartite matching n1=3 n2=2:", bipartiteMatching(3, 2, bmEdges));
```

**Expected Outcome:**

```
2
```

### Find Articulation Points - Critical vertices in undirected graph.

**Usage Example:**

```bash
import { findArticulationPoints } from "@zennal/dsa";
const apEdges = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 3],
  [3, 4],
  [2, 5],
  [5, 6],
  [6, 7],
  [5, 8],
  [7, 8],
];
console.log("Articulation points n=9:", findArticulationPoints(9, apEdges));
```

**Expected Outcome:**

```
[2, 5]
```

### Find Bridges - Critical edges in undirected graph.

**Usage Example:**

```bash
import { findBridges } from "@zennal/dsa";
const bridgeEdges = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 3],
  [2, 4],
  [3, 4],
];
console.log("Bridges n=5:", findBridges(5, bridgeEdges));
```

**Expected Outcome:**

```
[[2, 3], [3, 4]]
```

### Floyd-Warshall - All-pairs shortest paths.

**Usage Example:**

```bash
import { floydWarshall } from "@zennal/dsa";
const fwEdges = [
  [0, 1, 3],
  [1, 0, 8],
  [1, 2, 2],
  [2, 0, 5],
  [2, 1, 1],
];
console.log("Floyd-Warshall n=3:", floydWarshall(3, fwEdges));
```

**Expected Outcome:**

```
[[0, 3, 5], [5, 0, 2], [4, 3, 0]]
```

### Hamiltonian Path - Check if Hamiltonian path exists.

**Usage Example:**

```bash
import { hamiltonianPath } from "@zennal/dsa";
const hpEdges = [
  [0, 1],
  [0, 2],
  [1, 2],
  [1, 3],
  [2, 3],
];
console.log("Hamiltonian path n=4:", hamiltonianPath(4, hpEdges));
```

**Expected Outcome:**

```
[0, 1, 2, 3]
```

### Has Cycle (Directed) - Check for cycles in directed graph.

**Usage Example:**

```bash
import { hasCycleDirGraph } from "@zennal/dsa";
const dcEdges = [
  [0, 1],
  [1, 2],
  [2, 0],
];
console.log("Has cycle directed n=3:", hasCycleDirGraph(3, dcEdges));
```

**Expected Outcome:**

```
true
```

### Has Cycle (Undirected) - Check for cycles in undirected graph.

**Usage Example:**

```bash
import { hasCycleUndirGraph } from "@zennal/dsa";
const ucEdges = [
  [0, 1],
  [0, 2],
  [1, 2],
];
console.log("Has cycle undirected n=3:", hasCycleUndirGraph(3, ucEdges));
```

**Expected Outcome:**

```
true
```

### Is Eulerian - Check if graph has Eulerian path/circuit.

**Usage Example:**

```bash
import { isEulerian } from "@zennal/dsa";
const eulerEdges = [
  [0, 1],
  [0, 2],
  [1, 2],
];
console.log("Is Eulerian n=3 undirected:", isEulerian(3, eulerEdges, false));
```

**Expected Outcome:**

```
{hasEulerianPath: true, hasEulerianCircuit: true}
```

### Kruskal - Minimum Spanning Tree using Kruskal's algorithm.

**Usage Example:**

```bash
import { kruskal } from "@zennal/dsa";
const kEdges = [
  [0, 1, 10],
  [0, 2, 6],
  [0, 3, 5],
  [1, 3, 15],
  [2, 3, 4],
];
console.log("Kruskal n=4:", kruskal(4, kEdges));
```

**Expected Outcome:**

```
[19, [[2, 3], [0, 3], [0, 1]]]
```

### Maximum Flow - Maximum flow in flow network.

**Usage Example:**

```bash
import { maximumFlow } from "@zennal/dsa";
const mfEdges = [
  [0, 1, 16],
  [0, 2, 13],
  [1, 2, 10],
  [1, 3, 12],
  [2, 1, 4],
  [2, 4, 14],
  [3, 2, 9],
  [3, 5, 20],
  [4, 3, 7],
  [4, 5, 4],
];
console.log("Maximum flow n=6 source=0 sink=5:", maximumFlow(6, mfEdges, 0, 5));
```

**Expected Outcome:**

```
23
```

### Prim - Minimum Spanning Tree using Prim's algorithm.

**Usage Example:**

```bash
import { prim } from "@zennal/dsa";
const pEdges = [
  [0, 1, 2],
  [0, 3, 6],
  [1, 2, 3],
  [1, 3, 8],
  [1, 4, 5],
  [2, 4, 7],
  [3, 4, 9],
];
console.log("Prim n=5:", prim(5, pEdges));
```

**Expected Outcome:**

```
[16, [[0, 1], [1, 2], [1, 4], [0, 3]]]
```

### Strongly Connected Components - SCCs in directed graph.

**Usage Example:**

```bash
import { stronglyConnectedComponents } from "@zennal/dsa";
const sccEdges = [
  [0, 1],
  [1, 2],
  [2, 0],
  [1, 3],
  [3, 4],
  [4, 3],
];
console.log("SCC n=5:", stronglyConnectedComponents(5, sccEdges));
```

**Expected Outcome:**

```
[[0, 1, 2], [3, 4]]
```

### Topological Sort - Linear ordering of vertices.

**Usage Example:**

```bash
import { topologicalSort } from "@zennal/dsa";
const tsEdges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
];
console.log("Topological sort n=4:", topologicalSort(4, tsEdges));
```

**Expected Outcome:**

```
[0, 2, 1, 3]
```

### Weakly Connected Components - WCCs in directed graph.

**Usage Example:**

```bash
import { weaklyConnectedComponents } from "@zennal/dsa";
const wccEdges = [
  [0, 1],
  [1, 2],
  [3, 4],
];
console.log("WCC n=5:", weaklyConnectedComponents(5, wccEdges));
```

**Expected Outcome:**

```
[[0, 1, 2], [3, 4]]
```

## Greedy Algorithms

### Activity Selection - Select maximum number of non-overlapping activities.

**Usage Example:**

```bash
import { activitySelection } from "@zennal/dsa";
const activities = [
  [1, 3],
  [2, 4],
  [3, 5],
  [0, 6],
  [5, 7],
  [8, 9],
  [5, 9],
];
console.log("Activity selection:", activitySelection(activities));
```

**Expected Outcome:**

```
[0, 3, 5]
```

### Coin Change Greedy - Minimum coins using greedy approach.

**Usage Example:**

```bash
import { coinChangeGreedy } from "@zennal/dsa";
console.log(
  "Coin change greedy [1,2,5] amount 11:",
  coinChangeGreedy([1, 2, 5], 11)
);
```

**Expected Outcome:**

```
3
```

### Dijkstra - Shortest paths from source.

**Usage Example:**

```bash
import { dijkstra } from "@zennal/dsa";
const dEdges = [
  [0, 1, 4],
  [0, 2, 1],
  [1, 3, 1],
  [2, 1, 2],
  [2, 3, 5],
  [3, 4, 3],
];
console.log("Dijkstra n=5 start=0:", dijkstra(5, dEdges, 0));
```

**Expected Outcome:**

```
[0, 3, 1, 4, 7]
```

### Egyptian Fraction - Represent fraction as sum of distinct unit fractions.

**Usage Example:**

```bash
import { egyptianFraction } from "@zennal/dsa";
console.log("Egyptian fraction 3/7:", egyptianFraction(3, 7));
```

**Expected Outcome:**

```
[3, 11, 231]
```

### Fractional Knapsack - Maximize value in knapsack allowing fractions.

**Usage Example:**

```bash
import { fractionalKnapsack } from "@zennal/dsa";
const fkItems = [
  [60, 10],
  [100, 20],
  [120, 30],
];
console.log(
  "Fractional knapsack capacity 50:",
  fractionalKnapsack(fkItems, 50)
);
```

**Expected Outcome:**

```
240
```

### Graph Coloring - Color graph using greedy approach.

**Usage Example:**

```bash
import { graphColoring } from "@zennal/dsa";
const gcEdges = [
  [0, 1],
  [0, 2],
  [1, 2],
  [1, 3],
  [2, 3],
];
console.log("Graph coloring n=4:", graphColoring(4, gcEdges));
```

**Expected Outcome:**

```
[0, 1, 2, 0]
```

### Huffman Coding - Build Huffman codes for data.

**Usage Example:**

```bash
import { huffmanCoding } from "@zennal/dsa";
const hcResult = huffmanCoding("hello world");
console.log("Huffman codes:", hcResult.huffmanCodes);
console.log("Encoded:", hcResult.encoded);
```

**Expected Outcome:**

```
{'h': '00', 'e': '01', 'l': '1', ...}
encoded string
```

### Huffman Decode - Decode Huffman encoded string.

**Usage Example:**

```bash
import { huffmanDecode } from "@zennal/dsa";
console.log("Decoded:", huffmanDecode(hcResult));
```

**Expected Outcome:**

```
"hello world"
```

### Interval Scheduling - Select maximum non-overlapping intervals.

**Usage Example:**

```bash
import { intervalScheduling } from "@zennal/dsa";
const intervals = [
  [1, 3],
  [2, 4],
  [3, 5],
  [0, 6],
];
console.log("Interval scheduling:", intervalScheduling(intervals));
```

**Expected Outcome:**

```
3
```

### Minimum Platforms - Minimum platforms needed for trains.

**Usage Example:**

```bash
import { minimumPlatforms } from "@zennal/dsa";
const arrivals = [900, 940, 950, 1100, 1500, 1800];
const departures = [910, 1200, 1120, 1130, 1900, 2000];
console.log("Minimum platforms:", minimumPlatforms(arrivals, departures));
```

**Expected Outcome:**

```
3
```

### Task Scheduling - Schedule tasks to maximize profit.

**Usage Example:**

```bash
import { taskScheduling } from "@zennal/dsa";
const tasks = [
  ["a", 2, 100],
  ["b", 1, 19],
  ["c", 2, 27],
  ["d", 1, 25],
  ["e", 3, 15],
];
console.log("Task scheduling:", taskScheduling(tasks));
```

**Expected Outcome:**

```
["c", "a", "e"]
```

### Weighted Job Scheduling - Maximum profit from weighted jobs.

**Usage Example:**

```bash
import { weightedJobScheduling } from "@zennal/dsa";
const jobs = [
  [0, 6, 60],
  [1, 4, 30],
  [3, 5, 10],
  [5, 7, 30],
  [5, 9, 50],
  [7, 8, 10],
];
console.log("Weighted job scheduling:", weightedJobScheduling(jobs));
```

**Expected Outcome:**

```
80
```

## Math Algorithms

### GCD - Greatest Common Divisor.

**Usage Example:**

```bash
import { gcd } from "@zennal/dsa";
console.log("GCD of 48 and 18:", gcd(48, 18));
```

**Expected Outcome:**

```
6
```

### Is Prime - Check if number is prime.

**Usage Example:**

```bash
import { isPrime } from "@zennal/dsa";
console.log("Is 29 prime:", isPrime(29));
```

**Expected Outcome:**

```
true
```

### Factorial - Compute factorial of n.

**Usage Example:**

```bash
import { factorial } from "@zennal/dsa";
console.log("Factorial of 5:", factorial(5));
```

**Expected Outcome:**

```
120
```

### Prime Factorization - Get prime factors.

**Usage Example:**

```bash
import { primeFactorization } from "@zennal/dsa";
console.log("Prime factors of 84:", primeFactorization(84));
```

**Expected Outcome:**

```
[2, 2, 3, 7]
```

### Sieve of Eratosthenes - Generate primes up to n.

**Usage Example:**

```bash
import { sieveOfEratosthenes } from "@zennal/dsa";
console.log("Primes up to 20:", sieveOfEratosthenes(20));
```

**Expected Outcome:**

```
[2, 3, 5, 7, 11, 13, 17, 19]
```

### Modular Exponentiation - Compute base^exp mod mod.

**Usage Example:**

```bash
import { modPow } from "@zennal/dsa";
console.log("2^10 mod 1000:", modPow(2, 10, 1000));
```

**Expected Outcome:**

```
24
```

### Pascal Triangle - Binomial coefficient C(n, k).

**Usage Example:**

```bash
import { pascalTriangle } from "@zennal/dsa";
console.log("C(5, 2):", pascalTriangle(5, 2));
```

**Expected Outcome:**

```
10
```

### Combination - Binomial coefficient.

**Usage Example:**

```bash
import { combination } from "@zennal/dsa";
console.log("Combination 5 choose 2:", combination(5, 2));
```

**Expected Outcome:**

```
10
```

### LCM - Least Common Multiple.

**Usage Example:**

```bash
import { lcm } from "@zennal/dsa";
console.log("LCM of 4 and 5:", lcm(4, 5));
```

**Expected Outcome:**

```
20
```

### Modular Inverse - Find inverse modulo m.

**Usage Example:**

```bash
import { modInverse } from "@zennal/dsa";
console.log("Inverse of 3 mod 11:", modInverse(3, 11));
```

**Expected Outcome:**

```
4
```

### Extended GCD - GCD with coefficients.

**Usage Example:**

```bash
import { extendedGcd } from "@zennal/dsa";
console.log("Extended GCD 30 and 20:", extendedGcd(30, 20));
```

**Expected Outcome:**

```
{ gcd: 10, x: 1, y: -1 }
```

### Is Perfect Number - Check if sum of divisors equals number.

**Usage Example:**

```bash
import { isPerfectNumber } from "@zennal/dsa";
console.log("Is 28 perfect:", isPerfectNumber(28));
```

**Expected Outcome:**

```
true
```

### Is Armstrong Number - Check Armstrong number.

**Usage Example:**

```bash
import { isArmstrongNumber } from "@zennal/dsa";
console.log("Is 153 Armstrong:", isArmstrongNumber(153));
```

**Expected Outcome:**

```
true
```

### Digital Root - Sum of digits repeatedly.

**Usage Example:**

```bash
import { digitalRoot } from "@zennal/dsa";
console.log("Digital root of 1234:", digitalRoot(1234));
```

**Expected Outcome:**

```
1
```

### Sum of Divisors - Sum of all divisors.

**Usage Example:**

```bash
import { sumOfDivisors } from "@zennal/dsa";
console.log("Sum of divisors of 12:", sumOfDivisors(12));
```

**Expected Outcome:**

```
28
```

## Searching Algorithms

### Binary Search - Search in sorted array.

**Usage Example:**

```bash
import { binarySearch } from "@zennal/dsa";
console.log("Binary search 7 :", binarySearch(sortedArray, 7));
```

**Expected Outcome:**

```
3
```

### Linear Search - Search in unsorted array.

**Usage Example:**

```bash
import { linearSearch } from "@zennal/dsa";
console.log("Linear search 7 :", linearSearch(unsortedArray, 7));
```

**Expected Outcome:**

```
2
```

### Jump Search - Search in sorted array with jump steps.

**Usage Example:**

```bash
import { jumpSearch } from "@zennal/dsa";
console.log("Jump search 11 :", jumpSearch(sortedArray, 11));
```

**Expected Outcome:**

```
5
```

### Interpolation Search - Search in uniformly distributed sorted array.

**Usage Example:**

```bash
import { interpolationSearch } from "@zennal/dsa";
console.log("Interpolation search 13 :", interpolationSearch(sortedArray, 13));
```

**Expected Outcome:**

```
6
```

### Exponential Search - Search in sorted array with exponential bounds.

**Usage Example:**

```bash
import { exponentialSearch } from "@zennal/dsa";
console.log("Exponential search 15 :", exponentialSearch(sortedArray, 15));
```

**Expected Outcome:**

```
7
```

### Ternary Search - Search in sorted array by dividing into thirds.

**Usage Example:**

```bash
import { ternarySearch } from "@zennal/dsa";
console.log("Ternary search 9 :", ternarySearch(sortedArray, 9));
```

**Expected Outcome:**

```
4
```

### Fibonacci Search - Search using Fibonacci numbers.

**Usage Example:**

```bash
import { fibonacciSearch } from "@zennal/dsa";
console.log("Fibonacci search 17 :", fibonacciSearch(sortedArray, 17));
```

**Expected Outcome:**

```
8
```

## Sorting Algorithms

### Bubble Sort - Sort by repeatedly swapping adjacent elements.

**Usage Example:**

```bash
import { bubbleSort } from "@zennal/dsa";
console.log("Bubble sort:", bubbleSort([...unsortedArray]));
```

**Expected Outcome:**

```
[11, 12, 22, 25, 34, 64, 90]
```

### Heap Sort - Sort using heap data structure.

**Usage Example:**

```bash
import { heapSort } from "@zennal/dsa";
console.log("Heap sort:", heapSort([...unsortedArray]));
```

**Expected Outcome:**

```
[11, 12, 22, 25, 34, 64, 90]
```

### Insertion Sort - Sort by inserting elements into sorted portion.

**Usage Example:**

```bash
import { insertionSort } from "@zennal/dsa";
console.log("Insertion sort:", insertionSort([...unsortedArray]));
```

**Expected Outcome:**

```
[11, 12, 22, 25, 34, 64, 90]
```

### Merge Sort - Sort by dividing and merging.

**Usage Example:**

```bash
import { mergeSort } from "@zennal/dsa";
console.log("Merge sort:", mergeSort([...unsortedArray]));
```

**Expected Outcome:**

```
[11, 12, 22, 25, 34, 64, 90]
```

### Quick Sort - Sort using partitioning.

**Usage Example:**

```bash
import { quickSort } from "@zennal/dsa";
console.log("Quick sort:", quickSort([...unsortedArray]));
```

**Expected Outcome:**

```
[11, 12, 22, 25, 34, 64, 90]
```

### Selection Sort - Sort by selecting minimum element.

**Usage Example:**

```bash
import { selectionSort } from "@zennal/dsa";
console.log("Selection sort:", selectionSort([...unsortedArray]));
```

**Expected Outcome:**

```
[11, 12, 22, 25, 34, 64, 90]
```

## Strings Algorithms

### Is Palindrome - Check if string is palindrome.

**Usage Example:**

```bash
import { isPalindrome } from "@zennal/dsa";
console.log("Is 'racecar' palindrome:", isPalindrome("racecar"));
```

**Expected Outcome:**

```
true
```

### Longest Palindrome - Find longest palindromic substring.

**Usage Example:**

```bash
import { longestPalindrome } from "@zennal/dsa";
console.log("Longest palindrome in 'babad':", longestPalindrome("babad"));
```

**Expected Outcome:**

```
"bab" or "aba"
```

### KMP Search - Search pattern in text using KMP.

**Usage Example:**

```bash
import { kmpSearch } from "@zennal/dsa";
console.log("KMP search 'ana' in 'banana':", kmpSearch("banana", "ana"));
```

**Expected Outcome:**

```
[1, 3]
```

### Edit Distance - Minimum operations to transform one string to another.

**Usage Example:**

```bash
import { editDistance } from "@zennal/dsa";
console.log(
  "Edit distance 'kitten' to 'sitting':",
  editDistance("kitten", "sitting")
);
```

**Expected Outcome:**

```
3
```

### Reverse Words - Reverse words in a string.

**Usage Example:**

```bash
import { reverseWords } from "@zennal/dsa";
console.log("Reverse words 'hello world':", reverseWords("hello world"));
```

**Expected Outcome:**

```
"world hello"
```

### Has Unique Characters - Check if all characters are unique.

**Usage Example:**

```bash
import { hasUniqueCharacters } from "@zennal/dsa";
console.log("Has unique chars 'abcdef':", hasUniqueCharacters("abcdef"));
```

**Expected Outcome:**

```
true
```

### Count Occurrences - Count occurrences of substring.

**Usage Example:**

```bash
import { countOccurrences } from "@zennal/dsa";
console.log("Count 'l' in 'hello':", countOccurrences("hello", "l"));
```

**Expected Outcome:**

```
2
```

### Is Rotation - Check if one string is rotation of another.

**Usage Example:**

```bash
import { isRotation } from "@zennal/dsa";
console.log(
  "Is 'waterbottle' rotation of 'erbottlewat':",
  isRotation("waterbottle", "erbottlewat")
);
```

**Expected Outcome:**

```
true
```

## Buffer Data Structures

### ArrayDeque - A double-ended queue with array-backed storage, supporting FIFO/LIFO operations.

**Usage Example:**

```bash

```

**Expected Outcome:**

```
Useful for efficient additions/removals from both ends.
```

### GapBuffer - A two-sided buffer optimized for text editing operations.

**Usage Example:**

```bash

```

**Expected Outcome:**

```
Great for implementing text editors with fast insertions/deletions.
```

## Graphs Data Structures

### Undirected Graph - Adjacency list-based graph with bidirectional edges.

**Usage Example:**

```bash
import { Graph } from "@zennal/dsa";
const undirectedGraph = new Graph("undirected");
undirectedGraph.addVertex("A");
undirectedGraph.addVertex("B");
undirectedGraph.addEdge("A", "B", 5);
undirectedGraph.addEdge("B", "C");
console.log("Vertices:", undirectedGraph.getVertices());
console.log("Neighbors of A:", undirectedGraph.getNeighbors("A"));
console.log("Has edge A-B:", undirectedGraph.hasEdge("A", "B"));
console.log("Edge weight A-B:", undirectedGraph.getEdgeWeight("A", "B"));
console.log("Degree of B:", undirectedGraph.degree("B"));
console.log("Vertex count:", undirectedGraph.vertexCount());
console.log("Edge count:", undirectedGraph.edgeCount());
console.log("Is connected:", undirectedGraph.isConnected());
console.log("BFS from A:", undirectedGraph.bfs("A"));
console.log("DFS from A:", undirectedGraph.dfs("A"));
console.log("Dijkstra from A:", Array.from(undirectedGraph.dijkstra("A")));
console.log(
  "Reachable from A:",
  Array.from(undirectedGraph.reachableFrom("A"))
);
console.log("Adjacency matrix:", undirectedGraph.getAdjacencyMatrix());
undirectedGraph.removeEdge("A", "B");
console.log("After remove edge:", undirectedGraph.getNeighbors("A"));
undirectedGraph.removeVertex("C");
console.log("After remove vertex:", undirectedGraph.getVertices());
undirectedGraph.clear();
console.log("After clear:", undirectedGraph.getVertices());
```

**Expected Outcome:**

```
Edge with weight
["A", "B", "C"]
["B"]
true
5
2
3
2
true
["A", "B", "C"]
["A", "B", "C"]
[["A", 0], ["B", 5], ["C", 6]]
["A", "B", "C"]
[[0,5,0],[5,0,1],[0,1,0]]
[]
["A", "B"]
[]
```

### Directed Graph - Adjacency list-based graph with one-way edges.

**Usage Example:**

```bash
const directedGraph = new Graph("directed");
directedGraph.addEdge("X", "Y");
directedGraph.addEdge("Y", "Z");
directedGraph.addEdge("Z", "X");
console.log("Type:", directedGraph.getType());
console.log("Has vertex X:", directedGraph.hasVertex("X"));
console.log("Neighbors of X:", directedGraph.getNeighbors("X"));
console.log("Neighbors of Y:", directedGraph.getNeighbors("Y"));
console.log("Topological sort:", directedGraph.topologicalSort());
console.log("Is connected:", directedGraph.isConnected());
```

**Expected Outcome:**

```
Creates a cycle
"directed"
true
["Y"]
["Z"]
["X", "Y", "Z"] (may vary)
true (strongly connected in this case)
```

## Hash Maps Data Structures

### BloomFilter - Probabilistic data structure for set membership testing.

**Usage Example:**

```bash
import { BloomFilter } from "@zennal/dsa";
const bloom = new BloomFilter({
  expectedElements: 100,
  falsePositiveProbability: 0.01,
});
bloom.add("apple", "banana", "cherry");
console.log("Contains 'apple':", bloom.contains("apple"));
console.log("Contains 'grape':", bloom.contains("grape"));
console.log("Size:", bloom.getSize());
console.log("Hash functions:", bloom.getHashFunctionCount());
console.log("Element count:", bloom.getElementCount());
console.log("Fill ratio:", bloom.getFillRatio());
console.log("Estimated FPP:", bloom.getEstimatedFalsePositiveProbability());
bloom.clear();
console.log("After clear, element count:", bloom.getElementCount());
```

**Expected Outcome:**

```
true
false (likely)
~958
~7
3
~0.02
~0.01
0
```

### HashMap - Hash table with separate chaining collision resolution.

**Usage Example:**

```bash
import { HashMap } from "@zennal/dsa";
const hashMap = new HashMap();
hashMap.put("one", 1);
hashMap.put("two", 2);
hashMap.set("three", 3);
console.log("Get 'one':", hashMap.get("one"));
console.log("Contains key 'two':", hashMap.containsKey("two"));
console.log("Contains value 3:", hashMap.containsValue(3));
console.log("Keys:", hashMap.keys());
console.log("Values:", hashMap.values());
console.log("Entries:", hashMap.entries());
console.log("Size:", hashMap.size());
console.log("Is empty:", hashMap.isEmpty());
console.log("Capacity:", hashMap.getCapacity());
console.log("Load factor:", hashMap.getLoadFactor());
hashMap.putIfAbsent("four", 4);
console.log("After putIfAbsent:", hashMap.get("four"));
console.log("Get or default 'five':", hashMap.getOrDefault("five", 0));
hashMap.forEach((value, key) => console.log(`${key}: ${value}`));
const mapped = hashMap.map((v, k) => v * 2);
console.log("Mapped values:", mapped.values());
const filtered = hashMap.filter((v, k) => v > 2);
console.log("Filtered keys:", filtered.keys());
const sum = hashMap.reduce((acc, v, k) => acc + v, 0);
console.log("Sum of values:", sum);
hashMap.remove("one");
console.log("After remove, size:", hashMap.size());
hashMap.clear();
console.log("After clear, size:", hashMap.size());
```

**Expected Outcome:**

```
Alias for put
1
true
true
["one", "two", "three"]
[1, 2, 3]
[["one",1], ["two",2], ["three",3]]
3
false
16
~0.19
4
0
one:1, two:2, etc.
[2,4,6,8]
["three", "four"]
10
3
0
```

### LRUCache - Least Recently Used cache with O(1) operations.

**Usage Example:**

```bash
import { LRUCache } from "@zennal/dsa";
const lru = new LRUCache(3);
lru.put("a", 1);
lru.put("b", 2);
lru.put("c", 3);
console.log("Get 'a':", lru.get("a"));
lru.put("d", 4);
console.log("Has 'b':", lru.has("b"));
console.log("Size:", lru.getSize());
console.log("Capacity:", lru.getCapacity());
console.log("Keys (MRU to LRU):", lru.getKeys());
console.log("Values:", lru.getValues());
console.log("Entries:", lru.getEntries());
console.log("MRU key:", lru.getMRUKey());
console.log("LRU key:", lru.getLRUKey());
lru.remove("c");
console.log("After remove 'c', size:", lru.getSize());
lru.clear();
console.log("After clear, size:", lru.getSize());
```

**Expected Outcome:**

```
1 (moves to MRU)
Evicts 'b' (LRU)
false
3
3
["a", "c", "d"]
[1, 3, 4]
[["a",1], ["c",3], ["d",4]]
"d"
"a"
2
0
```

## Hashing Varients Data Structures

### CuckooHashMap - Hash map with cuckoo hashing for collision resolution.

**Usage Example:**

```bash
import { CuckooHashMap } from "@zennal/dsa";
const cuckoo = new CuckooHashMap();
cuckoo.set("a", 1);
cuckoo.set("b", 2);
cuckoo.set("c", 3);
console.log("Get 'a':", cuckoo.get("a"));
console.log("Has 'b':", cuckoo.has("b"));
console.log("Size:", cuckoo.getSize());
console.log("Keys:", cuckoo.keys());
console.log("Values:", cuckoo.values());
cuckoo.delete("b");
console.log("After delete 'b', size:", cuckoo.getSize());
console.log("Has 'b' after delete:", cuckoo.has("b"));
cuckoo.clear();
console.log("After clear, size:", cuckoo.getSize());
```

**Expected Outcome:**

```
1
true
3
["a", "b", "c"]
[1, 2, 3]
2
false
0
```

### RobinHoodHashMap - Hash map with Robin Hood hashing for better distribution.

**Usage Example:**

```bash
import { RobinHoodHashMap } from "@zennal/dsa";
const robin = new RobinHoodHashMap();
robin.set("x", 10);
robin.set("y", 20);
robin.set("z", 30);
console.log("Get 'x':", robin.get("x"));
console.log("Has 'y':", robin.has("y"));
console.log("Size:", robin.getSize());
console.log("Is empty:", robin.isEmpty());
console.log("Keys:", robin.keys());
console.log("Values:", robin.values());
console.log("Entries:", robin.getEntries());
robin.forEach((value, key) => console.log(`${key}: ${value}`));
robin.delete("y");
console.log("After delete 'y', size:", robin.getSize());
console.log("Has 'y' after delete:", robin.has("y"));
robin.clear();
console.log("After clear, size:", robin.getSize());
```

**Expected Outcome:**

```
10
true
3
false
["x", "y", "z"]
[10, 20, 30]
[["x",10], ["y",20], ["z",30]]
x:10, y:20, z:30
2
false
0
```

## Heap Data Structures

### Min Heap - Smallest element at root.

**Usage Example:**

```bash
import { Heap } from "@zennal/dsa";
const minHeap = Heap.minHeap((a, b) => a - b);
minHeap.insert(10, 5, 20, 1, 15);
console.log("Min heap array:", minHeap.toArray());
console.log("Peek min:", minHeap.peek());
console.log("Extract min:", minHeap.extract());
console.log("Size:", minHeap.size());
console.log("Is empty:", minHeap.isEmpty());
console.log("Contains 10:", minHeap.contains(10));
console.log("Height:", minHeap.height());
console.log("Is valid heap:", minHeap.isValid());
console.log("Top 2:", minHeap.topK(2));
console.log("Sorted array:", minHeap.toSortedArray());
minHeap.forEach((val, idx) => console.log(`Index ${idx}: ${val}`));
const doubled = minHeap.map(
  (val) => val * 2,
  (a, b) => a - b
);
console.log("Mapped heap array:", doubled.toArray());
const filtered = minHeap.filter((val) => val > 10);
console.log("Filtered heap array:", filtered.toArray());
minHeap.clear();
console.log("After clear, size:", minHeap.size());
```

**Expected Outcome:**

```
[1, 5, 20, 10, 15]
1
1
4
false
true
2
true
[5, 10]
[5, 10, 15, 20]
Index 0: 5, etc.
[10, 20, 30, 40]
[15, 20]
0
```

### Max Heap - Largest element at root.

**Usage Example:**

```bash
const maxHeap = Heap.maxHeap((a, b) => a - b);
maxHeap.insert(10, 5, 20, 1, 15);
console.log("Max heap array:", maxHeap.toArray());
console.log("Peek max:", maxHeap.peek());
console.log("Extract max:", maxHeap.extract());
console.log("Replace with 25:", maxHeap.replace(25));
console.log("New peek:", maxHeap.peek());
maxHeap.buildHeap([3, 1, 4, 1, 5]);
console.log("Built from array:", maxHeap.toArray());
maxHeap.heapify();
console.log("After heapify:", maxHeap.toArray());
const anotherHeap = Heap.maxHeap((a, b) => a - b);
anotherHeap.insert(100, 200);
maxHeap.merge(anotherHeap);
console.log("After merge:", maxHeap.toArray());
```

**Expected Outcome:**

```
[20, 15, 10, 1, 5]
20
20
15 (old root)
25
[5, 4, 3, 1, 1]
Already heapified
[5, 4, 3, 1, 1]
[200, 100, 5, 4, 3, 1, 1]
```

## Linear Data Structures

### ArrayList - Resizable array-based list with dynamic capacity.

**Usage Example:**

```bash
import { ArrayList } from "@zennal/dsa";
const arrayList = new ArrayList();
arrayList.add(1, 2, 3);
console.log("ArrayList:", arrayList.toArray());
arrayList.addAt(1, 10);
console.log("After addAt(1, 10):", arrayList.toArray());
console.log("Get(2):", arrayList.get(2));
console.log("Set(2, 20):", arrayList.set(2, 20));
console.log("After set:", arrayList.toArray());
console.log("Remove(1):", arrayList.remove(1));
console.log("Index of 20:", arrayList.indexOf(20));
console.log("Contains 3:", arrayList.contains(3));
console.log("Size:", arrayList.size());
console.log("Is empty:", arrayList.isEmpty());
arrayList.clear();
console.log("After clear:", arrayList.toArray());
```

**Expected Outcome:**

```
[1, 2, 3]
[1, 10, 2, 3]
2
2 (old value)
[1, 10, 20, 3]
10
1
true
3
false
[]
```

### Deque - Double-ended queue (FIFO/LIFO operations from both ends).

**Usage Example:**

```bash
import { Deque } from "@zennal/dsa";
const deque = new Deque();
deque.addFirst(1, 2);
deque.addLast(3, 4);
console.log("Deque:", deque.toArray());
console.log("Remove first:", deque.removeFirst());
console.log("Remove last:", deque.removeLast());
console.log("Peek first:", deque.peekFirst());
console.log("Peek last:", deque.peekLast());
console.log("Get(1):", deque.get(1));
console.log("Index of 3:", deque.indexOf(3));
console.log("Last index of 1:", deque.lastIndexOf(1));
console.log("Contains 3:", deque.contains(3));
console.log("Size:", deque.size());
deque.forEach((el, idx) => console.log(`Deque[${idx}]: ${el}`));
deque.removeElement(1);
console.log("After remove element 1:", deque.toArray());
deque.clear();
console.log("After clear:", deque.toArray());
```

**Expected Outcome:**

```
[2, 1, 3, 4]
2
4
1
3
3
1
0
true
2
Deque[0]: 1, Deque[1]: 3
[3]
[]
```

### LinkedList - Singly linked list with sequential access.

**Usage Example:**

```bash
import { LinkedList } from "@zennal/dsa";
const linkedList = new LinkedList();
linkedList.addFirst(1, 2);
linkedList.addLast(3, 4);
console.log("LinkedList:", linkedList.toArray());
console.log("Remove first:", linkedList.removeFirst());
console.log("Remove last:", linkedList.removeLast());
console.log("Get first:", linkedList.getFirst());
console.log("Get last:", linkedList.getLast());
console.log("Get(1):", linkedList.get(1));
console.log("Remove element 1:", linkedList.remove(1));
console.log("After remove:", linkedList.toArray());
console.log("Index of 3:", linkedList.indexOf(3));
console.log("Contains 3:", linkedList.contains(3));
console.log("Size:", linkedList.size());
linkedList.clear();
console.log("After clear:", linkedList.toArray());
```

**Expected Outcome:**

```
[2, 1, 3, 4]
2
4
1
3
3
true
[3]
0
true
1
[]
```

### PriorityQueue - Queue with priority-based ordering.

**Usage Example:**

```bash
import { PriorityQueue } from "@zennal/dsa";
const pq = new PriorityQueue((a, b) => a - b);
pq.enqueue(10, 5, 20, 1);
console.log("PriorityQueue size:", pq.size());
console.log("Peek:", pq.peek());
console.log("Dequeue:", pq.dequeue());
console.log("Dequeue:", pq.dequeue());
console.log("Is empty:", pq.isEmpty());
console.log("To sorted array:", pq.toArray());
pq.forEach((el, idx) => console.log(`PQ[${idx}]: ${el}`));
pq.clear();
console.log("After clear, size:", pq.size());
```

**Expected Outcome:**

```
Min-heap
4
1
1
5
false
[10, 20]
PQ[0]: 10, PQ[1]: 20
0
```

### Queue - FIFO queue data structure.

**Usage Example:**

```bash
import { Queue } from "@zennal/dsa";
const queue = new Queue();
queue.enqueue(1, 2, 3);
console.log("Queue:", queue.toArray());
console.log("Dequeue:", queue.dequeue());
console.log("Peek:", queue.peek());
console.log("Size:", queue.size());
console.log("Contains 3:", queue.contains(3));
queue.forEach((el, idx) => console.log(`Queue[${idx}]: ${el}`));
queue.clear();
console.log("After clear:", queue.toArray());
```

**Expected Outcome:**

```
[1, 2, 3]
1
2
2
true
Queue[0]: 2, Queue[1]: 3
[]
```

### Stack - LIFO stack data structure.

**Usage Example:**

```bash
import { Stack } from "@zennal/dsa";
const stack = new Stack();
stack.push(1, 2, 3);
console.log("Stack:", stack.toArray());
console.log("Pop:", stack.pop());
console.log("Peek:", stack.peek());
console.log("Size:", stack.size());
console.log("Contains 1:", stack.contains(1));
stack.forEach((el, idx) => console.log(`Stack[${idx}]: ${el}`));
stack.clear();
console.log("After clear:", stack.toArray());
```

**Expected Outcome:**

```
[1, 2, 3]
3
2
2
true
Stack[0]: 1, Stack[1]: 2
[]
```

## Sets Data Structures

### DisjointSet (Union-Find) - Data structure for managing disjoint sets with union and find operations.

**Usage Example:**

```bash
import { DisjointSet } from "@zennal/dsa";
const ds = new DisjointSet();
ds.makeSet("A", "B", "C", "D", "E");
console.log("All elements:", ds.getAllElements());
console.log("Find 'A':", ds.find("A"));
console.log("Connected 'A' and 'B':", ds.connected("A", "B"));
ds.union("A", "B");
ds.union("C", "D");
console.log("After unions, find 'B':", ds.find("B"));
console.log("Connected 'A' and 'B':", ds.connected("A", "B"));
console.log("Set size of 'A':", ds.getSetSize("A"));
console.log("Number of sets:", ds.getNumSets());
console.log("Set of 'A':", ds.getSet("A"));
console.log("All sets:", ds.getAllSets());
console.log("Has 'C':", ds.has("C"));
console.log("Count:", ds.count());
console.log("Tree height of 'A':", ds.getTreeHeight("A"));
console.log("Representative of 'D':", ds.getRepresentative("D"));
console.log("Validate:", ds.validate());
ds.unite("B", "E");
console.log("After unite 'B' and 'E', number of sets:", ds.getNumSets());
ds.clear();
console.log("After clear, count:", ds.count());
```

**Expected Outcome:**

```
["A", "B", "C", "D", "E"]
"A"
false
"A"
true
2
3
["A", "B"]
[["A", "B"], ["C", "D"], ["E"]]
true
5
1
"C"
true
Alias for union
2
0
```

## Sketches Data Structures

### CountMinSketch - Probabilistic data structure for frequency estimation.

**Usage Example:**

```bash
import { CountMinSketch } from "@zennal/dsa";
const cms = new CountMinSketch(0.01, 0.01);
cms.update("apple", 5);
cms.update("banana", 3);
cms.update("apple", 2);
console.log("Query 'apple':", cms.query("apple"));
console.log("Query 'banana':", cms.query("banana"));
console.log("Query 'cherry':", cms.query("cherry"));
console.log("Parameters:", cms.getParameters());
console.log("Memory usage (bytes):", cms.getMemoryUsage());
cms.reset();
console.log("After reset, query 'apple':", cms.query("apple"));
```

**Expected Outcome:**

```
delta, epsilon
7 (or more due to collisions)
3
0
{ width: ~271, depth: ~5, delta: 0.01, epsilon: 0.01 }
~10840
0
```

### QuotientFilter - Space-efficient hash filter.

**Usage Example:**

```bash
import { QuotientFilter } from "@zennal/dsa";
const qf = new QuotientFilter(10);
qf.insert("hello");
qf.insert("world");
console.log("May contain 'hello':", qf.mayContain("hello"));
console.log("May contain 'world':", qf.mayContain("world"));
console.log("May contain 'test':", qf.mayContain("test"));
console.log("Size:", qf.getSize());
console.log("Capacity:", qf.getCapacity());
console.log("Is full:", qf.isFull());
console.log("Memory usage (bytes):", qf.getMemoryUsage());
qf.clear();
console.log("After clear, size:", qf.getSize());
```

**Expected Outcome:**

```
capacityBits
true
true
false
2
1024
false
~12292
0
```

### XorFilter - Fast and compact filter for set membership.

**Usage Example:**

```bash
import { XorFilter } from "@zennal/dsa";
const keys = [10, 20, 30, 40, 50];
const xf = new XorFilter(keys);
console.log("May contain 10:", xf.mayContain(10));
console.log("May contain 25:", xf.mayContain(25));
console.log("May contain 30:", xf.mayContain(30));
console.log("Size:", xf.getSize());
console.log("Memory usage (bytes):", xf.getMemoryUsage());
```

**Expected Outcome:**

```
true
false (likely)
true
32 or more
~256 + 40
```

## Specialized Trees Data Structures

### BinaryLifting - LCA and path query optimization.

**Usage Example:**

```bash
import { BinaryLifting } from "@zennal/dsa";
const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 5],
  [2, 6],
];
const bl = new BinaryLifting(7, edges, 0);
console.log("Kth ancestor of 4 (k=2):", bl.getKthAncestor(4, 2));
console.log("LCA of 3 and 4:", bl.getLCA(3, 4));
console.log("Distance between 3 and 5:", bl.getDistance(3, 5));
console.log("Is 0 ancestor of 3:", bl.isAncestor(0, 3));
console.log("Depth of 4:", bl.getDepth(4));
console.log("Node count:", bl.getNodeCount());
```

**Expected Outcome:**

```
0
1
4
true
2
7
```

### CartesianTree - Tree with range minimum query capabilities.

**Usage Example:**

```bash
import { CartesianTree } from "@zennal/dsa";
const ct = new CartesianTree((a, b) => a - b);
ct.buildFromArray([9, 3, 7, 1, 8, 12, 10, 20, 15, 18, 5]);
console.log("Find min:", ct.findMin());
console.log("Find max:", ct.findMax());
console.log("Find 5th smallest:", ct.findKth(5));
console.log("Range min query (2-7):", ct.rangeQuery(2, 7));
console.log("In-order traversal:", ct.inOrder());
console.log("Size:", ct.size());
console.log("Is empty:", ct.isEmpty());
ct.clear();
console.log("After clear, size:", ct.size());
```

**Expected Outcome:**

```
1
20
8
1
[1,3,5,7,8,9,10,12,15,18,20]
11
false
0
```

### SqrtTree - Structure for fast range queries.

**Usage Example:**

```bash
import { SqrtTree } from "@zennal/dsa";
const arr = [5, 2, 8, 1, 9, 3, 7, 4, 6, 0];
const st = new SqrtTree(arr, (a, b) => a - b);
console.log("Range min query (1-5):", st.query(1, 5));
console.log("Range min query (0-9):", st.query(0, 9));
console.log("Get element at 3:", st.get(3));
st.update(3, 10);
console.log("After update index 3 to 10, range min (1-5):", st.query(1, 5));
console.log("Size:", st.getSize());
console.log("Block size:", st.getBlockSize());
console.log("To array:", st.toArray());
```

**Expected Outcome:**

```
1
0
1
2
10
4
[5,2,8,10,9,3,7,4,6,0]
```

## Trees Data Structures

### AVLTree - Self-balancing binary search tree with height constraints.

**Usage Example:**

```bash
import { AVLTree } from "@zennal/dsa";
const avl = new AVLTree((a, b) => a - b);
avl.insert(10, 5, 15, 3, 7, 12, 18);
console.log("AVL in-order:", avl.inOrder());
console.log("Search 7:", avl.search(7));
console.log("Find min:", avl.findMin());
console.log("Find max:", avl.findMax());
console.log("Height:", avl.height());
console.log("Size:", avl.size());
console.log("Is valid AVL:", avl.isValidAVL());
console.log("Range query (5-15):", avl.rangeQuery(5, 15));
console.log("Level order:", avl.levelOrder());
console.log("Delete 10:", avl.delete(10));
console.log("After delete:", avl.inOrder());
avl.clear();
console.log("After clear, size:", avl.size());
```

**Expected Outcome:**

```
[3,5,7,10,12,15,18]
true
3
18
2
7
true
[5,7,10,12,15]
[10,5,15,3,7,12,18]
true
[3,5,7,12,15,18]
0
```

### BinarySearchTree - Ordered tree for efficient searching.

**Usage Example:**

```bash
import { BinarySearchTree } from "@zennal/dsa";
const bst = new BinarySearchTree((a, b) => a - b);
bst.insert(8, 3, 10, 1, 6, 14, 4, 7, 13);
console.log("BST in-order:", bst.inOrder());
console.log("Contains 6:", bst.contains(6));
console.log("Find successor of 6:", bst.findSuccessor(6));
console.log("Find predecessor of 8:", bst.findPredecessor(8));
console.log("Height:", bst.height());
console.log("Size:", bst.size());
bst.delete(8);
console.log("After delete 8:", bst.inOrder());
bst.clear();
console.log("After clear, size:", bst.size());
```

**Expected Outcome:**

```
[1,3,4,6,7,8,10,13,14]
true
7
7
3
9
[1,3,4,6,7,10,13,14]
0
```

### FenwickTree - Data structure for prefix sum and range update queries.

**Usage Example:**

```bash
import { FenwickTree } from "@zennal/dsa";
const arr = [1, 3, 5, 7, 9, 11];
const ft = new FenwickTree(arr);
console.log("Prefix sum up to 3:", ft.prefixSum(3));
console.log("Range sum 1-4:", ft.rangeSum(1, 4));
ft.update(2, 10);
console.log("After update, prefix sum up to 3:", ft.prefixSum(3));
console.log("Get array:", ft.getArray());
console.log("Size:", ft.getSize());
```

**Expected Outcome:**

```
16 (1+3+5+7)
20 (3+5+7+9)
Change index 2 from 5 to 10
21
[1,3,10,7,9,11]
6
```

### RedBlackTree - Self-balancing binary search tree with color properties.

**Usage Example:**

```bash
import { RedBlackTree } from "@zennal/dsa";
const rbt = new RedBlackTree((a, b) => a - b);
rbt.insert(7, 3, 18, 10, 22, 8, 11, 26);
console.log("RBT in-order:", rbt.inOrder());
console.log("Search 10:", rbt.search(10));
console.log("Find min:", rbt.findMin());
console.log("Find max:", rbt.findMax());
console.log("Size:", rbt.size());
console.log("Height:", rbt.height());
rbt.delete(18);
console.log("After delete 18:", rbt.inOrder());
rbt.clear();
console.log("After clear, size:", rbt.size());
```

**Expected Outcome:**

```
[3,7,8,10,11,18,22,26]
true
3
26
8
3
[3,7,8,10,11,22,26]
0
```

### SegmentTree - Tree for range queries and updates.

**Usage Example:**

```bash
import { SegmentTree } from "@zennal/dsa";
const stArr = [1, 3, 5, 7, 9, 11];
const st = new SegmentTree(stArr, "sum");
console.log("Range sum 1-4:", st.query(1, 4));
st.update(2, 10);
console.log("After update, range sum 1-4:", st.query(1, 4));
console.log("Get array:", st.getArray());
console.log("Size:", st.getSize());
```

**Expected Outcome:**

```
24 (3+5+7+9)
Change index 2 from 5 to 10
29
[1,3,10,7,9,11]
6
```

### Trie - Prefix tree for efficient string searching and storage.

**Usage Example:**

```bash
import { Trie } from "@zennal/dsa";
const trie = new Trie();
trie.insert("apple", "app", "application", "bat", "ball");
console.log("Search 'apple':", trie.search("apple"));
console.log("Starts with 'app':", trie.startsWith("app"));
console.log("Words with prefix 'app':", trie.wordsWithPrefix("app"));
console.log("All words:", trie.getAllWords());
console.log("Size:", trie.getAllWords().length);
console.log("Longest common prefix:", trie.longestCommonPrefix());
trie.delete("app");
console.log("After delete 'app', search 'app':", trie.search("app"));
console.log("Size after delete:", trie.getAllWords().length);
trie.clear();
console.log("After clear, size:", trie.getAllWords().length);
```

**Expected Outcome:**

```
true
true
["apple", "app", "application"]
["apple", "app", "application", "bat", "ball"]
5
""
false
4
0
```

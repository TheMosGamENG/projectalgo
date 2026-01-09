"use client";

import Image from "next/image";
import { useState } from "react";
const INF = 999999;
export default function Group1BruteForce() {
// ================= BRANCH & BOUND (TSP) =================

const INF = 999999;

const [matrixInput, setMatrixInput] = useState(
`0 20 42 35
20 0 30 34
42 30 0 12
35 34 12 0`
);

const [tspResult, setTspResult] = useState<{
  path: number[];
  cost: number;
} | null>(null);

function parseMatrix(text: string): number[][] {
  return text
    .trim()
    .split("\n")
    .map(row => row.trim().split(/\s+/).map(Number));
}

function cloneMatrix(m: number[][]): number[][] {
  return m.map(r => [...r]);
}

function reduceMatrix(matrix: number[][]): number {
  const n = matrix.length;
  let cost = 0;

  // Row reduction
  for (let i = 0; i < n; i++) {
    const minVal = Math.min(...matrix[i]);
    if (minVal !== INF && minVal > 0) {
      cost += minVal;
      for (let j = 0; j < n; j++) matrix[i][j] -= minVal;
    }
  }

  // Column reduction
  for (let j = 0; j < n; j++) {
    const col = matrix.map(r => r[j]);
    const minVal = Math.min(...col);
    if (minVal !== INF && minVal > 0) {
      cost += minVal;
      for (let i = 0; i < n; i++) matrix[i][j] -= minVal;
    }
  }

  return cost;
}

function solveTSP() {
  let matrix = parseMatrix(matrixInput);
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0 && i !== j) matrix[i][j] = INF;
    }
  }

  const start = 0;
  const rootMatrix = cloneMatrix(matrix);
  const rootCost = reduceMatrix(rootMatrix);

  let pq = [{
    path: [start],
    matrix: rootMatrix,
    cost: rootCost,
    vertex: start
  }];

  let bestCost = INF;
  let bestPath: number[] = [];

  while (pq.length) {
    pq.sort((a, b) => a.cost - b.cost);
    const node = pq.shift()!;
    if (node.cost >= bestCost) continue;

    if (node.path.length === n) {
      if (matrix[node.vertex][start] !== INF) {
        const finalCost = node.cost + matrix[node.vertex][start];
        if (finalCost < bestCost) {
          bestCost = finalCost;
          bestPath = [...node.path, start];
        }
      }
      continue;
    }

    for (let v = 0; v < n; v++) {
      if (!node.path.includes(v) && node.matrix[node.vertex][v] !== INF) {
        const newMatrix = cloneMatrix(node.matrix);

        for (let i = 0; i < n; i++) {
          newMatrix[node.vertex][i] = INF;
          newMatrix[i][v] = INF;
        }

        newMatrix[v][start] = INF;

        const newCost =
          node.cost +
          matrix[node.vertex][v] +
          reduceMatrix(newMatrix);

        pq.push({
          path: [...node.path, v],
          matrix: newMatrix,
          cost: newCost,
          vertex: v
        });
      }
    }
  }

  setTspResult({ path: bestPath, cost: bestCost });
}


// ================= FIBONACCI =================

const [fibN, setFibN] = useState(10);
const [fibResult, setFibResult] = useState(55);

const calculateFib = () => {
  let a = 0, b = 1;
  for (let i = 2; i <= fibN; i++) {
    [a, b] = [b, a + b];
  }
  setFibResult(fibN <= 1 ? fibN : b);
};

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-amber-400">
          Algorithmic Strategies
        </h1>
        <p className="text-amber-300 text-lg sm:text-2xl mt-4">
          Group 1 – Brute Force
        </p>
      </section>

      {/* WHAT IS BRUTE FORCE */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-400">
            What is Brute Force?
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Tries every possible solution</li>
            <li>No shortcuts or optimizations</li>
            <li>Guaranteed correctness</li>
          </ul>

          <div className="flex justify-center">
            <Image
              src="/brute-force-attacks.png"
              alt="Brute Force Example"
              width={380}
              height={240}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-amber-400 py-20 px-4 sm:px-8 text-black">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            How It Works
          </h2>

          <ol className="list-decimal list-inside space-y-2">
            <li>Generate all possible solutions</li>
            <li>Test each candidate</li>
            <li>Stop when the answer is found</li>
          </ol>
        </div>
      </section>

      {/* PROS & CONS */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-neutral-900 p-6 border-l-4 border-green-400">
            <h3 className="text-xl font-bold text-green-400 mb-2">
              Advantages
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Easy to implement</li>
              <li>No complex logic</li>
            </ul>
          </div>

          <div className="bg-neutral-900 p-6 border-l-4 border-red-400">
            <h3 className="text-xl font-bold text-red-400 mb-2">
              Disadvantages
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Very slow for large inputs</li>
              <li>High time complexity</li>
            </ul>
          </div>

        </div>
      </section>

      

      {/* GREEDY ALGORITHMS */}
      <section className="bg-black py-20 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-400">
            Greedy Algorithms
          </h2>

          <p className="text-gray-300">
            Greedy algorithms make the best local choice at each step,
            hoping to reach a global optimum.
          </p>

          <div className="aspect-video rounded overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/HzeK7g8cD0Y"
              title="Greedy Algorithms"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* DIVIDE AND CONQUER */}
      <section className="bg-amber-400 py-20 px-4 sm:px-8 text-black">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Divide and Conquer
          </h2>

          <p>
            This strategy solves problems by breaking them into smaller
            subproblems, solving them recursively, and combining results.
          </p>

          <div className="aspect-video rounded overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2Rr2tW9zvRg"
              title="Divide and Conquer"
              allowFullScreen
            />
          </div>
        </div>
      </section>

        
         {/* ================= DYNAMIC PROGRAMMING ================= */}
<section className="min-h-screen bg-amber-400 flex items-center justify-center px-4 text-center">
  <div className="max-w-3xl">
    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-black">
      Dynamic Programming
    </h1>
    <p className="mt-4 text-lg sm:text-xl font-medium text-black">
      Solving complex problems by breaking them into overlapping subproblems
    </p>
  </div>
</section>

<section className="bg-black py-20 px-4 sm:px-8">
  <div className="max-w-6xl mx-auto space-y-16">

    {/* Understanding DP */}
    <section>
      <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-4">
        Understanding Dynamic Programming
      </h2>
      <p className="text-gray-300 max-w-3xl">
        Dynamic Programming (DP) is best suited for optimization problems where
        results from smaller subproblems are reused to avoid repeated work.
      </p>

      <blockquote className="border-l-4 border-amber-400 bg-neutral-900 p-4 italic my-6 text-gray-200">
        “Those who cannot remember the past are condemned to repeat it.”
      </blockquote>
    </section>

    {/* Two Pillars */}
    <section>
      <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-6">
        The Two Core Pillars
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-neutral-900 p-6 border-t-4 border-amber-400">
          <h3 className="font-semibold text-amber-300 mb-2">
            Overlapping Subproblems
          </h3>
          <p className="text-gray-300">
            The same smaller problems appear repeatedly.
          </p>
        </div>

        <div className="bg-neutral-900 p-6 border-t-4 border-amber-400">
          <h3 className="font-semibold text-amber-300 mb-2">
            Optimal Substructure
          </h3>
          <p className="text-gray-300">
            Optimal solutions are built from optimal sub-solutions.
          </p>
        </div>
      </div>
    </section>

    {/* Examples */}
    <section>
      <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-4">
        Classic Examples
      </h2>

      <ul className="list-disc list-inside space-y-3 text-gray-300">
        <li><strong>Fibonacci:</strong> O(2ⁿ) → <span className="text-amber-400">O(n)</span></li>
        <li><strong>0/1 Knapsack:</strong> resource optimization</li>
        <li><strong>LCS:</strong> string comparison</li>
      </ul>
    </section>

    {/* Code */}
    <section>
      <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-4">
        Fibonacci (Bottom-Up)
      </h2>

      <pre className="bg-neutral-950 text-amber-400 p-4 rounded-lg overflow-x-auto text-sm">
{`def fibonacci_dp(n):
    dp = [0, 1]
    for i in range(2, n + 1):
        dp.append(dp[i-1] + dp[i-2])
    return dp[n]`}
      </pre>
    </section>

  </div>
</section>
{/* FIBONACCI DEMO */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-md mx-auto bg-neutral-900 p-6 rounded">
          <h3 className="text-center font-bold text-amber-400 mb-4">
            Fibonacci Calculator
          </h3>

          <div className="flex justify-center gap-3">
            <input
              type="number"
              value={fibN}
              onChange={(e) => setFibN(Number(e.target.value))}
              className="w-24 p-2 border border-amber-400 bg-black text-amber-400"
            />
            <button
              onClick={calculateFib}
              className="bg-amber-400 text-black px-4 py-2 font-bold"
            >
              Calculate
            </button>
          </div>

          <p className="text-center mt-4 text-amber-300">
            FibonacciResult: {fibResult}
          </p>
        </div>
      </section>

        
          
        
        
         {/* ================= BACKTRACKING ================= */}
<section className="min-h-screen bg-black flex items-center justify-center px-4 text-center">
  <div className="max-w-3xl">
    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-amber-400">
      Backtracking
    </h1>
    <p className="mt-4 text-lg sm:text-xl text-gray-300">
      Exploring solutions step-by-step and undoing choices when they fail
    </p>
  </div>
</section>

<section className="bg-black py-20 px-4 sm:px-8">
  <div className="max-w-6xl mx-auto space-y-16">

    {/* What is Backtracking */}
    <section>
      <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-4">
        What is Backtracking?
      </h2>

      <div className="bg-neutral-900 border-2 border-amber-400 rounded-lg p-6">
        <p className="text-gray-300 mb-3">
          Backtracking builds solutions incrementally and abandons paths that
          violate constraints.
        </p>
        <p className="text-gray-300">
          It avoids unnecessary exploration by stopping early.
        </p>
      </div>
    </section>

    {/* How it works */}
    <section>
      <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-4">
        How It Works
      </h2>

      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li>Choose a possible option</li>
        <li>Check if it follows the rules</li>
        <li>If valid → continue</li>
        <li>If invalid → undo (backtrack)</li>
      </ul>
    </section>

    {/* Use cases */}
    <section>
      <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-4">
        Common Use Cases
      </h2>

      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li><span className="text-amber-400">N-Queens</span> problem</li>
        <li><span className="text-amber-400">Sudoku</span> solving</li>
        <li><span className="text-amber-400">Maze</span> pathfinding</li>
      </ul>
    </section>
    <div className="aspect-video rounded-lg overflow-hidden">
<iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/G_UYXzGuqvM"
  title="Backtracking Algorithm Explained"
  allowFullScreen
/>
</div>
  </div>
</section>

     

        
          {/* ================= BRANCH AND BOUND ================= */}
<section className="min-h-screen bg-amber-400 flex items-center justify-center px-4 text-center">
  <div className="max-w-3xl">
    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-black">
      Branch and Bound
    </h1>
    <p className="mt-4 text-lg sm:text-xl font-medium text-black">
      An optimization strategy that avoids exploring useless solution paths
    </p>
  </div>
</section>

<section className="bg-black py-20 px-4 sm:px-8">
  <div className="max-w-5xl mx-auto space-y-10">

    <h2 className="text-3xl sm:text-4xl font-bold text-amber-400">
      What is Branch and Bound?
    </h2>

    <p className="text-gray-300 text-lg">
      Branch and Bound systematically explores solution spaces while pruning
      paths that cannot improve the current best solution.
    </p>

    <h3 className="text-2xl font-bold text-amber-300">
      How It Works
    </h3>

    <ol className="list-decimal list-inside text-gray-300 space-y-2">
      <li>Split the problem into smaller subproblems (branch)</li>
      <li>Compute bounds for each branch</li>
      <li>Discard branches that cannot yield better solutions</li>
      <li>Continue until the optimal solution is found</li>
    </ol>

    <h3 className="text-2xl font-bold text-amber-300">
      Common Applications
    </h3>

    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>Traveling Salesman Problem (TSP)</li>
      <li>0/1 Knapsack Problem</li>
      <li>Scheduling and resource allocation</li>
    </ul>

    

    {/* REMOVE OR REPLACE VIDEO HERE IF NEEDED */}
    <div className="aspect-video rounded-lg overflow-hidden">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/XZbrmetb9VE"
        title="Branch and Bound Explained"
        allowFullScreen
      />
    </div>


  </div>
  <section className="bg-black text-yellow-400 py-20 px-4">
  <div className="max-w-4xl mx-auto space-y-6">

    <h1 className="text-3xl sm:text-4xl font-bold text-center">
      Branch & Bound – Traveling Salesman Problem
    </h1>

    <p className="text-gray-300 text-center">
      Enter an adjacency matrix (use 0 or INF where no path exists)
    </p>

    <textarea
      className="w-full h-32 p-4 rounded-lg bg-neutral-900 text-yellow-400 border border-yellow-400 outline-none"
      value={matrixInput}
      onChange={(e) => setMatrixInput(e.target.value)}
    />

    <div className="text-center">
      <button
        onClick={solveTSP}
        className="bg-yellow-400 text-black px-6 py-3 font-bold rounded-lg hover:bg-yellow-300 transition"
      >
        Run Branch & Bound
      </button>
    </div>

    {tspResult && (
      <div className="bg-neutral-900 border border-yellow-400 rounded-lg p-6 space-y-2">
        <h2 className="text-xl font-bold">Result</h2>

        <p>
          <strong>Best Path:</strong>{" "}
          <span className="font-mono">
            {tspResult.path.join(" → ")}
          </span>
        </p>

        <p>
          <strong>Total Cost:</strong>{" "}
          <span className="font-mono">
            {tspResult.cost}
          </span>
        </p>
      </div>
    )}

  </div>
</section>

</section>
<main className="bg-black text-gray-200">

      {/* HEADER */}
      <header className="bg-gradient-to-b from-black to-yellow-400 text-center py-20 px-4">
        <h1 className="text-4xl sm:text-6xl font-bold text-yellow-400">
          Divide and Conquer
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-black font-semibold">
          Algorithm Design Technique using C Language
        </p>
      </header>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-4 py-20 space-y-10">

        {/* WHAT IS */}
        <div className="bg-neutral-900 p-6 rounded-xl border border-yellow-400">
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">
            What is Divide and Conquer?
          </h2>
          <p>
            Divide and Conquer is an algorithmic technique where a problem is
            broken into smaller subproblems, each subproblem is solved, and the
            results are combined to solve the original problem.
          </p>
        </div>

        {/* STEPS */}
        <div className="bg-neutral-900 p-6 rounded-xl border border-yellow-400">
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">
            Three Main Steps
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Divide</strong> – Split the problem into smaller parts</li>
            <li><strong>Conquer</strong> – Solve each part (often using recursion)</li>
            <li><strong>Combine</strong> – Merge the solutions</li>
          </ol>
        </div>

        {/* BINARY SEARCH */}
        <div className="bg-neutral-900 p-6 rounded-xl border border-yellow-400">
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">
            Example 1: Binary Search (C)
          </h2>
          <p className="mb-4">
            Binary Search repeatedly divides the array into half to find a target value.
          </p>

          <pre className="bg-black text-yellow-400 p-4 rounded-lg overflow-x-auto text-sm">
{`int binarySearch(int arr[], int left, int right, int target) {
  if (left <= right) {
    int mid = (left + right) / 2;

    if (arr[mid] == target)
      return mid;
    if (arr[mid] > target)
      return binarySearch(arr, left, mid - 1, target);
    else
      return binarySearch(arr, mid + 1, right, target);
  }
  return -1;
}`}
          </pre>
        </div>

        {/* MERGE SORT */}
        <div className="bg-neutral-900 p-6 rounded-xl border border-yellow-400">
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">
            Example 2: Merge Sort (C)
          </h2>
          <p className="mb-4">
            Merge Sort divides the array into halves, sorts them, and merges them back.
          </p>

          <pre className="bg-black text-yellow-400 p-4 rounded-lg overflow-x-auto text-sm">
{`void mergeSort(int arr[], int left, int right) {
  if (left < right) {
    int mid = (left + right) / 2;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}`}
          </pre>
        </div>

        {/* ADVANTAGES */}
        <div className="bg-neutral-900 p-6 rounded-xl border border-yellow-400">
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">
            Advantages of Divide and Conquer
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Efficient for large problems</li>
            <li>Easy to implement using recursion</li>
            <li>Used in many fast algorithms</li>
          </ul>
        </div>

        {/* CONCLUSION */}
        <div className="bg-neutral-900 p-6 rounded-xl border border-yellow-400">
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">
            Conclusion
          </h2>
          <p>
            Divide and Conquer is a powerful strategy in computer science.
            Algorithms like Binary Search and Merge Sort show how breaking problems
            into smaller parts makes solutions faster and easier to manage.
          </p>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-900 border-t border-yellow-400 text-center py-6 text-sm text-gray-400">
        Divide and Conquer Presentation | C Language
      </footer>

    </main>

        
          {/* ================= RANDOMIZED ALGORITHMS ================= */}
<section className="min-h-screen bg-black flex items-center justify-center px-4 text-center">
  <div className="max-w-3xl">
    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-amber-400">
      Randomized Algorithms
    </h1>
    <p className="mt-4 text-lg sm:text-xl text-gray-300">
      Algorithms that use randomness to improve efficiency or simplicity
    </p>
  </div>
</section>

<section className="bg-black py-20 px-4 sm:px-8">
  <div className="max-w-5xl mx-auto space-y-10">

    <h2 className="text-3xl sm:text-4xl font-bold text-amber-400">
      What are Randomized Algorithms?
    </h2>

    <p className="text-gray-300 text-lg">
      Randomized algorithms make random choices during execution. Their
      correctness or performance is evaluated probabilistically.
    </p>

    <h3 className="text-2xl font-bold text-amber-300">
      Key Characteristics
    </h3>

    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>Uses randomness as part of the logic</li>
      <li>Often faster on average</li>
      <li>Results may vary between executions</li>
    </ul>

    <h3 className="text-2xl font-bold text-amber-300">
      Types
    </h3>

    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li><strong className="text-amber-400">Las Vegas:</strong> Always correct, runtime varies</li>
      <li><strong className="text-amber-400">Monte Carlo:</strong> Fast, small probability of error</li>
    </ul>

    <h3 className="text-2xl font-bold text-amber-300">
      Common Examples
    </h3>

    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>Randomized Quick Sort</li>
      <li>Randomized Primality Testing</li>
      <li>Hashing algorithms</li>
    </ul>

    {/* REMOVE OR REPLACE VIDEO HERE IF NEEDED */}
    <div className="aspect-video rounded-lg overflow-hidden">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/x8QnRG0Tx_o"
        title="Randomized Algorithms Explained"
        allowFullScreen
      />
    </div>

  </div>
</section>


        
        </div>
     );
    }
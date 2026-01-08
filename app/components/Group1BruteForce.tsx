"use client";

import Image from "next/image";
import { useState } from "react";

export default function Group1BruteForce() {
  const [n, setN] = useState(10);
  const [result, setResult] = useState(55);

  const calculateFib = () => {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      [a, b] = [b, a + b];
    }
    setResult(n <= 1 ? n : b);
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
              value={n}
              onChange={(e) => setN(Number(e.target.value))}
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
            Result: {result}
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
</section>


        
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
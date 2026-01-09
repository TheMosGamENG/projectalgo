"use client";

import { useState } from "react";

export default function RandomizedQuickSort() {
  const [originalArray] = useState<number[]>([9, 4, 7, 1, 3, 6, 2]);
  const [sortedArray, setSortedArray] = useState<number[] | null>(null);

  function randomizedQuickSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    // Random pivot
    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex];

    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < arr.length; i++) {
      if (i === pivotIndex) continue;
      if (arr[i] < pivot) left.push(arr[i]);
      else right.push(arr[i]);
    }

    return [
      ...randomizedQuickSort(left),
      pivot,
      ...randomizedQuickSort(right),
    ];
  }

  function handleSort() {
    const result = randomizedQuickSort([...originalArray]);
    setSortedArray(result);
  }

  return (
    <section className="bg-black text-yellow-400 py-20 px-4">
      <div className="max-w-xl mx-auto space-y-6 text-center">

        <h2 className="text-3xl sm:text-4xl font-bold">
          Randomized Quick Sort
        </h2>

        <p className="text-gray-300">
          A version of Quick Sort that chooses a random pivot to improve
          average-case performance.
        </p>

        <div className="bg-neutral-900 border border-yellow-400 rounded-lg p-4">
          <p>
            <strong>Original Array:</strong>{" "}
            <span className="font-mono">
              {originalArray.join(", ")}
            </span>
          </p>

          {sortedArray && (
            <p className="mt-2">
              <strong>Sorted Array:</strong>{" "}
              <span className="font-mono">
                {sortedArray.join(", ")}
              </span>
            </p>
          )}
        </div>

        <button
          onClick={handleSort}
          className="bg-yellow-400 text-black px-6 py-3 font-bold rounded-lg hover:bg-yellow-300 transition"
        >
          Run Randomized Quick Sort
        </button>

      </div>
    </section>
  );
}

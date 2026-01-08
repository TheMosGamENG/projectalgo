"use client";

export default function Group3TimeComplexity() {
  return (
    <>
      <section
        id="group-3"
        className="bg-black text-red-400 px-4 sm:px-8 md:px-10 py-20"
      >
        <div className="max-w-6xl mx-auto space-y-20">

          {/* HEADER */}
          <div className="text-center animate-fadeIn">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6">
              Time Complexity
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
              Time complexity describes how the running time of an algorithm grows
              as the input size increases. Big-O notation focuses on the worst-case
              scenario and ignores constants.
            </p>
          </div>

          {/* BIG-O LIST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {[
              {
                title: "O(1) – Constant Time",
                desc: "Runtime does not change with input size.",
                code: `x = arr[0]`,
              },
              {
                title: "O(log n) – Logarithmic Time",
                desc: "Input size is reduced each step.",
                extra: "Example: Binary Search",
              },
              {
                title: "O(n) – Linear Time",
                desc: "Runtime grows directly with input size.",
                code: `for i in arr:\n    print(i)`,
              },
              {
                title: "O(n log n) – Linearithmic Time",
                desc: "Common in efficient sorting algorithms.",
                extra: "Example: Merge Sort, Quick Sort (avg)",
              },
              {
                title: "O(n²) – Quadratic Time",
                desc: "Uses nested loops.",
                code: `for i in range(n):\n    for j in range(n):\n        print(i, j)`,
              },
              {
                title: "O(2ⁿ) – Exponential Time",
                desc: "Time doubles with each additional input.",
                extra: "Example: Recursive Fibonacci (naive)",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-neutral-900 p-6 rounded-lg border-l-4 border-red-500
                           transition-all duration-300 hover:scale-[1.02]"
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-300 mb-2">{item.desc}</p>

                {item.code && (
                  <pre className="bg-black text-red-400 p-3 rounded text-sm overflow-x-auto">
                    {item.code}
                  </pre>
                )}

                {item.extra && (
                  <p className="text-red-400 font-semibold mt-2">
                    {item.extra}
                  </p>
                )}
              </div>
            ))}

            {/* O(n!) */}
            <div className="bg-neutral-900 p-6 rounded-lg border-l-4 border-red-500 md:col-span-2
                            transition-all duration-300 hover:scale-[1.02]">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                O(n!) – Factorial Time
              </h2>
              <p className="text-gray-300">
                Grows extremely fast. Often impractical.
              </p>
              <p className="text-red-400 font-semibold mt-2">
                Example: Generating all permutations
              </p>
            </div>
          </div>

          {/* WHY IMPORTANT */}
          <div className="bg-neutral-900 p-8 rounded-lg transition-all duration-300 hover:scale-[1.01]">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Why Big-O Is Important
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Helps compare algorithms</li>
              <li>Predicts performance for large inputs</li>
              <li>Essential in software engineering</li>
              <li>Important in competitive programming</li>
            </ul>
          </div>

          {/* SIMPLE SUMMARY */}
          <div className="text-center">
            <p className="text-base sm:text-lg text-gray-300">
              <span className="text-red-400 font-bold">Small inputs</span> → any algorithm works  
              <br />
              <span className="text-red-400 font-bold">Large inputs</span> → efficient Big-O matters
            </p>
          </div>

          {/* VIDEOS */}
          <section id="videos" className="space-y-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              Video Tutorials
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "https://www.youtube.com/embed/D6xkbGLQesk",
                "https://www.youtube.com/embed/9TlHvipP5yA",
              ].map((src, i) => (
                <div
                  key={i}
                  className="aspect-video rounded-xl overflow-hidden
                             transition-all duration-300 hover:scale-[1.02]"
                >
                  <iframe
                    className="w-full h-full"
                    src={src}
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </section>

        </div>
      </section>
    </>
  );
}

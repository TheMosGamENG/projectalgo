"use client";

export default function Group2Algorithms() {
  return (
    <>
      {/* HERO */}
      <section className="h-screen bg-slate-950 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-cyan-400">
          ALGORITHMS
        </h1>
        <p className="text-cyan-200 text-lg sm:text-2xl md:text-4xl mt-4">
          GROUP 2
        </p>
      </section>

      {/* INTRO */}
      <section className="min-h-screen bg-slate-900 py-24 px-4 sm:px-8 flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-cyan-400 mb-8 text-center">
          What is an Algorithm?
        </h1>

        <p className="text-cyan-200 text-base sm:text-xl md:text-2xl max-w-4xl text-center mb-10">
          An algorithm is a step-by-step set of instructions used to solve a problem
          or perform a task efficiently.
        </p>

        <div className="bg-slate-800 p-8 rounded-xl max-w-4xl transition hover:scale-[1.02]">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4">
            Why Algorithms Matter
          </h2>
          <ul className="text-cyan-200 text-lg sm:text-xl list-disc list-inside space-y-2">
            <li>Improve performance and efficiency</li>
            <li>Handle large data effectively</li>
            <li>Used in databases, search engines, and apps</li>
          </ul>
        </div>
      </section>

      {/* SEARCHING */}
      <section className="min-h-screen bg-slate-950 py-24 px-4 sm:px-8 flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-cyan-400 mb-12 text-center">
          Searching Algorithms
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl">

          {[
            {
              title: "Linear Search",
              desc: "Checks each element one by one until the target is found.",
              tc: "O(n)",
              video: "https://www.youtube.com/embed/246V51AWwZM",
            },
            {
              title: "Binary Search",
              desc: "Efficient search that divides a sorted array in half.",
              tc: "O(log n)",
              video: "https://www.youtube.com/embed/P3YID7liBug",
            },
          ].map((algo, i) => (
            <div
              key={i}
              className="bg-slate-800 p-6 rounded-xl transition hover:scale-[1.03]"
            >
              <h2 className="text-2xl font-bold text-cyan-300 mb-3">
                {algo.title}
              </h2>
              <p className="text-cyan-200 mb-2">{algo.desc}</p>
              <p className="text-cyan-400 font-semibold mb-4">
                Time Complexity: {algo.tc}
              </p>

              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe className="w-full h-full" src={algo.video} allowFullScreen />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SORTING */}
      <section className="min-h-screen bg-slate-900 py-24 px-4 sm:px-8 flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-cyan-400 mb-12 text-center">
          Sorting Algorithms
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl">
          {[
            ["Bubble Sort", "xli_FI7CuzA"],
            ["Selection Sort", "GUDLRan2DWM"],
            ["Insertion Sort", "JU767SDMDvA"],
            ["Merge Sort", "4VqmGXwpLqc"],
            ["Quick Sort", "Hoixgm4-P4M"],
            ["Heap Sort", "2DmK_H7IdTo"],
          ].map(([name, id]) => (
            <div
              key={name}
              className="bg-slate-800 p-6 rounded-xl text-center transition hover:scale-[1.03]"
            >
              <h2 className="text-xl font-bold text-cyan-300 mb-3">{name}</h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GRAPH & STRING */}
      <section className="min-h-screen bg-slate-950 py-24 px-4 sm:px-8 flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-cyan-400 mb-12 text-center">
          Graph & String Algorithms
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl">
          {[
            {
              title: "Graph Algorithms",
              items: [
                "Dijkstra – Shortest Path",
                "Bellman-Ford – Negative weights",
                "BFS & DFS – Traversal",
                "Prim & Kruskal – MST",
              ],
            },
            {
              title: "String Algorithms",
              items: [
                "KMP – Pattern matching",
                "Rabin-Karp – Hash search",
                "Trie – Autocomplete",
              ],
            },
          ].map((block, i) => (
            <div
              key={i}
              className="bg-slate-800 p-6 rounded-xl transition hover:scale-[1.02]"
            >
              <h2 className="text-2xl font-bold text-cyan-300 mb-4">
                {block.title}
              </h2>
              <ul className="text-cyan-200 list-disc list-inside space-y-2">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
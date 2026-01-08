"use client";
import Image from "next/image";

export default function Group4Figma() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="h-screen bg-emerald-950 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-emerald-400 text-center animate-fadeInUp">
          FIGMA
        </h1>
        <p className="text-lg sm:text-2xl md:text-4xl text-emerald-200 mt-4 text-center">
          GROUP 4
        </p>
      </section>

      {/* ================= WHAT IS FIGMA ================= */}
      <section className="min-h-screen bg-gray-950 py-20 px-4 sm:px-8 flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-emerald-400 mb-8 text-center">
          What is Figma?
        </h1>

        <ul className="text-base sm:text-xl md:text-2xl text-emerald-200 max-w-4xl list-disc list-inside space-y-3 mb-10">
          <li>Cloud-based UI/UX design & prototyping tool</li>
          <li>Real-time collaboration</li>
          <li>Runs directly in the browser</li>
          <li>Used by designers & developers</li>
        </ul>

        <Image
          src="/figma-logo.png"
          alt="Figma Logo"
          width={260}
          height={160}
          className="rounded-xl shadow-xl mb-10"
        />

        {/* Embedded Video */}
        <div className="aspect-video w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/FM293ZaB4mg"
            title="What is Figma"
            allowFullScreen
          />
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="min-h-screen bg-emerald-950 px-4 sm:px-8 py-20 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-emerald-400 mb-12 text-center">
            Key Features
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["Real-Time Collaboration", "Multiple users edit together"],
              ["Components", "Reusable design elements"],
              ["Auto Layout", "Responsive UI design"],
              ["Prototyping", "Clickable interactions"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-emerald-900/40 p-6 rounded-xl text-emerald-200 transition-all duration-300 hover:scale-[1.02]"
              >
                <strong className="block text-lg sm:text-2xl mb-2">
                  {title}
                </strong>
                <p className="text-sm sm:text-lg">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DESIGNERS & DEVELOPERS ================= */}
      <section className="min-h-screen bg-gray-950 px-4 sm:px-8 py-20 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-emerald-400 mb-12 text-center">
            Designers & Developers
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "For Designers",
                items: ["Wireframes", "Design systems", "Visual layouts"],
              },
              {
                title: "For Developers",
                items: ["Inspect Mode", "Asset export", "Design handoff"],
              },
            ].map((box) => (
              <div
                key={box.title}
                className="bg-emerald-900/40 p-8 rounded-xl transition-all hover:scale-[1.02]"
              >
                <h2 className="text-xl sm:text-3xl font-bold text-emerald-300 mb-4">
                  {box.title}
                </h2>
                <ul className="list-disc list-inside text-sm sm:text-lg text-emerald-200 space-y-2">
                  {box.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= UI/UX PROCESS + VIDEOS ================= */}
      <section className="min-h-screen bg-emerald-950 px-4 sm:px-8 py-20">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-emerald-400 mb-12 text-center">
          Designing UI/UX with Figma
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Wireframes",
              video: "FTFaQWZBqQ8",
            },
            {
              title: "UI Design",
              video: "jwCmIBJ8Jtc",
            },
            {
              title: "UI/UX Principles",
              video: "c9Wg6Cb_YlU",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-emerald-900/40 p-6 rounded-xl transition-all hover:scale-[1.02]"
            >
              <h2 className="text-lg sm:text-2xl font-bold text-emerald-300 mb-4">
                {item.title}
              </h2>

              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${item.video}`}
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

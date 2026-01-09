import Group1BruteForce from "./components/Group1BruteForce";
import Group2Algorithms from "./components/Group2Algorithms";
import Group3TimeComplexity from "./components/Group3TimeComplexity";
import Group4Figma from "./components/Group4Figma";
import RandomizedQuickSort from "./components/RandomizedQuickSort";

export default function Home() {
  return (
    <main className="w-full">
      <Group1BruteForce />
      <RandomizedQuickSort/>
      <Group2Algorithms />
      <Group3TimeComplexity />
      <Group4Figma />
    </main>
  );
}
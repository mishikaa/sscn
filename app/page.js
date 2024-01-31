import Link from "next/link";
import {Implementation} from "@/components/Implementation";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Implementation />
    </main>
  );
}

import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About — Lintrotech",
  description: "The story, operating principles, and people behind Lintrotech.",
};

export default function AboutPage() {
  return <AboutClient />;
}

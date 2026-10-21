import type { Metadata } from "next";
import WorkPage from "@/app/work/page";

export const metadata: Metadata = {
  title: "Portfolio — Lintrotech",
  description:
    "Explore selected works, software engineering, and brand identities shipped by Lintrotech.",
};

export default function PortfolioPage() {
  return <WorkPage />;
}

import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — Lintrotech",
  description: "Start a conversation with Lintrotech. Let's build something worth shipping.",
};

export default function ContactPage() {
  return <ContactClient />;
}

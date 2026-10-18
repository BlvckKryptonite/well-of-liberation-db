import { IconChevronDown } from "@tabler/icons-react";
import { Link } from "react-router";

export function meta() {
  return [{ title: "FAQ | Well of Liberation" }];
}

const FAQS = [
  {
    question: "How can I make a donation?",
    answer:
      "You can donate directly through our website using the 'Donate Now' button. We accept all major credit cards and PayPal for secure transactions.",
  },
  {
    question: "Where does my donation go?",
    answer:
      "Your donation is used to fund our core initiatives, one mission at a time. Health supplies, clean water access, maternal care, and community education programs.",
  },
  {
    question: "Is this a religious organization?",
    answer:
      "No, this is not a religious organization. Our focus is helping vulnerable people from a human rights point of view, where all humans are seen as equal.",
  },
  {
    question: "How do you select the communities you serve?",
    answer:
      "We prioritize communities based on urgent needs assessment, as well as focusing on access to basic human rights like clean water, healthcare, and safe environments.",
  },
];

export default function FaqRoute() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-5 pb-10 pt-16 text-center md:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Help center
        </p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-6xl">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Answers to common questions about our mission, donations and how you can
          support our local communities.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-24">
        <div className="divide-y divide-border rounded-3xl border border-border bg-card px-6 md:px-10">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group py-6">
              <summary className="flex cursor-pointer select-none list-none items-center justify-between gap-6 text-left text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary transition group-open:rotate-180">
                  <IconChevronDown size={18} />
                </span>
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-muted-foreground">
            Still have questions? Reach out to our dedicated support team.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-block select-none rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}

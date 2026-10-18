import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router";

import { SITE_IMAGES } from "@/lib/site-assets";

export function meta() {
  return [
    { title: "Well of Liberation | Humanitarian vision" },
    {
      name: "description",
      content:
        "Well of Liberation is a humanitarian initiative supporting vulnerable communities with clean water, healthcare, education and lasting opportunity.",
    },
  ];
}

const PILLARS = [
  {
    title: "Empower",
    body: "Give people the essential support they need to strengthen their immediate wellbeing.",
    image: SITE_IMAGES.field1,
    alt: "Relief supplies stacked for distribution",
  },
  {
    title: "Restore",
    body: "Help communities rebuild and recover step by step after tragedies.",
    image: SITE_IMAGES.field2,
    alt: "Shelter camp with families in the community",
  },
  {
    title: "Build",
    body: "Invest in long-term development: clean water, education, healthcare and safe environments.",
    image: SITE_IMAGES.field3,
    alt: "Aerial view of a planned shelter site",
  },
];

export default function HomeRoute() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 pt-6 md:pt-10 lg:px-8">
        <div className="relative isolate flex min-h-[600px] items-center overflow-hidden rounded-[2rem] shadow-2xl md:min-h-[680px]">
          <img
            src={SITE_IMAGES.heroBanner}
            alt="Children and community members gathered together"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent" />
          <div className="max-w-2xl px-8 py-16 text-primary-foreground md:px-16">
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              It&rsquo;s time to <span className="text-accent">change lives.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/90">
              Join the movement. Be part of a legacy of transforming lives forever,
              one community at a time.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/make-a-difference"
                className="select-none rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-sm transition hover:brightness-105"
              >
                Donate now
              </Link>
              <Link
                to="/mission"
                className="inline-flex select-none items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold transition hover:bg-primary-foreground/10"
              >
                Our mission <IconArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <img
          src={SITE_IMAGES.smallActs}
          alt="Women from a community supported by Well of Liberation"
          className="w-full rounded-3xl object-cover shadow-xl"
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Our mission
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Small acts of generosity create lasting legacies.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Hope flows where compassion meets action. We aspire to see communities
            restored after tragedies and supported for the long term, with access
            to clean water, education, healthcare and other essential resources.
          </p>
          <Link
            to="/mission"
            className="mt-8 inline-flex select-none items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
          >
            Read our mission <IconArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Empower. Restore. Build.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our work moves through three steps: meeting urgent needs, rebuilding
              after crisis, and laying the foundations for long-term development.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PILLARS.map((pillar, index) => (
              <div
                key={pillar.title}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
              >
                <img
                  src={pillar.image}
                  alt={pillar.alt}
                  className="h-64 w-full object-cover"
                />
                <div className="p-8">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 text-2xl font-bold">{pillar.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-primary px-8 py-14 text-primary-foreground md:flex-row md:items-center md:px-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Be part of a legacy of transforming lives forever.
            </h2>
            <p className="mt-4 text-primary-foreground/75">
              Have questions about how we work or where donations go? Our FAQ
              covers the basics.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/make-a-difference"
              className="select-none rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition hover:brightness-105"
            >
              Join the movement
            </Link>
            <Link
              to="/faq"
              className="select-none rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold transition hover:bg-primary-foreground/10"
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

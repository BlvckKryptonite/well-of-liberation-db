import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router";

import { SITE_IMAGES } from "@/lib/site-assets";

export function meta() {
  return [{ title: "Our Mission | Well of Liberation" }];
}

const AREAS = [
  "Clean water access",
  "Education",
  "Healthcare",
  "Pregnancy and maternal care",
  "Other essential resources",
];

export default function MissionRoute() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 md:pt-24 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Missions
        </p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-7xl">
          Our Mission
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Well of Liberation is a humanitarian initiative committed to supporting
            vulnerable communities and creating opportunities.
          </p>
          <p>
            Our ambition is to provide essential support to people in need,
            strengthening both immediate wellbeing and long-term development.
          </p>
          <p>
            The mission and vision for Well of Liberation is rooted in the
            principles of hope, love, peace, collective liberation, equality and
            human rights.
          </p>
          <p>
            Step by step, we aspire to see communities restored after tragedies, and
            to support long-term development for communities in need of greater
            access to:
          </p>
          <ul className="grid gap-3 pt-2 sm:grid-cols-2">
            {AREAS.map((area) => (
              <li
                key={area}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-base font-medium text-foreground"
              >
                <span className="h-2 w-2 rounded-full bg-accent" />
                {area}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={SITE_IMAGES.smallActs}
          alt="Women from a community supported by Well of Liberation"
          className="w-full self-start rounded-3xl object-cover shadow-xl"
        />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <img
            src={SITE_IMAGES.field1}
            alt="Relief supplies stacked for distribution"
            className="h-72 w-full rounded-3xl object-cover md:h-96"
          />
          <img
            src={SITE_IMAGES.field2}
            alt="Shelter camp with families in the community"
            className="h-72 w-full rounded-3xl object-cover md:h-96"
          />
          <img
            src={SITE_IMAGES.field3}
            alt="Aerial view of a planned shelter site"
            className="h-72 w-full rounded-3xl object-cover md:h-96"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-accent/15 px-8 py-12 md:flex-row md:items-center md:px-14">
          <p className="max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
            Hope flows where compassion meets action.
          </p>
          <Link
            to="/make-a-difference"
            className="inline-flex select-none items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Make a difference <IconArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

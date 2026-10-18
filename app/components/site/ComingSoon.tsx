import { Link } from "react-router";

export function ComingSoon({ title }: { title: string }) {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
        Coming soon
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
        Content for this page is coming soon. In the meantime, explore our
        mission or see how you can help.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="select-none rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Back to home
        </Link>
        <Link
          to="/mission"
          className="select-none rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:bg-secondary"
        >
          Our mission
        </Link>
      </div>
    </section>
  );
}

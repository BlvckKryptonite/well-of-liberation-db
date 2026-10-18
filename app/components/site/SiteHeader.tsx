import {
  IconChevronDown,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F9d00a4475b9148b586b0f1030cbea4c8%2F3334ec4aed7a4da491ee551032c35dc2?format=webp&width=800&height=1200";

type NavItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string }[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Humanitarian vision", to: "/" },
  {
    label: "About us",
    children: [{ label: "Contact us", to: "/contact" }],
  },
  {
    label: "Missions",
    children: [{ label: "Our mission", to: "/mission" }],
  },
  { label: "Make a difference", to: "/make-a-difference" },
  { label: "FAQ", to: "/faq" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `select-none whitespace-nowrap text-sm font-medium transition-colors hover:text-primary ${
    isActive ? "text-primary underline underline-offset-8" : "text-foreground/80"
  }`;

function DesktopDropdown({ item }: { item: NavItem }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex select-none items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
      >
        {item.label}
        <IconChevronDown size={14} />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-48 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-xl border border-border bg-card p-2 shadow-lg">
          {item.children?.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              className="block select-none rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center" onClick={close}>
          <img
            src={LOGO_URL}
            alt="Well of Liberation"
            className="h-14 w-auto mix-blend-multiply md:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.label} item={item} />
            ) : (
              <NavLink
                key={item.label}
                to={item.to!}
                end
                className={linkClass}
              >
                {item.label}
              </NavLink>
            ),
          )}
          <Link
            to="/make-a-difference"
            className="select-none rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition hover:brightness-105"
          >
            Donate now
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
        >
          {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col">
            {NAV_ITEMS.flatMap((item) =>
              item.children
                ? item.children.map((child) => ({
                    label: child.label,
                    to: child.to,
                  }))
                : [{ label: item.label, to: item.to! }],
            ).map((link) => (
              <Link
                key={link.to + link.label}
                to={link.to}
                onClick={close}
                className="select-none border-b border-border/60 py-4 text-base font-medium text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            to="/make-a-difference"
            onClick={close}
            className="mt-6 block select-none rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
          >
            Donate now
          </Link>
        </nav>
      )}
    </header>
  );
}

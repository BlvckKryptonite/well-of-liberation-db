import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { Link } from "react-router";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F9d00a4475b9148b586b0f1030cbea4c8%2F3334ec4aed7a4da491ee551032c35dc2?format=webp&width=800&height=1200";

const SOCIALS = [
  { label: "Facebook", icon: IconBrandFacebook },
  { label: "Instagram", icon: IconBrandInstagram },
  { label: "YouTube", icon: IconBrandYoutube },
  { label: "LinkedIn", icon: IconBrandLinkedin },
  { label: "TikTok", icon: IconBrandTiktok },
];

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <img
              src={LOGO_URL}
              alt="Well of Liberation"
              className="h-14 w-auto rounded-xl bg-background/95 p-2"
            />
            <p className="mt-6 text-sm leading-relaxed text-primary-foreground/75">
              A humanitarian initiative supporting vulnerable communities with
              clean water, healthcare, education and safe environments.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <Link to="/about" className="select-none hover:text-accent">
              About us
            </Link>
            <Link to="/mission" className="select-none hover:text-accent">
              Our mission
            </Link>
            <Link to="/faq" className="select-none hover:text-accent">
              FAQ
            </Link>
            <Link to="/contact" className="select-none hover:text-accent">
              Contact us
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {SOCIALS.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition hover:bg-accent hover:text-accent-foreground"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/70 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Well of Liberation. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">
            Empower · Restore · Build
          </p>
        </div>
      </div>
    </footer>
  );
}

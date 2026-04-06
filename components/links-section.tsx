import {
  Cloud,
  Music,
  Gift,
  Palette,
  Globe,
  Youtube,
  Waves,
  Target,
  Mic,
} from "lucide-react";

const links = [
  {
    href: "https://on.soundcloud.com/3d76nCYWqzJVAGMM6",
    icon: Cloud,
    title: "SoundCloud",
    description: "Exclusive tracks",
  },
  {
    href: "https://music.apple.com/us/artist/vegasboi/1762524945",
    icon: Music,
    title: "Apple Music",
    description: "Full catalog",
  },
  {
    href: "https://show4me.com/vegasboi",
    icon: Gift,
    title: "Show4me",
    description: "Direct support",
  },
  {
    href: "https://v3gasboii.my.canva.site/v3gasboi",
    icon: Palette,
    title: "Portfolio",
    description: "Visual work",
  },
  {
    href: "https://site-7etcaj3b2.godaddysites.com/",
    icon: Globe,
    title: "Official Site",
    description: "Central hub",
  },
  {
    href: "https://www.youtube.com/@V3GASBOI",
    icon: Youtube,
    title: "YouTube",
    description: "Music videos",
  },
  {
    href: "https://tidal.com/artist/50489161/u",
    icon: Waves,
    title: "Tidal",
    description: "Hi-fi streaming",
  },
  {
    href: "https://www.hitmkr.com/v3gasboi",
    icon: Target,
    title: "HitMkr",
    description: "Beats & collabs",
  },
  {
    href: "https://voloco.resonantcavity.com/applinks/creator?id=2198222",
    icon: Mic,
    title: "Voloco",
    description: "Recording tools",
  },
];

export function LinksSection() {
  return (
    <section id="links" className="py-10 px-5 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h2
            className="text-xl text-primary uppercase tracking-wider"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Stream Everywhere
          </h2>
          <p className="text-xs text-muted-foreground/60 mt-1">
            Find V3GASBOI on every platform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 bg-muted border border-border hover:border-primary hover:bg-card transition-all hover:translate-x-1"
            >
              <div className="w-10 h-10 bg-background flex items-center justify-center shrink-0">
                <link.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3
                  className="text-xs text-foreground uppercase tracking-wide font-semibold"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {link.title}
                </h3>
                <p className="text-[10px] text-muted-foreground/60">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

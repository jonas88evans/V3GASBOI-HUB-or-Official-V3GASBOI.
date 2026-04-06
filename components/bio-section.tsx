const quotes = [
  {
    text: "The grind don't stop when the lights go out in Vegas. That's when the real work begins.",
  },
  {
    text: "Independence means you own your masters, your moves, and your mindset.",
  },
  {
    text: "From the Strip to the world. Don't matter where you start, matter where you finish.",
  },
  {
    text: "They sleeping on me now, but they gonna wake up to my shit everywhere.",
  },
];

const testimonials = [
  {
    text: "Pure Vegas energy. Every track hits different. Been following since day one.",
    name: "Jonas D.",
    role: "Day 1 Supporter",
  },
  {
    text: "The Independence Code changed how I approach my music career. #88Mob",
    name: "Mike K.",
    role: "Producer, LA",
  },
  {
    text: "Finally an artist who understands the hustle. Vegas bred something special.",
    name: "Sarah R.",
    role: "Music Blogger",
  },
];

const stats = [
  { number: "9", label: "Platforms" },
  { number: "88", label: "Mob Strong" },
  { number: "702", label: "Vegas Born" },
];

export function BioSection() {
  return (
    <section id="bio" className="py-10 px-5 bg-card border-y border-border">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2
            className="text-xl text-primary uppercase tracking-wider"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            The Story
          </h2>
        </div>

        {/* Bio Text */}
        <div className="mb-8">
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            V3GASBOI emerged from the neon-lit streets of Las Vegas, carrying
            the spirit of the independent hustle to the global stage. What
            started in the 702 became a worldwide movement—the #88Mob. From
            bedroom recordings to professional studios, from local shows to
            digital platforms reaching millions. The Independence Code
            isn&apos;t just a slogan—it&apos;s a way of life.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-5">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-2xl text-primary font-black leading-none"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {stat.number}
                </div>
                <div className="text-[10px] text-muted-foreground/60 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quotes */}
        <div className="mb-8">
          <h3
            className="text-center text-base text-secondary uppercase tracking-wider mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            From Vegas Boi
          </h3>
          <div className="space-y-3">
            {quotes.map((quote, i) => (
              <div
                key={i}
                className="bg-muted p-4 border-l-[3px] border-primary"
              >
                <p className="text-sm text-foreground/80 italic leading-relaxed mb-2">
                  &quot;{quote.text}&quot;
                </p>
                <p className="text-[11px] text-primary font-semibold uppercase tracking-wide">
                  — V3GASBOI
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3
            className="text-center text-base text-secondary uppercase tracking-wider mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Mob Reviews
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-muted p-4 border border-border">
                <div className="text-secondary text-sm mb-2">★★★★★</div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {testimonial.text}
                </p>
                <div>
                  <h4 className="text-xs text-foreground font-medium">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] text-muted-foreground/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const hashtags = [
  "#88Mob",
  "#IndependenceCode",
  "#VegasHustle",
  "#ItsThatEasy",
];

const stats = [
  { number: "9", label: "Platforms" },
  { number: "88", label: "Mob Strong" },
  { number: "Vegas", label: "To World" },
];

export function Footer() {
  return (
    <>
      {/* Social Proof Stats */}
      <section className="py-8 px-5 bg-background text-center">
        <div className="flex justify-center gap-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="text-3xl text-primary font-black leading-none"
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
      </section>

      {/* Footer */}
      <footer className="py-8 px-5 bg-card text-center border-t border-border">
        <div
          className="text-lg text-primary font-black mb-4"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          V3GASBOI
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {hashtags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-muted-foreground/60 uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-[10px] text-muted-foreground/40">
          2025 V3GASBOI - Las Vegas, Nevada
        </p>
      </footer>
    </>
  );
}

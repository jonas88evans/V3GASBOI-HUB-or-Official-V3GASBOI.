import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative bg-background px-5 pt-20 pb-10 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-primary blur-[60px] opacity-30 -top-24 -right-12" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-secondary blur-[60px] opacity-30 -bottom-12 -left-12" />

      <div className="text-center z-10 max-w-xl">
        <span className="inline-block px-3.5 py-1.5 bg-primary/20 border border-primary text-primary text-[10px] font-bold uppercase tracking-wider mb-5">
          The Independence Code is Global
        </span>

        <h1
          className="text-[clamp(2rem,6vw,3.5rem)] font-black uppercase leading-none tracking-tight mb-2"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Digital Artist
          <span className="block text-primary">From Las Vegas</span>
        </h1>

        <p className="text-secondary text-xs font-normal tracking-widest uppercase mb-4">
          #88Mob - It&apos;s That Easy
        </p>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md mx-auto">
          Welcome to the movement. V3GASBOI represents the independent grind,
          the Vegas hustle, and the global sound.
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="#links"
            className="px-6 py-3 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide hover:bg-primary/90 transition-all hover:-translate-y-0.5"
          >
            Stream Now
          </Link>
          <Link
            href="#bio"
            className="px-6 py-3 bg-transparent text-foreground border border-border text-xs font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition-colors"
          >
            My Story
          </Link>
        </div>
      </div>
    </section>
  );
}

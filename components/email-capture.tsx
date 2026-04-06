"use client";

import { useState } from "react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 2000);
  };

  return (
    <section
      id="join"
      className="py-10 px-5 bg-card text-center border-y border-border"
    >
      <div className="max-w-md mx-auto">
        <h2
          className="text-lg text-primary uppercase tracking-wider mb-2"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Get The Code First
        </h2>
        <p className="text-xs text-muted-foreground mb-5">
          Join for exclusive drops and early access
        </p>

        <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
            className="flex-1 min-w-[200px] px-4 py-3 bg-background border border-border text-foreground text-sm outline-none focus:border-primary"
          />
          <button
            type="submit"
            className={`px-6 py-3 text-xs font-bold uppercase tracking-wide transition-all ${
              submitted
                ? "bg-green-700 text-white"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            {submitted ? "Joined" : "Join"}
          </button>
        </form>

        {submitted && (
          <div className="mt-3 p-3 bg-green-700 text-white text-xs">
            Welcome to the #88Mob!
          </div>
        )}
      </div>
    </section>
  );
}

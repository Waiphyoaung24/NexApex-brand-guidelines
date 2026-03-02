export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <p
          className="text-[11px] font-[var(--font-nevera)] tracking-[6px] uppercase mb-5"
          style={{ color: "var(--dim)", fontFamily: "var(--font-nevera)" }}
        >
          Brand Guidelines V2
        </p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide mb-4"
          style={{
            fontFamily: "var(--font-nevera)",
            background: "linear-gradient(135deg, var(--foreground) 0%, var(--mauve) 40%, var(--cyan) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Where AI Reaches Its Peak<span style={{ color: "var(--cyan)", WebkitTextFillColor: "var(--cyan)" }}>.</span>
        </h1>
        <p
          className="text-base tracking-[3px] uppercase"
          style={{ color: "var(--dim)" }}
        >
          NEX APEX — AI Tech Solutions
        </p>
      </section>

      {/* Brand Story */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-4 flex items-center gap-4">
          <span
            className="text-[11px] tracking-[4px] uppercase"
            style={{ color: "var(--cyan)", fontFamily: "var(--font-nevera)" }}
          >
            01 — Brand Story
          </span>
        </div>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-5 leading-tight"
          style={{ fontFamily: "var(--font-nevera)" }}
        >
          The Nexus of<br />Innovation
        </h2>
        <p className="text-base leading-relaxed max-w-xl" style={{ color: "var(--dim)" }}>
          NEX APEX is an AI tech solutions company driving businesses to the pinnacle of technological capability.
          &ldquo;Nex&rdquo; derives from nexus — a connection point. &ldquo;Apex&rdquo; represents the highest point, the peak of achievement.
        </p>
      </section>

      {/* Color Palette */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-4 flex items-center gap-4">
          <span
            className="text-[11px] tracking-[4px] uppercase"
            style={{ color: "var(--cyan)", fontFamily: "var(--font-nevera)" }}
          >
            02 — Color Palette
          </span>
        </div>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-10 leading-tight"
          style={{ fontFamily: "var(--font-nevera)" }}
        >
          Brand Colors
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            { name: "Dark Teal", hex: "#1A2630", use: "Primary background", light: false },
            { name: "Nex Red", hex: "#C63518", use: "Secondary accent, CTAs", light: false },
            { name: "Apex Cyan", hex: "#94FCFF", use: "Primary accent", light: true },
            { name: "Slate Blue", hex: "#45596D", use: "Secondary surfaces", light: false },
            { name: "Mauve Silver", hex: "#B9AFBB", use: "Logo metallic", light: true },
            { name: "Sage", hex: "#DFE4DC", use: "Light backgrounds", light: true },
            { name: "Surface", hex: "#162029", use: "Card backgrounds", light: false },
            { name: "Dim", hex: "#6E7A84", use: "Muted text", light: false },
          ].map((c) => (
            <div
              key={c.hex}
              className="rounded-xl overflow-hidden border border-white/5 transition-transform hover:-translate-y-1"
              style={{ background: "var(--surface)" }}
            >
              <div className="h-20 rounded-t-xl" style={{ background: c.hex }} />
              <div className="p-3">
                <p
                  className="text-[11px] font-semibold tracking-wider uppercase mb-1"
                  style={{ fontFamily: "var(--font-nevera)" }}
                >
                  {c.name}
                </p>
                <p className="text-[13px]" style={{ color: "var(--cyan)" }}>{c.hex}</p>
                <p className="text-[12px] mt-1" style={{ color: "var(--dim)" }}>{c.use}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-4 flex items-center gap-4">
          <span
            className="text-[11px] tracking-[4px] uppercase"
            style={{ color: "var(--cyan)", fontFamily: "var(--font-nevera)" }}
          >
            03 — Typography
          </span>
        </div>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-10 leading-tight"
          style={{ fontFamily: "var(--font-nevera)" }}
        >
          Type System
        </h2>
        <div className="grid gap-8">
          <div
            className="rounded-xl p-8 border border-white/5"
            style={{ background: "var(--surface)" }}
          >
            <p className="text-[12px] tracking-[2px] uppercase mb-3" style={{ color: "var(--cyan)", fontFamily: "var(--font-nevera)" }}>
              Display — Nevera
            </p>
            <p className="text-4xl font-bold tracking-wide" style={{ fontFamily: "var(--font-nevera)" }}>
              NEX APEX
            </p>
            <p className="text-[11px] mt-3 leading-relaxed" style={{ color: "var(--dim)" }}>
              Headlines, titles, wordmark
            </p>
          </div>
          <div
            className="rounded-xl p-8 border border-white/5"
            style={{ background: "var(--surface)" }}
          >
            <p className="text-[12px] tracking-[2px] uppercase mb-3" style={{ color: "var(--cyan)", fontFamily: "var(--font-nevera)" }}>
              Body — Nexa
            </p>
            <p className="text-2xl" style={{ fontFamily: "var(--font-nexa)" }}>
              The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-[11px] mt-3 leading-relaxed" style={{ color: "var(--dim)" }}>
              Body copy, UI elements, paragraphs
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-4 flex items-center gap-4">
          <span
            className="text-[11px] tracking-[4px] uppercase"
            style={{ color: "var(--cyan)", fontFamily: "var(--font-nevera)" }}
          >
            04 — Values
          </span>
        </div>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-10 leading-tight"
          style={{ fontFamily: "var(--font-nevera)" }}
        >
          Brand Pillars
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Innovation", desc: "Pushing the boundaries of AI technology to create transformative solutions." },
            { title: "Precision", desc: "Every solution is crafted with meticulous attention to detail and accuracy." },
            { title: "Connection", desc: "Bridging the gap between businesses and cutting-edge AI capabilities." },
            { title: "Excellence", desc: "Relentless pursuit of the highest standards in everything we deliver." },
          ].map((v) => (
            <div
              key={v.title}
              className="rounded-xl p-6 border-l-2 transition-all hover:translate-x-1"
              style={{
                background: "var(--surface)",
                borderColor: "var(--cyan)",
                borderRight: "1px solid rgba(148,252,255,0.03)",
                borderTop: "1px solid rgba(148,252,255,0.03)",
                borderBottom: "1px solid rgba(148,252,255,0.03)",
              }}
            >
              <h4
                className="text-[12px] font-semibold tracking-[2px] uppercase mb-2"
                style={{ color: "var(--cyan)", fontFamily: "var(--font-nevera)" }}
              >
                {v.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "var(--dim)" }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center">
        <p
          className="text-[11px] tracking-[2px]"
          style={{ color: "var(--dim)", fontFamily: "var(--font-nevera)" }}
        >
          NEX APEX — Brand Guidelines V2 — 2026
        </p>
      </footer>
    </div>
  );
}

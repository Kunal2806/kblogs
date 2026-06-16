import Link from "next/link";

const techBadges = [
  {
    label: "TypeScript",
    color: "text-[#3178c6]",
    bg: "bg-[#3178c6]/10 border-[#3178c6]/20",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.007z" />
      </svg>
    ),
  },
  {
    label: "Next.js",
    color: "text-[#ffffff]",
    bg: "bg-white/5 border-white/10",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
      </svg>
    ),
  },
  {
    label: "Tailwind CSS",
    color: "text-[#06b6d4]",
    bg: "bg-[#06b6d4]/10 border-[#06b6d4]/20",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    label: "Node.js",
    color: "text-[#22c55e]",
    bg: "bg-[#22c55e]/10 border-[#22c55e]/20",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.605.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.19-.137-.242l-8.791-5.073c-.081-.047-.189-.047-.271 0L3.075 6.68c-.085.05-.139.146-.139.243v10.15c0 .097.054.189.137.236l2.409 1.392c1.307.654 2.108-.116 2.108-.891V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.943-.922-1.604V6.921c0-.659.352-1.273.922-1.604l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.331.924.945.924 1.604v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078c-.282.158-.602.242-.925.247z" />
      </svg>
    ),
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@kunalgoswami.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Background hero glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-15 lg:grid-cols-2">
        {/* ── Left column ── */}
        <div className="flex flex-col gap-8">
          {/* Headline */}
          <div>
            <h1
              className="font-[var(--font-space-grotesk)] text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-tight text-[var(--foreground)]"
            >
              Building. Learning.
              <span
                className="block"
                style={{
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sharing.
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="max-w-md text-base leading-relaxed text-[var(--foreground-secondary)]">
            I&apos;m a Software Developer who loves solving complex problems and
            building scalable web applications. I write about tech challenges,
            projects, books, boxing, music and everything in between.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--gradient-primary)" }}
            >
              Read My Blogs
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-white/[0.03] px-6 py-3 text-sm font-medium text-[var(--foreground-secondary)] transition-colors hover:border-white/20 hover:text-[var(--foreground)]"
            >
              View My Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--foreground-muted)]">
              Connect with me
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-white/[0.03] text-[var(--foreground-muted)] transition-all duration-200 hover:border-[var(--primary)]/40 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="relative flex items-center justify-center">
          {/* Floating tech badges */}
          <div className="relative h-[340px] w-full max-w-[480px]">
            {/* Glow blob behind illustration */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/10 blur-3xl" />

            {/* Dev desk illustration placeholder — replace with your actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass flex h-52 w-72 flex-col items-start justify-between rounded-2xl p-5">
                {/* Fake code editor */}
                <div className="flex w-full items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
                  <span className="ml-auto font-mono text-[10px] text-[var(--foreground-muted)]">index.tsx</span>
                </div>
                <div className="w-full space-y-1.5 font-mono text-[11px]">
                  <p><span className="text-[#a78bfa]">const</span> <span className="text-[#60a5fa]">dev</span> <span className="text-[var(--foreground-muted)]">=</span> <span className="text-[#34d399]">&quot;Kunal&quot;</span><span className="text-[var(--foreground-muted)]">;</span></p>
                  <p><span className="text-[#a78bfa]">function</span> <span className="text-[#60a5fa]">build</span><span className="text-[var(--foreground-muted)]">() {"{"}</span></p>
                  <p className="pl-4"><span className="text-[#a78bfa]">return</span> <span className="text-[#34d399]">&quot;something great&quot;</span><span className="text-[var(--foreground-muted)]">;</span></p>
                  <p><span className="text-[var(--foreground-muted)]">{"}"}</span></p>
                </div>
                <div className="flex w-full items-center gap-2 rounded-lg bg-[var(--primary)]/10 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22c55e]" />
                  <span className="font-mono text-[10px] text-[var(--foreground-muted)]">ready on localhost:3000</span>
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            <div
              className="absolute right-0 top-4 flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium backdrop-blur-sm"
              style={{ animationDelay: "0s" }}
            >
              <span className={techBadges[0].color}>{techBadges[0].icon}</span>
              <span className="text-[var(--foreground-secondary)]">{techBadges[0].label}</span>
            </div>

            <div className="absolute right-8 top-[38%] flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-xs font-medium backdrop-blur-sm">
              <span className={techBadges[1].color}>{techBadges[1].icon}</span>
              <span className="text-[var(--foreground-secondary)]">{techBadges[1].label}</span>
            </div>

            <div className="absolute left-0 top-[55%] flex items-center gap-2 rounded-xl border border-[#06b6d4]/20 bg-[#06b6d4]/10 px-3 py-2 text-xs font-medium backdrop-blur-sm">
              <span className={techBadges[2].color}>{techBadges[2].icon}</span>
              <span className="text-[var(--foreground-secondary)]">{techBadges[2].label}</span>
            </div>

            <div className="absolute bottom-6 right-4 flex items-center gap-2 rounded-xl border border-[#22c55e]/20 bg-[#22c55e]/10 px-3 py-2 text-xs font-medium backdrop-blur-sm">
              <span className={techBadges[3].color}>{techBadges[3].icon}</span>
              <span className="text-[var(--foreground-secondary)]">{techBadges[3].label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
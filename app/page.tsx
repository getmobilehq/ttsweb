// Placeholder home page. The single-scroll landing is assembled here from
// section components in `components/` during the build phase — see HANDOFF.md
// §4 (information architecture) and §5 (component breakdown).
export default function Home() {
  return (
    <main className="mx-auto max-w-content px-6 py-24">
      <p className="font-display text-eyebrow text-sm font-semibold uppercase tracking-eyebrow text-green-600">
        Technology Talent Services · Nigeria
      </p>
      <h1 className="mt-4 max-w-read text-4xl font-extrabold text-ink">
        Scaffold ready. Build the sections next.
      </h1>
    </main>
  );
}

// BrowserMockup is the visual signature of this site: every "preview" on the
// page — hero, demo templates, portfolio — is shown inside the same browser
// chrome. It's a literal, on-brand way to say "this is what your website
// could look like" without relying on external stock photography.

const archetypeContent = {
  // Restaurant / Cafe — hero image band + dish cards
  menu: ({ a, b }) => (
    <div className="flex h-full flex-col gap-2 p-2.5">
      <div
        className="relative h-[46%] w-full rounded-md"
        style={{ background: `linear-gradient(135deg, ${a}, ${b})` }}
      >
        <div className="absolute bottom-2 left-2 h-1.5 w-10 rounded-full bg-white/80" />
        <div className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[6px] font-semibold text-black">
          Reserve
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-md bg-white/[0.06] p-1">
            <div className="h-4 w-full rounded" style={{ backgroundColor: `${a}33` }} />
            <div className="mt-1 h-1 w-3/4 rounded-full bg-white/20" />
          </div>
        ))}
      </div>
    </div>
  ),

  // Barbershop / Salon / Gym / Car Service — split booking layout
  booking: ({ a, b }) => (
    <div className="flex h-full gap-2 p-2.5">
      <div className="flex w-[55%] flex-col justify-center gap-1.5">
        <div className="h-1.5 w-4/5 rounded-full bg-white/30" />
        <div className="h-1.5 w-3/5 rounded-full bg-white/15" />
        <div
          className="mt-1.5 h-4 w-14 rounded-full"
          style={{ background: `linear-gradient(135deg, ${a}, ${b})` }}
        />
      </div>
      <div className="grid w-[45%] grid-cols-4 gap-1 self-center">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-sm"
            style={{ backgroundColor: i === 5 ? a : 'rgba(255,255,255,0.08)' }}
          />
        ))}
      </div>
    </div>
  ),

  // Medical / Dental — calm nav + service grid
  clinical: ({ a, b }) => (
    <div className="flex h-full flex-col gap-2 p-2.5">
      <div className="flex items-center justify-between">
        <div className="h-1.5 w-10 rounded-full bg-white/30" />
        <div className="h-4 w-12 rounded-full" style={{ backgroundColor: a }} />
      </div>
      <div className="grid flex-1 grid-cols-2 gap-1.5">
        {[a, b, b, a].map((c, i) => (
          <div key={i} className="flex items-center gap-1 rounded-md bg-white/[0.06] p-1.5">
            <div className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: c }} />
            <div className="h-1 w-full rounded-full bg-white/15" />
          </div>
        ))}
      </div>
    </div>
  ),

  // Hotel — cinematic image with floating booking card
  hospitality: ({ a, b }) => (
    <div className="relative h-full p-2.5">
      <div
        className="h-full w-full rounded-md"
        style={{ background: `linear-gradient(160deg, ${a}, ${b} 80%)` }}
      />
      <div className="absolute left-2 top-3 h-1.5 w-12 rounded-full bg-white/85" />
      <div className="glass absolute bottom-4 left-4 right-4 flex items-center gap-1.5 rounded-md p-1.5">
        <div className="h-3 flex-1 rounded bg-white/15" />
        <div className="h-3 flex-1 rounded bg-white/15" />
        <div className="h-3 w-7 rounded" style={{ backgroundColor: a }} />
      </div>
    </div>
  ),

  // Car dealership / Real estate / Online store — listing grid
  catalog: ({ a, b }) => (
    <div className="grid h-full grid-cols-3 gap-1.5 p-2.5">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-1 rounded-md bg-white/[0.06] p-1">
          <div
            className="h-5 w-full rounded"
            style={{ backgroundColor: i % 2 === 0 ? `${a}55` : `${b}55` }}
          />
          <div className="h-1 w-4/5 rounded-full bg-white/20" />
          <div className="h-1 w-1/2 rounded-full" style={{ backgroundColor: a }} />
        </div>
      ))}
    </div>
  ),

  // Law / Construction — editorial, restrained
  corporate: ({ a }) => (
    <div className="flex h-full flex-col justify-center gap-2 p-3">
      <div className="h-2 w-2/3 rounded-full bg-white/30" />
      <div className="h-2 w-1/2 rounded-full bg-white/30" />
      <div className="my-1 h-px w-full bg-white/10" />
      <div className="flex gap-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex-1">
            <div className="h-1.5 w-1/2 rounded-full" style={{ backgroundColor: a }} />
            <div className="mt-1 h-1 w-full rounded-full bg-white/15" />
          </div>
        ))}
      </div>
    </div>
  ),
}

export default function BrowserMockup({ palette = ['#C9A24B', '#6E5BFF'], archetype = 'corporate', label, className = '' }) {
  const [a, b] = palette
  const Content = archetypeContent[archetype] || archetypeContent.corporate

  return (
    <div
      className={`overflow-hidden rounded-xl border border-surface-line bg-surface-raised shadow-soft ${className}`}
    >
      {/* Browser chrome bar */}
      <div className="flex items-center gap-1.5 border-b border-surface-line bg-surface px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#E25C5C]" />
        <span className="h-2 w-2 rounded-full bg-[#E5B450]" />
        <span className="h-2 w-2 rounded-full bg-[#5CB85C]" />
        {label && (
          <span className="ml-2 truncate font-mono text-[9px] text-muted">{label}</span>
        )}
      </div>
      {/* Preview surface */}
      <div className="aspect-[4/3] w-full bg-ink">
        <Content a={a} b={b} />
      </div>
    </div>
  )
}

'use client';

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/registry/magicui/scroll-based-velocity"

export default function Marquee() {
  const items = [
    'Crafted With Passion',
    'Fresh On Tap',
    'DLF Cyber Hub',
    'Finest Brews',
    'Gourmet Gastropub',
    'Live Music Nights',
    'Quaff Brewing Co.',
    'Brewed In-House',
  ];

  // We add • between items for the design from the text screenshot
  const marqueeText = items.join("  •  ") + "  •  ";

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8 bg-[#050505] border-y border-[#C8973E]/20">
      <ScrollVelocityContainer className="text-4xl font-bold tracking-wide md:text-6xl lg:text-7xl pb-4 font-[family:var(--font-display)]" style={{ WebkitTextStroke: '1px #C8973E', color: 'transparent' }}>
        <ScrollVelocityRow baseVelocity={2} direction={1}>
          {marqueeText}
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={2} direction={-1}>
          {marqueeText}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10"></div>
    </div>
  )
}

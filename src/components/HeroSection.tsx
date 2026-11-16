import { ArrowRight } from 'lucide-react';
import { COLLEGE_IMAGES, INSTITUTIONAL_METRICS } from '../data/collegeData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onApplyClick: () => void;
}

export function HeroSection({ onApplyClick }: HeroSectionProps) {
  return (
    <section id="top" className="pt-10 pb-12 lg:pt-16 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs sm:text-sm font-medium tracking-wide text-[#57534E] mb-4">
                Est. 1997 <span aria-hidden="true" className="mx-1.5">·</span> Autonomous Institution{' '}
                <span aria-hidden="true" className="mx-1.5">·</span> Coimbatore, Tamil Nadu
              </p>

              <h1
                className="font-serif font-semibold text-[#1C1917] tracking-tight leading-[1.08]"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.65rem)' }}
              >
                Sri Krishna Arts and Science College
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl">
                Affiliated to Bharathiar University and accredited with NAAC A++, SKASC prepares
                undergraduate, postgraduate, and doctoral scholars across computing, commerce, life
                sciences, and the humanities.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E0D6] flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onApplyClick}
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] text-sm font-medium text-white bg-[#1E3A8A] hover:bg-[#172E6E] transition-colors duration-150 rounded-md whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1E3A8A]"
              >
                <span>Apply for 2027–28</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#academics"
                className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] text-sm font-medium text-[#1C1917] bg-[#F3EFE6] hover:bg-[#EBE6DF] border border-[#E5E0D6] transition-colors duration-150 rounded-md whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A]"
              >
                Explore 34+ Programs
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <ResilientImage
              src={COLLEGE_IMAGES.heroCampus}
              alt="Sri Krishna Arts and Science College main academic quadrangle in Kuniamuthur, Coimbatore with Western Ghats horizon"
              aspectClass="aspect-[16/10] lg:aspect-auto lg:h-full min-h-[300px]"
              caption="Fig. 1 — Main Academic Quadrangle and Western Ghats Horizon, Sugunapuram Campus, Coimbatore."
            />
          </div>
        </div>

        {/* Full-Width 4-Column Operational & Institutional Ribbon */}
        <div className="mt-12 border-t border-b border-[#E5E0D6] bg-[#F3EFE6]/60">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E0D6]">
            {INSTITUTIONAL_METRICS.map((metric) => (
              <div key={metric.label} className="py-6 px-5 lg:px-6">
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1917] tabular-nums">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm font-medium text-[#1C1917]">{metric.label}</p>
                <p className="mt-0.5 text-xs text-[#57534E] tabular-nums">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

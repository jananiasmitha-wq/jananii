import { RECRUITER_SECTORS } from '../data/collegeData';

const PLACEMENT_STATS = [
  { metric: '1,420+', label: 'Placement Offers (2025–26 Batch)' },
  { metric: '₹14.5 LPA', label: 'Highest Annual Compensation' },
  { metric: '185+', label: 'Recruiting Corporate Partners' },
  { metric: '310+', label: 'Higher Studies & Overseas Admits' },
];

export function PlacementsSection() {
  return (
    <section id="placements" className="py-16 lg:py-24 bg-[#F3EFE6]/55 border-b border-[#E5E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-wide text-[#B45309] mb-2">
              03. Career Outcomes &amp; Placements
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917] tracking-tight">
              Verified Placement Outcomes &amp; Industry Partnerships
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              Our Training &amp; Placement Directorate pairs structured aptitude, coding, and
              corporate accounting preparation with direct campus recruitment across four sectors.
            </p>
          </div>
        </div>

        {/* Claim-to-Proof Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#E5E0D6] bg-white divide-y sm:divide-y-0 sm:divide-x divide-[#E5E0D6]">
          {PLACEMENT_STATS.map((item) => (
            <div key={item.label} className="p-6">
              <p className="font-serif text-3xl font-semibold text-[#1E3A8A] tabular-nums">
                {item.metric}
              </p>
              <p className="mt-1.5 text-sm text-[#57534E]">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Sector-wise Recruiter Directory */}
        <div className="mt-12">
          <h3 className="text-xs font-medium tracking-wide text-[#57534E] mb-4">
            Representative Campus Recruiters (2024–2026 Cycles)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RECRUITER_SECTORS.map((group) => (
              <div key={group.sector} className="bg-white border border-[#E5E0D6] p-5">
                <h4 className="font-serif text-lg font-semibold text-[#1C1917] pb-3 border-b border-[#E5E0D6]">
                  {group.sector}
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-[#57534E]">
                  {group.companies.map((company) => (
                    <li key={company} className="text-[#1C1917]">
                      {company}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

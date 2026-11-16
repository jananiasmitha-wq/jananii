export function Footer() {
  return (
    <footer className="bg-[#F3EFE6] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#E5E0D6]">
          <div className="md:col-span-5 space-y-3">
            <p className="font-serif text-xl font-semibold text-[#1C1917]">
              Sri Krishna Arts and Science College
            </p>
            <p className="text-sm text-[#57534E] leading-relaxed max-w-sm">
              An Autonomous Institution affiliated to Bharathiar University, Re-accredited by NAAC
              with A++ Grade, and managed by VLB Trust since 1997.
            </p>
            <p className="text-xs text-[#78716C] pt-1">
              Sugunapuram, Kuniamuthur P.O., Coimbatore – 641008, Tamil Nadu, India.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2.5 text-sm">
            <p className="text-xs font-medium text-[#57534E] uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2 text-[#1C1917]">
              <li>
                <a href="#academics" className="hover:text-[#1E3A8A] transition-colors">
                  Academic Catalogue
                </a>
              </li>
              <li>
                <a href="#campus" className="hover:text-[#1E3A8A] transition-colors">
                  Campus &amp; Library
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-[#1E3A8A] transition-colors">
                  Research Laboratories
                </a>
              </li>
              <li>
                <a href="#placements" className="hover:text-[#1E3A8A] transition-colors">
                  Placement Outcomes
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-[#1E3A8A] transition-colors">
                  Admissions 2027–28
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2.5 text-sm">
            <p className="text-xs font-medium text-[#57534E] uppercase tracking-wider">
              Institutional Contact
            </p>
            <dl className="space-y-2 text-[#1C1917]">
              <div>
                <dt className="text-xs text-[#78716C]">Admissions Desk</dt>
                <dd className="tabular-nums">+91 422 267 8400 · admissions@skasc.ac.in</dd>
              </div>
              <div>
                <dt className="text-xs text-[#78716C]">Controller of Examinations</dt>
                <dd className="tabular-nums">+91 422 267 8405 · coe@skasc.ac.in</dd>
              </div>
              <div>
                <dt className="text-xs text-[#78716C]">Visiting Hours</dt>
                <dd>Monday – Saturday, 09:00 to 17:00 IST</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#57534E]">
          <p>© {new Date().getFullYear()} Sri Krishna Arts and Science College. All rights reserved.</p>
          <p>Affiliated to Bharathiar University · UGC Autonomous Status</p>
        </div>
      </div>
    </footer>
  );
}

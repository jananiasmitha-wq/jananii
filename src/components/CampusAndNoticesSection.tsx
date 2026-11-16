import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CAMPUS_NOTICES, COLLEGE_IMAGES, type CampusNotice } from '../data/collegeData';
import { ResilientImage } from './ResilientImage';

type NoticeFilter = 'All' | CampusNotice['category'];

const NOTICE_FILTERS: NoticeFilter[] = ['All', 'Academic', 'Placements', 'Events'];

export function CampusAndNoticesSection() {
  const [noticeFilter, setNoticeFilter] = useState<NoticeFilter>('All');
  const [expandedNoticeId, setExpandedNoticeId] = useState<string | null>(CAMPUS_NOTICES[0].id);

  const visibleNotices = CAMPUS_NOTICES.filter(
    (item) => noticeFilter === 'All' || item.category === noticeFilter
  );

  return (
    <section id="campus" className="py-16 lg:py-24 border-b border-[#E5E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Campus Infrastructure & Research Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-wide text-[#B45309] mb-2">
              02. Campus &amp; Research Ecosystem
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917] tracking-tight">
              Scholarship Beyond Lecture Halls
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              Spanning 32 acres at the foothills of the Western Ghats, the Kuniamuthur campus pairs
              quiet archival study spaces with funded scientific laboratories and student guilds.
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Grid (2-col primary + 1-col stacked) */}
        <div id="research" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Primary Feature: Central Library */}
          <div className="lg:col-span-7 bg-white border border-[#E5E0D6] p-5 sm:p-6">
            <ResilientImage
              src={COLLEGE_IMAGES.centralLibrary}
              alt="Sri Krishna Arts and Science College Central Library reading hall with timber tables and clerestory daylight"
              aspectClass="aspect-[4/3]"
              imgClassName="bg-[#000000]"
              caption="Fig. 2 — Central Library & Digital Knowledge Commons (78,500+ Volumes · IEEE & INFLIBNET Access)."
            />
            <div className="mt-5 pt-5 border-t border-[#E5E0D6]">
              <p className="text-xs text-[#57534E] mb-1.5">
                Knowledge Commons <span aria-hidden="true">·</span> Open 08:00 to 20:00
              </p>
              <h3 className="font-serif text-2xl font-semibold text-[#1C1917]">
                Central Library &amp; Archival Reading Hall
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#57534E] leading-relaxed">
                Housing over 78,500 print volumes, 210 national and international periodicals, and
                institutional subscriptions to IEEE Xplore, SpringerLink, DELNET, and Shodhganga
                repositories for undergraduate and doctoral research.
              </p>
            </div>
          </div>

          {/* Right Column: Research Labs & Student Courtyard */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-[#E5E0D6] p-5 sm:p-6">
              <ResilientImage
                src={COLLEGE_IMAGES.scienceLab}
                alt="DST-FIST funded Biotechnology and Computing Research Laboratory at SKASC Coimbatore"
                aspectClass="aspect-[4/3]"
                caption="Fig. 3 — DST-FIST Life Sciences & Applied Computing Suite."
              />
              <div className="mt-4 pt-4 border-t border-[#E5E0D6]">
                <p className="text-xs text-[#57534E] mb-1">
                  Research Infrastructure <span aria-hidden="true">·</span> 14 Specialized Labs
                </p>
                <h3 className="font-serif text-xl font-semibold text-[#1C1917]">
                  DST-FIST Research &amp; AI Studios
                </h3>
                <p className="mt-1.5 text-sm text-[#57534E] leading-relaxed">
                  Equipped with real-time PCR thermal cyclers, HPLC instrumentation, microbiology
                  containment suites, and GPU-accelerated deep learning workstations.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#E5E0D6] p-5 sm:p-6">
              <ResilientImage
                src={COLLEGE_IMAGES.studentCourtyard}
                alt="Students gathering at the open-air stone amphitheater and cultural pavilion on the SKASC campus"
                aspectClass="aspect-[4/3]"
                caption="Fig. 4 — Open-Air Amphitheater & Student Cultural Guilds."
              />
              <div className="mt-4 pt-4 border-t border-[#E5E0D6]">
                <p className="text-xs text-[#57534E] mb-1">
                  Student Life <span aria-hidden="true">·</span> 28 Clubs, NCC &amp; NSS
                </p>
                <h3 className="font-serif text-xl font-semibold text-[#1C1917]">
                  Cultural Guilds &amp; Athletics Pavilion
                </h3>
                <p className="mt-1.5 text-sm text-[#57534E] leading-relaxed">
                  Active chapters in Fine Arts, Debate, Robotics, National Service Scheme (NSS),
                  National Cadet Corps (NCC), and university-level athletics courts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Campus Notices & Academic Events Ledger */}
        <div className="mt-16 pt-12 border-t border-[#E5E0D6]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#1C1917]">
                Campus Circulars &amp; Upcoming Events
              </h3>
              <p className="text-sm text-[#57534E] mt-1">
                Official announcements from the Academic Council, Placement Cell, and Research
                Deanery.
              </p>
            </div>

            <div className="flex items-center gap-1 p-1 bg-[#F3EFE6] border border-[#E5E0D6] rounded-lg self-start sm:self-auto">
              {NOTICE_FILTERS.map((category) => {
                const isActive = noticeFilter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setNoticeFilter(category)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] ${
                      isActive
                        ? 'bg-white text-[#1C1917] shadow-xs'
                        : 'text-[#57534E] hover:text-[#1C1917]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="divide-y divide-[#E5E0D6] border-t border-b border-[#E5E0D6] bg-white">
            {visibleNotices.map((notice) => {
              const isExpanded = expandedNoticeId === notice.id;
              return (
                <div key={notice.id} className="px-4 sm:px-6 py-4">
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() => setExpandedNoticeId(isExpanded ? null : notice.id)}
                    className="w-full text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] rounded-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-5">
                      <span className="font-mono text-xs text-[#57534E] tabular-nums shrink-0 w-28">
                        {notice.date}
                      </span>
                      <div>
                        <span className="text-xs font-medium text-[#1E3A8A] mr-2.5">
                          {notice.category}
                        </span>
                        <span className="font-medium text-sm sm:text-base text-[#1C1917]">
                          {notice.title}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-medium text-[#57534E] shrink-0">
                      <span>{isExpanded ? 'Hide Details' : 'Read Circular'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="mt-3 sm:pl-[8.25rem] pt-3 border-t border-[#E5E0D6]/60 text-sm text-[#57534E] space-y-1.5">
                      <p className="text-[#1C1917] leading-relaxed">{notice.summary}</p>
                      <p className="text-xs text-[#78716C]">
                        Venue: {notice.venue} <span aria-hidden="true">·</span> Issued by:{' '}
                        {notice.contactOffice}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

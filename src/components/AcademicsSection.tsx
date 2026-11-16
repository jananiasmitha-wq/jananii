import { useMemo, useState } from 'react';
import { ArrowUpRight, BookOpen, Search, X } from 'lucide-react';
import {
  ACADEMIC_PROGRAMS,
  type AcademicProgram,
  type ProgramLevel,
  type SchoolCategory,
} from '../data/collegeData';

interface AcademicsSectionProps {
  onSelectProgramForAdmission: (programTitle: string) => void;
}

const SCHOOLS: Array<'All Schools' | SchoolCategory> = [
  'All Schools',
  'Computing & AI',
  'Commerce & Management',
  'Life Sciences & Math',
  'Humanities & Design',
];

const LEVELS: Array<'All' | ProgramLevel> = ['All', 'UG', 'PG', 'Ph.D.'];

export function AcademicsSection({ onSelectProgramForAdmission }: AcademicsSectionProps) {
  const [selectedSchool, setSelectedSchool] = useState<'All Schools' | SchoolCategory>('All Schools');
  const [selectedLevel, setSelectedLevel] = useState<'All' | ProgramLevel>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProgram, setActiveProgram] = useState<AcademicProgram | null>(null);

  const filteredPrograms = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return ACADEMIC_PROGRAMS.filter((prog) => {
      const matchesSchool = selectedSchool === 'All Schools' || prog.school === selectedSchool;
      const matchesLevel = selectedLevel === 'All' || prog.level === selectedLevel;
      const matchesQuery =
        !query ||
        prog.title.toLowerCase().includes(query) ||
        prog.code.toLowerCase().includes(query) ||
        prog.school.toLowerCase().includes(query) ||
        prog.coreSubjects.some((sub) => sub.toLowerCase().includes(query));
      return matchesSchool && matchesLevel && matchesQuery;
    });
  }, [selectedSchool, selectedLevel, searchQuery]);

  const resetFilters = () => {
    setSelectedSchool('All Schools');
    setSelectedLevel('All');
    setSearchQuery('');
  };

  return (
    <section id="academics" className="py-16 lg:py-24 border-b border-[#E5E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-wide text-[#B45309] mb-2">
              01. Academic Catalogue
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917] tracking-tight">
              Schools, Degrees &amp; Autonomous Curricula
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              Choice-Based Credit System (CBCS) syllabi updated annually by Boards of Studies
              comprising industry engineers, chartered accountants, and university researchers.
            </p>
          </div>
        </div>

        {/* Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#E5E0D6]">
          {/* School Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter by academic school"
            className="flex items-center gap-1 p-1 bg-[#F3EFE6] border border-[#E5E0D6] rounded-lg overflow-x-auto"
          >
            {SCHOOLS.map((school) => {
              const isActive = selectedSchool === school;
              return (
                <button
                  key={school}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setSelectedSchool(school)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] ${
                    isActive
                      ? 'bg-white text-[#1C1917] shadow-xs'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {school}
                </button>
              );
            })}
          </div>

          {/* Level Toggle & Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex items-center gap-1 p-1 bg-[#F3EFE6] border border-[#E5E0D6] rounded-lg shrink-0">
              {LEVELS.map((lvl) => {
                const isActive = selectedLevel === lvl;
                return (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] ${
                      isActive
                        ? 'bg-[#1E3A8A] text-white'
                        : 'text-[#57534E] hover:text-[#1C1917]'
                    }`}
                  >
                    {lvl}
                  </button>
                );
              })}
            </div>

            <div className="relative min-w-[220px] sm:w-64">
              <Search className="w-4 h-4 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search degree or subject..."
                aria-label="Search academic programs"
                className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#E5E0D6] rounded-md text-[#1C1917] placeholder:text-[#78716C] focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
              />
            </div>
          </div>
        </div>

        {/* Program Directory List */}
        {filteredPrograms.length === 0 ? (
          <div className="py-14 text-center border-b border-[#E5E0D6]">
            <p className="font-serif text-xl text-[#1C1917]">No matching programs found</p>
            <p className="mt-1 text-sm text-[#57534E]">
              Try clearing your search query or switching to All Schools.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-4 px-4 py-2 text-sm font-medium text-[#1E3A8A] bg-[#F3EFE6] hover:bg-[#EBE6DF] rounded-md transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="divide-y divide-[#E5E0D6] border-b border-[#E5E0D6]">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="py-5 px-2 sm:px-4 hover:bg-[#F3EFE6]/60 transition-colors duration-150 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#57534E]">
                    <span className="font-mono tabular-nums text-[#1E3A8A] font-medium">
                      {program.code}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{program.school}</span>
                    <span aria-hidden="true">·</span>
                    <span>{program.level}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{program.duration}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{program.intake} Seats</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#1C1917]">
                    {program.title}
                  </h3>
                  <p className="text-sm text-[#57534E] max-w-2xl line-clamp-2">
                    {program.overview}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveProgram(program)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[40px] text-xs sm:text-sm font-medium text-[#1C1917] bg-white border border-[#E5E0D6] hover:border-[#1E3A8A] hover:text-[#1E3A8A] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A]"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View Curriculum</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between text-xs text-[#57534E] tabular-nums">
          <span>
            Showing {filteredPrograms.length} of {ACADEMIC_PROGRAMS.length} featured autonomous
            programs
          </span>
          <span>Academic Year 2027–28 Regulation</span>
        </div>
      </div>

      {/* Program Syllabus & Eligibility Slide-Over Drawer */}
      {activeProgram && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-[#1C1917]/40 backdrop-blur-[1px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-program-title"
          onClick={() => setActiveProgram(null)}
        >
          <div
            className="w-full max-w-xl bg-[#FBF9F5] h-full overflow-y-auto border-l border-[#E5E0D6] p-6 sm:p-8 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#E5E0D6]">
                <div>
                  <p className="text-xs font-mono tabular-nums text-[#1E3A8A] font-medium">
                    {activeProgram.code} · {activeProgram.level} · {activeProgram.duration}
                  </p>
                  <h3
                    id="drawer-program-title"
                    className="mt-1 font-serif text-2xl sm:text-3xl font-semibold text-[#1C1917]"
                  >
                    {activeProgram.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#57534E]">{activeProgram.school}</p>
                </div>
                <button
                  type="button"
                  aria-label="Close curriculum details"
                  onClick={() => setActiveProgram(null)}
                  className="w-10 h-10 inline-flex items-center justify-center rounded-md border border-[#E5E0D6] bg-white text-[#1C1917] hover:bg-[#F3EFE6] cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-6 space-y-6">
                <div>
                  <h4 className="text-xs font-medium tracking-wide text-[#57534E] mb-2">
                    Program Overview
                  </h4>
                  <p className="text-sm sm:text-base text-[#1C1917] leading-relaxed">
                    {activeProgram.overview}
                  </p>
                </div>

                {/* Definition List Metadata */}
                <dl className="divide-y divide-[#E5E0D6] border-t border-b border-[#E5E0D6]">
                  <div className="py-3 flex justify-between gap-4 text-sm">
                    <dt className="text-[#57534E]">Department Chair</dt>
                    <dd className="font-medium text-[#1C1917] text-right">
                      {activeProgram.departmentHead}
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4 text-sm">
                    <dt className="text-[#57534E]">Annual Sanctioned Intake</dt>
                    <dd className="font-medium text-[#1C1917] tabular-nums text-right">
                      {activeProgram.intake} Students
                    </dd>
                  </div>
                  <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 text-sm">
                    <dt className="text-[#57534E] shrink-0">Eligibility Criteria</dt>
                    <dd className="text-[#1C1917] sm:text-right">{activeProgram.eligibility}</dd>
                  </div>
                </dl>

                <div>
                  <h4 className="text-xs font-medium tracking-wide text-[#57534E] mb-3">
                    Core Coursework Modules
                  </h4>
                  <ul className="space-y-2">
                    {activeProgram.coreSubjects.map((subject, idx) => (
                      <li
                        key={subject}
                        className="flex items-baseline gap-3 text-sm text-[#1C1917] py-1.5 border-b border-[#E5E0D6]/60 last:border-b-0"
                      >
                        <span className="font-mono text-xs text-[#B45309] tabular-nums">
                          0{idx + 1}.
                        </span>
                        <span>{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-medium tracking-wide text-[#57534E] mb-2">
                    Graduate Career Pathways
                  </h4>
                  <p className="text-sm text-[#1C1917]">
                    {activeProgram.careerOutcomes.join(' · ')}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E5E0D6] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  const title = activeProgram.title;
                  setActiveProgram(null);
                  onSelectProgramForAdmission(title);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#1E3A8A] hover:bg-[#172E6E] rounded-md transition-colors cursor-pointer"
              >
                <span>Inquire &amp; Apply for This Program</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setActiveProgram(null)}
                className="px-5 py-3 text-sm font-medium text-[#1C1917] bg-[#F3EFE6] hover:bg-[#EBE6DF] rounded-md transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, FileText } from 'lucide-react';
import { ACADEMIC_PROGRAMS, ADMISSIONS_STEPS } from '../data/collegeData';

interface AdmissionsSectionProps {
  preselectedProgram: string;
}

interface FormValues {
  fullName: string;
  age: string;
  email: string;
  phone: string;
  program: string;
  qualifyingScore: string;
  scholarshipInterest: string;
}

interface FormErrors {
  fullName?: string;
  age?: string;
  email?: string;
  phone?: string;
  program?: string;
}

export function AdmissionsSection({ preselectedProgram }: AdmissionsSectionProps) {
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    age: '',
    email: '',
    phone: '',
    program: preselectedProgram || ACADEMIC_PROGRAMS[0].title,
    qualifyingScore: '',
    scholarshipInterest: 'None / General Merit',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [showProspectusNotice, setShowProspectusNotice] = useState(false);

  useEffect(() => {
    if (preselectedProgram) {
      setValues((prev) => ({ ...prev, program: preselectedProgram }));
      setSubmittedRef(null);
    }
  }, [preselectedProgram]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (values.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter the applicant’s full name.';
    }
    const parsedAge = Number(values.age.trim());
    if (!values.age.trim() || Number.isNaN(parsedAge) || !Number.isInteger(parsedAge) || parsedAge < 15 || parsedAge > 80) {
      nextErrors.age = 'Enter a valid age (15–80).';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    const digitsOnly = values.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      nextErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!values.program) {
      nextErrors.program = 'Please select a preferred program.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const randomCode = Math.floor(100000 + Math.random() * 900000);
    setSubmittedRef(`SKASC-2027-${randomCode}`);
  };

  const handleDownloadProspectus = () => {
    const summaryText = [
      'SRI KRISHNA ARTS AND SCIENCE COLLEGE (AUTONOMOUS)',
      'Kuniamuthur, Coimbatore - 641008, Tamil Nadu',
      'Admissions Prospectus Summary · Academic Year 2027-28',
      '-------------------------------------------------------',
      'Accreditation: NAAC A++ (CGPA 3.68) | NIRF Top 50 Colleges',
      '',
      'AVAILABLE PROGRAMS:',
      ...ACADEMIC_PROGRAMS.map(
        (p) => `- [${p.code}] ${p.title} (${p.level}, ${p.duration}) — Intake: ${p.intake}`
      ),
      '',
      'ADMISSIONS DESK:',
      'Phone: +91 422 267 8400 | Email: admissions@skasc.ac.in',
      'Office Hours: Monday to Saturday, 09:00 to 17:00 IST',
    ].join('\n');

    const blob = new Blob([summaryText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'SKASC-Admissions-Prospectus-2027-28.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setShowProspectusNotice(true);
  };

  return (
    <section id="admissions" className="py-16 lg:py-24 border-b border-[#E5E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Admissions Timeline & Scholarships */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <p className="text-xs font-medium tracking-wide text-[#B45309] mb-2">
                04. Admissions 2027–28
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917] tracking-tight">
                Merit-Based Admissions &amp; Financial Aid
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#57534E] leading-relaxed">
                Admissions are conducted strictly on qualifying academic merit and Tamil Nadu
                reservation norms, with transparent tuition waivers for first-generation graduates,
                high-merit scholars, and state/national athletes.
              </p>
            </div>

            <div className="divide-y divide-[#E5E0D6] border-t border-b border-[#E5E0D6]">
              {ADMISSIONS_STEPS.map((item) => (
                <div key={item.step} className="py-5 flex gap-5">
                  <span className="font-mono text-sm font-medium text-[#1E3A8A] tabular-nums pt-0.5 shrink-0">
                    {item.step}.
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-serif text-lg font-semibold text-[#1C1917]">
                        {item.title}
                      </h3>
                      <span className="text-xs text-[#78716C]">{item.timeline}</span>
                    </div>
                    <p className="mt-1 text-sm text-[#57534E] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#F3EFE6] border border-[#E5E0D6] p-6 space-y-4">
              <h3 className="font-serif text-xl font-semibold text-[#1C1917]">
                Campus Visits &amp; Prospectus
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Prospective students and parents may visit the Admissions Counseling Desk at the
                Sugunapuram campus Monday through Saturday, 09:00–17:00 IST.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleDownloadProspectus}
                  className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[40px] text-sm font-medium text-[#1C1917] bg-white border border-[#E5E0D6] hover:border-[#1E3A8A] hover:text-[#1E3A8A] rounded-md transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download 2027–28 Prospectus</span>
                </button>
                {showProspectusNotice && (
                  <span className="text-xs text-[#14532D] font-medium">
                    Prospectus summary downloaded.
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Validated Application Inquiry Form */}
          <div className="lg:col-span-6 bg-white border border-[#E5E0D6] p-6 sm:p-8">
            {submittedRef ? (
              <div className="py-6 space-y-5">
                <div className="flex items-start gap-3 text-[#14532D]">
                  <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-[#1C1917]">
                      Admissions Inquiry Registered
                    </h3>
                    <p className="mt-1 text-sm text-[#57534E]">
                      Thank you, <span className="font-medium text-[#1C1917]">{values.fullName}</span>.
                      An admissions counselor will reach out within one working day.
                    </p>
                  </div>
                </div>

                <dl className="divide-y divide-[#E5E0D6] border-t border-b border-[#E5E0D6] text-sm">
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-[#57534E]">Reference Number</dt>
                    <dd className="font-mono font-medium text-[#1E3A8A] tabular-nums">
                      {submittedRef}
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-[#57534E]">Applicant Age</dt>
                    <dd className="text-[#1C1917] tabular-nums text-right">{values.age} Years</dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-[#57534E]">Selected Program</dt>
                    <dd className="font-medium text-[#1C1917] text-right">{values.program}</dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-[#57534E]">Applicant Email</dt>
                    <dd className="text-[#1C1917] text-right">{values.email}</dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-[#57534E]">Scholarship Track</dt>
                    <dd className="text-[#1C1917] text-right">{values.scholarshipInterest}</dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={() => {
                    setSubmittedRef(null);
                    setValues({
                      fullName: '',
                      age: '',
                      email: '',
                      phone: '',
                      program: ACADEMIC_PROGRAMS[0].title,
                      qualifyingScore: '',
                      scholarshipInterest: 'None / General Merit',
                    });
                  }}
                  className="px-5 py-2.5 text-sm font-medium text-[#1C1917] bg-[#F3EFE6] hover:bg-[#EBE6DF] rounded-md transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="pb-4 border-b border-[#E5E0D6]">
                  <h3 className="font-serif text-2xl font-semibold text-[#1C1917]">
                    Request Admissions Counseling
                  </h3>
                  <p className="mt-1 text-sm text-[#57534E]">
                    Submit your academic details to receive program fee structure, scholarship
                    eligibility, and counseling slot dates.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div className="sm:col-span-3">
                    <label htmlFor="fullName" className="block text-xs font-medium text-[#1C1917] mb-1.5">
                      Applicant Full Name <span className="text-[#9A3412]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={values.fullName}
                      onChange={(e) => setValues({ ...values, fullName: e.target.value })}
                      placeholder="e.g., Kavya Subramanian"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-[#E5E0D6] rounded-md text-[#1C1917] focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-[#9A3412]">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="age" className="block text-xs font-medium text-[#1C1917] mb-1.5">
                      Age <span className="text-[#9A3412]">*</span>
                    </label>
                    <input
                      id="age"
                      type="number"
                      min={15}
                      max={80}
                      inputMode="numeric"
                      value={values.age}
                      onChange={(e) => setValues({ ...values, age: e.target.value })}
                      placeholder="e.g., 18"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-[#E5E0D6] rounded-md text-[#1C1917] tabular-nums focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                    />
                    {errors.age && (
                      <p className="mt-1 text-xs text-[#9A3412]">{errors.age}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-[#1C1917] mb-1.5">
                      Email Address <span className="text-[#9A3412]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={values.email}
                      onChange={(e) => setValues({ ...values, email: e.target.value })}
                      placeholder="applicant@example.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-[#E5E0D6] rounded-md text-[#1C1917] focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-[#9A3412]">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-[#1C1917] mb-1.5">
                      Mobile Number <span className="text-[#9A3412]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={values.phone}
                      onChange={(e) => setValues({ ...values, phone: e.target.value })}
                      placeholder="+91 98422 00000"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-[#E5E0D6] rounded-md text-[#1C1917] tabular-nums focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-[#9A3412]">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="program" className="block text-xs font-medium text-[#1C1917] mb-1.5">
                    Preferred Degree Program <span className="text-[#9A3412]">*</span>
                  </label>
                  <select
                    id="program"
                    value={values.program}
                    onChange={(e) => setValues({ ...values, program: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-[#E5E0D6] rounded-md text-[#1C1917] focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                  >
                    {ACADEMIC_PROGRAMS.map((prog) => (
                      <option key={prog.id} value={prog.title}>
                        {prog.title} ({prog.level})
                      </option>
                    ))}
                  </select>
                  {errors.program && (
                    <p className="mt-1 text-xs text-[#9A3412]">{errors.program}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="qualifyingScore"
                      className="block text-xs font-medium text-[#1C1917] mb-1.5"
                    >
                      12th / UG Aggregate (%)
                    </label>
                    <input
                      id="qualifyingScore"
                      type="text"
                      value={values.qualifyingScore}
                      onChange={(e) => setValues({ ...values, qualifyingScore: e.target.value })}
                      placeholder="e.g., 88.5% or Awaiting Results"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-[#E5E0D6] rounded-md text-[#1C1917] focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="scholarship"
                      className="block text-xs font-medium text-[#1C1917] mb-1.5"
                    >
                      Scholarship Category
                    </label>
                    <select
                      id="scholarship"
                      value={values.scholarshipInterest}
                      onChange={(e) =>
                        setValues({ ...values, scholarshipInterest: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-[#E5E0D6] rounded-md text-[#1C1917] focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                    >
                      <option value="None / General Merit">None / General Merit</option>
                      <option value="Academic Merit (90%+)">Academic Merit (90%+)</option>
                      <option value="First-Graduate Concession">First-Graduate Concession</option>
                      <option value="Sports & Athletics Quota">Sports &amp; Athletics Quota</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 min-h-[44px] text-sm font-medium text-white bg-[#1E3A8A] hover:bg-[#172E6E] rounded-md transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1E3A8A]"
                  >
                    Submit Admissions Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

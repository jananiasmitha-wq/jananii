import { useState } from 'react';
import { AcademicsSection } from './components/AcademicsSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { CampusAndNoticesSection } from './components/CampusAndNoticesSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PlacementsSection } from './components/PlacementsSection';

export default function App() {
  const [selectedProgramForAdmission, setSelectedProgramForAdmission] = useState<string>('');

  const scrollToAdmissions = (programTitle?: string) => {
    if (programTitle) {
      setSelectedProgramForAdmission(programTitle);
    }
    const target = document.getElementById('admissions');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1917]">
      <Navbar onApplyClick={() => scrollToAdmissions()} />
      <main className="flex-1">
        <HeroSection onApplyClick={() => scrollToAdmissions()} />
        <AcademicsSection
          onSelectProgramForAdmission={(programTitle) => scrollToAdmissions(programTitle)}
        />
        <CampusAndNoticesSection />
        <PlacementsSection />
        <AdmissionsSection preselectedProgram={selectedProgramForAdmission} />
      </main>
      <Footer />
    </div>
  );
}

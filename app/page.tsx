import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import CrystalProfiles from '@/components/CrystalProfiles';
import Science from '@/components/Science';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <CrystalProfiles />
      <Science />
      <Footer />
    </main>
  );
}

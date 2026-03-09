import HeroSection from '../components/sections/HeroSection';
import ExploreSection from '../components/sections/ExploreSection';
import AdvancedSection from '../components/sections/AdvancedSection';
import CoinbaseOneSection from '../components/sections/CoinbaseOneSection';
import BaseAppSection from '../components/sections/BaseAppSection';
import LearnSection from '../components/sections/LearnSection';
import CtaSection from '../components/sections/CtaSection';
import DisclaimerSection from '../components/sections/DisclaimerSection';

// Homepage — assembles all sections in the order extracted from coinbase.com
export default function Home() {
  return (
    <main id="skip-nav-content">
      <HeroSection />
      <ExploreSection />
      <AdvancedSection />
      <CoinbaseOneSection />
      <BaseAppSection />
      <LearnSection />
      <CtaSection />
      <DisclaimerSection />
    </main>
  );
}

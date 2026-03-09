import Button from '../common/Button';
import SectionBadge from '../common/SectionBadge';

// Base App section — bg #FFFFFF, padding 64px 24px
// Layout: image LEFT, text RIGHT (alternating from the CoinbaseOne section)
// Badge: "BASE APP"
// h2: "Countless ways to earn crypto with the Base App."
// CTA: "Learn more" dark button

export default function BaseAppSection() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1228px] mx-auto px-6 py-16 flex flex-col lg:flex-row-reverse items-center gap-12">

        {/* RIGHT (visually left on desktop via flex-row-reverse): Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <SectionBadge>BASE APP</SectionBadge>

          <h2
            className="text-[32px] sm:text-[40px] font-normal leading-[1.1] text-[#0A0B0D] mb-4"
            style={{ fontFamily: "'CoinbaseDisplay', 'Inter', system-ui, sans-serif" }}
          >
            Countless ways to earn<br />crypto with the Base App.
          </h2>

          <p className="text-[18px] text-[#0A0B0D] leading-relaxed mb-8 max-w-[460px]">
            An everything app to trade, create, discover, and chat, all in one place.
          </p>

          <Button variant="dark" size="lg" href="/wallet">
            Learn more
          </Button>
        </div>

        {/* LEFT (visually right): Mockup image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src="https://images.ctfassets.net/o10es7wu5gm1/5bELGzAuqD4Kh1UhKOOuut/c1f4c17cc78ce3505ec04b0eb0522895/CB_LOLP__1_.png"
            alt="Base App screen"
            className="w-full max-w-[480px] h-auto rounded-3xl"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}

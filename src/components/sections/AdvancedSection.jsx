import Button from '../common/Button';

// Advanced Trading section — bg #FFFFFF, padding 64px 24px
// Layout: image LEFT, text RIGHT (at desktop) — matches coinbase.com

export default function AdvancedSection() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1228px] mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT: Mockup image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src="https://images.ctfassets.net/o10es7wu5gm1/3FwiGvu5fYVsludi8jgOY7/14e7039558786f182123e658c6940151/Advanced.png"
            alt="Advanced Trade Mobile UI"
            className="w-full max-w-[480px] h-auto rounded-3xl"
            loading="lazy"
          />
        </div>

        {/* RIGHT: Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h2
            className="text-[32px] sm:text-[40px] font-normal leading-[1.1] text-[#0A0B0D] mb-4"
            style={{ fontFamily: "'CoinbaseDisplay', 'Inter', system-ui, sans-serif" }}
          >
            Powerful tools, designed for the advanced trader.
          </h2>
          <p className="text-[18px] text-[#0A0B0D] leading-relaxed mb-8 max-w-[480px]">
            Powerful analytical tools with the safety and security of Coinbase deliver the ultimate
            trading experience. Tap into sophisticated charting capabilities and more.
          </p>
          <Button variant="dark" size="lg" href="/advanced-trade">
            Start trading
          </Button>
        </div>

      </div>
    </section>
  );
}

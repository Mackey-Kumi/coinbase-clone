import EmailInputGroup from '../common/EmailInputGroup';

// Hero section — extracted layout: image LEFT, text RIGHT at desktop (1440px)
// bg: #FFFFFF, inner max-width 1228px, padding 40px 24px
// h1: 64px / weight 400 / line-height 64px / color #0A0B0D

export default function HeroSection() {
  return (
    <section className="bg-white w-full overflow-hidden">
      <div className="max-w-[1228px] mx-auto px-6 py-10 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-0 min-h-[560px]">

        {/* LEFT: App mockup */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start flex-shrink-0">
          <div className="relative w-full max-w-[480px] lg:max-w-none">
            <img
              src="https://images.ctfassets.net/o10es7wu5gm1/4lbSrfvF333XkPz7WycixQ/afbeefb68eab9405594b2e9bfbb9a152/Hero__4_.png"
              alt="Coinbase"
              width={971}
              height={971}
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>

        {/* RIGHT: Text + CTA */}
        <div className="w-full lg:w-1/2 lg:pl-12 flex flex-col items-start justify-center">
          <h1
            className="text-[40px] sm:text-[52px] lg:text-[64px] font-normal leading-[1] text-[#0A0B0D] mb-5 tracking-tight"
            style={{ fontFamily: "'CoinbaseDisplay', 'Inter', system-ui, sans-serif" }}
          >
            The future of<br />finance is here.
          </h1>

          <p className="text-[18px] text-[#0A0B0D] mb-8 leading-relaxed max-w-[440px]">
            Trade crypto and more on a platform you can trust.
          </p>

          <EmailInputGroup />

          <p className="mt-4 text-sm text-[#5B616E]">
            Stocks and prediction markets not available in your jurisdiction.
          </p>
        </div>

      </div>
    </section>
  );
}

import Button from '../common/Button';
import SectionBadge from '../common/SectionBadge';

// Coinbase One section — bg #FFFFFF, padding 64px 24px
// Layout: text LEFT, image RIGHT
// Badge: "COINBASE ONE" / color #5B616E
// h2: "Zero trading fees, more rewards."
// CTA: "Claim free trial" dark button

export default function CoinbaseOneSection() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1228px] mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT: Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <SectionBadge>COINBASE ONE</SectionBadge>

          <h2
            className="text-[32px] sm:text-[40px] font-normal leading-[1.1] text-[#0A0B0D] mb-4"
            style={{ fontFamily: "'CoinbaseDisplay', 'Inter', system-ui, sans-serif" }}
          >
            Zero trading fees,<br />more rewards.
          </h2>

          <p className="text-[18px] text-[#0A0B0D] leading-relaxed mb-8 max-w-[460px]">
            Get more out of crypto with one membership: zero trading fees, boosted rewards, priority
            support, and more.
          </p>

          <Button variant="dark" size="lg" href="/one">
            Claim free trial
          </Button>
        </div>

        {/* RIGHT: Mockup image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="https://images.ctfassets.net/o10es7wu5gm1/4CyfFj8M0X8tKnzh8AgdxT/f0fa52750499d9b1691f62880906ff3e/zero_fees_us.png"
            alt="Coinbase One zero fees"
            className="w-full max-w-[480px] h-auto rounded-3xl"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}

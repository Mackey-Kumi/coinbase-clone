import EmailInputGroup from '../common/EmailInputGroup';

// CTA section — bg #FFFFFF, padding 40px 24px
// h2: "Take control of your money"
// Subtitle: "Start your portfolio today and discover crypto"
// Reuses the EmailInputGroup component

export default function CtaSection() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1228px] mx-auto px-6 py-10">
        <div className="flex flex-col items-start gap-4">
          <h2
            className="text-[32px] sm:text-[40px] font-normal leading-tight text-[#0A0B0D]"
            style={{ fontFamily: "'CoinbaseDisplay', 'Inter', system-ui, sans-serif" }}
          >
            Take control of your money
          </h2>
          <p className="text-[18px] text-[#0A0B0D] mb-2">
            Start your portfolio today and discover crypto
          </p>
          <EmailInputGroup />
        </div>
      </div>
    </section>
  );
}

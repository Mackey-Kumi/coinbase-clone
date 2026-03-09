// Disclaimer section — legal copy displayed below the CTA section
// Small centered text, color #5B616E, padding 64px 24px

export default function DisclaimerSection() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1228px] mx-auto px-6 py-16 text-center">
        <p className="text-sm text-[#5B616E] mb-4">
          DEX trading is offered by Coinbase Bermuda Technologies Ltd.
        </p>
        <p className="text-sm text-[#5B616E] max-w-[740px] mx-auto leading-relaxed">
          Products and features may not be available in all regions. Information is for informational
          purposes only, and is not (i) an offer, or solicitation of an offer, to invest in, or to
          buy or sell, any interests or shares, or to participate in any investment trading strategy
          or (ii) intended to provide accounting, legal, or tax advice, or investment recommendations.
          Trading cryptocurrency comes with risk.
        </p>
      </div>
    </section>
  );
}

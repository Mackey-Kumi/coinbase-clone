// Small badge chip used above section headings, e.g. "COINBASE ONE" / "BASE APP"
// Matches coinbase.com: color #5B616E, small caps style, with logo prefix
export default function SectionBadge({ children, className = '' }) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#5B616E] uppercase mb-4 ${className}`}
    >
      {/* Coinbase logo mark */}
      <img
        src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/coinbaseLogoNavigation-4.svg"
        alt=""
        aria-hidden="true"
        className="w-4 h-4"
      />
      {children}
    </div>
  );
}

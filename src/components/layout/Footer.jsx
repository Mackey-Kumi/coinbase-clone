import { footerColumns } from '../../data/footerLinks';

export default function Footer() {
  return (
    <footer className="bg-[#EEF0F3]">
      <div className="max-w-[1228px] mx-auto px-6 py-16">

        {/* Logo */}
        <div className="mb-10">
          <a href="/" aria-label="Coinbase Home">
            <img
              src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/coinbaseLogoNavigation-4.svg"
              alt="Coinbase"
              width="44"
              height="44"
            />
          </a>
        </div>

        {/* Link columns grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-x-6 gap-y-10 mb-12">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-[#0A0B0D] mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#5B616E] hover:text-[#0052FF] transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#D0D5DD] pt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-[#5B616E]">
          <span>© 2026 Coinbase</span>
          <div className="flex items-center gap-4 flex-wrap">
            <a href="/legal" className="hover:text-[#0052FF] transition-colors">Privacy</a>
            <span aria-hidden="true">•</span>
            <a href="/legal/user-agreement" className="hover:text-[#0052FF] transition-colors">Terms &amp; Conditions</a>
            <span aria-hidden="true">•</span>
            <span>Global · English</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

// ─── Dropdown data ────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: 'Cryptocurrencies', href: '/explore' },
  {
    label: 'Individuals',
    items: [
      { title: 'Buy and sell',     desc: 'Buy, sell, and use crypto',                             href: '/signup',          icon: 'coin'    },
      { title: 'Advanced',         desc: 'Professional-grade trading tools',                       href: '/advanced-trade',  icon: 'chart'   },
      { title: 'Base App',         desc: 'Post, earn, trade, and chat, all in one place',           href: '/wallet',          icon: 'app'     },
      { title: 'Earn',             desc: 'Stake your crypto and earn rewards',                     href: '/earn',            icon: 'percent' },
      { title: 'Coinbase One',     desc: 'Get zero trading fees and more',                         href: '/one',             icon: 'target'  },
      { title: 'Coinbase Wealth',  desc: 'Institutional-grade services for UHNW',                  href: '/wealth',          icon: 'diamond' },
      { title: 'Private Client',   desc: 'For trusts, family offices, UHNWIs',                     href: '/private-client',  icon: 'diamond' },
      { title: 'Credit Card',      desc: 'Earn up to 4% bitcoin back',                             href: '/creditcard',      icon: 'card'    },
      { title: 'Onchain',          desc: 'Dive into the world of onchain apps',                    href: '/web3',            icon: 'globe'   },
      { title: 'Debit Card',       desc: 'Spend crypto, get crypto back',                          href: '/card',            icon: 'card'    },
      { title: 'Learn',            desc: 'Crypto tips and guides',                                 href: '/learn',           icon: 'book'    },
    ],
  },
  {
    label: 'Businesses',
    items: [
      { title: 'Business',         desc: 'Crypto trading and payments for startups and SMBs',     href: '/business',        icon: 'building' },
      { title: 'Payments',         desc: 'The stablecoin payments stack for commerce platforms',  href: '/payments',        icon: 'zap'      },
      { title: 'Asset Listings',   desc: 'List your asset on Coinbase',                           href: '/listings',        icon: 'list'     },
      { title: 'Token Manager',    desc: 'Platform for token distributions, vesting, and lockups',href: '/tokenmanager',    icon: 'coin'     },
    ],
  },
  {
    label: 'Institutions',
    items: [
      { title: 'Trading & Financing', desc: 'Professional prime brokerage services',              href: '/prime/financing',          icon: 'chart'   },
      { title: 'Custody',             desc: 'Securely store all your digital assets',             href: '/prime/custody',            icon: 'lock'    },
      { title: 'Staking',             desc: 'Explore staking across our products',                href: '/staking',                  icon: 'percent' },
      { title: 'Onchain Wallet',      desc: 'Institutional-grade wallet to get onchain',          href: '/prime/onchain-wallet',     icon: 'wallet'  },
      { title: 'Exchange',            desc: 'Spot markets for high-frequency trading',            href: '/exchange',                 icon: 'chart'   },
      { title: 'Intl. Exchange',      desc: 'Access perpetual futures markets',                   href: '/international-exchange',   icon: 'globe'   },
      { title: 'Derivatives',         desc: 'Trade an accessible futures market',                 href: '/derivatives',              icon: 'chart'   },
      { title: 'Verified Pools',      desc: 'Transparent, verified liquidity pools',              href: '/verified-pools',           icon: 'target'  },
    ],
  },
  {
    label: 'Developers',
    items: [
      { title: 'Payments',         desc: 'Fast and global stablecoin payments',                   href: '/developer-platform/payments',   icon: 'zap'      },
      { title: 'Trading',          desc: 'Launch crypto trading and custody for your users',      href: '/developer-platform/trading',    icon: 'chart'    },
      { title: 'Wallets',          desc: 'Deploy customizable and scalable wallets',              href: '/developer-platform/wallets',    icon: 'wallet'   },
      { title: 'Stablecoins',      desc: 'Access USDC and Coinbase Custom Stablecoins',          href: '/developer-platform/products/stablecoin-as-a-service', icon: 'coin' },
      { title: 'Banks & Brokerages', desc: 'Regulated offerings for retail & institutional',     href: '/developer-platform/banks',      icon: 'building' },
      { title: 'Payment Firms',    desc: 'Near-instant, low-cost, global payment rails',         href: '/developer-platform/paymentfirms', icon: 'zap'    },
      { title: 'Startups',         desc: "Launch your business with the world's leader in crypto", href: '/developer-platform/startups', icon: 'rocket'  },
    ],
  },
  {
    label: 'Company',
    items: [
      { title: 'About',      desc: 'Powering the crypto economy',          href: '/about',                    icon: 'coin'    },
      { title: 'Careers',    desc: 'Work with us',                         href: '/careers',                  icon: 'person'  },
      { title: 'Affiliates', desc: 'Help introduce the world to crypto',   href: '/affiliates',               icon: 'share'   },
      { title: 'Support',    desc: 'Find answers to your questions',       href: 'https://help.coinbase.com', icon: 'help'    },
      { title: 'Blog',       desc: 'Read the latest from Coinbase',        href: '/blog',                     icon: 'doc'     },
      { title: 'Security',   desc: 'The most trusted & secure',            href: '/security',                 icon: 'shield'  },
    ],
  },
];

// ─── Icon map ──────────────────────────────────────────────────────────────────

function NavIcon({ name }) {
  const cls = 'w-5 h-5 text-[#0A0B0D]';
  switch (name) {
    case 'coin':    return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v2m0 8v2M9 9.5C9 8.12 10.34 7 12 7s3 1.12 3 2.5c0 1.5-1.34 2.5-3 2.5s-3 1-3 2.5C9 16.88 10.34 18 12 18s3-1.12 3-2.5"/></svg>;
    case 'chart':   return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
    case 'app':     return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>;
    case 'percent': return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>;
    case 'target':  return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
    case 'diamond': return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.7 10.3A2.41 2.41 0 0 0 2.5 11L11 22l1-1 1 1 8.5-11a2.41 2.41 0 0 0-.2-.7L18 4H6Z"/></svg>;
    case 'card':    return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/></svg>;
    case 'globe':   return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20A14.5 14.5 0 0 0 12 2"/><path d="M2 12h20"/></svg>;
    case 'book':    return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
    case 'building':return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M12 14h.01M8 14h.01M16 14h.01"/></svg>;
    case 'zap':     return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
    case 'list':    return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>;
    case 'lock':    return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
    case 'wallet':  return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>;
    case 'rocket':  return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>;
    case 'person':  return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
    case 'share':   return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>;
    case 'help':    return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>;
    case 'doc':     return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>;
    case 'shield':  return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>;
    default:        return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>;
  }
}

// ─── Dropdown panel ────────────────────────────────────────────────────────────

function DropdownPanel({ items, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className="absolute left-0 right-0 top-full bg-white border-t border-[#EEF0F3] shadow-lg z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-[1228px] mx-auto px-6 py-8">
        <div className="grid grid-cols-2 gap-1 max-w-[640px]">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.href.startsWith('http') ? item.href : item.href}
              {...(item.href.startsWith('http') ? { as: 'a', href: item.href } : {})}
              className="flex items-start gap-4 px-4 py-3 rounded-2xl hover:bg-[#EEF0F3] transition-colors duration-100 group"
            >
              {/* Icon box */}
              <div className="flex-shrink-0 w-10 h-10 rounded-[12px] bg-[#EEF0F3] flex items-center justify-center group-hover:bg-white transition-colors">
                <NavIcon name={item.icon} />
              </div>
              {/* Text */}
              <div className="min-w-0">
                <div className="text-[14px] font-semibold text-[#0A0B0D] leading-snug">{item.title}</div>
                <div className="text-[13px] text-[#5B616E] leading-snug mt-0.5">{item.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Icons ─────────────────────────────────────────────────────────────────────

function SearchIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>;
}
function GlobeIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;
}
function HamburgerIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
}
function CloseIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>;
}

// ─── Navbar ────────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const closeTimer = useRef(null);

  const openDropdown = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#EEF0F3]">
      {/* Main nav bar */}
      <div className="relative max-w-[1228px] mx-auto px-6 h-[72px] flex items-center justify-between gap-6">

        {/* Left: Logo */}
        <Link to="/" className="flex-shrink-0" aria-label="Coinbase Home">
          <img
            src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/coinbaseLogoNavigation-4.svg"
            alt="Coinbase Logo"
            width="44"
            height="44"
          />
        </Link>

        {/* Center: Desktop nav */}
        <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation">
          {NAV_ITEMS.map((item) =>
            item.items ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openDropdown(item.label)}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={`h-9 px-4 rounded-full text-sm font-semibold transition-colors duration-150 flex items-center gap-1 ${
                    activeDropdown === item.label
                      ? 'ring-2 ring-[#0A0B0D] text-[#0A0B0D]'
                      : 'text-[#0A0B0D] hover:bg-[#EEF0F3]'
                  }`}
                  aria-expanded={activeDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                </button>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="h-9 px-4 rounded-full text-sm font-semibold text-[#0A0B0D] hover:bg-[#EEF0F3] transition-colors duration-150 flex items-center"
                onMouseEnter={() => setActiveDropdown(null)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 ml-auto xl:ml-0">
          <button className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full text-[#0A0B0D] hover:bg-[#EEF0F3] transition-colors" aria-label="Search">
            <SearchIcon />
          </button>
          <button className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full text-[#0A0B0D] hover:bg-[#EEF0F3] transition-colors" aria-label="Change language">
            <GlobeIcon />
          </button>
          <Button variant="secondary" size="md" href="/signin" className="hidden sm:inline-flex">Sign in</Button>
          <Button variant="primary" size="md" href="/signup">Sign up</Button>
          <button
            className="xl:hidden flex w-10 h-10 items-center justify-center rounded-full text-[#0A0B0D] hover:bg-[#EEF0F3] transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Desktop dropdown panel — rendered outside constrained div to be full width */}
      {activeDropdown && (() => {
        const found = NAV_ITEMS.find(i => i.label === activeDropdown);
        return found?.items ? (
          <div
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <DropdownPanel
              items={found.items}
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            />
          </div>
        ) : null;
      })()}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-[#EEF0F3] bg-white px-6 py-4 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) =>
              item.items ? (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between py-3 text-base font-semibold text-[#0A0B0D] border-b border-[#EEF0F3]"
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pl-4 py-2 flex flex-col gap-1">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.title}
                          to={sub.href}
                          className="flex items-center gap-3 py-2 text-sm text-[#0A0B0D] hover:text-[#0052FF]"
                          onClick={() => setMobileOpen(false)}
                        >
                          <div className="w-8 h-8 rounded-[10px] bg-[#EEF0F3] flex items-center justify-center flex-shrink-0">
                            <NavIcon name={sub.icon} />
                          </div>
                          <span className="font-semibold">{sub.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="py-3 text-base font-semibold text-[#0A0B0D] hover:text-[#0052FF] border-b border-[#EEF0F3] last:border-0 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="flex items-center gap-3 pt-4">
              <Button variant="secondary" size="md" href="/signin" className="flex-1">Sign in</Button>
              <Button variant="primary" size="md" href="/signup" className="flex-1">Sign up</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}


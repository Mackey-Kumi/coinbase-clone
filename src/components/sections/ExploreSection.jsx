import { useState } from 'react';
import Button from '../common/Button';
import CryptoTableRow from '../crypto/CryptoTableRow';
import { cryptos } from '../../data/cryptoData';

// Explore section — bg #EEF0F3, inner max-width 1228px, padding 64px 24px
// Dark card: bg #0A0B0D, border-radius 32px, padding 24px
// Active tab: bg #282B31 / text white; Inactive tab: text #8A919E

const TABS = ['Tradable', 'Top gainers', 'New on Coinbase'];

export default function ExploreSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#EEF0F3] w-full">
      <div className="max-w-[1228px] mx-auto px-6 py-16">

        {/* 2-col layout: left = text + button, right = dark table */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">

          {/* Left column: heading, subtitle, button */}
          <div className="flex flex-col items-start gap-6 lg:w-[400px] lg:shrink-0">
            <h2
              className="text-[32px] sm:text-[40px] font-normal leading-[1.1] text-[#0A0B0D]"
              style={{ fontFamily: "'CoinbaseDisplay', 'Inter', system-ui, sans-serif" }}
            >
              Explore crypto like Bitcoin, Ethereum, and Dogecoin.
            </h2>
            <p className="text-[18px] text-[#5B616E] leading-relaxed">
              Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
            </p>
            <Button variant="dark" size="lg" href="/explore">
              See more assets
            </Button>
          </div>

          {/* Right column: dark card */}
          <div className="flex-1 min-w-0">
            <div className="bg-[#0A0B0D] rounded-[32px] p-6 w-full">
              {/* Tab bar */}
              <div
                className="flex items-center gap-1 mb-4 p-1 rounded-[56px] w-fit"
                role="tablist"
                aria-label="Asset category tabs"
              >
                {TABS.map((tab, i) => (
                  <button
                    key={tab}
                    role="tab"
                    aria-selected={activeTab === i}
                    onClick={() => setActiveTab(i)}
                    className={`h-10 px-6 rounded-[56px] text-sm font-semibold transition-colors duration-150 ${
                      activeTab === i
                        ? 'bg-[#282B31] text-white'
                        : 'text-[#8A919E] hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Crypto rows */}
              <div className="flex flex-col gap-1" role="tabpanel">
                {cryptos.map((crypto) => (
                  <CryptoTableRow key={crypto.id} crypto={crypto} />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

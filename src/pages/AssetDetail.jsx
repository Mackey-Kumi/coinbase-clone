import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cryptos } from '../data/cryptoData';

// Minimal SVG sparkline chart
function MiniChart({ positive, coinId }) {
  const color = positive ? '#05B169' : '#F45532';
  const gradId = `chart-grad-${coinId}`;
  const path = positive
    ? 'M0 60 C20 55, 40 45, 60 40 C80 35, 100 25, 120 20 C140 15, 160 18, 180 15 C200 12, 220 10, 240 8'
    : 'M0 10 C20 15, 40 25, 60 30 C80 35, 100 42, 120 45 C140 48, 160 50, 180 55 C200 58, 220 60, 240 62';
  return (
    <svg viewBox="0 0 240 70" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L240 70 L0 70 Z`} fill={`url(#${gradId})`} />
      <path d={path} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function StatItem({ label, value, change }) {
  return (
    <div className="py-3 border-b border-[rgba(91,97,110,0.15)] last:border-b-0">
      <p className="text-[11px] font-semibold text-[#5B616E] uppercase tracking-wide mb-0.5">{label}</p>
      <p className="text-[15px] font-medium text-[#0A0B0D]">{value}</p>
      {change != null && (
        <p className={`text-[13px] font-medium ${change >= 0 ? 'text-[#05B169]' : 'text-[#F45532]'}`}>
          {change >= 0 ? '↗' : '↘'}{Math.abs(change).toFixed(2)}%
        </p>
      )}
    </div>
  );
}

const TIME_PERIODS = ['1H', '1D', '1W', '1M', '1Y', 'ALL'];
const TABS = ['About', 'Info', 'Insights', 'FAQ', 'News', 'Social'];

export default function AssetDetail() {
  const { asset } = useParams();
  const [activePeriod, setActivePeriod] = useState('1D');
  const [activeTab, setActiveTab] = useState('About');

  const coin = cryptos.find((c) => c.id === asset) || cryptos[0];
  const isPositive = coin.change >= 0;
  const priceChange24h = ((coin.price * coin.change) / 100).toFixed(2);
  const formattedPrice = coin.price >= 1000
    ? coin.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : coin.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 });

  return (
    <div className="bg-white min-h-screen">
      {/* Sub-navbar */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-[rgba(91,97,110,0.15)]">
        <div className="max-w-[1440px] mx-auto px-6 flex items-center gap-4 h-[56px]">
          {/* Coin identity */}
          <div className="flex items-center gap-2 mr-2">
            <img src={coin.icon} alt={coin.name} className="w-7 h-7 rounded-full" onError={(e) => { e.target.style.display='none'; }} />
            <span className="text-[15px] font-semibold text-[#0A0B0D]">{coin.name} Price</span>
            <span className="text-[15px] text-[#5B616E]">({coin.ticker})</span>
          </div>

          {/* Live price in sub-nav (visible when scrolled) */}
          <span className="text-[15px] font-semibold text-[#0A0B0D]">${formattedPrice}</span>
          <span className={`text-[13px] font-medium ${isPositive ? 'text-[#05B169]' : 'text-[#F45532]'}`}>
            {isPositive ? '↗' : '↘'}{Math.abs(coin.change).toFixed(2)}%
          </span>

          <div className="flex-1" />

          {/* Actions */}
          <button className="w-8 h-8 rounded-full border border-[#E9ECF2] flex items-center justify-center text-[#5B616E] hover:bg-[#F5F7FA] transition-colors">
            ☆
          </button>
          <button className="w-8 h-8 rounded-full border border-[#E9ECF2] flex items-center justify-center text-[#5B616E] hover:bg-[#F5F7FA] transition-colors">
            ↑
          </button>

          {/* Tab row */}
          <div className="flex items-center gap-1 ml-4">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-[#0A0B0D] text-white'
                    : 'bg-transparent text-[#0A0B0D] hover:bg-[#EEF0F3]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1440px] mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Left sidebar (~295px) */}
          <aside className="w-[295px] shrink-0">
            <h2 className="text-[20px] font-semibold text-[#0A0B0D] mb-3">About {coin.name}</h2>
            <p className="text-[14px] text-[#5B616E] leading-relaxed mb-5">
              {coin.description || `${coin.name} is a leading cryptocurrency available for trading on Coinbase.`}
            </p>

            {/* External link chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              <a
                href="#"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E9ECF2] text-[13px] text-[#0A0B0D] hover:bg-[#EEF0F3] transition-colors"
              >
                <span>📄</span> Whitepaper
              </a>
              <a
                href="#"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E9ECF2] text-[13px] text-[#0A0B0D] hover:bg-[#EEF0F3] transition-colors"
              >
                <span>🌐</span> Official website
              </a>
            </div>

            {/* Buy CTA */}
            <Link
              to="/signup"
              className="flex items-center justify-between w-full px-8 py-4 bg-[#0052FF] text-white text-[16px] font-semibold rounded-[56px] hover:bg-[#0039B3] transition-colors"
            >
              <span>Buy {coin.name}</span>
              <span>→</span>
            </Link>

            {/* Happening now card */}
            <div className="mt-5 p-4 bg-[#FAFAFA] rounded-2xl border border-[#E9ECF2]">
              <p className="text-[13px] font-semibold text-[#0A0B0D] mb-1">Happening now</p>
              <p className="text-[11px] text-[#5B616E] mb-2"> AI generated · 1h ago</p>
              <p className="text-[13px] text-[#0A0B0D] leading-relaxed">
                {coin.ticker} represents 60% of total cryptocurrency market cap, while surging ↗67% in daily volume.
              </p>
            </div>

            {/* Keep exploring card */}
            <div className="mt-4 p-4 bg-[#F0B90B] rounded-2xl">
              <p className="text-[13px] font-semibold text-[#0A0B0D] mb-1">Keep exploring</p>
              <p className="text-[12px] text-[#0A0B0D] mb-3">View assets on the same network and more with search</p>
              <Link
                to="/explore"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0052FF] text-white text-[13px] font-semibold rounded-full hover:bg-[#0039B3] transition-colors"
              >
                Explore →
              </Link>
            </div>
          </aside>

          {/* Right main content */}
          <div className="flex-1 min-w-0">
            {/* Price header */}
            <div className="mb-2">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-[40px] font-normal text-[#0A0B0D]">${formattedPrice}</span>
                <span className={`text-[16px] font-medium ${isPositive ? 'text-[#05B169]' : 'text-[#F45532]'}`}>
                  {isPositive ? '↗' : '↘'}${Math.abs(Number(priceChange24h)).toLocaleString('en-US', { minimumFractionDigits: 2 })} ({Math.abs(coin.change).toFixed(2)}%)
                </span>
              </div>
            </div>

            {/* Time period selector */}
            <div className="flex items-center justify-end gap-1 mb-2">
              {TIME_PERIODS.map((period) => (
                <button
                  key={period}
                  onClick={() => setActivePeriod(period)}
                  className={`px-3 py-1 rounded-lg text-[13px] font-medium transition-colors ${
                    activePeriod === period
                      ? 'bg-[#E9ECF2] text-[#0A0B0D]'
                      : 'bg-transparent text-[#0A0B0D] hover:bg-[#F5F7FA]'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>

            {/* Chart area */}
            <div className="w-full h-[280px] relative mb-0">
              <MiniChart positive={isPositive} coinId={coin.id} />
            </div>

            {/* Stats row: Trading Insights, Market Stats, Performance */}
            <div className="mt-6 grid grid-cols-3 gap-0 border-t border-[rgba(91,97,110,0.15)]">
              {/* Trading Insights */}
              <div className="px-0 pr-8 pt-6 border-r border-[rgba(91,97,110,0.15)]">
                <h2 className="text-[16px] font-semibold text-[#0A0B0D] mb-4">Trading Insights</h2>
                <div className="grid grid-cols-2 gap-x-6">
                  {/* Buyer ratio donut */}
                  <div className="flex flex-col items-center mb-4">
                    <div className="relative w-16 h-16 mb-2">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <circle cx="18" cy="18" r="15" fill="none" stroke="#E9ECF2" strokeWidth="3" />
                        <circle
                          cx="18" cy="18" r="15" fill="none"
                          stroke="#0052FF" strokeWidth="3"
                          strokeDasharray={`${75 * 0.942} ${(100 - 75) * 0.942}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[13px] font-semibold">75%</span>
                    </div>
                    <p className="text-[11px] font-semibold text-[#5B616E] uppercase tracking-wide">BUYER RATIO</p>
                  </div>
                  <div className="flex flex-col gap-2 pt-1">
                    <div>
                      <p className="text-[11px] font-semibold text-[#5B616E] uppercase tracking-wide">BUYERS</p>
                      <p className="text-[14px] font-medium">38K <span className="text-[#05B169] text-[12px]">↗7.69%</span></p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-[#5B616E] uppercase tracking-wide">SELLERS</p>
                      <p className="text-[14px] font-medium">14K <span className="text-[#05B169] text-[12px]">↗2.66%</span></p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#5B616E] uppercase tracking-wide">TRADERS</p>
                    <p className="text-[14px] font-medium">50K <span className="text-[#05B169] text-[12px]">↗6.29%</span></p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#5B616E] uppercase tracking-wide">SEARCHED</p>
                    <p className="text-[14px] font-medium">9.8K</p>
                  </div>
                </div>
              </div>

              {/* Market Stats */}
              <div className="px-8 pt-6 border-r border-[rgba(91,97,110,0.15)]">
                <h2 className="text-[16px] font-semibold text-[#0A0B0D] mb-4">Market Stats</h2>
                <div className="grid grid-cols-2 gap-x-4">
                  <StatItem label="MARKET CAP" value={`$${coin.marketCap}`} change={coin.change} />
                  <StatItem label="FDV" value={`$${coin.marketCap}`} />
                  <StatItem label="CIRC. SUPPLY" value={coin.circulatingSupply || '19.7M BTC'} />
                  <StatItem label="MAX SUPPLY" value={coin.maxSupply || '21M BTC'} />
                  <StatItem label="TOTAL SUPPLY" value={coin.circulatingSupply || '19.7M BTC'} />
                </div>
              </div>

              {/* Performance */}
              <div className="pl-8 pt-6">
                <h2 className="text-[16px] font-semibold text-[#0A0B0D] mb-4">Performance</h2>
                <div className="grid grid-cols-2 gap-x-4">
                  <StatItem label="POPULARITY" value="#1" />
                  <StatItem label="DOMINANCE" value="60.1%" />
                  <StatItem label="VOLUME (24H)" value={`$${coin.volume}`} change={60.66} />
                  <StatItem label="VOLUME (7D)" value="$3.34T" />
                  <StatItem label="VOLUME (30D)" value="$13.87T" />
                  <StatItem label="ALL TIME HIGH" value={coin.allTimeHigh || '$108,786'} />
                </div>
              </div>
            </div>

            {/* Additional details row */}
            <div className="mt-8 pt-6 border-t border-[rgba(91,97,110,0.15)] grid grid-cols-4 gap-8">
              <div>
                <h2 className="text-[16px] font-semibold text-[#0A0B0D] mb-4">Additional details</h2>
              </div>
              <div>
                <h2 className="text-[15px] font-semibold text-[#0A0B0D] mb-3">Market details</h2>
                <div className="text-[13px] text-[#5B616E] space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wide">BTC VS MARKETS</p>
                  <p className="text-[14px] text-[#05B169] font-medium">↗ 4.2%</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wide mt-3">BTC VS ETH</p>
                  <p className="text-[14px] text-[#F45532] font-medium">↘ 19.3%</p>
                </div>
              </div>
              <div>
                <h2 className="text-[15px] font-semibold text-[#0A0B0D] mb-3">Network & Addresses</h2>
                <div className="text-[13px] text-[#5B616E] space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#0A0B0D]">NetworkAddress</p>
                  {['Arbitrum', 'Solana', 'Ethereum'].map((network) => (
                    <div key={network} className="flex items-center gap-2">
                      <span className="text-[13px] text-[#0A0B0D]">{network}</span>
                      <span className="text-[11px] text-[#5B616E] font-mono truncate">0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-[15px] font-semibold text-[#0A0B0D] mb-3">Price history</h2>
                <div className="text-[13px] space-y-2">
                  <div className="grid grid-cols-3 gap-2 text-[11px] font-semibold uppercase tracking-wide text-[#5B616E] mb-1">
                    <span>Time</span><span className="text-right">Price</span><span className="text-right">Change</span>
                  </div>
                  {[
                    { time: 'Today', price: formattedPrice, change: '+0.28%' },
                    { time: '1 Day', price: (coin.price * 0.997).toLocaleString('en-US', {maximumFractionDigits: 2}), change: '+0.35%' },
                    { time: '1 Week', price: (coin.price * 0.978).toLocaleString('en-US', {maximumFractionDigits: 2}), change: '+2.25%' },
                    { time: '1 Month', price: (coin.price * 0.932).toLocaleString('en-US', {maximumFractionDigits: 2}), change: '+7.31%' },
                  ].map(({ time, price, change: ch }) => (
                    <div key={time} className="grid grid-cols-3 gap-2">
                      <span className="text-[#0A0B0D]">{time}</span>
                      <span className="text-right text-[#0A0B0D]">${price}</span>
                      <span className="text-right text-[#05B169] font-medium">{ch}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ section */}
            <div className="mt-10 pt-6 border-t border-[rgba(91,97,110,0.15)]">
              <h2 className="text-[20px] font-semibold text-[#0A0B0D] mb-6">FAQ</h2>
              <div className="space-y-4">
                {[
                  { q: `What is ${coin.name}?`, a: coin.description },
                  { q: `How does ${coin.name} work?`, a: `${coin.name} uses a decentralized blockchain ledger to record transactions. Miners or validators confirm transactions and add them to the blockchain in exchange for newly created ${coin.ticker} tokens.` },
                  { q: `How can I buy ${coin.name}?`, a: `You can buy ${coin.name} on Coinbase in just a few minutes. Create an account, add a payment method, and purchase ${coin.ticker} instantly.` },
                ].map(({ q, a }) => (
                  <details key={q} className="border-b border-[rgba(91,97,110,0.15)] pb-4">
                    <summary className="text-[15px] font-semibold text-[#0A0B0D] cursor-pointer list-none flex justify-between items-center">
                      {q}
                      <span className="text-[#5B616E] text-xl">+</span>
                    </summary>
                    <p className="mt-3 text-[14px] text-[#5B616E] leading-relaxed">{a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* Related assets */}
            <div className="mt-10 pt-6 border-t border-[rgba(91,97,110,0.15)]">
              <h3 className="text-[18px] font-semibold text-[#0A0B0D] mb-4">Popular cryptocurrencies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {cryptos.slice(0, 8).filter(c => c.id !== coin.id).slice(0, 4).map((c) => {
                  const pos = c.change >= 0;
                  return (
                    <Link
                      key={c.id}
                      to={`/price/${c.id}`}
                      className="flex items-center gap-3 p-3 rounded-xl border border-[#E9ECF2] hover:bg-[#F5F7FA] transition-colors"
                    >
                      <img src={c.icon} alt={c.name} className="w-8 h-8 rounded-full" onError={(e) => { e.target.style.display='none'; }} />
                      <div>
                        <p className="text-[13px] font-semibold text-[#0A0B0D]">{c.ticker}</p>
                        <p className={`text-[12px] font-medium ${pos ? 'text-[#05B169]' : 'text-[#F45532]'}`}>
                          {pos ? '+' : ''}{c.change.toFixed(2)}%
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

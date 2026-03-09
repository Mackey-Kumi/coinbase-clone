import { Link } from 'react-router-dom';
import { cryptos, topMovers } from '../data/cryptoData';

// Sparkline — static SVG paths approximating up/down trends
function Sparkline({ up, color }) {
  const path = up
    ? 'M0 20 Q10 18 20 15 Q30 12 40 10 Q50 8 60 5'
    : 'M0 5 Q10 7 20 10 Q30 14 40 16 Q50 18 60 20';
  return (
    <svg width="60" height="25" viewBox="0 0 60 25" fill="none">
      <path d={path} stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Market stat card
function StatCard({ label, value, change, up }) {
  return (
    <div className="bg-[#EEF0F3] rounded-2xl px-6 py-5 flex flex-col gap-3 min-w-[200px] flex-1">
      <span className="text-sm text-[#5B616E] font-medium">{label}</span>
      <span className="text-lg font-semibold text-[#0A0B0D]">{value}</span>
      <span className={`text-sm font-medium flex items-center gap-1 ${up ? 'text-[#27AD75]' : 'text-[#F0616D]'}`}>
        {up ? '↗' : '↘'} {change}
      </span>
    </div>
  );
}

// Full table row for Explore page
function ExploreTableRow({ coin, rank }) {
  const isUp = coin.change >= 0;
  const formattedPrice = coin.price >= 1000
    ? `$${coin.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    : `$${coin.price.toFixed(coin.price >= 1 ? 2 : 4)}`;

  return (
    <tr className="border-b border-[#EEF0F3] hover:bg-[#F8F9FA] transition-colors">
      {/* Rank + Watchlist */}
      <td className="py-4 pl-4 pr-2 w-10">
        <span className="text-sm text-[#8A919E]">{rank}</span>
      </td>
      {/* Asset */}
      <td className="py-4 pr-4">
        <Link to={`/price/${coin.id}`} className="flex items-center gap-3 group">
          <img
            src={coin.icon}
            alt={coin.name}
            width={36}
            height={36}
            className="rounded-full w-9 h-9 shrink-0"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <span
            className="hidden w-9 h-9 rounded-full bg-[#EEF0F3] items-center justify-center text-xs font-semibold text-[#5B616E] shrink-0"
          >
            {coin.ticker.substring(0, 2)}
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[#0A0B0D] group-hover:text-[#0052FF] transition-colors leading-tight">
              {coin.name}
            </span>
            <span className="text-xs text-[#8A919E]">{coin.ticker}</span>
          </div>
        </Link>
      </td>
      {/* Market price */}
      <td className="py-4 pr-4 text-sm font-medium text-[#0A0B0D] text-right">
        {formattedPrice}
      </td>
      {/* Chart sparkline */}
      <td className="py-4 pr-4 hidden md:table-cell">
        <Sparkline up={isUp} color={isUp ? '#27AD75' : '#F0616D'} />
      </td>
      {/* Change */}
      <td className={`py-4 pr-4 text-sm font-medium text-right ${isUp ? 'text-[#27AD75]' : 'text-[#F0616D]'}`}>
        {isUp ? '+' : ''}{coin.change.toFixed(2)}%
      </td>
      {/* Mkt cap */}
      <td className="py-4 pr-4 text-sm text-[#0A0B0D] text-right hidden lg:table-cell">
        ${coin.marketCap}
      </td>
      {/* Volume */}
      <td className="py-4 pr-4 text-sm text-[#8A919E] text-right hidden lg:table-cell">
        ${coin.volume}
      </td>
      {/* Trade */}
      <td className="py-4 pr-4 text-right">
        <Link
          to={`/price/${coin.id}`}
          className="inline-flex items-center justify-center bg-[#0052FF] text-white text-sm font-semibold px-4 py-1.5 rounded-[40px] hover:bg-[#0039B3] transition-colors whitespace-nowrap"
        >
          Trade
        </Link>
      </td>
    </tr>
  );
}

// Top mover mini card
function MoverCard({ ticker, change, price, up }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-[#EEF0F3] last:border-0">
      <span className="text-sm font-semibold text-[#0A0B0D]">{ticker}</span>
      <div className="flex flex-col items-end gap-0.5">
        <span className={`text-sm font-semibold ${up ? 'text-[#27AD75]' : 'text-[#F0616D]'}`}>
          {up ? '↗' : '↘'} {change.toFixed(2)}%
        </span>
        <span className="text-xs text-[#8A919E]">{price}</span>
      </div>
    </div>
  );
}

export default function Explore() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1340px] mx-auto px-6 py-8">

        {/* ─── Page Header ─── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-[#EEF0F3]">
          <div>
            <h1
              className="text-[28px] font-semibold text-[#0A0B0D] leading-tight"
              style={{ fontFamily: "'CoinbaseDisplay', 'Inter', system-ui, sans-serif" }}
            >
              Explore crypto
            </h1>
            <p className="text-sm text-[#5B616E] mt-1">
              Coinbase 50 Index is up{' '}
              <span className="text-[#27AD75] font-semibold">↗ 0.85%</span>{' '}
              (24hrs)
            </p>
          </div>
          {/* Search */}
          <div className="relative flex-1 sm:max-w-[360px]">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A919E]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </span>
            <input
              type="search"
              placeholder="Search for an asset"
              className="w-full bg-[#EEF0F3] rounded-full pl-10 pr-4 py-3 text-sm text-[#0A0B0D] placeholder:text-[#8A919E] outline-none focus:ring-2 focus:ring-[#0052FF]"
            />
          </div>
        </div>

        {/* ─── Two-column layout ─── */}
        <div className="flex gap-8 mt-8 items-start">

          {/* ── Left: Main content ── */}
          <div className="flex-1 min-w-0">

            {/* Market stats */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-[#0A0B0D]">Market stats</h2>
                <div className="flex gap-2">
                  <button className="p-1.5 rounded-full hover:bg-[#EEF0F3] text-[#5B616E]" aria-label="Previous">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <button className="p-1.5 rounded-full hover:bg-[#EEF0F3] text-[#5B616E]" aria-label="Next">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                </div>
              </div>
              <p className="text-sm text-[#5B616E] mb-4">
                The overall crypto market is growing this week. As of today, the total crypto market capitalization is
                $24.28 trillion, representing a 1.87% increase from last week.{' '}
                <button className="text-[#0052FF] hover:underline text-sm">Read more</button>
              </p>
              <div className="flex gap-4 overflow-x-auto pb-2">
                <StatCard label="Total market cap" value="$24.28T" change="0.13%" up={false} />
                <StatCard label="Trade volume" value="$1.82T" change="58.39%" up={true} />
                <StatCard label="Buy-sell ratio" value="$0.76" change="0.31%" up={true} />
                <StatCard label="BTC dominance" value="60.01%" change="0.28%" up={false} />
              </div>
            </div>

            {/* Asset table */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-[#0A0B0D]">
                  Crypto market prices
                  <span className="text-sm font-normal text-[#8A919E] ml-2">18,532 assets</span>
                </h2>
              </div>

              {/* Filter bar */}
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <button className="flex items-center gap-1 px-3 py-1.5 bg-[#EEF0F3] rounded-lg text-sm text-[#0A0B0D] hover:bg-[#E2E5EA]">
                  All assets
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-[#EEF0F3] rounded-lg text-sm text-[#0A0B0D] hover:bg-[#E2E5EA]">
                  1D
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-[#EEF0F3] rounded-lg text-sm text-[#0A0B0D] hover:bg-[#E2E5EA]">
                  USD
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-[#EEF0F3] rounded-lg text-sm text-[#0A0B0D] hover:bg-[#E2E5EA]">
                  10 rows
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto rounded-xl border border-[#EEF0F3]">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#EEF0F3]">
                      <th className="py-3 pl-4 pr-2 w-10"></th>
                      <th className="py-3 pr-4 text-left text-sm font-medium text-[#5B616E]">Asset</th>
                      <th className="py-3 pr-4 text-right text-sm font-medium text-[#5B616E]">Market price</th>
                      <th className="py-3 pr-4 text-left text-sm font-medium text-[#5B616E] hidden md:table-cell">Chart</th>
                      <th className="py-3 pr-4 text-right text-sm font-medium text-[#5B616E]">Change</th>
                      <th className="py-3 pr-4 text-right text-sm font-medium text-[#5B616E] hidden lg:table-cell">Mkt cap</th>
                      <th className="py-3 pr-4 text-right text-sm font-medium text-[#5B616E] hidden lg:table-cell">Volume</th>
                      <th className="py-3 pr-4 text-right text-sm font-medium text-[#5B616E]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cryptos.map((coin, i) => (
                      <ExploreTableRow key={coin.id} coin={coin} rank={i + 1} />
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-[#5B616E]">1–10 of 18,532 assets</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map(n => (
                    <button
                      key={n}
                      className={`w-8 h-8 rounded text-sm ${n === 1 ? 'bg-[#0052FF] text-white' : 'text-[#0A0B0D] hover:bg-[#EEF0F3]'}`}
                    >
                      {n}
                    </button>
                  ))}
                  <span className="text-sm text-[#8A919E] px-1">...</span>
                  <button className="w-8 h-8 rounded text-sm text-[#0A0B0D] hover:bg-[#EEF0F3]">1854</button>
                </div>
              </div>

              {/* CTA under table */}
              <div className="mt-6 py-5 border-t border-[#EEF0F3] text-center">
                <p className="text-sm text-[#5B616E] mb-3">
                  Create a Coinbase account to trade crypto. It&apos;s quick, easy, and secure.
                </p>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center bg-[#0052FF] text-white font-semibold px-8 py-3 rounded-[56px] hover:bg-[#0039B3] transition-colors"
                >
                  Start Trading
                </Link>
              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="hidden xl:flex flex-col gap-6 w-[327px] shrink-0">

            {/* Get started card */}
            <div className="bg-[#0052FF] rounded-3xl p-6 text-white overflow-hidden relative">
              <h3 className="text-lg font-bold mb-1">Get started</h3>
              <p className="text-sm text-blue-200 mb-4">Create your account today</p>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center bg-white text-[#0052FF] font-semibold text-sm px-5 py-2 rounded-[56px] hover:bg-[#EEF0F3] transition-colors"
              >
                Sign up
              </Link>
              {/* Decorative coin */}
              <div className="absolute right-4 top-4 w-20 h-20 rounded-full bg-[#0039B3] flex items-center justify-center text-3xl select-none">
                ✦
              </div>
            </div>

            {/* Top movers */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-[#0A0B0D]">Top movers</h3>
                <div className="flex gap-1">
                  <button className="p-1 rounded-full hover:bg-[#EEF0F3] text-[#5B616E]" aria-label="Previous">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <button className="p-1 rounded-full hover:bg-[#EEF0F3] text-[#5B616E]" aria-label="Next">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                </div>
              </div>
              <p className="text-xs text-[#8A919E] mb-3">24hr change</p>
              {topMovers.map((m) => (
                <MoverCard key={m.ticker} {...m} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

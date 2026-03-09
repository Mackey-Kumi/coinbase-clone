// CryptoTableRow — single row inside the dark Explore table card
// Extracted specs: icon 40px, name white semibold, ticker gray, price white, change green/red
export default function CryptoTableRow({ crypto }) {
  const { name, ticker, price, change, icon } = crypto;
  const isPositive = change >= 0;

  const formatPrice = (p) => {
    if (p >= 1000) return `$${p.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (p >= 1)    return `$${p.toFixed(2)}`;
    return `$${p.toFixed(4)}`;
  };

  return (
    <a
      href={`/price/${name.toLowerCase()}`}
      className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-[#1A1D24] transition-colors duration-150 group"
    >
      {/* Left: icon + name */}
      <div className="flex items-center gap-3">
        <img
          src={icon}
          alt={name}
          className="w-10 h-10 rounded-full flex-shrink-0"
        />
        <div>
          <p className="text-white font-semibold text-sm leading-tight">{name}</p>
          <p className="text-[#8A919E] text-xs leading-tight">{ticker}</p>
        </div>
      </div>

      {/* Right: price + change */}
      <div className="text-right">
        <p className="text-white font-semibold text-sm leading-tight">{formatPrice(price)}</p>
        <p
          className={`text-xs font-medium leading-tight ${isPositive ? 'text-[#27AD75]' : 'text-[#F0616D]'}`}
        >
          {isPositive ? '+' : ''}{change.toFixed(2)}%
        </p>
      </div>
    </a>
  );
}

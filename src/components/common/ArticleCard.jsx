// Learn section article card component
export default function ArticleCard({ article }) {
  const { title, category, image, alt, href } = article;

  return (
    <a
      href={href}
      className="block group rounded-2xl overflow-hidden bg-white flex-shrink-0 w-[320px] sm:w-auto hover:shadow-lg transition-shadow duration-200"
    >
      {/* Card image */}
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>

      {/* Card body */}
      <div className="p-5">
        {category && (
          <span className="text-xs font-semibold text-[#5B616E] uppercase tracking-wider mb-2 block">
            {category}
          </span>
        )}
        <h3 className="text-base font-semibold text-[#0A0B0D] leading-snug group-hover:text-[#0052FF] transition-colors">
          {title}
        </h3>
      </div>
    </a>
  );
}

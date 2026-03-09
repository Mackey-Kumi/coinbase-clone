import Button from '../common/Button';
import ArticleCard from '../common/ArticleCard';
import { learnArticles } from '../../data/learnArticles';

// Learn section — bg #EEF0F3, padding 64px 24px
// Header: h2 left, description + "Read More" button right
// Cards: 3 article cards in a row (horizontal scroll on mobile)

export default function LearnSection() {
  return (
    <section className="bg-[#EEF0F3] w-full">
      <div className="max-w-[1228px] mx-auto px-6 py-16">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          {/* Left: heading */}
          <h2
            className="text-[32px] sm:text-[40px] font-normal leading-[1.1] text-[#0A0B0D] max-w-[400px]"
            style={{ fontFamily: "'CoinbaseDisplay', 'Inter', system-ui, sans-serif" }}
          >
            New to crypto?<br />Learn some<br />crypto basics
          </h2>

          {/* Right: description + CTA */}
          <div className="flex flex-col items-start lg:items-start gap-5 max-w-[440px]">
            <p className="text-[18px] text-[#5B616E] leading-relaxed">
              Beginner guides, practical tips, and market updates for first-timers, experienced
              investors, and everyone in between
            </p>
            <Button variant="dark" size="lg" href="/learn">
              Read More
            </Button>
          </div>
        </div>

        {/* Article cards — horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-2 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 snap-x snap-mandatory scrollbar-none">
          {learnArticles.map((article) => (
            <div key={article.id} className="snap-start lg:snap-align-none flex-shrink-0 lg:flex-shrink w-[85vw] sm:w-[360px] lg:w-auto">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

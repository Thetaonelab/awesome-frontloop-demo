import { useState, useMemo } from 'react';
import { products as allProducts } from '../data/mockData';
import type { Product } from '../data/mockData';

const categories = ['All', ...Array.from(new Set(allProducts.map((p) => p.category)))];

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <span className="flex items-center gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-xs">
          {i < full ? '★' : i === full && half ? '⯨' : '☆'}
        </span>
      ))}
    </span>
  );
}

function Badge({ badge }: { badge: Product['badge'] }) {
  if (!badge) return null;
  const styles: Record<string, string> = {
    new: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    sale: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
    'best-seller': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  };
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${styles[badge]}`}
    >
      {badge}
    </span>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
      {/* Image area */}
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Badge */}
      <div className="absolute left-3 top-3">
        <Badge badge={product.badge} />
      </div>

      {/* Out of stock overlay */}
      {!product.inStock && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-[2px] dark:bg-slate-900/70">
          <span className="rounded-xl bg-slate-900/90 px-4 py-2 text-sm font-semibold text-white dark:bg-white/90 dark:text-slate-900">
            Out of Stock
          </span>
        </div>
      )}

      {/* Details */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
          {product.category}
        </span>
        <h3 className="font-bold text-ink dark:text-white">{product.name}</h3>
        <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-[11px] text-slate-400">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold text-ink dark:text-white">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-slate-400 line-through">${product.originalPrice}</span>
            )}
          </div>
          <button
            disabled={!product.inStock}
            className="rounded-xl bg-accent px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-accent-deep disabled:cursor-not-allowed disabled:opacity-40"
          >
            {product.inStock ? 'Add to Cart' : 'Sold Out'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Storefront() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      const matchCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  const inStockCount = filtered.filter((p) => p.inStock).length;
  const outCount = filtered.length - inStockCount;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-ink dark:text-white">Storefront</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {filtered.length} product{filtered.length !== 1 ? 's' : ''}
            {outCount > 0 && (
              <span className="text-slate-400">
                {' '}· {inStockCount} in stock, {outCount} out of stock
              </span>
            )}
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-ink placeholder-slate-400 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-accent"
          />
        </div>
      </div>

      {/* Category filter chips */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const count =
            cat === 'All'
              ? allProducts.length
              : allProducts.filter((p) => p.category === cat).length;
          const isActive = cat === activeCategory;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-accent text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
              <span
                className={`ml-1.5 rounded-full px-1.5 text-[10px] ${
                  isActive ? 'bg-white/20' : 'bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Empty state */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white py-20 dark:border-slate-600 dark:bg-slate-900">
          <span className="text-5xl">🛋️</span>
          <h3 className="mt-4 text-lg font-bold text-ink dark:text-white">No products found</h3>
          <p className="mt-1 text-sm text-slate-500">
            Try a different search term or category.
          </p>
          <button
            onClick={() => {
              setSearch('');
              setActiveCategory('All');
            }}
            className="mt-4 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-deep"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        /* Product grid */
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

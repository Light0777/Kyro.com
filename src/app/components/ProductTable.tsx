'use client';

import { IoTrendingUp } from 'react-icons/io5';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';

interface ProductRow {
  rank: number;
  gpu: string;
  bestFor: string;
  price?: string;
  pros?: string[];
  cons?: string[];
}

interface ProductTableProps {
  title?: string;
  description?: string;
  products: ProductRow[];
  showRankIcons?: boolean;
}

export default function ProductTable({ 
  title = "Best GPU Recommendations", 
  description = "Here's our curated list of the best GPUs for your build:",
  products,
  showRankIcons = true 
}: ProductTableProps) {
  
  const getRankIcon = (rank: number) => {
    if (!showRankIcons) return null;
    switch (rank) {
      case 1:
        return <FaTrophy className="text-yellow-500 inline mr-1" size={18} />;
      case 2:
        return <FaMedal className="text-gray-400 inline mr-1" size={18} />;
      case 3:
        return <FaMedal className="text-amber-600 inline mr-1" size={18} />;
      default:
        return <span className="text-gray-500 font-bold mr-1">#{rank}</span>;
    }
  };

  const getRankBadge = (rank: number) => {
    if (!showRankIcons) return `#${rank}`;
    if (rank === 1) return "🥇 Best Overall";
    if (rank === 2) return "🥈 Runner Up";
    if (rank === 3) return "🥉 Third Place";
    return `#${rank} Pick`;
  };

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 not-prose">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {description && (
          <p className="text-purple-100 text-sm mt-1">{description}</p>
        )}
      </div>

      {/* Table - Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                Rank
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                GPU
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                Best For
              </th>
              {products[0]?.price && (
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Price (Approx)
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {products.map((product) => (
              <tr 
                key={product.rank}
                className="hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                  <div className="flex items-center gap-2">
                    {getRankIcon(product.rank)}
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">
                      {getRankBadge(product.rank)}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {product.gpu}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <IoTrendingUp className="text-green-500" size={16} />
                    {product.bestFor}
                  </div>
                </td>
                {product.price && (
                  <td className="px-6 py-4 text-sm font-medium text-purple-600 dark:text-purple-400">
                    {product.price}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden divide-y divide-gray-100 dark:divide-gray-800">
        {products.map((product) => (
          <div key={product.rank} className="p-4 hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">
                  {product.rank === 1 ? "🥇" : product.rank === 2 ? "🥈" : product.rank === 3 ? "🥉" : `#${product.rank}`}
                </span>
                <span className="font-bold text-gray-900 dark:text-white">
                  {product.gpu}
                </span>
              </div>
              {product.price && (
                <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">
                  {product.price}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mb-2">
              <IoTrendingUp className="text-green-500" size={14} />
              <span>Best for: {product.bestFor}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-3 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          💡 Prices are approximate and may vary by retailer and region.
        </p>
      </div>
    </div>
  );
}
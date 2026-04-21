'use client';

import Image from 'next/image';
import Link from 'next/link';

interface InternalLinkBoxProps {
  imageUrl?: string;
  title: string;
  description: string;
  slug: string;
}

export default function InternalLinkBox({
  imageUrl,
  title,
  description,
  slug
}: InternalLinkBoxProps) {
  return (
    <div className="my-6 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950/20 rounded-r-xl p-3 sm:p-5 not-prose">
      <div className="flex justify-center items-center gap-5">
        {imageUrl && (
          <div className="relative w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem] -mt-[2rem]">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes='auto'
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="text-xs text-purple-600 dark:text-purple-400 mb-0.5 font-medium">
            Recommended
          </div>
          <Link 
            href={`/blog/${slug}`}
            className="font-semibold text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition text-sm sm:text-base line-clamp-2"
          >
            {title}
          </Link>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1 line-clamp-2">
            {description}
          </p>
          <Link 
            href={`/blog/${slug}`}
            className="inline-block mt-1.5 text-xs sm:text-sm text-purple-600 dark:text-purple-400 hover:underline font-medium"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}
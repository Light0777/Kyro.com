// components/GoogleAdsense.tsx
import Script from 'next/script';

export default function GoogleAdsense() {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9635487371462309"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
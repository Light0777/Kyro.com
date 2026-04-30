import React from 'react'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import {
  IoArrowForward,
  IoWalletOutline,
  IoShieldCheckmarkOutline,
  IoFlashOutline,
  IoGameControllerOutline,
  IoHardwareChipOutline,
  IoBulbOutline,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoYoutube,
} from 'react-icons/io5'

// ─── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: '9+', label: 'Articles published' },
  { value: '97', label: 'Readers this week' },
  { value: '4', label: 'Topics covered' },
  { value: '6', label: 'Days since launch' },
]

// ─── What we cover cards ──────────────────────────────────────────────────────
const TOPICS = [
  {
    icon: <IoGameControllerOutline size={24} />,
    title: 'Gaming Builds',
    body: 'Budget PC builds and setups that actually run the games you care about — no overspending required.',
    tag: 'Most popular',
    tagStyle: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
  },
  {
    icon: <IoBulbOutline size={24} />,
    title: 'Student Gadgets',
    body: 'Gear that helps you study, create, and stay productive without wiping out your semester budget.',
    tag: 'For students',
    tagStyle: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
  },
  {
    icon: <IoHardwareChipOutline size={24} />,
    title: 'Tech Guides',
    body: 'Plain-English explainers on the gadgets, apps, and trends worth knowing about right now.',
    tag: 'Always current',
    tagStyle: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',
  },
]

// ─── Values ───────────────────────────────────────────────────────────────────
const VALUES = [
  {
    icon: <IoWalletOutline size={22} />,
    title: 'Budget-first',
    body: 'Every recommendation is built around real prices — the kind people actually spend.',
  },
  {
    icon: <IoShieldCheckmarkOutline size={22} />,
    title: 'No sponsored bias',
    body: "We don't take money to push products. If it's here, we genuinely think it earns its place.",
  },
  {
    icon: <IoFlashOutline size={22} />,
    title: 'Always updated',
    body: 'Tech moves fast. We keep our guides current so your never acting on last years prices.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] transition-colors duration-300">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background accent — a soft blue gradient bleed from logo colours */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.10) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 pt-20 pb-16 text-center">
          {/* Eyebrow */}
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-4">
            About iknowtechworld
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
            Tech that fits your{' '}
            <span className="text-blue-600 dark:text-blue-400">budget.</span>
            <br />
            Guides that respect{' '}
            <span className="text-teal-500 dark:text-teal-400">your time.</span>
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            iknowtechworld was built for students and gamers who are tired of review sites that
            recommend gear nobody can actually afford. We write honest, jargon-free guides around
            real budgets.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────── */}
      <section className="border-y border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#09090b]">
        <div className="max-w-4xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 tabular-nums">
                {value}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">
              The story
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 leading-snug">
              Started 6 days ago. Already reaching readers worldwide.
            </h2>
            <div className="space-y-4 text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
              <p>
                Most tech blogs are written by people who get free hardware. We started
                iknowtechworld because we were the other kind — the people who have to
                research for weeks before spending.
              </p>
              <p>
                Six days in, we have readers from India, the US, Canada, and beyond.
                The site is growing because the content is genuinely useful — that's the
                only strategy we have and the only one we need.
              </p>
              <p>
                Every article answers a real question: "What's the best I can build for
                ₹25K?" or "Which gadget actually helps students study?" If we wouldn't
                buy it, we don't recommend it.
              </p>
            </div>
          </div>

          {/* Visual card stack */}
          <div className="relative h-72 md:h-80 hidden md:block">
            {/* Card 3 — back */}
            <div
              className="absolute inset-x-8 top-4 h-full rounded-2xl bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900"
              style={{ transform: 'rotate(3deg)' }}
              aria-hidden
            />
            {/* Card 2 — middle */}
            <div
              className="absolute inset-x-4 top-2 h-full rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60"
              style={{ transform: 'rotate(-1.5deg)' }}
              aria-hidden
            />
            {/* Card 1 — front */}
            <div className="absolute inset-0 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg p-6 flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  ik
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">iknowtechworld</p>
                  <p className="text-xs text-gray-400">iknowtechworld.online</p>
                </div>
              </div>
              <div className="space-y-2">
                {['Best GTA 6 Setup Under ₹24.8K', '7 Best Educational Gadgets', 'Smart Creator Setup ₹45K'].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>97 readers this week</span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">↑ Growing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE COVER ────────────────────────────────────────────── */}
      <section className="border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">
              What we cover
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
              Three topics, one focus: value for money
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {TOPICS.map(({ icon, title, body, tag, tagStyle }) => (
              <div
                key={title}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
              >
                <span className={`self-start text-xs font-semibold px-2.5 py-0.5 rounded-full ${tagStyle}`}>
                  {tag}
                </span>
                <span className="text-blue-600 dark:text-blue-400">{icon}</span>
                <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">
            Our values
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            What we stand for
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {VALUES.map(({ icon, title, body }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3">
              <span className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                {icon}
              </span>
              <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
            Ready to read?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Browse our latest guides — no fluff, no filler, just the info you actually need.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/blogpage"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-blue-300 dark:hover:shadow-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Browse all articles <IoArrowForward size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
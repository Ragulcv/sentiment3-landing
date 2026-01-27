'use client'

import { useState, useEffect } from 'react'
import {
  ArrowUpRight,
  ArrowRight,
  Plus,
  Minus,
  Check,
  X,
  Zap,
  BarChart2,
  Users,
  Target,
  TrendingUp,
  Eye,
  MessageSquare,
  DollarSign,
  Clock,
  Shield,
  Sparkles,
  Play,
  ChevronRight,
} from 'lucide-react'

// ============================================
// NAVIGATION
// ============================================
function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-cream/90 backdrop-blur-lg border-b border-sand/50' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-midnight rounded-xl flex items-center justify-center group-hover:bg-lime transition-colors duration-300">
              <span className="text-lime font-display font-bold text-lg group-hover:text-midnight transition-colors duration-300">S3</span>
            </div>
            <span className="font-display font-semibold text-xl text-midnight">Sentiment3</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {['How it works', 'Pricing', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-5 py-2 text-slate hover:text-midnight font-medium transition-colors animated-underline"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#pricing" className="text-slate hover:text-midnight font-medium transition-colors">
              View plans
            </a>
            <a href="#final-cta" className="btn-primary">
              <span className="flex items-center gap-2">
                Get started
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`w-6 h-0.5 bg-midnight transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-midnight transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-midnight transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-sand/50 mt-2 pt-6">
            <div className="flex flex-col gap-4">
              {['How it works', 'Pricing', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-lg font-medium text-slate hover:text-midnight transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a href="#final-cta" className="btn-lime text-center mt-4" onClick={() => setMobileOpen(false)}>
                Get started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section className="min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-lime/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-lavender/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="tag tag-dark">
                <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
                Now accepting projects
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-midnight leading-[1.05] tracking-tight">
              Turn CMC presence into{' '}
              <span className="relative inline-block">
                <span className="relative z-10">price action</span>
                <span className="absolute bottom-2 left-0 right-0 h-4 bg-lime/40 -rotate-1" />
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-xl text-slate max-w-lg leading-relaxed">
              Systematic sentiment management that drives trading volume and community confidence. Not random posting. Not expensive agencies.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#pricing" className="btn-lime flex items-center justify-center gap-2 text-lg px-8 py-4">
                Start with $699
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#how-it-works" className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4">
                See how it works
              </a>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 border-t border-sand">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-midnight flex items-center justify-center">
                    <Users className="w-4 h-4 text-lime" />
                  </div>
                  <span><strong className="text-midnight">100+</strong> verified KOLs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-midnight flex items-center justify-center">
                    <Clock className="w-4 h-4 text-lime" />
                  </div>
                  <span><strong className="text-midnight">6 years</strong> Web3 marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-midnight flex items-center justify-center">
                    <Shield className="w-4 h-4 text-lime" />
                  </div>
                  <span><strong className="text-midnight">Cancel</strong> anytime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative lg:pl-8">
            {/* Main card */}
            <div className="relative bg-midnight rounded-3xl p-8 shadow-soft-lg animate-float">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coral to-lavender flex items-center justify-center">
                    <span className="text-2xl font-display font-bold text-white">$Y</span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-lg">YourToken</h3>
                    <p className="text-white/50 text-sm">CMC Sentiment</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-lime/20 px-3 py-1.5 rounded-full">
                  <TrendingUp className="w-4 h-4 text-lime" />
                  <span className="text-lime font-semibold">+24.5%</span>
                </div>
              </div>

              {/* Sentiment bars */}
              <div className="space-y-4 mb-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70 text-sm">Bullish</span>
                    <span className="text-lime font-semibold">78%</span>
                  </div>
                  <div className="h-3 bg-charcoal rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-gradient-to-r from-lime to-mint rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70 text-sm">Neutral</span>
                    <span className="text-white/70 font-semibold">15%</span>
                  </div>
                  <div className="h-3 bg-charcoal rounded-full overflow-hidden">
                    <div className="h-full w-[15%] bg-white/30 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70 text-sm">Bearish</span>
                    <span className="text-coral/80 font-semibold">7%</span>
                  </div>
                  <div className="h-3 bg-charcoal rounded-full overflow-hidden">
                    <div className="h-full w-[7%] bg-coral/60 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="h-24 relative">
                <svg className="w-full h-full" viewBox="0 0 400 80" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#c8ff00" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#c8ff00" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,60 Q40,55 80,40 T160,45 T240,25 T320,30 T400,15"
                    fill="none"
                    stroke="#c8ff00"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,60 Q40,55 80,40 T160,45 T240,25 T320,30 T400,15 V80 H0 Z"
                    fill="url(#chartGradient)"
                  />
                </svg>
              </div>

              {/* Footer stats */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-lime" />
                  <span className="text-white/70 text-sm">1.2K votes today</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
                  <span className="text-lime text-sm font-medium">Live</span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-cream rounded-2xl p-4 shadow-soft border border-sand">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-lime/20 flex items-center justify-center">
                  <BarChart2 className="w-5 h-5 text-lime-dim" />
                </div>
                <div>
                  <div className="font-display font-bold text-midnight">+156%</div>
                  <div className="text-xs text-slate">Volume 24h</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-cream rounded-2xl p-4 shadow-soft border border-sand">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-lavender/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-lavender" />
                </div>
                <div>
                  <div className="font-display font-bold text-midnight">47 KOLs</div>
                  <div className="text-xs text-slate">Active this week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// MARQUEE / TRUST BAR
// ============================================
function TrustMarquee() {
  const items = [
    'CMC Presence',
    'Binance Square',
    'Sentiment Votes',
    'KOL Activation',
    'Volume Correlation',
    'Strategic Narrative',
    'Community Trust',
    'Price Action',
  ]

  return (
    <div className="py-8 bg-midnight overflow-hidden">
      <div className="flex animate-marquee">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span className="text-lime font-display font-medium text-lg whitespace-nowrap">{item}</span>
            <span className="text-lime/30">◆</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================
// PROBLEM SECTION
// ============================================
function ProblemSection() {
  const problems = [
    { icon: Eye, title: 'No CMC visibility', desc: 'Traders scroll past you' },
    { icon: MessageSquare, title: 'Inconsistent narrative', desc: 'Community loses faith' },
    { icon: TrendingUp, title: 'Random posting', desc: 'Zero momentum built' },
    { icon: DollarSign, title: '$20-50K agencies', desc: 'Burning runway fast' },
  ]

  return (
    <section className="section-padding bg-mist relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="tag tag-outline mb-4">The problem</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-midnight mb-6">
            Why most tokens fail at CMC marketing
          </h2>
          <p className="text-xl text-slate">
            You shipped something great. But without systematic presence, you're invisible to traders.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="group bg-cream rounded-2xl p-6 border border-sand hover:border-coral/30 transition-all card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-4 group-hover:bg-coral/20 transition-colors">
                <problem.icon className="w-6 h-6 text-coral" />
              </div>
              <h3 className="font-display font-semibold text-midnight mb-2">{problem.title}</h3>
              <p className="text-slate text-sm">{problem.desc}</p>
            </div>
          ))}
        </div>

        {/* Solution callout */}
        <div className="bg-midnight rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                What you actually need:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Consistent CMC & Binance Square presence',
                  'Positive sentiment from verified KOLs',
                  'Coordinated posting strategy',
                  'Measurable, transparent results',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-lime flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-midnight" />
                    </div>
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:text-right">
              <a href="#pricing" className="btn-lime inline-flex items-center gap-2">
                See how we solve this
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// HOW IT WORKS SECTION
// ============================================
function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Systematic Content Creation',
      desc: '20-40 custom CMC posts/month. Strategic narrative sequencing. Binance Square updates. All aligned with your token story.',
      icon: Target,
      color: 'lime',
    },
    {
      num: '02',
      title: 'Curated KOL Activation',
      desc: '30-50 verified influencers. Coordinated campaigns. Sentiment voting boosts. Real engagement from real accounts.',
      icon: Users,
      color: 'lavender',
    },
    {
      num: '03',
      title: 'Measurable Results',
      desc: 'Real-time dashboard. Volume correlation tracking. Full transparency on every post, vote, and activation.',
      icon: BarChart2,
      color: 'mint',
    },
  ]

  return (
    <section id="how-it-works" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="tag tag-lime mb-4">How it works</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-midnight mb-6">
            The Sentiment3 system
          </h2>
          <p className="text-xl text-slate">
            Productized. Measurable. Systematic. Not another agency black box.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-sand z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sand" />
                </div>
              )}

              <div className="bg-mist rounded-3xl p-8 h-full border border-sand hover:border-midnight/20 transition-all relative z-10 card-hover">
                {/* Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-6xl font-display font-bold text-sand group-hover:text-midnight/10 transition-colors">
                    {step.num}
                  </span>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    step.color === 'lime' ? 'bg-lime/20' :
                    step.color === 'lavender' ? 'bg-lavender/20' : 'bg-mint/20'
                  }`}>
                    <step.icon className={`w-7 h-7 ${
                      step.color === 'lime' ? 'text-lime-dim' :
                      step.color === 'lavender' ? 'text-lavender' : 'text-mint'
                    }`} />
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-midnight mb-3">
                  {step.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-midnight text-white px-8 py-4 rounded-full">
            <Zap className="w-5 h-5 text-lime" />
            <span className="font-display font-medium">
              Content → KOL Push → Sentiment Boost → Volume
            </span>
            <TrendingUp className="w-5 h-5 text-lime" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// COMPARISON SECTION
// ============================================
function ComparisonSection() {
  return (
    <section className="section-padding bg-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="tag tag-outline mb-4">Why us</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-midnight mb-6">
            Why projects choose Sentiment3
          </h2>
        </div>

        {/* Comparison table */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* DIY */}
          <div className="bg-cream rounded-3xl p-8 border border-sand">
            <h3 className="font-display font-bold text-xl text-midnight mb-6">DIY</h3>
            <div className="space-y-4">
              {[
                { text: '20+ hours/week', bad: true },
                { text: 'Inconsistent results', bad: true },
                { text: 'No KOL network', bad: true },
                { text: 'Learning curve', bad: true },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-coral" />
                  </div>
                  <span className="text-slate">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Agencies */}
          <div className="bg-cream rounded-3xl p-8 border border-sand">
            <h3 className="font-display font-bold text-xl text-midnight mb-6">Agencies</h3>
            <div className="space-y-4">
              {[
                { text: '$20-50K/month', bad: true },
                { text: 'Opaque processes', bad: true },
                { text: '3-month minimums', bad: true },
                { text: 'Generic strategies', bad: true },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-coral" />
                  </div>
                  <span className="text-slate">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sentiment3 */}
          <div className="bg-midnight rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lime/20 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute -top-3 -right-3">
              <span className="bg-lime text-midnight text-xs font-display font-bold px-3 py-1 rounded-full">
                Best value
              </span>
            </div>

            <h3 className="font-display font-bold text-xl text-white mb-6 relative">Sentiment3</h3>
            <div className="space-y-4 relative">
              {[
                '$699-$3,499/month',
                'Full transparency',
                'Cancel anytime',
                'Productized system',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-lime flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-midnight" />
                  </div>
                  <span className="text-white/90">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Zap, title: 'Productized system', desc: 'Repeatable, not custom' },
            { icon: Users, title: '100+ curated KOLs', desc: 'Ready to deploy' },
            { icon: Eye, title: 'Full transparency', desc: 'See every action' },
            { icon: Shield, title: '6 years experience', desc: 'Battle-tested' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-lime-dim" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-midnight mb-1">{item.title}</h4>
                <p className="text-sm text-slate">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// PRICING SECTION
// ============================================
function PricingSection() {
  const plans = [
    {
      name: 'Experimental',
      price: '$699',
      period: 'one-time',
      desc: 'Test before committing',
      features: [
        '1 month duration',
        '20 custom CMC posts',
        '40-50 sentiment votes',
        '30 micro-KOL pushes',
        '2-3 reputable KOL activations',
        'Dashboard access',
      ],
      highlight: false,
      badge: null,
    },
    {
      name: 'Starter',
      price: '$899',
      period: '/month',
      desc: 'For pre-TGE tokens',
      features: [
        'Everything in Experimental',
        '30 CMC posts/month',
        '60-80 sentiment votes',
        '40 micro-KOL pushes',
        '5 reputable KOL activations',
        'Weekly strategy calls',
      ],
      highlight: false,
      badge: null,
    },
    {
      name: 'Growth',
      price: '$2,199',
      period: '/month',
      desc: 'For scaling projects',
      features: [
        'Everything in Starter',
        '40 CMC posts/month',
        '100+ sentiment votes',
        '50 micro-KOL pushes',
        '10 reputable KOLs',
        'Binance Square coverage',
        'Dedicated manager',
      ],
      highlight: true,
      badge: 'Most popular',
    },
    {
      name: 'Launch',
      price: '$3,499',
      period: '/month',
      desc: 'For major launches',
      features: [
        'Everything in Growth',
        'Unlimited CMC posts',
        '200+ sentiment votes',
        'Full KOL network',
        '20+ premium KOLs',
        'Crisis management',
        '24/7 priority support',
      ],
      highlight: false,
      badge: 'Enterprise',
    },
  ]

  return (
    <section id="pricing" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="tag tag-lime mb-4">Pricing</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-midnight mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-slate">
            Start with Experimental to test. Scale when you're ready. Cancel anytime.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-6 transition-all card-hover ${
                plan.highlight
                  ? 'bg-midnight text-white ring-4 ring-lime/30'
                  : 'bg-mist border border-sand'
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-display font-bold ${
                  plan.highlight ? 'bg-lime text-midnight' : 'bg-midnight text-white'
                }`}>
                  {plan.badge}
                </div>
              )}

              <div className="mb-6 pt-2">
                <h3 className={`font-display font-bold text-xl mb-2 ${
                  plan.highlight ? 'text-white' : 'text-midnight'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlight ? 'text-white/60' : 'text-slate'}`}>
                  {plan.desc}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-display font-bold ${
                    plan.highlight ? 'text-lime' : 'text-midnight'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={plan.highlight ? 'text-white/50' : 'text-slate'}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.highlight ? 'bg-lime' : 'bg-midnight'
                    }`}>
                      <Check className={`w-3 h-3 ${
                        plan.highlight ? 'text-midnight' : 'text-lime'
                      }`} />
                    </div>
                    <span className={`text-sm ${plan.highlight ? 'text-white/80' : 'text-slate'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-full font-display font-medium transition-all ${
                plan.highlight
                  ? 'bg-lime text-midnight hover:bg-lime-dim'
                  : 'bg-midnight text-white hover:bg-charcoal'
              }`}>
                Get started
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-slate mt-10">
          All plans include dashboard access and Slack support. Need custom? <a href="#final-cta" className="text-midnight underline">Let's talk</a>
        </p>
      </div>
    </section>
  )
}

// ============================================
// SOCIAL PROOF SECTION
// ============================================
function SocialProofSection() {
  return (
    <section className="section-padding bg-midnight relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-lavender rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="tag tag-lime mb-4">Early access</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            Join 20 founding projects
          </h2>
          <p className="text-xl text-white/60">
            Early access pricing won't last. Lock in Experimental at $699 before we scale.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {[
            { num: '100+', label: 'Verified KOLs' },
            { num: '6 Years', label: 'Web3 Experience' },
            { num: '200+', label: 'Agency Network' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl sm:text-6xl font-display font-bold text-lime mb-2">
                {stat.num}
              </div>
              <div className="text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Syndicat3 badge */}
        <div className="bg-charcoal rounded-3xl p-8 text-center border border-white/10">
          <p className="text-white/40 mb-2 text-sm uppercase tracking-wider">Part of</p>
          <h3 className="text-3xl font-display font-bold text-white mb-4">Syndicat3 Ecosystem</h3>
          <p className="text-white/60 max-w-xl mx-auto">
            The largest crypto marketing directory. Access to 200+ vetted agencies, tools, and services for Web3 projects.
          </p>
        </div>
      </div>
    </section>
  )
}

// ============================================
// FAQ SECTION
// ============================================
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "What exactly do I get with the Experimental plan?",
      a: "1 month of coverage: 20 custom CMC posts, 40-50 sentiment votes, 30 micro-KOL pushes, 2-3 reputable KOL activations, and full dashboard access. It's designed to show you results before you commit to a subscription.",
    },
    {
      q: "How do you verify your KOLs are real?",
      a: "6 years of relationship building. Every KOL is manually vetted for follower authenticity, engagement rates, and past performance. No bots. No fake accounts. Real humans with real audiences.",
    },
    {
      q: "What's the difference between micro-KOLs and reputable KOLs?",
      a: "Micro-KOLs (1K-10K followers) provide consistent sentiment building. Reputable KOLs (50K+) drive bigger visibility spikes. We use both strategically for sustained growth.",
    },
    {
      q: "How quickly will I see results?",
      a: "Increased CMC activity within the first week. Sentiment shifts in 2-3 weeks. Volume correlation varies, but our dashboard lets you track the connection in real-time.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Unlike agencies with 3-month minimums, our plans are month-to-month after the initial period. We earn your business every month.",
    },
    {
      q: "Do you work beyond CMC?",
      a: "Our core focus is CMC and Binance Square—highest leverage platforms for crypto sentiment. Growth and Launch plans include coordinated multi-platform messaging.",
    },
  ]

  return (
    <section id="faq" className="section-padding bg-cream">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tag tag-outline mb-4">FAQ</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-midnight">
            Questions? Answers.
          </h2>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all ${
                openIndex === i
                  ? 'bg-mist border-midnight/20'
                  : 'bg-cream border-sand hover:border-midnight/10'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-display font-semibold text-midnight pr-8">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                  openIndex === i ? 'bg-midnight' : 'bg-sand'
                }`}>
                  {openIndex === i ? (
                    <Minus className={`w-4 h-4 ${openIndex === i ? 'text-lime' : 'text-slate'}`} />
                  ) : (
                    <Plus className="w-4 h-4 text-slate" />
                  )}
                </div>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-slate leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// FINAL CTA SECTION
// ============================================
function FinalCTASection() {
  return (
    <section id="final-cta" className="section-padding bg-mist relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-midnight mb-6">
          Ready to drive<br />token sentiment?
        </h2>
        <p className="text-xl text-slate mb-10 max-w-2xl mx-auto">
          Start with Experimental for $699 or book a strategy call to discuss your project's specific needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing" className="btn-lime text-lg px-10 py-4 flex items-center justify-center gap-2">
            Start with $699 Experimental
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#" className="btn-secondary text-lg px-10 py-4 flex items-center justify-center gap-2">
            Book strategy call
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        <p className="text-slate mt-8">
          No contracts · No hidden fees · Cancel anytime
        </p>
      </div>
    </section>
  )
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  return (
    <footer className="bg-midnight py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-lime rounded-xl flex items-center justify-center">
              <span className="font-display font-bold text-lg text-midnight">S3</span>
            </div>
            <span className="font-display font-semibold text-xl text-white">Sentiment3</span>
            <span className="text-white/40 ml-2">by Syndicat3</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            {['Syndicat3', 'Contact', 'Terms', 'Privacy'].map((link) => (
              <a key={link} href="#" className="text-white/50 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {['X', 'TG', 'DC'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 rounded-full bg-charcoal hover:bg-lime flex items-center justify-center transition-colors group"
              >
                <span className="text-white/70 group-hover:text-midnight font-display font-bold text-sm">
                  {social}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-sm">
            © 2024 Sentiment3. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// MAIN PAGE
// ============================================
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustMarquee />
      <ProblemSection />
      <HowItWorksSection />
      <ComparisonSection />
      <PricingSection />
      <SocialProofSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}

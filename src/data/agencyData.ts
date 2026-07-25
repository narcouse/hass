import {
  ServiceItem,
  CaseStudy,
  Testimonial,
  CompanyValue,
  TimelineEvent,
  WhyChooseUsCard,
  ProcessStep,
  FAQItem,
  BlogArticle
} from '../types';

import heroAgencyImage from '../assets/images/hero-agency-showcase.jpg';
import aiAutomationImage from '../assets/images/project-ai-automation.jpg';
import ecommerceImage from '../assets/images/project-ecommerce-luxury.jpg';
import nexusSaasImage from '../assets/images/nexus-saas-enterprise-platform.jpg';

export const COMPANY_INFO = {
  name: 'YOUBA LLC',
  tagline: 'Building Digital Experiences That Grow Businesses.',
  subtitle: 'YOUBA LLC helps ambitious businesses grow through modern websites, digital marketing, branding, SEO, AI solutions, and scalable digital strategies.',
  address: {
    street: '1001 S MAIN ST, STE 600',
    city: 'KALISPELL',
    state: 'MT',
    zip: '59901',
    country: 'USA',
    full: '1001 S MAIN ST, STE 600, KALISPELL, MT 59901, USA'
  },
  contact: {
    email: 'contact@youba.agency',
    phone: '+1 (406) 888-9682',
    hours: 'Mon - Fri: 8:00 AM - 6:00 PM MST'
  },
  stats: {
    rating: '5.0',
    projectsDelivered: '250+',
    satisfaction: '98%',
    yearsExperience: '12+',
    partners: '40+'
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'custom-website-development',
    title: 'Custom Website Development',
    slug: 'custom-website-development',
    shortDescription: 'High-performance, ultra-fast custom web applications engineered with Next.js, React, and modern microfrontends.',
    fullDescription: 'We build bespoke web platforms designed to dominate your market. No bloatware or slow themes—only hand-crafted, pixel-perfect, lightning-fast code optimized for extreme conversion rates and sub-second load times.',
    iconName: 'Code',
    bgGradient: 'from-amber-500/20 via-slate-900 to-slate-950',
    deliverables: [
      'Custom React/Next.js Architecture',
      'Headless CMS Integration',
      'Interactive WebGL & Motion UI',
      '99+ Lighthouse Performance Score',
      'Enterprise Security & Compliance'
    ],
    techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    averageTimeline: '4 - 8 Weeks',
    typicalROI: '3.4x Increase in Lead Conversion',
    featuredCaseStudyTitle: 'Apex Global Financial Portal'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    shortDescription: 'Award-winning user interfaces and frictionless user journeys crafted with deep psychological design principles.',
    fullDescription: 'Design is not just how it looks; it is how it works. We conduct deep audience research, user flow mapping, and high-fidelity prototyping to craft intuitive digital experiences that delight users and drive action.',
    iconName: 'Layout',
    bgGradient: 'from-blue-500/20 via-slate-900 to-slate-950',
    deliverables: [
      'User Journey & Wireframing',
      'Figma Design Systems & Tokens',
      'Interactive Micro-Animations',
      'User Testing & Heuristic Audits',
      'Responsive Mobile-First UI'
    ],
    techStack: ['Figma', 'Framer', 'Protopie', 'Design Tokens', 'Rive'],
    averageTimeline: '3 - 6 Weeks',
    typicalROI: '42% Drop in User Bounce Rate',
    featuredCaseStudyTitle: 'Veloce Luxury Mobility App'
  },
  {
    id: 'branding-identity',
    title: 'Branding & Identity',
    slug: 'branding-identity',
    shortDescription: 'Unforgettable brand identities, luxury logo systems, typography, and comprehensive strategic brand guidelines.',
    fullDescription: 'We transform companies into iconic brands. From brand strategy and naming to typography, color science, and 3D brand assets, we establish a commanding visual presence that justifies premium pricing.',
    iconName: 'Sparkles',
    bgGradient: 'from-amber-400/20 via-slate-900 to-slate-950',
    deliverables: [
      'Brand Strategy & Positioning',
      'Primary & Secondary Logo Suite',
      'Typography & Color Palette System',
      'Brand Style Guide Manual (100+ pages)',
      '3D Motion Assets & Stationery'
    ],
    techStack: ['Adobe Illustrator', 'Photoshop', 'Cinema 4D', 'Font Lab'],
    averageTimeline: '4 - 6 Weeks',
    typicalROI: '2.8x Higher Brand Recall',
    featuredCaseStudyTitle: 'Lumin Craft Distillery Rebrand'
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    slug: 'seo-optimization',
    shortDescription: 'Dominant organic search rankings through programmatic technical SEO, authority building, and content architecture.',
    fullDescription: 'Rank #1 on Google for high-intent business keywords. Our data-backed technical SEO audits, schema structure, and content funnels capture buyer traffic without relying solely on paid ad spend.',
    iconName: 'Search',
    bgGradient: 'from-emerald-500/20 via-slate-900 to-slate-950',
    deliverables: [
      'Deep Technical SEO Audit',
      'Programmatic Keyword Strategy',
      'Core Web Vitals Speed Tuning',
      'High-Authority Backlink Acquisition',
      'Local & Global Schema Markup'
    ],
    techStack: ['Ahrefs', 'SEMrush', 'Screaming Frog', 'Google Search Console', 'Schema.org'],
    averageTimeline: 'Ongoing (3-Month Sprints)',
    typicalROI: '+340% Organic Organic Traffic Growth',
    featuredCaseStudyTitle: 'Nexus SaaS SEO Dominance'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    shortDescription: 'High-ROI multi-channel acquisition campaigns across Meta, Google, LinkedIn, and performance display networks.',
    fullDescription: 'Scalable paid growth engines built for maximum ROAS. We design high-converting ad creatives, write compelling sales copy, and engineer laser-targeted funnel campaigns that turn ad dollars into profit.',
    iconName: 'TrendingUp',
    bgGradient: 'from-purple-500/20 via-slate-900 to-slate-950',
    deliverables: [
      'Paid Search & Social Campaigns',
      'High-Converting Sales Funnels',
      'A/B Creative & Copy Testing',
      'Conversion Rate Optimization (CRO)',
      'Real-Time Attribution Analytics'
    ],
    techStack: ['Meta Ads Manager', 'Google Ads', 'Triple Whale', 'GA4', 'HubSpot'],
    averageTimeline: 'Monthly Growth Retainer',
    typicalROI: '4.8x Average Return On Ad Spend (ROAS)',
    featuredCaseStudyTitle: 'Nova Tech Growth Campaign'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    slug: 'ai-automation',
    shortDescription: 'Custom AI agents, automated workflow pipelines, LLM fine-tuning, and intelligent operational integration.',
    fullDescription: 'Multiply team productivity by 10x. We build custom AI assistants, automated CRM workflows, customer support agents, and AI-powered document processors tailored specifically to your business operations.',
    iconName: 'Cpu',
    bgGradient: 'from-cyan-500/20 via-slate-900 to-slate-950',
    deliverables: [
      'Custom LLM & RAG Integration',
      'Autonomous Business Workflows',
      'AI Customer Support Agents',
      'Document Parsing & Analysis',
      'API Integration Pipelines'
    ],
    techStack: ['Gemini API', 'LangChain', 'Python', 'Make.com', 'n8n', 'Vector DBs'],
    averageTimeline: '3 - 8 Weeks',
    typicalROI: '80% Reduction in Manual Ops Time',
    featuredCaseStudyTitle: 'Horizon AI Operations Automation'
  },
  {
    id: 'e-commerce-development',
    title: 'E-commerce Development',
    slug: 'e-commerce-development',
    shortDescription: 'High-converting Shopify Plus, Custom Headless E-commerce, and custom payment experience builds.',
    fullDescription: 'Turn visitors into lifelong customers. We engineer bespoke storefronts with custom checkout customization, 1-click upsells, inventory sync, and mobile-optimized interfaces built for speed.',
    iconName: 'ShoppingBag',
    bgGradient: 'from-amber-600/20 via-slate-900 to-slate-950',
    deliverables: [
      'Shopify Plus & Headless Commerce',
      'Custom Cart & Upsell Flow',
      'Payment Gateway Integration',
      'ERP & Inventory Synchronization',
      'Sub-Second Product Page Speed'
    ],
    techStack: ['Shopify Plus', 'Hydrogen', 'Stripe', 'Sanity', 'Klaviyo'],
    averageTimeline: '6 - 10 Weeks',
    typicalROI: '+58% Increased Average Order Value (AOV)',
    featuredCaseStudyTitle: 'Aura Luxury Jewelry Store'
  },
  {
    id: 'business-growth-strategy',
    title: 'Business Growth Strategy',
    slug: 'business-growth-strategy',
    shortDescription: 'Executive-level digital roadmap, product market positioning, pricing architecture, and expansion advisory.',
    fullDescription: 'Align your business vision with modern digital realities. Our C-level digital advisors evaluate your market positioning, monetization strategy, and tech stack to chart a definitive path to enterprise valuation.',
    iconName: 'BarChart3',
    bgGradient: 'from-indigo-500/20 via-slate-900 to-slate-950',
    deliverables: [
      'Market Opportunity Audit',
      'Monetization & Pricing Strategy',
      'Digital Transformation Roadmap',
      'Competitive Intelligence Matrix',
      'KPI & Growth Metrics Dashboard'
    ],
    techStack: ['Tableau', 'Mixpanel', 'Notion Enterprise', 'Gartner Analytics'],
    averageTimeline: '2 - 4 Weeks Advisory Sprint',
    typicalROI: '2.5x Revenue Growth Velocity',
    featuredCaseStudyTitle: 'Summit Peak Capital Expansion'
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    slug: 'content-creation',
    shortDescription: 'High-impact brand photography, 3D product renders, video production, and persuasive editorial copywriting.',
    fullDescription: 'Content that captures imagination and builds authority. We create stunning cinematic visual assets, high-definition 3D product showcases, and compelling brand storytelling across all touchpoints.',
    iconName: 'Video',
    bgGradient: 'from-rose-500/20 via-slate-900 to-slate-950',
    deliverables: [
      '3D Product Visualization',
      'Brand Commercial Video Ads',
      'Persuasive Sales Copywriting',
      'Social Media Visual Systems',
      'Interactive Digital Magazines'
    ],
    techStack: ['DaVinci Resolve', 'Blender', 'Cinema 4D', 'Copywriting AI'],
    averageTimeline: '2 - 4 Weeks',
    typicalROI: '3.1x Higher Ad Engagement Rate',
    featuredCaseStudyTitle: 'Montana Outdoors Brand Showcase'
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization',
    slug: 'performance-optimization',
    shortDescription: 'Speed engineering, code refactoring, infrastructure scaling, and security hardening for mission-critical web apps.',
    fullDescription: 'Slow apps lose customers. We audit, refactor, and accelerate existing web assets, slashing page load times to under 0.8 seconds and boosting Google Core Web Vitals to solid 100/100.',
    iconName: 'Zap',
    bgGradient: 'from-amber-300/20 via-slate-900 to-slate-950',
    deliverables: [
      'Core Web Vitals 100 Score Tuning',
      'Server-Side Caching & Edge CDNs',
      'Database Query Optimization',
      'Asset Compression & Lazify Flow',
      'Security Hardening & WAF'
    ],
    techStack: ['Cloudflare Edge', 'Redis', 'Web Vitals JS', 'Docker', 'Varnish'],
    averageTimeline: '1 - 2 Weeks',
    typicalROI: '65% Faster Page Speed, +22% Sales',
    featuredCaseStudyTitle: 'Kalispell Tech Portal Refactor'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Apex Global', logo: 'APEX' },
  { name: 'Veloce Mobility', logo: 'VELOCE' },
  { name: 'Lumin Luxury', logo: 'LUMIN' },
  { name: 'Nexus SaaS', logo: 'NEXUS' },
  { name: 'Nova Health', logo: 'NOVA' },
  { name: 'Summit Peak', logo: 'SUMMIT' },
  { name: 'Horizon AI', logo: 'HORIZON' },
  { name: 'Aura Commerce', logo: 'AURA' }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'nexus-saas-platform',
    title: 'Nexus SaaS Enterprise Platform',
    client: 'Nexus Technologies Inc.',
    category: 'Website',
    image: nexusSaasImage,
    challenge: 'Nexus was experiencing high bounce rates on their old legacy marketing site and struggle to convey their complex enterprise cloud software to C-level executives.',
    solution: 'YOUBA LLC re-architected the website using Next.js, Framer Motion, and custom WebGL interactive product demos. We simplified the messaging and built a high-converting interactive ROI estimator.',
    technology: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Gemini API'],
    results: [
      { metric: '+340%', label: 'Organic Inbound Leads' },
      { metric: '0.6s', label: 'Page Speed Load Time' },
      { metric: '$12.4M', label: 'Attributed Pipeline Growth' }
    ],
    testimonial: {
      quote: 'YOUBA LLC completely transformed our online presence. Sales increased within weeks, and our valuation tripled.',
      author: 'Sarah Mitchell',
      role: 'CEO, Nexus Tech',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    featured: true
  },
  {
    id: 'aura-luxury-ecommerce',
    title: 'Aura Fine Jewelry Storefront',
    client: 'Aura Luxe Global',
    category: 'E-commerce',
    image: ecommerceImage,
    challenge: 'Aura required a luxury digital experience that matched their $50,000+ custom high-end jewelry items with 3D product previews and ultra-fast checkout.',
    solution: 'We engineered a bespoke headless Shopify storefront integrated with 3D interactive ring customization, custom gold-accented UI, and 1-click Apple Pay checkout.',
    technology: ['Shopify Plus', 'React', 'Three.js', 'Stripe', 'Tailwind CSS'],
    results: [
      { metric: '+185%', label: 'E-commerce Conversion Rate' },
      { metric: '$4,200', label: 'Average Order Value' },
      { metric: '99/100', label: 'Mobile Lighthouse Score' }
    ],
    testimonial: {
      quote: 'The design exceeded every expectation. Professional from start to finish and our luxury clients love the 3D experience.',
      author: 'Michael Johnson',
      role: 'Founder, Aura Luxe',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80'
    },
    featured: true
  },
  {
    id: 'horizon-ai-automation',
    title: 'Horizon AI Workflow Engine',
    client: 'Horizon Systems',
    category: 'AI',
    image: aiAutomationImage,
    challenge: 'Horizon spent over 120 hours per week manually categorizing customer contracts and routing support tickets across 4 global offices.',
    solution: 'YOUBA LLC designed an autonomous AI agent system powered by Gemini LLMs that parses incoming documents in real-time, extracts key financial data, and populates CRMs automatically.',
    technology: ['Gemini API', 'Python', 'Node.js', 'React', 'TypeScript', 'Vector Database'],
    results: [
      { metric: '82%', label: 'Reduction in Manual Ops' },
      { metric: '$450K', label: 'Annual Operational Savings' },
      { metric: '< 2s', label: 'Document Processing Time' }
    ],
    testimonial: {
      quote: 'Outstanding communication, beautiful design, and excellent SEO and AI automation performance.',
      author: 'Emily Carter',
      role: 'Marketing Director, Horizon',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80'
    },
    featured: true
  },
  {
    id: 'lumin-distillery-brand',
    title: 'Lumin Craft Spirits Rebrand',
    client: 'Lumin Distillery Co.',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
    challenge: 'Lumin needed an elite visual identity to launch their premium single-barrel collection across national high-end retailers.',
    solution: 'We crafted a luxurious brand system incorporating foil-stamped packaging designs, custom serif typography, 3D bottle renders, and an immersive website.',
    technology: ['Figma', 'Adobe Suite', 'Cinema 4D', 'WebGL', 'React'],
    results: [
      { metric: '100%', label: 'Retail Shelf Placement' },
      { metric: '2.8x', label: 'Brand Recognition Growth' },
      { metric: '#1', label: 'Craft Spirit Design Award' }
    ],
    testimonial: {
      quote: 'The best agency we have worked with. Highly recommended for any brand looking to enter the luxury tier.',
      author: 'Daniel Brooks',
      role: 'Business Owner, Lumin Spirits',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80'
    }
  },
  {
    id: 'apex-seo-campaign',
    title: 'Apex Global SEO Acceleration',
    client: 'Apex Global Financial',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    challenge: 'Apex was losing ground to aggressive fintech startups on organic Google search rankings.',
    solution: 'Implemented programmatic schema architecture, accelerated site load times to 0.4s, and constructed high-converting editorial funnels.',
    technology: ['Ahrefs', 'Next.js', 'Core Web Vitals', 'Programmatic Schema'],
    results: [
      { metric: '#1', label: 'Google Ranking for 48 High-Value Keywords' },
      { metric: '+410%', label: 'Organic Qualified Leads' },
      { metric: '$8.1M', label: 'Attributed Ad Spend Savings' }
    ],
    testimonial: {
      quote: 'YOUBA LLC delivers results that directly impact the bottom line. Our organic acquisition is at an all-time high.',
      author: 'Jonathan Hayes',
      role: 'VP Growth, Apex Global',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    }
  },
  {
    id: 'veloce-growth-marketing',
    title: 'Veloce Luxury Mobility Campaign',
    client: 'Veloce EV',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    challenge: 'Veloce needed to fill pre-orders for their luxury electric vehicle line across North America.',
    solution: 'Designed multi-channel ad campaigns, high-converting interactive landing pages, and automated email lead nurture flows.',
    technology: ['Meta Ads', 'Google Ads', 'Klaviyo', 'React', 'Analytics API'],
    results: [
      { metric: '5,200+', label: 'Vehicle Pre-orders Secured' },
      { metric: '6.2x', label: 'Return On Ad Spend (ROAS)' },
      { metric: '$26M+', label: 'Pre-order Revenue Value' }
    ],
    testimonial: {
      quote: 'Working with YOUBA LLC felt like adding a world-class growth team to our internal executive board.',
      author: 'Clara Vance',
      role: 'CMO, Veloce EV',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    }
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    rating: 5,
    quote: 'YOUBA LLC completely transformed our online presence. Sales increased within weeks.',
    author: 'Sarah Mitchell',
    role: 'CEO',
    company: 'Nexus Technologies',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    verified: true,
    industry: 'SaaS & Enterprise Tech'
  },
  {
    id: '2',
    rating: 5,
    quote: 'The design exceeded every expectation. Professional from start to finish.',
    author: 'Michael Johnson',
    role: 'Founder',
    company: 'Aura Luxe Fine Jewelry',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
    verified: true,
    industry: 'Luxury E-commerce'
  },
  {
    id: '3',
    rating: 5,
    quote: 'Outstanding communication, beautiful design, and excellent SEO performance.',
    author: 'Emily Carter',
    role: 'Marketing Director',
    company: 'Horizon Systems AI',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    verified: true,
    industry: 'Artificial Intelligence'
  },
  {
    id: '4',
    rating: 5,
    quote: 'The best agency we\'ve worked with. Highly recommended.',
    author: 'Daniel Brooks',
    role: 'Business Owner',
    company: 'Lumin Distillery Co.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    verified: true,
    industry: 'Consumer Luxury Goods'
  },
  {
    id: '5',
    rating: 5,
    quote: 'They built us a custom AI pipeline and web application that boosted our team productivity by 300%. The ROI was instantaneous.',
    author: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'Montana Tech Ventures',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    verified: true,
    industry: 'Venture Capital & Fintech'
  }
];

export const COMPANY_VALUES: CompanyValue[] = [
  {
    id: '1',
    title: 'Uncompromising Craft',
    description: 'We believe details make the product. Every pixel, micro-interaction, and line of code is refined to perfection.',
    iconName: 'Gem',
    stat: '100% Custom'
  },
  {
    id: '2',
    title: 'AI-Powered Velocity',
    description: 'We blend high-level human artistic creativity with cutting-edge AI acceleration to ship faster without quality loss.',
    iconName: 'Zap',
    stat: '3x Faster Delivery'
  },
  {
    id: '3',
    title: 'Measurable Business ROI',
    description: 'Pretty designs are meaningless if they do not convert. Every project is measured by bottom-line revenue growth.',
    iconName: 'TrendingUp',
    stat: '$50M+ Revenue Built'
  },
  {
    id: '4',
    title: 'Transparent Ownership',
    description: 'No hidden code locks or proprietary black boxes. You own 100% of your code, IP, design tokens, and assets.',
    iconName: 'ShieldCheck',
    stat: '100% IP Belonging'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '2014',
    title: 'Founded in Kalispell, Montana',
    description: 'Established as a elite boutique design studio serving ambitious regional businesses with bespoke web solutions.',
    milestone: 'First 20 Custom Web Builds'
  },
  {
    year: '2018',
    title: 'National Expansion',
    description: 'Expanded agency operations across North America, servicing Series A/B tech startups and luxury e-commerce brands.',
    milestone: 'Crossed 100+ Delivered Projects'
  },
  {
    year: '2022',
    title: 'Full-Stack & Growth Engine',
    description: 'Integrated dedicated in-house technical SEO, paid acquisition, and headless e-commerce engineering departments.',
    milestone: '$25M Client Growth Generated'
  },
  {
    year: '2026',
    title: 'AI & Next-Gen Digital Agency',
    description: 'Pioneered custom AI automation, LLM business integrations, and immersive WebGL 3D interfaces for market leaders.',
    milestone: 'Awwwards Recognition & 250+ Builds'
  }
];

export const WHY_CHOOSE_US_CARDS: WhyChooseUsCard[] = [
  {
    id: 'creative-thinking',
    title: 'Creative Thinking',
    description: 'Unconventional visual solutions that make your business instantly stand out from generic online competitors.',
    iconName: 'Lightbulb',
    highlight: 'Unique Brand DNA'
  },
  {
    id: 'modern-technologies',
    title: 'Modern Technologies',
    description: 'Engineered with Next.js, React 19, TypeScript, Tailwind CSS v4, and Gemini AI for maximum speed.',
    iconName: 'Layers',
    highlight: 'Zero Legacy Bloat'
  },
  {
    id: 'expert-developers',
    title: 'Expert Developers',
    description: 'Senior software architects with 10+ years of experience writing clean, scalable, maintainable codebase.',
    iconName: 'Code2',
    highlight: 'Senior Engineers'
  },
  {
    id: 'seo-specialists',
    title: 'SEO Specialists',
    description: 'Data-driven SEO experts who structure your platform to dominate Google search results for buying keywords.',
    iconName: 'SearchCheck',
    highlight: 'Top 1% Ranking Logic'
  },
  {
    id: 'fast-delivery',
    title: 'Fast Delivery',
    description: 'Streamlined agile sprints powered by AI design systems to launch world-class sites in weeks, not months.',
    iconName: 'Clock',
    highlight: 'Sub-30 Day Sprints'
  },
  {
    id: 'long-term-partnership',
    title: 'Long-Term Partnership',
    description: 'We do not walk away after launch. We continuously optimize, scale, and secure your digital assets.',
    iconName: 'Users',
    highlight: 'Dedicated Retainers'
  },
  {
    id: 'transparent-communication',
    title: 'Transparent Communication',
    description: 'Real-time Slack channels, weekly loom video updates, clear milestones, and zero technical jargon confusion.',
    iconName: 'MessageSquareCheck',
    highlight: '24/7 Slack Portal'
  },
  {
    id: 'results-driven',
    title: 'Results Driven',
    description: 'Every design choice is validated by conversion metrics, user heatmaps, and clear bottom-line growth goals.',
    iconName: 'Target',
    highlight: 'Guaranteed ROI Focus'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    name: 'Discovery',
    tagline: 'Deep Business & Market Alignment',
    description: 'We immerse ourselves in your business goals, target audience psychology, competitive positioning, and technical requirements.',
    keyOutputs: ['Brand Audit Report', 'User Persona Matrix', 'Project Roadmap', 'Technical Architecture Specs'],
    duration: 'Week 1'
  },
  {
    number: '02',
    name: 'Strategy',
    tagline: 'Architecture & Conversion Blueprints',
    description: 'We engineer the information architecture, user flows, SEO keyword maps, and high-converting funnel wireframes.',
    keyOutputs: ['Wireframe Blueprints', 'SEO Content Strategy', 'Conversion Path Mapping', 'Interactive Sitemap'],
    duration: 'Week 1 - 2'
  },
  {
    number: '03',
    name: 'Design',
    tagline: 'Bespoke UI/UX & Visual Direction',
    description: 'We create luxury visual designs, Figma design tokens, custom 3D visuals, and interactive prototypes that amaze stakeholders.',
    keyOutputs: ['Figma High-Fi Design System', '3D Visual Assets', 'Interactive Prototype', 'Micro-Animation Guide'],
    duration: 'Week 2 - 4'
  },
  {
    number: '04',
    name: 'Development',
    tagline: 'Clean, Ultra-Fast Code Production',
    description: 'Our senior developers write clean TypeScript, React, and server-side code with rigorous accessibility standards.',
    keyOutputs: ['Clean Modular Codebase', 'Headless CMS Integration', 'Custom API Pipelines', 'Database Architecture'],
    duration: 'Week 4 - 6'
  },
  {
    number: '05',
    name: 'Testing',
    tagline: 'Multi-Device QA & Speed Hardening',
    description: 'Rigorous cross-browser testing, mobile usability checks, Lighthouse speed optimization, and security audits.',
    keyOutputs: ['100/100 Core Web Vitals Audit', 'Cross-Device QA Signoff', 'Security Vulnerability Scan', 'SEO Schema Validation'],
    duration: 'Week 6 - 7'
  },
  {
    number: '06',
    name: 'Launch',
    tagline: 'Flawless Zero-Downtime Deployment',
    description: 'We orchestrate domain propagation, SSL deployment, analytics tracking setup, and Google Search Console indexing.',
    keyOutputs: ['Live Cloud Infrastructure', '301 Redirect Mapping', 'GA4 & Pixel Event Tracking', 'Staff Training Session'],
    duration: 'Week 7 - 8'
  },
  {
    number: '07',
    name: 'Growth',
    tagline: 'Continuous Scaling & CRO Tuning',
    description: 'Post-launch monitoring, A/B conversion testing, regular feature upgrades, and ongoing organic search domination.',
    keyOutputs: ['Monthly ROI Reports', 'A/B Testing Experiments', 'AI Automation Upgrades', '24/7 Monitoring'],
    duration: 'Ongoing Retainer'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'Where is YOUBA LLC located and do you work with international clients?',
    answer: 'YOUBA LLC is headquartered at 1001 S Main St, Ste 600, Kalispell, Montana 59901, USA. While anchored in Montana, we partner with ambitious startups and enterprise brands globally across North America, Europe, Australia, and Asia.'
  },
  {
    id: 'faq-2',
    category: 'Pricing & Process',
    question: 'What is the typical investment for a custom project with YOUBA LLC?',
    answer: 'Our custom website, branding, and digital transformation engagements typically range from $15,000 to $100,000+ depending on technical scope, 3D/animation requirements, and integrations. We also offer monthly growth retainers for ongoing SEO, AI, and marketing campaigns.'
  },
  {
    id: 'faq-3',
    category: 'Pricing & Process',
    question: 'How long does a typical custom website development take?',
    answer: 'Most custom digital agency builds are completed within 4 to 8 weeks from kick-off to launch. We use agile 2-week sprints with clear visual milestones in Figma and live staging environments.'
  },
  {
    id: 'faq-4',
    category: 'Tech & SEO',
    question: 'Will my website be mobile-friendly and fast loading?',
    answer: 'Absoluto. Every platform we build is engineered for sub-second page loads (under 0.8s) and passes Google Core Web Vitals with 98-100 scores across all mobile and desktop devices.'
  },
  {
    id: 'faq-5',
    category: 'AI & Growth',
    question: 'How does YOUBA LLC integrate AI Automation into existing businesses?',
    answer: 'We evaluate your team operational workflows and build custom AI assistants powered by Gemini models. These automate customer support, lead qualification, document processing, and data routing into your CRM.'
  },
  {
    id: 'faq-6',
    category: 'Tech & SEO',
    question: 'Do I own the rights to the website design and source code?',
    answer: 'Yes, 100%. Upon completion, full ownership of the source code repository, Figma design files, assets, domain credentials, and intellectual property is transferred directly to your company.'
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'ai-web-design-2026',
    slug: 'ai-web-design-2026-playbook',
    title: 'The 2026 Playbook for Enterprise Digital Dominance & AI Integration',
    category: 'AI & Automation',
    summary: 'How leading enterprise brands are combining high-end bespoke WebGL design with autonomous Gemini AI agents to double conversion rates.',
    content: `
      Digital agency design has evolved beyond static marketing pages. In 2026, high-growth companies are treating their digital footprint as an intelligent, interactive growth engine.

      ### 1. The Death of Generic Templates
      Modern consumers and B2B buyers can immediately spot standard pre-made templates. High-converting brands leverage custom typography, subtle glassmorphism, and responsive motion UI that conveys instant trust.

      ### 2. Embedded AI Assistants
      Integrating custom AI workflows enables websites to answer complex buyer questions in real time, calculate instant pricing estimates, and qualify enterprise leads before a sales call ever takes place.

      ### 3. Sub-Second Speed Requirements
      Google Search algorithms now penalize platforms with page load times above 1.2 seconds. Achieving sub-second speeds requires server-side React architecture, optimized image pipelines, and clean edge caching.
    `,
    readTime: '6 min read',
    publishedDate: 'July 2026',
    author: {
      name: 'Alexander Vance',
      role: 'Principal Architect, YOUBA LLC',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    },
    image: heroAgencyImage,
    featured: true
  },
  {
    id: 'building-luxury-brand-identity',
    slug: 'building-luxury-brand-identity',
    title: 'How to Craft a Luxury Brand Identity That Justifies 10x Pricing',
    category: 'Brand Strategy',
    summary: 'The psychological visual drivers behind iconic luxury brands and how to establish commanding market authority.',
    content: 'Luxury branding is built on scarcity, precision visual hierarchy, and emotional resonance...',
    readTime: '4 min read',
    publishedDate: 'June 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Creative Director, YOUBA LLC',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'programmatic-seo-guide',
    slug: 'programmatic-seo-guide',
    title: 'Programmatic Technical SEO: Generating 500,000 Organic Visits',
    category: 'SEO & Growth',
    summary: 'A step-by-step breakdown of how programmatic schema and structured content architecture drive organic Google domination.',
    content: 'Search engines reward clean JSON-LD schema, semantic HTML structure, and high core web vitals...',
    readTime: '5 min read',
    publishedDate: 'May 2026',
    author: {
      name: 'Marcus Sterling',
      role: 'Head of Growth, YOUBA LLC',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80'
  }
];

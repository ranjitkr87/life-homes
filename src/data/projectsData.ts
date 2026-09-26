import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    slug: 'the-obsidian-ridge-bel-air',
    title: 'The Obsidian Ridge Estate',
    subtitle: 'Cantilevered Architectural Masterpiece',
    category: 'residential',
    categoryLabel: 'Residential Construction',
    location: 'Bel Air, California',
    yearCompleted: 2025,
    squareFeet: 16800,
    timelineMonths: 22,
    architecturalStyle: 'Modern Brutalist & Minimalist Organic',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1600&auto=format&fit=crop',
    ],
    summary: 'A 16,800-square-foot bespoke private compound perched on a 42-degree granite hillside with panoramic Pacific views. Engineered with post-tensioned foundation micro-piles driven 65 feet into bedrock.',
    challenge: 'Stabilizing a steeply inclined seismically active site while executing a 38-foot unsupported cantilevered primary terrace without visible vertical column supports.',
    solution: 'Designed an integrated post-tensioned structural steel-reinforced concrete core with dual subterranean tie-backs and multi-axial dampers to absorb lateral seismic forces while preserving ethereal glass sightlines.',
    structuralInnovations: [
      '38-foot post-tensioned cantilevered concrete deck',
      '65-foot bedrock micro-pile seismic anchoring matrix',
      'Continuous thermal break floor-to-ceiling glass curtain walls',
      'Subterranean 8-car climate-controlled gallery with hydraulic lift'
    ],
    materialsUsed: [
      'Board-formed Swiss architectural white concrete',
      'Titanium-zinc cladding panels',
      'Custom Reynaers ultra-slim thermally broken triple-glazing',
      'Honed Portuguese Moleanos limestone'
    ],
    clientQuote: {
      text: 'Life Homes & Developers turned what three prior engineering teams labeled impossible into an awe-inspiring sanctuary of structural perfection.',
      author: 'Marcus Vance',
      role: 'Private Estate Owner & Venture Capitalist'
    }
  },
  {
    id: 'proj-2',
    slug: 'villa-seraphina-triplex-penthouse',
    title: 'Villa Seraphina Triplex Penthouse',
    subtitle: 'Haute Couture Interior Architecture',
    category: 'interior',
    categoryLabel: 'Interior Design',
    location: 'Tribeca, New York',
    yearCompleted: 2025,
    squareFeet: 9400,
    timelineMonths: 14,
    architecturalStyle: 'Contemporary European Elegance',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1600&auto=format&fit=crop'
    ],
    summary: 'A bespoke triplex crown jewel spanning three penthouse floors overlooking the Hudson River. Every millimeter was tailored with book-matched Italian marble, custom French oak parquetry, and integrated acoustic decoupling.',
    challenge: 'Managing strict NYC historic landmark building load limitations while hoisting 4-ton solid slabs of Italian Calacatta Viola and constructing an internal suspended bronze helical staircase.',
    solution: 'Engineered a lightweight carbon-fiber substructure to distribute staircase and marble loads evenly across the building structural bays, coordinating crane logistics across closed city avenues with zero disruption.',
    structuralInnovations: [
      'Suspended helical bronze staircase with concealed structural spine',
      'Independent sound-decoupled floating floor system (STC 68 rating)',
      'Smart micro-climate wine humidor chamber with UV-shielded argon glass',
      'Invisible flush-mounted ceiling air diffusers with whisper-silent CFM'
    ],
    materialsUsed: [
      'Book-matched Italian Calacatta Viola & Fior di Bosco marble',
      'Quarter-sawn aged smoked European oak herringbone floors',
      'Hand-burnished satin brass architectural reveals',
      'Loro Piana cashmere wall upholstery in private library'
    ],
    clientQuote: {
      text: 'Their mastery of light, bespoke millwork, and sensory materials elevated this space beyond an apartment into a true work of living art.',
      author: 'Evelyn St. Claire',
      role: 'Art Collector & Patron'
    }
  },
  {
    id: 'proj-3',
    slug: 'the-manor-preservation-greenwich',
    title: 'The Stonefield Manor Restoration',
    subtitle: 'Turnkey Historical Estate Renovation',
    category: 'renovation',
    categoryLabel: 'Renovation & Restoration',
    location: 'Greenwich, Connecticut',
    yearCompleted: 2024,
    squareFeet: 21500,
    timelineMonths: 24,
    architecturalStyle: '1920s Tudor Revival Modernized',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1800&auto=format&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop'
    ],
    summary: 'A painstaking full-estate renovation of an 18-acre 1928 stone manor. Life Homes restored the historic masonry facades while completely gut-renovating the interior into an ultra-modern smart geothermal estate.',
    challenge: 'Repairing 96-year-old crumbling fieldstone masonry and sagging timber joists without modifying the legally protected exterior historic facade.',
    solution: 'Laser-scanned the entire manor to 0.5mm accuracy; inserted a concealed subterranean steel exoskeleton inside the exterior envelope, modernizing MEP systems to geothermal net-zero readiness.',
    structuralInnovations: [
      'Internal structural steel exoskeleton concealed within historic exterior walls',
      'Subterranean 3,500 sq ft wellness sanctuary with heated Roman thermal baths',
      'Geothermal closed-loop heating/cooling system cutting energy consumption by 72%',
      'Period-accurate hand-chiseled replacement stone sourced from original historic quarry'
    ],
    materialsUsed: [
      'Hand-dressed Pennsylvania fieldstone',
      'Hand-split Buckingham Virginia roofing slate',
      'Custom bronze-framed French casement windows',
      'Reclaimed solid French chestnut ceiling beams'
    ],
    clientQuote: {
      text: 'They breathed a century of new life into our family estate with uncompromising civil precision and sublime design sensitivity.',
      author: 'Lord Harrison Thorne',
      role: 'Estate Trustee'
    }
  },
  {
    id: 'proj-4',
    slug: 'the-solarium-waterfront-mansion',
    title: 'The Solarium Waterfront Estate',
    subtitle: 'Ultra-Luxury Coastal Civil Engineering',
    category: 'residential',
    categoryLabel: 'Residential Construction',
    location: 'Palm Beach, Florida',
    yearCompleted: 2025,
    squareFeet: 18500,
    timelineMonths: 20,
    architecturalStyle: 'Modern Mediterranean & Tropical Biophilic',
    heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1600&auto=format&fit=crop'
    ],
    summary: 'A waterfront sanctuary engineered to withstand Category 5 hurricanes while maintaining ethereal indoor-outdoor continuum with 120-foot automated pocketing glass walls and infinity edge reflecting pools.',
    challenge: 'Water table just 4 feet below ground level and corrosive salt-air marine environment requiring extreme durability without industrial appearance.',
    solution: 'Constructed an impervious marine-grade sealed concrete bathtub foundation with cathodic corrosion protection and custom engineered high-impact hurricane glazing.',
    structuralInnovations: [
      'Marine-grade concrete mix with crystalline water-proofing admixtures',
      'Continuous 120-foot automated pocket glass door tracking system',
      'Perimeter kinetic wave-deflecting sea barrier integrated with landscape',
      'Rooftop photovoltaic solar glass roof powering 100% of auxiliary estate loads'
    ],
    materialsUsed: [
      'Coralina natural Dominican fossil stone',
      'Marine-grade 316L architectural stainless steel & bronze',
      'Indonesian plantation-grown certified teak decking',
      'Venetian polished marmorino plaster ceilings'
    ],
    clientQuote: {
      text: 'Living right on the ocean with zero fear of seasonal storms is a testament to the incredible engineering rigor of Life Homes.',
      author: 'Elena & David Ross',
      role: 'Private Residents'
    }
  },
  {
    id: 'proj-5',
    slug: 'the-aurora-haute-atelier',
    title: 'The Aurora Duplex Residence',
    subtitle: 'Minimalist Architectural Interior',
    category: 'interior',
    categoryLabel: 'Interior Design',
    location: 'Mayfair, London',
    yearCompleted: 2024,
    squareFeet: 7200,
    timelineMonths: 12,
    architecturalStyle: 'Modern British Luxury & Sculptural Minimalism',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop'
    ],
    summary: 'A sculptural duplex residence combining bespoke walnut architectural millwork with custom curved plaster walls and museum-grade gallery illumination.',
    challenge: 'Curating seamless seamless zero-threshold transition between multiple rooms without visible electrical plates or hardware.',
    solution: 'Designed concealed pocket door systems with magnetic soft-close mechanisms, flush baseboards, and integrated perimeter LED coves.',
    structuralInnovations: [
      'Concealed magnetic architectural hardware throughout',
      'Custom zero-glare low-voltage micro-aperture gallery lighting',
      'Monolithic monolithic concrete kitchen island cast in place with induction cooktop under stone'
    ],
    materialsUsed: [
      'American black walnut with hand-rubbed organic oil',
      'Belgian Bluestone and honed Carrara marble',
      'Raw silk wall drapery and bronze woven partitions'
    ]
  },
  {
    id: 'proj-6',
    slug: 'the-crestwood-residence-modernization',
    title: 'The Crestwood Mid-Century Revival',
    subtitle: 'Architectural Renovation & Structural Extension',
    category: 'renovation',
    categoryLabel: 'Renovation & Restoration',
    location: 'Aspen, Colorado',
    yearCompleted: 2025,
    squareFeet: 12400,
    timelineMonths: 18,
    architecturalStyle: 'Modern Alpine Contemporary',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop'
    ],
    summary: 'Transforming an outdated 1970s mountain lodge into a cutting-edge heated-glass alpine retreat with heated driveway, outdoor infinity spa, and cantilevered ski lounge.',
    challenge: 'Extreme winter snow loads (150 lbs/sq ft) coupled with complex mountain soil geology.',
    solution: 'Replaced roof truss system with heavy timber glulam and exposed architectural black steel, doubling thermal insulation R-values.',
    structuralInnovations: [
      'Heated architectural electrochromic roof glass system',
      'Geothermally heated external driveways and terraces to eliminate snow buildup',
      'High-altitude double-pane argon gas insulation'
    ],
    materialsUsed: [
      'Charred Japanese Shou Sugi Ban cedar',
      'Montana moss rock fieldstone',
      'Gunmetal blackened structural steel'
    ]
  }
];

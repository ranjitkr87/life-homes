import { ServiceDetail } from '../types';

export const servicesData: Record<string, ServiceDetail> = {
  'residential-construction': {
    id: 'svc-residential',
    slug: 'residential-construction',
    title: 'Residential Construction',
    subtitle: 'Bespoke Architectural Mansions & High-End Civil Engineering',
    tagline: 'From Deep Geotechnical Foundations to Sculptural Rooflines: Monumental Civil Execution.',
    description: 'Life Homes & Developers conceives and builds architectural residences of uncompromising permanence. We integrate peer-reviewed civil engineering with haute aesthetic execution, delivering turnkey estates that endure for generations. Every foundation is mapped through rigorous geotechnical analysis, seismically tuned, and executed using the highest grade structural materials known to contemporary architecture.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop',
    featuredImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop'
    ],
    metrics: [
      { label: 'Structural Tolerance', value: '±1.5mm', detail: 'Laser-guided Swiss precision alignment' },
      { label: 'Seismic Endurance', value: 'Mag 8.5+', detail: 'Multi-axial foundation dampening matrix' },
      { label: 'Structural Lifespan', value: '150+ Years', detail: 'Post-tensioned marine & sulfate-resistant concrete' },
      { label: 'Client Confidentiality', value: '100% NDA', detail: 'Discreet on-site security and private protocols' }
    ],
    processSteps: [
      {
        step: 'Phase 01',
        name: 'Topographical & Geotechnical Inception',
        description: 'Deep sonic core-drilling, seismic resonance mapping, hydrogeological assessment, and precision 3D LiDAR drone surveying of the estate boundary.',
        deliverables: [
          'Sub-surface soil mechanics report',
          '3D digital terrain elevation model',
          'Environmental wind & sun path simulation',
          'Regulatory zoning & setback certification'
        ]
      },
      {
        step: 'Phase 02',
        name: 'Structural Architecture & Engineering Drafting',
        description: 'Finite element structural analysis, beam deflection calculations, cantilevers engineering, and mechanical-electrical-plumbing (MEP) integration.',
        deliverables: [
          'Full structural blueprint set stamped by licensed PE',
          '3D BIM coordination model with zero spatial clashes',
          'Acoustic decoupling matrix',
          'Custom curtain wall wind-load calculations'
        ]
      },
      {
        step: 'Phase 03',
        name: 'Civil Excavation & Subterranean Engineering',
        description: 'Micro-pile drilling, retaining diaphragm walls, waterproof crystalline concrete tanking, and subterranean infrastructure installation.',
        deliverables: [
          'Impervious grade-beam and post-tensioned slab',
          'Subterranean moisture barrier warranty',
          'Geothermal loop ground heat exchangers',
          'Seismic perimeter decoupling joints'
        ]
      },
      {
        step: 'Phase 04',
        name: 'Superstructure & Thermal Envelope Construction',
        description: 'Erecting post-tensioned reinforced columns, architectural white concrete finishes, structural steel framing, and ultra-high-efficiency thermal envelopes.',
        deliverables: [
          'Non-combustible monolithic framing',
          'Reynaers or Sky-Frame motorized slimline glazing',
          'Continuous exterior insulation (R-38 envelope)',
          'Standing seam titanium-zinc or slate roof'
        ]
      },
      {
        step: 'Phase 05',
        name: 'Turnkey Commissioning & White-Glove Handover',
        description: 'Full-system balancing, air filtration HEPA scrub, smart automation commissioning, acoustic calibration, and comprehensive estate operations manual handover.',
        deliverables: [
          'Complete As-Built digital 3D model & documentation',
          'Estate manager operational manuals & iPad controls',
          'Lifetime structural warranty certificate',
          'Private concierge warranty hotline access'
        ]
      }
    ],
    specifications: [
      {
        category: 'Foundations & Civil Infrastructure',
        items: [
          'Post-tensioned reinforced concrete slabs exceeding 6,000 PSI compressive strength',
          'Crystalline integral waterproofing (Xypex / Penetron) with zero hydrostatic seepage',
          'Laser-calibrated bedrock anchor micro-piles',
          'Sub-slab active radon and methane mitigation evacuation systems'
        ]
      },
      {
        category: 'Superstructure & Glazing',
        items: [
          'Thermally broken oversized architectural triple-glazed curtain walls up to 18 ft continuous',
          'Acoustic laminated low-iron Starphire safety glass (STC 44+)',
          'Structural steel hybrid framing with zero internal load-bearing wall constraints',
          'Class 1 architectural board-formed fair-faced concrete surfaces'
        ]
      },
      {
        category: 'Climate & Smart Building Integration',
        items: [
          'Multi-zone variable refrigerant flow (VRF) with ERV energy recovery ventilation',
          'MERV 16 hospital-grade bi-polar air ionization filtration',
          'Crestron Home / Lutron HomeWorks whole-estate automation infrastructure',
          'Dedicated acoustic decoupled cinema & subterranean wellness spa engineering'
        ]
      }
    ],
    signatureMaterials: [
      {
        name: 'Swiss Architectural Fair-Faced Concrete',
        origin: 'Zurich, Switzerland',
        description: 'Ultra-dense, satin-smooth architectural concrete with natural mineral aggregates, resistant to efflorescence and environmental staining.'
      },
      {
        name: 'Reynaers Hi-Finity Motorized Glazing',
        origin: 'Duffel, Belgium',
        description: 'Minimally visible 35mm sightline profiles with concealed electric motors capable of moving 1,200kg glass panels silently.'
      },
      {
        name: 'Moleanos Honed Limestone',
        origin: 'Alcobaça, Portugal',
        description: 'Timeless dense beige-cream limestone featuring subtle fossil markings, cut in monolithic pavers for indoor-outdoor fluidity.'
      }
    ],
    faq: [
      {
        question: 'What is the typical timeframe for a bespoke estate build?',
        answer: 'Our ground-up bespoke estates typically range from 16 to 26 months depending on scale, subterranean depth, and geological complexity. We employ critical-path scheduling with dedicated on-site project directors to ensure rigid adherence to the timeline.'
      },
      {
        question: 'Do you manage all municipal permitting and zoning hearings?',
        answer: 'Yes. Life Homes & Developers provides full-spectrum civil representation, expediting municipal approvals, environmental impact clearances, architectural review board presentations, and coastal or hillside commission authorizations.'
      },
      {
        question: 'How do you guarantee budget accuracy on multi-million dollar builds?',
        answer: 'Through our proprietary 3D BIM clash-detection and guaranteed maximum price (GMP) contracting framework. We lock in subcontractor agreements and material allocations prior to groundbreaking, preventing surprise overages.'
      }
    ]
  },

  'interior-design': {
    id: 'svc-interior',
    slug: 'interior-design',
    title: 'Interior Design & Haute Architecture',
    subtitle: 'Bespoke Spatial Architecture, Rare Stone Curation & Custom Millwork',
    tagline: 'Sculpting Intimate Luxury: Where Every Surface Tells a Story of Master Craftsmanship.',
    description: 'Our Interior Architecture and Design studio caters exclusively to patrons who view their living space as fine art. We reject cookie-cutter catalog furniture and off-the-shelf fixtures. Every residence is meticulously tailored with hand-selected Italian marble slabs, custom European millwork, bespoke acoustic ceilings, and atmospheric lighting scenes calibrated to flatter art collections and natural human rhythms.',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1800&auto=format&fit=crop',
    featuredImages: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1600&auto=format&fit=crop'
    ],
    metrics: [
      { label: 'Bespoke Millwork', value: '100% Custom', detail: 'Crafted in our Northern Italian & bespoke ateliers' },
      { label: 'Marble Curation', value: 'Book-Matched', detail: 'Personally sourced at Carrara & Verona quarries' },
      { label: 'Acoustic Rating', value: 'STC 65+', detail: 'Studio-grade acoustic isolation between suites' },
      { label: 'Lighting Quality', value: 'CRI 98+', detail: 'Museum-grade color rendering index illumination' }
    ],
    processSteps: [
      {
        step: 'Phase 01',
        name: 'Sensory Vision & Lifestyle Mapping',
        description: 'In-depth lifestyle analysis, art collection audit, acoustic requirements review, and initial tactile material palette exploration.',
        deliverables: [
          'Spatial programming and circulation analysis',
          'Physical mood trays with authentic marble, leather, and wood samples',
          'Atmospheric concept sketches and 3D volume studies',
          'Lighting and circadian design strategy'
        ]
      },
      {
        step: 'Phase 02',
        name: 'Architectural Detailing & 3D Photoreal Renderings',
        description: 'Developing millimeter-precise architectural millwork elevations, ceiling coffer details, hidden reveals, and photorealistic ray-traced spatial walk-throughs.',
        deliverables: [
          'Comprehensive interior CAD detailing set',
          'Photorealistic 8K virtual walkthrough renderings',
          'Custom furniture & fixture procurement schedules',
          'Acoustic panelling and fabric wall specifications'
        ]
      },
      {
        step: 'Phase 03',
        name: 'Quarry Selection & Artisan Fabrication',
        description: 'Accompanying or representing the client at premier quarries in Italy, Portugal, and Greece to hand-select marble blocks before water-jet slicing.',
        deliverables: [
          'Exact vein-matched 3D marble layout simulations',
          'Artisan shop drawings for bespoke walnut and brass cabinetry',
          'Hardware patination samples and custom finish swatches',
          'Custom rug and textile mill orders'
        ]
      },
      {
        step: 'Phase 04',
        name: 'White-Glove Installation & Styling Curation',
        description: 'Precision installation by master stone masons and European cabinetmakers, followed by art hanging, lighting calibration, and luxury turnkey styling.',
        deliverables: [
          'Zero-defect finish walkthrough and inspection',
          'Lutron lighting scene programming with art focusing',
          'Fine art and sculpture installation with museum security fittings',
          'Turnkey move-in readiness with bespoke scented linen and curated accessories'
        ]
      }
    ],
    specifications: [
      {
        category: 'Haute Stonework & Surfaces',
        items: [
          'Continuous vein-matched book-matched slabs for chef kitchens, baths, and fireplaces',
          'Mitered waterfall edges with seamless interior returns and back-lit onyx accents',
          'Hand-applied Roman micro-cement, Venetian marmorino plaster, and tadelakt waterproof finishes',
          'Leather-wrapped wardrobe doors with hand-stitched saddle details'
        ]
      },
      {
        category: 'Bespoke Cabinetry & Architectural Millwork',
        items: [
          'Custom French quarter-sawn oak, rift-cut walnut, and Makassar ebony architectural joinery',
          'Concealed Blum soft-close runners with custom bronze inlay handles',
          'Temperature and humidity-controlled custom walk-in wine cellars with argon glass',
          'Bespoke walk-in dressing suites featuring integrated velvet watch winders and biometric safes'
        ]
      },
      {
        category: 'Atmospheric Lighting & Acoustics',
        items: [
          'Concealed trimless 1-inch micro-aperture architectural downlights with warm-dim technology',
          'Indirect continuous plaster cove illumination creating halo light effects',
          'Micro-perforated acoustic wood veneer wall panels absorbing echo without visual seams',
          'Automated silent motorized sheer and blackout draperies concealed in ceiling pockets'
        ]
      }
    ],
    signatureMaterials: [
      {
        name: 'Calacatta Viola Marble',
        origin: 'Apuan Alps, Carrara, Italy',
        description: 'Dramatic wine-colored breccia veining set against crystalline ivory calcite, book-matched for monumental fireplace surrounds.'
      },
      {
        name: 'Smoked French Quarter-Sawn Oak',
        origin: 'Fontainebleau Forest, France',
        description: 'Slow-smoked timber with tight straight grain, hand-finished with natural hardwax oil for a warm, non-reflective matte patina.'
      },
      {
        name: 'Hand-Burnished Architectural Bronze',
        origin: 'Birmingham, United Kingdom',
        description: 'Living alloy that develops a subtle, distinguished antique character over time, used for door hardware, stair reveals, and inlays.'
      }
    ],
    faq: [
      {
        question: 'Can you work alongside our existing project architect?',
        answer: 'Absolutely. We frequently collaborate as the interior architecture and design lead alongside world-renowned architectural firms, coordinating seamlessly via unified BIM models.'
      },
      {
        question: 'Do you source rare vintage collector furniture and blue-chip art?',
        answer: 'Yes. Our senior design curators attend art fairs in Basel, Miami, and Paris, and maintain direct relationships with master auction houses (Sotheby’s, Christie’s) and European design galleries.'
      },
      {
        question: 'What is the warranty on custom millwork and stonework?',
        answer: 'We provide a 10-year master craftsmanship warranty on all custom millwork, joinery, and architectural stone installations.'
      }
    ]
  },

  'renovation': {
    id: 'svc-renovation',
    slug: 'renovation',
    title: 'Estate Renovation & Structural Restoration',
    subtitle: 'Heritage Preservation, Modern Gut Renovations & Seismic Retrofitting',
    tagline: 'Breathing Modern Grandeur into Landmark Architecture with Invisible Civil Engineering.',
    description: 'Renovating a premier residence requires far greater technical sophistication than ground-up building. Life Homes & Developers specializes in the transformation of landmark estates, historic townhouses, and high-rise penthouses. We insert modern structural steel skeletons, whisper-quiet geothermal systems, and high-performance glass into historic envelopes without disturbing their irreplaceable heritage soul.',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1800&auto=format&fit=crop',
    featuredImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop'
    ],
    metrics: [
      { label: '3D Laser Scan Accuracy', value: '±0.5mm', detail: 'Complete cloud point model before touching a wall' },
      { label: 'Structural Energy Boost', value: '+65% Gain', detail: 'Average thermal insulation improvement' },
      { label: 'Historic Preservation', value: '100% Pass', detail: 'Full compliance with landmark preservation boards' },
      { label: 'Noise Reduction', value: '-35 dB', detail: 'Acoustic retrofitting of historic floors and facades' }
    ],
    processSteps: [
      {
        step: 'Phase 01',
        name: 'LiDAR Laser Scanning & Structural Forensics',
        description: 'Complete 360-degree point-cloud laser scanning of all existing masonry, timber joists, and foundation piers to uncover latent structural shifts.',
        deliverables: [
          'Millimeter-accurate 3D as-built CAD model',
          'Structural integrity and load-bearing stress report',
          'Historic materials inventory & salvage catalog',
          'Hazardous materials abatement certification'
        ]
      },
      {
        step: 'Phase 02',
        name: 'Landmarks Approvals & Structural Re-Engineering',
        description: 'Securing permits from historic district commissions, designing internal structural steel frames, and planning subterranean excavations.',
        deliverables: [
          'Landmarks Commission presentation packet & approvals',
          'Engineered temporary shoring and stabilization blueprint',
          'Modernized MEP utility distribution schematic',
          'Subterranean underpinning and waterproofing design'
        ]
      },
      {
        step: 'Phase 03',
        name: 'Internal Demolition, Shoring & Exoskeleton Insertion',
        description: 'Discreet surgical demolition, installing temporary hydraulic shoring towers, inserting concealed steel flitch beams, and foundation underpinning.',
        deliverables: [
          'Vibration-monitored excavation without damage to adjoining structures',
          'Concealed heavy steel framing replacing failing timber',
          'Continuous waterproof tanking across historic basements',
          'Sub-floor seismic ties and strapping'
        ]
      },
      {
        step: 'Phase 04',
        name: 'Heritage Restoration & High-Tech Modernization',
        description: 'Restoring historic plaster cornices and exterior stone while integrating geothermal heating, high-efficiency slim glazing, and luxury finishes.',
        deliverables: [
          'Re-pointed masonry with breathable historic lime mortars',
          'Thermally improved heritage-profile casement windows',
          'Concealed multi-zone smart climate control',
          'Seamless transition between historic and contemporary wings'
        ]
      }
    ],
    specifications: [
      {
        category: 'Structural Underpinning & Retrofitting',
        items: [
          'Sequential pit underpinning to increase basement ceiling heights from 7 ft to 12+ ft',
          'Installation of concealed structural steel moment frames to create open-concept living',
          'Carbon-fiber composite reinforcement of existing timber floor joists to eliminate bounce',
          'High-damping seismic elastomer bearing pads'
        ]
      },
      {
        category: 'Historic Preservation Techniques',
        items: [
          'Cast molding replication of damaged 19th-century plaster cornices and ceiling medallions',
          'Non-destructive chemical cleaning and restoration of antique brick and brownstone facades',
          'Hand-dressed lime mortar pointing matching historic color and aggregate chemistry',
          'Restoration of original wrought iron gates and balustrades with protective marine coatings'
        ]
      },
      {
        category: 'Modern Infrastructure Retrofit',
        items: [
          'Concealed high-velocity mini-duct AC systems routed through existing stud cavities without bulkheads',
          'Silent cast-iron acoustic drainage stacks eliminating pipe rushing sounds',
          'Whole-house backup natural gas generators with automatic 10-second transfer switches',
          'Integrated leak detection with motorized main-line automatic water shut-off valves'
        ]
      }
    ],
    signatureMaterials: [
      {
        name: 'Pennsylvania Reclaimed Historic Stone',
        origin: 'Quarry Salvage, Pennsylvania, USA',
        description: 'Century-old weathered fieldstone hand-sorted to seamlessly match original exterior estate walls.'
      },
      {
        name: 'Natural Hydraulic Lime Mortar (NHL 3.5)',
        origin: 'Saint-Astier, France',
        description: 'Flexible, breathable lime mortar that allows historic masonry to expel moisture without spalling or cracking.'
      },
      {
        name: 'Narrow-Sightline Heritage Vacuum Glazing',
        origin: 'Tokyo, Japan',
        description: 'Ultra-thin 8.3mm vacuum-insulated glass fitting historic wood muntins while providing the thermal performance of thick triple glazing.'
      }
    ],
    faq: [
      {
        question: 'Can we lower the basement floor to create a subterranean spa and cinema?',
        answer: 'Yes. We specialize in basement benching and pit underpinning, safely deepening existing foundations by 4 to 8 feet to create dramatic, high-ceiling subterranean wine rooms, wellness spas, and car galleries.'
      },
      {
        question: 'How do you handle protected historic district regulations?',
        answer: 'Our architectural team has a 100% approval track record with historic preservation commissions. We prepare meticulous archival documentation and laser scans demonstrating how exterior historic fabric is preserved.'
      },
      {
        question: 'Is it possible to live in the home during a phased renovation?',
        answer: 'For large estates, we can design clean-containment phased construction plans with negative-air pressure barriers and dedicated private access corridors to ensure minimal disruption to the family.'
      }
    ]
  }
};

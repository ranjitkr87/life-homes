import { useEffect } from 'react';
import { PageId, Project, BlogPost, ServiceDetail } from '../types';

interface SeoManagerProps {
  page: PageId;
  activeProject?: Project | null;
  activePost?: BlogPost | null;
  activeService?: ServiceDetail | null;
}

export function SeoManager({ page, activeProject, activePost, activeService }: SeoManagerProps) {
  useEffect(() => {
    let title = 'Life Homes & Developers | Luxury Civil Construction & Architecture';
    let description = 'Premier civil construction, bespoke residential development, luxury interior design, and high-end estate renovations for discerning clientele.';
    let ogImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop';
    let ogType = 'website';
    let schemaJson: Record<string, unknown> = {};

    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://lifehomesdevelopers.com';
    let path = '/';

    switch (page) {
      case 'home':
        title = 'Life Homes & Developers | Luxury Civil Construction & Bespoke Architecture';
        description = 'Monumental civil construction, bespoke residential estates, and turnkey high-end architecture engineered for generations. Bel Air, Manhattan & Greenwich.';
        path = '/';
        schemaJson = {
          '@context': 'https://schema.org',
          '@type': 'GeneralContractor',
          'name': 'Life Homes & Developers',
          'alternateName': 'Life Homes and Developers Civil Construction',
          'url': baseUrl,
          'logo': `${baseUrl}/logo.png`,
          'image': ogImage,
          'description': description,
          'telephone': '+1-800-543-3466',
          'email': 'concierge@lifehomesdevelopers.com',
          'priceRange': '$$$$',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': '740 Fifth Avenue, 18th Floor',
            'addressLocality': 'New York',
            'addressRegion': 'NY',
            'postalCode': '10019',
            'addressCountry': 'US'
          },
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Luxury Civil Construction Offerings',
            'itemListElement': [
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Residential Construction' } },
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Interior Design' } },
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Renovation & Restoration' } }
            ]
          }
        };
        break;

      case 'about':
        title = 'About Us | The Heritage & Masters of Life Homes & Developers';
        description = 'Discover the legacy of Life Homes & Developers: 24 years of civil engineering excellence, seismic innovation, and bespoke architectural prestige.';
        path = '/about';
        schemaJson = {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          'name': 'About Life Homes & Developers',
          'url': `${baseUrl}/about`,
          'description': description,
          'mainEntity': {
            '@type': 'Organization',
            'name': 'Life Homes & Developers',
            'foundingDate': '2008',
            'founders': [
              {
                '@type': 'Person',
                'name': 'Julian Sterling, PE',
                'jobTitle': 'Founder & Principal Civil Engineer'
              }
            ],
            'award': ['Global Residential Design Excellence Award 2024', 'LEED Platinum Certification']
          }
        };
        break;

      case 'services':
        title = 'Luxury Construction & Architectural Services | Life Homes & Developers';
        description = 'Explore our triad of civil disciplines: Ground-Up Residential Construction, Haute Couture Interior Architecture, and Historic Estate Renovations.';
        path = '/services';
        schemaJson = {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Luxury Civil Construction and Architectural Services',
          'provider': {
            '@type': 'GeneralContractor',
            'name': 'Life Homes & Developers'
          },
          'serviceType': 'Civil Engineering and Architectural Construction',
          'areaServed': ['New York', 'California', 'Connecticut', 'Florida', 'United Kingdom']
        };
        break;

      case 'services-residential':
        title = 'Residential Construction Services | Custom Luxury Estates & Civil Engineering';
        description = 'Turnkey ground-up construction of bespoke mansions and architectural estates. Geotechnical precision, seismic dampening, and laser-guided construction.';
        path = '/services/residential-construction';
        ogImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop';
        schemaJson = {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Residential Construction',
          'provider': {
            '@type': 'GeneralContractor',
            'name': 'Life Homes & Developers'
          },
          'description': 'Ground-up civil engineering and bespoke residential construction for ultra-luxury private compounds.',
          'termsOfService': 'Guaranteed Maximum Price with Turnkey Warranty'
        };
        break;

      case 'services-interior':
        title = 'Interior Design & Haute Architecture | Rare Stone & Custom Millwork';
        description = 'Haute couture interior architecture, hand-selected Italian Calacatta marble, French oak joinery, museum-grade lighting, and bespoke furnishings.';
        path = '/services/interior-design';
        ogImage = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop';
        schemaJson = {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Interior Design and Haute Architecture',
          'provider': {
            '@type': 'GeneralContractor',
            'name': 'Life Homes & Developers'
          },
          'description': 'Bespoke spatial architecture, stone curation, custom Italian millwork, and luxury interior design.'
        };
        break;

      case 'services-renovation':
        title = 'Estate Renovation & Structural Restoration | Historic & Modern Revivals';
        description = 'Historic estate preservation, modern penthouse gut-renovations, subterranean underpinning, and structural steel reinforcement.';
        path = '/services/renovation';
        ogImage = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop';
        schemaJson = {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Estate Renovation and Historic Restoration',
          'provider': {
            '@type': 'GeneralContractor',
            'name': 'Life Homes & Developers'
          },
          'description': 'Structural restoration and modern renovation of landmark estates, historic townhouses, and luxury residences.'
        };
        break;

      case 'gallery':
        title = 'Architectural Portfolio & Gallery | Life Homes & Developers';
        description = 'View our portfolio of bespoke residential estates, luxury interior architecture, and landmark renovations across Bel Air, Manhattan, and Greenwich.';
        path = '/gallery';
        schemaJson = {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          'name': 'Life Homes & Developers Architectural Portfolio',
          'description': description,
          'url': `${baseUrl}/gallery`
        };
        break;

      case 'blog':
        title = 'Journal & Architectural Insights | Life Homes & Developers';
        description = 'In-depth perspectives on civil engineering, structural acoustic decoupling, Italian marble curation, and historic estate preservation.';
        path = '/blog';
        schemaJson = {
          '@context': 'https://schema.org',
          '@type': 'Blog',
          'name': 'Life Homes & Developers Architectural Journal',
          'description': description,
          'url': `${baseUrl}/blog`
        };
        break;

      case 'blog-detail':
        if (activePost) {
          title = `${activePost.title} | Life Homes & Developers`;
          description = activePost.excerpt.slice(0, 155);
          ogImage = activePost.coverImage;
          ogType = 'article';
          path = `/blog/${activePost.slug}`;
          schemaJson = {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            'headline': activePost.title,
            'description': activePost.excerpt,
            'image': activePost.coverImage,
            'datePublished': activePost.isoDate,
            'dateModified': activePost.isoDate,
            'author': {
              '@type': 'Person',
              'name': activePost.author.name,
              'jobTitle': activePost.author.role
            },
            'publisher': {
              '@type': 'Organization',
              'name': 'Life Homes & Developers',
              'url': baseUrl
            },
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': `${baseUrl}/blog/${activePost.slug}`
            }
          };
        }
        break;

      case 'contact':
        title = 'Private Consultation & Concierge | Life Homes & Developers';
        description = 'Schedule a confidential architectural consultation with our principal civil engineers and design directors in New York, Beverly Hills, or London.';
        path = '/contact';
        schemaJson = {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          'name': 'Private Architectural Consultation',
          'description': description,
          'url': `${baseUrl}/contact`,
          'mainEntity': {
            '@type': 'LocalBusiness',
            'name': 'Life Homes & Developers',
            'telephone': '+1-800-543-3466',
            'email': 'concierge@lifehomesdevelopers.com',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': '740 Fifth Avenue, 18th Floor',
              'addressLocality': 'New York',
              'addressRegion': 'NY',
              'postalCode': '10019',
              'addressCountry': 'US'
            }
          }
        };
        break;
    }

    // 1. Update Title
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${baseUrl}${path}`);

    // 4. Update OpenGraph Tags
    const setMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('og:title', title);
    setMeta('og:description', description);
    setMeta('og:url', `${baseUrl}${path}`);
    setMeta('og:image', ogImage);
    setMeta('og:type', ogType);

    // 5. Update Twitter Card Tags
    const setTwitterMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setTwitterMeta('twitter:title', title);
    setTwitterMeta('twitter:description', description);
    setTwitterMeta('twitter:image', ogImage);

    // 6. Update Schema.org JSON-LD script tag
    let schemaScript = document.getElementById('route-schema-data') as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'route-schema-data';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schemaJson, null, 2);

    // Broadcast active SEO state for the in-app SEO Inspector modal
    if (typeof window !== 'undefined') {
      (window as unknown as { __CURRENT_SEO__: unknown }).__CURRENT_SEO__ = {
        title,
        description,
        canonicalUrl: `${baseUrl}${path}`,
        ogType,
        ogImage,
        schemaJson
      };
    }
  }, [page, activeProject, activePost, activeService]);

  return null;
}

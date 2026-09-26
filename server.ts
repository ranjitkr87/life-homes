import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;

async function startServer() {
  const app = express();

  app.use(express.json());

  // API Route: Handle VIP Consultation Inquiries
  app.post('/api/inquiries', (req, res) => {
    const { name, email, phone, serviceType, budgetTier, sqFt } = req.body;
    const refCode = `LH-${Math.floor(100000 + Math.random() * 900000)}`;

    res.json({
      success: true,
      referenceNumber: refCode,
      message: 'Inquiry received. A bilateral Mutual Non-Disclosure Agreement will be dispatched to your email.',
      receivedData: { name, email, phone, serviceType, budgetTier, sqFt }
    });
  });

  // API Route: SEO Health Check
  app.get('/api/seo-health', (req, res) => {
    res.json({
      status: 'healthy',
      routes: [
        '/',
        '/about',
        '/services',
        '/services/residential-construction',
        '/services/interior-design',
        '/services/renovation',
        '/gallery',
        '/blog',
        '/blog/mathematics-of-quiet-luxury-acoustic-engineering',
        '/blog/selecting-investment-grade-marble-haute-interiors',
        '/contact'
      ],
      schemasSupported: [
        'GeneralContractor',
        'Service',
        'AboutPage',
        'ContactPage',
        'CollectionPage',
        'Blog',
        'BlogPosting'
      ]
    });
  });

  let vite: any;
  if (!isProduction) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist'), { index: false }));
  }

  // Route-specific SSR SEO metadata definition
  const routeSeoMap: Record<
    string,
    {
      title: string;
      description: string;
      schemaType: string;
      image: string;
    }
  > = {
    '/': {
      title: 'Life Homes & Developers | Luxury Civil Construction & Architecture',
      description:
        'Premier civil construction, bespoke residential development, luxury interior design, and high-end estate renovations for discerning clientele.',
      schemaType: 'GeneralContractor',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop'
    },
    '/about': {
      title: 'About Us | The Heritage & Masters of Life Homes & Developers',
      description:
        'Discover the legacy of Life Homes & Developers: 24 years of civil engineering excellence, seismic innovation, and bespoke architectural prestige.',
      schemaType: 'AboutPage',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop'
    },
    '/services': {
      title: 'Luxury Construction & Architectural Services | Life Homes & Developers',
      description:
        'Explore our triad of civil disciplines: Ground-Up Residential Construction, Haute Couture Interior Architecture, and Historic Estate Renovations.',
      schemaType: 'Service',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop'
    },
    '/services/residential-construction': {
      title: 'Residential Construction Services | Custom Luxury Estates & Civil Engineering',
      description:
        'Turnkey ground-up construction of bespoke mansions and architectural estates. Geotechnical precision, seismic dampening, and laser-guided construction.',
      schemaType: 'Service',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop'
    },
    '/services/interior-design': {
      title: 'Interior Design & Haute Architecture | Rare Stone & Custom Millwork',
      description:
        'Haute couture interior architecture, hand-selected Italian Calacatta marble, French oak joinery, museum-grade lighting, and bespoke furnishings.',
      schemaType: 'Service',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop'
    },
    '/services/renovation': {
      title: 'Estate Renovation & Structural Restoration | Historic & Modern Revivals',
      description:
        'Historic estate preservation, modern penthouse gut-renovations, subterranean underpinning, and structural steel reinforcement.',
      schemaType: 'Service',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop'
    },
    '/gallery': {
      title: 'Architectural Portfolio & Gallery | Life Homes & Developers',
      description:
        'View our portfolio of bespoke residential estates, luxury interior architecture, and landmark renovations across Bel Air, Manhattan, and Greenwich.',
      schemaType: 'CollectionPage',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop'
    },
    '/blog': {
      title: 'Journal & Architectural Insights | Life Homes & Developers',
      description:
        'In-depth perspectives on civil engineering, structural acoustic decoupling, Italian marble curation, and historic estate preservation.',
      schemaType: 'Blog',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop'
    },
    '/contact': {
      title: 'Private Consultation & Concierge | Life Homes & Developers',
      description:
        'Schedule a confidential architectural consultation with our principal civil engineers and design directors in New York, Beverly Hills, or London.',
      schemaType: 'ContactPage',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop'
    }
  };

  // SSR HTML Handler: Injects route-specific SEO tags directly on the server before client hydration
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl.split('?')[0];

    try {
      let templatePath = isProduction
        ? path.resolve(__dirname, 'dist', 'index.html')
        : path.resolve(__dirname, 'index.html');

      let template = fs.readFileSync(templatePath, 'utf-8');

      if (!isProduction && vite) {
        template = await vite.transformIndexHtml(url, template);
      }

      const seo = routeSeoMap[url] || routeSeoMap['/'];

      // Server-side replace title and description
      template = template.replace(
        /<title>.*?<\/title>/,
        `<title>${seo.title}</title>`
      );
      template = template.replace(
        /<meta name="description" content=".*?" \/>/,
        `<meta name="description" content="${seo.description}" />`
      );

      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(e);
      }
      next(e);
    }
  });

  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
}

startServer();

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PageId, Project, BlogPost, ServiceDetail } from './types';
import { projectsData } from './data/projectsData';
import { servicesData } from './data/servicesData';
import { blogPostsData } from './data/blogData';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SeoManager } from './components/SeoManager';
import { SeoInspectorModal } from './components/SeoInspectorModal';
import { CostEstimatorModal } from './components/CostEstimatorModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesHubPage } from './pages/ServicesHubPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [activeService, setActiveService] = useState<ServiceDetail | null>(null);

  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isSeoInspectorOpen, setIsSeoInspectorOpen] = useState(false);

  const [prefillContactData, setPrefillContactData] = useState<{
    serviceType?: string;
    sqFt?: number;
    finishLevel?: string;
    estimatedCost?: string;
    estimatedMonths?: string;
    amenities?: string[];
  } | null>(null);

  // Sync initial URL path to page state
  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
      if (!path || path === '') {
        setCurrentPage('home');
      } else if (path === 'about') {
        setCurrentPage('about');
      } else if (path === 'services') {
        setCurrentPage('services');
      } else if (path === 'services/residential-construction') {
        setCurrentPage('services-residential');
        setActiveService(servicesData['residential-construction']);
      } else if (path === 'services/interior-design') {
        setCurrentPage('services-interior');
        setActiveService(servicesData['interior-design']);
      } else if (path === 'services/renovation') {
        setCurrentPage('services-renovation');
        setActiveService(servicesData['renovation']);
      } else if (path === 'gallery') {
        setCurrentPage('gallery');
      } else if (path === 'blog') {
        setCurrentPage('blog');
      } else if (path.startsWith('blog/')) {
        const slug = path.replace('blog/', '');
        const found = blogPostsData.find(p => p.slug === slug);
        if (found) {
          setActivePost(found);
          setCurrentPage('blog-detail');
        } else {
          setCurrentPage('blog');
        }
      } else if (path === 'contact') {
        setCurrentPage('contact');
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  // Update browser URL state cleanly
  const navigateTo = (page: PageId, post?: BlogPost, serviceSlug?: string) => {
    setCurrentPage(page);

    let newUrl = '/';
    switch (page) {
      case 'home':
        newUrl = '/';
        break;
      case 'about':
        newUrl = '/about';
        break;
      case 'services':
        newUrl = '/services';
        break;
      case 'services-residential':
        newUrl = '/services/residential-construction';
        setActiveService(servicesData['residential-construction']);
        break;
      case 'services-interior':
        newUrl = '/services/interior-design';
        setActiveService(servicesData['interior-design']);
        break;
      case 'services-renovation':
        newUrl = '/services/renovation';
        setActiveService(servicesData['renovation']);
        break;
      case 'gallery':
        newUrl = '/gallery';
        break;
      case 'blog':
        newUrl = '/blog';
        break;
      case 'blog-detail':
        if (post) {
          setActivePost(post);
          newUrl = `/blog/${post.slug}`;
        }
        break;
      case 'contact':
        newUrl = '/contact';
        break;
    }

    try {
      window.history.pushState({}, '', newUrl);
    } catch {
      // In restricted iframe environments
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPost = (post: BlogPost) => {
    setActivePost(post);
    navigateTo('blog-detail', post);
  };

  const handleInquireFromService = (serviceName: string) => {
    setPrefillContactData({
      serviceType: serviceName
    });
    navigateTo('contact');
  };

  const handleInquireFromProject = (project: Project) => {
    setPrefillContactData({
      serviceType: project.categoryLabel,
      sqFt: project.squareFeet,
      finishLevel: `Architectural inquiry based on portfolio: ${project.title}`
    });
    navigateTo('contact');
  };

  const handleProceedFromEstimator = (data: {
    serviceType: string;
    sqFt: number;
    finishLevel: string;
    estimatedCost: string;
    estimatedMonths: string;
    amenities: string[];
  }) => {
    setPrefillContactData(data);
    navigateTo('contact');
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#e5e0d8] font-sans antialiased flex flex-col justify-between">
      {/* Dynamic SEO & Schema.org Structured Data Manager */}
      <SeoManager
        page={currentPage}
        activeProject={activeProject}
        activePost={activePost}
        activeService={activeService}
      />

      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        onOpenSeoInspector={() => setIsSeoInspectorOpen(true)}
      />

      {/* Page Routing */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
            onSelectProject={project => setActiveProject(project)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesHubPage
            onNavigate={navigateTo}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {currentPage === 'services-residential' && (
          <ServiceDetailPage
            service={servicesData['residential-construction']}
            onNavigate={navigateTo}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
            onInquireService={handleInquireFromService}
          />
        )}

        {currentPage === 'services-interior' && (
          <ServiceDetailPage
            service={servicesData['interior-design']}
            onNavigate={navigateTo}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
            onInquireService={handleInquireFromService}
          />
        )}

        {currentPage === 'services-renovation' && (
          <ServiceDetailPage
            service={servicesData['renovation']}
            onNavigate={navigateTo}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
            onInquireService={handleInquireFromService}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onNavigate={navigateTo}
            onSelectProject={project => setActiveProject(project)}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            onNavigate={navigateTo}
            onSelectPost={handleSelectPost}
          />
        )}

        {currentPage === 'blog-detail' && activePost && (
          <BlogDetailPage
            post={activePost}
            onNavigate={navigateTo}
            onSelectPost={handleSelectPost}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            prefillData={prefillContactData}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenSeoInspector={() => setIsSeoInspectorOpen(true)}
      />

      {/* Global Interactive Modals */}
      <CostEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onProceedToConsultation={handleProceedFromEstimator}
      />

      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onInquire={handleInquireFromProject}
      />

      <SeoInspectorModal
        isOpen={isSeoInspectorOpen}
        onClose={() => setIsSeoInspectorOpen(false)}
      />
    </div>
  );
}

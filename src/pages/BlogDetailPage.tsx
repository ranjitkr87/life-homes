import { useState } from 'react';
import { ArrowLeft, Clock, Calendar, Share2, Check, Bookmark, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageId, BlogPost } from '../types';
import { blogPostsData } from '../data/blogData';

interface BlogDetailPageProps {
  post: BlogPost;
  onNavigate: (page: PageId) => void;
  onSelectPost: (post: BlogPost) => void;
}

export function BlogDetailPage({ post, onNavigate, onSelectPost }: BlogDetailPageProps) {
  const [copied, setCopied] = useState(false);

  const relatedPosts = blogPostsData
    .filter(p => p.id !== post.id)
    .slice(0, 2);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="min-h-screen bg-[#0b0c0e] text-[#e5e0d8] pt-24 pb-20">
      {/* 1. Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <button
          onClick={() => onNavigate('blog')}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-400 hover:text-[#d4af37] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Journal</span>
        </button>

        {/* Clean unboxed metadata per constitution */}
        <div className="flex items-center gap-2 text-xs text-stone-400 font-medium">
          <span className="text-[#d4af37] uppercase tracking-wider">{post.category}</span>
          <span aria-hidden="true">·</span>
          <span>{post.publishedDate}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-[1.18]">
          {post.title}
        </h1>

        <p className="text-lg sm:text-xl font-serif text-[#e6ca85] italic font-normal">
          {post.subtitle}
        </p>

        {/* Author Bio Bar */}
        <div className="pt-4 border-t border-[#1e222a] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover border border-[#d4af37]/40 shadow-md"
            />
            <div>
              <p className="text-sm font-semibold text-white">{post.author.name}</p>
              <p className="text-xs text-stone-400">{post.author.role}</p>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="px-3.5 py-1.5 rounded-lg bg-[#181b20] border border-[#282e38] text-xs text-stone-300 hover:text-white flex items-center gap-2 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'Link Copied' : 'Share Article'}</span>
          </button>
        </div>
      </header>

      {/* 2. Hero Visual */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-[#282e38] shadow-2xl">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 3. Main Reading Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-sm sm:text-base leading-relaxed text-stone-300 font-light">
        {/* Lead Excerpt */}
        <p className="text-lg sm:text-xl text-white font-serif italic border-l-2 border-[#d4af37] pl-6 py-1 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Article Sections */}
        {post.content.map((sec, idx) => (
          <section key={idx} className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide pt-4">
              {sec.sectionHeading}
            </h2>

            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="leading-relaxed">
                {p}
              </p>
            ))}

            {sec.pullQuote && (
              <blockquote className="my-8 p-6 rounded-2xl bg-[#121417] border-l-4 border-[#d4af37] text-base sm:text-lg font-serif italic text-stone-200">
                “{sec.pullQuote}”
              </blockquote>
            )}

            {sec.image && (
              <figure className="my-8 space-y-2">
                <div className="rounded-xl overflow-hidden border border-[#282e38]">
                  <img src={sec.image} alt={sec.imageCaption || ''} className="w-full object-cover" />
                </div>
                {sec.imageCaption && (
                  <figcaption className="text-xs text-stone-500 font-mono text-center">
                    {sec.imageCaption}
                  </figcaption>
                )}
              </figure>
            )}
          </section>
        ))}

        {/* Key Takeaways Box */}
        <div className="p-8 rounded-2xl bg-[#121417] border border-[#d4af37]/40 space-y-4 shadow-xl">
          <h3 className="text-base font-serif font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <span className="text-[#d4af37]">★</span> Engineering &amp; Architectural Takeaways
          </h3>
          <ul className="space-y-2.5">
            {post.keyTakeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-[#1e222a] flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold mr-2">
            Topics:
          </span>
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs text-stone-400 bg-[#121417] border border-[#282e38] px-3 py-1 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 4. Related Articles */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-16 border-t border-[#1e222a] space-y-8">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
          Related Architectural Perspectives
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedPosts.map(rel => (
            <div
              key={rel.id}
              onClick={() => onSelectPost(rel)}
              className="group cursor-pointer rounded-2xl bg-[#121417] border border-[#282e38] hover:border-[#d4af37]/50 p-6 flex flex-col justify-between transition-all"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#d4af37]">
                  {rel.category} · {rel.readTime}
                </span>
                <h4 className="text-base font-serif font-bold text-white group-hover:text-[#d4af37] transition-colors leading-snug">
                  {rel.title}
                </h4>
                <p className="text-xs text-stone-400 line-clamp-2">{rel.excerpt}</p>
              </div>
              <div className="pt-4 border-t border-[#1e222a] mt-4 flex items-center justify-between text-xs text-[#d4af37] font-semibold">
                <span>Read Analysis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

import { useState } from 'react';
import { Search, ArrowRight, BookOpen, Clock, Calendar, User } from 'lucide-react';
import { PageId, BlogPost } from '../types';
import { blogPostsData } from '../data/blogData';

interface BlogPageProps {
  onNavigate: (page: PageId) => void;
  onSelectPost: (post: BlogPost) => void;
}

export function BlogPage({ onNavigate, onSelectPost }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Civil Engineering', 'Architecture', 'Interior Haute', 'Estate Restoration'];

  const filteredPosts = blogPostsData.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesQuery =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const featuredPost = blogPostsData[0];

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#e5e0d8] pt-24">
      {/* 1. Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1e222a] overflow-hidden text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
            <span>The Monolith Journal</span>
            <span aria-hidden="true">·</span>
            <span>Architectural &amp; Civil Perspectives</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight">
            Architectural Insights &amp; Engineering Forensics
          </h1>

          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Deep-dive explorations into structural acoustic decoupling, investment-grade Italian marble selection, coastal marine civil engineering, and heritage estate preservation.
          </p>

          {/* Search Bar */}
          <div className="pt-6 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search articles, civil topics, stone varieties..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#121417] border border-[#282e38] text-white placeholder-stone-500 focus:outline-none focus:border-[#d4af37] text-xs transition-colors"
              />
            </div>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#d4af37] text-[#0b0c0e] font-bold shadow-lg'
                    : 'bg-[#121417] text-stone-400 hover:text-white border border-[#282e38]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Featured Lead Editorial (Only shown if no search query or matches) */}
      {!searchQuery && selectedCategory === 'All' && featuredPost && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#1e222a] bg-[#070809]">
          <div className="max-w-7xl mx-auto">
            <div
              onClick={() => onSelectPost(featuredPost)}
              className="cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-10 rounded-3xl bg-[#121417] border border-[#d4af37]/40 hover:border-[#d4af37] transition-all group shadow-2xl"
            >
              <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden bg-black">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md rounded border border-white/20 text-xs text-[#d4af37] font-semibold uppercase tracking-wider">
                  Featured Lead Article
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-stone-400">
                    <span className="text-[#d4af37] font-medium">{featuredPost.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{featuredPost.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{featuredPost.publishedDate}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white group-hover:text-[#d4af37] transition-colors leading-snug">
                    {featuredPost.title}
                  </h2>

                  <p className="text-xs text-[#e6ca85] italic font-serif">
                    {featuredPost.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1e222a] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-[#d4af37]/40"
                    />
                    <div>
                      <p className="text-xs font-semibold text-white">{featuredPost.author.name}</p>
                      <p className="text-[10px] text-stone-400">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-[#d4af37] group-hover:underline inline-flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Article Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="cursor-pointer group rounded-2xl bg-[#121417] border border-[#282e38] hover:border-[#d4af37]/60 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Clean unboxed category label */}
                  <div className="absolute top-4 left-4 text-[11px] font-medium text-stone-200 bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
                    <span>{post.category}</span>
                  </div>
                </div>

                <div className="p-6 space-y-2.5">
                  {/* Clean unboxed metadata per constitution */}
                  <div className="flex items-center gap-2 text-xs text-stone-400">
                    <span>{post.publishedDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#d4af37] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-stone-300 line-clamp-3 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#1e222a] mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-6 h-6 rounded-full object-cover border border-[#d4af37]/30"
                  />
                  <span className="text-xs text-stone-300 font-medium">{post.author.name}</span>
                </div>
                <span className="text-xs text-[#d4af37] font-semibold group-hover:underline">
                  Read &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

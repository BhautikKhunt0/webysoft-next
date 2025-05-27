import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Navbar from '@/components/landing/NavbarNew';
import Footer from '@/components/landing/Footer';
import { 
  portfolioItems, 
  getAllTypes, 
  type PortfolioItem, 
  type PortfolioItemType 
} from '@/data/portfolio';
import { 
  Shield, 
  Award, 
  ExternalLink, 
  Filter, 
  Search, 
  ArrowLeft,
  Building,
  Globe,
  CheckCircle 
} from 'lucide-react';

export default function Portfolio() {
  const [selectedType, setSelectedType] = useState<PortfolioItemType | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const allTypes = getAllTypes();
  
  const filteredItems = useMemo(() => {
    let items = portfolioItems;
    
    // Filter by type
    if (selectedType !== 'All') {
      items = items.filter(item => item.type === selectedType);
    }
    
    // Filter by search query
    if (searchQuery) {
      items = items.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return items;
  }, [selectedType, searchQuery]);

  const typeColors = {
    'Service': 'blue',
    'Legal': 'indigo', 
    'Local Shop': 'purple',
    'Academy': 'green'
  };

  const colorClasses = {
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-400",
      border: "border-blue-500/20"
    },
    indigo: {
      bg: "bg-indigo-500/10", 
      text: "text-indigo-400",
      border: "border-indigo-500/20"
    },
    purple: {
      bg: "bg-purple-500/10",
      text: "text-purple-400", 
      border: "border-purple-500/20"
    },
    green: {
      bg: "bg-green-500/10",
      text: "text-green-400",
      border: "border-green-500/20"
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm font-medium text-blue-400 mb-6">
              <Building className="w-4 h-4" />
              <span>Enterprise Portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover how we've helped enterprises across industries achieve digital transformation with our certified solutions and professional expertise.
            </p>

            <Link href="/">
              <motion.button
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                {portfolioItems.length}+
              </div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">4+</div>
              <div className="text-sm text-gray-400">Industries Served</div>
            </div>
            <div className="text-center bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">A+</div>
              <div className="text-sm text-gray-400">Quality Rating</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>

            {/* Type Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-gray-400 mr-2" />
              <button
                onClick={() => setSelectedType('All')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedType === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                All Projects
              </button>
              {allTypes.map((type) => {
                const colors = colorClasses[typeColors[type] as keyof typeof colorClasses];
                return (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedType === type
                        ? `${colors.bg} ${colors.text} ${colors.border} border`
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No Projects Found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => {
                const colors = colorClasses[typeColors[item.type] as keyof typeof colorClasses];
                
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-xl hover:border-slate-600/50 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                      
                      {/* Type Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text} ${colors.border} border backdrop-blur`}>
                          {item.type}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {item.featured && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium backdrop-blur flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            Featured
                          </div>
                        </div>
                      )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-400 mb-3">{item.category}</p>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                        {item.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {item.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-md">
                            +{item.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Action Button */}
                      <a
                        href={item.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-2 group"
                      >
                        <Globe className="w-4 h-4" />
                        View Live Project
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  Success Story?
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our portfolio of successful enterprises. Let's discuss how we can transform your digital presence with our certified expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/#contact">
                  <motion.button
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Your Project
                  </motion.button>
                </Link>
                
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free consultation included</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-slate-700/50">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">ISO Security</p>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Quality Certified</p>
                </div>
                <div className="text-center">
                  <Building className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Enterprise Grade</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Guaranteed Results</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
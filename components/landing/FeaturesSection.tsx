import { motion } from "framer-motion";
import { Shield, Award, Users, TrendingUp, Zap, Globe, Clock, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    color: "blue",
    title: "Enterprise Security",
    description: "Bank-level security protocols and ISO 27001 compliance ensure your data is always protected with military-grade encryption."
  },
  {
    icon: Award,
    color: "yellow",
    title: "Certified Excellence",
    description: "ISO 9001:2015 certified processes and award-winning team delivering consistently exceptional results for global clients."
  },
  {
    icon: Users,
    color: "green",
    title: "Dedicated Support",
    description: "Personal project manager and 24/7 expert support team ensuring seamless communication throughout your project lifecycle."
  },
  {
    icon: TrendingUp,
    color: "indigo",
    title: "Proven ROI Growth",
    description: "Average 250% ROI increase for clients through strategic optimization, data-driven decisions, and conversion-focused design."
  },
  {
    icon: Zap,
    color: "purple",
    title: "Lightning Performance",
    description: "Sub-2 second load times guaranteed with advanced optimization techniques and global CDN infrastructure deployment."
  },
  {
    icon: Globe,
    color: "cyan",
    title: "Global Scalability",
    description: "Enterprise-grade infrastructure supporting millions of users with 99.99% uptime SLA and international compliance standards."
  }
];

const colorClasses = {
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
    glow: "group-hover:shadow-blue-500/25"
  },
  yellow: {
    bg: "bg-yellow-500/10",
    text: "text-yellow-400",
    border: "border-yellow-500/20",
    glow: "group-hover:shadow-yellow-500/25"
  },
  green: {
    bg: "bg-green-500/10",
    text: "text-green-400",
    border: "border-green-500/20",
    glow: "group-hover:shadow-green-500/25"
  },
  indigo: {
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    border: "border-indigo-500/20",
    glow: "group-hover:shadow-indigo-500/25"
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/20",
    glow: "group-hover:shadow-purple-500/25"
  },
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    border: "border-cyan-500/20",
    glow: "group-hover:shadow-cyan-500/25"
  }
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm font-medium text-blue-400 mb-6"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Why Choose WebySoft</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Enterprise-Grade{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Trusted by Fortune 500 companies and growing startups alike. Our certified professionals deliver measurable results through proven methodologies and cutting-edge technology.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/30 transition-all duration-300 shadow-lg hover:shadow-xl ${colors.glow}`}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl ${colors.bg} ${colors.border} border mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${colors.text}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gray-100 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${colors.bg} ${colors.border} border`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl p-8">
            <p className="text-gray-400 mb-6">Trusted by industry leaders worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-gray-500">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">99.99%</div>
                <div className="text-sm text-gray-500">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">250%</div>
                <div className="text-sm text-gray-500">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-500">Expert Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
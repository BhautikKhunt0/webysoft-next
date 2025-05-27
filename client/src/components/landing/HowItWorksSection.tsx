import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Users, Target, Rocket, Shield } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Strategic Consultation",
    description: "Our certified experts conduct comprehensive analysis of your business objectives, technical requirements, and compliance needs to develop a tailored roadmap.",
    icon: Users,
    color: "blue",
    features: ["Business Analysis", "Technical Assessment", "Compliance Review", "Risk Evaluation"]
  },
  {
    number: "02",
    title: "Enterprise Planning",
    description: "We design scalable architecture with security-first approach, ensuring your solution meets enterprise standards and regulatory compliance from day one.",
    icon: Target,
    color: "indigo",
    features: ["Architecture Design", "Security Planning", "Scalability Mapping", "Integration Strategy"]
  },
  {
    number: "03",
    title: "Development & Testing",
    description: "Our ISO-certified development process includes rigorous testing, quality assurance, and security audits to deliver enterprise-grade solutions.",
    icon: Shield,
    color: "purple",
    features: ["Agile Development", "Security Testing", "Quality Assurance", "Performance Optimization"]
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "Seamless deployment with 24/7 monitoring, dedicated support team, and ongoing optimization to ensure continued success and growth.",
    icon: Rocket,
    color: "green",
    features: ["Deployment", "24/7 Monitoring", "Ongoing Support", "Performance Analytics"]
  }
];

const colorClasses = {
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
    gradient: "from-blue-400 to-blue-600"
  },
  indigo: {
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    border: "border-indigo-500/20",
    gradient: "from-indigo-400 to-indigo-600"
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/20",
    gradient: "from-purple-400 to-purple-600"
  },
  green: {
    bg: "bg-green-500/10",
    text: "text-green-400",
    border: "border-green-500/20",
    gradient: "from-green-400 to-green-600"
  }
};

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm font-medium text-blue-400 mb-6"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Our Proven Process</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Enterprise{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Development Process
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our ISO-certified methodology ensures consistent delivery of enterprise-grade solutions with guaranteed security, scalability, and compliance standards.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => {
            const colors = colorClasses[step.color as keyof typeof colorClasses];
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
              >
                {/* Content */}
                <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-2'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`text-6xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent opacity-50`}>
                      {step.number}
                    </div>
                    <div className={`p-3 rounded-xl ${colors.bg} ${colors.border} border`}>
                      <step.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className={`w-4 h-4 ${colors.text}`} />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`relative ${isEven ? '' : 'lg:col-start-1'}`}>
                  <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                    <div className="space-y-6">
                      {/* Process Visualization */}
                      <div className={`h-64 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center relative overflow-hidden`}>
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="grid grid-cols-4 h-full">
                            {[...Array(16)].map((_, i) => (
                              <div key={i} className={`border-r border-b ${colors.border}`} />
                            ))}
                          </div>
                        </div>

                        {/* Central Icon */}
                        <div className={`relative z-10 p-6 rounded-full ${colors.bg} ${colors.border} border`}>
                          <step.icon className={`w-16 h-16 ${colors.text}`} />
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className={`absolute top-4 right-4 w-3 h-3 rounded-full ${colors.text.replace('text-', 'bg-')}`}
                        />
                        <motion.div
                          animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                          className={`absolute bottom-4 left-4 w-2 h-2 rounded-full ${colors.text.replace('text-', 'bg-')}`}
                        />
                      </div>

                      {/* Progress Indicator */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Progress</span>
                        <div className="flex-1 mx-4 bg-slate-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${((index + 1) / steps.length) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                        <span className="text-sm text-gray-400">{Math.round(((index + 1) / steps.length) * 100)}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Connector */}
                {index < steps.length - 1 && (
                  <div className="lg:col-span-2 flex justify-center py-6">
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="p-3 bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-full"
                    >
                      <ArrowRight className="w-6 h-6 text-blue-400 transform rotate-90" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Enterprise Journey?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Schedule a consultation with our certified experts to discuss your project requirements and receive a customized enterprise solution proposal.
            </p>
            <motion.button
              onClick={() => window.open("https://wa.me/918849990393", "_blank")}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
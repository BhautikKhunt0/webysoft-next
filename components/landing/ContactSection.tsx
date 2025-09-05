import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  Award,
  CheckCircle,
} from "lucide-react";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

const contactInfo = [
  {
    icon: Phone,
    title: "24/7 Enterprise Support",
    details: "+91 000000000",
    description: "Immediate response for enterprise clients",
    color: "blue",
  },
  {
    icon: Mail,
    title: "Business Inquiries",
    details: "enterprise@webysoft.com",
    description: "Professional consultation requests",
    color: "indigo",
  },
  {
    icon: MapPin,
    title: "Global Headquarters",
    details: "Surat & Mumbai, India",
    description: "Serving clients worldwide",
    color: "purple",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "24/7 Available",
    description: "Round-the-clock enterprise support",
    color: "green",
  },
];

const colorClasses = {
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
  },
  indigo: {
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    border: "border-indigo-500/20",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/20",
  },
  green: {
    bg: "bg-green-500/10",
    text: "text-green-400",
    border: "border-green-500/20",
  },
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
            <Shield className="w-4 h-4" />
            <span>Enterprise Contact</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Get Started?
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Connect with our experts for a personalized consultation. We'll
            assess your needs and provide a customized enterprise solution
            proposal.
          </motion.p>
        </div>

        {/* Contact Information - Centered Layout */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Multiple Ways to Connect
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Our enterprise team is available 24/7 to discuss your project
              requirements, provide technical consultation, and deliver
              customized solutions that meet your business objectives.
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const colors =
                colorClasses[info.color as keyof typeof colorClasses];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-6 hover:bg-slate-700/30 transition-all duration-300 group text-center"
                >
                  <div
                    className={`inline-flex p-4 rounded-xl ${colors.bg} ${colors.border} border mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className={`w-8 h-8 ${colors.text}`} />
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-2">
                    {info.title}
                  </h4>
                  <p className="text-gray-300 font-medium mb-2">
                    {info.details}
                  </p>
                  <p className="text-sm text-gray-400">{info.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center items-center mb-12"
          >
            <motion.button
              onClick={() => window.open("https://wa.me/910000000", "_blank")}
              className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaWhatsapp className="w-5 h-5" />
              Start WhatsApp Chat
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl p-8 text-center"
          >
            <h4 className="text-2xl font-bold text-white mb-6">
              Why Choose WebySoft?
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center gap-2">
                <Award className="w-8 h-8 text-yellow-400" />
                <span className="text-sm text-gray-300 font-medium">
                  Award Winning
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle className="w-8 h-8 text-blue-400" />
                <span className="text-sm text-gray-300 font-medium">
                  500+ Projects
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="w-8 h-8 text-purple-400" />
                <span className="text-sm text-gray-300 font-medium">
                  24/7 Support
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="w-8 h-8 text-green-400" />
                <span className="text-sm text-gray-300 font-medium">
                  Enterprise Security
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

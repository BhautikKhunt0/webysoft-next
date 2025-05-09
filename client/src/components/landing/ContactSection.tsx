import { useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FiMap, FiMail, FiClock, FiGlobe, FiNavigation2 } from "react-icons/fi";
import {
  BiSolidTimeFive,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoFacebook,
  BiSolidQuoteLeft,
  BiSolidQuoteRight,
} from "react-icons/bi";

// Array of contact methods with animations
const contactMethods = [
  {
    id: 1,
    title: "Email",
    description: "For general inquiries and project discussions",
    info: (
      <div className="flex flex-col">
        <span
          className="cursor-pointer hover:underline"
          onClick={() => (window.location.href = "mailto:info@webysoft.com")}
        >
          info@webysoft.com
        </span>
        <span
          className="cursor-pointer hover:underline"
          onClick={() => (window.location.href = "mailto:support@webysoft.com")}
        >
          support@webysoft.com
        </span>
      </div>
    ),
    icon: <FiMail className="text-3xl" />,
    color: "primary",
    delay: 0,
    href: "#",
  },
  {
    id: 2,
    title: "Chat",
    description: "Connect with our team via live chat",
    info: "Available 24/7 for your questions",
    icon: <BiSolidQuoteLeft className="text-3xl" />,
    color: "accent",
    delay: 0.1,
    href: "#",
  },
  {
    id: 3,
    title: "Visit",
    description: "Drop by our office during business hours",
    info: "301-303 Silver Business Hub, Surat, India",
    icon: <FiMap className="text-3xl" />,
    color: "cyan",
    delay: 0.2,
    href: "https://maps.google.com/?q=Silver+Business+Hub+Surat",
  },
  {
    id: 4,
    title: "Schedule",
    description: "Book a free 30-minute consultation",
    info: "Available Mon-Fri (9AM - 6PM)",
    icon: <FiClock className="text-3xl" />,
    color: "green",
    delay: 0.3,
    href: "#",
  },
];

// Social media links
const socialLinks = [
  { id: 1, icon: <BiLogoLinkedin />, href: "#", name: "LinkedIn", delay: 0 },
  { id: 2, icon: <BiLogoTwitter />, href: "#", name: "Twitter", delay: 0.1 },
  {
    id: 3,
    icon: <BiLogoInstagram />,
    href: "#",
    name: "Instagram",
    delay: 0.2,
  },
  { id: 4, icon: <BiLogoFacebook />, href: "#", name: "Facebook", delay: 0.3 },
];

// Office locations across India
const officeLocations = [
  {
    id: 1,
    city: "Surat",
    country: "India",
    address: "301-303 Silver Business Hub, Surat, Gujarat, 395010",
    delay: 0,
    hours: "Monday-Friday: 9:00 AM - 6:00 PM",
    weekends: "Saturday-Sunday: 10:00 AM - 4:00 PM",
  },
  {
    id: 2,
    city: "Mumbai",
    country: "India",
    address: "WeWork, Bandra Kurla Complex, Mumbai, Maharashtra, 400051",
    delay: 0.1,
    hours: "Monday-Friday: 9:00 AM - 6:00 PM",
    weekends: "Saturday: 10:00 AM - 2:00 PM (Closed on Sunday)",
  },
  {
    id: 3,
    city: "Delhi",
    country: "India",
    address: "Connaught Place, New Delhi, Delhi NCR, 110001",
    delay: 0.2,
    hours: "Monday-Friday: 9:00 AM - 6:00 PM",
    weekends: "Saturday: 10:00 AM - 2:00 PM (Closed on Sunday)",
  },
  {
    id: 4,
    city: "Bangalore",
    country: "India",
    address: "Koramangala, Bangalore, Karnataka, 560034",
    delay: 0.3,
    hours: "Monday-Friday: 9:00 AM - 6:00 PM",
    weekends: "Saturday: 10:00 AM - 2:00 PM (Closed on Sunday)",
  },
  {
    id: 5,
    city: "Chennai",
    country: "India",
    address: "Anna Nagar, Chennai, Tamil Nadu, 600040",
    delay: 0.4,
    hours: "Monday-Friday: 9:00 AM - 6:00 PM",
    weekends: "Saturday: 10:00 AM - 2:00 PM (Closed on Sunday)",
  },
];

// Quote slider data
const testimonialQuotes = [
  {
    id: 1,
    quote:
      "The WebySoft team was incredibly responsive to our needs. They made the whole process effortless.",
    author: "Sarah Johnson",
    company: "TechStart Inc.",
  },
  {
    id: 2,
    quote:
      "WebySoft transformed our outdated website into a modern masterpiece. Couldn't be happier!",
    author: "Michael Chen",
    company: "Innovate Solutions",
  },
  {
    id: 3,
    quote:
      "Their attention to detail and technical expertise is unmatched. Absolutely recommended!",
    author: "Priya Sharma",
    company: "Global Ventures",
  },
];

export default function ContactSection() {
  const [activeQuote, setActiveQuote] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState(0);
  const { toast } = useToast();

  // Function to handle quote rotation
  const rotateQuotes = () => {
    setActiveQuote((prev) => (prev + 1) % testimonialQuotes.length);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const mapLocationVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        type: "spring",
        stiffness: 200,
      },
    }),
  };

  // For color classes based on the contact method
  const colorClasses = {
    primary: "bg-primary/10 text-primary border-primary/30",
    accent: "bg-accent/10 text-accent border-accent/30",
    cyan: "bg-cyan-500/10 text-cyan-500 border-cyan-500/30",
    green: "bg-green-500/10 text-green-500 border-green-500/30",
  };

  // Copy email to clipboard
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: `${type} copied to clipboard!`,
        description: `${text} is now in your clipboard.`,
      });
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-secondary/30 -z-10"></div>

      {/* Animated Orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-60 -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-display font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Get In <span className="text-primary text-glow">Touch</span>
        </motion.h2>

        <motion.p
          className="text-xl text-foreground/70 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ready to transform your online presence? Connect with us through any
          of these channels.
        </motion.p>

        {/* Contact Methods Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {contactMethods.map((method) => (
            <motion.div
              key={method.id}
              className="group"
              variants={itemVariants}
              transition={{ delay: method.delay }}
              onClick={() =>
                method.href !== "#" && window.open(method.href, "_blank")
              }
            >
              <GlassCard className="h-full p-6 border transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                    colorClasses[method.color as keyof typeof colorClasses]
                  }`}
                >
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {method.title}
                </h3>
                <p className="text-foreground/60 mb-3 text-sm">
                  {method.description}
                </p>
                <div className="text-base font-medium flex items-center space-x-1 group-hover:text-primary transition-colors">
                  <span>{method.info}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Map Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-0 overflow-hidden" borderGlow="primary">
            <div className="bg-primary/30 p-4 flex items-center justify-between backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <FiGlobe className="text-xl text-white" />
                </div>
                <h3 className="font-semibold text-lg">Our Locations</h3>
              </div>
              <div className="flex space-x-2">
                {officeLocations.map((location, index) => (
                  <Button
                    key={location.id}
                    variant={selectedLocation === index ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLocation(index)}
                    className={`text-sm ${
                      selectedLocation === index
                        ? "bg-primary"
                        : "hover:bg-primary/10"
                    }`}
                  >
                    {location.city}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-5">
              {/* Map Visualization */}
              <div className="col-span-3 relative bg-secondary/10 min-h-[300px] p-4">
                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/72.8777,19.0760,10,0/600x300?access_token=placeholder')] bg-cover bg-center opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>

                {/* Location Markers */}
                <div className="relative h-full w-full">
                  <motion.div
                    className="absolute top-1/3 left-1/4"
                    custom={0}
                    variants={mapLocationVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`w-6 h-6 rounded-full bg-primary flex items-center justify-center cursor-pointer relative ${
                        selectedLocation === 0 ? "ring-4 ring-primary/30" : ""
                      }`}
                      onClick={() => setSelectedLocation(0)}
                      whileHover={{ scale: 1.2 }}
                    >
                      <FiNavigation2 className="text-white text-xs" />
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-primary/90 text-white px-2 py-1 text-xs rounded whitespace-nowrap">
                        Surat, India
                      </span>
                      <div className="absolute inset-0 rounded-full bg-primary/30" />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 right-1/3"
                    custom={1}
                    variants={mapLocationVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`w-6 h-6 rounded-full bg-accent flex items-center justify-center cursor-pointer relative ${
                        selectedLocation === 1 ? "ring-4 ring-accent/30" : ""
                      }`}
                      onClick={() => setSelectedLocation(1)}
                      whileHover={{ scale: 1.2 }}
                    >
                      <FiNavigation2 className="text-white text-xs" />
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-accent/90 text-white px-2 py-1 text-xs rounded whitespace-nowrap">
                        Mumbai, India
                      </span>
                      <div className="absolute inset-0 rounded-full bg-accent/30" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Location Details */}
              <div className="col-span-2 p-6 border-l border-white/10">
                <motion.div
                  key={officeLocations[selectedLocation].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-2">
                    {officeLocations[selectedLocation].city},{" "}
                    {officeLocations[selectedLocation].country}
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    {officeLocations[selectedLocation].address}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-3 mt-1 flex-shrink-0">
                        <BiSolidTimeFive className="text-xl" />
                      </div>
                      <div>
                        <h4 className="text-base font-medium mb-1">
                          Working Hours
                        </h4>
                        <p className="text-sm text-foreground/70">
                          {officeLocations[selectedLocation].hours}
                          <br />
                          {officeLocations[selectedLocation].weekends}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 mr-3 mt-1 flex-shrink-0">
                        <FiMail className="text-xl" />
                      </div>
                      <div>
                        <h4 className="text-base font-medium mb-1">Email</h4>
                        <div className="flex flex-col space-y-1">
                          <button
                            className="text-sm text-foreground/70 hover:text-green-500 transition-colors flex items-center"
                            onClick={() =>
                              copyToClipboard("info@webysoft.com", "Email")
                            }
                          >
                            <span className="text-primary/70 mr-2 text-xs">
                              General:
                            </span>{" "}
                            info@webysoft.com
                          </button>
                          <button
                            className="text-sm text-foreground/70 hover:text-green-500 transition-colors flex items-center"
                            onClick={() =>
                              copyToClipboard("support@webysoft.com", "Email")
                            }
                          >
                            <span className="text-primary/70 mr-2 text-xs">
                              Support:
                            </span>{" "}
                            support@webysoft.com
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Testimonial Quote Carousel */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-8 text-center relative max-w-3xl mx-auto">
            <div className="absolute top-4 left-4 text-3xl text-primary/30">
              <BiSolidQuoteLeft />
            </div>
            <div className="absolute bottom-4 right-4 text-3xl text-primary/30">
              <BiSolidQuoteRight />
            </div>

            <div className="h-[120px] flex items-center justify-center">
              <motion.div
                key={testimonialQuotes[activeQuote].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl italic px-8"
              >
                "{testimonialQuotes[activeQuote].quote}"
              </motion.div>
            </div>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="font-bold text-lg text-primary">
                {testimonialQuotes[activeQuote].author}
              </div>
              <div className="text-foreground/70 text-sm">
                {testimonialQuotes[activeQuote].company}
              </div>
            </motion.div>

            <div className="mt-6 flex justify-center space-x-2">
              {testimonialQuotes.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeQuote ? "bg-primary" : "bg-foreground/20"
                  }`}
                  onClick={() => setActiveQuote(index)}
                />
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="flex justify-center items-center space-x-4 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.id}
              href={social.href}
              className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-foreground/70 hover:bg-primary/20 hover:text-primary transition-colors duration-300 hover:scale-110"
              variants={itemVariants}
              transition={{ delay: social.delay }}
              whileHover={{ y: -4, scale: 1.1 }}
            >
              <span className="text-2xl">{social.icon}</span>
              <span className="sr-only">{social.name}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-foreground/70 mb-6">
            Prefer direct contact? Send us an email at{" "}
            <span className="font-semibold">info@webysoft.com</span> or{" "}
            <span className="font-semibold">support@webysoft.com</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8"
              onClick={() =>
                (window.location.href = "mailto:info@webysoft.com")
              }
            >
              General Inquiries
            </Button>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-lg px-8 border border-primary/30"
              onClick={() =>
                (window.location.href = "mailto:support@webysoft.com")
              }
            >
              Technical Support
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

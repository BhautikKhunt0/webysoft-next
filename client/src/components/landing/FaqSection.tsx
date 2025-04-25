import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "./GlassCard";

const faqs = [
  {
    question: "How long does it take to build a landing page?",
    answer:
      "Most landing pages are completed within 7-10 business days from the time we receive your content and approval on the initial design concept. Rush options are available for time-sensitive projects.",
  },
  {
    question: "Do I need to provide the content?",
    answer:
      "Yes, you'll need to provide the core content, but we can help with copywriting suggestions and optimizations to make your message more compelling. We also provide guidance on what images and assets will work best.",
  },
  {
    question: "What happens after my landing page is live?",
    answer:
      "We provide 30 days of technical support after launch to ensure everything is working perfectly. Your subscription includes ongoing hosting, maintenance, and minor updates. For major redesigns or new pages, additional charges may apply.",
  },
  {
    question: "Is there a limit to how many revisions I can request?",
    answer:
      "We offer up to 5 revisions during the design and development phase to ensure you're completely satisfied with the final result. We want your landing page to be perfect before it goes live.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-display font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked{" "}
          <span className="text-primary text-glow">Questions</span>
        </motion.h2>

        <motion.p
          className="text-xl text-foreground/70 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Everything you need to know about our landing page service.
        </motion.p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard
              key={index}
              animate={false}
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "shadow-lg shadow-primary/10 border-primary/20"
                  : "hover:border-primary/10 hover:shadow-sm"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <button
                  className="w-full text-left p-6 focus:outline-none flex items-center justify-between group hover:bg-primary/5 transition-colors duration-200"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-bold text-lg group-hover:text-primary transition-colors duration-200">
                    {faq.question}
                  </span>
                  <motion.div
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      openIndex === index ? "bg-primary/20" : "bg-primary/10"
                    } text-primary`}
                  >
                    <motion.i
                      className="ri-arrow-down-s-line text-xl"
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 200,
                      }}
                    ></motion.i>
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      className="px-6 pb-6 overflow-hidden"
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        marginTop: 4,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        marginTop: 0,
                        transition: {
                          height: { duration: 0.25, ease: "easeInOut" },
                          opacity: { duration: 0.2, ease: "easeOut" },
                        },
                      }}
                      transition={{
                        height: { duration: 0.35, ease: "easeOut" },
                        opacity: { duration: 0.35, ease: "easeIn" },
                      }}
                    >
                      <div className="py-2">
                        <p className="text-foreground/70">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

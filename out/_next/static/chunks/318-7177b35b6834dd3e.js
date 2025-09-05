"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [318],
  {
    4741: (e, t, i) => {
      i.d(t, { DI: () => s, LN: () => a });
      let a = [
        {
          id: "service-1",
          title: "HR Consultancy",
          description:
            "Modern service website for an HR consultancy with interactive service offerings and client resources.",
          type: "Service",
          imageUrl: "/assets/hr_website.png",
          previewLink: "https://dxjt0ezclqf15.cloudfront.net/",
          technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
          category: "Creative",
          featured: !0,
        },
        {
          id: "legal-1",
          title: "Accountant Firm",
          description:
            "Professional accounting services website with client portal, expert profiles, and financial resources.",
          type: "Legal",
          imageUrl: "/assets/accountant_firm.png",
          previewLink: "https://d3j2bskdzfrr6y.cloudfront.net/",
          technologies: ["React", "Express", "PostgreSQL", "Tailwind CSS"],
          category: "Legal",
          featured: !0,
        },
        {
          id: "academy-1",
          title: "Boxing Academy",
          description:
            "Interactive fitness platform with class scheduling, progress tracking, and membership management.",
          type: "Academy",
          imageUrl: "/assets/boxing.png",
          previewLink: "https://db24377y2z47t.cloudfront.net/",
          technologies: ["React", "TypeScript", "Firebase", "Express"],
          category: "Education",
          featured: !1,
        },
        {
          id: "service-2",
          title: "Car Repair Service",
          description:
            "Auto repair service website with appointment booking, service catalog, and maintenance tips.",
          type: "Service",
          imageUrl: "/assets/car_repairing.png",
          previewLink: "https://dgsot2zg648uu.cloudfront.net/",
          technologies: ["React", "Node.js", "MongoDB", "Stripe"],
          category: "Automotive",
          featured: !1,
        },
      ];
      function s() {
        return ["Service", "Legal", "Local Shop", "Academy"];
      }
    },
    6505: (e, t, i) => {
      i.d(t, { A: () => u });
      var a = i(5155),
        s = i(2115),
        l = i(6874),
        r = i.n(l),
        o = i(5695),
        n = i(9893),
        c = i(760),
        d = i(5525),
        h = i(4416),
        x = i(4783);
      let m = [
        { id: "features", label: "Solutions" },
        { id: "how-it-works", label: "Process" },
        { id: "pricing", label: "Pricing" },
        { path: "/portfolio", label: "Portfolio", isPageLink: !0 },
        { id: "testimonials", label: "Testimonials" },
        { id: "contact", label: "Contact" },
      ];
      function u() {
        let [e, t] = (0, s.useState)(!1),
          i = (function () {
            let [e, t] = (0, s.useState)(0);
            return (
              (0, s.useEffect)(() => {
                let e = () => {
                  t(window.scrollY);
                };
                return (
                  window.addEventListener("scroll", e, { passive: !0 }),
                  e(),
                  () => {
                    window.removeEventListener("scroll", e);
                  }
                );
              }, []),
              e
            );
          })(),
          l = (function () {
            let [e, t] = s.useState(void 0);
            return (
              s.useEffect(() => {
                let e = () => {
                  window.innerWidth < 768
                    ? t("mobile")
                    : window.innerWidth < 1024
                    ? t("tablet")
                    : t("desktop");
                };
                return (
                  window.addEventListener("resize", e),
                  e(),
                  () => window.removeEventListener("resize", e)
                );
              }, []),
              e
            );
          })(),
          u = (0, o.usePathname)(),
          p = "mobile" === l || "tablet" === l,
          b = "/portfolio" === u,
          g = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          },
          w = (e) => {
            t(!1),
              setTimeout(() => {
                if (b) window.location.href = "/#".concat(e);
                else {
                  let t = document.getElementById(e);
                  t && t.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }, 100);
          };
        return (
          (0, s.useEffect)(() => {
            t(!1);
          }, [u]),
          (0, s.useEffect)(() => {
            let e = () => {
              window.innerWidth >= 1024 && t(!1);
            };
            return (
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          (0, a.jsx)(n.P.nav, {
            className:
              "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ".concat(
                i > 50
                  ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-xl"
                  : "bg-transparent"
              ),
            initial: { y: -100 },
            animate: { y: 0 },
            transition: { duration: 0.6 },
            children: (0, a.jsxs)("div", {
              className: "container mx-auto px-4",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center justify-between h-16 lg:h-20",
                  children: [
                    (0, a.jsx)(n.P.button, {
                      onClick: () => {
                        b
                          ? (window.location.href =
                              window.location.origin + "/")
                          : g();
                      },
                      className:
                        "flex items-center gap-3 text-white font-bold text-xl lg:text-2xl cursor-pointer group",
                      whileHover: { scale: 1.05 },
                      transition: { duration: 0.2 },
                      children: (0, a.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors",
                            children: (0, a.jsx)(d.A, {
                              className: "w-5 h-5 text-blue-400",
                            }),
                          }),
                          (0, a.jsxs)("span", {
                            className:
                              "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",
                            children: [
                              "Weby",
                              (0, a.jsx)("span", {
                                className: "text-blue-400",
                                children: "Soft",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    !p &&
                      (0, a.jsx)("div", {
                        className: "hidden lg:flex items-center space-x-8",
                        children: m.map((e, t) =>
                          e.isPageLink
                            ? (0, a.jsx)(
                                r(),
                                {
                                  href: e.path,
                                  children: (0, a.jsxs)(n.P.span, {
                                    className:
                                      "text-gray-300 hover:text-white font-medium transition-colors duration-200 cursor-pointer relative group",
                                    whileHover: { y: -2 },
                                    transition: { duration: 0.2 },
                                    children: [
                                      e.label,
                                      (0, a.jsx)("span", {
                                        className:
                                          "absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300",
                                      }),
                                    ],
                                  }),
                                },
                                e.path
                              )
                            : (0, a.jsxs)(
                                n.P.button,
                                {
                                  onClick: () => e.id && w(e.id),
                                  className:
                                    "text-gray-300 hover:text-white font-medium transition-colors duration-200 cursor-pointer relative group",
                                  whileHover: { y: -2 },
                                  transition: { duration: 0.2 },
                                  children: [
                                    e.label,
                                    (0, a.jsx)("span", {
                                      className:
                                        "absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300",
                                    }),
                                  ],
                                },
                                e.id
                              )
                        ),
                      }),
                    !p &&
                      (0, a.jsx)(n.P.button, {
                        onClick: () =>
                          window.open("https://wa.me/000", "_blank"),
                        className:
                          "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        children: "Get Started",
                      }),
                    p &&
                      (0, a.jsx)(n.P.button, {
                        onClick: () => t(!e),
                        className:
                          "p-2 bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg text-gray-300 hover:text-white transition-colors",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        children: e
                          ? (0, a.jsx)(h.A, { className: "w-6 h-6" })
                          : (0, a.jsx)(x.A, { className: "w-6 h-6" }),
                      }),
                  ],
                }),
                (0, a.jsx)(c.N, {
                  children:
                    e &&
                    p &&
                    (0, a.jsx)(n.P.div, {
                      initial: { opacity: 0, height: 0 },
                      animate: { opacity: 1, height: "auto" },
                      exit: { opacity: 0, height: 0 },
                      transition: { duration: 0.3 },
                      className:
                        "overflow-hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50",
                      children: (0, a.jsxs)("div", {
                        className: "py-6 px-4 space-y-2",
                        children: [
                          m.map((e, i) =>
                            e.isPageLink
                              ? (0, a.jsx)(
                                  r(),
                                  {
                                    href: e.path,
                                    children: (0, a.jsx)(n.P.div, {
                                      initial: { opacity: 0, x: -20 },
                                      animate: { opacity: 1, x: 0 },
                                      transition: { delay: 0.1 * i },
                                      className:
                                        "block px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg font-medium transition-all duration-200 cursor-pointer",
                                      onClick: () => t(!1),
                                      children: e.label,
                                    }),
                                  },
                                  e.path
                                )
                              : (0, a.jsx)(
                                  n.P.div,
                                  {
                                    initial: { opacity: 0, x: -20 },
                                    animate: { opacity: 1, x: 0 },
                                    transition: { delay: 0.1 * i },
                                    onClick: () => {
                                      e.id && w(e.id);
                                    },
                                    className:
                                      "block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg font-medium transition-all duration-200 cursor-pointer",
                                    children: e.label,
                                  },
                                  e.id
                                )
                          ),
                          (0, a.jsx)(n.P.button, {
                            initial: { opacity: 0, x: -20 },
                            animate: { opacity: 1, x: 0 },
                            transition: { delay: 0.1 * m.length },
                            onClick: () => {
                              t(!1), window.open("https://wa.me/000", "_blank");
                            },
                            className:
                              "w-full mx-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700",
                            children: "Get Started",
                          }),
                        ],
                      }),
                    }),
                }),
              ],
            }),
          })
        );
      }
    },
    7718: (e, t, i) => {
      i.d(t, { A: () => u });
      var a = i(5155),
        s = i(9893),
        l = i(6874),
        r = i.n(l),
        o = i(5695),
        n = i(5525),
        c = i(9420),
        d = i(8883),
        h = i(4516),
        x = i(4869),
        m = i(9911);
      function u() {
        let e = "/portfolio" === (0, o.usePathname)(),
          t = (t, i) => {
            if ((t.preventDefault(), e)) window.location.href = "/#".concat(i);
            else {
              let e = document.getElementById(i);
              e && e.scrollIntoView({ behavior: "smooth" });
            }
          };
        return (0, a.jsxs)("footer", {
          className: "relative py-20 overflow-hidden",
          children: [
            (0, a.jsx)("div", {
              className:
                "absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
            }),
            (0, a.jsx)("div", {
              className:
                "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)]",
            }),
            (0, a.jsx)("div", {
              className:
                "absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl",
            }),
            (0, a.jsx)("div", {
              className:
                "absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl",
            }),
            (0, a.jsxs)("div", {
              className: "container mx-auto px-4 relative z-10",
              children: [
                (0, a.jsxs)("div", {
                  className: "grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16",
                  children: [
                    (0, a.jsxs)(s.P.div, {
                      initial: { opacity: 0, y: 30 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      transition: { duration: 0.6 },
                      className: "lg:col-span-1",
                      children: [
                        (0, a.jsxs)(s.P.button, {
                          onClick: () => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          },
                          className:
                            "flex items-center gap-3 text-white font-bold text-2xl mb-6 cursor-pointer group",
                          whileHover: { scale: 1.05 },
                          transition: { duration: 0.2 },
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors",
                              children: (0, a.jsx)(n.A, {
                                className: "w-6 h-6 text-blue-400",
                              }),
                            }),
                            (0, a.jsxs)("span", {
                              className:
                                "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",
                              children: [
                                "Weby",
                                (0, a.jsx)("span", {
                                  className: "text-blue-400",
                                  children: "Soft",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "text-gray-300 leading-relaxed mb-6 max-w-sm",
                          children:
                            "Transform your digital presence with enterprise-grade solutions. We deliver innovative web experiences that drive business growth.",
                        }),
                        (0, a.jsxs)("div", {
                          className: "space-y-3",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "flex items-center gap-3 text-gray-300",
                              children: [
                                (0, a.jsx)(c.A, {
                                  className: "w-4 h-4 text-blue-400",
                                }),
                                (0, a.jsx)("span", {
                                  className: "text-sm",
                                  children: "+91 0000",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "flex items-center gap-3 text-gray-300",
                              children: [
                                (0, a.jsx)(d.A, {
                                  className: "w-4 h-4 text-blue-400",
                                }),
                                (0, a.jsx)("span", {
                                  className: "text-sm",
                                  children: "enterprise@webysoft.com",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "flex items-center gap-3 text-gray-300",
                              children: [
                                (0, a.jsx)(h.A, {
                                  className: "w-4 h-4 text-blue-400",
                                }),
                                (0, a.jsx)("span", {
                                  className: "text-sm",
                                  children: "Surat & Mumbai, India",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)(s.P.div, {
                      initial: { opacity: 0, y: 30 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      transition: { duration: 0.6, delay: 0.1 },
                      children: [
                        (0, a.jsx)("h3", {
                          className: "text-xl font-bold text-white mb-6",
                          children: "Services",
                        }),
                        (0, a.jsx)("ul", {
                          className: "space-y-3",
                          children: [
                            { label: "Web Development", href: "#features" },
                            { label: "Mobile Apps", href: "#features" },
                            { label: "E-commerce", href: "#features" },
                            { label: "Digital Marketing", href: "#features" },
                            { label: "SEO Optimization", href: "#features" },
                            { label: "Cloud Solutions", href: "#features" },
                          ].map((e, i) =>
                            (0, a.jsx)(
                              "li",
                              {
                                children: (0, a.jsx)("a", {
                                  href: e.href,
                                  onClick: (e) => t(e, "features"),
                                  className:
                                    "text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block",
                                  children: e.label,
                                }),
                              },
                              i
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, a.jsxs)(s.P.div, {
                      initial: { opacity: 0, y: 30 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      transition: { duration: 0.6, delay: 0.2 },
                      children: [
                        (0, a.jsx)("h3", {
                          className: "text-xl font-bold text-white mb-6",
                          children: "Company",
                        }),
                        (0, a.jsx)("ul", {
                          className: "space-y-3",
                          children: [
                            { label: "About Us", href: "#about" },
                            {
                              label: "Portfolio",
                              href: "/portfolio",
                              isLink: !0,
                            },
                            { label: "Testimonials", href: "#testimonials" },
                            { label: "How it Works", href: "#how-it-works" },
                            { label: "Pricing", href: "#pricing" },
                            { label: "Contact", href: "#contact" },
                          ].map((e, i) =>
                            (0, a.jsx)(
                              "li",
                              {
                                children: e.isLink
                                  ? (0, a.jsx)(r(), {
                                      href: e.href,
                                      className:
                                        "text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block",
                                      children: e.label,
                                    })
                                  : (0, a.jsx)("a", {
                                      href: e.href,
                                      onClick: (i) => t(i, e.href.slice(1)),
                                      className:
                                        "text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block",
                                      children: e.label,
                                    }),
                              },
                              i
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, a.jsxs)(s.P.div, {
                      initial: { opacity: 0, y: 30 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      transition: { duration: 0.6, delay: 0.3 },
                      children: [
                        (0, a.jsx)("h3", {
                          className: "text-xl font-bold text-white mb-6",
                          children: "Resources",
                        }),
                        (0, a.jsx)("ul", {
                          className: "space-y-3 mb-8",
                          children: [
                            {
                              label: "Privacy Policy",
                              href: "/privacy-policy",
                              isLink: !0,
                            },
                            {
                              label: "Terms of Service",
                              href: "/terms-of-service",
                              isLink: !0,
                            },
                          ].map((e, t) =>
                            (0, a.jsx)(
                              "li",
                              {
                                children: e.isLink
                                  ? (0, a.jsx)(r(), {
                                      href: e.href,
                                      className:
                                        "text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block",
                                      children: e.label,
                                    })
                                  : (0, a.jsx)("a", {
                                      href: e.href,
                                      className:
                                        "text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block",
                                      children: e.label,
                                    }),
                              },
                              t
                            )
                          ),
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("h4", {
                              className:
                                "text-lg font-semibold text-white mb-4",
                              children: "Get In Touch",
                            }),
                            (0, a.jsxs)(s.P.button, {
                              onClick: () =>
                                window.open("https://wa.me/000", "_blank"),
                              className:
                                "w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:shadow-green-500/25",
                              whileHover: { scale: 1.02 },
                              whileTap: { scale: 0.98 },
                              children: [
                                (0, a.jsx)(m.EcP, { className: "w-5 h-5" }),
                                "Start WhatsApp Chat",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(s.P.div, {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.6, delay: 0.4 },
                  className: "pt-8 border-t border-slate-700/50",
                  children: (0, a.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row justify-between items-center gap-6",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex flex-col md:flex-row items-center gap-6",
                        children: [
                          (0, a.jsx)("p", {
                            className: "text-gray-400 text-sm",
                            children:
                              "\xa9 2024 WebySoft. All rights reserved.",
                          }),
                          (0, a.jsx)("div", {
                            className: "flex items-center gap-6",
                            children: (0, a.jsxs)("div", {
                              className:
                                "flex items-center gap-2 text-sm text-gray-400",
                              children: [
                                (0, a.jsx)(x.A, {
                                  className: "w-4 h-4 text-blue-400",
                                }),
                                (0, a.jsx)("span", {
                                  children: "Proudly serving clients worldwide",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-6",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "flex items-center gap-2 text-sm text-gray-400",
                            children: [
                              (0, a.jsx)(n.A, {
                                className: "w-4 h-4 text-green-400",
                              }),
                              (0, a.jsx)("span", {
                                children: "Enterprise Security",
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "text-sm text-gray-400",
                            children: "Made with ❤️ in India",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, a.jsxs)(s.P.div, {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.6, delay: 0.5 },
                  className:
                    "mt-16 bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl p-8 text-center",
                  children: [
                    (0, a.jsx)("h3", {
                      className: "text-2xl font-bold text-white mb-4",
                      children: "Stay Updated",
                    }),
                    (0, a.jsx)("p", {
                      className: "text-gray-300 mb-6 max-w-2xl mx-auto",
                      children:
                        "Get the latest updates on our services, industry insights, and exclusive offers delivered to your inbox.",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-col sm:flex-row gap-4 max-w-md mx-auto",
                      children: [
                        (0, a.jsx)("input", {
                          type: "email",
                          placeholder: "Enter your email",
                          className:
                            "flex-1 bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                        }),
                        (0, a.jsx)(s.P.button, {
                          onClick: () =>
                            window.open("https://wa.me/000", "_blank"),
                          className:
                            "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap",
                          whileHover: { scale: 1.02 },
                          whileTap: { scale: 0.98 },
                          children: "Get Started",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);

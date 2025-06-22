'use client'

import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle, XCircle, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur border-b border-slate-700/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <div className="h-6 w-px bg-slate-600"></div>
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-blue-400" />
              <h1 className="text-2xl font-bold">Terms of Service</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-lg p-6 mb-8"
          >
            <p className="text-gray-300">
              <strong>Last Updated:</strong> December 22, 2024
            </p>
            <p className="text-gray-300 mt-2">
              These Terms of Service ("Terms") govern your use of WebySoft's website and services. By using our services, you agree to these terms.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-12">
            
            {/* Acceptance of Terms */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-800/20 backdrop-blur border border-slate-700/30 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>By accessing or using WebySoft's website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.</p>
                <p>If you do not agree with any part of these terms, you may not access or use our services.</p>
              </div>
            </motion.section>

            {/* Services Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/20 backdrop-blur border border-slate-700/30 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold">Our Services</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>WebySoft provides professional web development and digital solutions including:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Website design and development</li>
                  <li>• Mobile application development</li>
                  <li>• E-commerce solutions</li>
                  <li>• Digital marketing services</li>
                  <li>• SEO optimization</li>
                  <li>• Cloud solutions and hosting</li>
                  <li>• Maintenance and support services</li>
                </ul>
              </div>
            </motion.section>

            {/* User Responsibilities */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-800/20 backdrop-blur border border-slate-700/30 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold">User Responsibilities</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">You agree to:</h3>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li>• Provide accurate and complete information</li>
                    <li>• Use our services legally and ethically</li>
                    <li>• Respect intellectual property rights</li>
                    <li>• Pay fees on time as agreed</li>
                    <li>• Cooperate during project development</li>
                    <li>• Provide necessary content and materials</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-red-300 mb-3">You agree NOT to:</h3>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li>• Use our services for illegal activities</li>
                    <li>• Attempt to harm or disrupt our systems</li>
                    <li>• Share login credentials with others</li>
                    <li>• Reverse engineer our solutions</li>
                    <li>• Violate any applicable laws or regulations</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Payment Terms */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-800/20 backdrop-blur border border-slate-700/30 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold">Payment Terms</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <ul className="space-y-3">
                  <li>• Payment terms are specified in individual project agreements</li>
                  <li>• Invoices are typically due within 30 days of issuance</li>
                  <li>• Late payments may incur additional fees</li>
                  <li>• Refunds are handled according to our refund policy</li>
                  <li>• All prices are in Indian Rupees (INR) unless otherwise specified</li>
                  <li>• Additional work beyond agreed scope may incur extra charges</li>
                </ul>
              </div>
            </motion.section>

            {/* Intellectual Property */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-slate-800/20 backdrop-blur border border-slate-700/30 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold">Intellectual Property</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Client Ownership</h3>
                  <p>Upon full payment, clients receive ownership of custom-developed websites and applications, excluding any third-party components or our proprietary tools.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">WebySoft Rights</h3>
                  <p>We retain rights to our development methodologies, proprietary tools, and general knowledge gained during projects. We may showcase completed work in our portfolio unless otherwise agreed.</p>
                </div>
              </div>
            </motion.section>

            {/* Limitations and Disclaimers */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-slate-800/20 backdrop-blur border border-slate-700/30 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-orange-400" />
                <h2 className="text-2xl font-bold">Limitations and Disclaimers</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>Our services are provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.</p>
                <p>Our liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.</p>
                <p>We do not guarantee specific results, rankings, or business outcomes from our services.</p>
              </div>
            </motion.section>

            {/* Termination */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-slate-800/20 backdrop-blur border border-slate-700/30 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-6 h-6 text-red-400" />
                <h2 className="text-2xl font-bold">Termination</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>Either party may terminate services with written notice. Upon termination:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Outstanding invoices become immediately due</li>
                  <li>• Work completed to date will be delivered upon payment</li>
                  <li>• Confidential information must be returned or destroyed</li>
                  <li>• Ongoing obligations survive termination</li>
                </ul>
              </div>
            </motion.section>

            {/* Governing Law */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-slate-800/20 backdrop-blur border border-slate-700/30 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold">Governing Law</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>These Terms are governed by the laws of India. Any disputes will be resolved in the courts of Gujarat, India.</p>
              </div>
            </motion.section>

            {/* Contact Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur border border-blue-500/30 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <div className="space-y-4 text-gray-300">
                <p>If you have questions about these Terms of Service, please contact us:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> legal@webysoft.com</p>
                  <p><strong>Phone:</strong> +91 88499 90393</p>
                  <p><strong>Address:</strong> Surat & Mumbai, India</p>
                </div>
              </div>
            </motion.section>

            {/* Updates */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-lg p-6"
            >
              <h2 className="text-xl font-bold mb-4">Terms Updates</h2>
              <p className="text-gray-300">
                We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client'

import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
              <Shield className="w-6 h-6 text-blue-400" />
              <h1 className="text-2xl font-bold">Privacy Policy</h1>
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
              This Privacy Policy describes how WebySoft ("we," "our," or "us") collects, uses, and protects your information when you use our website and services.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-12">
            
            {/* Information We Collect */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-800/20 backdrop-blur border border-slate-700/30 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Name and contact information (email, phone number)</li>
                    <li>• Business information and project details</li>
                    <li>• Communication preferences</li>
                    <li>• Payment and billing information</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">Technical Information</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• IP address and device information</li>
                    <li>• Browser type and version</li>
                    <li>• Website usage data and analytics</li>
                    <li>• Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* How We Use Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/20 backdrop-blur border border-slate-700/30 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold">How We Use Your Information</h2>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li>• Provide and improve our web development services</li>
                <li>• Communicate with you about projects and inquiries</li>
                <li>• Send newsletters and marketing communications (with consent)</li>
                <li>• Process payments and manage billing</li>
                <li>• Analyze website performance and user experience</li>
                <li>• Comply with legal obligations and protect our rights</li>
              </ul>
            </motion.section>

            {/* Information Sharing */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-800/20 backdrop-blur border border-slate-700/30 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold">Information Sharing</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Service providers who assist in our operations (hosting, analytics, payment processing)</li>
                  <li>• Legal requirements or to protect our rights and safety</li>
                  <li>• Business transfers (mergers, acquisitions)</li>
                  <li>• With your explicit consent</li>
                </ul>
              </div>
            </motion.section>

            {/* Data Security */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-800/20 backdrop-blur border border-slate-700/30 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-red-400" />
                <h2 className="text-2xl font-bold">Data Security</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                <ul className="space-y-2 ml-4">
                  <li>• SSL encryption for data transmission</li>
                  <li>• Secure servers and database protection</li>
                  <li>• Regular security audits and updates</li>
                  <li>• Limited access to personal information</li>
                  <li>• Employee training on data protection</li>
                </ul>
              </div>
            </motion.section>

            {/* Your Rights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-slate-800/20 backdrop-blur border border-slate-700/30 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold">Your Rights</h2>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li>• <strong>Access:</strong> Request access to your personal information</li>
                <li>• <strong>Correction:</strong> Request correction of inaccurate information</li>
                <li>• <strong>Deletion:</strong> Request deletion of your personal information</li>
                <li>• <strong>Portability:</strong> Request transfer of your data</li>
                <li>• <strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li>• <strong>Complaint:</strong> Lodge a complaint with supervisory authorities</li>
              </ul>
            </motion.section>

            {/* Contact Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur border border-blue-500/30 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <div className="space-y-4 text-gray-300">
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@webysoft.com</p>
                  <p><strong>Phone:</strong> +91 88499 90393</p>
                  <p><strong>Address:</strong> Surat & Mumbai, India</p>
                </div>
              </div>
            </motion.section>

            {/* Updates */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-lg p-6"
            >
              <h2 className="text-xl font-bold mb-4">Policy Updates</h2>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
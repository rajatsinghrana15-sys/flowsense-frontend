import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Tv,
  TrendingUp,
  MessageSquare,
  CheckCircle2,
  ChevronDown,
  Calendar,
  Clock,
  Send,
  UserCheck,
  FileText,
  ArrowRight,
  Play,
  ShieldCheck,
  Star,
  Activity,
  Layers,
  Cpu,
} from "lucide-react";

const DemoPage = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phone: "",
    jobTitle: "",
    industry: "",
    employees: "",
    country: "",
    erpSystem: "",
    crmSystem: "",
    challenges: "",
    demoDate: "",
    demoTime: "",
    notes: "",
    agreed: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please accept the Privacy Policy and Terms & Conditions.");
      return;
    }
    setFormSubmitted(true);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <div className="bg-[#0B1120] text-slate-100 min-h-screen font-sans selection:bg-[#7C3AED] selection:text-white relative overflow-x-hidden">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2563EB]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-10 w-[600px] h-[600px] bg-[#7C3AED]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[400px] h-[400px] bg-[#2563EB]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header / Navbar Branding Placeholder */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10 border-b border-slate-800/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#7C3AED] p-[1px] flex items-center justify-center shadow-lg shadow-blue-500/20">
            <div className="w-full h-full bg-[#0B1120] rounded-[11px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-blue-400" />
            </div>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
            FlowSense <span className="text-blue-500">AI</span>
          </span>
        </div>
        <a
          href="#demo-form"
          className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
        >
          Contact Sales
        </a>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-blue-400 backdrop-blur-md">
              <Activity className="w-3.5 h-3.5" /> Next-Gen Enterprise Process
              Mining
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Book a <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                Personalized Demo
              </span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              Discover how FlowSense AI automatically discovers your real
              business processes, identifies bottlenecks, and provides
              AI-powered recommendations to improve operational efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#demo-form"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:opacity-95 text-white font-semibold flex items-center justify-center gap-2 shadow-xl shadow-blue-600/25 transition-all hover:scale-[1.02]"
              >
                Schedule Demo <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => alert("Launching Interactive Sandbox...")}
                className="px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold border border-slate-700/80 flex items-center justify-center gap-2 backdrop-blur-md transition-all hover:scale-[1.02]"
              >
                <Play className="w-4 h-4 text-purple-400 fill-purple-400" />{" "}
                Watch Live Demo
              </button>
            </div>

            <div className="pt-6 flex items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> SOC2 Type
                II Certified
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No ERP
                Lock-In
              </span>
            </div>
          </motion.div>

          {/* Right Enterprise AI Illustration / Mockup */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-4 shadow-2xl backdrop-blur-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />

              {/* Fake Dashboard Topbar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-slate-500 font-mono ml-2">
                    flowsense.ai/process-map
                  </span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                  Live Sync
                </span>
              </div>

              {/* Dashboard Content Mock */}
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/40">
                    <div className="text-xs text-slate-400">
                      Process Cycle Time
                    </div>
                    <div className="text-lg font-bold text-slate-100">
                      4.2 Days{" "}
                      <span className="text-xs text-emerald-400 font-normal">
                        -38%
                      </span>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/40">
                    <div className="text-xs text-slate-400">
                      Bottlenecks Found
                    </div>
                    <div className="text-lg font-bold text-amber-400">
                      14 Active
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/40">
                    <div className="text-xs text-slate-400">Est. Savings</div>
                    <div className="text-lg font-bold text-purple-400">
                      $240k/yr
                    </div>
                  </div>
                </div>

                {/* Workflow Simulation Graph */}
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 relative min-h-[220px] flex flex-col justify-center items-center">
                  <div className="flex items-center justify-between w-full max-w-sm gap-2">
                    <div className="p-2.5 bg-blue-900/30 border border-blue-500/30 rounded-lg text-center text-xs font-mono text-blue-300">
                      Order Received
                    </div>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
                    <div className="p-2.5 bg-amber-900/30 border border-amber-500/40 rounded-lg text-center text-xs font-mono text-amber-300">
                      Credit Check (Delay)
                    </div>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-purple-500 to-emerald-500" />
                    <div className="p-2.5 bg-emerald-900/30 border border-emerald-500/30 rounded-lg text-center text-xs font-mono text-emerald-300">
                      Fulfillment
                    </div>
                  </div>

                  {/* AI Recommendation Badge Overlay */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-6 p-3 bg-gradient-to-r from-purple-900/40 to-slate-900 border border-purple-500/40 rounded-xl max-w-md flex items-start gap-3"
                  >
                    <Layers className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="font-semibold text-purple-300">
                        AI Insight:
                      </span>{" "}
                      Auto-approve credit limits below $10,000 to eliminate 64%
                      of manual review delays.
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= TRUSTED BY SECTION ================= */}
      <section className="border-y border-slate-800/80 bg-slate-950/40 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
            Trusted Across Multiple Industries
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-center opacity-75">
            {[
              "Manufacturing",
              "Banking",
              "Healthcare",
              "Logistics",
              "Retail",
              "Insurance",
              "IT Services",
              "Government",
            ].map((industry, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-300 font-semibold text-xs tracking-wide hover:border-blue-500/40 hover:text-white transition-all cursor-default"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY BOOK A DEMO? ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Why Book a Demo?
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            See firsthand how FlowSense AI delivers complete visibility into
            complex operational workflows.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Card 1 */}
          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 backdrop-blur-xl transition-all hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">
              Personalized Consultation
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Talk directly with our AI process experts tailored to your
              operational structures.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/50 backdrop-blur-xl transition-all hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
              <Tv className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">
              Live Platform Walkthrough
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Experience FlowSense AI with a real business process example
              modeled on your industry.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 backdrop-blur-xl transition-all hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">ROI Assessment</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Understand how much time and operational cost your organization
              can realistically save.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/50 backdrop-blur-xl transition-all hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Q&A Session</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Discuss your specific business challenges and receive tailored
              transformation recommendations.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= DEMO BOOKING FORM ================= */}
      <section
        id="demo-form"
        className="max-w-5xl mx-auto px-6 py-12 relative z-10 scroll-mt-10"
      >
        <div className="p-8 md:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-3">Schedule Your Demo</h2>
            <p className="text-slate-400 text-sm">
              Fill out the form below and our solution architects will prepare a
              customized environment for you.
            </p>
          </div>

          {formSubmitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12 space-y-4"
            >
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold">Demo Request Received!</h3>
              <p className="text-slate-400 max-w-md mx-auto text-sm">
                Thank you,{" "}
                <span className="text-white font-semibold">
                  {formData.fullName}
                </span>
                . An enterprise process specialist will contact you within 2
                business hours to confirm your scheduled slot.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="e.g. Acro Global Solutions"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all"
                  />
                </div>

                {/* Business Email */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="businessEmail"
                    required
                    value={formData.businessEmail}
                    onChange={handleInputChange}
                    placeholder="s.jenkins@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all"
                  />
                </div>

                {/* Job Title */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    placeholder="e.g. VP of Operations"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all"
                  />
                </div>

                {/* Industry Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Industry *
                  </label>
                  <select
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-300 transition-all"
                  >
                    <option value="">Select Industry</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="banking">Banking & Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="logistics">Supply Chain & Logistics</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="insurance">Insurance</option>
                    <option value="it">IT & Tech Services</option>
                    <option value="government">Public Sector</option>
                  </select>
                </div>

                {/* Number of Employees Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Number of Employees *
                  </label>
                  <select
                    name="employees"
                    required
                    value={formData.employees}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-300 transition-all"
                  >
                    <option value="">Select Company Size</option>
                    <option value="1-50">1 - 50</option>
                    <option value="51-200">51 - 200</option>
                    <option value="201-1000">201 - 1,000</option>
                    <option value="1000+">1,000+</option>
                  </select>
                </div>

                {/* Country Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Country *
                  </label>
                  <select
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-300 transition-all"
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="DE">Germany</option>
                    <option value="IN">India</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>

                {/* Existing ERP System */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Existing ERP System
                  </label>
                  <input
                    type="text"
                    name="erpSystem"
                    value={formData.erpSystem}
                    onChange={handleInputChange}
                    placeholder="e.g. SAP S/4HANA, Oracle"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all"
                  />
                </div>

                {/* Existing CRM System */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Existing CRM System
                  </label>
                  <input
                    type="text"
                    name="crmSystem"
                    value={formData.crmSystem}
                    onChange={handleInputChange}
                    placeholder="e.g. Salesforce, HubSpot"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all"
                  />
                </div>

                {/* Preferred Demo Date */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="demoDate"
                    required
                    value={formData.demoDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-300 transition-all"
                  />
                </div>

                {/* Preferred Time */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Preferred Time Slot *
                  </label>
                  <input
                    type="time"
                    name="demoTime"
                    required
                    value={formData.demoTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-300 transition-all"
                  />
                </div>
              </div>

              {/* Current Business Challenges (Textarea) */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300">
                  Current Business Challenges
                </label>
                <textarea
                  name="challenges"
                  rows="3"
                  value={formData.challenges}
                  onChange={handleInputChange}
                  placeholder="Describe your primary workflow bottlenecks or process visibility goals..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all"
                />
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300">
                  Additional Notes
                </label>
                <input
                  type="text"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Any specific features or team members to include?"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="agreed"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleInputChange}
                  className="w-4 h-4 rounded border-slate-800 text-blue-600 focus:ring-blue-500 bg-slate-950"
                />
                <label htmlFor="agreed" className="text-xs text-slate-400">
                  I agree to the{" "}
                  <a href="#" className="text-blue-400 underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-400 underline">
                    Terms & Conditions
                  </a>
                  .
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:opacity-95 text-white font-bold text-base shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Book My Demo
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ================= WHAT HAPPENS NEXT? ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-3">What Happens Next?</h2>
          <p className="text-slate-400 text-sm">
            Our streamlined process to get your team onboarded quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {[
            {
              step: "Step 1",
              title: "Submit Request",
              desc: "Fill out demo form",
              icon: Send,
            },
            {
              step: "Step 2",
              title: "Team Contacts You",
              desc: "To tailor the agenda",
              icon: UserCheck,
            },
            {
              step: "Step 3",
              title: "Schedule Meeting",
              desc: "Confirm slot",
              icon: Calendar,
            },
            {
              step: "Step 4",
              title: "Live Product Demo",
              desc: "Custom walkthrough",
              icon: Tv,
            },
            {
              step: "Step 5",
              title: "AI Report",
              desc: "Get optimization roadmap",
              icon: FileText,
            },
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 relative"
              >
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 mb-4 shadow-inner">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-1">
                  {item.step}
                </span>
                <h4 className="text-sm font-bold text-slate-100 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CUSTOMER TESTIMONIAL ================= */}
      <section className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 text-center relative overflow-hidden shadow-2xl">
          <div className="flex justify-center gap-1 text-amber-400 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>
          <blockquote className="text-lg md:text-xl font-medium text-slate-200 italic leading-relaxed mb-6">
            "FlowSense AI helped us discover hidden process delays that were
            costing our business valuable time. Within weeks, we improved
            approval efficiency by more than 40%."
          </blockquote>
          <div>
            <div className="font-bold text-slate-100 text-sm">
              Operations Manager
            </div>
            <div className="text-xs text-slate-400">
              Leading Global Manufacturing Company
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ PREVIEW ================= */}
      <section className="max-w-4xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm">
            Everything you need to know before booking your demo.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "How long does the demo take?",
              a: "Our personalized demos typically take 30 to 45 minutes, including a customized walkthrough and dedicated Q&A session.",
            },
            {
              q: "Is the demo free?",
              a: "Yes, completely free. There are no commitments or credit card requirements to schedule a session.",
            },
            {
              q: "Do I need technical knowledge?",
              a: "Not at all. FlowSense AI is engineered for both business operations leaders and IT executives alike.",
            },
            {
              q: "Can FlowSense AI integrate with our existing ERP or CRM?",
              a: "Yes! FlowSense AI features pre-built, zero-code connectors for SAP, Salesforce, Oracle, Microsoft Dynamics, ServiceNow, and custom databases.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-slate-900/60 border border-slate-800 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-5 text-left flex justify-between items-center text-sm font-semibold text-slate-200 hover:text-white"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${activeFaq === index ? "rotate-180 text-blue-400" : "text-slate-500"}`}
                />
              </button>
              <AnimatePresence>
                {activeFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-xs text-slate-400 leading-relaxed border-t border-slate-800/40 pt-3"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-purple-900/40 border border-slate-800 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Ready to Discover How Your Business Really Works?
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Book a free personalized demo today and see how AI-powered Process
              Mining can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="#demo-form"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:scale-105 transition-all"
              >
                Book Demo
              </a>
              <a
                href="#demo-form"
                className="px-8 py-4 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 font-bold text-sm hover:bg-slate-800 hover:scale-105 transition-all"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500 relative z-10">
        <p>
          © {new Date().getFullYear()} FlowSense AI Inc. All rights reserved.
          Enterprise Process Mining Platform.
        </p>
      </footer>
    </div>
  );
};

export default DemoPage;

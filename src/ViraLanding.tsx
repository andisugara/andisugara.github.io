import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Bot,
  Sparkles,
  Calendar,
  Wallet,
  Shield,
  ExternalLink,
  ArrowRight,
  Brain,
  Zap,
  FileText,
  ArrowLeft,
  CheckCircle2,
  Globe,
  Info,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function ViraLanding() {
  useEffect(() => {
    document.title = "VIRA AI Assistant - Purpose, Features & Google OAuth Integration";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* Background Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-500/10 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-[600px] left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] pointer-events-none -z-10 rounded-full" />

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#090d16]/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo Brand - Matches Google OAuth App Name EXACTLY */}
          <Link to="/vira" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-violet-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#090d16] rounded-[14px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-white tracking-tight text-lg sm:text-xl block leading-none">
                VIRA AI Assistant
              </span>
              <span className="text-xs text-indigo-300 font-medium">by Sugara Dev</span>
            </div>
          </Link>

          {/* Navigation Items */}
          <nav className="flex items-center gap-3">
            <Link
              to="/vira/privacy"
              className="hidden sm:inline-block px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/vira/terms"
              className="hidden sm:inline-block px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors"
            >
              Terms of Service
            </Link>
            <a
              href="https://asistant.sugara.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-semibold hover:opacity-90 transition-all shadow-md shadow-indigo-600/30"
            >
              <span>Launch App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        {/* App Name Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-6 backdrop-blur-sm shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Official Home Page for VIRA AI Assistant</span>
        </div>

        {/* Hero Title - Exact App Name */}
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            VIRA AI Assistant
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-slate-200 text-lg sm:text-xl font-medium max-w-3xl mx-auto mb-4">
          Virtual Intelligent Reminder & Personal Finance Assistant
        </p>

        {/* Hero Purpose Summary */}
        <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed mb-8">
          <strong>VIRA AI Assistant</strong> is a smart personal productivity application that enables users to manage reminders, organize calendar schedules, track personal finances, and automate task management seamlessly via WhatsApp and a web dashboard.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://asistant.sugara.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-base shadow-xl shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Open VIRA AI Assistant</span>
            <span className="text-xs px-2 py-0.5 rounded bg-white/20 font-mono">asistant.sugara.my.id</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-300 font-semibold text-base hover:bg-slate-800 hover:text-white transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Portfolio Home
          </Link>
        </div>

        {/* Live URL Highlight Card */}
        <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-slate-900 border border-indigo-500/30 max-w-xl mx-auto flex items-center justify-between gap-4 shadow-2xl">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-500/30">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-indigo-300 font-semibold uppercase tracking-wider">Application Web URL</div>
              <div className="text-base font-bold text-white font-mono">https://asistant.sugara.my.id</div>
            </div>
          </div>
          <a
            href="https://asistant.sugara.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
          >
            Visit App <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* DEDICATED SECTION FOR GOOGLE OAUTH REVIEWERS: Application Purpose & Google API Usage */}
      <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-900 border border-indigo-500/40 shadow-2xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Purpose of VIRA AI Assistant
              </h2>
              <p className="text-xs text-indigo-300 font-medium">
                Detailed application scope and Google Calendar API integration notice
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" /> What is VIRA AI Assistant?
              </h3>
              <p>
                <strong>VIRA AI Assistant</strong> is an intelligent virtual personal assistant operated by <strong>Sugara Dev</strong>. The primary purpose of the application is to help users maintain personal finance records, schedule intelligent reminders, organize calendar agendas, and automate daily productivity tasks through natural language conversations on WhatsApp and a companion web dashboard.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-400" /> Why VIRA AI Assistant Uses Google Calendar API
              </h3>
              <p>
                To provide seamless reminder and schedule synchronization, <strong>VIRA AI Assistant</strong> requests authorization from users to connect their Google Account via <strong>Google OAuth 2.0</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2 text-xs sm:text-sm">
                <li><strong>Event Creation:</strong> Automatically create Google Calendar events when a user schedules a reminder (e.g., meetings, bill payments, tasks) via VIRA AI Assistant.</li>
                <li><strong>Event Management:</strong> Update or delete calendar reminders upon user request.</li>
                <li><strong>Schedule Coordination:</strong> Sync upcoming calendar events so users receive timely WhatsApp push notifications.</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 space-y-2">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-indigo-400" /> Privacy & Limited Use Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                <strong>VIRA AI Assistant</strong> accesses Google Calendar user data solely to fulfill calendar scheduling functions requested directly by the user. We do not sell, share, or use Google user data for advertising, market research, or any unauthorized third-party processing. Usage of Google API data strictly complies with the <strong>Google API Services User Data Policy</strong>, including the <strong>Limited Use</strong> requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/60">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Core Features of VIRA AI Assistant
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Explore how VIRA AI Assistant empowers your daily finance and schedule management.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Wallet className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Natural Finance Tracking</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Log transactions by chatting naturally on WhatsApp (e.g., <em>"paid $15 for lunch from BNI"</em>). VIRA AI Assistant categorizes income, expenses, and wallet balances instantly.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-violet-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Google Calendar Integration</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Connect Google Calendar via Google OAuth 2.0. Reminders scheduled through VIRA AI Assistant automatically sync to your personal Google Calendar.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-pink-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-pink-600/20 border border-pink-500/30 text-pink-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">AI Financial Advisor</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get personalized AI insights on spending patterns, monthly budget recommendations, and smart savings advice generated specifically for you.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <SiWhatsapp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">WhatsApp Push Notifications</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Receive timely push reminders directly in your WhatsApp chats so you never miss an important meeting, payment, or deadline.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Architecture Banner */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" /> High Performance Architecture
              </div>
              <h3 className="text-xl font-bold text-white">Try VIRA AI Assistant Today</h3>
              <p className="text-xs text-slate-400 max-w-md">
                Express.js TypeScript Backend, BullMQ Queue Worker, PostgreSQL Prisma ORM, Redis Caching, Vue 3 Dashboard, & Google Gemini AI.
              </p>
            </div>
            <a
              href="https://asistant.sugara.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/20 whitespace-nowrap"
            >
              Open Application
            </a>
          </div>
        </div>
      </section>

      {/* Legal & Google OAuth Verification Links */}
      <section className="py-8 px-4 border-t border-slate-800/60 max-w-5xl mx-auto text-center text-xs text-slate-400">
        <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
          <Link to="/vira/privacy" className="hover:text-indigo-400 flex items-center gap-1.5 transition-colors font-medium">
            <Shield className="w-3.5 h-3.5 text-indigo-400" /> Privacy Policy
          </Link>
          <span>•</span>
          <Link to="/vira/terms" className="hover:text-indigo-400 flex items-center gap-1.5 transition-colors font-medium">
            <FileText className="w-3.5 h-3.5 text-indigo-400" /> Terms of Service
          </Link>
          <span>•</span>
          <a
            href="https://asistant.sugara.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 flex items-center gap-1.5 transition-colors font-medium"
          >
            <Globe className="w-3.5 h-3.5 text-indigo-400" /> Web App (asistant.sugara.my.id)
          </a>
        </div>
        <p className="text-[11px] text-slate-500">
          <strong>VIRA AI Assistant</strong> is operated by <strong>Sugara Dev</strong>. Google OAuth 2.0 integration adheres to the <em>Google API Services User Data Policy (Limited Use)</em>.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        &copy; 2026 Sugara Dev. All rights reserved. VIRA AI Assistant.
      </footer>
    </div>
  );
}

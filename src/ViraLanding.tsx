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
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function ViraLanding() {
  useEffect(() => {
    document.title = "VIRA AI Assistant - Asisten Pribadi Keuangan & Reminder | Sugara Dev";
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
          {/* Logo Brand */}
          <Link to="/vira" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-violet-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#090d16] rounded-[14px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-white tracking-tight text-xl">VIRA</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold uppercase tracking-wider">
                  AI
                </span>
              </div>
              <span className="text-xs text-indigo-300 block font-medium -mt-0.5">
                VIRA AI Assistant
              </span>
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
              <span>Buka App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-6 backdrop-blur-sm shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Solusi Asisten Pribadi Pintar & Keuangan Cerdas</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
          Kelola Keuangan & Agenda Lebih Cerdas Bersama{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            VIRA AI Assistant
          </span>
        </h1>

        {/* Hero Description */}
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          <strong>VIRA (Virtual Intelligent Reminder & Finance Assistant)</strong> membantu Anda mencatat transaksi keuangan, mengatur jadwal pengingat, dan sinkronisasi Google Calendar secara otomatis langsung via WhatsApp & Web Dashboard.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://asistant.sugara.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-base shadow-xl shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Mulai Pakai VIRA</span>
            <span className="text-xs px-2 py-0.5 rounded bg-white/20 font-mono">asistant.sugara.my.id</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-300 font-semibold text-base hover:bg-slate-800 hover:text-white transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Portofolio
          </Link>
        </div>

        {/* Live URL Highlight Card */}
        <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-slate-900 border border-indigo-500/30 max-w-xl mx-auto flex items-center justify-between gap-4 shadow-2xl">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-500/30">
              <GlobeIcon />
            </div>
            <div>
              <div className="text-xs text-indigo-300 font-semibold uppercase tracking-wider">Live Web Application</div>
              <div className="text-base font-bold text-white font-mono">asistant.sugara.my.id</div>
            </div>
          </div>
          <a
            href="https://asistant.sugara.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
          >
            Buka Web <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/60">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Fitur Utama VIRA AI Assistant
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Didesain untuk memberikan pengalaman asisten pribadi yang responsif, tepat, dan mudah digunakan kapan saja.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Wallet className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Pencatatan Keuangan Natural</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cukup kirim pesan teks seperti <em>"bayar listrik 150rb dari BCA"</em> atau <em>"tarik 100k dari BNI"</em>. VIRA otomatis mengklasifikasikan transaksi dan saldo dompet Anda.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-violet-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Google Calendar Sync</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Terhubung secara otomatis dengan akun Google Calendar Anda via OAuth 2.0. Jadwal pengingat yang dibuat di WhatsApp langsung masuk ke Kalender Google.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-pink-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-pink-600/20 border border-pink-500/30 text-pink-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">AI Financial Advisor</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Analisis cerdas AI untuk pola pengeluaran bulanan Anda, memberikan tips penghematan dan rekomendasi pengelolaan alokasi dana secara personal.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <SiWhatsapp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">WhatsApp Integration</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dapat diakses kapan saja dan di mana saja langsung dari WhatsApp DMs. Notifikasi pengingat dikirimkan tepat waktu via pesan WhatsApp.
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
              <h3 className="text-xl font-bold text-white">Built with Modern Stack</h3>
              <p className="text-xs text-slate-400 max-w-md">
                Express.js TypeScript Backend, BullMQ Queue Worker, PostgreSQL Prisma ORM, Redis Caching, Vue 3 Dashboard, & Google Gemini AI API Parsing.
              </p>
            </div>
            <a
              href="https://asistant.sugara.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/20 whitespace-nowrap"
            >
              Coba Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Legal & Google OAuth Verification Links */}
      <section className="py-8 px-4 border-t border-slate-800/60 max-w-5xl mx-auto text-center text-xs text-slate-400">
        <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
          <Link to="/vira/privacy" className="hover:text-indigo-400 flex items-center gap-1.5 transition-colors">
            <Shield className="w-3.5 h-3.5 text-indigo-400" /> Privacy Policy
          </Link>
          <span>•</span>
          <Link to="/vira/terms" className="hover:text-indigo-400 flex items-center gap-1.5 transition-colors">
            <FileText className="w-3.5 h-3.5 text-indigo-400" /> Terms of Service
          </Link>
          <span>•</span>
          <a
            href="https://asistant.sugara.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 flex items-center gap-1.5 transition-colors"
          >
            <GlobeIcon /> Web App (asistant.sugara.my.id)
          </a>
        </div>
        <p className="text-[11px] text-slate-500">
          VIRA AI Assistant diproduksi oleh <strong>Sugara Dev</strong>. Menggunakan otentikasi Google OAuth 2.0 yang mematuhi <em>Google API Services User Data Policy (Limited Use)</em>.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        &copy; 2026 Sugara Dev. All rights reserved. VIRA (Virtual Intelligent Reminder Assistant).
      </footer>
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

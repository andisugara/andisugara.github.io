import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FileText, ArrowLeft, ExternalLink, Mail, Globe } from "lucide-react";

export default function ViraTerms() {
  useEffect(() => {
    document.title = "VIRA - Terms of Service | Sugara Dev";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0f172a]/80 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white tracking-wide text-lg">VIRA</span>
              <span className="text-xs text-indigo-400 block font-medium">by Sugara Dev</span>
            </div>
          </Link>

          <nav className="flex items-center gap-3 text-sm">
            <Link
              to="/vira/privacy"
              className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/vira/terms"
              className="px-3 py-1.5 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-medium"
            >
              Terms of Service
            </Link>
            <Link
              to="/"
              className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors ml-2"
            >
              <ArrowLeft className="w-4 h-4" /> Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Page Title Card */}
        <div className="mb-10 text-center sm:text-left border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5" /> Terms & Governance
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            <strong>Effective Date:</strong> July 21, 2026
          </p>
        </div>

        {/* Terms Content */}
        <article className="prose prose-invert max-w-none space-y-8 text-slate-300 leading-relaxed">
          <section className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <p>
              Welcome to <strong>VIRA</strong>, an AI-powered virtual assistant operated by <strong>Sugara Dev</strong>.
            </p>
            <p className="mt-3">
              These Terms of Service govern your access to and use of VIRA. By using our services, you agree to be bound by these Terms.
            </p>
          </section>

          {/* Section 1 */}
          <section id="section-1" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              1. About the Service
            </h2>
            <p>VIRA provides AI-powered assistance including, but not limited to:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
              <li>Reminder management</li>
              <li>Google Calendar integration</li>
              <li>Personal finance tracking</li>
              <li>AI-powered conversations</li>
              <li>Productivity automation</li>
              <li>Other features introduced in future updates</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              2. Eligibility
            </h2>
            <p>
              You must have the legal capacity to use this service under the laws applicable in your jurisdiction.
            </p>
            <p>
              By using VIRA, you represent that the information you provide is accurate.
            </p>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              3. User Responsibilities
            </h2>
            <p>You agree to:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
              <li>Use VIRA lawfully.</li>
              <li>Provide accurate information.</li>
              <li>Protect your account credentials.</li>
              <li>Respect the rights of other users.</li>
              <li>Not misuse, interfere with, or attempt unauthorized access to the service.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="space-y-3 p-6 rounded-2xl bg-indigo-950/30 border border-indigo-500/20">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              4. Google Account Authorization
            </h2>
            <p>
              Certain features require authorization through your Google Account.
            </p>
            <p>
              By connecting your Google Account, you authorize VIRA to access only the permissions you explicitly approve.
            </p>
            <p className="text-indigo-300 font-medium pt-1">
              You may revoke access at any time through your Google Account settings.
            </p>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              5. Intellectual Property
            </h2>
            <p>
              All software, source code, trademarks, logos, designs, and related intellectual property associated with VIRA remain the property of Sugara Dev unless otherwise stated.
            </p>
            <p>
              No license is granted except as necessary to use the service.
            </p>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              6. Availability
            </h2>
            <p>
              We strive to maintain reliable service but do not guarantee uninterrupted or error-free operation.
            </p>
            <p>
              Maintenance, upgrades, and unforeseen technical issues may temporarily affect availability.
            </p>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Sugara Dev shall not be liable for indirect, incidental, special, or consequential damages arising from the use of VIRA.
            </p>
            <p>
              Users are responsible for reviewing reminders, schedules, and information generated by the service.
            </p>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              8. Termination
            </h2>
            <p>We may suspend or terminate access to VIRA if:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
              <li>These Terms are violated.</li>
              <li>Required by applicable law.</li>
              <li>Necessary to protect the security or integrity of the service.</li>
            </ul>
            <p className="pt-1">
              Users may discontinue using VIRA at any time.
            </p>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              9. Privacy
            </h2>
            <p>
              Your use of VIRA is also governed by our{" "}
              <Link to="/vira/privacy" className="text-indigo-400 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          {/* Section 10 */}
          <section id="section-10" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              10. Changes to the Service
            </h2>
            <p>
              We reserve the right to modify, improve, suspend, or discontinue any part of VIRA at any time.
            </p>
          </section>

          {/* Section 11 */}
          <section id="section-11" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              11. Changes to These Terms
            </h2>
            <p>
              These Terms may be updated periodically. The latest version will always be available on this page. Continued use of VIRA after updates constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* Section 12 */}
          <section id="section-12" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              12. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and interpreted in accordance with the applicable laws of the Republic of Indonesia, unless otherwise required by mandatory law.
            </p>
          </section>

          {/* Section 13 */}
          <section id="section-13" className="space-y-4 pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              13. Contact
            </h2>
            <p>For questions regarding these Terms, please contact:</p>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-sm">
              <div className="font-bold text-white text-base">Sugara Dev</div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Email:</span>
                <a href="mailto:sugaraandi9@gmail.com" className="text-indigo-400 hover:underline">
                  sugaraandi9@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-4 h-4 text-indigo-400" />
                <span>Website:</span>
                <a href="https://sugara.my.id" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline flex items-center gap-1">
                  https://sugara.my.id <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            &copy; 2026 Sugara Dev. All rights reserved. VIRA (Virtual Intelligent Reminder Assistant).
          </div>
          <div className="flex items-center gap-4">
            <Link to="/vira/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <span>•</span>
            <Link to="/vira/terms" className="hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

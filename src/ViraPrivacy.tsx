import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft, ExternalLink, Mail, Globe, CheckCircle2, Lock } from "lucide-react";

export default function ViraPrivacy() {
  useEffect(() => {
    document.title = "VIRA - Privacy Policy | Sugara Dev";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0f172a]/80 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white tracking-wide text-lg">VIRA</span>
              <span className="text-xs text-indigo-400 block font-medium">by Sugara Dev</span>
            </div>
          </Link>

          <nav className="flex items-center gap-3 text-sm">
            <Link
              to="/vira/privacy"
              className="px-3 py-1.5 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              to="/vira/terms"
              className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
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
            <Lock className="w-3.5 h-3.5" /> Legal & Transparency
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            <strong>Effective Date:</strong> July 21, 2026
          </p>
        </div>

        {/* Highlight Banner for Google Verification Reviewers */}
        <div className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-slate-900 border border-indigo-500/30 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 mt-0.5">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">
                Google OAuth Verification & Limited Use Compliance
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                VIRA strictly adheres to the <strong>Google API Services User Data Policy</strong>, including the <strong>Limited Use</strong> requirements. User data accessed via Google APIs is solely used to provide calendar reminder synchronization and is never shared, sold, or used for advertising.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Content */}
        <article className="prose prose-invert max-w-none space-y-8 text-slate-300 leading-relaxed">
          <section className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <p>
              Welcome to <strong>VIRA (Virtual Intelligent Reminder Assistant)</strong>, operated by <strong>Sugara Dev</strong> ("we", "our", or "us").
            </p>
            <p className="mt-3">
              This Privacy Policy explains how we collect, use, disclose, and protect your information when you use VIRA. By using our services, you agree to the practices described in this Privacy Policy.
            </p>
          </section>

          {/* Section 1 */}
          <section id="section-1" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              1. About VIRA
            </h2>
            <p>
              VIRA is an AI-powered virtual assistant that helps users manage reminders, organize schedules, track personal finances, and automate productivity through WhatsApp and other supported platforms.
            </p>
            <p>
              Some features require access to third-party services such as Google Calendar. Access is only granted after you explicitly authorize VIRA through Google's OAuth authorization process.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              2. Information We Collect
            </h2>
            <p>Depending on the features you use, we may collect:</p>

            <div className="space-y-3 pl-2">
              <h3 className="text-lg font-semibold text-indigo-300">Account Information</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>Name</li>
                <li>Email address</li>
                <li>Profile information provided by your authentication provider</li>
              </ul>

              <h3 className="text-lg font-semibold text-indigo-300 pt-2">Google Account Information</h3>
              <p>When you choose to connect your Google Account, we may access:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>Google Calendar information necessary to create, update, or delete calendar events.</li>
                <li>Authentication tokens required to maintain your connection.</li>
              </ul>
              <p className="text-sm text-indigo-400 font-medium">We never collect or store your Google password.</p>

              <h3 className="text-lg font-semibold text-indigo-300 pt-2">User Content</h3>
              <p>Information that you voluntarily provide while using VIRA, including:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>Reminder requests</li>
                <li>Calendar event details</li>
                <li>Personal finance records</li>
                <li>Messages sent to VIRA</li>
                <li>Preferences and settings</li>
              </ul>

              <h3 className="text-lg font-semibold text-indigo-300 pt-2">Technical Information</h3>
              <p>We may automatically collect:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>Device information</li>
                <li>Browser type</li>
                <li>IP address</li>
                <li>Operating system</li>
                <li>Log data</li>
                <li>Error reports</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              3. How We Use Your Information
            </h2>
            <p>We use your information only to provide and improve VIRA, including:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
              <li>Creating and managing reminders</li>
              <li>Synchronizing reminders with Google Calendar</li>
              <li>Processing AI assistant requests</li>
              <li>Providing customer support</li>
              <li>Maintaining service security</li>
              <li>Improving application performance</li>
              <li>Preventing abuse and unauthorized access</li>
            </ul>
            <p className="font-semibold text-emerald-400">
              We do not use your personal information for advertising purposes.
            </p>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="space-y-3 p-6 rounded-2xl bg-indigo-950/30 border border-indigo-500/20">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              4. Google API Services
            </h2>
            <p>
              VIRA uses Google APIs solely to provide features that you explicitly request.
            </p>
            <p>Google Calendar access is used only to:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
              <li>Create calendar events</li>
              <li>Update existing events</li>
              <li>Delete events upon request</li>
              <li>Read calendar information only when necessary to provide requested functionality</li>
            </ul>
            <p className="pt-2 text-slate-200">
              We do not sell, transfer, or use Google user data for advertising, profiling, or any unrelated purpose.
            </p>
            <p className="font-medium text-indigo-300 pt-1">
              VIRA's use and transfer of information received from Google APIs adheres to the{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white inline-flex items-center gap-1"
              >
                Google API Services User Data Policy <ExternalLink className="w-3.5 h-3.5" />
              </a>
              , including the <strong>Limited Use</strong> requirements.
            </p>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              5. Data Sharing
            </h2>
            <p>We do not sell, rent, or trade your personal information.</p>
            <p>Your information may only be shared:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
              <li>When required by law.</li>
              <li>To comply with legal obligations.</li>
              <li>To protect our rights or prevent fraud.</li>
              <li>With trusted service providers who process data on our behalf under strict confidentiality obligations.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              6. Data Retention
            </h2>
            <p>
              We retain your information only for as long as necessary to provide our services and comply with applicable legal obligations.
            </p>
            <p>
              You may request deletion of your account and associated data at any time.
            </p>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              7. Data Security
            </h2>
            <p>
              We implement reasonable administrative, technical, and organizational safeguards to protect your information against unauthorized access, disclosure, alteration, or destruction.
            </p>
            <p>
              While no system is completely secure, we continuously improve our security practices.
            </p>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              8. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
              <li>Access your personal information.</li>
              <li>Update inaccurate information.</li>
              <li>Disconnect your Google Account.</li>
              <li>Request deletion of your personal data.</li>
              <li>Withdraw consent where applicable.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              9. Third-Party Services
            </h2>
            <p>
              VIRA integrates with third-party services including Google. Your use of these services is also governed by their respective privacy policies and terms.
            </p>
          </section>

          {/* Section 10 */}
          <section id="section-10" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              10. Children's Privacy
            </h2>
            <p>
              VIRA is not intended for children under the age required by applicable law. We do not knowingly collect personal information from children.
            </p>
          </section>

          {/* Section 11 */}
          <section id="section-11" className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              11. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will become effective once published on this page. Continued use of VIRA after changes are published constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* Section 12 */}
          <section id="section-12" className="space-y-4 pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
              12. Contact Us
            </h2>
            <p>If you have any questions regarding this Privacy Policy, please contact us:</p>

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

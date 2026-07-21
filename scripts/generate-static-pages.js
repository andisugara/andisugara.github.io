import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

// Check if dist exists
if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run build first.');
  process.exit(1);
}

const baseHtmlPath = path.join(distDir, 'index.html');
const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

function createPage(routePath, title, description, contentHtml) {
  let pageHtml = baseHtml;
  
  // Replace title
  pageHtml = pageHtml.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`);

  // Inject meta description
  const metaDesc = `<meta name="description" content="${description}" />\n    <meta property="og:title" content="${title}" />\n    <meta property="og:description" content="${description}" />`;
  pageHtml = pageHtml.replace('</head>', `  ${metaDesc}\n  </head>`);

  // Inject content inside <div id="root"> with regex matching any whitespace/newlines
  const rootRegex = /<div id="root">\s*<\/div>/s;
  if (rootRegex.test(pageHtml)) {
    pageHtml = pageHtml.replace(rootRegex, `<div id="root">${contentHtml}</div>`);
  } else {
    console.warn('Warning: Could not match <div id="root"></div> pattern in HTML');
  }

  // Target directory
  const relativePath = routePath.startsWith('/') ? routePath.slice(1) : routePath;
  const targetDir = path.join(distDir, relativePath);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const indexPath = path.join(targetDir, 'index.html');
  fs.writeFileSync(indexPath, pageHtml, 'utf-8');
  console.log(`Generated: ${indexPath}`);

  const flatPath = path.join(distDir, `${relativePath}.html`);
  fs.writeFileSync(flatPath, pageHtml, 'utf-8');
  console.log(`Generated: ${flatPath}`);

  // If path is e.g. vira/privacy, also generate vira-privacy.html at root of dist
  if (relativePath.includes('/')) {
    const flatDashName = `${relativePath.replace(/\//g, '-')}.html`;
    const flatDashPath = path.join(distDir, flatDashName);
    fs.writeFileSync(flatDashPath, pageHtml, 'utf-8');
    console.log(`Generated: ${flatDashPath}`);
  }

  return pageHtml;
}

// ----------------------------------------------------------------------
// 1. /vira Landing Page (VIRA AI Assistant Purpose & Features)
// ----------------------------------------------------------------------
const viraLandingHtml = `
<div style="min-height: 100vh; background-color: #090d16; color: #f1f5f9; font-family: system-ui, -apple-system, sans-serif; padding: 2rem 1rem;">
  <header style="max-width: 1152px; margin: 0 auto 3rem auto; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1e293b; padding-bottom: 1rem;">
    <div>
      <h1 style="font-size: 1.5rem; font-weight: 800; color: #ffffff; margin: 0;">VIRA AI Assistant</h1>
      <span style="font-size: 0.75rem; color: #818cf8;">by Sugara Dev</span>
    </div>
    <nav style="display: flex; gap: 1rem; font-size: 0.875rem;">
      <a href="/vira/privacy" style="color: #cbd5e1; text-decoration: none;">Privacy Policy</a>
      <a href="/vira/terms" style="color: #cbd5e1; text-decoration: none;">Terms of Service</a>
      <a href="https://asistant.sugara.my.id" style="color: #818cf8; text-decoration: none; font-weight: 600;">Launch App</a>
    </nav>
  </header>

  <main style="max-width: 1024px; margin: 0 auto;">
    <section style="text-align: center; margin-bottom: 4rem;">
      <div style="display: inline-block; padding: 0.375rem 1rem; border-radius: 9999px; background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.2); color: #a5b4fc; font-size: 0.75rem; font-weight: 600; margin-bottom: 1.5rem;">
        Official Home Page for VIRA AI Assistant
      </div>
      <h1 style="font-size: 3rem; font-weight: 900; color: #ffffff; margin-bottom: 1rem; line-height: 1.2;">
        VIRA AI Assistant
      </h1>
      <p style="font-size: 1.25rem; font-weight: 600; color: #cbd5e1; margin-bottom: 1.5rem;">
        Virtual Intelligent Reminder & Personal Finance Assistant
      </p>
      <p style="font-size: 1rem; color: #94a3b8; max-width: 42rem; margin: 0 auto 2rem auto; line-height: 1.6;">
        VIRA AI Assistant is a smart personal productivity application that enables users to manage reminders, organize calendar schedules, track personal finances, and automate task management seamlessly via WhatsApp and a web dashboard.
      </p>
      <div>
        <a href="https://asistant.sugara.my.id" style="display: inline-block; padding: 1rem 2rem; border-radius: 1rem; background: linear-gradient(to right, #4f46e5, #9333ea, #db2777); color: #ffffff; font-weight: 700; text-decoration: none; box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.4);">
          Open VIRA AI Assistant (asistant.sugara.my.id)
        </a>
      </div>
    </section>

    <!-- DEDICATED APPLICATION PURPOSE & GOOGLE OAUTH INTEGRATION SECTION -->
    <section style="padding: 2rem; border-radius: 1.5rem; background: #0f172a; border: 1px solid #312e81; margin-bottom: 3rem;">
      <h2 style="font-size: 1.5rem; font-weight: 700; color: #ffffff; border-bottom: 1px solid #1e293b; padding-bottom: 0.75rem; margin-top: 0;">
        Purpose of VIRA AI Assistant
      </h2>
      <p style="font-size: 0.875rem; color: #a5b4fc; margin-bottom: 1.5rem;">
        Detailed application scope and Google Calendar API integration notice
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="padding: 1.25rem; border-radius: 1rem; background: #020617; border: 1px solid #1e293b;">
          <h3 style="font-size: 1.125rem; font-weight: 600; color: #ffffff; margin-top: 0;">What is VIRA AI Assistant?</h3>
          <p style="font-size: 0.875rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 0;">
            <strong>VIRA AI Assistant</strong> is an intelligent virtual personal assistant operated by <strong>Sugara Dev</strong>. The primary purpose of the application is to help users maintain personal finance records, schedule intelligent reminders, organize calendar agendas, and automate daily productivity tasks through natural language conversations on WhatsApp and a companion web dashboard.
          </p>
        </div>

        <div style="padding: 1.25rem; border-radius: 1rem; background: #020617; border: 1px solid #1e293b;">
          <h3 style="font-size: 1.125rem; font-weight: 600; color: #ffffff; margin-top: 0;">Why VIRA AI Assistant Uses Google Calendar API</h3>
          <p style="font-size: 0.875rem; color: #cbd5e1; line-height: 1.6;">
            To provide seamless reminder and schedule synchronization, <strong>VIRA AI Assistant</strong> requests authorization from users to connect their Google Account via <strong>Google OAuth 2.0</strong>.
          </p>
          <ul style="font-size: 0.875rem; color: #cbd5e1; line-height: 1.6; padding-left: 1.25rem; margin-bottom: 0;">
            <li><strong>Event Creation:</strong> Automatically create Google Calendar events when a user schedules a reminder (e.g., meetings, bill payments, tasks) via VIRA AI Assistant.</li>
            <li><strong>Event Management:</strong> Update or delete calendar reminders upon user request.</li>
            <li><strong>Schedule Coordination:</strong> Sync upcoming calendar events so users receive timely WhatsApp push notifications.</li>
          </ul>
        </div>

        <div style="padding: 1.25rem; border-radius: 1rem; background: rgba(49, 46, 129, 0.4); border: 1px solid rgba(99, 102, 241, 0.3);">
          <h3 style="font-size: 1.125rem; font-weight: 600; color: #ffffff; margin-top: 0;">Privacy & Limited Use Guarantee</h3>
          <p style="font-size: 0.875rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 0;">
            <strong>VIRA AI Assistant</strong> accesses Google Calendar user data solely to fulfill calendar scheduling functions requested directly by the user. We do not sell, share, or use Google user data for advertising, market research, or any unauthorized third-party processing. Usage of Google API data strictly complies with the <strong>Google API Services User Data Policy</strong>, including the <strong>Limited Use</strong> requirements.
          </p>
        </div>
      </div>
    </section>

    <!-- CORE FEATURES SECTION -->
    <section style="margin-bottom: 3rem;">
      <h2 style="font-size: 1.5rem; font-weight: 700; color: #ffffff; text-align: center; margin-bottom: 2rem;">
        Core Features of VIRA AI Assistant
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
        <div style="padding: 1.25rem; border-radius: 1rem; background: #0f172a; border: 1px solid #1e293b;">
          <h3 style="font-size: 1rem; font-weight: 700; color: #ffffff;">Natural Finance Tracking</h3>
          <p style="font-size: 0.8125rem; color: #94a3b8; line-height: 1.5;">
            Log transactions naturally via WhatsApp DM (e.g., "paid $15 for lunch"). VIRA AI Assistant categorizes income, expenses, and wallet balances automatically.
          </p>
        </div>

        <div style="padding: 1.25rem; border-radius: 1rem; background: #0f172a; border: 1px solid #1e293b;">
          <h3 style="font-size: 1rem; font-weight: 700; color: #ffffff;">Google Calendar Sync</h3>
          <p style="font-size: 0.8125rem; color: #94a3b8; line-height: 1.5;">
            Connect Google Calendar via Google OAuth 2.0. Reminders created via WhatsApp automatically sync to your personal Google Calendar.
          </p>
        </div>

        <div style="padding: 1.25rem; border-radius: 1rem; background: #0f172a; border: 1px solid #1e293b;">
          <h3 style="font-size: 1rem; font-weight: 700; color: #ffffff;">AI Financial Advisor</h3>
          <p style="font-size: 0.8125rem; color: #94a3b8; line-height: 1.5;">
            Receive personalized AI advice on spending habits, monthly budget tracking, and tailored financial recommendations.
          </p>
        </div>

        <div style="padding: 1.25rem; border-radius: 1rem; background: #0f172a; border: 1px solid #1e293b;">
          <h3 style="font-size: 1rem; font-weight: 700; color: #ffffff;">WhatsApp Notifications</h3>
          <p style="font-size: 0.8125rem; color: #94a3b8; line-height: 1.5;">
            Receive timely push reminders directly in your WhatsApp chats so you never miss an event or task.
          </p>
        </div>
      </div>
    </section>
  </main>

  <footer style="max-width: 1152px; margin: 3rem auto 0 auto; padding-top: 1.5rem; border-top: 1px solid #1e293b; text-align: center; font-size: 0.75rem; color: #64748b;">
    <div style="margin-bottom: 0.75rem; display: flex; justify-content: center; gap: 1rem;">
      <a href="/vira/privacy" style="color: #94a3b8; text-decoration: none;">Privacy Policy</a>
      <span>•</span>
      <a href="/vira/terms" style="color: #94a3b8; text-decoration: none;">Terms of Service</a>
      <span>•</span>
      <a href="https://asistant.sugara.my.id" style="color: #94a3b8; text-decoration: none;">Web App (asistant.sugara.my.id)</a>
    </div>
    <p>&copy; 2026 Sugara Dev. All rights reserved. VIRA AI Assistant.</p>
  </footer>
</div>
`;

const viraPageHtml = createPage(
  '/vira',
  'VIRA AI Assistant - Purpose, Features & Google OAuth Integration',
  'VIRA AI Assistant is a smart personal productivity application for managing reminders, Google Calendar sync, and personal finances.',
  viraLandingHtml
);

createPage(
  '/vira/privacy',
  'VIRA AI Assistant - Privacy Policy | Sugara Dev',
  'Privacy Policy for VIRA AI Assistant, operated by Sugara Dev. Outlines Google API Limited Use compliance.',
  viraPrivacyHtml
);

createPage(
  '/vira/terms',
  'VIRA AI Assistant - Terms of Service | Sugara Dev',
  'Terms of Service for VIRA AI Assistant, operated by Sugara Dev.',
  viraTermsHtml
);

// Overwrite main index.html and 404.html with pre-rendered viraPageHtml fallback
if (viraPageHtml) {
  fs.writeFileSync(baseHtmlPath, viraPageHtml, 'utf-8');
  fs.writeFileSync(path.join(distDir, '404.html'), viraPageHtml, 'utf-8');
  console.log('Patched main index.html and 404.html with pre-rendered VIRA fallback!');
}

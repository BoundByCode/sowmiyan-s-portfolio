
## Refactor Plan — Portfolio Cleanup & Feature Fixes

### 1. YouTube Integration (real videos only)
- Remove all hard-coded fallback video arrays from `src/lib/youtube.ts` and `BlogSection.tsx`.
- Fetch live videos from `@bound-by-code` via YouTube RSS (`https://www.youtube.com/feeds/videos.xml?channel_id=…`) proxied through a new lightweight Supabase edge function `youtube-feed` (avoids CORS + no API key required, parses XML → JSON: title, id, thumbnail, published).
- BlogSection renders skeleton while loading, empty state if fetch fails — never dummy data.

### 2. Projects Section
- Add a `formatRepoName()` util (strip `_`/`-`, title-case) applied wherever repo names render (`ProjectsSection`, `PopularProjectsSlider`, `WorkGrid`, `ProjectDetail`, MCP tool).
- Rebuild `PopularProjectsSlider` as full-width sliding cards (Framer Motion x-drag + auto-advance) showing repo social image (`https://opengraph.githubassets.com/1/sowmiyan-s/<repo>`) + AI summary (existing description).
- New Supabase table `featured_projects (id, github_repo_id, repo_name, position)` with RLS + admin CRUD to pick which 3 repos are featured. Slider pulls from this table (falls back to top-3 by stars if empty).

### 3. About Section (resume-driven)
- Parse the uploaded resume PDF, extract Education, Experience, Skills, Achievements, Contact.
- Rewrite `AboutSection` + `AboutPage` using ONLY that content — no invented copy, no "Crafting the Future" filler.

### 4. Forms & Filler Copy Removal
- Delete `ContactSection.tsx` "Send Signal" form; replace with direct contact links (email / LinkedIn / GitHub / WhatsApp) reusing HireMe styling.
- Remove form from `ContactPage` too — keep only actionable links.
- Strip decorative microcopy across the site: "Average response time…", "Building intelligent systems from Tamil Nadu…", "ORIGIN_IDENTIFIER" tactical filler, "06 // Communication Layer" section labels, etc.

### 5. Global Marquee Ticker
- Extract `MarqueeSection` into a reusable `<NameTicker variant="divider|footer" />`.
- Render once globally in root layout (bottom-of-page, all routes) via `App.tsx` or a shared layout wrapper.
- Insert as section divider between Home page blocks (Hero→Skills→Blog→Projects→Content→HireMe).
- New Supabase table `site_settings (key, value jsonb)` storing `{ showDividers: bool, showGlobalTicker: bool }`. Admin panel gets a toggle card.

### 6. Responsive & Typography Fixes
- Audit `Hero.tsx`, `SkillsSection`, section wrappers in `Home.tsx` for overflow / broken min-heights on mobile.
- Reduce heavy `text-glow` + red text-shadows in `index.css` to subtle 1–2px accents; guarantee `color: #fff` contrast ≥ AA on all headings.
- Ensure grids collapse cleanly at 375px, 768px, 1024px.

### 7. Skills as Icons
- Since no local icon assets exist, use **Simple Icons CDN** (`https://cdn.simpleicons.org/<slug>/white`) — free, no key, official brand marks. Build a `skillIconMap` (name → simpleicons slug) for tech skills.
- Non-tech skills keep concise Lucide icons (Users, MessageSquare, Target, Brain…).
- Rebuild `SkillsSection` as a polished icon grid: monochrome white icon + hover red accent, name below on hover only.

### 8. SEO & Security
- Run `seo_chat--list_findings` + `security--get_scan_results`, fix each (missing alt text, heading order, canonical, RLS gaps on new tables, etc.), then mark fixed.
- All new tables get GRANT + RLS policies + service_role access per project rules.

### Technical notes
- New files: `supabase/functions/youtube-feed/index.ts`, `src/components/NameTicker.tsx`, `src/lib/formatRepo.ts`, `src/lib/skillIcons.ts`, migration for `featured_projects` + `site_settings`.
- Modified: `youtube.ts`, `BlogSection.tsx`, `PopularProjectsSlider.tsx`, `ProjectsSection.tsx`, `WorkGrid.tsx`, `AboutSection.tsx`, `AboutPage.tsx`, `ContactSection.tsx`, `ContactPage.tsx`, `HireMeSection.tsx`, `SkillsSection.tsx`, `Home.tsx`, `App.tsx`, `Admin.tsx`, `index.css`, `Hero.tsx`.
- Deleted: dummy video arrays, "Send Signal" form component body.

### Ask before I start
- OK to use **Simple Icons CDN** for tech logos (no local assets exist in project)? If you have an icon pack you want uploaded, share it and I'll swap.
- OK to store featured-projects + site-settings in Lovable Cloud (backend) — you said "no backend database" for forms, but featured/settings config needs persistence to be admin-editable. Alternative: hard-code + edit via code only.

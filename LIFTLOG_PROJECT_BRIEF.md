# LiftLog — Full Project Brief
*Comprehensive reference for continued development via Claude Code or any AI assistant*

---

## 1. Project Overview

LiftLog is a single-file HTML/JS/CSS AI-powered personal fitness tracker and coaching app. It was built entirely within a Claude.ai conversation, iterating from an initial workout CSV export through to a full-featured training app with AI coaching, progress analytics, and a rich logging UI.

**Current state:** A single self-contained HTML file (`workout-tracker-v3.html`, ~320KB) that runs entirely in the browser. No backend, no server, no build step. All data stored in `localStorage`. Works offline.

**Three users are seeded with real workout history:**
- **Ham** — Push/Pull/Legs split, ~18 sessions
- **Bassi** — Mixed upper/lower split, ~21 sessions  
- **Jana** — Full body + legs focus, ~27 sessions

---

## 2. Tech Stack

| Layer | Technology |
|-------|-----------|
| UI framework | Vanilla JS (no React/Vue) |
| Charts | Chart.js 4.4.1 (CDN) |
| Fonts | Syne (sans) + DM Mono (monospace) via Google Fonts |
| AI calls | Anthropic API `/v1/messages` — `claude-sonnet-4-20250514` |
| Storage | `localStorage` (keyed per user) |
| Hosting | Static HTML file — deployable to Netlify/GitHub Pages |

---

## 3. Architecture

### Single-file structure
Everything lives in one HTML file:
- `<style>` — all CSS (~600 lines)
- `<body>` — minimal HTML shell (4 screens rendered by JS)
- `<script>` — all application logic (~3,400 lines, 177 functions)

### Screen routing
```
currentScreen ∈ { 'home', 'log', 'history', 'progress' }
nav(screen) → sets currentScreen → calls render() → renders correct screen
```

### Render pattern
All screens are fully re-rendered on navigation. DOM is replaced via `el.innerHTML`. No virtual DOM, no diffing. Exceptions: set completion, RPE change, and stopwatch updates patch the DOM directly to preserve input focus.

### Modal system
All dialogs use a `#modal-layer` div injected with `ML.innerHTML`. No `confirm()` calls (blocked in iframes). Confirm dialogs use `_confirmCb` registry pattern to preserve closure variables. Modals animate in via `slideUp` keyframe and out via `closeModalAnim()` with `slideDown`.

### Data storage
```javascript
DB.get(key, default) // JSON.parse(localStorage.getItem('ll_' + key))
DB.set(key, value)   // localStorage.setItem('ll_' + key, JSON.stringify(value))
```
Keys are user-scoped: `ll_workouts_Ham`, `ll_templates_Ham`, `ll_custom_exercises_Ham`, etc.

---

## 4. Data Model

### Workout object
```javascript
{
  id: number,           // Date.now()
  name: string,         // e.g. "Push Day A"
  date: string,         // ISO string
  duration: number,     // seconds (0 on imported workouts → estimated via estimateDuration())
  exercises: Exercise[],
  notes: string,        // session-level notes from finish modal
  prs: string[]         // exercise names that hit PRs this session
}
```

### Exercise object
```javascript
{
  id: number,
  name: string,         // e.g. "Barbell Bench Press"
  type: 'strength' | 'bodyweight' | 'cardio',
  sets: Set[],
  supersetId?: string   // e.g. "ss_1766251860583" — shared ID groups superset partners
}
```

### Set object
```javascript
{
  reps?: number,
  weight?: number,      // always stored in KG internally, displayed in user's unit
  rpe?: 'easy' | 'moderate' | 'challenging' | 'max_effort',
  dist?: number,        // cardio: km
  duration?: number,    // cardio: minutes
  done?: boolean,       // set marked complete during session
  notes?: string        // raw notes including [SUPERSET:id] and [DROPSET] tags
}
```

### Custom exercise object (new format, migrated from string)
```javascript
{
  name: string,
  type: 'strength' | 'bodyweight' | 'cardio',
  muscles: string[],    // e.g. ['chest', 'triceps']
  pattern: string,      // 'push' | 'pull' | 'hinge' | 'squat' | 'isolation' | 'cardio'
  equipment: string     // 'barbell' | 'dumbbell' | 'cable' | 'machine' | 'bodyweight' | etc.
}
```

---

## 5. Unit System

All weights are stored internally in **kg**. Display units are per-user preference (`ll_unit_Ham` = `'kg'` or `'lbs'`).

Key conversion functions:
- `dispW(kg)` — converts kg to display unit value
- `fmtW(kg)` — formats for display as string
- `toKg(val)` — converts display unit value to kg for storage
- `fmtVol(kgVol)` — formats total volume in display unit with 't' suffix if ≥1000
- `wUnit()` — returns current unit string ('kg' or 'lbs')

---

## 6. Screens

### Home
- **Active workout hero** — large banner when workout in progress, shows name, elapsed time, exercise count, sets done, "Continue →" button
- **Start workout button** — full-width primary CTA when idle
- **Compact stats row** — horizontal-scrolling pills: this week, streak, volume, PRs, all sessions
- **Templates** — horizontal scroll of saved templates with last-session progressive overload on start
- **Coach feed** — collapsible panel (tap to expand): weekly AI debrief, next session recommendation with reasoning, fatigue/plateau flags, split plan button
- **Recent workouts** — last 3 sessions as expandable cards with full detail on tap

### Log
- **Workout name input** — large editable title (20px, 700 weight)
- **Stopwatch** — collapsed single-row by default (timer + play/stop + reset), tap to expand full UI with LAP. Auto-starts when a set is marked done. Auto-expands if running.
- **Micro-coach bar** — appears when sets are completed, updates with contextual coaching (volume vs last session, RPE warnings, PR alerts)
- **AI suggestions panel** — shows weight/rep targets per exercise with rep context and RPE reasoning
- **Exercise blocks** — per exercise: name + type tag, last session detail, ⓘ stats button, column headers, set rows, + Set / ⇌ Superset buttons
- **Set rows** — reps input, weight input (with live PR flash), RPE native select (colour-coded), completion checkmark (spring animation + row flash), `···` toggle revealing dropset D button + note pencil
- **Add exercise button** — opens picker modal
- **Discard workout button**

Edit mode: shows banner "✎ Editing: [name]" with discard, Save changes button in topbar.

### History
- **Search bar** — live filter by workout name, exercise name, or date
- **Filter chips** — All / This week / This month / PRs
- **Templates section** — collapsible list with Use / Delete per template
- **Workout cards** — tap to expand full detail: superset groups (accent border), dropset sets (purple tint), RPE badges, set notes, done dots, workout notes, Edit / Repeat / ↗ Share / Delete buttons

### Progress
Seven tabs (horizontal scroll, no wrap): **Lifts · Body · Calendar · Volume · Exercise · PRs · Photos**

- **Lifts** — key compound lift cards (Bench, Deadlift, Row, OHP, Leg Press, Pull-Up) with est. 1RM, last session, session count, sparkline trend, ↑/↓ trend vs previous. Search bar for any exercise in history.
- **Body** — front/back SVG body heatmap, muscle regions coloured by 4-week set volume (purple→orange heat scale). Tap region to scroll to muscle stat card. 10 muscle group stat cards with set count, status, fill bar.
- **Calendar** — 13-week Mon-Sun grid with day labels, date numbers, workout dots. Tap a day to expand that workout's detail inline. Today outlined in orange.
- **Volume** — weekly volume bar chart + workout frequency bar chart (Chart.js)
- **Exercise** — select any exercise → max weight sparkline + max reps sparkline
- **PRs** — select exercise → 6 rep-range PR cards (1RM/3RM/5RM/8RM/10RM/12+RM) with weight, date, RPE badge. Epley estimated 1RM. "✦ AI insight" button → cached Claude analysis.
- **Photos** — add progress photos via camera/file, 3-column thumbnail grid, horizontal timeline strip, tap to view full screen, delete.

---

## 7. Feature Inventory (complete)

### Core logging
- [x] Multi-user portal (Ham / Bassi / Jana) with avatar, session count, set count
- [x] Start workout, name it, add exercises, log sets
- [x] Set types: strength, bodyweight, cardio
- [x] RPE via native `<select>`: Easy / Mod / Hard / Max (colour-coded)
- [x] Set completion checkmark → auto-starts stopwatch rest timer
- [x] Superset tagging (⇌ button, shared supersetId)
- [x] Dropset toggle (D button, `[DROPSET]` tag in notes)
- [x] Set notes (pencil icon, expandable textarea, auto-resize)
- [x] New sets pre-fill from last set's values
- [x] Finish modal: duration, volume, sets, PR detection → saves
- [x] Discard workout (custom confirm dialog)
- [x] Save as template; start from template (with progressive overload pre-fill)
- [x] Session editing (full log screen in edit mode, Save/Discard)
- [x] Repeat workout

### Exercise picker
- [x] Search across all types simultaneously when query present
- [x] Session context detection from workout name → "Suggested for Push" section
- [x] Per-row ⌄ chevron → inline stats card with: sessions, last session, all-time best, est. 1RM, rep-range PR lookup input
- [x] Session count badge on every exercise row
- [x] Custom exercise addition with categorisation modal (muscles, pattern, equipment, type)
- [x] "Add [name] as new exercise" button appears only when typing

### In-workout coaching
- [x] ⓘ button on each exercise block → inline stats panel (all last-session sets with RPE, all-time best, 1RM, rep-range lookup)
- [x] Live PR flash — as reps/weight typed, checks rep-range PR and shows "🏆 [X] kg PR!" badge with orange weight border
- [x] AI suggestions panel — last session weight × reps with RPE context, target weight for same rep range, bump logic skipped if max effort
- [x] Micro-coach bar — updates when sets completed: volume comparison, RPE warnings, PR celebration

### Progress & analytics
- [x] Epley formula 1RM estimation: `weight × (1 + reps/30)`
- [x] Per-exercise PR tracking across 6 rep ranges
- [x] Key compound lift dashboard with sparklines
- [x] Muscle group heatmap (SVG body diagram, front + back)
- [x] 13-week training calendar with interactive date selection
- [x] Weekly volume + frequency charts
- [x] Exercise-level progress charts (max weight, max reps over time)
- [x] AI PR insight (cached per user per exercise)
- [x] Progress photos (camera → canvas resize → localStorage)

### AI coaching (Anthropic API)
- [x] Weekly debrief — Claude analyses full week: sessions, muscle volume, split, PRs, flags → 3-4 sentence coach debrief. Cached by week number.
- [x] 4-week split plan builder — 4-question wizard (days/week, goal, experience, equipment) → structured JSON plan → expandable week cards
- [x] PR AI insight — per-exercise strength analysis from rep-range data
- [x] All AI calls use `claude-sonnet-4-20250514`, `max_tokens: 2500`

### Home coaching engine (heuristic, no API)
- [x] Fatigue flags — RPE trending up without weight progress over 3 sessions
- [x] PR opportunity flags — weight up + manageable RPE
- [x] Volume drop flag — this week vs last week
- [x] Plateau detection — 8+ sessions without weight or rep progress → specific fix suggestion
- [x] Split analysis — infers PPL / Full Body / Upper-Lower / Bro Split from muscle group patterns
- [x] Next session recommendation — by muscle recency + volume deficit, with reasoning shown ("Why: chest — 5d rest, 4 sets this month")
- [x] Quick Start → starts workout pre-loaded with suggested exercises

### UX & polish
- [x] Onboarding flow — 3-screen guided intro for new users (detected by zero workouts + localStorage flag)
- [x] History search (live filter by name/exercise/date) + filter chips (All/This week/This month/PRs)
- [x] Share session card — formatted text copy of workout summary with PRs
- [x] Modal slide-down exit animation
- [x] Set completion spring animation + row flash
- [x] Collapsible stopwatch (single row by default, expands on tap)
- [x] Collapsible coach feed on home (badge shows insight count)
- [x] Actionable empty states
- [x] Active workout hero banner (large, stats-forward)
- [x] Horizontal-scrolling stats pills on home
- [x] Horizontal-scrolling tab bar on progress (7 tabs, no wrap)
- [x] Duration back-fill for historical workouts (set count × 2.5 min estimate)

---

## 8. Design System

### Colour palette
```css
--bg:     #0e0e10   /* page background */
--bg2:    #18181c   /* card background */
--bg3:    #222228   /* input / secondary card */
--bg4:    #2a2a32   /* tertiary surface */
--border: #2e2e38
--border2:#3a3a46

--text:   #f0eff4   /* primary text */
--text2:  #9997a8   /* secondary text */
--text3:  #5c5a6e   /* muted/label text */

--accent: #7c6dfa   /* primary interactive (purple) */
--accent2:#a89dff   /* lighter accent, text on dark */

--green:  #3ecf7e   /* success, completion, easy RPE */
--orange: #f5a623   /* warning, effort, challenging RPE — NOT superset */
--red:    #f56060   /* danger, max effort RPE */
```

**Colour semantic rules (important for consistency):**
- Orange = effort / warning only (RPE hard/max, fatigue flags, plateau warnings)
- Accent purple = interactive elements, supersets, action buttons
- Green = completion, success, easy effort, progressive flags

### Typography
- **Syne** — all UI text (sans-serif with personality)
- **DM Mono** — all numbers, weights, times, set data
- Exercise name in workout: 15px 700 weight
- Workout name input: 20px 700 weight
- Stat numbers: 20-22px 700 mono
- Labels: 10-11px 500, `letter-spacing: 0.4-0.8px`

### Border radius
- `--r: 8px` — inputs, small components
- `--r2: 12px` — cards, exercise blocks
- `--r3: 16px` — modals

### Key component classes
- `.card` — standard card (bg2, border, r2, 14px/16px padding)
- `.btn` / `.btn-primary` / `.btn-sm` / `.btn-ghost` / `.btn-danger` / `.btn-success`
- `.tag-strength` (purple) / `.tag-bodyweight` (green) / `.tag-cardio` (orange)
- `.history-entry` — expandable workout card
- `.exercise-block` — in-workout exercise container
- `.set-row.strength` — grid: `20px 1fr 1fr 44px 28px`
- `.hd-superset-group` — accent left border (NOT orange)
- `.hd-set.is-dropset` — purple tint + accent left border

---

## 9. Intelligence Layer

### MUSCLE_MAP
120+ exercises mapped to muscle group arrays. Used by:
- Body heatmap colouring
- Fatigue flags (muscle-level volume)
- Split analysis
- Next session recommendation
- Session context detection

### SESSION_CONTEXTS
12 contexts (push/pull/legs/upper/lower/chest/back/shoulders/arms/glutes/cardio/fullbody), each with:
- `label` — display name
- `muscles[]` — primary muscle groups
- `exercises[]` — suggested exercises

### KEY_LIFTS
6 compound lift definitions with aliases for dashboard lookup:
Bench, Deadlift, Row, OHP, Leg Press/Squat, Pull-Up/Pulldown

### REP_RANGES
6 ranges for PR bucketing:
1RM (1 rep), 3RM (2-3), 5RM (4-5), 8RM (6-8), 10RM (9-10), 12+RM (11+)

### NAME_KEYWORDS
Workout name → session context detection. "Push Day 2" → push context → suggested exercises.

### Custom exercise registration
When a custom exercise is added with categorisation, `registerCustomExInMaps()` injects it into `MUSCLE_MAP` and relevant `SESSION_CONTEXTS` at runtime so it participates in all coaching logic immediately.

---

## 10. What We Discussed for Future Development

### Architecture migration (highest priority)
The most significant pending work is moving from `localStorage` to a real backend for multi-device sync. The plan discussed:

**Stack recommendation:**
- **Supabase** (free tier) — Postgres database + Auth + Row Level Security
- **GitHub** — source hosting + version control
- **Netlify** — auto-deploy from GitHub on push

**Database schema designed:**
```sql
create table workouts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  data jsonb not null,
  created_at timestamptz default now()
);

create table user_prefs (
  user_id uuid primary key references auth.users(id) on delete cascade,
  unit text default 'kg',
  custom_exercises jsonb default '{}',
  templates jsonb default '[]'
);
-- Row Level Security enabled on both tables
```

**What changes in the app:**
- Replace fake 3-user portal with real Supabase email/password auth (magic link option)
- Replace `DB.get()`/`DB.set()` with Supabase queries
- Keep `localStorage` as read-through cache for offline performance
- Seed data (Ham/Bassi/Jana) becomes optional demo data

**To set up:** User needs to provide Supabase `Project URL` and `anon public key` after creating project and running the SQL schema.

### Other features discussed but not yet built
- **CSV export** — explicitly skipped by user preference
- **Real anatomical SVG body diagram** — FreeSVG/Wikimedia CC0 assets too large (420KB) for single-file embed; current hand-crafted SVG is the practical ceiling for this architecture
- **Progress photo body fat AI analysis** — deferred (reliability concerns)
- **Nutrition logging** — out of scope
- **Social features** — out of scope
- **Heart rate / wearable integration** — requires native app, no web API
- **Workout sharing as image** — canvas-rendered summary card (partially implemented as text copy; image render was next)

---

## 11. Known Issues & Technical Debt

1. **`fmtVol` defined twice** — two definitions in the file, later one takes precedence. Should be deduplicated.
2. **`startFromTemplate` defined twice** — first is the smart PO version (correct), second is a stale copy. Should be removed.
3. **`swStartFresh` monkey-patched** — the `_origSwStartFresh = swStartFresh` pattern is fragile; should be a clean single definition.
4. **Template data strips sets** — when saving a template, sets are replaced with `[{}]` (one empty set). Progressive overload on template start compensates for this but it's architecturally odd.
5. **`historyFilter` default is `''` not `'All'`** — the "All" chip doesn't show as active by default even though all workouts are shown. Minor display bug.
6. **Progress photo privacy** — photos stored as base64 in localStorage. Large photo libraries (30 photos) could approach localStorage limits (~5MB total). Should warn users or use IndexedDB for binary storage at scale.
7. **Micro-coach uses `hist[hist.length-2]`** — this is correct reasoning (current session not saved yet) but brittle if history order changes.

---

## 12. File Reference

### Current output file
`workout-tracker-v3.html` — the complete, working, deployable app

### To deploy to Netlify Drop
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Rename file to `index.html`
3. Drag onto the page
4. Get instant URL

### For GitHub + Netlify auto-deploy
1. Create GitHub repo `liftlog`
2. Upload `index.html` to main branch
3. Connect Netlify → GitHub → select repo → deploy
4. Every subsequent `git push` auto-deploys within 30 seconds

### For Claude Code continuation
Provide Claude Code with:
1. This brief document
2. The `index.html` file itself
3. Supabase credentials (when ready for backend migration)

Claude Code can then:
- Restructure into a proper multi-file project (HTML + CSS + JS separated)
- Implement the Supabase auth + sync layer
- Add any additional features from the "discussed" list above

---

## 13. Conversation Summary

This project was built in a single Claude.ai conversation session spanning approximately 60+ turns. The progression was:

1. **Scoping** — user had existing Base44 workout app with clunky UI; decided to start fresh with user's CSV data as seed
2. **Data import** — 66 workouts across 3 users (Ham/Bassi/Jana) imported and merged from CSV; 14 exercise name variants normalised
3. **Core logging** — exercise library, set logging, finish modal, templates, history view
4. **Bug fixes** — `confirm()` blocked in iframes → custom modal system; escaped backtick issues
5. **Feature expansion** — progress screen with 6 tabs, PR tracking, volume charts, calendar
6. **Intelligence** — MUSCLE_MAP, SESSION_CONTEXTS, fatigue flags, split analysis, next session recommendation
7. **AI integration** — Anthropic API calls for weekly debrief, PR insights, split plan builder
8. **Exercise picker UX** — smart suggestions, inline stats card, rep-range PR lookup
9. **Log screen polish** — live PR flash, set notes, RPE select, dropset button, stopwatch
10. **Body heatmap** — SVG anatomy diagram (front + back) with heat colour scale
11. **Key lifts dashboard** — compound lift cards with sparklines
12. **Coaching features** — plateau detection, micro-coaching, progressive overload in templates, onboarding, history search, share session, progress photos
13. **UX overhaul** — home screen hierarchy, collapsible coach feed, stopwatch collapse, set extras behind `···`, modal animations, empty states, colour semantic cleanup
14. **Mobile fix** — hover stats replaced with tap-to-expand inline stats cards
15. **In-workout ⓘ** — stats panel accessible from exercise block during session
16. **Backend planning** — Supabase + GitHub + Netlify architecture designed, ready to implement

---

*Document generated: March 2026. App version: workout-tracker-v3.html (~320KB, ~4,100 lines)*

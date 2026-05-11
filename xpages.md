Good PRD — it’s actually quite complete. But right now it’s **feature-heavy, not UI-structured**, so if you jump into design directly you’ll get confused.

Below is a **clean `pagedetails.md`-style breakdown** of exactly:

* what pages to build
* what each page must contain (UI blocks/components)
* what actions happen on that page
* what reusable UI elements you’ll need

This is derived directly from your PRD  but reorganized for **UI-first development**.

---

# 📄 pagedetails.md — UI Architecture

---

# 1. 🌐 PUBLIC PAGES (Before Login)

---

## 1.1 Landing Page `/`

### Purpose:

Convert users → signup

### Sections:

* Hero Section

  * Headline (AI Influencer Platform)
  * Subtext
  * CTA: “Start Free”
  * Background animation (AI avatar or grid motion)

* Features Section

  * AI Model Creation
  * Post Generation
  * Scheduling
  * Analytics

* Demo Preview Section

  * Fake dashboard screenshot / animation

* Pricing Preview

  * Free / Standard / Pro cards

* Testimonials (fake for now)

* Footer

  * Links
  * Socials

---

## 1.2 Sign In Page `/signin`

### UI:

* Email + Password form
* Google OAuth button
* GitHub OAuth button
* “Forgot password”
* Link to Signup

---

## 1.3 Sign Up Page `/signup`

### UI:

* Email + Password
* Confirm password
* OAuth buttons
* Terms checkbox

---

# 2. 🧠 DASHBOARD SHELL (CORE UI)

---

## 2.1 Dashboard Layout `/dashboard/layout`

### Fixed UI:

* Sidebar

  * Home
  * Models
  * Posts
  * Calendar
  * Accounts
  * Settings
  * Credit balance badge

* Topbar

  * Notification bell
  * Profile avatar
  * Theme toggle

* Main Content Area (dynamic)

---

# 3. 📊 HOME (Analytics Overview)

---

## 3.1 Home Page `/dashboard/home`

### Sections:

* Stats Cards

  * Total Posts
  * Reach
  * Engagement
  * Credits Remaining

* Charts

  * Engagement line chart
  * Platform bar chart

* Top Posts

  * 3 post cards with preview

* CTA Banner

  * “Low credits → Upgrade”

---

# 4. 🤖 MODELS (AI Influencer Studio)

---

## 4.1 Models Page `/dashboard/models`

### Sections:

* Header

  * Title + “Create Model” button

* Models Grid

  * Model Card:

    * Avatar
    * Name
    * Niche
    * Created date
    * Actions:

      * Rename
      * Delete
      * Regenerate

---

## 4.2 Create Model Page `/dashboard/models/create`

### UI Type:

Multi-step wizard

### Steps:

1. Gender Selection
2. Age Range
3. Niche Selection (tags)
4. Style & Tone
5. Upload Images

### Bottom:

* Progress bar
* “Generate Model” button

---

# 5. 📝 POSTS (CONTENT SYSTEM)

---

## 5.1 Posts List Page `/dashboard/posts`

### Sections:

* Header

  * “Create Post” button

* Filters

  * Platform
  * Status (draft/scheduled/published)

* Post List / Grid

  * Image
  * Caption preview
  * Status badge
  * Date
  * Actions:

    * Edit
    * Delete
    * View

---

## 5.2 Create Post Page `/dashboard/posts/create`

### Sections:

* Model Selector

  * Dropdown with avatars

* Account Selector

  * Multi-select

* Content Idea Input

  * Textarea

* Image Upload (optional)

* Generate Button

---

## 5.3 Post Preview Page (IMPORTANT UI)

### Sections:

* Mobile Preview Card

  * Image
  * Username
  * Caption
  * Hashtags

* Editable Fields

  * Caption edit
  * Hashtag edit

* Actions:

  * Post Now
  * Schedule
  * Save Draft
  * Regenerate

---

# 6. 📅 CALENDAR (SCHEDULER)

---

## 6.1 Calendar Page `/dashboard/calendar`

### Sections:

* Calendar View

  * Monthly / Weekly toggle

* Scheduled Posts

  * Click → open preview

* Drag & Drop (future)

---

## 6.2 Schedule Modal

### UI:

* Date Picker
* Time Picker
* Platform selection
* Confirm button

---

# 7. 🔗 ACCOUNTS (SOCIAL CONNECTION)

---

## 7.1 Accounts Page `/dashboard/accounts`

### Sections:

* Connected Accounts List

  * Platform icon
  * Username
  * Status
  * Disconnect button

* Add Account Button

  * Opens OAuth flow

---

# 8. 📈 ANALYTICS (DETAILED)

---

## 8.1 Analytics Page `/dashboard/analytics` (optional but recommended)

### Sections:

* Graphs:

  * Reach over time
  * Engagement over time

* Top Posts Table

* Platform Comparison

---

# 9. 💳 PRICING & BILLING

---

## 9.1 Pricing Page `/pricing`

### Sections:

* Plan Cards

  * Free / Standard / Pro

* Features comparison

* CTA buttons

---

## 9.2 Billing Page `/dashboard/settings/billing`

### Sections:

* Current plan
* Upgrade/Downgrade
* Credit balance
* Invoice history

---

# 10. ⚙️ SETTINGS

---

## 10.1 Settings Page `/dashboard/settings`

### Tabs:

---

### Profile Tab

* Name
* Avatar upload

---

### Billing Tab

* Plan
* Credits
* Upgrade

---

### Notifications Tab

* Email toggles

---

### Security Tab

* Change password
* 2FA toggle

---

# 11. 🧩 GLOBAL COMPONENTS (IMPORTANT)

You MUST build these reusable components:

* Sidebar
* Topbar
* Card (universal)
* Modal
* Form inputs
* Buttons (primary, secondary, danger)
* Stepper (wizard)
* Chart components
* Post card
* Model card

---

# 12. 🔥 UI PRIORITY ORDER (VERY IMPORTANT)

Don’t build everything at once. Follow this:

### Phase 1 (UI Core)

1. Dashboard Layout
2. Home Page
3. Models Page
4. Create Model Wizard

---

### Phase 2

5. Create Post Page
6. Post Preview UI

---

### Phase 3

7. Calendar
8. Accounts

---

### Phase 4

9. Analytics
10. Settings

---

# 13. ⚠️ CRITICAL DESIGN ADVICE

Your biggest risk:

👉 Trying to design everything at once
👉 Mixing backend thinking with UI

Instead:

* First design **static UI only (no API)**
* Use **dummy data**
* Focus on:

  * spacing
  * typography
  * animations
  * consistency

---

If you want next step, I can:

* convert this into **actual folder structure (Next.js UI files)**
* or create **full UI wireframe system**
* or design **premium UI style guide (colors, fonts, animations)**

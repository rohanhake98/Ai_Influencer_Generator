---
name: InfluenceAI Design System
colors:
  surface: '#111827'
  surface-dim: '#13131b'
  surface-bright: '#393841'
  surface-container-lowest: '#0d0d15'
  surface-container-low: '#1b1b23'
  surface-container: '#1f1f27'
  surface-container-high: '#292932'
  surface-container-highest: '#34343d'
  on-surface: '#e4e1ed'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e4e1ed'
  inverse-on-surface: '#303038'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#5de6ff'
  on-secondary: '#00363e'
  secondary-container: '#00cbe6'
  on-secondary-container: '#00515d'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d97721'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#a2eeff'
  secondary-fixed-dim: '#2fd9f4'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e5a'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#0B0F19'
  on-background: '#e4e1ed'
  surface-variant: '#34343d'
  accent: '#F472B6'
  primary-gradient: 'linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)'
  glow-shadow: 0 0 20px rgba(99, 102, 241, 0.3)
typography:
  display-h1:
    fontFamily: Moonrising
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Newsreader
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Newsreader
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  sidebar-width: 240px
  gutter: 24px
  margin-page: 40px
  space-xs: 4px
  space-sm: 8px
  space-md: 16px
  space-lg: 24px
  space-xl: 48px
---

UI_PRD.md — InfluenceAI (UI/UX Design System)
1. 🎯 UI Overview
This document defines the complete UI/UX layer only for InfluenceAI (no backend logic), based on your core PRD.
UI Goals: Make AI feel visual + magical, Reduce user effort, Keep UI clean, Focus on preview-first experience.

2. 🔤 Typography System
Primary Font (Body): "Times New Roman", serif
Display Font (Headings / Branding): "Moonrising", cursive

3. 🎨 Color System
Dark Mode (Default)
Background: #0B0F19 | Surface: #111827 | Primary: #6366F1 | Secondary: #22D3EE | Accent: #F472B6
Gradients: Primary (135deg, #6366F1, #22D3EE), Glow Effect (box-shadow)

4. 🧱 Layout System
Grid: 8px base | Radius: Cards 16px, Buttons 10px, Inputs 8px

5. 🧭 Navigation UI
Sidebar (240px): Home, Models, Create Post (highlight), Calendar, Accounts, Analytics, Settings.
Bottom: Credits indicator ("1200 left").

6. 🖥️ Screens UI Design
6.1 Landing Page: Hero with Moonrising H1, parallax floating cards, gradient background.
6.2 Dashboard: Welcome, stats cards, smooth charts, top posts.
6.3 Models Page: Grid of model cards with hover zoom effects.
6.4 Create Model (Wizard): Step-based selection for Gender, Age, Niche, Style.
6.5 Post Creation: Left inputs, Right live mobile preview.
6.7 Calendar UI: Monthly grid with platform-coded dots.
6.8 Analytics UI: Filters, big chart, metric cards.
6.9 Pricing Page: 3-card layout (Free, Standard, Pro).

7. 🎬 Animation System: Hover scale (1.03), Click scale (0.97), Pulsing AI glow.
8. 🖼️ Image Style: Realistic influencers, Instagram style, Glassmorphism.
13. 🔥 UI Identity: Midjourney + Notion + Stripe feel.

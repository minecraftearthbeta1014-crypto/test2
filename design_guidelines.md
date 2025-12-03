# EDEC 303 Study Application - Design Guidelines

## Design Approach

**Selected Approach**: Design System (Utility-Focused)
**Rationale**: Educational study application requiring clarity, efficiency, and information-dense presentation. Students need to focus on content comprehension without visual distractions.
**System Inspiration**: Material Design principles for educational applications, with Notion-like simplicity for content organization.

## Core Design Principles
- **Clarity First**: Information hierarchy prioritizes readability and comprehension
- **Distraction-Free**: Minimal animations, clean layouts that support focus
- **Efficient Navigation**: Quick switching between study modes without cognitive overhead
- **Content-Dense but Breathable**: Maximum information with strategic whitespace

---

## Typography

**Font Families**:
- Primary: 'Inter' or 'System UI' - for UI elements and body text
- Secondary: 'Georgia' or 'Merriweather' - for study content and longer reading sections

**Hierarchy**:
- Page Titles: text-3xl or text-4xl, font-bold
- Section Headers: text-2xl, font-semibold
- Subsections: text-xl, font-medium
- Body Content: text-base, leading-relaxed for optimal reading
- UI Labels: text-sm, font-medium
- Metadata/Auxiliary: text-xs or text-sm

---

## Layout System

**Spacing Units**: Standardize on Tailwind units of **2, 4, 6, and 8** (e.g., p-4, m-6, gap-8)
- Tight spacing: 2-4 units (component internal padding, button spacing)
- Standard spacing: 6 units (card padding, section gaps)
- Generous spacing: 8-12 units (module separation, major section breaks)

**Container Strategy**:
- App shell: max-w-7xl with px-4 md:px-6 lg:px-8
- Study content: max-w-4xl for optimal reading width
- Quiz/Practice areas: max-w-2xl for focused interaction

**Grid Layouts**:
- Flashcard grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Module navigation: Single column stack with clear separators
- Practice problems: Single column focus area

---

## Component Library

### Navigation
**Primary Navigation Bar**:
- Horizontal tabs for mode switching (Study | Quiz | Flashcards | Practice | Progress)
- Sticky positioning at top (sticky top-0)
- Clear active state indication
- Mobile: Collapse to hamburger menu with full-screen overlay

**Secondary Navigation** (within Study mode):
- Vertical sidebar (hidden on mobile, toggle-able)
- Collapsible module sections with expansion indicators
- Current topic highlight

### Study Mode Components

**Module Cards**:
- Collapsible accordions with clear expand/collapse icons
- Header: Module number + title (text-lg font-semibold)
- Content area: Generous padding (p-6), organized lists
- Visual hierarchy: Use nested indentation for subtopics

**Content Display**:
- Bullet lists for concepts (list-disc, ml-6)
- Numbered lists for processes (list-decimal, ml-6)
- Definition terms in font-medium with descriptions in regular weight
- Code-like formatting for equations/formulas (font-mono, bg treatment)

**Info Callouts**:
- Distinct boxes for important concepts (border-l-4, pl-4 style)
- "Missing Content" indicators clearly marked but non-intrusive

### Quiz Mode Components

**Question Cards**:
- Centered, card-based layout (max-w-2xl)
- Question text: text-lg, mb-4
- Answer options: Full-width buttons with clear hover states
- Spacing between options: space-y-3

**Quiz Controls**:
- Topic selector dropdown at top
- Progress indicator (e.g., "Question 5 of 20")
- Navigation: Previous/Next buttons (disabled states when appropriate)
- Submit/Check answer button (primary action styling)

**Feedback Display**:
- Immediate visual feedback after answer selection
- Explanation text in relaxed formatting below answer
- "Try Again" or "Continue" actions clearly presented

### Flashcard Components

**Card Layout**:
- 3D flip animation (single, subtle transition)
- Front: Term/question centered, text-xl
- Back: Definition/answer, can include examples
- Tap/click anywhere to flip
- Navigation arrows: Previous/Next card

**Flashcard Grid** (overview mode):
- Grid of card previews
- Hover shows preview of back content
- Click to enter focused flashcard mode

### Practice Problems

**Problem Display**:
- Problem statement: text-lg, mb-6
- Visual models: SVG diagrams or structured HTML representations
- Work area: Guided input fields or multiple choice
- Show/Hide solution toggle

**Diagram Components**:
- Bar models: Horizontal rectangles with clear labels
- Arrays: Grid representation using CSS Grid
- Number bonds: Connected circles (SVG or CSS)

### Progress Tracking

**Dashboard Layout**:
- Stats cards in 2-column grid (md:grid-cols-2)
- Topics Studied: Checklist with completion indicators
- Quiz Performance: Simple bar chart representation (HTML/CSS, no libraries)
- Recent Activity: Timeline-style list

**Progress Indicators**:
- Circular progress rings for completion percentages
- Simple checkmarks for completed topics
- Color coding for performance levels (implement via border/bg variations)

---

## Mobile Considerations

**Responsive Breakpoints**:
- Mobile-first approach
- Stack all multi-column layouts on mobile
- Expand navigation to full-screen overlay on mobile
- Increase touch target sizes (min-h-12 for interactive elements)

**Mobile Navigation**:
- Bottom tab bar option for main modes on mobile
- Sticky header with mode selector
- Easy thumb-reach zones for primary actions

---

## Accessibility & Usability

**Keyboard Navigation**:
- All interactive elements keyboard accessible
- Clear focus indicators (ring-2 offset-2)
- Tab order follows logical flow

**Screen Reader Support**:
- Semantic HTML throughout
- ARIA labels for icon-only buttons
- Announced feedback for quiz answers

**Reading Optimization**:
- Line length: max-w-prose for extended reading sections
- Line height: leading-relaxed for body text
- Sufficient text size (minimum text-base, never smaller than text-sm for content)

---

## Animation Guidelines

**Minimal Animation Policy**:
- Page transitions: None or very subtle fade (150ms)
- Accordion expand/collapse: Smooth height transition (200ms)
- Flashcard flip: Single 3D flip animation (300ms)
- Feedback indicators: Quick fade-in for correct/incorrect states (150ms)
- No continuous animations, no parallax, no scroll-triggered effects

---

## Images

**No Hero Image**: This is a utility application focused on immediate access to study materials.

**Icon Usage**:
- Use Heroicons via CDN for UI elements
- Icons for: Module types, quiz question types, navigation items, status indicators
- Size: 16px (w-4 h-4) for inline, 24px (w-6 h-6) for standalone

**Diagram Images** (if needed):
- Placeholder comments for complex mathematical diagrams
- Simple diagrams constructed with HTML/CSS/SVG
- Example: Bar models, arrays, number bonds built with divs and borders

---

## Key UI Patterns

**Primary Actions**: Bold, full-width on mobile, auto-width on desktop
**Secondary Actions**: Outline style or ghost buttons
**Destructive Actions**: Clear visual treatment for reset/clear functions
**Disabled States**: Reduced opacity (opacity-50) with cursor-not-allowed

**Cards**: Consistent shadow (shadow-sm), rounded corners (rounded-lg), padding (p-6)
**Forms**: Clear labels above inputs, validation feedback inline
**Tables**: Responsive with horizontal scroll on mobile, striped rows for readability

This design creates a focused, efficient study environment that prioritizes content comprehension and ease of use across all devices.
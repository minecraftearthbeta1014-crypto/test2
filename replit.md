# EDEC 303 Study Guide Application

## Overview
A comprehensive web-based study application for college students preparing for an EDEC 303 (Mathematics Theory & Instruction) final exam. The app includes study guides, interactive quizzes, flashcards, and practice problems.

## Project Structure

```
client/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navigation.tsx  # Main navigation with theme toggle
│   │   └── ui/           # Shadcn UI components
│   ├── data/             # Static study content data
│   │   ├── studyContent.ts  # All 6 module study materials
│   │   ├── quizQuestions.ts # Quiz questions with explanations
│   │   ├── flashcards.ts    # Flashcard definitions
│   │   └── practiceProblems.ts # Practice problems with models
│   ├── lib/
│   │   ├── progress.ts   # LocalStorage progress tracking
│   │   └── queryClient.ts
│   ├── pages/
│   │   ├── StudyGuide.tsx   # Study mode with collapsible modules
│   │   ├── Quiz.tsx         # Interactive quiz mode
│   │   ├── Flashcards.tsx   # Flip-card flashcards
│   │   ├── Practice.tsx     # Practice problems with visual models
│   │   └── Progress.tsx     # Progress tracking dashboard
│   └── App.tsx           # Main app with routing
├── public/
│   └── manifest.json     # PWA manifest
└── index.html            # App entry with SEO meta tags
```

## Features

### Study Guide
- 6 modules covering all EDEC 303 content
- Collapsible topics with key points and examples
- Topic completion tracking
- Content coverage notes for incomplete sections

### Quiz Mode
- Multiple question types: multiple-choice, true/false, fill-in-blank
- Topic-specific or randomized quizzes
- Instant feedback with explanations
- Score tracking and review

### Flashcards
- Terms and definitions for all modules
- Flip animation for front/back
- Shuffle and navigation controls
- Category filtering

### Practice Problems
- Problem types: Change, Part-Part-Whole, Compare, Equal Groups, Arrays, Multiplicative Comparison
- Visual models: Change diagrams, Bar models, Number bonds, Arrays
- Step-by-step solutions
- Type filtering

### Progress Tracking
- Modules viewed percentage
- Topics completed count
- Quiz scores history
- Flashcards reviewed
- Last study date

## Technical Details

### Frontend
- React with TypeScript
- Tailwind CSS with Shadcn UI components
- Wouter for client-side routing
- LocalStorage for progress persistence

### Data Storage
- All study content stored as static TypeScript files
- Progress stored in browser LocalStorage
- No backend database required

### Design
- Dark/light mode toggle
- Responsive design for mobile and desktop
- Accessible UI with proper ARIA attributes
- Clean, distraction-free study interface

## Content Coverage Notes
The following content sections have limited coverage due to unavailable source files:
- Module 4: Place Value and Fractions details (PowerPoint not readable)
- Module 6: Detailed van Hiele examples, Geometry standards by grade, Measurement Jigsaw content, Data Analysis full details (PowerPoint files not readable)

## Running the Application
The application runs with `npm run dev` which starts both the Express backend and Vite frontend on port 5000.

# Kuis Belajar - Interactive Learning App

An engaging and interactive quiz application designed for Indonesian children to learn reading skills through fun and educational quizzes.

## 🎯 Features

### 5 Quiz Types

1. **Suku Kata (Syllables)** - 130 Questions
   - Learn to read syllables like "Ba", "Ka", "Ma"
   - Complete A-Z consonant + vowel combinations
   - Three difficulty levels: Mudah, Sedang, Sulit

2. **Awal Kata (First Letter)** - 150 Questions
   - Identify the first letter of words
   - Visual learning with emoji clues
   - Common everyday vocabulary

3. **Akhir Kata (Last Letter)** - 120 Questions
   - Guess the last letter of words
   - Audio pronunciation support
   - Popular Indonesian words

4. **Tengah Kata (Middle Letter)** - 100 Questions
   - Find the missing middle letter
   - Interactive word completion
   - Engaging visual hints

5. **Lengkapi Suku Kata (Complete Syllable)** - 80 Questions
   - Complete words with correct syllables
   - Everyday vocabulary practice
   - Audio pronunciation guide

### Key Features

- 🔊 **Text-to-Speech (TTS)** - Hear proper pronunciation for every question
- ⏱️ **Timer Options** - Choose from no timer, 5s, 10s, 15s, or 20s per question
- 📊 **Progress Tracking** - Save and view your learning history
- ⚙️ **Customizable Settings** - Adjust questions per session (5 or 10)
- 🎯 **Smart Memory** - Remember answered questions across sessions
- ⭐ **Star Rewards** - Get stars based on performance
- 📈 **Statistics** - Track total sessions, questions, and average scores

## 🎨 Design

- Playful, child-friendly interface with bright colors
- Nunito font for excellent readability
- Smooth animations and transitions
- Emoji-based visual learning
- Responsive design for all devices

### Design System (Quiz)

Untuk konsistensi antar kuis, gunakan komponen desain berikut:

- `QuizLayout`, `QuizHeader`, `QuizStats`, `QuizProgress`, `QuizCard`, `QuizOption`
- `PermissionGate` untuk standard izin audio

Detail spesifikasi token (font, warna HSL, gradient, radius, shadow, motion, layout) dan pola implementasi tersedia di `DESIGN_SYSTEM.md`.

## 🚀 Getting Started

1. Grant audio permission for text-to-speech functionality
2. Complete the onboarding tutorial
3. Select your preferred quiz type
4. Start learning!

### Developer Setup

This is a monorepo using pnpm workspaces and Turborepo for build orchestration.

1. Install pnpm (if not already installed)

```
npm install -g pnpm
```

2. Install dependencies

```
pnpm install
```

3. Run development servers

```bash
# Run all packages in development mode
pnpm dev

# Run web only
pnpm dev:web

# Run mobile only  
pnpm dev:mobile
```

4. Build

```bash
# Build all packages
pnpm build

# Build web only
pnpm build:web

# Build mobile only
pnpm build:mobile
```

5. Other commands

```bash
# Lint all packages
pnpm lint

# Type check all packages
pnpm typecheck

# Format code
pnpm format

# Clean build outputs
pnpm clean
```

## 📦 Monorepo Structure

```
packages/
├── core/          # Shared business logic (quiz features, types, utils)
├── storage/       # Storage abstraction (localStorage / AsyncStorage)
├── tts/           # TTS abstraction (Web Speech API / expo-speech)
├── web/           # Web app (Vite + React Router)
└── mobile/        # Mobile app (Expo + Expo Router)
```

### Menambah Jenis Kuis Baru (Acuan "Awal Kata")

1. Buat generator soal di `packages/core/src/features/quiz/<jenis>/` dan ekspor via `packages/core/src/features/quiz/registry.ts`.
2. Gunakan komponen desain di halaman kuis:

```
<QuizLayout topBar={<QuizHeader onBack={onBack} right={<QuizStats showTimer={true} timeRemaining={10} stars={currentStars} />} />}>
  <QuizProgress current={index+1} total={total} level={level} />
  <QuizCard>
    {/* Konten soal + tombol audio */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {choices.map(c => (
        <QuizOption key={c} label={c} isSelected={c===selected} isAnswer={c===answer} showFeedback={show} isCorrect={isCorrect} onSelect={() => select(c)} />
      ))}
    </div>
  </QuizCard>
</QuizLayout>
```

3. Jika perlu izin audio sebelum mulai, bungkus halaman dengan `PermissionGate`.

Lihat `DESIGN_SYSTEM.md` untuk aturan styling dan state interaksi yang wajib diikuti.

## 🛠️ Technology Stack

### Monorepo Tools
- **pnpm workspaces** - Package management
- **Turborepo** - Build orchestration and caching

### Shared Packages
- **@repo/core** - Business logic (quiz features, types, utils)
- **@repo/storage** - Storage abstraction (localStorage / AsyncStorage)
- **@repo/tts** - TTS abstraction (Web Speech API / expo-speech)

### Web Package
- React 18
- TypeScript
- Tailwind CSS
- Vite
- shadcn/ui components (Radix UI)
- React Router DOM

### Mobile Package
- React Native
- Expo SDK 54
- Expo Router
- React Native Paper
- expo-speech

## 📱 Screens

1. Audio Permission
2. Onboarding
3. Home
4. Quiz Selection
5. Quiz Interface
6. Results
7. Settings
8. History

## 🎓 Educational Value

This app helps children:
- Learn Indonesian syllables and letters
- Develop reading skills through interactive play
- Improve pronunciation with audio support
- Build vocabulary with everyday words
- Track their learning progress

## 📄 License

Created with ❤️ for Indonesian children's education.

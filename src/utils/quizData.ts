import { Question } from "@/types/quiz";

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Generate Suku Kata questions (130 questions)
const generateSukaKataQuestions = (): Question[] => {
  const consonants = ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z'];
  const vowels = ['a','i','u','e','o'];
  const questions: Question[] = [];
  
  consonants.forEach(consonant => {
    vowels.forEach((vowel, vIndex) => {
      const syllable = consonant + vowel;
      const level = vIndex < 3 ? 'mudah' : (vIndex === 3 ? 'sedang' : 'sulit');
      const otherVowels = vowels.filter(v => v !== vowel).slice(0, 2);
      const wrongChoices = otherVowels.map(v => consonant + v);
      const allChoices = shuffleArray([syllable, ...wrongChoices]);
      
      questions.push({
        id: `${consonant.toLowerCase()}-${syllable.toLowerCase()}`,
        type: "read_syllable",
        prompt: "Dengarkan suku kata ini",
        display: syllable,
        ttsText: syllable,
        answer: syllable,
        choices: allChoices,
        level: level,
        tags: ["konsonan+vokal", consonant, vowel.toUpperCase()]
      });
    });
  });
  
  return questions;
};

// Awal Kata questions (150 questions) - data from document
const awalKataData = [
  { id: 'Mata', image: '👁️', answer: 'M', choices: ['M', 'N', 'B'] },
  { id: 'Hidung', image: '👃', answer: 'H', choices: ['H', 'N', 'M'] },
  { id: 'Mulut', image: '👄', answer: 'M', choices: ['M', 'B', 'P'] },
  { id: 'Telinga', image: '👂', answer: 'T', choices: ['T', 'D', 'P'] },
  { id: 'Tangan', image: '✋', answer: 'T', choices: ['T', 'K', 'P'] },
  { id: 'Kaki', image: '🦵', answer: 'K', choices: ['K', 'T', 'M'] },
  { id: 'Rambut', image: '💇', answer: 'R', choices: ['R', 'H', 'M'] },
  { id: 'Perut', image: '🫄', answer: 'P', choices: ['P', 'B', 'M'] },
  { id: 'Punggung', image: '🦴', answer: 'P', choices: ['P', 'B', 'T'] },
  { id: 'Lutut', image: '🦵', answer: 'L', choices: ['L', 'S', 'T'] },
  { id: 'Siku', image: '💪', answer: 'S', choices: ['S', 'T', 'L'] },
  { id: 'Jari', image: '👆', answer: 'J', choices: ['J', 'T', 'L'] },
  { id: 'Kuku', image: '💅', answer: 'K', choices: ['K', 'J', 'M'] },
  { id: 'Bahu', image: '💪', answer: 'B', choices: ['B', 'P', 'T'] },
  { id: 'Leher', image: '🧣', answer: 'L', choices: ['L', 'N', 'M'] },
  { id: 'Dagu', image: '🧔', answer: 'D', choices: ['D', 'B', 'P'] },
  { id: 'Dahi', image: '🤔', answer: 'D', choices: ['D', 'P', 'M'] },
  { id: 'Alis', image: '🙄', answer: 'A', choices: ['A', 'M', 'H'] },
  { id: 'Bibir', image: '👄', answer: 'B', choices: ['B', 'M', 'P'] },
  { id: 'Gigi', image: '🦷', answer: 'G', choices: ['G', 'L', 'M'] },
  { id: 'Lidah', image: '👅', answer: 'L', choices: ['L', 'B', 'M'] },
  { id: 'Kepala', image: '🗣️', answer: 'K', choices: ['K', 'M', 'T'] },
  { id: 'Kursi', image: '🪑', answer: 'K', choices: ['K', 'M', 'T'] },
  { id: 'Meja', image: '🪑', answer: 'M', choices: ['M', 'K', 'T'] },
  { id: 'Pintu', image: '🚪', answer: 'P', choices: ['P', 'B', 'M'] },
  { id: 'Jendela', image: '🪟', answer: 'J', choices: ['J', 'P', 'M'] },
  { id: 'Lemari', image: '🗄️', answer: 'L', choices: ['L', 'M', 'K'] },
  { id: 'Kasur', image: '🛏️', answer: 'K', choices: ['K', 'M', 'T'] },
  { id: 'Bantal', image: '🛏️', answer: 'B', choices: ['B', 'P', 'K'] },
  { id: 'Cermin', image: '🪞', answer: 'C', choices: ['C', 'S', 'G'] },
  { id: 'Lampu', image: '💡', answer: 'L', choices: ['L', 'B', 'K'] },
  { id: 'Kipas', image: '🌀', answer: 'K', choices: ['K', 'L', 'M'] },
  { id: 'TV', image: '📺', answer: 'T', choices: ['T', 'K', 'L'] },
  { id: 'Radio', image: '📻', answer: 'R', choices: ['R', 'L', 'K'] },
  { id: 'Kompor', image: '🔥', answer: 'K', choices: ['K', 'M', 'L'] },
  { id: 'Wajan', image: '🍳', answer: 'W', choices: ['W', 'K', 'M'] },
  { id: 'Piring', image: '🍽️', answer: 'P', choices: ['P', 'B', 'M'] },
  { id: 'Gelas', image: '🥤', answer: 'G', choices: ['G', 'C', 'B'] },
  { id: 'Sendok', image: '🥄', answer: 'S', choices: ['S', 'C', 'G'] },
  { id: 'Garpu', image: '🍴', answer: 'G', choices: ['G', 'S', 'C'] },
  { id: 'Pisau', image: '🔪', answer: 'P', choices: ['P', 'G', 'S'] },
  { id: 'Nasi', image: '🍚', answer: 'N', choices: ['N', 'M', 'B'] },
  { id: 'Air', image: '💧', answer: 'A', choices: ['A', 'I', 'U'] },
  { id: 'Susu', image: '🥛', answer: 'S', choices: ['S', 'M', 'B'] },
  { id: 'Roti', image: '🍞', answer: 'R', choices: ['R', 'L', 'K'] },
  { id: 'Kue', image: '🍰', answer: 'K', choices: ['K', 'M', 'B'] },
  { id: 'Buah', image: '🍎', answer: 'B', choices: ['B', 'P', 'M'] },
  { id: 'Mangga', image: '🥭', answer: 'M', choices: ['M', 'B', 'P'] },
  { id: 'Pisang', image: '🍌', answer: 'P', choices: ['P', 'B', 'M'] },
  { id: 'Kelapa', image: '🥥', answer: 'K', choices: ['K', 'M', 'G'] },
  { id: 'Jeruk', image: '🍊', answer: 'J', choices: ['J', 'C', 'G'] },
  { id: 'Wortel', image: '🥕', answer: 'W', choices: ['W', 'K', 'M'] },
  { id: 'Ayam', image: '🐔', answer: 'A', choices: ['A', 'I', 'U'] },
  { id: 'Ikan', image: '🐟', answer: 'I', choices: ['I', 'A', 'U'] },
  { id: 'Telur', image: '🥚', answer: 'T', choices: ['T', 'D', 'K'] },
  { id: 'Bunga', image: '🌸', answer: 'B', choices: ['B', 'P', 'M'] },
  { id: 'Pohon', image: '🌳', answer: 'P', choices: ['P', 'B', 'M'] },
  { id: 'Rumput', image: '🌱', answer: 'R', choices: ['R', 'L', 'K'] },
  { id: 'Daun', image: '��', answer: 'D', choices: ['D', 'B', 'P'] },
  { id: 'Batu', image: '🪨', answer: 'B', choices: ['B', 'P', 'M'] },
  { id: 'Air', image: '🌊', answer: 'A', choices: ['A', 'I', 'U'] },
  { id: 'Matahari', image: '☀️', answer: 'M', choices: ['M', 'B', 'P'] },
  { id: 'Bulan', image: '🌙', answer: 'B', choices: ['B', 'M', 'P'] },
  { id: 'Bintang', image: '⭐', answer: 'B', choices: ['B', 'P', 'M'] },
  { id: 'Mobil', image: '🚗', answer: 'M', choices: ['M', 'B', 'K'] },
  { id: 'Sepeda', image: '🚲', answer: 'S', choices: ['S', 'M', 'B'] },
  { id: 'Bus', image: '🚌', answer: 'B', choices: ['B', 'M', 'K'] },
  { id: 'Kereta', image: '🚆', answer: 'K', choices: ['K', 'M', 'B'] },
  { id: 'Pesawat', image: '✈️', answer: 'P', choices: ['P', 'B', 'M'] },
  { id: 'Kapal', image: '⛵', answer: 'K', choices: ['K', 'M', 'B'] },
  { id: 'Boneka', image: '🧸', answer: 'B', choices: ['B', 'P', 'M'] },
  { id: 'Bola', image: '⚽', answer: 'B', choices: ['B', 'P', 'M'] },
  { id: 'Balok', image: '🧱', answer: 'B', choices: ['B', 'P', 'M'] },
  { id: 'Kunci', image: '🔑', answer: 'K', choices: ['K', 'M', 'B'] },
  { id: 'Gunting', image: '✂️', answer: 'G', choices: ['G', 'C', 'S'] },
  { id: 'Saputangan', image: '🧺', answer: 'S', choices: ['S', 'C', 'G'] },
  { id: 'Sabun', image: '🧼', answer: 'S', choices: ['S', 'C', 'B'] },
  { id: 'Sikat', image: '🪥', answer: 'S', choices: ['S', 'C', 'G'] },
  { id: 'Sampo', image: '🧴', answer: 'S', choices: ['S', 'C', 'G'] },
  { id: 'Handuk', image: '🧺', answer: 'H', choices: ['H', 'S', 'K'] },
  { id: 'Tisu', image: '🧻', answer: 'T', choices: ['T', 'K', 'S'] }
];


const generateAwalKataQuestions = (): Question[] => {
  return awalKataData.map(item => ({
    id: item.id.toLowerCase(),
    type: 'awal_kata' as const,
    prompt: 'Tebak huruf pertama dari kata yang didengar',
    display: '_' + item.id.slice(1).toLowerCase(),
    ttsText: item.id,
    answer: item.answer,
    choices: shuffleArray(item.choices),
    image: item.image,
    word: item.id,
    tags: ['awal_kata']
  }));
};

// Akhir Kata questions (150 questions)
const akhirKataData = awalKataData.slice(0, 150).map(item => {
  const lastChar = item.id[item.id.length - 1].toUpperCase();
  return {
    id: item.id,
    image: item.image,
    answer: lastChar,
    choices: [lastChar, 'N', 'G']
  };
});

const generateAkhirKataQuestions = (): Question[] => {
  return akhirKataData.map(item => ({
    id: item.id.toLowerCase() + '_akhir',
    type: 'akhir_kata' as const,
    prompt: 'Tebak huruf terakhir dari kata yang didengar',
    display: item.id.slice(0, -1).toLowerCase() + '_',
    ttsText: item.id,
    answer: item.answer,
    choices: shuffleArray(item.choices),
    image: item.image,
    word: item.id,
    tags: ['akhir_kata']
  }));
};

// Tengah Kata questions (150 questions) - from document
const tengahKataData = [
  { word: 'Mata', image: '👁️', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Hidung', image: '👃', answer: 'I', choices: ['I', 'A', 'U'] },
  { word: 'Mulut', image: '👄', answer: 'U', choices: ['U', 'O', 'A'] },
  { word: 'Telinga', image: '👂', answer: 'E', choices: ['E', 'A', 'I'] },
  { word: 'Tangan', image: '✋', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Kaki', image: '🦵', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Rambut', image: '💇', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Perut', image: '🫄', answer: 'E', choices: ['E', 'A', 'I'] },
  { word: 'Punggung', image: '🦴', answer: 'U', choices: ['U', 'O', 'A'] },
  { word: 'Lutut', image: '🦵', answer: 'U', choices: ['U', 'O', 'A'] },
  { word: 'Siku', image: '💪', answer: 'I', choices: ['I', 'A', 'U'] },
  { word: 'Jari', image: '👆', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Kuku', image: '💅', answer: 'U', choices: ['U', 'O', 'A'] },
  { word: 'Bahu', image: '💪', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Leher', image: '🧣', answer: 'E', choices: ['E', 'A', 'I'] },
  { word: 'Dagu', image: '🧔', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Dahi', image: '🤔', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Alis', image: '🙄', answer: 'L', choices: ['L', 'R', 'M'] },
  { word: 'Bibir', image: '👄', answer: 'I', choices: ['I', 'A', 'U'] },
  { word: 'Gigi', image: '🦷', answer: 'I', choices: ['I', 'A', 'U'] },
  { word: 'Lidah', image: '��', answer: 'I', choices: ['I', 'A', 'U'] },
  { word: 'Kepala', image: '🗣️', answer: 'E', choices: ['E', 'A', 'I'] },
  { word: 'Kursi', image: '🪑', answer: 'U', choices: ['U', 'O', 'A'] },
  { word: 'Meja', image: '🪑', answer: 'E', choices: ['E', 'A', 'I'] },
  { word: 'Pintu', image: '🚪', answer: 'I', choices: ['I', 'A', 'U'] },
  { word: 'Jendela', image: '🪟', answer: 'E', choices: ['E', 'A', 'I'] },
  { word: 'Lemari', image: '🗄️', answer: 'E', choices: ['E', 'A', 'I'] },
  { word: 'Kasur', image: '🛏️', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Bantal', image: '🛏️', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Cermin', image: '🪞', answer: 'E', choices: ['E', 'A', 'I'] },
  { word: 'Lampu', image: '💡', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Kipas', image: '🌀', answer: 'I', choices: ['I', 'A', 'U'] },
  { word: 'TV', image: '📺', answer: 'T', choices: ['T', 'D', 'K'] },
  { word: 'Radio', image: '📻', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Kompor', image: '🔥', answer: 'O', choices: ['O', 'A', 'I'] },
  { word: 'Wajan', image: '🍳', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Piring', image: '🍽️', answer: 'I', choices: ['I', 'A', 'U'] },
  { word: 'Gelas', image: '🥤', answer: 'E', choices: ['E', 'A', 'I'] },
  { word: 'Sendok', image: '🥄', answer: 'E', choices: ['E', 'A', 'I'] },
  { word: 'Garpu', image: '🍴', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Pisau', image: '🔪', answer: 'I', choices: ['I', 'A', 'U'] },
  { word: 'Nasi', image: '🍚', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Air', image: '💧', answer: 'I', choices: ['I', 'A', 'U'] },
  { word: 'Susu', image: '🥛', answer: 'U', choices: ['U', 'O', 'A'] },
  { word: 'Roti', image: '🍞', answer: 'O', choices: ['O', 'A', 'I'] },
  { word: 'Kue', image: '🍰', answer: 'U', choices: ['U', 'O', 'A'] },
  { word: 'Buah', image: '��', answer: 'U', choices: ['U', 'O', 'A'] },
  { word: 'Mangga', image: '🥭', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Pisang', image: '🍌', answer: 'I', choices: ['I', 'A', 'U'] },
  { word: 'Kelapa', image: '🥥', answer: 'E', choices: ['E', 'A', 'I'] },
  { word: 'Jeruk', image: '🍊', answer: 'E', choices: ['E', 'A', 'I'] },
  { word: 'Wortel', image: '🥕', answer: 'O', choices: ['O', 'A', 'I'] },
  { word: 'Ayam', image: '🐔', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Ikan', image: '🐟', answer: 'K', choices: ['K', 'G', 'C'] },
  { word: 'Telur', image: '🥚', answer: 'E', choices: ['E', 'A', 'I'] },
  { word: 'Bunga', image: '🌸', answer: 'U', choices: ['U', 'O', 'A'] },
  { word: 'Pohon', image: '🌳', answer: 'O', choices: ['O', 'A', 'I'] },
  { word: 'Rumput', image: '🌱', answer: 'U', choices: ['U', 'O', 'A'] },
  { word: 'Daun', image: '🍃', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Batu', image: '🪨', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Air', image: '🌊', answer: 'I', choices: ['I', 'A', 'U'] },
  { word: 'Matahari', image: '☀️', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Bulan', image: '🌙', answer: 'U', choices: ['U', 'O', 'A'] },
  { word: 'Bintang', image: '⭐', answer: 'I', choices: ['I', 'A', 'U'] },
  { word: 'Mobil', image: '🚗', answer: 'O', choices: ['O', 'A', 'I'] },
  { word: 'Sepeda', image: '🚲', answer: 'E', choices: ['E', 'A', 'I'] },
  { word: 'Bus', image: '🚌', answer: 'U', choices: ['U', 'O', 'A'] },
  { word: 'Kereta', image: '🚆', answer: 'E', choices: ['E', 'A', 'I'] },
  { word: 'Pesawat', image: '✈️', answer: 'E', choices: ['E', 'A', 'I'] },
  { word: 'Kapal', image: '⛵', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Boneka', image: '🧸', answer: 'O', choices: ['O', 'A', 'I'] },
  { word: 'Bola', image: '⚽', answer: 'O', choices: ['O', 'A', 'I'] },
  { word: 'Balok', image: '🧱', answer: 'A', choices: ['A', 'I', 'U'] },
  { word: 'Kunci', image: '🔑', answer: 'U', choices: ['U', 'O', 'A'] },
  { word: 'Kertas', image: '📄', answer: 'E', choices: ['E', 'A', 'I'] }
];


const generateTengahKataQuestions = (): Question[] => {
  return tengahKataData.map(item => {
    const middleIndex = Math.floor(item.word.length / 2);
    const display = item.word.slice(0, middleIndex) + '_' + item.word.slice(middleIndex + 1);
    
    return {
      id: item.word.toLowerCase() + '_tengah',
      type: 'tengah_kata' as const,
      prompt: 'Tebak huruf tengah dari kata yang didengar',
      display: display.toLowerCase(),
      ttsText: item.word,
      answer: item.answer,
      choices: shuffleArray(item.choices),
      image: item.image,
      word: item.word,
      tags: ['tengah_kata']
    };
  });
};

// Lengkapi Suku Kata Belakang questions (150 questions) - complete back syllables
const lengkapiSukuKataBelakangData = [
  { id: 'sapu', display: '__pu', answer: 'sa', choices: ['sa', 'si', 'se'], image: '🧹' },
  { id: 'buka', display: '__ka', answer: 'bu', choices: ['bu', 'ba', 'bo'], image: '📖' },
  { id: 'topi', display: '__pi', answer: 'to', choices: ['to', 'ta', 'ti'], image: '🎩' },
  { id: 'roda', display: '__da', answer: 'ro', choices: ['ro', 'ra', 'ri'], image: '🛞' },
  { id: 'baju', display: '__ju', answer: 'ba', choices: ['ba', 'bi', 'be'], image: '👕' },
  { id: 'mata', display: '__ta', answer: 'ma', choices: ['ma', 'mi', 'me'], image: '👁️' },
  { id: 'kaki', display: '__ki', answer: 'ka', choices: ['ka', 'ki', 'ke'], image: '🦵' },
  { id: 'nasi', display: '__si', answer: 'na', choices: ['na', 'ni', 'ne'], image: '🍚' },
  { id: 'gigi', display: '__gi', answer: 'gi', choices: ['gi', 'ga', 'ge'], image: '🦷' },
  { id: 'dada', display: '__da', answer: 'da', choices: ['da', 'di', 'de'], image: '🫁' },
  { id: 'mama', display: '__ma', answer: 'ma', choices: ['ma', 'mi', 'me'], image: '👩' },
  { id: 'papa', display: '__pa', answer: 'pa', choices: ['pa', 'pi', 'pe'], image: '👨' },
  { id: 'susu', display: '__su', answer: 'su', choices: ['su', 'si', 'se'], image: '🥛' },
  { id: 'kuku', display: '__ku', answer: 'ku', choices: ['ku', 'ka', 'ke'], image: '��' },
  { id: 'lala', display: '__la', answer: 'la', choices: ['la', 'li', 'le'], image: '🎵' },
  { id: 'tahu', display: '__hu', answer: 'ta', choices: ['ta', 'ti', 'te'], image: '🧈' },
  { id: 'soto', display: '__to', answer: 'so', choices: ['so', 'sa', 'si'], image: '🍲' },
  { id: 'kopi', display: '__pi', answer: 'ko', choices: ['ko', 'ka', 'ki'], image: '☕' },
  { id: 'teh', display: '__eh', answer: 't', choices: ['t', 'd', 'k'], image: '🍵' },
  { id: 'air', display: '__ir', answer: 'a', choices: ['a', 'i', 'e'], image: '💧' },
  { id: 'lari', display: '__ri', answer: 'la', choices: ['la', 'li', 'le'], image: '🏃' },
  { id: 'babi', display: '__bi', answer: 'ba', choices: ['ba', 'be', 'bo'], image: '🐖' },
  { id: 'cari', display: '__ri', answer: 'ca', choices: ['ca', 'ci', 'ce'], image: '🔍' },
  { id: 'duri', display: '__ri', answer: 'du', choices: ['du', 'di', 'de'], image: '🌵' },
  { id: 'foto', display: '__to', answer: 'fo', choices: ['fo', 'fa', 'fi'], image: '📷' },
  { id: 'guru', display: '__ru', answer: 'gu', choices: ['gu', 'ga', 'ge'], image: '👩‍🏫' },
  { id: 'hati', display: '__ti', answer: 'ha', choices: ['ha', 'hi', 'he'], image: '❤️' },
  { id: 'ikan', display: '__kan', answer: 'i', choices: ['i', 'e', 'a'], image: '🐟' },
  { id: 'jari', display: '__ri', answer: 'ja', choices: ['ja', 'ji', 'je'], image: '👆' },
  { id: 'kota', display: '__ta', answer: 'ko', choices: ['ko', 'ka', 'ki'], image: '🏙️' },
  { id: 'lucu', display: '__cu', answer: 'lu', choices: ['lu', 'la', 'le'], image: '😄' },
  { id: 'meja', display: '__ja', answer: 'me', choices: ['me', 'ma', 'mi'], image: '🪑' },
  { id: 'nada', display: '__da', answer: 'na', choices: ['na', 'ni', 'ne'], image: '🎵' },
  { id: 'pagi', display: '__gi', answer: 'pa', choices: ['pa', 'pi', 'pe'], image: '��' },
  { id: 'rusa', display: '__sa', answer: 'ru', choices: ['ru', 'ra', 'ri'], image: '🦌' },
  { id: 'sapi', display: '__pi', answer: 'sa', choices: ['sa', 'si', 'se'], image: '🐄' },
  { id: 'tangan', display: '__gan', answer: 'tan', choices: ['tan', 'tin', 'ten'], image: '✋' },
  { id: 'ular', display: '__lar', answer: 'u', choices: ['u', 'o', 'a'], image: '🐍' },
  { id: 'vas', display: '__as', answer: 'v', choices: ['v', 'f', 'w'], image: '🏺' },
  { id: 'wangi', display: '__gi', answer: 'wan', choices: ['wan', 'win', 'wen'], image: '🌸' },
  { id: 'bola', display: '__la', answer: 'bo', choices: ['bo', 'ba', 'bi'], image: '⚽' },
  { id: 'cinta', display: '__ta', answer: 'cin', choices: ['cin', 'can', 'cen'], image: '💕' },
  { id: 'dapur', display: '__pur', answer: 'da', choices: ['da', 'di', 'de'], image: '🍳' },
  { id: 'emas', display: '__mas', answer: 'e', choices: ['e', 'a', 'i'], image: '🏆' },
  { id: 'film', display: '__ilm', answer: 'f', choices: ['f', 'v', 'p'], image: '🎬' },
  { id: 'gula', display: '__la', answer: 'gu', choices: ['gu', 'ga', 'gi'], image: '🍯' },
  { id: 'hujan', display: '__jan', answer: 'hu', choices: ['hu', 'ha', 'hi'], image: '🌧️' },
  { id: 'jaket', display: '__ket', answer: 'ja', choices: ['ja', 'ji', 'je'], image: '��' },
  { id: 'kamar', display: '__mar', answer: 'ka', choices: ['ka', 'ki', 'ke'], image: '🛏️' },
  { id: 'laptop', display: '__top', answer: 'lap', choices: ['lap', 'lip', 'lep'], image: '💻' },
  { id: 'mobil', display: '__bil', answer: 'mo', choices: ['mo', 'ma', 'mi'], image: '🚗' },
  { id: 'novel', display: '__vel', answer: 'no', choices: ['no', 'na', 'ni'], image: '📚' },
  { id: 'pantai', display: '__tai', answer: 'pan', choices: ['pan', 'pin', 'pen'], image: '🏖️' },
  { id: 'rumah', display: '__mah', answer: 'ru', choices: ['ru', 'ra', 'ri'], image: '🏠' },
  { id: 'sepatu', display: '__patu', answer: 'se', choices: ['se', 'sa', 'si'], image: '👟' },
  { id: 'tas', display: '__as', answer: 't', choices: ['t', 'd', 'k'], image: '👜' },
  { id: 'uang', display: '__ang', answer: 'u', choices: ['u', 'o', 'a'], image: '💰' },
  { id: 'vitamin', display: '__tamin', answer: 'vi', choices: ['vi', 'va', 've'], image: '💊' },
  { id: 'warna', display: '__rna', answer: 'wa', choices: ['wa', 'wi', 'we'], image: '🎨' },
  { id: 'telepon', display: '__lepon', answer: 'te', choices: ['te', 'ta', 'ti'], image: '📞' },
  { id: 'kucing', display: '__cing', answer: 'ku', choices: ['ku', 'ka', 'ki'], image: '🐱' },
  { id: 'mangga', display: '__ngga', answer: 'ma', choices: ['ma', 'mi', 'me'], image: '🥭' },
  { id: 'pisang', display: '__sang', answer: 'pi', choices: ['pi', 'pa', 'pe'], image: '🍌' },
  { id: 'kelapa', display: '__lapa', answer: 'ke', choices: ['ke', 'ka', 'ki'], image: '🥥' },
  { id: 'jeruk', display: '__ruk', answer: 'je', choices: ['je', 'ja', 'ji'], image: '🍊' },
  { id: 'wortel', display: '__tel', answer: 'wo', choices: ['wo', 'wa', 'wi'], image: '🥕' },
  { id: 'ayam', display: '__yam', answer: 'a', choices: ['a', 'i', 'e'], image: '🐔' },
  { id: 'telur', display: '__lur', answer: 'te', choices: ['te', 'ta', 'ti'], image: '🥚' },
  { id: 'itik', display: '__tik', answer: 'i', choices: ['i', 'e', 'a'], image: '🦆' },
  { id: 'kambing', display: '__mbing', answer: 'ka', choices: ['ka', 'ki', 'ke'], image: '🐐' },
  { id: 'boneka', display: '__neka', answer: 'bo', choices: ['bo', 'ba', 'bi'], image: '🧸' },
  { id: 'balok', display: '__lok', answer: 'ba', choices: ['ba', 'bi', 'be'], image: '🧱' },
  { id: 'kunci', display: '__nci', answer: 'ku', choices: ['ku', 'ka', 'ki'], image: '🔑' },
  { id: 'lemari', display: '__mari', answer: 'le', choices: ['le', 'la', 'li'], image: '🗄️' },
  { id: 'kasur', display: '__sur', answer: 'ka', choices: ['ka', 'ki', 'ke'], image: '🛏️' },
  { id: 'bantal', display: '__ntal', answer: 'ba', choices: ['ba', 'be', 'bi'], image: '🛏️' },
  { id: 'cermin', display: '__rmin', answer: 'ce', choices: ['ce', 'ca', 'ci'], image: '🪞' },
  { id: 'lampu', display: '__mpu', answer: 'la', choices: ['la', 'li', 'le'], image: '💡' },
  { id: 'kipas', display: '__pas', answer: 'ki', choices: ['ki', 'ka', 'ke'], image: '🌀' },
  { id: 'tv', display: '__v', answer: 't', choices: ['t', 'd', 'k'], image: '📺' },
  { id: 'radio', display: '__dio', answer: 'ra', choices: ['ra', 'ri', 're'], image: '📻' },
  { id: 'kompor', display: '__mpor', answer: 'ko', choices: ['ko', 'ka', 'ki'], image: '🔥' },
  { id: 'wajan', display: '__jan', answer: 'wa', choices: ['wa', 'wi', 'we'], image: '🍳' },
  { id: 'piring', display: '__ring', answer: 'pi', choices: ['pi', 'pa', 'pe'], image: '🍽️' },
  { id: 'gelas', display: '__las', answer: 'ge', choices: ['ge', 'ga', 'gi'], image: '🥤' },
  { id: 'sendok', display: '__ndok', answer: 'se', choices: ['se', 'sa', 'si'], image: '🥄' },
  { id: 'garpu', display: '__rpu', answer: 'ga', choices: ['ga', 'gi', 'ge'], image: '🍴' },
  { id: 'pisau', display: '__sau', answer: 'pi', choices: ['pi', 'pa', 'pe'], image: '🔪' },
  { id: 'sapu', display: '__pu', answer: 'sa', choices: ['sa', 'si', 'se'], image: '🧹' },
  { id: 'ember', display: '__mber', answer: 'e', choices: ['e', 'a', 'i'], image: '🪣' },
  { id: 'kain', display: '__in', answer: 'ka', choices: ['ka', 'ki', 'ke'], image: '🧺' },
  { id: 'sabun', display: '__bun', answer: 'sa', choices: ['sa', 'si', 'se'], image: '🧼' },
  { id: 'sikat', display: '__kat', answer: 'si', choices: ['si', 'sa', 'se'], image: '🪥' },
  { id: 'sampo', display: '__mpo', answer: 'sa', choices: ['sa', 'si', 'se'], image: '🧴' },
  { id: 'handuk', display: '__nduk', answer: 'ha', choices: ['ha', 'hi', 'he'], image: '🧺' },
  { id: 'tisu', display: '__su', answer: 'ti', choices: ['ti', 'ta', 'te'], image: '🧻' },
  { id: 'susu', display: '__su', answer: 'su', choices: ['su', 'sa', 'si'], image: '🥛' },
  { id: 'roti', display: '__ti', answer: 'ro', choices: ['ro', 'ra', 'ri'], image: '🍞' },
  { id: 'kue', display: '__ue', answer: 'k', choices: ['k', 'g', 'h'], image: '🍰' },
  { id: 'buah', display: '__uah', answer: 'b', choices: ['b', 'p', 'd'], image: '🍎' },
  { id: 'air', display: '__ir', answer: 'a', choices: ['a', 'i', 'e'], image: '💧' },
  { id: 'topi', display: '__pi', answer: 'to', choices: ['to', 'ta', 'ti'], image: '🎩' },
  { id: 'jeruk', display: '__ruk', answer: 'je', choices: ['je', 'ja', 'ji'], image: '🍊' },
  { id: 'kupu', display: '__pu', answer: 'ku', choices: ['ku', 'ka', 'ki'], image: '🦋' },
  { id: 'rumah', display: '__mah', answer: 'ru', choices: ['ru', 'ra', 'ri'], image: '🏠' },
  { id: 'pisang', display: '__sang', answer: 'pi', choices: ['pi', 'pa', 'pe'], image: '🍌' },
  { id: 'kelapa', display: '__lapa', answer: 'ke', choices: ['ke', 'ka', 'ki'], image: '🥥' },
  { id: 'bunga', display: '__nga', answer: 'bu', choices: ['bu', 'ba', 'bi'], image: '🌸' },
  { id: 'hp', display: '__p', answer: 'h', choices: ['h', 'g', 'l'], image: '📱' },
  { id: 'boneka', display: '__neka', answer: 'bo', choices: ['bo', 'ba', 'bi'], image: '🧸' },
  { id: 'burung', display: '__rung', answer: 'bu', choices: ['bu', 'ba', 'bi'], image: '🐦' },
  { id: 'cangkir', display: '__ngkir', answer: 'ca', choices: ['ca', 'ci', 'ce'], image: '☕' },
  { id: 'kambing', display: '__mbing', answer: 'ka', choices: ['ka', 'ki', 'ke'], image: '🐐' },
  { id: 'mainan', display: '__inan', answer: 'ma', choices: ['ma', 'mi', 'me'], image: '🧸' },
  { id: 'piano', display: '__ano', answer: 'pi', choices: ['pi', 'pa', 'pe'], image: '🎹' },
  { id: 'ikan', display: '__kan', answer: 'i', choices: ['i', 'e', 'a'], image: '🐟' },
  { id: 'jalan', display: '__lan', answer: 'ja', choices: ['ja', 'ji', 'je'], image: '🛤️' },
  { id: 'laut', display: '__ut', answer: 'la', choices: ['la', 'li', 'le'], image: '🌊' },
  { id: 'kepala', display: '__pala', answer: 'ke', choices: ['ke', 'ka', 'ki'], image: '🗣️' },
  { id: 'pintu', display: '__ntu', answer: 'pi', choices: ['pi', 'pa', 'pe'], image: '🚪' },
  { id: 'rambut', display: '__mbut', answer: 'ra', choices: ['ra', 'ri', 're'], image: '💇' },
  { id: 'susu', display: '__su', answer: 'su', choices: ['su', 'sa', 'si'], image: '🥛' },
  { id: 'tangga', display: '__ngga', answer: 'ta', choices: ['ta', 'ti', 'te'], image: '🪜' },
  { id: 'angin', display: '__ngin', answer: 'a', choices: ['a', 'i', 'e'], image: '💨' },
  { id: 'vas', display: '__as', answer: 'v', choices: ['v', 'f', 'w'], image: '🏺' },
  { id: 'warna', display: '__rna', answer: 'wa', choices: ['wa', 'wi', 'we'], image: '🎨' },
  { id: 'kertas', display: '__rtas', answer: 'ke', choices: ['ke', 'ka', 'ki'], image: '📄' },
  { id: 'bola', display: '__la', answer: 'bo', choices: ['bo', 'ba', 'bi'], image: '⚽' },
  { id: 'zaitun', display: '__itun', answer: 'za', choices: ['za', 'zi', 'ze'], image: '🫒' }
];


const generateLengkapiSukuKataBelakangQuestions = (): Question[] => {
  return lengkapiSukuKataBelakangData.map(item => ({
    id: item.id + '_belakang',
    type: 'lengkapi_suku_kata_belakang' as const,
    prompt: 'Lengkapi bagian depan kata dengan suku kata yang tepat',
    display: item.display,
    ttsText: item.id,
    answer: item.answer,
    choices: shuffleArray(item.choices),
    image: item.image,
    word: item.id,
    level: 'mudah',
    tags: ['lengkapi_suku_kata_belakang']
  }));
};

// Lengkapi Suku Kata questions (150 questions) - from document
const lengkapiSukaKataData = [
  { id: 'sapu', display: 'sa__', answer: 'pu', choices: ['pu', 'pa', 'pi'], image: '🧹' },
  { id: 'buka', display: 'bu__', answer: 'ka', choices: ['ka', 'ki', 'ku'], image: '📖' },
  { id: 'topi', display: 'to__', answer: 'pi', choices: ['pi', 'pa', 'pe'], image: '🎩' },
  { id: 'roda', display: 'ro__', answer: 'da', choices: ['da', 'di', 'du'], image: '🛞' },
  { id: 'baju', display: 'ba__', answer: 'ju', choices: ['ju', 'ja', 'jo'], image: '👕' },
  { id: 'mata', display: 'ma__', answer: 'ta', choices: ['ta', 'ti', 'tu'], image: '👁️' },
  { id: 'kaki', display: 'ka__', answer: 'ki', choices: ['ki', 'ka', 'ko'], image: '🦵' },
  { id: 'nasi', display: 'na__', answer: 'si', choices: ['si', 'sa', 'se'], image: '🍚' },
  { id: 'gigi', display: 'gi__', answer: 'gi', choices: ['gi', 'ga', 'go'], image: '🦷' },
  { id: 'dada', display: 'da__', answer: 'da', choices: ['da', 'di', 'de'], image: '🫁' },
  { id: 'mama', display: 'ma__', answer: 'ma', choices: ['ma', 'mi', 'me'], image: '👩' },
  { id: 'papa', display: 'pa__', answer: 'pa', choices: ['pa', 'pi', 'pe'], image: '👨' },
  { id: 'susu', display: 'su__', answer: 'su', choices: ['su', 'si', 'se'], image: '🥛' },
  { id: 'kuku', display: 'ku__', answer: 'ku', choices: ['ku', 'ka', 'ki'], image: '💅' },
  { id: 'lala', display: 'la__', answer: 'la', choices: ['la', 'li', 'le'], image: '🎵' },
  { id: 'tahu', display: 'ta__', answer: 'hu', choices: ['hu', 'ha', 'hi'], image: '🧈' },
  { id: 'soto', display: 'so__', answer: 'to', choices: ['to', 'ta', 'ti'], image: '🍲' },
  { id: 'kopi', display: 'ko__', answer: 'pi', choices: ['pi', 'pa', 'pe'], image: '☕' },
  { id: 'teh', display: 'te__', answer: 'h', choices: ['h', 'k', 't'], image: '🍵' },
  { id: 'air', display: 'a__', answer: 'ir', choices: ['ir', 'ar', 'er'], image: '💧' },
  { id: 'lari', display: 'la__', answer: 'ri', choices: ['ri', 'ra', 're'], image: '🏃' },
  { id: 'babi', display: 'ba__', answer: 'bi', choices: ['bi', 'ba', 'be'], image: '🐖' },
  { id: 'cari', display: 'ca__', answer: 'ri', choices: ['ri', 'ra', 'ru'], image: '🔍' },
  { id: 'duri', display: 'du__', answer: 'ri', choices: ['ri', 'ra', 're'], image: '🌵' },
  { id: 'foto', display: 'fo__', answer: 'to', choices: ['to', 'ta', 'ti'], image: '📷' },
  { id: 'guru', display: 'gu__', answer: 'ru', choices: ['ru', 'ra', 're'], image: '👩‍🏫' },
  { id: 'hati', display: 'ha__', answer: 'ti', choices: ['ti', 'ta', 'te'], image: '❤️' },
  { id: 'ikan', display: 'i__', answer: 'kan', choices: ['kan', 'kin', 'ken'], image: '🐟' },
  { id: 'jari', display: 'ja__', answer: 'ri', choices: ['ri', 'ra', 're'], image: '👆' },
  { id: 'kota', display: 'ko__', answer: 'ta', choices: ['ta', 'ti', 'te'], image: '🏙️' },
  { id: 'lucu', display: 'lu__', answer: 'cu', choices: ['cu', 'ca', 'ci'], image: '😄' },
  { id: 'meja', display: 'me__', answer: 'ja', choices: ['ja', 'ji', 'je'], image: '🪑' },
  { id: 'nada', display: 'na__', answer: 'da', choices: ['da', 'di', 'de'], image: '🎵' },
  { id: 'pagi', display: 'pa__', answer: 'gi', choices: ['gi', 'ga', 'ge'], image: '🌅' },
  { id: 'rusa', display: 'ru__', answer: 'sa', choices: ['sa', 'si', 'se'], image: '🦌' },
  { id: 'sapi', display: 'sa__', answer: 'pi', choices: ['pi', 'pa', 'pe'], image: '🐄' },
  { id: 'tangan', display: 'tan__', answer: 'gan', choices: ['gan', 'gin', 'gen'], image: '✋' },
  { id: 'ular', display: 'u__', answer: 'lar', choices: ['lar', 'lir', 'ler'], image: '🐍' },
  { id: 'vas', display: 'v__', answer: 'as', choices: ['as', 'is', 'es'], image: '🏺' },
  { id: 'wangi', display: 'wan__', answer: 'gi', choices: ['gi', 'ga', 'ge'], image: '🌸' },
  { id: 'bola', display: 'bo__', answer: 'la', choices: ['la', 'li', 'le'], image: '⚽' },
  { id: 'cinta', display: 'cin__', answer: 'ta', choices: ['ta', 'ti', 'te'], image: '💕' },
  { id: 'dapur', display: 'da__', answer: 'pur', choices: ['pur', 'pir', 'per'], image: '🍳' },
  { id: 'emas', display: 'e__', answer: 'mas', choices: ['mas', 'mis', 'mes'], image: '��' },
  { id: 'film', display: 'f__', answer: 'ilm', choices: ['ilm', 'alm', 'elm'], image: '🎬' },
  { id: 'gula', display: 'gu__', answer: 'la', choices: ['la', 'li', 'le'], image: '🍯' },
  { id: 'hujan', display: 'hu__', answer: 'jan', choices: ['jan', 'jin', 'jen'], image: '🌧️' },
  { id: 'jaket', display: 'ja__', answer: 'ket', choices: ['ket', 'kit', 'kat'], image: '🧥' },
  { id: 'kamar', display: 'ka__', answer: 'mar', choices: ['mar', 'mir', 'mer'], image: '🛏️' },
  { id: 'laptop', display: 'lap__', answer: 'top', choices: ['top', 'tip', 'tap'], image: '💻' },
  { id: 'mobil', display: 'mo__', answer: 'bil', choices: ['bil', 'bal', 'bel'], image: '🚗' },
  { id: 'novel', display: 'no__', answer: 'vel', choices: ['vel', 'val', 'vil'], image: '📚' },
  { id: 'pantai', display: 'pan__', answer: 'tai', choices: ['tai', 'tii', 'tai'], image: '🏖️' },
  { id: 'rumah', display: 'ru__', answer: 'mah', choices: ['mah', 'mih', 'meh'], image: '🏠' },
  { id: 'sepatu', display: 'se__', answer: 'patu', choices: ['patu', 'pitu', 'petu'], image: '👟' },
  { id: 'tas', display: 't__', answer: 'as', choices: ['as', 'is', 'es'], image: '👜' },
  { id: 'uang', display: 'u__', answer: 'ang', choices: ['ang', 'ing', 'eng'], image: '��' },
  { id: 'vitamin', display: 'vi__', answer: 'tamin', choices: ['tamin', 'timin', 'teman'], image: '💊' },
  { id: 'warna', display: 'wa__', answer: 'rna', choices: ['rna', 'rni', 'rne'], image: '🎨' },
  { id: 'telepon', display: 'te__', answer: 'lepon', choices: ['lepon', 'lapon', 'lipon'], image: '📞' },
  { id: 'kucing', display: 'ku__', answer: 'cing', choices: ['cing', 'cang', 'cing'], image: '🐱' },
  { id: 'mangga', display: 'ma__', answer: 'ngga', choices: ['ngga', 'nggi', 'ngge'], image: '🥭' },
  { id: 'pisang', display: 'pi__', answer: 'sang', choices: ['sang', 'sing', 'seng'], image: '🍌' },
  { id: 'kelapa', display: 'ke__', answer: 'lapa', choices: ['lapa', 'lipa', 'lepa'], image: '🥥' },
  { id: 'jeruk', display: 'je__', answer: 'ruk', choices: ['ruk', 'rik', 'rek'], image: '🍊' },
  { id: 'wortel', display: 'wo__', answer: 'tel', choices: ['tel', 'til', 'tel'], image: '🥕' },
  { id: 'ayam', display: 'a__', answer: 'yam', choices: ['yam', 'yim', 'yem'], image: '🐔' },
  { id: 'telur', display: 'te__', answer: 'lur', choices: ['lur', 'lar', 'ler'], image: '🥚' },
  { id: 'itik', display: 'i__', answer: 'tik', choices: ['tik', 'tak', 'tik'], image: '🦆' },
  { id: 'kambing', display: 'ka__', answer: 'mbing', choices: ['mbing', 'mbang', 'mbeng'], image: '🐐' },
  { id: 'boneka', display: 'bo__', answer: 'neka', choices: ['neka', 'nika', 'neka'], image: '🧸' },
  { id: 'balok', display: 'ba__', answer: 'lok', choices: ['lok', 'lak', 'lek'], image: '🧱' },
  { id: 'kunci', display: 'ku__', answer: 'nci', choices: ['nci', 'nca', 'nce'], image: '🔑' },
  { id: 'lemari', display: 'le__', answer: 'mari', choices: ['mari', 'miri', 'meri'], image: '🗄️' },
  { id: 'kasur', display: 'ka__', answer: 'sur', choices: ['sur', 'sar', 'sir'], image: '🛏️' },
  { id: 'bantal', display: 'ba__', answer: 'ntal', choices: ['ntal', 'ntel', 'nten'], image: '🛏️' },
  { id: 'cermin', display: 'ce__', answer: 'rmin', choices: ['rmin', 'rman', 'rmen'], image: '🪞' },
  { id: 'lampu', display: 'la__', answer: 'mpu', choices: ['mpu', 'mpa', 'mpi'], image: '💡' },
  { id: 'kipas', display: 'ki__', answer: 'pas', choices: ['pas', 'pis', 'pes'], image: '🌀' },
  { id: 'tv', display: 't__', answer: 'v', choices: ['v', 'f', 'w'], image: '📺' },
  { id: 'radio', display: 'ra__', answer: 'dio', choices: ['dio', 'dia', 'die'], image: '��' },
  { id: 'kompor', display: 'ko__', answer: 'mpor', choices: ['mpor', 'mpir', 'mper'], image: '🔥' },
  { id: 'wajan', display: 'wa__', answer: 'jan', choices: ['jan', 'jin', 'jen'], image: '🍳' },
  { id: 'piring', display: 'pi__', answer: 'ring', choices: ['ring', 'rang', 'reng'], image: '🍽️' },
  { id: 'gelas', display: 'ge__', answer: 'las', choices: ['las', 'lis', 'les'], image: '🥤' },
  { id: 'sendok', display: 'se__', answer: 'ndok', choices: ['ndok', 'ndak', 'ndek'], image: '🥄' },
  { id: 'garpu', display: 'ga__', answer: 'rpu', choices: ['rpu', 'rpa', 'rpi'], image: '🍴' },
  { id: 'pisau', display: 'pi__', answer: 'sau', choices: ['sau', 'sai', 'sei'], image: '🔪' },
  { id: 'sapu', display: 'sa__', answer: 'pu', choices: ['pu', 'pa', 'pi'], image: '🧹' },
  { id: 'ember', display: 'e__', answer: 'mber', choices: ['mber', 'mbir', 'mber'], image: '🪣' },
  { id: 'kain', display: 'ka__', answer: 'in', choices: ['in', 'an', 'en'], image: '🧺' },
  { id: 'sabun', display: 'sa__', answer: 'bun', choices: ['bun', 'ban', 'ben'], image: '🧼' },
  { id: 'sikat', display: 'si__', answer: 'kat', choices: ['kat', 'kit', 'ket'], image: '🪥' },
  { id: 'sampo', display: 'sa__', answer: 'mpo', choices: ['mpo', 'mpa', 'mpi'], image: '🧴' },
  { id: 'handuk', display: 'ha__', answer: 'nduk', choices: ['nduk', 'ndak', 'ndek'], image: '🧺' },
  { id: 'tisu', display: 'ti__', answer: 'su', choices: ['su', 'sa', 'si'], image: '🧻' },
  { id: 'susu', display: 'su__', answer: 'su', choices: ['su', 'sa', 'si'], image: '🥛' },
  { id: 'roti', display: 'ro__', answer: 'ti', choices: ['ti', 'ta', 'te'], image: '🍞' },
  { id: 'kue', display: 'k__', answer: 'ue', choices: ['ue', 'ua', 'ui'], image: '🍰' },
  { id: 'buah', display: 'b__', answer: 'uah', choices: ['uah', 'uih', 'ueh'], image: '🍎' },
  { id: 'air', display: 'a__', answer: 'ir', choices: ['ir', 'ar', 'er'], image: '💧' },
  { id: 'topi', display: 'to__', answer: 'pi', choices: ['pi', 'pa', 'pe'], image: '🎩' },
  { id: 'jeruk', display: 'je__', answer: 'ruk', choices: ['ruk', 'rik', 'rek'], image: '🍊' },
  { id: 'kupu', display: 'ku__', answer: 'pu', choices: ['pu', 'pa', 'pi'], image: '🦋' },
  { id: 'rumah', display: 'ru__', answer: 'mah', choices: ['mah', 'mih', 'meh'], image: '🏠' },
  { id: 'pisang', display: 'pi__', answer: 'sang', choices: ['sang', 'sing', 'seng'], image: '🍌' },
  { id: 'kelapa', display: 'ke__', answer: 'lapa', choices: ['lapa', 'lipa', 'lepa'], image: '🥥' },
  { id: 'bunga', display: 'bu__', answer: 'nga', choices: ['nga', 'ngi', 'nge'], image: '🌸' },
  { id: 'hp', display: 'h__', answer: 'p', choices: ['p', 'b', 'f'], image: '📱' },
  { id: 'boneka', display: 'bo__', answer: 'neka', choices: ['neka', 'nika', 'neka'], image: '🧸' },
  { id: 'burung', display: 'bu__', answer: 'rung', choices: ['rung', 'rang', 'ring'], image: '🐦' },
  { id: 'cangkir', display: 'ca__', answer: 'ngkir', choices: ['ngkir', 'ngkar', 'ngker'], image: '☕' },
  { id: 'kambing', display: 'ka__', answer: 'mbing', choices: ['mbing', 'mbang', 'mbeng'], image: '🐐' },
  { id: 'mainan', display: 'ma__', answer: 'inan', choices: ['inan', 'inen', 'inan'], image: '🧸' },
  { id: 'piano', display: 'pi__', answer: 'ano', choices: ['ano', 'ani', 'ane'], image: '🎹' },
  { id: 'ikan', display: 'i__', answer: 'kan', choices: ['kan', 'kin', 'ken'], image: '🐟' },
  { id: 'jalan', display: 'ja__', answer: 'lan', choices: ['lan', 'lin', 'len'], image: '🛤️' },
  { id: 'laut', display: 'la__', answer: 'ut', choices: ['ut', 'at', 'it'], image: '🌊' },
  { id: 'kepala', display: 'ke__', answer: 'pala', choices: ['pala', 'pila', 'pela'], image: '🗣️' },
  { id: 'pintu', display: 'pi__', answer: 'ntu', choices: ['ntu', 'nta', 'nti'], image: '🚪' },
  { id: 'rambut', display: 'ra__', answer: 'mbut', choices: ['mbut', 'mbat', 'mbit'], image: '💇' },
  { id: 'susu', display: 'su__', answer: 'su', choices: ['su', 'sa', 'si'], image: '🥛' },
  { id: 'tangga', display: 'ta__', answer: 'ngga', choices: ['ngga', 'nggi', 'ngge'], image: '🪜' },
  { id: 'angin', display: 'a__', answer: 'ngin', choices: ['ngin', 'ngan', 'ngen'], image: '💨' },
  { id: 'vas', display: 'v__', answer: 'as', choices: ['as', 'is', 'es'], image: '🏺' },
  { id: 'warna', display: 'wa__', answer: 'rna', choices: ['rna', 'rni', 'rne'], image: '🎨' },
  { id: 'kertas', display: 'ke__', answer: 'rtas', choices: ['rtas', 'rtis', 'rtes'], image: '📄' },
  { id: 'bola', display: 'bo__', answer: 'la', choices: ['la', 'li', 'le'], image: '⚽' },
  { id: 'zaitun', display: 'za__', answer: 'itun', choices: ['itun', 'itan', 'iten'], image: '🫒' }
];


const generateLengkapiSukaKataQuestions = (): Question[] => {
  return lengkapiSukaKataData.map(item => ({
    id: item.id,
    type: 'lengkapi_suku_kata' as const,
    prompt: 'Lengkapi kata dengan suku kata yang tepat',
    display: item.display,
    ttsText: item.id,
    answer: item.answer,
    choices: shuffleArray(item.choices),
    image: item.image,
    word: item.id,
    level: 'mudah',
    tags: ['lengkapi_suku_kata']
  }));
};

export const generateQuizQuestions = (
  quizType: string,
  count: number,
  seenIds: Set<string>
): Question[] => {
  let allQuestions: Question[] = [];
  
  switch (quizType) {
    case 'suku_kata':
      allQuestions = generateSukaKataQuestions();
      break;
    case 'awal_kata':
      allQuestions = generateAwalKataQuestions();
      break;
    case 'akhir_kata':
      allQuestions = generateAkhirKataQuestions();
      break;
    case 'tengah_kata':
      allQuestions = generateTengahKataQuestions();
      break;
    case 'lengkapi_suku_kata':
      allQuestions = generateLengkapiSukaKataQuestions();
      break;
    case 'lengkapi_suku_kata_belakang':
      allQuestions = generateLengkapiSukuKataBelakangQuestions();
      break;
  }
  
  // Filter out seen questions if remember setting is enabled
  const availableQuestions = allQuestions.filter(q => !seenIds.has(q.id));
  
  // If not enough unseen questions, use all questions
  const questionsToUse = availableQuestions.length >= count 
    ? availableQuestions 
    : allQuestions;
  
  // Shuffle and select requested count
  const shuffled = shuffleArray(questionsToUse);
  return shuffled.slice(0, count);
};

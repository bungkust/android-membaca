import { QuizDefinition } from '../types';
import { metadata } from './metadata';
import { generateAkhirKataQuestions } from './generator';
import { filterAndSelectQuestions } from '../utils';

const akhirKataQuiz: QuizDefinition = {
  metadata,
  generateQuestions: (count: number, seenIds: Set<string>) => {
    const allQuestions = generateAkhirKataQuestions();
    return filterAndSelectQuestions(allQuestions, count, seenIds);
  },
};

export function getQuizDefinition(): QuizDefinition {
  return akhirKataQuiz;
}

export default akhirKataQuiz;


import { QuizDefinition } from '../types';
import { metadata } from './metadata';
import { generateSukaKataQuestions } from './generator';
import { filterAndSelectQuestions } from '../utils';

const sukuKataQuiz: QuizDefinition = {
  metadata,
  generateQuestions: (count: number, seenIds: Set<string>) => {
    const allQuestions = generateSukaKataQuestions();
    return filterAndSelectQuestions(allQuestions, count, seenIds);
  },
};

export function getQuizDefinition(): QuizDefinition {
  return sukuKataQuiz;
}

export default sukuKataQuiz;


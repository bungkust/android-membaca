import { QuizDefinition } from '../types';
import { metadata } from './metadata';
import { generateAwalKataQuestions } from './generator';
import { filterAndSelectQuestions } from '../utils';

const awalKataQuiz: QuizDefinition = {
  metadata,
  generateQuestions: (count: number, seenIds: Set<string>) => {
    const allQuestions = generateAwalKataQuestions();
    return filterAndSelectQuestions(allQuestions, count, seenIds);
  },
};

export function getQuizDefinition(): QuizDefinition {
  return awalKataQuiz;
}

export default awalKataQuiz;


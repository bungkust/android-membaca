import { QuizDefinition } from '../types';
import { metadata } from './metadata';

const mengenalSukuKataQuiz: QuizDefinition = {
  metadata,
  // No generateQuestions - this is a special interactive quiz
};

export function getQuizDefinition(): QuizDefinition {
  return mengenalSukuKataQuiz;
}

export default mengenalSukuKataQuiz;


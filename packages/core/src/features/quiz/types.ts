import { Question } from "../../types/quiz";

/**
 * Metadata for quiz display in UI
 */
export interface QuizMetadata {
  id: string;
  emoji: string;
  title: string;
  description: string;
  count: string;
  badge: string;
  gradient: string;
  // Optional customizations
  isSpecial?: boolean; // For quizzes like mengenal_suku_kata that don't use Question system
  routeTo?: string; // Custom routing, e.g., 'MENGENAL_SUKU_KATA'
  minQuestions?: number;
  maxQuestions?: number;
  defaultQuestions?: number;
}

/**
 * Complete quiz definition with metadata and generator
 */
export interface QuizDefinition {
  metadata: QuizMetadata;
  generateQuestions?: (count: number, seenIds: Set<string>) => Question[];
  validateQuestion?: (question: Question) => boolean;
}

/**
 * Type for special quizzes that don't generate questions
 */
export type SpecialQuizType = 'mengenal_suku_kata';


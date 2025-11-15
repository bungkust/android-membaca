import { Question } from "../../../types/quiz";
import { shuffleArray } from '../utils';
import { lengkapiSukuKataBelakangData } from './data';

export function generateLengkapiSukuKataBelakangQuestions(): Question[] {
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
}


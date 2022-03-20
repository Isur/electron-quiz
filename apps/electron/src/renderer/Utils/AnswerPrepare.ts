import { PreparedQuestion, Question } from '../Data/questions.interface';
import Shuffle from './Shuffle';

export default (questions: Question[]) => {
  const prepared: PreparedQuestion[] = questions.map((q) => ({
    correct: q.correct,
    text: q.text,
    answers: Shuffle(
      q.answers.map((ans, index) => ({
        id: index,
        text: ans,
      }))
    ),
  }));

  return Shuffle(prepared);
};

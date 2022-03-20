import { useState, useEffect, FunctionComponent } from 'react';
import { QuestionWrapper, Button } from 'ui';
import { PreparedQuestion as QuestionType } from '../Data/questions.interface';
import Answers from './Answers';

interface Props {
  question: QuestionType;
  finalScore: string;
  onNext: () => void;
  correctUpdate: () => void;
}

const Question: FunctionComponent<Props> = ({
  question,
  onNext,
  correctUpdate,
  finalScore,
}) => {
  const [answerIsCorrect, setAnswerisCorrect] = useState<boolean>(false);
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(null);

  useEffect(() => {
    setAlertOpen(false);
    setAnswerisCorrect(false);
  }, [question]);

  const verify = (answer: number) => {
    if (alertOpen) return;
    setSelected(answer);

    if (answer === question.correct) {
      setAnswerisCorrect(true);
      correctUpdate();
    } else {
      setAnswerisCorrect(false);
    }

    setAlertOpen(true);
  };

  const listener = (e: KeyboardEvent) => {
    if (e.key === '1') {
      verify(question.answers[0].id);
    } else if (e.key === '2') {
      verify(question.answers[1].id);
    } else if (e.key === '3') {
      verify(question.answers[2].id);
    } else if (e.key === 'Enter') {
      if (alertOpen && onNext) {
        onNext();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', listener);
    return () => {
      window.removeEventListener('keydown', listener);
    };
  });

  const isCorrect = alertOpen && answerIsCorrect;
  const isIncorrect = alertOpen && !answerIsCorrect;

  return (
    <QuestionWrapper>
      <h2 className="question-text"> {question.text} </h2>
      <>
        <Answers
          answers={question.answers}
          isCorrect={isCorrect}
          isIncorrect={isIncorrect}
          selected={selected}
          verify={verify}
        />
      </>
      {alertOpen && onNext && (
        <Button text="Next" onClick={onNext} className="next" />
      )}
      {alertOpen && !onNext && (
        <h2 className="next">
          <p>It was the last one. Refresh app to start again. Ctrl + R</p>
          <p>Score: {finalScore}</p>
        </h2>
      )}
    </QuestionWrapper>
  );
};

export default Question;

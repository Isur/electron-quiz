import { FunctionComponent } from 'react';
import { Button } from 'ui';

interface Answer {
  id: number;
  text: string;
}

interface Props {
  answers: Answer[];
  isCorrect: boolean;
  isIncorrect: boolean;
  selected: number;
  verify: (num: number) => void;
}
const Answers: FunctionComponent<Props> = ({
  answers,
  isCorrect,
  isIncorrect,
  selected,
  verify,
}) => {
  return (
    <>
      {answers.map((ans) => (
        <Button
          key={ans.text}
          text={ans.text}
          correct={ans.id === selected && isCorrect}
          incorrect={ans.id === selected && isIncorrect}
          onClick={() => verify(ans.id)}
        />
      ))}
    </>
  );
};

export default Answers;

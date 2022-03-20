import { useState, FunctionComponent } from 'react';
import styled from 'styled-components';
import Question from '../Components/Question';
import { Questions } from '../Data/questions.interface';

interface Props {
  data: Questions;
}

const StyledPage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .statsContainer {
    position: fixed;
    align-self: flex-start;
  }
`;

const QuestionPage: FunctionComponent<Props> = ({ data }) => {
  const [current, setCurrent] = useState<number>(0);
  const [correctCounter, setCorrectCounter] = useState<number>(0);

  const next = () => {
    if (current < data.questions.length - 1) {
      setCurrent((curr) => curr + 1);
    }
  };

  const showNext = current < data.questions.length - 1;
  const finalScore = `${correctCounter}/${data.questions.length}`;
  return (
    <StyledPage>
      <div className="statsContainer">
        <h2>
          {current + 1} / {data.questions.length}
        </h2>
        <h2>
          {correctCounter} / {current + 1}
        </h2>
      </div>
      <Question
        question={data.questions[current]}
        onNext={showNext ? next : null}
        finalScore={finalScore}
        key={current}
        correctUpdate={() => setCorrectCounter((c) => c + 1)}
      />
    </StyledPage>
  );
};

export default QuestionPage;

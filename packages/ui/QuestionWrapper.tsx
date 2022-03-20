import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { StyledButton } from "./Button";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const StyledQuestionWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 90%;
  ${StyledButton} {
    width: 80%;
    margin: 10px;
    &:hover {
      background: ${(props) => props.theme.colors.primary};
    }
  }
  .next {
    margin-top: auto;
  }
  .question-text {
    width: 80%;
    text-align: center;
  }
`;

export const QuestionWrapper: FunctionComponent<Props> = ({
  children,
  ...props
}) => {
  return (
    <StyledQuestionWrapper onKeyDown={props.onKeyDown}>
      {" "}
      {children}{" "}
    </StyledQuestionWrapper>
  );
};

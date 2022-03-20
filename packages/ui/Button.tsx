import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
  onClick?: () => void;
  correct?: boolean;
  incorrect?: boolean;
  className?: string;
}

export const StyledButton = styled.button<{
  primary?: boolean;
  correct?: boolean;
  incorrect?: boolean;
}>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.secondary};
  padding: 0.25em 1em;
  font-size: 32px;

  ${(props) => {
    if (props.correct || props.incorrect)
      return `
      color: ${props.theme.colors[props.correct ? "correct" : "incorrect"]};
      border-color: ${
        props.theme.colors[props.correct ? "correct" : "incorrect"]
      }
    `;
    else if (props.primary)
      return `
      background: palevioletred;
      color: ${props.theme.colors.primary};
      border-color: ${props.theme.colors.primary}
    `;
  }}
`;

export const Button: React.FunctionComponent<Props> = ({
  text,
  onClick,
  correct,
  incorrect,
  className,
}) => {
  return (
    <StyledButton
      correct={correct}
      incorrect={incorrect}
      onClick={onClick}
      className={className}
    >
      {" "}
      {text}{" "}
    </StyledButton>
  );
};

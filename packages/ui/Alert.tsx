import { FunctionComponent } from "react";
import styled from "styled-components";

interface Props {
  open?: boolean;
  success?: boolean;
}

const StyledAlert = styled.div<Props>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid
    ${(props) => props.theme.colors[props.success ? "correct" : "incorrect"]};
  color: ${(props) =>
    props.theme.colors[props.success ? "correct" : "incorrect"]};
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 32px;

  ${(props) => {
    if (!props.open) {
      return `
            display: None;
          `;
    }
  }}
`;

export const Alert: FunctionComponent<Props> = ({ open, success }) => {
  return (
    <StyledAlert open={open} success={success}>
      {success ? "Correct!" : "Failed!"}
    </StyledAlert>
  );
};

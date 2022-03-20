import React from "react";
import styled from "styled-components";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

interface Props {
  dark: boolean;
  onClick?: () => void;
}

const StyledIconButton = styled.button<{ primary?: boolean }>`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 32px;
`;

export const ThemeButton: React.FunctionComponent<Props> = ({
  dark,
  onClick,
}) => {
  return (
    <StyledIconButton onClick={onClick}>
      {!dark ? <MdDarkMode /> : <MdOutlineDarkMode />}
    </StyledIconButton>
  );
};

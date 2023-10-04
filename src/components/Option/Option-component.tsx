import _ from "lodash";
import React from "react";
import styled from "styled-components";

const OptionStyle = styled.div<{ selected?: boolean; disabled: boolean }>`
  padding: 10px;
  color: black;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? "0.4" : "1")};
`;

interface PropsType {
  onMouseDown?: (e: React.MouseEvent) => void;
  children: string | JSX.Element | JSX.Element[];
  disabled: boolean;
}

const Option = ({ disabled, onMouseDown, children }: PropsType) => {
  return (
    <OptionStyle
      disabled={disabled}
      className="rasha-option"
      onMouseDown={(e) => {
        if (!disabled && _.isFunction(onMouseDown)) {
          onMouseDown(e);
        }
      }}>
      {children}
    </OptionStyle>
  );
};

export default Option;

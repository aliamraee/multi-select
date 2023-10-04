import _ from "lodash";
import { MouseEvent } from "react";
import { OptionStyle } from "./Option-style";

interface PropsType {
  onMouseDown?: (e: MouseEvent) => void;
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

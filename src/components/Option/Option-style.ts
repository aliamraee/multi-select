import styled from "styled-components";

const OptionStyle = styled.div<{ selected?: boolean; disabled: boolean }>`
  color: black;
  padding: 10px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? "0.4" : "1")};
`;

export {
    OptionStyle
}
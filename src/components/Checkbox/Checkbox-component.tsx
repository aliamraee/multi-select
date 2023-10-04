import { ChangeEvent } from "react";
import styled from "styled-components";

const CheckboxContainer = styled.label<{ disabled: boolean | undefined }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const CheckboxInput = styled.input<{ disabled: boolean | undefined }>`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:checked {
    background-color: #346dffa6;
  }
`;

const CheckboxText = styled.span`
  font-size: 16px;
`;

interface PropsType {
  label: string;
  checked: boolean;
  onChange?: (event: ChangeEvent) => void;
  disabled?: boolean | undefined;
}

const Checkbox = ({ label, checked, onChange, disabled }: PropsType) => {
  return (
    <CheckboxContainer disabled={disabled}>
      <CheckboxInput
        type="checkbox"
        className="rasha-checkbox"
        checked={checked}
        disabled={disabled}
        readOnly
        onChange={onChange}
      />
      <CheckboxText className="rasha-checkbox-label">{label}</CheckboxText>
    </CheckboxContainer>
  );
};

export default Checkbox;

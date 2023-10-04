import styled from "styled-components";

const SelectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Dropdown = styled.div<{
  isOpen: boolean;
}>`
  box-sizing: border-box;
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  max-height: 150px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 1;
  background-color: #fff;
  border: 1px solid #eae4e4;
  border-radius: 8px;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #ffffff;
  font-size: 16px;
`;

const SelectedOptions = styled.div<{ showSearch: boolean, disabled: boolean | undefined }>`
  min-height: 38px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 4px 8px;
  background-color: #fff;
  border: 1px solid #eae4e4;
  border-radius: 8px;
  cursor:${({ showSearch, disabled }) => disabled ? "not-allowed" : showSearch ? "text" : "pointer"};
  opacity:${({ disabled }) => disabled ? "0.4" : "1"};
  padding-right: 20px;

  .rasha-single-selected {
    position: absolute;
    top: 50%;
    left: 38px;
    transform: translate(-50%, -50%);
  }
`;

const ClearAllButton = styled.span<{ disabled: boolean | undefined }>`
  margin-left: 4px;
  cursor: pointer;
  position: absolute;
  top: calc(50% - 12px);
  user-select: none;
  right: 10px;
  cursor:${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  opacity:${({ disabled }) => disabled ? "0.4" : "1"};

`;

const ScrollableContainer = styled.div`
  max-height: 150px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #007bff #f0f0f0;

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 4px;

  }

  &::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 4px;

  }

  &::-webkit-scrollbar-thumb {
    background-color: #007bff;
    border-radius: 4px;
  }
`;

const Placeholder = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.25);
  user-select: none;
`;
const EmptyState = styled.div`
  text-align: center;
  color: rgba(0, 0, 0, 0.25);
  padding: 16px;
`;


const SuffixIcon = styled.span`
  margin-left: 4px;
  position: absolute;
  top: calc(50% - 8px);
  right: 10px;
  user-select: none;

  img{
    width:16px;
    height:16px;
  }
`;

export {
  ScrollableContainer,
  ClearAllButton,
  SelectedOptions,
  Input,
  SelectContainer,
  Dropdown,
  Placeholder,
  EmptyState,
  SuffixIcon
};

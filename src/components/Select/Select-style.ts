import styled from "styled-components";

const SelectContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Dropdown = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  max-height: 160px;
  border-radius: 8px;
  top: 110%;
  left: 0;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #e7e1e1;
  box-shadow: 0 6px 16px 0 #78757533;
`;

const Input = styled.input`
  background: white;
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;

`;

const SelectedOptions = styled.div<{ showSearch: boolean, disabled: boolean | undefined }>`
  min-height: 38px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 4px 10px;
  background: white;
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
  top: calc(50% - 8px);
  user-select: none;
  right: 10px;
  cursor:${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  opacity:${({ disabled }) => disabled ? "0.4" : "1"};

`;

const Scrollbar = styled.div`
  max-height: 150px;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 4px;

  }

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 4px;

  }

  &::-webkit-scrollbar-thumb {
    background: #008bff;
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
  color: rgba(0, 0, 0, 0.50);
  user-select: none;
`;
const EmptyState = styled.div`
  text-align: center;
  color: #c2c2c2;
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
  Scrollbar,
  ClearAllButton,
  SelectedOptions,
  Input,
  SelectContainer,
  Dropdown,
  Placeholder,
  EmptyState,
  SuffixIcon
};

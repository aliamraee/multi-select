import styled from "styled-components";

const TagRoot = styled.div<{ background: string, disabled: boolean | undefined }>`
  padding: 6px 10px;
  background-color: ${({ background }) => background};
  border-radius: 8px;
  margin-right: 4px;
  display: flex;
  align-items: center;
  color: white;
  box-shadow: 0px 0px 5px #009fff3b;
  cursor:${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  width: max-content;
  
`;

const RemoveTagButton = styled.div<{ disabled: boolean | undefined }>`
cursor:${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  margin-left: 4px;
`;

export { RemoveTagButton, TagRoot };

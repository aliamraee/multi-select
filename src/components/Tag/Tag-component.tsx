import { RemoveTagButton, TagRoot } from "./Tag-style";

interface PropsType {
  label: string;
  onRemove?: any;
  disabled?: boolean | undefined;
  background?: string;
}

const Tag = ({
  onRemove,
  label,
  disabled,
  background = "#346dffa6",
}: PropsType) => {
  return (
    <TagRoot
      background={background}
      className="rasha-tag"
      disabled={disabled}
      onClick={(e) => e.stopPropagation()}>
      {label}
      <RemoveTagButton
        disabled={disabled}
        onClick={() => {
          if (!disabled) {
            onRemove();
          }
        }}>
        &times;
      </RemoveTagButton>
    </TagRoot>
  );
};

export default Tag;

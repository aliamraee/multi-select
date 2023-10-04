import { action } from "@storybook/addon-actions";
import Tag from "components/Tag";

export default {
  title: "Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    background: { control: "color" },
  },
};

export const Default = {
  args: {
    label: "Tag",
    onRemove: action("onRemove"),
    disabled: false,
    background: "#346dffa6",
  },
};

export const Disabled = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

import { action } from "@storybook/addon-actions";
import Option from "components/Option";
import Tag from "components/Tag";

export default {
  component: Option,
  title: "Option",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    disabled: false,
    onMouseDown: action("onMouseDown"),
    children: <Tag label="Option" />,
  },
};

export const Disable = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

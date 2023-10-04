import { action } from "@storybook/addon-actions";
import Option from "components/Option";
import Checkbox from "components/Checkbox";

export default {
  component: Option,
  title: "Option",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    disabled: false,
    onMouseDown: action("onMouseDown"),
    children: <Checkbox checked={false} label="Option" />,
  },
};

export const Disable = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

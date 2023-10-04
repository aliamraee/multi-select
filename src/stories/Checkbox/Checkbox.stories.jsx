import Checkbox from "components/Checkbox";
import { action } from "@storybook/addon-actions";

export default {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    label: "Checkbox",
    onChange: action("onChange"),
    disabled: false,
  },
};
export const Disable = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Checked = {
  args: {
    ...Default.args,
    checked: true,
  },
};

export const WithLabel = {
  args: {
    ...Default.args,
    label: "Checkbox",
  },
};

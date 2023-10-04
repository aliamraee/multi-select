import Select from "components/Select";
import { action } from "@storybook/addon-actions";

export default {
  component: Select,
  title: "Select",
};

const optionsData = [
  {
    label: "Option 1",
    value: "option_1",
  },
  {
    label: "Option 2",
    value: "option_2",
  },
  {
    label: "Option 3",
    value: "option_3",
  },
];

export const Default = {
  args: {
    options: optionsData,
    disabled: false,
    showSearch: false,
    multiple: false,
    defaultValue: "",
    placeholder: "Select or search an option",
    onSearch: action("onSearch"),
    onChange: action("onChange"),
  },
};

export const SingleSelect = {
  args: {
    ...Default.args,
    multiple: false,
  },
};

export const MultiSelects = {
  args: {
    ...Default.args,
    multiple: true,
  },
};

export const SearchableSelect = {
  args: {
    ...Default.args,
    multiple: true,
    showSearch: true,
  },
};

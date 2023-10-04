import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
  MouseEvent,
  ChangeEvent,
} from "react";
import _ from "lodash";

import Checkbox from "components/Checkbox";
import Tag from "components/Tag";
import Option from "components/Option";

import {
  Scrollbar,
  SuffixIcon,
  SelectedOptions,
  Input,
  SelectContainer,
  Dropdown,
  Placeholder,
  EmptyState,
  ClearAllButton,
} from "./Select-style";
import NoDataIcon from "../../assets/icons/no-data.svg";
import searchIcon from "../../assets/icons/search.svg";

interface OptionsType {
  label: string;
  value: string;
}

interface PropsType {
  options: OptionsType[];
  onSearch?: any;
  onChange?: any;
  placeholder?: string;
  multiple?: boolean;
  defaultValue?: string[] | string;
  showSearch?: boolean;
  disabled?: boolean | undefined;
  disableOption?: (value: OptionsType) => boolean;
  selectClass?: string;
}
const CustomSelect: React.FC<PropsType> = ({
  options,
  onSearch,
  onChange,
  placeholder,
  multiple = false,
  defaultValue = multiple ? [] : "",
  showSearch = false,
  disabled,
  disableOption,
  selectClass = "rasha-select",
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[] | string>(
    defaultValue,
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const focusInput = () => inputRef.current?.focus();

  const labelOptions = useMemo(() => {
    const data: any = {};
    options.forEach((option) => {
      data[option.value] = option.label;
    });
    return data;
  }, [options]);

  const toggleOption = useCallback(
    (option: string) => {
      if (multiple) {
        setSelectedOptions((prevSelected) =>
          prevSelected.includes(option)
            ? (prevSelected as string[]).filter((item) => item !== option)
            : [...prevSelected, option],
        );
      } else {
        setSelectedOptions(option);
        setIsDropdownOpen(false);
        setInputValue("");
        inputRef?.current?.blur();
      }
    },
    [multiple, inputRef],
  );

  const handleClearData = () => {
    if (!disabled) {
      setSelectedOptions(multiple ? [] : "");
      setInputValue("");
    }
  };

  const handleContainerClick = (e: MouseEvent) => {
    if (!disabled) {
      focusInput();
      if (dropdownRef.current?.contains(e.target as Node)) {
        setIsDropdownOpen(true);
      } else {
        setIsDropdownOpen((prev) => {
          if (prev) {
            inputRef?.current?.blur();
            setInputValue("");
          }
          return !prev;
        });
      }
    }
  };

  const filteredOptions = useMemo(
    () =>
      options.filter((option: OptionsType) =>
        option.label.toLowerCase().includes(inputValue.toLowerCase()),
      ),
    [options, inputValue, onSearch],
  );

  const handleCloseDropdown = useCallback(
    (e: any) => {
      if (isDropdownOpen && !containerRef.current?.contains(e.target as Node)) {
        setIsDropdownOpen(false);
        inputRef?.current?.blur();
        setInputValue("");
      }
    },
    [isDropdownOpen, inputRef],
  );

  useEffect(() => {
    document.addEventListener("click", handleCloseDropdown);

    return () => document.removeEventListener("click", handleCloseDropdown);
  }, [isDropdownOpen]);

  useEffect(() => {
    if (_.isFunction(onChange)) {
      onChange(selectedOptions);
    }
  }, [selectedOptions, onChange]);

  return (
    <SelectContainer
      className={selectClass}
      ref={containerRef}
      id={_.uniqueId()}
      onClick={handleContainerClick}>
      <div>
        <SelectedOptions
          showSearch={showSearch}
          className="rasha-selected-option"
          disabled={disabled}
          onClick={focusInput}>
          {_.isEmpty(selectedOptions) &&
            _.isEmpty(inputValue) &&
            placeholder && <Placeholder>{placeholder}</Placeholder>}

          {multiple && _.isArray(selectedOptions) ? (
            selectedOptions.map((item: string) => (
              <Tag
                key={item}
                label={labelOptions[item]}
                disabled={disabled}
                onRemove={() => {
                  toggleOption(item);
                }}
              />
            ))
          ) : _.isEmpty(inputValue) ? (
            <span className="rasha-single-selected">
              {labelOptions[selectedOptions as string]}
            </span>
          ) : null}
          {showSearch && (
            <div style={{ width: `${(inputValue.length || 1) * 9}px` }}>
              <Input
                type="text"
                className="rasha-input"
                value={inputValue}
                onFocus={() => {
                  if (isDropdownOpen) {
                    setIsDropdownOpen(true);
                  }
                }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setInputValue(e.target.value);
                  onSearch(e.target.value);
                }}
                disabled={disabled}
                ref={inputRef}
              />
            </div>
          )}
        </SelectedOptions>
        {isDropdownOpen && (
          <Dropdown ref={dropdownRef} className="rasha-dropdown">
            <Scrollbar>
              {!_.isEmpty(filteredOptions) ? (
                filteredOptions.map((option) => {
                  const selected = multiple
                    ? selectedOptions.includes(option.value)
                    : _.isEqual(selectedOptions, option.value);

                  const disabledOption = () => {
                    if (_.isFunction(disableOption)) {
                      return disableOption(option);
                    }
                    return false;
                  };
                  return (
                    <Option
                      disabled={disabledOption()}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        toggleOption(option.value);
                      }}
                      key={option.value}>
                      <Checkbox
                        disabled={disabledOption()}
                        checked={selected}
                        label={option.label}
                      />
                    </Option>
                  );
                })
              ) : (
                <EmptyState className="rasha-empty">
                  <div>
                    <img src={NoDataIcon} alt="No Data" />
                  </div>
                  <span>No data</span>
                </EmptyState>
              )}
            </Scrollbar>
          </Dropdown>
        )}
      </div>
      {(!_.isEmpty(selectedOptions) || inputValue) &&
        inputRef?.current !== document.activeElement && (
          <ClearAllButton disabled={disabled} onClick={handleClearData}>
            &times;
          </ClearAllButton>
        )}
      {inputRef.current &&
        inputRef.current === document.activeElement &&
        showSearch && (
          <SuffixIcon>
            <img src={searchIcon} alt="search" />
          </SuffixIcon>
        )}
    </SelectContainer>
  );
};

export default CustomSelect;

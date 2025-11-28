"use client";

import { useState } from "react";

interface RadioOption {
  value: string;
  label?: string;
  color: string; // Hexadecimal color value
}

interface CustomRadioGroupProps {
  options: RadioOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  name: string;
}

export default function CustomRadioGroup({
  options,
  defaultValue,
  onChange,
  name,
}: CustomRadioGroupProps) {
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValue || options[0]?.value || ""
  );

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
  };

  return (
    <div className="relative flex items-center gap-1">
      {options.map((option) => {
        const isSelected = selectedValue === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => handleChange(option.value)}
            className="relative focus:outline-none flex items-center justify-center"
            aria-label={option.label || option.value}
          >
            {isSelected ? (
              <div className="w-6 h-6 rounded-full border-4 border-black flex items-center justify-center p-[5%]">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: option.color }}
                />
              </div>
            ) : (
              <div
                className="w-5 h-5 rounded-full"
                style={{ backgroundColor: option.color }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

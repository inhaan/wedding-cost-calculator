"use client";

import { memo, useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./numberInput.module.css";

interface NumberInputProps {
    value: number;
    min?: number;
    max?: number;
    width?: number;
    disabled?: boolean;
    suffix?: string;
    onChange?: (value: number) => void;
}

export const NumberInput: React.FC<NumberInputProps> = memo(function NumberInput({
    value,
    onChange,
    min,
    max,
    width,
    disabled,
    suffix,
}) {
    const [inputValue, setInputValue] = useState<number | "">(value);

    const isValidNumber = (value: number | "") => {
        if (value === "") {
            return { valid: false, newValue: min ?? 0 };
        }
        if (isNaN(value)) {
            return { valid: false, newValue: min ?? 0 };
        }
        if (min !== undefined && value < min) {
            return { valid: false, newValue: min };
        }
        if (max !== undefined && value > max) {
            return { valid: false, newValue: max };
        }
        return { valid: true, newValue: value };
    };

    const onChangeNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value.replace(/,/g, ""), 10);
        setInputValue(isNaN(newValue) ? "" : newValue);
    };

    const onBlurNumberInput = () => {
        const { newValue } = isValidNumber(inputValue);
        setInputValue(newValue);
        onChange?.(newValue);
    };

    const onKeyDownNumberInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
            }
        }
    };

    // 값 동기화
    useEffect(() => {
        setInputValue(value);
    }, [value]);

    return (
        <div className="relative">
            <input
                type="text"
                value={inputValue}
                min={min}
                max={max}
                className={clsx(
                    "text-teal-600 font-bold rounded-lg py-2.5 px-4 appearance-none outline-none  bg-transparent focus:border-teal-600 focus:ring-1 focus:ring-teal-600",
                    styles["no-spinner"],
                    {
                        "pe-12": Boolean(suffix),
                        "cursor-not-allowed": disabled,
                    }
                )}
                style={{ width }}
                disabled={disabled}
                onChange={onChangeNumberInput}
                onBlur={onBlurNumberInput}
                onKeyDown={onKeyDownNumberInput}
            />
            {suffix && (
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-teal-600 font-bold">
                    {suffix}
                </div>
            )}
        </div>
    );
});

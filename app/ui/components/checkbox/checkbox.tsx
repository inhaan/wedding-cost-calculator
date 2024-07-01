import { memo } from "react";
import clsx from "clsx";
import styles from "./checkbox.module.css";

interface CheckboxProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = memo(function Checkbox({ checked, onChange }) {
    const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.checked);
    };

    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={onChangeCheckbox}
            className={clsx(
                "w-6 h-6 border rounded-lg appearance-none cursor-pointer bg-no-repeat flex-shrink-0",
                styles.checkbox
            )}
        />
    );
});

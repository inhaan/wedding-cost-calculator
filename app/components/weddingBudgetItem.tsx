import clsx from "clsx";
import { memo, useCallback } from "react";
import { Checkbox, NumberInput, Slider, Tooltip } from "../ui/components";
import { useWeddingBudgetStore } from "../ui/store/weddingBudgetStore";
import { QuestionMark } from "../ui/icons";
import { WeddingBudgetItem as WeddingBudgetItemType } from "../ui/data/weddingBudgetItems";

interface WeddingBudgetItemProps {
    type: "cost" | "profit";
    category: string;
    item: WeddingBudgetItemType;
}

export const WeddingBudgetItem: React.FC<WeddingBudgetItemProps> = memo(function WeddingCostItem({
    type,
    category,
    item,
}) {
    const { name, description, min, max, step, marks } = item;
    const setWeddingBudgetUse = useWeddingBudgetStore((state) => state.setWeddingBudgetUse);
    const setWeddingBudgetValue = useWeddingBudgetStore((state) => state.setWeddingBudgetValue);
    const { use, value } = useWeddingBudgetStore((state) => state.weddingBudget[type][category][name]);

    const onChangeUse = useCallback(
        (use: boolean) => {
            setWeddingBudgetUse(type, category, name, use);
        },
        [category, name, setWeddingBudgetUse, type]
    );

    const onChangeValue = useCallback(
        (value: number) => {
            setWeddingBudgetValue(type, category, name, value);
        },
        [category, name, setWeddingBudgetValue, type]
    );

    const onChangeSliderValue = useCallback(
        (value: number) => {
            if (name === "축의금") {
                value = value * 8;
            }
            setWeddingBudgetValue(type, category, name, value);
        },
        [category, name, setWeddingBudgetValue, type]
    );

    return (
        <div
            className={clsx("flex gap-2 md:gap-5 items-center p-3 transition flex-col md:flex-row", {
                "bg-gray-200": !use,
            })}
        >
            <div className="flex justify-between w-full md:max-w-[24rem]">
                <div className="flex items-center gap-5">
                    <Checkbox checked={use} onChange={onChangeUse} />

                    <div
                        className={clsx("flex items-center gap-2 transition", {
                            "text-gray-500": !use,
                            "line-through": !use,
                        })}
                    >
                        <div>{name}</div>
                        {description && (
                            <Tooltip content={description}>
                                <QuestionMark className="size-5 text-gray-500" />
                            </Tooltip>
                        )}
                    </div>
                </div>

                <NumberInput
                    min={0}
                    max={99999}
                    width={120}
                    suffix="만원"
                    disabled={!use}
                    value={value}
                    onChange={onChangeValue}
                />
            </div>

            <Slider
                min={min}
                max={max}
                step={step}
                marks={{
                    [min]: min,
                    ...marks,
                    [max]: max,
                }}
                disabled={!use}
                tooltipSuffix={name === "축의금" ? "명" : "만원"}
                value={name === "축의금" ? value / 8 : value}
                onChange={onChangeSliderValue}
            />
        </div>
    );
});

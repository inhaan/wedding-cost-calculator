import { memo } from "react";
import Rcslider, { SliderProps as RcsliderProps } from "rc-slider";
import "rc-slider/assets/index.css";

const createSliderWithTooltip = Rcslider.createSliderWithTooltip;
const RcsliderWithTooltip = createSliderWithTooltip(Rcslider);

interface SliderProps {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    marks?: RcsliderProps["marks"];
    disabled?: boolean;
    tooltipSuffix?: string;
    onChange?: (value: number) => void;
}

const color = {
    teal: "rgb(13 148 136)",
    gray: "rgb(107 114 128)",
};

export const Slider: React.FC<SliderProps> = memo(function Slider({
    value,
    min,
    max,
    step,
    marks,
    disabled,
    tooltipSuffix,
    onChange,
}) {
    const tipFormatter = (value: number) => {
        return (
            <div className="px-2">
                {value}
                {tooltipSuffix ? ` ${tooltipSuffix}` : ""}
            </div>
        );
    };

    return (
        <RcsliderWithTooltip
            value={value}
            min={min}
            max={max}
            step={step}
            marks={marks}
            disabled={disabled}
            className="mx-5 select-none"
            style={{ height: "30px", width: "calc(100% - 10px)" }}
            railStyle={{ height: 6 }}
            trackStyle={{ height: 6, backgroundColor: color.gray }}
            handleStyle={{ height: 15, width: 15, borderColor: color.gray, marginTop: -5, backgroundColor: color.gray }}
            dotStyle={{ height: 10, width: 10, bottom: -4, borderColor: color.gray }}
            onChange={onChange}
            tipFormatter={tipFormatter}
        />
    );
});

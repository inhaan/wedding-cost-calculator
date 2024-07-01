import { PropsWithChildren, memo } from "react";
import styles from "./tooltip.module.css";

interface TooltipProps {
    content: string;
}

export const Tooltip: React.FC<PropsWithChildren<TooltipProps>> = memo(function Tooltip({ content, children }) {
    return (
        <div className={styles["tooltip-container"]} tabIndex={-1}>
            <div className={styles["tooltip-target"]}>{children}</div>
            <div className={styles["tooltip-content"]} dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    );
});

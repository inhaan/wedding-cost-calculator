import { memo, useCallback, useMemo } from "react";
import { useWeddingBudgetStore } from "../ui/store/weddingBudgetStore";

export const WeddingBudgetTotal: React.FC = memo(function WeddingBudgetTotal({}) {
    const weddingBudget = useWeddingBudgetStore((state) => state.weddingBudget);

    const totalCost = useMemo(() => {
        return Object.values(weddingBudget.cost)
            .map((item) => Object.values(item))
            .flat()
            .filter((item) => item.use)
            .reduce((acc, item) => acc + item.value, 0);
    }, [weddingBudget.cost]);

    const totalProfit = useMemo(() => {
        return (
            Object.values(weddingBudget.profit)
                .map((item) => Object.values(item))
                .flat()
                .filter((item) => item.use)
                .reduce((acc, item) => acc + item.value, 0) * -1
        );
    }, [weddingBudget.profit]);

    const total = useMemo(() => {
        return totalCost + totalProfit;
    }, [totalCost, totalProfit]);

    const formatCurrency = useCallback((value: number) => {
        const billion = Math.floor(value / 1_0000);
        const thenThousand = value % 1_0000;
        const billionStr = billion > 0 ? `${billion}억 ` : "";
        return `${billionStr}${thenThousand.toLocaleString("ko-KR")} 만원`;
    }, []);

    return (
        <div className="flex gap-7">
            <div className="text-gray-700">
                <div className="">총 비용</div>
                <div className="text-2xl font-bold">{formatCurrency(totalCost)}</div>
            </div>
            <div className="text-gray-700">
                <div className="">총 수익</div>
                <div className="text-2xl font-bold">{formatCurrency(totalProfit)}</div>
            </div>
            <div className="text-gray-700">
                <div className="">ㅤ</div>
                <div className="text-2xl font-bold">=</div>
            </div>
            <div className="text-teal-600">
                <div className="">총 합계</div>
                <div className="text-2xl font-bold">{formatCurrency(total)}</div>
            </div>
        </div>
    );
});

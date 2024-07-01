import { memo, useMemo } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useWeddingBudgetStore } from "../ui/store/weddingBudgetStore";
import { useIsMobile } from "../hooks/useIsMobile";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#845EC2", "#FF6F91"];

const renderCustomizedLabel = (props: any) => {
    return `${props.category} ${Math.floor(props.percent * 100 * 10) / 10}%`;
};

export const WeddingBudgetChart: React.FC = memo(function WeddingBudgetChart() {
    const weddingCosts = useWeddingBudgetStore((state) => state.weddingBudget.cost);
    const isMobile = useIsMobile();

    const costTotalByCategory = useMemo(() => {
        return Object.entries(weddingCosts)
            .map(([category, value], index) => {
                const total = Object.values(value)
                    .filter((item) => item.use)
                    .reduce((acc, item) => acc + item.value, 0);
                return { category, total };
            })
            .filter((item) => item.total > 0)
            .sort((a, b) => b.total - a.total);
    }, [weddingCosts]);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    width={isMobile ? "100%" : undefined}
                    data={costTotalByCategory}
                    dataKey="total"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    label={renderCustomizedLabel}
                    isAnimationActive={false}
                >
                    {costTotalByCategory.map((entry, index) => (
                        <Cell key={entry.category} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
});

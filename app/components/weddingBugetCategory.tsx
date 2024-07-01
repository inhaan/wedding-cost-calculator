import { memo } from "react";
import { WeddingBudgetCagegory } from "../ui/data/weddingBudgetItems";
import { WeddingBudgetItem } from "./weddingBudgetItem";

interface WeddingBudgetCategoryProps {
    type: "cost" | "profit";
    category: WeddingBudgetCagegory;
}

export const WeddingBudgetCategory: React.FC<WeddingBudgetCategoryProps> = memo(function WeddingBudgetCategory({
    type,
    category,
}) {
    return (
        <div className="flex border-t border-t-gray-300 flex-col md:flex-row pt-2">
            <div className="w-48 flex items-center">
                <h2 className="font-bold pl-2">{category.category}</h2>
            </div>
            <div className="w-full">
                {category.items.map((item) => (
                    <WeddingBudgetItem key={item.name} type={type} category={category.category} item={item} />
                ))}
            </div>
        </div>
    );
});

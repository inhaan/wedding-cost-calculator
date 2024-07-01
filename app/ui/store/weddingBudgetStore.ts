import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { WEDDING_COST_CATEGORIES, WEDDING_PROFIT_CATEGORIES } from "../data/weddingBudgetItems";
import { persist } from "zustand/middleware";

interface WeddingBudgetState {
    weddingBudget: {
        cost: { [category: string]: Record<string, { use: boolean; value: number }> };
        profit: { [category: string]: Record<string, { use: boolean; value: number }> };
    };
    setWeddingBudgetUse: (type: "cost" | "profit", category: string, name: string, use: boolean) => void;
    setWeddingBudgetValue: (type: "cost" | "profit", category: string, name: string, value: number) => void;
    resetWeddingBudget: (type: "cost" | "profit") => void;
}

const initialWeddingCost = WEDDING_COST_CATEGORIES.reduce((acc, item) => {
    acc[item.category] = item.items.reduce((acc2, item2) => {
        acc2[item2.name] = { use: item2.initial?.use ?? true, value: item2.initial?.value ?? 0 };
        return acc2;
    }, {} as Record<string, { use: boolean; value: number }>);
    return acc;
}, {} as { [category: string]: Record<string, { use: boolean; value: number }> });

const initialWeddingProfit = WEDDING_PROFIT_CATEGORIES.reduce((acc, item) => {
    acc[item.category] = item.items.reduce((acc2, item2) => {
        acc2[item2.name] = { use: item2.initial?.use ?? true, value: item2.initial?.value ?? 0 };
        return acc2;
    }, {} as Record<string, { use: boolean; value: number }>);
    return acc;
}, {} as { [category: string]: Record<string, { use: boolean; value: number }> });

export const useWeddingBudgetStore = create<WeddingBudgetState>()(
    immer(
        persist(
            (set, get) => ({
                weddingBudget: {
                    cost: initialWeddingCost,
                    profit: initialWeddingProfit,
                },
                setWeddingBudgetUse: (type, category, name, use) => {
                    set((state) => {
                        state.weddingBudget[type][category][name].use = use;
                    });
                },
                setWeddingBudgetValue: (type, category, name, value) => {
                    set((state) => {
                        state.weddingBudget[type][category][name].value = value;
                    });
                },
                resetWeddingBudget: (type) => {
                    set((state) => {
                        Object.entries(state.weddingBudget[type]).forEach(([category, items]) => {
                            Object.keys(items).forEach((name) => {
                                state.weddingBudget[type][category][name] = {
                                    use: true,
                                    value: 0,
                                };
                            });
                        });
                    });
                },
            }),
            { name: "wedding-budget-store", version: 1 }
        )
    )
);

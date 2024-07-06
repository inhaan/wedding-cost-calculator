"use client";

import { FaGithub } from "react-icons/fa6";
import { WEDDING_COST_CATEGORIES, WEDDING_PROFIT_CATEGORIES } from "./ui/data/weddingBudgetItems";
import { WeddingBudgetTotal } from "./components/weddingBudgetTotal";
import { WeddingBudgetCategory } from "./components/weddingBugetCategory";
import { useWeddingBudgetStore } from "./ui/store/weddingBudgetStore";
import { Logo } from "./ui/icons";
import { WeddingBudgetChart } from "./components/weddingBudgetChart";

export default function Home() {
    const resetWeddingBudget = useWeddingBudgetStore((state) => state.resetWeddingBudget);

    const onClickProfitReset = () => {
        if (confirm("수익을 초기화 하시겠습니까?")) {
            resetWeddingBudget("profit");
        }
    };

    const onClickCostReset = () => {
        if (confirm("비용을 초기화 하시겠습니까?")) {
            resetWeddingBudget("cost");
        }
    };

    return (
        <div className="flex justify-center">
            <main className="w-full max-w-6xl pt-10 px-5">
                {/* 제목 */}
                <div className="flex items-center gap-3">
                    <Logo className="w-10 h-10" />
                    <h1 className="text-3xl font-bold">결혼 비용 계산기</h1>
                </div>

                {/* 설명 */}
                <p className="mt-5 text-gray-800">
                    결혼 준비를 하면서 얼마나 들어갈지 간단히 예상해 보세요
                    <br />
                    결혼에 필요한 모든 비용과 평균 금액을 확인할 수 있습니다
                </p>

                {/* 합계 */}
                <div className="mt-12 pl-2">
                    <WeddingBudgetTotal />
                </div>

                {/* 차트 */}
                <WeddingBudgetChart />

                {/* 수익 */}
                <div className="mt-10 text-right">
                    <div className="flex justify-end items-end mb-3 gap-7">
                        <button
                            className="cursor-pointer text-blue-600 ml-2 text-sm hover:underline active:text-blue-800"
                            onClick={onClickProfitReset}
                        >
                            초기화
                        </button>
                        <h2 className="font-bold text-xl pl-2">수익</h2>
                    </div>
                    {WEDDING_PROFIT_CATEGORIES.map((category) => (
                        <WeddingBudgetCategory key={category.category} type="profit" category={category} />
                    ))}
                </div>

                {/* 비용 */}
                <div className="mt-14 text-right">
                    <div className="flex justify-end items-end mb-3 gap-7">
                        <button
                            className="cursor-pointer text-blue-600 ml-2 text-sm hover:underline active:text-blue-800"
                            onClick={onClickCostReset}
                        >
                            초기화
                        </button>
                        <h2 className="font-bold text-xl pl-2">비용</h2>
                    </div>
                    {WEDDING_COST_CATEGORIES.map((category) => (
                        <WeddingBudgetCategory key={category.category} type="cost" category={category} />
                    ))}
                </div>

                {/* 푸터 */}
                <footer className="flex justify-end w-full pt-14 pb-10 text-xs text-gray-400">
                    <div className="flex flex-col items-end px-2">
                        <div className="flex space-x-2">
                            <i>@ 2024 </i>
                            <i>developed by inhan</i>
                            <a
                                href="https://github.com/inhaan/wedding-cost-calculator/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base hover:text-gray-600 transition"
                            >
                                <FaGithub />
                            </a>
                            <a href="https://forms.gle/REpgswzVYHWvpeoB7" target="_blank" rel="noopener noreferrer">
                                문의하기
                            </a>
                        </div>
                        <div>
                            <a href="https://iconscout.com/icons/diamond" target="_blank">
                                Diamond
                            </a>{" "}
                            by{" "}
                            <a href="https://iconscout.com/contributors/satawaticon" target="_blank">
                                Satawat Foto anukul
                            </a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}

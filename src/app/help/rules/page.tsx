import { Inter } from "next/font/google";
import { rulesDatabase } from "@/data/rulesData";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-inter",
});

export default function Rules() {
    return (
        <div className={`w-full flex-1 flex flex-col items-center bg-zinc-50 box-border px-4 py-8 md:py-12 select-none ${inter.className} antialiased text-black`}>

            <div className="w-full max-w-[1200px] flex flex-col gap-8 md:gap-12">

                <div className="flex flex-col gap-3">
                    <h1 className="text-[28px] sm:text-[36px] lg:text-[45px] font-bold leading-none text-zinc-900">
                        Правила
                    </h1>
                    <p className="font-normal text-sm sm:text-base lg:text-[20px] text-zinc-600 leading-relaxed max-w-[750px]">
                        Дотримання правил допомагає створювати безпечне та комфорте середовище для всіх користувачів.
                        Порушення правил могут призвести до попередження, тимчасового обмеження функцій або блокування акаунта.
                    </p>
                </div>

                {rulesDatabase.map((category) => (
                    <div key={category.categoryId} className="flex flex-col gap-4">

                        <div className="flex flex-row items-center gap-3 pl-1">
                            <h2 className="text-lg sm:text-xl md:text-[22px] font-bold text-zinc-800">
                                {category.categoryTitle}
                            </h2>
                        </div>

                        <div className="w-full border border-[#C0C0C0] bg-white rounded-[14px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">

                            {/* Шапка таблицы видима только на md и выше */}
                            <div className="hidden md:flex flex-row bg-[#F2F2F2] border-b border-[#C0C0C0] px-6 py-4 text-sm font-bold text-zinc-700">
                                <div className="w-[65%]">Порушення</div>
                                <div className="w-[35%] pl-4">Санкції</div>
                            </div>

                            {category.items.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`flex flex-col md:flex-row p-5 md:px-6 md:py-5 gap-4 md:gap-0 items-center
                                        ${index !== category.items.length - 1 ? 'border-b border-[#E5E7EB]' : ''}`}
                                >
                                    {/* Левая колонка (Нарушение) */}
                                    <div className="w-full md:w-[65%] flex flex-row items-center gap-4">
                                        <div className="flex items-center justify-center bg-[#F0F6FC] border border-[#4384D0] rounded-[12px] w-10 h-10 shrink-0 select-none">
                                            <span className="text-xs sm:text-sm font-bold text-[#4384D0]">
                                                {item.id}
                                            </span>
                                        </div>

                                        <svg className="w-7 h-7 text-[#4384D0] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-4-8-4z" />
                                        </svg>

                                        <p className="text-xs sm:text-sm font-medium text-zinc-800 leading-relaxed pr-4">
                                            {item.text}
                                        </p>
                                    </div>

                                    {/* Правая колонка (Санкции) */}
                                    <div className="w-full md:w-[35%] flex flex-row items-center gap-3 bg-[#FFF1F1] border border-[#FFE1E1] p-3.5 rounded-[12px] md:self-center">
                                        <div className="shrink-0 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-[#FF3B30]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v3a8 8 0 0 0 8 8 8 8 0 0 0 8-8v-3a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm3 8H9V7a3 3 0 0 1 6 0v3zm-3 5a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 12 15z" />
                                            </svg>
                                        </div>

                                        <p className="text-xs sm:text-sm font-medium text-[#FF3B30] leading-relaxed">
                                            {item.sanction}
                                        </p>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
}
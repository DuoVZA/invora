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
                        Дотримання правил допомагає створювати безпечне та комфортне середовище для всіх користувачів.
                        Порушення правил можуть призвести до попередження, тимчасового обмеження функцій або блокування акаунта.
                    </p>
                </div>

                {rulesDatabase.map((category) => (
                    <div key={category.categoryId} className="flex flex-col gap-4">

                        <div className="flex flex-row items-center gap-3 pl-1">
                            <h2 className="text-lg sm:text-xl md:text-[22px] font-bold text-zinc-800">
                                {category.categoryTitle}
                            </h2>
                        </div>

                        <div className="w-full border border-[#C0C0C0] bg-white rounded-[16px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">

                            <div className="hidden md:flex flex-row bg-[#F2F2F2] border-b border-[#C0C0C0] px-6 py-4 text-sm font-bold text-zinc-700">
                                <div className="w-[65%]">Порушення</div>
                                <div className="w-[35%] pl-4">Санкції</div>
                            </div>

                            {category.items.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`flex flex-col md:flex-row p-5 md:px-6 md:py-5 gap-4 md:gap-0 items-stretch
                                        ${index !== category.items.length - 1 ? 'border-b border-[#E5E7EB]' : ''}`}
                                >
                                    <div className="w-full md:w-[65%] flex flex-row items-start gap-4">
                                        <div className="flex flex-row items-center gap-2 bg-[#F0F6FC] border border-[#D0E1F4] rounded-lg px-2.5 py-1.5 shrink-0 select-none">
                                            <span className="text-xs sm:text-sm font-bold text-[#4384D0]">
                                                {item.id}
                                            </span>
                                        </div>
                                        <svg className="w-20 h-20 text-[#4384D0]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-4-8-4z" />
                                        </svg>
                                        <p className="text-xs sm:text-sm font-medium text-zinc-800 leading-relaxed pt-1 pr-4">
                                            {item.text}
                                        </p>
                                    </div>

                                    <div className="w-full md:w-[35%] flex flex-row items-start gap-3 bg-[#FFF1F1] md:bg-transparent p-3 md:p-0 md:pl-4 rounded-xl border border-[#FFE1E1] md:border-none">
                                        <div className="bg-[#FFE1E1] md:bg-[#FFF1F1] border border-[#FFD0D0] rounded-lg p-2 shrink-0 flex items-center justify-center mt-0.5">
                                            <svg className="w-3.5 h-3.5 text-[#FF3B30]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                                            </svg>
                                        </div>

                                        <p className="text-xs sm:text-sm font-medium text-zinc-700 leading-relaxed pt-0.5 md:pt-1">
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
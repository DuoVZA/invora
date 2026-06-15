import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-inter",
});

export default function UnderDev() {
    return (
        <div className="w-full flex-1 flex flex-col-reverse lg:flex-row justify-center items-top box-border px-6 py-12 lg:py-24 select-none gap-8 lg:gap-16">
            
            <div className="max-w-[550px] flex flex-col text-center lg:text-left gap-2">
                <p className={`text-[#4384D0] text-[42px] sm:text-[56px] md:text-[68px] font-bold leading-none ${inter.className}`}>
                    Oops!
                </p>
                <p className={`text-[#4384D0] text-[22px] sm:text-[28px] md:text-[32px] font-bold leading-tight ${inter.className}`}>
                    Under construction
                </p>
                
                <div className="flex flex-col gap-1.5 mt-2">
                    <p className="text-[#A4A4A4] text-xs sm:text-base md:text-[18px] font-medium leading-snug">
                        На даний момент ця частина сайту знаходиться у розробці
                    </p>
                    <p className="text-[#919191] text-[11px] sm:text-sm md:text-[15px] font-normal">
                        Перейдіть на домашню сторінку або скористайтеся пошуком.
                    </p>
                </div>
            </div>

            <img 
                src="/pictures/setting.png" 
                alt="setting" 
                className="w-full max-w-[200px] sm:max-w-[280px] md:max-w-[360px] lg:max-w-[420px] h-auto object-contain shrink-0"
            />
            
        </div>
    );
}
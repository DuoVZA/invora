import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-inter",
});

export default function NotFound() {
    return (
        <div className="w-full flex-1 flex flex-col justify-center items-center box-border px-4 py-12 select-none">
            
            <div className="flex flex-col items-center text-center max-w-[830px] gap-6">

                <p className={`text-[#4384D0] text-[55px] sm:text-[100px] md:text-[125px] ${inter.className} font-bold flex flex-row items-baseline justify-center gap-1 sm:gap-2 leading-none self-center`}>
                    <span>ERROR 4</span>
                    <img 
                        src="/pictures/sad_smile.png" 
                        alt="sad emoji" 
                        className="w-[0.75em] h-[0.75em] object-contain inline-block shrink-0 translate-y-[0.07em]" 
                    />
                    <span>4</span>
                </p>

                <div className="flex flex-col gap-2.5 font-medium">
                    <p className="text-sm sm:text-base text-[#919191] font-semibold leading-snug">
                        На жаль, сторінку, яку ви запитували, не знайдено.
                        <br className="hidden sm:inline" /> Можливо, вона була видалена або ви перейшли за застарілим посиланням.
                    </p>
                    <p className="text-sm sm:text-base text-[#919191]">
                        Перейдіть на домашню сторінку або скористайтеся пошуком.
                    </p>
                </div>

            </div>

        </div>
    );
}
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-inter",
});

export default function Rules() {
    return (
        <div className={`${inter.className} font-bold antialiased text-black`}>
            <p className="lg:text-[45px]">Правила</p>
            <p className="font-normal lg:text-[20px] lg:w-[55%]">Дотримання правил допомагає створювати безпечне та комфортне середовище для всіх користувачів. Порушення правил можуть призвести до попередження, тимчасового обмеження функцій або блокування акаунта.</p>
        </div>
    );
}
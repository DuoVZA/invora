'use client';
import Link from "next/link";
import { useState } from "react";

type CurrencyVal = "Євро" | "Долари" | "Гривні";
type CurrencyLang = "Українською" | "English";

interface LangOption {
    name: CurrencyLang;
    flag: string;
}

interface HelpOption {
    name: string;
    href: string;
}

export default function Header() {
    const [value, setValue] = useState("");

    const [isValOpen, setIsValOpen] = useState(false);
    const [isLanOpen, setIsLanOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false); // Состояние для дропдауна помощи

    const [selectedVal, setSelectedVal] = useState<CurrencyVal>("Євро");

    const [selectedLan, setSelectedLan] = useState<LangOption>({
        name: "Українською",
        flag: "/pictures/ukraine_flag.png"
    });

    const allCurrenciesVal: CurrencyVal[] = ["Євро", "Долари", "Гривні"];

    const allCurrenciesLan: LangOption[] = [
        { name: "Українською", flag: "/pictures/ukraine_flag.png" },
        { name: "English", flag: "/pictures/england_flag.png" }
    ];

    const helpOptions: HelpOption[] = [
        { name: "Правила", href: "/help/faq" },
        { name: "Центр допомоги", href: "/help/support" },
        { name: "Відправити запит", href: "/help/rules" }
    ];

    const currenciesValToShow = allCurrenciesVal.filter(currencyV => currencyV !== selectedVal);
    const currenciesLanToShow = allCurrenciesLan.filter(lang => lang.name !== selectedLan.name);

    const showPlaceholder = !value;

    const handleSelectV = (currencyV: CurrencyVal) => {
        setSelectedVal(currencyV);
        setIsValOpen(false);
    };

    const handleSelectL = (lang: LangOption) => {
        setSelectedLan(lang);
        setIsLanOpen(false);
    };

    return (
        <div className="sticky top-0 z-50 flex flex-row justify-center items-center gap-[45px] bg-zinc-50 w-full h-[87px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-[#919191] text-[15px]">
            <Link href="/">
                <img src="/pictures/invora_logo.png" alt="Invora Logo" className="w-[124px]" />
            </Link>

            {/* Дропдаун "Допомога" */}
            <div className="relative inline-block text-left">
                <button 
                    onClick={() => {
                        setIsHelpOpen(!isHelpOpen);
                        setIsLanOpen(false);
                        setIsValOpen(false);
                    }}
                    className="flex items-center gap-[5px] text-[#919191] text-[15px] hover:text-zinc-800 hover:cursor-pointer transition-colors"
                >
                    <img src="/pictures/question_mark.png" alt="Question Mark" className="w-[18px] h-[18px]" />
                    <p>Допомога</p>
                    <img 
                        src="/vectors/arrow.svg" 
                        alt="Arrow" 
                        className={`w-[9px] h-[4px] transition-transform duration-200 ${isHelpOpen ? "rotate-180" : ""}`} 
                    />
                </button>

                {isHelpOpen && (
                    <div className="absolute left-0 mt-2 w-[200px] bg-white border border-zinc-200 rounded-xl shadow-lg overflow-hidden z-50">
                        {helpOptions.map((option) => (
                            <Link
                                key={option.href}
                                href={option.href}
                                onClick={() => setIsHelpOpen(false)}
                                className="block w-full text-left px-4 py-2 text-[14px] text-zinc-800 hover:bg-zinc-100 transition-colors"
                            >
                                {option.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex items-center w-full max-w-[437px] h-[30px] border border-[#A4A4A4] rounded-full px-3 bg-white font-code relative">
                <button className="flex items-center justify-center mr-2 hover:opacity-70 transition-opacity shrink-0">
                    <img src="/vectors/searcher.svg" alt="Search" className="w-[16px] h-[16px]" />
                </button>

                <div className="relative w-full h-full flex items-center">
                    {showPlaceholder && (
                        <span className="absolute inset-0 flex items-center justify-center text-[14px] text-[#A4A4A4] pointer-events-none">
                            Пошук за 830 іграми
                        </span>
                    )}

                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-full h-full bg-transparent outline-none text-[14px] text-zinc-800 text-left pr-2"
                    />
                </div>
            </div>

            <div className="flex items-center gap-[12px]">
                <Link
                    href="/login"
                    className="bg-none border border-[#919191] text-[#919191] rounded py-1 px-3 hover:bg-zinc-100 transition-colors inline-block text-center"
                >
                    Увійти
                </Link>
                <Link
                    href="/signup"
                    className="bg-[#4384D0] text-[#FFFFFF] rounded py-1 px-3 hover:bg-[#3b75ba] transition-colors">
                    <p>Зареєструватися</p>
                </Link>
            </div>

            <div className="flex items-center gap-[8px] font-code">
                <div className="relative inline-block text-left">
                    <button
                        onClick={() => {
                            setIsLanOpen(!isLanOpen);
                            setIsValOpen(false);
                            setIsHelpOpen(false);
                        }}
                        className="flex items-center gap-2 text-[#919191] text-[15px] hover:text-zinc-800 hover:cursor-pointer transition-colors"
                    >
                        <span>{selectedLan.name}</span>
                        <img src={selectedLan.flag} alt="" className="w-[18px] h-[18px] object-cover rounded-sm" />
                        <img
                            src="/vectors/arrow.svg"
                            alt="Arrow"
                            className={`w-[9px] h-[4px] transition-transform duration-200 ${isLanOpen ? "rotate-180" : ""}`}
                        />
                    </button>

                    {isLanOpen && (
                        <div className="absolute -left-1 mt-2 w-[160px] bg-white border border-zinc-200 rounded-xl shadow-lg overflow-hidden z-50">
                            {currenciesLanToShow.map((lang) => (
                                <button
                                    key={lang.name}
                                    onClick={() => handleSelectL(lang)}
                                    className="hover:cursor-pointer w-full flex items-center gap-2 text-left px-4 py-2 text-[14px] text-zinc-800 hover:bg-zinc-100 transition-colors"
                                >
                                    <span>{lang.name}</span>
                                    <img src={lang.flag} alt="" className="w-[18px] h-[18px] object-cover rounded-sm" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <div className="w-[1px] h-[25px] bg-[#919191]">
                </div>

                <div className="relative inline-block text-left">
                    <button
                        onClick={() => {
                            setIsValOpen(!isValOpen);
                            setIsLanOpen(false);
                            setIsHelpOpen(false);
                        }}
                        className="flex items-center gap-1 text-[#919191] text-[15px] hover:text-zinc-800 hover:cursor-pointer transition-colors"
                    >
                        <span>{selectedVal}</span>
                        <img
                            src="/vectors/arrow.svg"
                            alt="Arrow"
                            className={`w-[9px] h-[4px] transition-transform duration-200 ${isValOpen ? "rotate-180" : ""}`}
                        />
                    </button>

                    {isValOpen && (
                        <div className="absolute -left-1 mt-2 w-[120px] bg-white border border-zinc-200 rounded-xl shadow-lg overflow-hidden z-50">
                            {currenciesValToShow.map((currencyV) => (
                                <button
                                    key={currencyV}
                                    onClick={() => handleSelectV(currencyV)}
                                    className="hover:cursor-pointer w-full text-left px-4 py-2 text-[14px] text-zinc-800 hover:bg-zinc-100 transition-colors first:border-b first:border-zinc-100"
                                >
                                    {currencyV}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
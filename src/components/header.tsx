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
    index: number;
}

export default function Header() {
    const [value, setValue] = useState("");

    const [isValOpen, setIsValOpen] = useState(false);
    const [isLanOpen, setIsLanOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);

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
        { name: "Правила", href: "/help/rules", index: 0 },
        { name: "Центр допомоги", href: "/coming-soon", index: 1 },
        { name: "Відправити запит", href: "/coming-soon", index: 2 }
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
        <div className="sticky top-0 z-50 flex flex-row justify-center items-center gap-[45px] bg-zinc-50 w-full h-[87px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-[#919191] text-[15px] lg:sticky lg:top-0 lg:z-50 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-[45px] lg:bg-zinc-50 lg:w-full lg:h-[87px] lg:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] lg:text-[#919191] lg:text-[15px]">
            
            <Link href="/">
                <img src="/pictures/invora_logo.png" alt="Invora Logo" className="w-[124px] lg:w-[124px]" />
            </Link>

            {/* Блок Помощь */}
            <div className="relative inline-block text-left lg:relative lg:inline-block lg:text-left">
                <button 
                    onClick={() => {
                        setIsHelpOpen(!isHelpOpen);
                        setIsLanOpen(false);
                        setIsValOpen(false);
                    }}
                    className="flex items-center gap-[5px] text-[#919191] text-[15px] hover:text-zinc-800 hover:cursor-pointer transition-colors lg:flex lg:items-center lg:gap-[5px] lg:text-[#919191] lg:text-[15px] lg:transition-colors"
                >
                    <img src="/pictures/question_mark.png" alt="Question Mark" className="w-[18px] h-[18px] lg:w-[18px] lg:h-[18px]" />
                    <p className="lg:block">Допомога</p>
                    <img 
                        src="/vectors/arrow.svg" 
                        alt="Arrow" 
                        className={`w-[9px] h-[4px] transition-transform duration-200 lg:w-[9px] lg:h-[4px] lg:transition-transform lg:duration-200 ${isHelpOpen ? "rotate-180 lg:rotate-180" : ""}`} 
                    />
                </button>

                {isHelpOpen && (
                    <div className="absolute left-0 mt-2 w-[200px] bg-white border border-zinc-200 rounded-xl shadow-lg overflow-hidden z-50 lg:absolute lg:left-0 lg:mt-2 lg:w-[200px] lg:bg-white lg:border lg:border-zinc-200 lg:rounded-xl lg:shadow-lg lg:overflow-hidden lg:z-50">
                        {helpOptions.map((option) => (
                            <Link
                                key={`${option.href}-${option.index}`}
                                href={option.href}
                                onClick={() => setIsHelpOpen(false)}
                                className="block w-full text-left px-4 py-2 text-[14px] text-zinc-800 hover:bg-zinc-100 transition-colors lg:block lg:w-full lg:text-left lg:px-4 lg:py-2 lg:text-[14px] lg:text-zinc-800 lg:hover:bg-zinc-100 lg:transition-colors"
                            >
                                {option.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* Поисковая строка */}
            <div className="flex items-center w-full max-w-[437px] h-[30px] border border-[#A4A4A4] rounded-full px-3 bg-white font-code relative lg:flex lg:items-center lg:w-full lg:max-w-[437px] lg:h-[30px] lg:border lg:border-[#A4A4A4] lg:rounded-full lg:px-3 lg:bg-white lg:font-code lg:relative">
                <button className="flex items-center justify-center mr-2 hover:opacity-70 transition-opacity shrink-0 lg:flex lg:items-center lg:justify-center lg:mr-2 lg:shrink-0 lg:transition-opacity">
                    <img src="/vectors/searcher.svg" alt="Search" className="w-[16px] h-[16px] lg:w-[16px] lg:h-[16px]" />
                </button>

                <div className="relative w-full h-full flex items-center lg:relative lg:w-full lg:h-full lg:flex lg:items-center">
                    {showPlaceholder && (
                        <span className="absolute inset-0 flex items-center justify-center text-[14px] text-[#A4A4A4] pointer-events-none lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center lg:text-[14px] lg:text-[#A4A4A4] lg:pointer-events-none">
                            Пошук за 830 іграми
                        </span>
                    )}

                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-full h-full bg-transparent outline-none text-[14px] text-zinc-800 text-left pr-2 lg:w-full lg:h-full lg:bg-transparent lg:outline-none lg:text-[14px] lg:text-zinc-800 lg:text-left lg:pr-2"
                    />
                </div>
            </div>

            {/* Авторизация */}
            <div className="flex items-center gap-[12px] lg:flex lg:items-center lg:gap-[12px]">
                <Link
                    href="/login"
                    className="bg-none border border-[#919191] text-[#919191] rounded py-1 px-3 hover:bg-zinc-100 transition-colors inline-block text-center lg:bg-none lg:border lg:border-[#919191] lg:text-[#919191] lg:rounded lg:py-1 lg:px-3 lg:transition-colors lg:inline-block lg:text-center"
                >
                    Увійти
                </Link>
                <Link
                    href="/signup"
                    className="bg-[#4384D0] text-[#FFFFFF] rounded py-1 px-3 hover:bg-[#3b75ba] transition-colors lg:bg-[#4384D0] lg:text-[#FFFFFF] lg:rounded lg:py-1 lg:px-3 lg:transition-colors"
                >
                    <p className="lg:block">Зареєструватися</p>
                </Link>
            </div>

            {/* Селекторы локали и валюты */}
            <div className="flex items-center gap-[8px] font-code lg:flex lg:items-center lg:gap-[8px] lg:font-code">
                
                {/* Выбор Языка */}
                <div className="relative inline-block text-left lg:relative lg:inline-block lg:text-left">
                    <button
                        onClick={() => {
                            setIsLanOpen(!isLanOpen);
                            setIsValOpen(false);
                            setIsHelpOpen(false);
                        }}
                        className="flex items-center gap-2 text-[#919191] text-[15px] hover:text-zinc-800 hover:cursor-pointer transition-colors lg:flex lg:items-center lg:gap-2 lg:text-[#919191] lg:text-[15px] lg:transition-colors"
                    >
                        <span className="lg:inline">{selectedLan.name}</span>
                        <img src={selectedLan.flag} alt="" className="w-[18px] h-[18px] object-cover rounded-sm lg:w-[18px] lg:h-[18px] lg:object-cover lg:rounded-sm" />
                        <img
                            src="/vectors/arrow.svg"
                            alt="Arrow"
                            className={`w-[9px] h-[4px] transition-transform duration-200 lg:w-[9px] lg:h-[4px] lg:transition-transform lg:duration-200 ${isLanOpen ? "rotate-180 lg:rotate-180" : ""}`}
                        />
                    </button>

                    {isLanOpen && (
                        <div className="absolute -left-1 mt-2 w-[160px] bg-white border border-zinc-200 rounded-xl shadow-lg overflow-hidden z-50 lg:absolute lg:-left-1 lg:mt-2 lg:w-[160px] lg:bg-white lg:border lg:border-zinc-200 lg:rounded-xl lg:shadow-lg lg:overflow-hidden lg:z-50">
                            {currenciesLanToShow.map((lang) => (
                                <button
                                    key={lang.name}
                                    onClick={() => handleSelectL(lang)}
                                    className="hover:cursor-pointer w-full flex items-center gap-2 text-left px-4 py-2 text-[14px] text-zinc-800 hover:bg-zinc-100 transition-colors lg:cursor-pointer lg:w-full lg:flex lg:items-center lg:gap-2 lg:text-left lg:px-4 lg:py-2 lg:text-[14px] lg:text-zinc-800 lg:hover:bg-zinc-100 lg:transition-colors"
                                >
                                    <span className="lg:inline">{lang.name}</span>
                                    <img src={lang.flag} alt="" className="w-[18px] h-[18px] object-cover rounded-sm lg:w-[18px] lg:h-[18px] lg:object-cover lg:rounded-sm" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="w-[1px] h-[25px] bg-[#919191] lg:w-[1px] lg:h-[25px] lg:bg-[#919191]"></div>

                {/* Выбор Валюты */}
                <div className="relative inline-block text-left lg:relative lg:inline-block lg:text-left">
                    <button
                        onClick={() => {
                            setIsValOpen(!isValOpen);
                            setIsLanOpen(false);
                            setIsHelpOpen(false);
                        }}
                        className="flex items-center gap-1 text-[#919191] text-[15px] hover:text-zinc-800 hover:cursor-pointer transition-colors lg:flex lg:items-center lg:gap-1 lg:text-[#919191] lg:text-[15px] lg:transition-colors"
                    >
                        <span className="lg:inline">{selectedVal}</span>
                        <img
                            src="/vectors/arrow.svg"
                            alt="Arrow"
                            className={`w-[9px] h-[4px] transition-transform duration-200 lg:w-[9px] lg:h-[4px] lg:transition-transform lg:duration-200 ${isValOpen ? "rotate-180 lg:rotate-180" : ""}`}
                        />
                    </button>

                    {isValOpen && (
                        <div className="absolute -left-1 mt-2 w-[120px] bg-white border border-zinc-200 rounded-xl shadow-lg overflow-hidden z-50 lg:absolute lg:-left-1 lg:mt-2 lg:w-[120px] lg:bg-white lg:border lg:border-zinc-200 lg:rounded-xl lg:shadow-lg lg:overflow-hidden lg:z-50">
                            {currenciesValToShow.map((currencyV) => (
                                <button
                                    key={currencyV}
                                    onClick={() => handleSelectV(currencyV)}
                                    className="hover:cursor-pointer w-full text-left px-4 py-2 text-[14px] text-zinc-800 hover:bg-zinc-100 transition-colors first:border-b first:border-zinc-100 lg:cursor-pointer lg:w-full lg:text-left lg:px-4 lg:py-2 lg:text-[14px] lg:text-zinc-800 lg:hover:bg-zinc-100 lg:transition-colors lg:first:border-b lg:first:border-zinc-100"
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
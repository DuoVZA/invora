"use client";

import { useState } from "react";

interface GameFiltersProps {
    categoryName: string;
}

// Фейковые подкатегории для демонстрации (их можно будет расширить или передавать через props)
const DEMO_SUB_CATEGORIES = [
    "Усі", "300 алмазов", "680 алмазов", "980 алмазов", 
    "1280 алмазов", "1980 алмазов", "2660 алмазов", 
    "3280 алмазов", "4560 алмазов", "6480 алмазов", 
    "12960 алмазов", "Акція"
];

export default function GameFilters({ categoryName }: GameFiltersProps) {
    const [selectedSub, setSelectedSub] = useState("Усі");
    const [isOnlineOnly, setIsOnlineOnly] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // Форматируем текст для кнопки "Продати..." (например: "Продати Алмази", "Продати Аккаунти")
    const sellButtonText = `Продати ${categoryName.toLowerCase()}`;

    return (
        <div className="w-full space-y-4 mb-6 select-none animate-in fade-in duration-200">
            
            {/* Верхний ряд: Теги подкатегорий + Кнопка "Продати" */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                
                {/* Область тегов скроллится на мобилках */}
                <div className="flex flex-wrap gap-2 max-w-3xl">
                    {DEMO_SUB_CATEGORIES.map((sub) => {
                        const isSelected = selectedSub === sub;
                        return (
                            <button
                                key={sub}
                                type="button"
                                onClick={() => setSelectedSub(sub)}
                                className={`px-3 py-1.5 text-xs rounded-md font-medium transition-all duration-150 border ${
                                    isSelected
                                        ? "bg-black border-black text-white shadow-sm"
                                        : "bg-[#EAEAEA] border-transparent text-zinc-600 hover:bg-zinc-300/80 hover:text-black"
                                }`}
                            >
                                {sub}
                            </button>
                        );
                    })}
                </div>

                {/* Кнопка "Продати..." справа */}
                <button 
                    type="button"
                    className="shrink-0 border border-zinc-300 hover:border-[#4384D0] bg-white text-[#4384D0] font-bold text-xs px-4 py-2.5 rounded-lg shadow-sm transition-all active:scale-[0.98]"
                >
                    {sellButtonText.charAt(0).toUpperCase() + sellButtonText.slice(1)}
                </button>
            </div>

            {/* Нижний ряд: Переключатель онлайн и Поиск */}
            <div className="flex flex-wrap items-center gap-3">
                
                {/* Переключатель "Лише продавці онлайн" */}
                <label className="flex items-center gap-3 bg-white border border-zinc-200 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-zinc-50 transition shadow-sm select-none">
                    <span className="text-xs font-bold text-zinc-800">Лише продавці онлайн</span>
                    <div className="relative">
                        <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={isOnlineOnly}
                            onChange={() => setIsOnlineOnly(!isOnlineOnly)}
                        />
                        <div className="w-8 h-4 bg-zinc-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#4384D0]"></div>
                    </div>
                </label>

                {/* Поле поиска "Пошук за описом" */}
                <div className="relative w-full max-w-xs">
                    <input 
                        type="text"
                        placeholder="Пошук за описом"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white border border-zinc-200 rounded-lg pl-3 pr-8 py-1.5 text-xs font-medium text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#4E8AD6] focus:ring-1 focus:ring-[#4E8AD6] transition shadow-sm"
                    />
                    <svg 
                        className="w-3.5 h-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

            </div>

        </div>
    );
}
"use client";

import { useState, useEffect } from "react";
import { Card } from "./card";
import { gameDatabase } from "../data/gameData";

export default function Main() {
    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleGlobalClick = () => {
            setActiveCardIndex(null);
        };
        window.addEventListener("click", handleGlobalClick);
        return () => window.removeEventListener("click", handleGlobalClick);
    }, []);

    const fullDatabase = [...gameDatabase];
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const scrollToLetter = (letter: string) => {
        const element = document.getElementById(`section-${letter}`);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const groupedDatabase: { [key: string]: typeof fullDatabase } = {};

    fullDatabase.forEach((item) => {
        const firstLetter = item.name.trim().charAt(0).toUpperCase();
        if (!groupedDatabase[firstLetter]) {
            groupedDatabase[firstLetter] = [];
        }
        groupedDatabase[firstLetter].push(item);
    });

    const existingLetters = Object.keys(groupedDatabase).sort();
    let cardGlobalIndex = 0;

    return (
        <div className="flex max-w-[1300px] mx-auto w-full px-4 gap-[20px] mt-[56px] mb-[56px] relative lg:max-w-[1300px] lg:mx-auto lg:w-full lg:px-4 lg:gap-[20px] lg:mt-[56px] lg:mb-[56px] lg:flex lg:relative">

            {/* Боковое меню */}
            <aside className="hidden sm:block w-[30px] shrink-0 relative lg:block lg:w-[30px] lg:shrink-0 lg:relative">
                <div className="sticky top-[15%] flex flex-col gap-y-1 text-[12px] font-bold text-[#4384D0] select-none items-center lg:sticky lg:top-[15%] lg:flex lg:flex-col lg:gap-y-1 lg:text-[12px] lg:font-bold lg:select-none lg:items-center">
                    {letters.map((letter) => (
                        <button
                            key={letter}
                            onClick={() => scrollToLetter(letter)}
                            className="hover:text-white hover:bg-[#4384D0] hover:rounded-sm hover:scale-95 transition-all w-[25px] text-center cursor-pointer lg:w-[25px] lg:text-center lg:cursor-pointer lg:transition-all lg:hover:scale-95"
                        >
                            {letter}
                        </button>
                    ))}
                </div>
            </aside>

            {/* Основной контент с карточками */}
            <div className="flex-1 flex flex-col gap-8 lg:flex-1 lg:flex lg:flex-col lg:gap-8">
                {existingLetters.map((letter) => (
                    <div key={letter} id={`section-${letter}`} className="flex flex-col gap-4 scroll-mt-24 lg:flex lg:flex-col lg:gap-4 lg:scroll-mt-24">

                        <div className="flex justify-start lg:flex lg:justify-start">
                            <div className="w-6 h-6 flex items-center justify-center text-[#919191] text-base font-bold select-none lg:w-6 lg:h-6 lg:flex lg:items-center lg:justify-center lg:text-base lg:font-bold lg:select-none">
                                {letter}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-items-center gap-x-[30px] gap-y-[46px] w-full lg:w-full lg:grid lg:grid-cols-6 lg:justify-items-center lg:gap-x-[30px] lg:gap-y-[46px]">
                            {groupedDatabase[letter].map((item) => {
                                const currentIndex = cardGlobalIndex;
                                cardGlobalIndex++;

                                return (
                                    <Card
                                        key={item.name}
                                        name={item.name}
                                        image={item.image}
                                        gradient={item.gradient}
                                        categories={item.categories} // Передаем корректные категории из item
                                        isFlipped={activeCardIndex === currentIndex} // Проверяем переворот по индексу
                                        onFlip={() => {
                                            // Если карточка уже открыта — закрываем, иначе — открываем её
                                            setActiveCardIndex(activeCardIndex === currentIndex ? null : currentIndex);
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
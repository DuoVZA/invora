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
        <div className="flex max-w-[1300px] mx-auto w-full px-4 gap-[20px] mt-[56px] mb-[56px]">

            <aside className="hidden sm:block fixed top-[15%] left-[1%] h-fit z-50">
                <div className="grid grid-cols-1 gap-x-2 gap-y-1 w-[25px] pl-[160%] text-[12px] font-bold text-[#4384D0]">
                    {letters.map((letter) => (
                        <button
                            key={letter}
                            onClick={() => scrollToLetter(letter)}
                            className="hover:text-white hover:bg-[#4384D0] hover:rounded-sm hover:scale-95 transition-all w-full text-center cursor-pointer"
                        >
                            {letter}
                        </button>
                    ))}
                </div>
            </aside>

            <div className="flex-1 flex flex-col gap-8">
                {existingLetters.map((letter) => (
                    <div key={letter} id={`section-${letter}`} className="flex flex-col gap-4 scroll-mt-27">

                        <div className="flex justify-start">
                            <div className="w-6 h-6 flex items-center justify-center text-[#919191] text-m font-bold select-none">
                                {letter}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-items-center gap-x-[30px] gap-y-[46px] w-full">
                            {groupedDatabase[letter].map((item) => {
                                const currentIndex = cardGlobalIndex;
                                cardGlobalIndex++;

                                return (
                                    <Card
                                        key={currentIndex}
                                        image={item.image}
                                        name={item.name}
                                        gradient={item.gradient}
                                        buttons={item.buttons}
                                        isFlipped={activeCardIndex === currentIndex}
                                        onFlip={() => setActiveCardIndex(activeCardIndex === currentIndex ? null : currentIndex)}
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
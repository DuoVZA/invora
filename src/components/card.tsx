"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { slugify } from "@/utils/slugify";

type Props = {
    image: string;
    name: string;
    gradient: string;
    categories: string[];
    isFlipped: boolean;
    onFlip: () => void;
};

export function Card({ image, name, gradient, categories = [], isFlipped, onFlip }: Props) {
    const [isAnimating, setIsAnimating] = useState(false);
    const [localFlipped, setLocalFlipped] = useState(isFlipped);

    useEffect(() => {
        if (isFlipped !== localFlipped) {
            setIsAnimating(true);
            const timer = setTimeout(() => {
                setLocalFlipped(isFlipped);
                setIsAnimating(false);
            }, 150);
            return () => clearTimeout(timer);
        }
    }, [isFlipped, localFlipped]);

    return (
        /* Внешний стабильный каркас */
        <div
            onClick={(e) => {
                e.stopPropagation();
                onFlip();
            }}
            className="w-[185px] h-[245px] select-none lg:w-[185px] lg:h-[245px] lg:select-none"
        >
            {/* Элемент с анимацией переворота и тенями */}
            <div
                className={`w-full h-full cursor-pointer rounded-[13px] transition-all box-border lg:w-full lg:h-full lg:cursor-pointer lg:rounded-[13px] lg:box-border
                    ${isAnimating
                        ? "scale-x-0 duration-[150ms] ease-in-out lg:scale-x-0 lg:duration-[150ms]"
                        : "scale-x-100 duration-300 ease-out lg:scale-x-100 lg:duration-300"
                    }
                    ${isFlipped
                        ? "-translate-y-2 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3),0_10px_10px_-5px_rgba(0,0,0,0.2)] lg:-translate-y-2 lg:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3),0_10px_10px_-5px_rgba(0,0,0,0.2)]"
                        : "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] lg:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] lg:hover:-translate-y-1 lg:hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]"
                    }
                `}
            >
                {!localFlipped ? (
                    /* ЛИЦЕВАЯ СТОРОНА (Обложка игры) */
                    <div className="w-full h-full rounded-[13px] overflow-hidden lg:w-full lg:h-full lg:rounded-[13px] lg:overflow-hidden">
                        <img src={image} alt={name} className="w-full h-full object-cover lg:w-full lg:h-full lg:object-cover" />
                    </div>
                ) : (
                    /* ОБРАТНАЯ СТОРОНА (Список категорий) */
                    <div className={`w-full h-full bg-gradient-to-br ${gradient} rounded-[13px] p-3 flex flex-col justify-center gap-2 box-border lg:w-full lg:h-full lg:rounded-[13px] lg:p-3 lg:flex lg:flex-col lg:justify-center lg:gap-2 lg:box-border`}>

                        {categories.map((category, index) => {
                            const buttonStyles = "w-full bg-white/10 text-white py-1.5 rounded-md font-medium text-xs cursor-pointer text-center backdrop-blur-sm border border-transparent select-none transition-all duration-150 ease-in-out hover:bg-white/25 hover:border-white/60 hover:shadow-[0_0_12px_rgba(255,255,255,0.6)] active:scale-95 active:translate-y-[1px] active:shadow-none block lg:w-full lg:py-1.5 lg:rounded-md lg:font-medium lg:text-xs lg:cursor-pointer lg:text-center lg:select-none";

                            // Автоматически собираем чистый URL с query-параметром
                            const gameSlug = slugify(name);
                            const categorySlug = slugify(category);

                            const autoHref = `/games/${gameSlug}?category=${categorySlug}`;

                            return (
                                <Link
                                    key={index}
                                    href={autoHref}
                                    onClick={(e) => {
                                        // Отрезаем клик, чтобы карточка обратно не закрывалась в лицо
                                        e.stopPropagation();
                                    }}
                                    className={buttonStyles}
                                >
                                    {category}
                                </Link>
                            );
                        })}

                    </div>
                )}
            </div>
        </div>
    );
}
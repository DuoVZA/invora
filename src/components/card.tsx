"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type CardButton = {
    text: string;
    onClick: () => void;
    href?: string;
};

type Props = {
    image: string;
    name: string;
    gradient: string;
    buttons: CardButton[];
    isFlipped: boolean;    
    onFlip: () => void;    
};

export function Card({ image, name, gradient, buttons, isFlipped, onFlip }: Props) {
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
        /* Внешний контейнер теперь выступает стабильным невидимым каркасом.
           Это убирает любые баги с "отваливающимися" белыми блоками по бокам. */
        <div 
            onClick={(e) => {
                e.stopPropagation(); 
                onFlip();
            }}
            className="w-[185px] h-[245px] select-none"
        >
            {/* Вся магия здесь: тени, подъем, скругления углов и схлопывание по оси X 
                работают строго на одном и том же элементе. */ }
            <div 
                className={`w-full h-full cursor-pointer rounded-[13px] transition-all box-border
                    ${isAnimating 
                        ? "scale-x-0 duration-[150ms] ease-in-out" 
                        : "scale-x-100 duration-300 ease-out"
                    }
                    ${isFlipped 
                        ? "-translate-y-2 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3),0_10px_10px_-5px_rgba(0,0,0,0.2)]" 
                        : "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]"
                    }
                `}
            >
                {!localFlipped ? (
                    <div className="w-full h-full rounded-[13px] overflow-hidden">
                        <img src={image} alt={name} className="w-full h-full object-cover"/>
                    </div>
                ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${gradient} rounded-[13px] p-3 flex flex-col justify-center gap-2 box-border`}>
                        
                        {buttons.map((btn, index) => {
                            const buttonStyles = "w-full bg-white/10 text-white py-1.5 rounded-md font-medium text-xs cursor-pointer text-center backdrop-blur-sm border border-transparent select-none transition-all duration-150 ease-in-out hover:bg-white/25 hover:border-white/60 hover:shadow-[0_0_12px_rgba(255,255,255,0.6)] active:scale-95 active:translate-y-[1px] active:shadow-none block";

                            if (btn.href) {
                                return (
                                    <Link
                                        key={index}
                                        href={btn.href}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            btn.onClick();
                                        }}
                                        className={buttonStyles}
                                    >
                                        {btn.text}
                                    </Link>
                                );
                            }

                            return (
                                <button 
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation(); 
                                        btn.onClick();
                                    }}
                                    className={buttonStyles}
                                >
                                    {btn.text}
                                </button>
                            );
                        })}
                        
                    </div>
                )}
            </div>
        </div>
    );
}
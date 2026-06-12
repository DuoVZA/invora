"use client";

import { useState, useEffect } from "react";

type CardButton = {
    text: string;
    onClick: () => void;
};

type Props = {
    image: string;
    name: string;
    gradient: string;
    buttons: CardButton[];
    isFlipped: boolean;    // Управляется снаружи
    onFlip: () => void;    // Функция переключения снаружи
};

export function Card({ image, name, gradient, buttons, isFlipped, onFlip }: Props) {
    const [isAnimating, setIsAnimating] = useState(false);
    const [localFlipped, setLocalFlipped] = useState(isFlipped);

    // Синхронизируем внешнее состояние с анимацией сужения
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
        /* ГЛАВНЫЙ КОНТЕЙНЕР: теперь проверяем внешний пропс `isFlipped` вместо `localFlipped`.
           Карточка начнет взлетать вверх и менять тень РОВНО в милисекунду клика, одновременно со стартом сужения.
        */
        <div 
            className={`w-[175px] h-[233px] cursor-pointer select-none transition-all duration-300 ease-in-out ${
                isFlipped ? "-translate-y-2.5 drop-shadow-[0_12px_20px_rgba(0,0,0,0.4)]" : "drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            }`}
            onClick={(e) => {
                e.stopPropagation(); // Чтобы клик по карте не ловился глобальным обработчиком "закрыть всё"
                if (!isAnimating) onFlip();
            }}
        >
            {/* Контейнер анимации сужения */}
            <div 
                className={`w-full h-full rounded-[13px] transition-transform duration-[150ms] ease-in-out ${
                    isAnimating ? "scale-x-0" : "scale-x-100"
                }`}
            >
                {!localFlipped ? (
                    <div className="w-full h-full rounded-[13px] overflow-hidden">
                        <img src={image} alt={name} className="w-full h-full object-cover"/>
                    </div>
                ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${gradient} rounded-[13px] p-3 flex flex-col justify-center gap-2 box-border`}>
                        
                        {buttons.map((btn, index) => (
                            <button 
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation(); // Защита от обратного переворота
                                    btn.onClick();
                                }}
                                className="w-full bg-white/10 text-white py-1.5 rounded-md font-medium text-xs cursor-pointer text-center backdrop-blur-sm border border-transparent transition-all duration-200 hover:bg-white/25 hover:border-white/60 hover:shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                            >
                                {btn.text}
                            </button>
                        ))}
                        
                    </div>
                )}
            </div>
        </div>
    );
}
"use client";

import Link from "next/link";

export default function Login() {
    return (
        /* Убрали min-h-screen, заменили на flex-1 и одинаковые аккуратные отступы py-12 */
        <div className="w-full flex-1 flex flex-col justify-center items-center box-border px-4 py-12 lg:w-full lg:flex-1 lg:flex lg:flex-col lg:justify-center lg:items-center lg:box-border lg:px-4 lg:py-12">
            
            <img 
                src="/pictures/invora_logo.png" 
                alt="Invora Logo" 
                className="w-full max-w-[120px] sm:max-w-[140px] mb-4 object-contain shrink-0 lg:w-full lg:max-w-[140px] lg:mb-4 lg:object-contain lg:shrink-0" 
            />
            
            <div className="w-full max-w-[340px] sm:max-w-[380px] bg-[#FFFFFF] rounded-[16px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-5 sm:p-6 flex flex-col gap-4 box-border lg:w-full lg:max-w-[380px] lg:bg-[#FFFFFF] lg:rounded-[16px] lg:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] lg:p-6 lg:flex lg:flex-col lg:gap-4 lg:box-border">
                
                <div className="w-full flex flex-row justify-between items-baseline border-b border-[#919191] pb-2 lg:w-full lg:flex lg:flex-row lg:justify-between lg:items-baseline lg:border-b lg:border-[#919191] lg:pb-2">
                    <p className="text-sm sm:text-base text-[#000000] font-medium leading-none whitespace-nowrap lg:text-base lg:font-medium lg:leading-none lg:whitespace-nowrap">
                        З поверненням до <strong className="text-[#4384D0] font-bold lg:font-bold">Invora</strong>
                    </p>
                    <Link href="/signup" className="shrink-0 pl-2 lg:shrink-0 lg:pl-2">
                        <p className="text-[#4384D0] hover:underline text-[10px] sm:text-xs font-medium whitespace-nowrap lg:text-xs lg:font-medium lg:whitespace-nowrap">
                            Реєстрація
                        </p>
                    </Link>
                </div>

                <div className="flex flex-col gap-3 lg:flex lg:flex-col lg:gap-3">
                    <div className="flex flex-row justify-between sm:justify-start sm:gap-4 border-b border-zinc-100 pb-1.5 text-[#919191] text-[10px] sm:text-xs whitespace-nowrap lg:flex lg:flex-row lg:justify-start lg:gap-4 lg:border-b lg:border-zinc-100 lg:pb-1.5 lg:text-[#919191] lg:text-xs lg:whitespace-nowrap">
                        <p className="cursor-pointer hover:text-zinc-800 transition-colors font-semibold text-[#4384D0] border-b-2 border-[#4384D0] pb-1.5 -mb-[8px] lg:cursor-pointer lg:font-semibold lg:border-b-2 lg:pb-1.5 lg:-mb-[8px]">Електронна пошта</p>
                        <p className="cursor-pointer hover:text-zinc-800 transition-colors pb-1.5 lg:cursor-pointer lg:pb-1.5">Мобільний</p>
                        <p className="cursor-pointer hover:text-zinc-800 transition-colors pb-1.5 lg:cursor-pointer lg:pb-1.5">QR-код</p>
                    </div>
                    
                    <input 
                        type="text" 
                        placeholder="Електронна пошта" 
                        className="w-full rounded-[7px] p-2.5 text-xs outline-none transition-colors bg-[#EEEEEE] text-[#A8A8A8] lg:w-full lg:rounded-[7px] lg:p-2.5 lg:text-xs lg:outline-none lg:bg-[#EEEEEE] lg:text-[#A8A8A8]"
                    />
                    
                    <button className="w-full bg-[#4384D0] text-white py-2 rounded-full hover:bg-[#3b75ba] transition-colors font-medium text-xs cursor-pointer whitespace-nowrap active:scale-[0.98] lg:w-full lg:bg-[#4384D0] lg:text-white lg:py-2 lg:rounded-full lg:font-medium lg:text-xs lg:cursor-pointer lg:whitespace-nowrap">
                        Увійти
                    </button>
                </div>

                {/* Линии теперь будут тонкими и идентичными */}
                <div className="flex items-center w-full my-0.5 lg:flex lg:items-center lg:w-full lg:my-0.5">
                    <div className="flex-1 bg-[#919191]/40 h-[1px] lg:flex-1 lg:h-[1px]"></div>
                    <p className="px-2 text-[10px] text-[#919191] shrink-0 whitespace-nowrap lg:px-2 lg:text-[10px] lg:text-[#919191] lg:shrink-0 lg:whitespace-nowrap">або увійти із</p>
                    <div className="flex-1 bg-[#919191]/40 h-[1px] lg:flex-1 lg:h-[1px]"></div>
                </div>

                {/* Убрали проценты, сделали ровную и адаптивную сетку */}
                <div className="w-full grid grid-cols-3 gap-2 text-black text-[11px] sm:text-xs font-medium lg:w-full lg:grid lg:grid-cols-3 lg:gap-2 lg:text-black lg:text-xs lg:font-medium">
                    <button className="flex flex-row gap-1.5 justify-center items-center border border-[#C0C0C0] rounded-md py-1.5 px-2 hover:bg-zinc-50 transition-colors cursor-pointer active:scale-95 lg:flex lg:flex-row lg:gap-1.5 lg:justify-center lg:items-center lg:border lg:border-[#C0C0C0] lg:rounded-md lg:py-1.5 lg:px-2 lg:cursor-pointer">
                        <img src="/pictures/google_logo.png" alt="Google" className="w-4 h-4 object-contain shrink-0 lg:w-4 lg:h-4 lg:object-contain lg:shrink-0"/>
                        <span>Google</span>
                    </button>
                    <button className="flex flex-row gap-1.5 justify-center items-center border border-[#C0C0C0] rounded-md py-1.5 px-2 hover:bg-zinc-50 transition-colors cursor-pointer active:scale-95 lg:flex lg:flex-row lg:gap-1.5 lg:justify-center lg:items-center lg:border lg:border-[#C0C0C0] lg:rounded-md lg:py-1.5 lg:px-2 lg:cursor-pointer">
                        <img src="/pictures/telegram_logo.png" alt="Telegram" className="w-4 h-4 object-contain shrink-0 lg:w-4 lg:h-4 lg:object-contain lg:shrink-0"/>
                        <span>Telegram</span>
                    </button>
                    <button className="flex flex-row gap-1.5 justify-center items-center border border-[#C0C0C0] rounded-md py-1.5 px-2 hover:bg-zinc-50 transition-colors cursor-pointer active:scale-95 lg:flex lg:flex-row lg:gap-1.5 lg:justify-center lg:items-center lg:border lg:border-[#C0C0C0] lg:rounded-md lg:py-1.5 lg:px-2 lg:cursor-pointer">
                        <img src="/pictures/instagram_logo.png" alt="Instagram" className="w-4 h-4 object-contain shrink-0 lg:w-4 lg:h-4 lg:object-contain lg:shrink-0"/>
                        <span>Instagram</span>
                    </button>
                </div>

            </div>
        </div>
    );
}
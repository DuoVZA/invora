export default function Footer() {
    return (
        <div className="bg-zinc-200 w-full h-[104px] drop-shadow-[0_-4px_4px_rgba(0,0,0,0.25)] text-[#919191] flex flex-col justify-around items-center lg:w-full lg:h-[104px] lg:flex lg:flex-row lg:justify-around lg:items-center">
            
            <div className="flex flex-col gap-2 items-center lg:flex lg:flex-row lg:gap-[34px] lg:items-center">
                <p className="lg:block">© 2015–2026 Invora</p>
                <p className="cursor-pointer hover:text-zinc-600 transition-colors">Політика конфіденційності</p>
                <p className="cursor-pointer hover:text-zinc-600 transition-colors">Політика cookie</p>
                <p className="cursor-pointer hover:text-zinc-600 transition-colors">Контакти</p>
            </div>
            
            <div className="flex flex-row gap-[26px] lg:flex lg:flex-row lg:gap-[26px]">
                <img src="/pictures/telegram_logo.png" alt="Telegram" className="w-5 h-5 object-contain lg:w-5 lg:h-5" />
                <img src="/pictures/youtube_logo.png" alt="YouTube" className="w-5 h-5 object-contain lg:w-5 lg:h-5" />
            </div>
            
        </div>
    );
}
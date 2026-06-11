export default function Footer() {
    return (
        <div className="bg-zinc-200  w-full h-[104px] drop-shadow-[0_-4px_4px_rgba(0,0,0,0.25)] text-[#919191] flex flex-column justify-around items-center">
            <div className="flex flex-column gap-[34px]">
                <p>© 2015–2026 Invora</p>
                <p>Політика конфіденційності</p>
                <p>Політика cookie</p>
                <p>Контакти</p>
            </div>
            <div className="flex flex-column gap-[26px]">
                <img src="/pictures/telegram_logo.png" alt="Telegram" />
                <img src="/pictures/youtube_logo.png" alt="YouTube" />
            </div>
        </div>
    )
}
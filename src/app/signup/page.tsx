import Link from "next/link";

export default function Login() {
    return (
        <div className="w-full bg-zinc-50 box-border p-[94px_12px] flex flex-col items-center">
            
            <img 
                src="/pictures/invora_logo.png" 
                alt="Invora Logo" 
                className="w-full max-w-[120px] sm:max-w-[140px] mb-4 object-contain" 
            />
            
            <div className="w-full max-w-[340px] sm:max-w-[380px] bg-[#FFFFFF] rounded-[16px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-4 sm:p-5 flex flex-col gap-4 box-border">
                
                <div className="w-full flex flex-row justify-between items-baseline border-b border-[#919191] pb-2">
                    <p className="text-sm sm:text-base text-[#000000] font-medium leading-none whitespace-nowrap">
                        Ласкаво просимо до <strong className="text-[#4384D0] font-bold">Invora</strong>
                    </p>
                    <Link href="/login" className="shrink-0 pl-2">
                        <p className="text-[#4384D0] hover:underline text-[10px] sm:text-xs font-medium whitespace-nowrap">
                            Вхід
                        </p>
                    </Link>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-between sm:justify-start sm:gap-4 border-b border-zinc-100 pb-1.5 text-[#919191] text-[10px] sm:text-xs whitespace-nowrap">
                        <p className="cursor-pointer hover:text-zinc-800 transition-colors font-semibold text-[#4384D0] border-b-2 border-[#4384D0] pb-1.5 -mb-[8px]">Електронна пошта</p>
                        <p className="cursor-pointer hover:text-zinc-800 transition-colors pb-1.5">Мобільний</p>
                        <p className="cursor-pointer hover:text-zinc-800 transition-colors pb-1.5">QR-код</p>
                    </div>
                    
                    <input 
                        type="text" 
                        placeholder="Електронна пошта" 
                        className="w-full rounded-[7px] p-2 text-xs outline-none transition-colors bg-[#EEEEEE] text-[#A8A8A8]"
                    />
                    
                    <button className="w-full bg-[#4384D0] text-white py-1.5 rounded-full hover:bg-[#3b75ba] transition-colors font-medium text-xs cursor-pointer whitespace-nowrap">
                        Далі
                    </button>
                </div>

                <div className="flex items-center w-full my-0.5">
                    <div className="flex-1 bg-[#919191] h-[1px]"></div>
                    <p className="px-2 text-[10px] text-[#919191] shrink-0 whitespace-nowrap">або зареєструйтеся із</p>
                    <div className="flex-1 bg-[#919191] h-[1px]"></div>
                </div>

                <div className="w-full flex justify-center gap-3 text-black text-[70%]">
                    <button className="w-[35%] h-[10%] flex flex-row gap-[10%] justify-center items-center border border-[#C0C0C0] rounded-full p-[1%]">
                        <img src="/pictures/google_logo.png" alt="Google Logo" className="w-[20%] h-[20%]"/>
                        <p>Google</p>
                    </button>
                    <button className="w-[35%] h-[10%] flex flex-row gap-[10%] justify-center items-center border border-[#C0C0C0] rounded-full p-[1%]">
                        <img src="/pictures/telegram_logo.png" alt="Telegram Logo" className="w-[20%] h-[20%]"/>
                        <p>Telegram</p>
                    </button>
                    <button className="w-[35%] h-[10%] flex flex-row gap-[10%] justify-center items-center border border-[#C0C0C0] rounded-full p-[1%]">
                        <img src="/pictures/instagram_logo.png" alt="Instagram Logo" className="w-[20%] h-[20%]"/>
                        <p>Instagram</p>
                    </button>
                </div>

            </div>
        </div>
    );
}
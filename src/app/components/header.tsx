export default function Header() {
    return(
        <div className="flex flex-column justify-around items-center bg-zinc-50  w-full h-[87px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] ">
            <img src="/pictures/invora_logo.png" alt="Invora Logo" className="w-[124px]"/>
            <div className="flex flex-column ">
                <img src="/pictures/question_mark.png" alt="Question Mark" className="w-[18px] h-[18px]"/>
                <p>Допомога</p>
            </div>
        </div>
    )
}
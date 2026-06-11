type Props =
    {
        image: string,
        name: string,
    };

export function Card({ image, name }: Props) {
    return (
        <div className="w-[175px] h-[233px] border-1 border-black rounded-[13px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <img src={image} alt={name} className="w-[175px] h-[233px] rounded-[13px]"/>
        </div>
    )
}
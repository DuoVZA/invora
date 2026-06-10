type Props =
    {
        image: string,
        name: string,
    };

export function Card({ image, name }: Props) {
    return (
        <div className="w-[150px] h-[200px] border-1 border-black rounded-[13px] m-[21.5px_23px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <img src={image} alt={name} className="w-[150px] h-[200px] rounded-[13px]"/>
        </div>
    )
}
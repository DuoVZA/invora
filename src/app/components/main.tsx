import Link from "next/link";

import {Card} from "./card"

export default function Main() {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-x-[46px] gap-y-[43px]">
            <Card image="/pictures/adobe_acrobat.png" name="Adobe Acrobat"></Card>
            <Card image="/pictures/abyss_of_dungeons.png" name="Abyss of Dungeons"></Card>
            <Card image="/pictures/active_matter.png" name="Active Matter"></Card>
            <Card image="/pictures/afk_arena.png" name="AFK Arena"></Card>
            <Card image="/pictures/age_of_mythology_retold.png" name="Age of Mythology Retold"></Card>
            <Card image="/pictures/age_of_wonders_4.png" name="Age of Wonders 4"></Card>
            <Card image="/pictures/ai_limit.png" name="AI Limit"></Card>
            <Card image="/pictures/aion_2.png" name="AION 2"></Card>
        </div>
    )
}
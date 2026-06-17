export interface GameItem {
    name: string;
    image: string;
    gradient: string;
    categories: string[];
    options?: string[];
}

export const gameDatabase: GameItem[] = [
    {
        name: "Abyss of Dungeons",
        image: "/pictures/abyss_of_dungeons.png",
        gradient: "from-[#080b19] via-[#101935] to-[#2563eb]",
        categories: ["Аккаунти", "Донат", "Інше"]
    },
    {
        name: "Acrobat",
        image: "/pictures/adobe_acrobat.png",
        gradient: "from-[#fa2525] to-[#7f0000]",
        categories: ["Аккаунти", "Послуги", "Навчання", "Підписка", "Інше"]
    },
    {
        name: "Active Matter",
        image: "/pictures/active_matter.png",
        gradient: "from-[#111827] via-[#1f2937] to-[#37413a]",
        categories: ["Аккаунти", "Ключі", "Послуги", "Twitch Drops", "Інше"]
    },
    {
        name: "AFK Arena",
        image: "/pictures/afk_arena.png",
        gradient: "from-[#450a0a] via-[#7c2d12] to-[#d97706]",
        categories: ["Аккаунти", "Алмази", "Донат", "Послуги", "Гайды"],
        options: ["All", "60 алмазів", "300 алмазів", "980 алмазів", "1980 алмазів"]
    },
    {
        name: "AFK Journey",
        image: "/pictures/afk_journey.png",
        gradient: "from-[#78350f] via-[#d97706] to-[#f59e0b]",
        categories: ["Аккаунти", "Кристаллы дракона", "Донат", "Інше"]
    },
    {
        name: "Age of Empires Mobile",
        image: "/pictures/age_of_empire_mobile.png",
        gradient: "from-[#291305] via-[#78350f] to-[#ca8a04]",
        categories: ["Аккаунти", "Empire Coins", "Донат", "Послуги", "Інше"]
    },
    {
        name: "Age of Mythology: Retold",
        image: "/pictures/age_of_mythology_retold.png",
        gradient: "from-[#022c22] via-[#064e3b] to-[#0d9488]",
        categories: ["Аккаунти", "Ключі", "Офлайн активації", "Game Pass", "Інше"]
    },
    {
        name: "Age of Wonders 4",
        image: "/pictures/age_of_wonders_4.png",
        gradient: "from-[#1e1b4b] via-[#3b0764] to-[#701a75]",
        categories: ["Аккаунти", "Ключі", "Інше"]
    },
    {
        name: "AI Limit",
        image: "/pictures/ai_limit.png",
        gradient: "from-[#0f172a] via-[#1e293b] to-[#475569]",
        categories: ["Аккаунти", "Ключі", "Офлайн активації", "Інше"]
    },
    {
        name: "Aion",
        image: "/pictures/aion.png",
        gradient: "from-[#0a192f] via-[#172554] to-[#0284c7]",
        categories: ["Кінари", "Аккаунти", "Предмети", "Послуги", "Інше"]
    },
    {
        name: "Aion 2",
        image: "/pictures/aion_2.png",
        gradient: "from-[#090514] via-[#1e1b4b] to-[#2563eb]",
        categories: ["Аккаунти", "Донат", "Предмети", "Послуги", "Інше"]
    },
    {
        name: "Alan Wake 2",
        image: "/pictures/alan_wake_2.png",
        gradient: "from-[#000000] via-[#450a0a] to-[#991b1b]",
        categories: ["Аккаунти", "Ключі", "Офлайн активації", "Game Pass", "Інше"]
    },
    {
        name: "Albion Online",
        image: "/pictures/albion.png",
        gradient: "from-[#291305] via-[#78350f] to-[#b45309]",
        categories: ["Золото", "Аккаунти", "Донат", "Послуги", "Інше"]
    },
    {
        name: "Aliens: Dark Descent",
        image: "/pictures/aliens.png",
        gradient: "from-[#020617] via-[#0f172a] to-[#0891b2]",
        categories: ["Аккаунти", "Ключі", "Офлайн активації", "Game Pass", "Інше"]
    },
    {
        name: "Among Us",
        image: "/pictures/amogus.png",
        gradient: "from-[#450a0a] via-[#991b1b] to-[#ef4444]",
        categories: ["Аккаунти", "Ключі", "Зірки", "Game Pass", "Інше"]
    },
    {
        name: "Apex Legends",
        image: "/pictures/apex.png",
        gradient: "from-[#111827] via-[#7f1d1d] to-[#ea580c]",
        categories: ["Аккаунти", "Монети", "Донат", "Досягнення", "Навчання", "Інше"],
        options: ["All", "1000 монет", "2150 монет", "4350 монет", "6700 монет"]
    },
    {
        name: "Arma Reforger",
        image: "/pictures/arma_reforger.png",
        gradient: "from-[#14532d] via-[#166534] to-[#4d7c0f]",
        categories: ["Аккаунти", "Ключі", "Послуги", "Офлайн активації", "Інше"]
    },
    {
        name: "Ashes of Creation",
        image: "/pictures/ashes_of_creation.png",
        gradient: "from-[#1e1b4b] via-[#3b0764] to-[#6b21a8]",
        categories: ["Золото", "Аккаунти", "Донат", "Предмети", "Послуги", "Інше"]
    },
    {
        name: "Asseto Corsa",
        image: "/pictures/asseto_corsa.png",
        gradient: "from-[#0f172a] via-[#334155] to-[#dc2626]",
        categories: ["Аккаунти", "Ключі", "Офлайн активації", "Інше"]
    },
    {
        name: "Astro Bot",
        image: "/pictures/astro_bot.png",
        gradient: "from-[#1e3a8a] via-[#0284c7] to-[#38bdf8]",
        categories: ["Аккаунти", "Ключі", "Інше"]
    },
    {
        name: "Baldur's Gate 3",
        image: "/pictures/baldurs_gate_3.png",
        gradient: "from-[#0c0505] via-[#2d0a0a] to-[#7f1d1d]",
        categories: ["Аккаунти", "Ключі", "Послуги"]
    },
    {
        name: "Battlefield 2042",
        image: "/pictures/battlefield_2042.png",
        gradient: "from-[#0b0f19] via-[#1e293b] to-[#0284c7]",
        categories: ["Аккаунти", "Донат", "Інше"]
    },
    {
        name: "Brawl Stars",
        image: "/pictures/brawl_stars.png",
        gradient: "from-[#2e1065] via-[#7c2d12] to-[#eab308]",
        categories: ["Аккаунти", "Геми", "Донат", "Буст"],
        options: ["All", "30 gems", "60 gems", "90 gems", "140 gems"]
    },
    {
        name: "Call of Duty: Warzone",
        image: "/pictures/cod_warzone.png",
        gradient: "from-[#030712] via-[#111827] to-[#4b5563]",
        categories: ["Аккаунти", "CP Монети", "Донат"]
    },
    {
        name: "Counter-Strike 2",
        image: "/pictures/cs2.png",
        gradient: "from-[#030712] via-[#1e1b4b] to-[#2563eb]",
        categories: ["Аккаунти", "Скіни", "Буст", "Інше"]
    },
    {
        name: "Cyberpunk 2077",
        image: "/pictures/cyberpunk_2077.png",
        gradient: "from-[#1c0d02] via-[#78350f] to-[#facc15]",
        categories: ["Ключі", "Аккаунти", "Офлайн активації"]
    },
    {
        name: "Dota 2",
        image: "/pictures/dota_2.png",
        gradient: "from-[#0a0505] via-[#450a0a] to-[#dc2626]",
        categories: ["Аккаунти", "Предмети", "Буст ММR", "Послуги"]
    },
    {
        name: "EA SPORTS FC 24",
        image: "/pictures/ea_fc_24.png",
        gradient: "from-[#022c22] via-[#064e3b] to-[#22c55e]",
        categories: ["Монети", "Аккаунти", "FC Points"],
        options: ["All", "500 FC Points", "1050 FC Points", "2800 FC Points", "5900 FC Points"]
    },
    {
        name: "Elden Ring",
        image: "/pictures/elden_ring.png",
        gradient: "from-[#020617] via-[#0f172a] to-[#1d4ed8]",
        categories: ["Ключі", "Руни / Предмети", "Аккаунти"]
    },
    {
        name: "Fortnite",
        image: "/pictures/fortnite.png",
        gradient: "from-[#1e1b4b] via-[#4c1d95] to-[#a855f7]",
        categories: ["В-бакси", "Аккаунти", "Донат / Набори"],
        options: ["All", "1000 V-Bucks", "2800 V-Bucks", "5000 V-Bucks", "13500 V-Bucks"]
    },
    {
        name: "Genshin Impact",
        image: "/pictures/genshin_impact.png",
        gradient: "from-[#0c1e36] via-[#164e63] to-[#0ea5e9]",
        categories: ["Кристали", "Аккаунти", "Послуги / Прокачка"],
        options: ["All", "60 кристалів", "300 кристалів", "980 кристалів", "6480 кристалів"]
    },
    {
        name: "GTA V Online",
        image: "/pictures/gta_v.png",
        gradient: "from-[#052e16] via-[#14532d] to-[#16a34a]",
        categories: ["Валюта (Гроші)", "Аккаунти", "Прокачка"]
    },
    {
        name: "League of Legends",
        image: "/pictures/lol.png",
        gradient: "from-[#030712] via-[#1e3a8a] to-[#d97706]",
        categories: ["Аккаунти", "RP (Валюта)", "Послуги"],
        options: ["All", "575 RP", "1380 RP", "2800 RP", "7200 RP"]
    },
    {   
        name: "Minecraft",
        image: "/pictures/minecraft.png",
        gradient: "from-[#1c1917] via-[#224d1a] to-[#22c55e]",
        categories: ["Лицензії (Ключі)", "Аккаунти", "Монети"]
    },
    {
        name: "PUBG Mobile",
        image: "/pictures/pubg_mobile.png",
        gradient: "from-[#0c0a09] via-[#451a03] to-[#ea580c]",
        categories: ["UC (Валюта)", "Аккаунти", "Донат"],
        options: ["All", "60 UC", "325 UC", "660 UC", "1800 UC"]
    },
    {
        name: "Roblox",
        image: "/pictures/roblox.png",
        gradient: "from-[#0f172a] via-[#1f2937] to-[#6b7280]",
        categories: ["Робукси", "Аккаунти", "Предмети"],
        options: ["All", "80 Robux", "400 Robux", "800 Robux", "1700 Robux"]
    },
    {
        name: "Rust",
        image: "/pictures/rust.png",
        gradient: "from-[#1c1917] via-[#450a0a] to-[#9a3412]",
        categories: ["Аккаунти", "Ключі / Гіфти", "Скіни"]
    },
    {
        name: "Valorant",
        image: "/pictures/valorant.png",
        gradient: "from-[#450a0a] via-[#991b1b] to-[#f43f5e]",
        categories: ["Аккаунти", "Валорант Поінти", "Буст"],
        options: ["All", "475 VP", "1000 VP", "2050 VP", "5350 VP"]
    },
    {
        name: "World of Tanks",
        image: "/pictures/wot.png",
        gradient: "from-[#111827] via-[#374151] to-[#4b5563]",
        categories: ["Золото", "Аккаунти", "Преміум"],
        options: ["All", "500 золота", "2500 золота", "6500 золота", "12500 золота"]
    },
    {
        name: "Heroes of Sword and Magic III",
        image: "/pictures/heroes_3.png",
        gradient: "from-[#0f172a] via-[#1e3a8a] to-[#ca8a04]",
        categories: ["Ключі", "Інше"]
    },
    {
        name: "Metro: Exodus",
        image: "/pictures/metro_exodus.png",
        gradient: "from-[#090d16] via-[#1e293b] to-[#854d0e]",
        categories: ["Ключі / Гіфти", "Аккаунти", "Офлайн активації"]
    },
    {
        name: "Stalker 2: Heart of Chornobyl",
        image: "/pictures/stalker_2.png",
        gradient: "from-[#0c0a09] via-[#451a03] to-[#c2410c]",
        categories: ["Передзамовлення", "Ключі", "Xbox Game Pass", "Інше"]
    },
    {
        name: "Stalcraft",
        image: "/pictures/stalcraft.png",
        gradient: "from-[#0084CC] to-[#000241]",
        categories: ["Аккаунти", "Артефакти", "Речі", "Інше"]
    },
    {
        name: "Dead by Daylight",
        image: "/pictures/dbd.png",
        gradient: "from-[#006C7B] to-[#190028]",
        categories: ["Аккаунти", "Ключі", "Навчання", "Інше"]
    },
    {
        name: "Back 4 Blood",
        image: "/pictures/b4b.png",
        gradient: "from-[#450a0a] to-[#991b1b]",
        categories: ["Ключі", "Аккаунти", "Послуги", "Інше"]
    },
    {
        name: "Batman: Arkham Knight",
        image: "/pictures/batman.png",
        gradient: "from-[#0f172a] to-[#1e293b]",
        categories: ["Ключі", "Аккаунти", "Офлайн"]
    },
    {
        name: "Battlefield V",
        image: "/pictures/bfv.png",
        gradient: "from-[#172554] to-[#1e3a8a]",
        categories: ["Аккаунти", "Послуги", "Валюта", "Інше"]
    },
    {
        name: "Black Myth: Wukong",
        image: "/pictures/wukong.png",
        gradient: "from-[#292524] to-[#1c1917]",
        categories: ["Ключі", "Офлайн активації", "Аккаунти"]
    },
    {
        name: "Black Desert Online",
        image: "/pictures/bdo.png",
        gradient: "from-[#1e3a8a] to-[#2563eb]",
        categories: ["Срібло", "Аккаунти", "Послуги", "Донат", "Інше"]
    },
    {
        name: "Call of Duty: Black Ops 6",
        image: "/pictures/bo6.png",
        gradient: "from-[#0c0a09] to-[#1c1917]",
        categories: ["Донат", "Аккаунти", "Ключі", "Послуги"]
    },
    {
        name: "Cities: Skylines II",
        image: "/pictures/cities_2.png",
        gradient: "from-[#1e3a8a] to-[#0369a1]",
        categories: ["Ключі", "Гіфти", "Аккаунти"]
    },
    {
        name: "Civilization VI",
        image: "/pictures/civ_6.png",
        gradient: "from-[#78350f] to-[#b45309]",
        categories: ["Ключі", "Гіфти", "Офлайн"]
    },
    {
        name: "Clash of Clans",
        image: "/pictures/coc.png",
        gradient: "from-[#7c2d12] to-[#ca8a04]",
        categories: ["Аккаунти", "Донат", "Прокачка", "Інше"]
    },
    {
        name: "Clash Royale",
        image: "/pictures/cr.png",
        gradient: "from-[#1e3a8a] to-[#1d4ed8]",
        categories: ["Геми", "Аккаунти", "Донат", "Буст"],
        options: ["All", "80 гемів", "500 гемів", "1200 гемів", "2500 гемів"]
    },
    {
        name: "Dead Island 2",
        image: "/pictures/dead_island_2.png",
        gradient: "from-[#7c2d12] to-[#b45309]",
        categories: ["Ключі", "Аккаунти", "Офлайн"]
    },
    {
        name: "Dead Space Remake",
        image: "/pictures/dead_space.png",
        gradient: "from-[#451a03] to-[#1c1917]",
        categories: ["Ключі", "Офлайн", "Аккаунти"]
    },
    {
        name: "Destiny 2",
        image: "/pictures/destiny_2.png",
        gradient: "from-[#0f172a] to-[#334155]",
        categories: ["Послуги", "Донат", "Срібло", "Аккаунти"]
    },
    {
        name: "Detroit: Become Human",
        image: "/pictures/detroit.png",
        gradient: "from-[#1e3a8a] to-[#0284c7]",
        categories: ["Ключі", "Аккаунти", "Гіфти"]
    },
    {
        name: "Diablo IV",
        image: "/pictures/diablo_4.png",
        gradient: "from-[#450a0a] to-[#111827]",
        categories: ["Донат", "Золото", "Послуги", "Аккаунти"]
    },
    {
        name: "Escape from Tarkov",
        image: "/pictures/eft.png",
        gradient: "from-[#292524] to-[#44403c]",
        categories: ["Валюта", "Аккаунти", "Предмети", "Послуги"]
    },
    {
        name: "Euro Truck Simulator 2",
        image: "/pictures/ets2.png",
        gradient: "from-[#172554] to-[#1e40af]",
        categories: ["Ключі", "Гіфти", "Послуги"]
    },
    {
        name: "Fall Guys",
        image: "/pictures/fall_guys.png",
        gradient: "from-[#db2777] to-[#4f46e5]",
        categories: ["Донат", "Аккаунти", "Шоу-бакси"]
    },
    {
        name: "Fallout 4",
        image: "/pictures/fallout_4.png",
        gradient: "from-[#14532d] to-[#3f6212]",
        categories: ["Ключі", "Гіфти", "Аккаунти"]
    },
    {
        name: "Far Cry 6",
        image: "/pictures/far_cry_6.png",
        gradient: "from-[#b45309] to-[#991b1b]",
        categories: ["Аккаунти", "Ключі", "Офлайн"]
    },
    {
        name: "Forza Horizon 5",
        image: "/pictures/forza_5.png",
        gradient: "from-[#c084fc] to-[#db2777]",
        categories: ["Аккаунти", "Ключі", "Прокачка", "Інше"]
    },
    {
        name: "Satisfactory",
        image: "/pictures/satisfactory.png",
        gradient: "from-[#ca8a04] to-[#b45309]",
        categories: ["Ключі", "Гіфти", "Аккаунти"]
    },
    {
        name: "Sea of Thieves",
        image: "/pictures/sea_of_thieves.png",
        gradient: "from-[#0f766e] to-[#115e59]",
        categories: ["Монети", "Донат", "Аккаунти", "Послуги"]
    },
    {
        name: "Dead Cells",
        image: "/pictures/dead_cells.png",
        gradient: "from-[#991b1b] to-[#3b0764]",
        categories: ["Ключі", "Гіфти", "Аккаунти"]
    },
];
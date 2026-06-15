export interface GameButton {
    text: string;
    onClick: () => void;
}

export interface GameItem {
    name: string;
    image: string;
    gradient: string;
    buttons: GameButton[];
}

export const gameDatabase: GameItem[] = [
    {
        name: "Abyss of Dungeons",
        image: "/pictures/abyss_of_dungeons.png",
        gradient: "from-[#080b19] via-[#101935] to-[#2563eb]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Abyss of Dungeons: Аккаунти") },
            { text: "Донат", onClick: () => console.log("Abyss of Dungeons: Донат") },
            { text: "Інше", onClick: () => console.log("Abyss of Dungeons: Інше") }
        ]
    },
    {
        name: "Acrobat",
        image: "/pictures/adobe_acrobat.png",
        gradient: "from-[#fa2525] to-[#7f0000]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Acrobat: Аккаунти") },
            { text: "Послуги", onClick: () => console.log("Acrobat: Послуги") },
            { text: "Навчання", onClick: () => console.log("Acrobat: Навчання") },
            { text: "Підписка", onClick: () => console.log("Acrobat: Підписка") },
            { text: "Інше", onClick: () => console.log("Acrobat: Інше") }
        ]
    },
    {
        name: "Active Matter",
        image: "/pictures/active_matter.png",
        gradient: "from-[#111827] via-[#1f2937] to-[#37413a]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Active Matter: Аккаунти") },
            { text: "Ключі", onClick: () => console.log("Active Matter: Ключі") },
            { text: "Послуги", onClick: () => console.log("Active Matter: Послуги") },
            { text: "Twitch Drops", onClick: () => console.log("Active Matter: Twitch Drops") },
            { text: "Інше", onClick: () => console.log("Active Matter: Інше") }
        ]
    },
    {
        name: "AFK Arena",
        image: "/pictures/afk_arena.png",
        gradient: "from-[#450a0a] via-[#7c2d12] to-[#d97706]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("AFK Arena: Аккаунти") },
            { text: "Алмази", onClick: () => console.log("AFK Arena: Алмази") },
            { text: "Донат", onClick: () => console.log("AFK Arena: Донат") },
            { text: "Послуги", onClick: () => console.log("AFK Arena: Послуги") },
            { text: "Гайды", onClick: () => console.log("AFK Arena: Гайды") }
        ]
    },
    {
        name: "AFK Journey",
        image: "/pictures/afk_journey.png",
        gradient: "from-[#78350f] via-[#d97706] to-[#f59e0b]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("AFK Journey: Аккаунти") },
            { text: "Кристаллы дракона", onClick: () => console.log("AFK Journey: Кристаллы дракона") },
            { text: "Донат", onClick: () => console.log("AFK Journey: Донат") },
            { text: "Інше", onClick: () => console.log("AFK Journey: Інше") }
        ]
    },
    {
        name: "Age of Empires Mobile",
        image: "/pictures/age_of_empire_mobile.png",
        gradient: "from-[#291305] via-[#78350f] to-[#ca8a04]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Age of Empires Mobile: Аккаунти") },
            { text: "Empire Coins", onClick: () => console.log("Age of Empires Mobile: Empire Coins") },
            { text: "Донат", onClick: () => console.log("Age of Empires Mobile: Донат") },
            { text: "Послуги", onClick: () => console.log("Age of Empires Mobile: Послуги") },
            { text: "Інше", onClick: () => console.log("Age of Empires Mobile: Інше") }
        ]
    },
    {
        name: "Age of Mythology: Retold",
        image: "/pictures/age_of_mythology_retold.png",
        gradient: "from-[#022c22] via-[#064e3b] to-[#0d9488]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Age of Mythology: Retold: Аккаунти") },
            { text: "Ключі", onClick: () => console.log("Age of Mythology: Retold: Ключі") },
            { text: "Офлайн активації", onClick: () => console.log("Age of Mythology: Retold: Офлайн активації") },
            { text: "Game Pass", onClick: () => console.log("Age of Mythology: Retold: Game Pass") },
            { text: "Інше", onClick: () => console.log("Age of Mythology: Retold: Інше") }
        ]
    },
    {
        name: "Age of Wonders 4",
        image: "/pictures/age_of_wonders_4.png",
        gradient: "from-[#1e1b4b] via-[#3b0764] to-[#701a75]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Age of Wonders 4: Аккаунти") },
            { text: "Ключі", onClick: () => console.log("Age of Wonders 4: Ключі") },
            { text: "Інше", onClick: () => console.log("Age of Wonders 4: Інше") }
        ]
    },
    {
        name: "AI Limit",
        image: "/pictures/ai_limit.png",
        gradient: "from-[#0f172a] via-[#1e293b] to-[#475569]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("AI Limit: Аккаунти") },
            { text: "Ключі", onClick: () => console.log("AI Limit: Ключі") },
            { text: "Офлайн активації", onClick: () => console.log("AI Limit: Офлайн активації") },
            { text: "Інше", onClick: () => console.log("AI Limit: Інше") }
        ]
    },
    {
        name: "Aion",
        image: "/pictures/aion.png",
        gradient: "from-[#0a192f] via-[#172554] to-[#0284c7]",
        buttons: [
            { text: "Кінари", onClick: () => console.log("Aion: Кінари") },
            { text: "Аккаунти", onClick: () => console.log("Aion: Аккаунти") },
            { text: "Предмети", onClick: () => console.log("Aion: Предмети") },
            { text: "Послуги", onClick: () => console.log("Aion: Послуги") },
            { text: "Інше", onClick: () => console.log("Aion: Інше") }
        ]
    },
    {
        name: "Aion 2",
        image: "/pictures/aion_2.png",
        gradient: "from-[#090514] via-[#1e1b4b] to-[#2563eb]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Aion 2: Аккаунти") },
            { text: "Донат", onClick: () => console.log("Aion 2: Донат") },
            { text: "Предмети", onClick: () => console.log("Aion 2: Предмети") },
            { text: "Послуги", onClick: () => console.log("Aion 2: Послуги") },
            { text: "Інше", onClick: () => console.log("Aion 2: Інше") }
        ]
    },
    {
        name: "Alan Wake 2",
        image: "/pictures/alan_wake_2.png",
        gradient: "from-[#000000] via-[#450a0a] to-[#991b1b]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Alan Wake 2: Аккаунти") },
            { text: "Ключі", onClick: () => console.log("Alan Wake 2: Ключі") },
            { text: "Офлайн активації", onClick: () => console.log("Alan Wake 2: Офлайн активації") },
            { text: "Game Pass", onClick: () => console.log("Alan Wake 2: Game Pass") },
            { text: "Інше", onClick: () => console.log("Alan Wake 2: Інше") }
        ]
    },
    {
        name: "Albion Online",
        image: "/pictures/albion.png",
        gradient: "from-[#291305] via-[#78350f] to-[#b45309]",
        buttons: [
            { text: "Золото", onClick: () => console.log("Albion Online: Золото") },
            { text: "Аккаунти", onClick: () => console.log("Albion Online: Аккаунти") },
            { text: "Донат", onClick: () => console.log("Albion Online: Донат") },
            { text: "Послуги", onClick: () => console.log("Albion Online: Послуги") },
            { text: "Інше", onClick: () => console.log("Albion Online: Інше") }
        ]
    },
    {
        name: "Aliens: Dark Descent",
        image: "/pictures/aliens.png",
        gradient: "from-[#020617] via-[#0f172a] to-[#0891b2]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Aliens: Dark Descent: Аккаунти") },
            { text: "Ключі", onClick: () => console.log("Aliens: Dark Descent: Ключі") },
            { text: "Офлайн активації", onClick: () => console.log("Aliens: Dark Descent: Офлайн активації") },
            { text: "Game Pass", onClick: () => console.log("Aliens: Dark Descent: Game Pass") },
            { text: "Інше", onClick: () => console.log("Aliens: Dark Descent: Інше") }
        ]
    },
    {
        name: "Among Us",
        image: "/pictures/amogus.png",
        gradient: "from-[#450a0a] via-[#991b1b] to-[#ef4444]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Among Us: Аккаунти") },
            { text: "Ключі", onClick: () => console.log("Among Us: Ключі") },
            { text: "Звёзды", onClick: () => console.log("Among Us: Звёзды") },
            { text: "Game Pass", onClick: () => console.log("Among Us: Game Pass") },
            { text: "Інше", onClick: () => console.log("Among Us: Інше") }
        ]
    },
    {
        name: "Apex Legends",
        image: "/pictures/apex.png",
        gradient: "from-[#111827] via-[#7f1d1d] to-[#ea580c]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Apex Legends: Аккаунти") },
            { text: "Монети", onClick: () => console.log("Apex Legends: Монети") },
            { text: "Донат", onClick: () => console.log("Apex Legends: Донат") },
            { text: "Досягнення", onClick: () => console.log("Apex Legends: Досягнення") },
            { text: "Навчання", onClick: () => console.log("Apex Legends: Навчання") },
            { text: "Інше", onClick: () => console.log("Apex Legends: Інше") }
        ]
    },
    {
        name: "Arma Reforger",
        image: "/pictures/arma_reforger.png",
        gradient: "from-[#14532d] via-[#166534] to-[#4d7c0f]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Arma Reforger: Аккаунти") },
            { text: "Ключі", onClick: () => console.log("Arma Reforger: Ключі") },
            { text: "Послуги", onClick: () => console.log("Arma Reforger: Послуги") },
            { text: "Офлайн активації", onClick: () => console.log("Arma Reforger: Офлайн активації") },
            { text: "Інше", onClick: () => console.log("Arma Reforger: Інше") }
        ]
    },
    {
        name: "Ashes of Creation",
        image: "/pictures/ashes_of_creation.png",
        gradient: "from-[#1e1b4b] via-[#3b0764] to-[#6b21a8]",
        buttons: [
            { text: "Золото", onClick: () => console.log("Ashes of Creation: Золото") },
            { text: "Аккаунти", onClick: () => console.log("Ashes of Creation: Аккаунти") },
            { text: "Донат", onClick: () => console.log("Ashes of Creation: Донат") },
            { text: "Предмети", onClick: () => console.log("Ashes of Creation: Предмети") },
            { text: "Послуги", onClick: () => console.log("Ashes of Creation: Послуги") },
            { text: "Інше", onClick: () => console.log("Ashes of Creation: Інше") }
        ]
    },
    {
        name: "Asseto Corsa",
        image: "/pictures/asseto_corsa.png",
        gradient: "from-[#0f172a] via-[#334155] to-[#dc2626]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Asseto Corsa: Аккаунти") },
            { text: "Ключі", onClick: () => console.log("Asseto Corsa: Ключі") },
            { text: "Офлайн активації", onClick: () => console.log("Asseto Corsa: Офлайн активації") },
            { text: "Інше", onClick: () => console.log("Asseto Corsa: Інше") }
        ]
    },
    {
        name: "Astro Bot",
        image: "/pictures/astro_bot.png",
        gradient: "from-[#1e3a8a] via-[#0284c7] to-[#38bdf8]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Astro Bot: Аккаунти") },
            { text: "Ключі", onClick: () => console.log("Astro Bot: Ключі") },
            { text: "Інше", onClick: () => console.log("Astro Bot: Інше") }
        ]
    },
    {
        name: "Baldur's Gate 3",
        image: "/pictures/baldurs_gate_3.png",
        gradient: "from-[#0c0505] via-[#2d0a0a] to-[#7f1d1d]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Baldur's Gate 3: Аккаунти") },
            { text: "Ключі", onClick: () => console.log("Baldur's Gate 3: Ключі") },
            { text: "Послуги", onClick: () => console.log("Baldur's Gate 3: Послуги") }
        ]
    },
    {
        name: "Battlefield 2042",
        image: "/pictures/battlefield_2042.png",
        gradient: "from-[#0b0f19] via-[#1e293b] to-[#0284c7]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Battlefield 2042: Аккаунти") },
            { text: "Донат", onClick: () => console.log("Battlefield 2042: Донат") },
            { text: "Інше", onClick: () => console.log("Battlefield 2042: Інше") }
        ]
    },
    {
        name: "Brawl Stars",
        image: "/pictures/brawl_stars.png",
        gradient: "from-[#2e1065] via-[#7c2d12] to-[#eab308]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Brawl Stars: Аккаунти") },
            { text: "Геми", onClick: () => console.log("Brawl Stars: Геми") },
            { text: "Донат", onClick: () => console.log("Brawl Stars: Донат") },
            { text: "Буст", onClick: () => console.log("Brawl Stars: Буст") }
        ]
    },
    {
        name: "Call of Duty: Warzone",
        image: "/pictures/cod_warzone.png",
        gradient: "from-[#030712] via-[#111827] to-[#4b5563]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Warzone: Аккаунти") },
            { text: "CP Монети", onClick: () => console.log("Warzone: CP Монети") },
            { text: "Донат", onClick: () => console.log("Warzone: Донат") }
        ]
    },
    {
        name: "Counter-Strike 2",
        image: "/pictures/cs2.png",
        gradient: "from-[#030712] via-[#1e1b4b] to-[#2563eb]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("CS2: Аккаунти") },
            { text: "Скіни", onClick: () => console.log("CS2: Скіни") },
            { text: "Буст", onClick: () => console.log("CS2: Буст") },
            { text: "Інше", onClick: () => console.log("CS2: Інше") }
        ]
    },
    {
        name: "Cyberpunk 2077",
        image: "/pictures/cyberpunk_2077.png",
        gradient: "from-[#1c0d02] via-[#78350f] to-[#facc15]",
        buttons: [
            { text: "Ключі", onClick: () => console.log("Cyberpunk 2077: Ключі") },
            { text: "Аккаунти", onClick: () => console.log("Cyberpunk 2077: Аккаунти") },
            { text: "Офлайн активації", onClick: () => console.log("Cyberpunk 2077: Офлайн активації") }
        ]
    },
    {
        name: "Dota 2",
        image: "/pictures/dota_2.png",
        gradient: "from-[#0a0505] via-[#450a0a] to-[#dc2626]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Dota 2: Аккаунти") },
            { text: "Предмети", onClick: () => console.log("Dota 2: Предмети") },
            { text: "Буст ММR", onClick: () => console.log("Dota 2: Буст ММR") },
            { text: "Послуги", onClick: () => console.log("Dota 2: Послуги") }
        ]
    },
    {
        name: "EA SPORTS FC 24",
        image: "/pictures/ea_fc_24.png",
        gradient: "from-[#022c22] via-[#064e3b] to-[#22c55e]",
        buttons: [
            { text: "Монети", onClick: () => console.log("FC 24: Монети") },
            { text: "Аккаунти", onClick: () => console.log("FC 24: Аккаунти") },
            { text: "FC Points", onClick: () => console.log("FC 24: FC Points") }
        ]
    },
    {
        name: "Elden Ring",
        image: "/pictures/elden_ring.png",
        gradient: "from-[#020617] via-[#0f172a] to-[#1d4ed8]",
        buttons: [
            { text: "Ключі", onClick: () => console.log("Elden Ring: Ключі") },
            { text: "Руни / Предмети", onClick: () => console.log("Elden Ring: Руни") },
            { text: "Аккаунти", onClick: () => console.log("Elden Ring: Аккаунти") }
        ]
    },
    {
        name: "Fortnite",
        image: "/pictures/fortnite.png",
        gradient: "from-[#1e1b4b] via-[#4c1d95] to-[#a855f7]",
        buttons: [
            { text: "В-бакси", onClick: () => console.log("Fortnite: В-бакси") },
            { text: "Аккаунти", onClick: () => console.log("Fortnite: Аккаунти") },
            { text: "Донат / Набори", onClick: () => console.log("Fortnite: Набори") }
        ]
    },
    {
        name: "Genshin Impact",
        image: "/pictures/genshin_impact.png",
        gradient: "from-[#0c1e36] via-[#164e63] to-[#0ea5e9]",
        buttons: [
            { text: "Кристали", onClick: () => console.log("Genshin: Кристали") },
            { text: "Аккаунти", onClick: () => console.log("Genshin: Аккаунти") },
            { text: "Послуги / Прокачка", onClick: () => console.log("Genshin: Послуги") }
        ]
    },
    {
        name: "GTA V Online",
        image: "/pictures/gta_v.png",
        gradient: "from-[#052e16] via-[#14532d] to-[#16a34a]",
        buttons: [
            { text: "Валюта (Гроші)", onClick: () => console.log("GTA V: Гроші") },
            { text: "Аккаунти", onClick: () => console.log("GTA V: Аккаунти") },
            { text: "Прокачка", onClick: () => console.log("GTA V: Прокачка") }
        ]
    },
    {
        name: "League of Legends",
        image: "/pictures/lol.png",
        gradient: "from-[#030712] via-[#1e3a8a] to-[#d97706]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("LoL: Аккаунти") },
            { text: "RP (Валюта)", onClick: () => console.log("LoL: RP") },
            { text: "Послуги", onClick: () => console.log("LoL: Послуги") }
        ]
    },
    {
        name: "Minecraft",
        image: "/pictures/minecraft.png",
        gradient: "from-[#1c1917] via-[#224d1a] to-[#22c55e]",
        buttons: [
            { text: "Лицензії (Ключі)", onClick: () => console.log("Minecraft: Ключі") },
            { text: "Аккаунти", onClick: () => console.log("Minecraft: Аккаунти") },
            { text: "Монети", onClick: () => console.log("Minecraft: Монети") }
        ]
    },
    {
        name: "PUBG Mobile",
        image: "/pictures/pubg_mobile.png",
        gradient: "from-[#0c0a09] via-[#451a03] to-[#ea580c]",
        buttons: [
            { text: "UC (Валюта)", onClick: () => console.log("PUBG: UC") },
            { text: "Аккаунти", onClick: () => console.log("PUBG: Аккаунти") },
            { text: "Донат", onClick: () => console.log("PUBG: Донат") }
        ]
    },
    {
        name: "Roblox",
        image: "/pictures/roblox.png",
        gradient: "from-[#0f172a] via-[#1f2937] to-[#6b7280]",
        buttons: [
            { text: "Робукси", onClick: () => console.log("Roblox: Робукси") },
            { text: "Аккаунти", onClick: () => console.log("Roblox: Аккаунти") },
            { text: "Предмети", onClick: () => console.log("Roblox: Предмети") }
        ]
    },
    {
        name: "Rust",
        image: "/pictures/rust.png",
        gradient: "from-[#1c1917] via-[#450a0a] to-[#9a3412]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Rust: Аккаунти") },
            { text: "Ключі / Гіфти", onClick: () => console.log("Rust: Ключі") },
            { text: "Скіни", onClick: () => console.log("Rust: Скіни") }
        ]
    },
    {
        name: "Valorant",
        image: "/pictures/valorant.png",
        gradient: "from-[#450a0a] via-[#991b1b] to-[#f43f5e]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Valorant: Аккаунти") },
            { text: "Валорант Поінти", onClick: () => console.log("Valorant: Поінти") },
            { text: "Буст", onClick: () => console.log("Valorant: Буст") }
        ]
    },
    {
        name: "World of Tanks",
        image: "/pictures/wot.png",
        gradient: "from-[#111827] via-[#374151] to-[#4b5563]",
        buttons: [
            { text: "Золото", onClick: () => console.log("WoT: Золото") },
            { text: "Аккаунти", onClick: () => console.log("WoT: Аккаунти") },
            { text: "Преміум", onClick: () => console.log("WoT: Преміум") }
        ]
    },

    {
        name: "Heroes of Sword and Magic III",
        image: "/pictures/heroes_3.png",       
        gradient: "from-[#0f172a] via-[#1e3a8a] to-[#ca8a04]",
        buttons: [
            { text: "Ключі", onClick: () => console.log("Герої 3: Ключі") },
            { text: "Інше", onClick: () => console.log("Герої 3: Інше") }
        ]
    },
    {
        name: "Metro: Exodus",
        image: "/pictures/metro_exodus.png",
        gradient: "from-[#090d16] via-[#1e293b] to-[#854d0e]",
        buttons: [
            { text: "Ключі / Гіфти", onClick: () => console.log("Метро: Ключі") },
            { text: "Аккаунти", onClick: () => console.log("Метро: Аккаунти") },
            { text: "Офлайн активації", onClick: () => console.log("Метро: Офлайн") }
        ]
    },
    {
        name: "Stalker 2: Heart of Chornobyl",
        image: "/pictures/stalker_2.png",
        gradient: "from-[#0c0a09] via-[#451a03] to-[#c2410c]",
        buttons: [
            { text: "Передзамовлення", onClick: () => console.log("Сталкер 2: Передзамовлення") },
            { text: "Ключі (Steam)", onClick: () => console.log("Сталкер 2: Ключі") },
            { text: "Xbox Game Pass", onClick: () => console.log("Сталкер 2: Game Pass") },
            { text: "Інше", onClick: () => console.log("Сталкер 2: Інше") }
        ]
    },
    {
        name: "Stalcraft",
        image: "/pictures/stalcraft.png",
        gradient: "from-[#0084CC] to-[#000241]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Сталкрафт: Аккаунти") },
            { text: "Артефакти", onClick: () => console.log("Сталкрафт: Артефакти") },
            { text: "Речі", onClick: () => console.log("Сталкрафт: Речі") },
            { text: "Інше", onClick: () => console.log("Сталкрафт: Інше") }
        ]
    },
    {
        name: "Dead by Daylight",
        image: "/pictures/dbd.png",
        gradient: "from-[#006C7B] to-[#190028]",
        buttons: [
            { text: "Аккаунти", onClick: () => console.log("Сталкрафт: Аккаунти") },
            { text: "Ключі", onClick: () => console.log("Сталкрафт: Ключі") },
            { text: "Навчання", onClick: () => console.log("Сталкрафт: Навчання") },
            { text: "Інше", onClick: () => console.log("Сталкрафт: Інше") }
        ]
    }
];
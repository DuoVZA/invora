import { notFound } from "next/navigation";
import Link from "next/link";
import { gameDatabase } from "@/data/gameData";
import { slugify } from "@/utils/slugify";
import { productsDatabase } from "@/data/productsData";
import GameFilters from "@/components/gameFilters"; // Проверьте корректность пути

interface GamePageProps {
    params: Promise<{ gameSlug: string }>;
    searchParams: Promise<{ category?: string }>; // Ловим категорию из ссылки (?category=...)
}

export default async function GamePage({ params, searchParams }: GamePageProps) {
    const { gameSlug } = await params;
    const { category } = await searchParams; // Получаем категорию, на которую кликнули на главной

    const decodedGameSlug = decodeURIComponent(gameSlug).toLowerCase();
    const game = gameDatabase.find(g => slugify(g.name) === decodedGameSlug);

    if (!game) notFound();

    // Берем первую категорию по умолчанию из нашего нового массива строк categories
    const defaultCategory = game.categories && game.categories[0] ? slugify(game.categories[0]) : "";
    const activeCategory = category ? decodeURIComponent(category).toLowerCase() : defaultCategory;

    // Фильтруем лоты для таблицы: оставляем только лоты этой игры И этой конкретной категории
    const filteredProducts = productsDatabase.filter(
        p => p.gameSlug === decodedGameSlug && p.categorySlug === activeCategory
    );

    // Ищем оригинальное (красивое) имя категории для заголовка
    const currentCategoryName = game.categories ? (game.categories.find(cat => slugify(cat) === activeCategory) || activeCategory) : activeCategory;

    console.log("Game:", game.name);
    console.log("Options:", game.options);

    return (
        <div className="min-h-screen bg-zinc-50 text-black p-6">
            <div className="max-w-5xl mx-auto">

                {/* Хлебные крошки */}
                <div className="text-sm text-black mb-6 flex items-center flex-wrap gap-2 select-none">
                    <Link href="/" className="text-black hover:text-[#4384D0] transition">
                        Головна
                    </Link>

                    <img
                        src="/pictures/polygon.png"
                        alt="polygon"
                        className="w-[7px] h-[8px] text-gray-600 shrink-0 mx-1"
                    />

                    <span className="text-black font-medium">{game.name}</span>
                </div>

                {/* Заголовок раздела */}
                <h1 className="text-3xl font-bold mb-2 text-zinc-900">{game.name}</h1>
                <p className="text-sm text-zinc-500 mb-6">
                    Розділ: <span className="text-[#4384D0] font-semibold">{currentCategoryName}</span>
                </p>

                {/* Menu категорий */}
                <div className="flex gap-2 border-b border-zinc-200 mb-6 overflow-x-auto select-none">
                    {game.categories && game.categories.map((cat) => {
                        const btnSlug = slugify(cat);
                        const isSelected = activeCategory === btnSlug;
                        return (
                            <Link
                                key={cat}
                                href={`/games/${decodedGameSlug}?category=${btnSlug}`}
                                className={`px-4 py-2.5 font-medium text-sm border-b-2 transition-all whitespace-nowrap ${isSelected
                                        ? "border-[#4E8AD6] text-[#4E8AD6] bg-blue-50/50"
                                        : "border-transparent text-zinc-500 hover:text-zinc-900"
                                    }`}
                            >
                                {cat}
                            </Link>
                        );
                    })}
                </div>

                <GameFilters categoryName={currentCategoryName} options={game.options} />

                {/* ТАБЛИЦА ЛОТОВ */}
                <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
                    {/* Шапка таблицы */}
                    <div className="grid grid-cols-12 bg-zinc-200 px-4 py-3 text-xs font-semibold text-zinc-600 uppercase border-b border-zinc-200 select-none">
                        <div className="col-span-8">Опис товару</div>
                        <div className="col-span-2">Продавець</div>
                        <div className="col-span-2 text-center">Ціна</div>
                    </div>

                    {/* Строки таблицы */}
                    <div className="divide-y divide-zinc-100">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/games/${decodedGameSlug}/${product.id}`}
                                    className="grid grid-cols-12 px-4 py-4 items-center hover:bg-zinc-50/80 transition group"
                                >
                                    <div className="col-span-8 pr-4">
                                        <div className="text-sm font-medium text-zinc-800 group-hover:text-[#4384D0] transition leading-snug">
                                            {product.title}
                                        </div>
                                    </div>
                                    <div className="col-span-2 text-sm text-zinc-600">
                                        {product.seller}
                                    </div>

                                    {/* Центрированный контейнер для ценника */}
                                    <div className="col-span-2 flex justify-center items-center">
                                        <div className="bg-[#BFFFAF] px-4 py-1.5 rounded-lg text-sm font-bold text-zinc-900 group-hover:bg-[#a9f598] group-hover:text-zinc-950 transition-all text-center min-w-[75px]">
                                            {product.price}
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="p-8 text-center text-zinc-400 text-sm font-mono">
                                Лотів у категорії "{currentCategoryName}" поки немає.
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
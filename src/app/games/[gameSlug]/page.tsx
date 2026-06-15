import { notFound } from "next/navigation";
import Link from "next/link";
import { gameDatabase } from "@/data/gameData"; 
import { slugify } from "@/utils/slugify";
import { productsDatabase } from "@/data/productsData";

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

    // ВОТ ТУТ МАГИЯ: Берем первую категорию по умолчанию из нашего нового массива строк categories
    const defaultCategory = game.categories && game.categories[0] ? slugify(game.categories[0]) : "";
    const activeCategory = category ? decodeURIComponent(category).toLowerCase() : defaultCategory;

    // Фильтруем лоты для таблицы: оставляем только лоты этой игры И этой конкретной категории
    const filteredProducts = productsDatabase.filter(
        p => p.gameSlug === decodedGameSlug && p.categorySlug === activeCategory
    );

    // Ищем оригинальное (красивое) имя категории для заголовка
    const currentCategoryName = game.categories ? (game.categories.find(cat => slugify(cat) === activeCategory) || activeCategory) : activeCategory;

    return (
        <div className="min-h-screen bg-slate-950 text-white p-6">
            <div className="max-w-6xl mx-auto">
                
                {/* Хлебные крошки */}
                <div className="text-sm text-gray-500 mb-4">
                    <Link href="/" className="hover:underline">Головна</Link> &gt; <span>{game.name}</span>
                </div>

                {/* Динамический заголовок: сразу пишет то, что выбрали на главной! */}
                <h1 className="text-3xl font-bold mb-2">{game.name}</h1>
                <p className="text-sm text-gray-400 mb-6">Розділ: <span className="text-amber-400 font-semibold">{currentCategoryName}</span></p>

                {/* Меню категорий а-ля Фанпей (чтобы можно было переключаться прямо тут) */}
                <div className="flex gap-2 border-b border-slate-800 mb-6 overflow-x-auto">
                    {game.categories && game.categories.map((cat) => {
                        const btnSlug = slugify(cat);
                        const isSelected = activeCategory === btnSlug;
                        return (
                            <Link
                                key={cat}
                                href={`/games/${decodedGameSlug}?category=${btnSlug}`}
                                className={`px-4 py-2 font-medium text-sm border-b-2 transition-all whitespace-nowrap ${
                                    isSelected 
                                        ? "border-amber-500 text-amber-500 bg-amber-500/5" 
                                        : "border-transparent text-gray-400 hover:text-white"
                                }`}
                            >
                                {cat}
                            </Link>
                        );
                    })}
                </div>

                {/* ТАБЛИЦА ЛОТОВ */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
                    <div className="grid grid-cols-12 bg-slate-950 px-4 py-3 text-xs font-semibold text-gray-400 uppercase border-b border-slate-800">
                        <div className="col-span-8">Опис товару</div>
                        <div className="col-span-2">Продавець</div>
                        <div className="col-span-2 text-right">Ціна</div>
                    </div>

                    <div className="divide-y divide-slate-800/60">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <Link 
                                    key={product.id}
                                    href={`/games/${decodedGameSlug}/${product.id}`} // При клике проваливаемся в сам товар
                                    className="grid grid-cols-12 px-4 py-4 items-center hover:bg-slate-800/40 transition group"
                                >
                                    <div className="col-span-8 pr-4">
                                        <div className="text-sm font-medium text-gray-200 group-hover:text-amber-400 transition">
                                            {product.title}
                                        </div>
                                    </div>
                                    <div className="col-span-2 text-sm text-gray-300">
                                        {product.seller}
                                    </div>
                                    <div className="col-span-2 text-right text-sm font-bold text-emerald-400">
                                        {product.price}
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="p-8 text-center text-gray-500 text-sm">
                                Лотів у категорії "{currentCategoryName}" поки немає.
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
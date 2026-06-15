import { notFound } from "next/navigation";
import Link from "next/link";
import { gameDatabase } from "@/data/gameData"; 
import { productsDatabase } from "@/data/productsData"; // Импортируем твою базу товаров
import { slugify } from "@/utils/slugify";

interface ProductPageProps {
    params: Promise<{ 
        gameSlug: string;
        productId: string; 
    }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { gameSlug, productId } = await params;

    // 1. Безопасно раскодируем слаг игры из URL и проверяем, существует ли такая игра
    const decodedGameSlug = decodeURIComponent(gameSlug).toLowerCase();
    const game = gameDatabase.find(g => slugify(g.name) === decodedGameSlug);
    if (!game) notFound();

    // 2. Ищем конкретный товар в нашей базе по ID и проверяем, принадлежит ли он этой игре
    const product = productsDatabase.find(
        p => p.id === productId && p.gameSlug === decodedGameSlug
    );
    
    // Если лот с таким ID не найден, Next.js покажет страницу 404
    if (!product) notFound();

    return (
        <div className="min-h-screen bg-slate-950 text-white p-6">
            <div className="max-w-5xl mx-auto">
                
                {/* Хлебные крошки (Навигация назад) */}
                <div className="text-sm text-gray-500 mb-6">
                    <Link href="/" className="hover:underline">Головна</Link> &gt;{" "}
                    {/* Ссылка возвращает назад в таблицу игры, сразу открывая нужную категорию */}
                    <Link href={`/games/${decodedGameSlug}?category=${product.categorySlug}`} className="hover:underline">
                        {game.name}
                    </Link> &gt;{" "}
                    <span className="text-gray-300">Лот #{product.id}</span>
                </div>

                {/* Основной контент (Две колонки а-ля FanPay) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* ЛЕВАЯ КОЛОНКА: Описание товара и Отзывы */}
                    <div className="md:col-span-2 space-y-6">
                        
                        {/* Главный блок товара */}
                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg">
                            <h1 className="text-2xl font-bold mb-4 text-gray-100 leading-snug">
                                {product.title}
                            </h1>
                            
                            <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
                                <span className="bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                                    Гра: <strong className="text-gray-200">{game.name}</strong>
                                </span>
                                <span className="bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800 capitalize">
                                    Категорія: <strong className="text-amber-400">{product.categorySlug}</strong>
                                </span>
                            </div>

                            <div className="h-px bg-slate-800/60 my-4" />
                            
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                Опис продавця:
                            </h3>
                            {/* whitespace-pre-line сохраняет все переносы строк, которые ты напишешь в описании */}
                            <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                                {product.description || "Продавець не надав опису до цього лоту."}
                            </p>
                        </div>

                        {/* Блок отзывов о продавце */}
                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg">
                            <h3 className="text-lg font-bold mb-4 text-gray-200">
                                Останні відгуки про продавця <span className="text-amber-400">{product.seller}</span>
                            </h3>
                            
                            <div className="space-y-4 divide-y divide-slate-800/40">
                                <div className="text-sm pt-1">
                                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                                        <span className="font-medium text-gray-300">Купець: @Mano_In_Black</span>
                                        <span className="text-amber-500 font-bold">★★★★★ 5.0</span>
                                    </div>
                                    <p className="text-gray-300">Швидко відповів, все чесно. Рекомендую!</p>
                                </div>
                                
                                <div className="text-sm pt-4">
                                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                                        <span className="font-medium text-gray-300">Купець: @User_777</span>
                                        <span className="text-amber-500 font-bold">★★★★★ 5.0</span>
                                    </div>
                                    <p className="text-gray-300">Все супер, товар отримав через 5 хвилин після оплати.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* ПРАВАЯ КОЛОНКА: Покупка и Карточка продавца */}
                    <div className="space-y-4">
                        
                        {/* Виджет покупки */}
                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg flex flex-col justify-between">
                            <div>
                                <span className="text-xs text-gray-400 uppercase font-semibold tracking-wider">
                                    Ціна лоту:
                                </span>
                                <div className="text-3xl font-black text-emerald-400 mt-1 mb-6">
                                    {product.price}
                                </div>
                            </div>
                            
                            <button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-lg shadow-md shadow-amber-500/5 active:scale-[0.98] transition duration-150">
                                Купити товар
                            </button>
                            
                            <span className="text-[10px] text-center text-gray-500 mt-3 block">
                                Після оплати кошти утримуются системою до підтвердження виконання замовлення.
                            </span>
                        </div>

                        {/* Информация о продавце */}
                        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl shadow-lg text-sm space-y-3">
                            <div>
                                <div className="text-gray-400 text-xs">Продавець:</div>
                                <div className="font-bold text-base text-gray-200 mt-0.5">{product.seller}</div>
                            </div>
                            
                            <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                                <div>
                                    <div className="text-amber-500 font-bold text-xs">★ {product.sellerRating}</div>
                                    <div className="text-[10px] text-gray-400 mt-0.5">Загальний рейтинг</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-gray-200 font-semibold text-xs">{product.reviewsCount}</div>
                                    <div className="text-[10px] text-gray-400 mt-0.5">відгуків</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}
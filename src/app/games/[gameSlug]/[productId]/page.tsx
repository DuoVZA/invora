import { notFound } from "next/navigation";
import Link from "next/link";
import { gameDatabase } from "@/data/gameData";
import { productsDatabase } from "@/data/productsData";
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
        <div className="min-h-screen bg-zinc-50 text-black p-6">
            <div className="max-w-5xl mx-auto">

                {/* Хлебные крошки (Навигация назад) */}
                <div className="text-sm text-black mb-6 flex items-center flex-wrap gap-2 select-none">
                    <Link href="/" className="text-black hover:text-[#4384D0] transition">
                        Головна
                    </Link>

                    <img
                        src="/pictures/polygon.png"
                        alt="polygon"
                        className="w-[7px] h-[8px] text-gray-600 shrink-0 mx-1"
                    />

                    <Link
                        href={`/games/${decodedGameSlug}?category=${product.categorySlug}`}
                        className="text-black hover:text-[#4384D0] transition"
                    >
                        {game.name}
                    </Link>

                    <img
                        src="/pictures/polygon.png"
                        alt="polygon"
                        className="w-[7px] h-[8px] text-gray-600 shrink-0 mx-1"
                    />

                    <span className="text-black font-medium">Лот #{product.id.replace('lot-generated-', '')}</span>
                </div>


                {/* Основной контент (Две колонки а-ля FanPay) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

                    {/* ЛЕВАЯ КОЛОНКА: Описание товара, Картинки, Оплата и Отзывы */}
                    <div className="md:col-span-2 space-y-6">

                        <div className="flex justify-left items-bottom lg:text-[36px] font-medium text-zinc-900">
                            <p>Оформлення замовлення</p>
                        </div>

                        {/* Главный блок товара */}
                        <div className="bg-white p-6 rounded-xl border border-zinc-200/80 shadow-sm">
                            <h1 className="text-2xl font-bold mb-4 text-black leading-snug">
                                {product.title}
                            </h1>

                            <div className="flex flex-wrap gap-4 text-xs text-black mb-4">
                                <span className="bg-zinc-100 px-2.5 py-1 rounded-md text-zinc-500 shadow-sm">
                                    Наявність: <strong className="text-[#4384D0]">{product.reviewsCount} шт.</strong>
                                </span>
                                <span className="bg-zinc-100 px-2.5 py-1 rounded-md text-zinc-500 shadow-sm">
                                    Гра: <strong className="text-[#4384D0]">{game.name}</strong>
                                </span>
                                <span className="bg-zinc-100 px-2.5 py-1 rounded-md text-zinc-500 shadow-sm">
                                    Категорія: <strong className="text-[#4384D0]">{product.categorySlug}</strong>
                                </span>
                            </div>

                            <div className="h-px bg-zinc-200 my-4" />

                            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                                Докладний опис:
                            </h3>
                            <p className="text-zinc-800 text-sm leading-relaxed whitespace-pre-line">
                                {product.description || "Продавець не надав опису до цього лоту."}
                            </p>
                        </div>

                        {/* Блок фотографий */}
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {[...Array(8)].map((_, i) => (
                                <img key={i} src="/pictures/product.png" alt="Apex" className="w-full aspect-square object-cover rounded-lg shadow-sm border border-zinc-200" />
                            ))}
                        </div>

                        {/* БЛОК КУПИТЬ И СПОСОБ ОПЛАТЫ (Без заднего фона, без рамки и без тени) */}
                        <div className="py-2 space-y-4">
                            {/* Выбор способа оплаты */}
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-zinc-400 font-mono block">Спосіб оплати</label>
                                <div className="w-full bg-[#F5F5F7] border border-zinc-300 rounded-lg px-4 py-3 flex items-center justify-between text-sm text-zinc-800 cursor-pointer hover:bg-zinc-200/70 transition select-none">
                                    <span>Не обрано</span>
                                    <div className="flex items-center gap-1 text-zinc-500 font-mono text-xs">
                                        <span>від {product.price}</span>
                                        <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Ссылка "Купити декілька штук" */}
                            <div className="text-left">
                                <button className="text-[#4384D0] hover:underline text-sm font-medium font-mono transition">
                                    Купити декілька штук
                                </button>
                            </div>

                            {/* Кнопка Купить */}
                            <button className="w-full bg-[#4E8AD6] hover:bg-[#4379BE] text-white font-bold py-3.5 px-6 rounded-lg text-lg shadow-sm transition active:scale-[0.99]">
                                Купити
                            </button>

                            {/* Текст дисклеймера снизу */}
                            <p className="text-[11px] text-zinc-400 leading-relaxed text-left font-mono">
                                Продавець не зможе отримати оплату до тих пір, доки ви не підтвердите виконання ним усіх зобов'язань.
                            </p>
                        </div>

                        {/* Блок отзывов о продавце */}
                        <div className="bg-white border border-zinc-200 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 text-zinc-800">
                                Останні відгуки про продавця <span className="text-[#4384D0]">{product.seller}</span>
                            </h3>

                            <div className="space-y-4 divide-y divide-zinc-100">
                                <div className="text-sm pt-1">
                                    <div className="flex justify-between text-xs text-zinc-500 mb-1">
                                        <span className="font-medium text-zinc-700">Покупець: @Mano_In_Black</span>
                                        <span className="text-amber-500 font-bold">★★★★★ 5.0</span>
                                    </div>
                                    <p className="text-zinc-600">Швидко відповів, все чесно. Рекомендую!</p>
                                </div>

                                <div className="text-sm pt-4">
                                    <div className="flex justify-between text-xs text-zinc-500 mb-1">
                                        <span className="font-medium text-zinc-700">Покупець: @User_777</span>
                                        <span className="text-amber-500 font-bold">★★★★★ 5.0</span>
                                    </div>
                                    <p className="text-zinc-600">Все супер, товар отримав через 5 хвилин після оплати.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* ПРАВАЯ КОЛОНКА: Чат-виджет и Информация о продавце */}
                    <div className="space-y-4 md:sticky md:top-25">

                        {/* Контейнер виджета чата (Высота сделана меньше: min-h-[340px] и пропорция аспект 4/5) */}
                        <div className="w-full aspect-[4/5] min-h-[340px] bg-[#F7F7F7] border border-zinc-300 rounded-xl shadow-md flex flex-col justify-between overflow-hidden font-sans">

                            {/* ХЕДЕР ЧАТА */}
                            <div className="bg-white border-b border-zinc-200 px-4 py-3 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden bg-zinc-200 border border-zinc-300">
                                        <img
                                            src="/pictures/apex.png"
                                            alt={product.seller}
                                            className="w-full h-full object-cover scale-110"
                                        />
                                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm text-zinc-800 leading-tight">{product.seller}</div>
                                        <div className="text-[11px] text-zinc-400 mt-0.5">Був 2 години тому</div>
                                    </div>
                                </div>
                                <button className="text-red-500 hover:text-red-600 p-1 rounded-full hover:bg-zinc-50 transition">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                    </svg>
                                </button>
                            </div>

                            {/* ТЕЛО ЧАТА (Заглушка по центру) */}
                            <div className="flex-1 flex items-center justify-center p-6 text-center select-none">
                                <p className="text-zinc-400 font-medium text-base max-w-[200px] leading-snug">
                                    Напишіть продавцю перед оплатою
                                </p>
                            </div>

                            {/* ФУТЕР ЧАТА (Поле ввода) */}
                            <div className="bg-white border-t border-zinc-200 px-4 py-3 flex items-center gap-3">
                                <input
                                    type="text"
                                    placeholder="Написати..."
                                    className="flex-1 bg-transparent text-sm text-zinc-800 placeholder-zinc-400 outline-none"
                                    disabled
                                />
                                <button className="text-blue-500 hover:text-blue-600 transition shrink-0 p-1">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}
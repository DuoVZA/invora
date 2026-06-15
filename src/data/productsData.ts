import { gameDatabase } from "./gameData";
import { slugify } from "@/utils/slugify";

export interface ProductItem {
    id: string;
    gameSlug: string;
    categorySlug: string;
    title: string;
    description: string;
    seller: string;
    sellerRating: string;
    reviewsCount: number;
    price: string;
}

// 1. Шаблони для генерації реалістичного контенту залежно від типу категорії
const sellers = ["FunPay_Master", "GamerStore", "DonatGold", "GSC_Fan", "CyberBro", "ShadowTrade", "Phoenix_Shop", "LuckySeller", "DropXpress", "WukongGold"];

const templates: { [key: string]: { titles: string[], descriptions: string[], priceMin: number, priceMax: number, unit: string } } = {
    "ключі": {
        titles: ["Ліцензійний ключ [Global / Region Free] Fast Delivery", "Офіційний ключ активації (Steam/Epic/EA)", "Ключ активації моментально + Бонус передзамовлення"],
        descriptions: ["Після оплати ви моментально отримуєте ліцензійний ключ активації. Чиста покупка, без повернень. Активація на ваш особистий акаунт."],
        priceMin: 350, priceMax: 1900, unit: "₴"
    },
    "аккаунти": {
        titles: ["Особистий акаунт з повною переприв'язкою (Пошта + Зміна даних)", "Топовий жирний акаунт | Без банів | З поштою", "Акаунт під основу | Перша пошта | Рідні дані"],
        descriptions: ["Продаю свій особистий акаунт, награно багато годин. Жодних блокувань, повна безпека. Допоможу переприв'язати всі дані після покупки."],
        priceMin: 150, priceMax: 3500, unit: "₴"
    },
    "донат": {
        titles: ["Офіційний Донат за ID гравця (Без заходу на акаунт)", "Поповнення внутрішньоігрової валюти | Швидко 5 хвилин", "Донат пак за найнижчими цінами [Safe & Fast]"],
        descriptions: ["Абсолютно безпечне поповнення через офіційних партнерів. Від вас потрібен тільки ваш ігровий ID/UID. Гарантія від бану 100%."],
        priceMin: 80, priceMax: 2500, unit: "₴"
    },
    "послуги": {
        titles: ["Професійна допомога / Прокачування / Виконання квестів", "Швидкий буст та закриття будь-якої активності", "Послуги тренера | Навчання гри від топ-гравця"],
        descriptions: ["Виконаю будь-які складні завдання, закрию квести або пройду калібрування. Граю сам без стороннього софту. Стрім за бажанням."],
        priceMin: 200, priceMax: 1200, unit: "₴"
    },
    "офлайн": {
        titles: ["Офлайн Активація | Доступ до всіх DLC | Гарантія", "Offline доступ для ПК (Steam/Epic) без лімітів", "Активація гри для автономного режиму + Оновлення"],
        descriptions: ["Надаю доступ до акаунта для гри в автономному режимі. Усі збереження будуть ваші. Доступ безстроковий, грати можна одразу."],
        priceMin: 45, priceMax: 150, unit: "₴"
    },
    "дефолт": {
        titles: ["Топове пропозиція у цій категорії | Швидко", "Найкраща ціна на ринку | Моментальна видача", "Предмети / Валюта / Цінності зі знижкою"],
        descriptions: ["Найвигідніша пропозиція на платформі. Передача товару або надання послуги займає від 5 до 15 хвилин після оплати."],
        priceMin: 50, priceMax: 1000, unit: "₴"
    }
};

// 2. Функція автоматичної генерації масиву продуктів
const generateAllProducts = (): ProductItem[] => {
    const products: ProductItem[] = [];
    let idCounter = 1;

    // Проходимося по кожній грі з бази даних
    gameDatabase.forEach((game) => {
        const gameSlug = slugify(game.name);

        // Проходимося по кожній категорії цієї гри
        game.categories.forEach((categoryName) => {
            const categorySlug = slugify(categoryName);

            // Визначаємо, який шаблон використовувати для генерації текстів
            let typeKey = "дефолт";
            const lowerCat = categoryName.toLowerCase();
            
            // Логіка перевірки адаптована під українські назви категорій
            if (lowerCat.includes("ключ") || lowerCat.includes("ліценз") || lowerCat.includes("гіфт")) typeKey = "ключі";
            else if (lowerCat.includes("аккаунт") || lowerCat.includes("акаунт")) typeKey = "аккаунти";
            else if (lowerCat.includes("донат") || lowerCat.includes("валют") || lowerCat.includes("монет") || lowerCat.includes("геми") || lowerCat.includes("золот") || lowerCat.includes("алмаз") || lowerCat.includes("кристал") || lowerCat.includes("ціннос")) typeKey = "донат";
            else if (lowerCat.includes("послуг") || lowerCat.includes("буст") || lowerCat.includes("прокач") || lowerCat.includes("навчан")) typeKey = "послуги";
            else if (lowerCat.includes("офлайн")) typeKey = "офлайн";

            const template = templates[typeKey];

            // Генеруємо від 12 до 18 товарів для ЦІЄЇ категорії ЦІЄЇ гри
            const itemsCount = Math.floor(Math.random() * 2) + 12; 

            for (let i = 0; i < itemsCount; i++) {
                const randomSeller = sellers[Math.floor(Math.random() * sellers.length)];
                const randomRating = (4.5 + Math.random() * 0.5).toFixed(1);
                const randomReviews = Math.floor(Math.random() * 800) + 15;
                const randomPrice = Math.floor(Math.random() * (template.priceMax - template.priceMin)) + template.priceMin;

                // Збираємо красивий динамічний тайтл
                const baseTitle = template.titles[i % template.titles.length];
                const cleanGameName = game.name.split(":")[0]; // Обрізаємо довгі назви підзаголовків для краси
                const finalTitle = `${cleanGameName} — ${baseTitle} (#${i + 1})`;

                products.push({
                    id: `lot-generated-${idCounter}`,
                    gameSlug: gameSlug,
                    categorySlug: categorySlug,
                    title: finalTitle,
                    description: template.descriptions[0],
                    seller: randomSeller,
                    sellerRating: randomRating,
                    reviewsCount: randomReviews,
                    price: `${randomPrice} ${template.unit}`
                });

                idCounter++;
            }
        });
    });

    return products;
};

// Експортуємо готову базу даних, яка збереться сама "на льоту" при запуску проєкту!
export const productsDatabase: ProductItem[] = generateAllProducts();
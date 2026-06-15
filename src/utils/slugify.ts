export const slugify = (text: string) => {
    if (!text) return '';
    return text
        .toString()
        .toLowerCase()
        .trim()
        // Разрешаем английские, украинские/русские буквы, цифры и знаки дефиса
        .replace(/[^a-zа-яёієїґ0-9]+/g, '-') 
        // Схлопываем повторяющиеся дефисы, если они возникли (например, "Ключі  (Steam)" -> "ключі-steam")
        .replace(/-+/g, '-')
        // Удаляем дефисы на концах строки
        .replace(/(^-|-$)+/g, '');   
};
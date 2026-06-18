export const slugify = (text: string) => {
    if (!text) return '';
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[^a-zа-яёієїґ0-9]+/g, '-') 
        .replace(/-+/g, '-')
        .replace(/(^-|-$)+/g, '');   
};


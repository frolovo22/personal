// авто-агрегация постов из отдельных .js файлов
const modules = import.meta.glob('./*.js', { eager: true });
const posts = Object.values(modules)
    .map(m => m.default)
    .filter(Boolean)
    .sort((a,b) => new Date(b.date) - new Date(a.date));

export default posts;

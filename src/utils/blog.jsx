// src/utils/blog.js
export const cx = (...xs) => xs.filter(Boolean).join(' ')
export function normalizeTags(input){ if(!input) return []; return input.split(',').map(s=>s.trim()).filter(Boolean).map(s=>s.toLowerCase()) }
export const formatDate = iso => new Date(iso).toLocaleDateString()

// сверх-лёгкий markdown (заголовки, **bold**, `code`, ```blocks```)
export function mdToHtml(src=''){
    const esc = s => s.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))
    // Код-блоки ```
    src = src.replace(/```([\\s\\S]*?)```/g, (_,code) => `<pre><code>${esc(code)}</code></pre>`)
    // Заголовки # ##
    src = src.replace(/^###\s+(.*)$/gm, '<h3>$1</h3>')
        .replace(/^##\s+(.*)$/gm, '<h2>$1</h2>')
        .replace(/^#\s+(.*)$/gm, '<h1>$1</h1>')
    // Инлайн код `
    src = src.replace(/`([^`]+)`/g, '<code>$1</code>')
    // Жирный **
    src = src.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Параграфы
    src = src.split(/\n{2,}/).map(p => {
        if(/^<h\d|^<pre/.test(p)) return p
        return `<p>${p.replace(/\n/g,'<br/>')}</p>`
    }).join('\n')
    return src
}

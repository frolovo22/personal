import React from 'react'

export default function GlobalStyles() {
    return (
        <style>{`
      :root{ --bg:#0a0b0f; --bg-2:#0e1117; --muted:#9aa4b2; --text:#e6edf3; --border:rgba(255,255,255,.08); }
      *{box-sizing:border-box}
      html,body,#root{height:100%}
      body{
        margin:0;
        font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,"Helvetica Neue",Arial;
        background:
          radial-gradient(1200px 900px at 15% -10%,
            rgba(0,224,255,.08) 0%,
            rgba(0,224,255,.05) 35%,
            rgba(0,224,255,.025) 65%,
            transparent 100%
          ),
          radial-gradient(1400px 900px at 110% 120%,
            rgba(155,92,255,.08) 0%,
            rgba(155,92,255,.04) 40%,
            rgba(155,92,255,.02) 70%,
            transparent 100%
          ),
          linear-gradient(180deg, #0a0b0f 0%, #0b0f16 50%, #0e1117 100%);
        color:var(--text);
        background-attachment: fixed, fixed, fixed;
      }
      a{color:inherit;text-decoration:none}
      .container{max-width:1120px;margin:0 auto;padding:0 16px}
      .glow{box-shadow:0 0 0 1px rgba(255,255,255,.04), 0 30px 80px -20px rgba(0,224,255,.25)}
      .glass{background:rgba(255,255,255,.04);backdrop-filter:blur(12px);border:1px solid var(--border);border-radius:18px}
      .card{padding:18px}
      .grid{display:grid;gap:24px}
      .grid-auto{grid-template-columns:repeat(auto-fill,minmax(320px,1fr))}
      @media(min-width:860px){.grid-5{grid-template-columns:repeat(5,minmax(0,1fr))}}
      .row{display:flex;gap:12px;align-items:center}
      header.nav{position:sticky;top:0;z-index:40;background:linear-gradient(90deg,rgba(155,92,255,.10),rgba(0,224,255,.10));backdrop-filter:blur(10px);border-bottom:1px solid var(--border)}
      .brand{font-weight:800;letter-spacing:.16em;background:linear-gradient(90deg,#00e0ff,#7dd3fc,#9b5cff);-webkit-background-clip:text;background-clip:text;color:transparent}
      .navlink{padding:8px 12px;border-radius:12px;border:1px solid transparent;color:#bfefff}
      .navlink:hover{border-color:rgba(0,224,255,.35);background:rgba(0,224,255,.10)}
      .navlink.active{border-color:rgba(155,92,255,.45);background:rgba(155,92,255,.15);color:#ecd9ff}
      .btn{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:12px;border:1px solid var(--border);background:rgba(255,255,255,.04);cursor:pointer}
      .btn:hover{border-color:rgba(255,255,255,.18)}
      .btn.primary{border-color:rgba(0,224,255,.45);background:rgba(0,224,255,.12)}
      .muted{color:var(--muted)}
      .h1{font-size:32px;font-weight:800;line-height:1.1;background:linear-gradient(90deg,#a5f3fc,#f0abfc);-webkit-background-clip:text;background-clip:text;color:transparent;margin:0}
      .h2{font-size:20px;font-weight:700;margin:0 0 8px 0}
      .pill{padding:6px 10px;border-radius:999px;border:1px solid rgba(0,224,255,.35);color:#bfefff;background:rgba(0,224,255,.08);font-size:12px}
      .footer{border-top:1px solid var(--border);color:#a3b1c2;padding:24px 0;margin-top:64px}
      .list{margin:0;padding-left:18px}
      .list li{margin:6px 0}
      .field{display:flex;flex-direction:column;gap:6px}
      .input,.textarea{border:1px solid var(--border);background:rgba(255,255,255,.03);color:var(--text);border-radius:12px;padding:10px 12px}
      .textarea{min-height:140px}
      .post-meta{font-size:12px;color:#9aa4b2}
      .actions{display:flex;gap:8px;justify-content:flex-end}
      .tag{display:inline-block;margin:2px 6px 0 0;padding:4px 8px;border-radius:999px;background:rgba(155,92,255,.15);border:1px solid rgba(155,92,255,.35);font-size:12px}
      .hero-grid{position:relative}
      .hero-grid:before{
        content:"";position:absolute;inset:-40px;
        background:
          repeating-linear-gradient(to right, rgba(255,255,255,.06), rgba(255,255,255,.06) 1px, transparent 1px, transparent 40px),
          repeating-linear-gradient(to bottom, rgba(255,255,255,.06), rgba(255,255,255,.06) 1px, transparent 1px, transparent 40px);
        mask:radial-gradient(800px 500px at 50% -10%, black, transparent 70%);
        opacity:.2; /* softened grid */
        pointer-events:none
      }
      /* иконки в контактах не обрезаются */
      /* contacts row */
       .contact { display:flex; align-items:center; gap:8px; line-height:1; }
       .contact svg{
         width:16px; height:16px;
         overflow:visible;          /* не обрезать stroke за viewBox */
         display:inline-block;
         vertical-align:middle;
       }
    `}</style>
    )
}

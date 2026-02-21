// ================================
// POE LORE — RENDERING & APP LOGIC
// ================================
import { NAV_ITEMS, LORE } from './data.js';

// ================================
// RENDERING FUNCTIONS
// ================================

function renderNav() {
    const links = NAV_ITEMS.map(
        (item) => `<a href="#${item.id}" data-section="${item.id}">${item.label}</a>`
    ).join('');
    return `<nav class="nav" id="mainNav">${links}</nav>`;
}

function renderHero() {
    return `
    <section class="hero" id="hero">
      <div class="hero__badge">Tổng hợp Lore tiếng Việt</div>
      <h1 class="hero__title">
        <span>Path of Exile</span><br/>Lore & Dòng Thời Gian
      </h1>
      <p class="hero__subtitle">
        Hành trình xuyên suốt lịch sử đen tối của Wraeclast — từ thuở khai thiên lập địa 
        cho đến thời đại của những Exile.
      </p>
      <div class="hero__scroll-hint">
        <span>Khám phá</span>
        <div class="arrow"></div>
      </div>
    </section>
  `;
}

function renderTable(tableData) {
    if (!tableData) return '';
    const ths = tableData.headers.map((h) => `<th>${h}</th>`).join('');
    const trs = tableData.rows
        .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`)
        .join('');
    return `
    <div class="card">
      <div class="card__title">${tableData.caption || ''}</div>
      <table class="info-table">
        <thead><tr>${ths}</tr></thead>
        <tbody>${trs}</tbody>
      </table>
    </div>
  `;
}

function renderCards(cards) {
    return cards
        .map((card) => {
            let extra = '';
            if (card.quote) {
                extra += `<div class="quote-box">${card.quote}</div>`;
            }
            if (card.warning) {
                extra += `<div class="warning-box"><strong>⚠️ Bước ngoặt:</strong> ${card.warning}</div>`;
            }
            return `
        <div class="card">
          <div class="card__icon">${card.icon}</div>
          <div class="card__title">${card.title}</div>
          <div class="card__text">${card.text}</div>
          ${extra}
        </div>
      `;
        })
        .join('');
}

function renderTimeline(items) {
    if (!items) return '';
    const entries = items
        .map(
            (item) => `
      <div class="timeline__item">
        <div class="timeline__dot"></div>
        <div class="timeline__content">
          <span class="timeline__date">${item.date}</span>
          <div class="timeline__title">${item.title}</div>
          <div class="timeline__text">${item.text}</div>
        </div>
      </div>
    `
        )
        .join('');
    return `<div class="timeline">${entries}</div>`;
}

function renderSummary(summary) {
    if (!summary) return '';
    const items = summary.items.map((i) => `<li>${i}</li>`).join('');
    return `
    <div class="card">
      <div class="card__title">${summary.title}</div>
      <ul class="lore-list">${items}</ul>
    </div>
  `;
}

function renderSection(key, data) {
    let content = '';

    if (data.cards) content += renderCards(data.cards);
    if (data.table) content += renderTable(data.table);
    if (data.timeline) content += renderTimeline(data.timeline);
    if (data.summary) content += renderSummary(data.summary);

    // World section — multiple tables
    if (data.locations) {
        content += renderTable({ ...data.locations, caption: '📍 Địa Điểm Quan Trọng' });
    }
    if (data.races) {
        content += renderTable({ ...data.races, caption: '👥 Các Dân Tộc' });
    }
    if (data.uniques) {
        content += renderTable({ ...data.uniques, caption: '⚔️ Unique Items Huyền Thoại' });
    }

    return `
    <section class="section" id="${key}">
      <div class="section__header">
        <div class="section__era-badge">${data.era}</div>
        <h2 class="section__title">${data.title}</h2>
        <p class="section__subtitle">${data.subtitle}</p>
      </div>
      ${content}
    </section>
    <div class="divider"><span class="divider__icon">⬦</span></div>
  `;
}

function renderFooter() {
    return `
    <footer class="footer">
      <div class="footer__logo">⚔️ POE Lore Việt Nam</div>
      <div class="footer__disclaimer">
        <p><strong>⚖️ Miễn Trừ Trách Nhiệm:</strong></p>
        <p>Trang web này là dự án <strong>phi thương mại</strong>, được tạo bởi cộng đồng fan với mục đích 
        <strong>sưu tầm và tổng hợp</strong> thông tin lore từ trong game Path of Exile và các nguồn công khai trên internet.</p>
        <p>Chúng tôi <strong>không sở hữu bản quyền</strong> bất kỳ nội dung nào liên quan đến Path of Exile. 
        Mọi thương hiệu, tên nhân vật, hình ảnh và nội dung game thuộc về <strong>Grinding Gear Games (GGG)</strong>. 
        Trang web này không liên kết, được tài trợ hay chứng thực bởi GGG.</p>
        <p>Nội dung được sưu tầm từ: POE Wiki, Fandom, Reddit, YouTube và các nguồn cộng đồng khác. 
        Nếu có bất kỳ vấn đề về bản quyền, vui lòng liên hệ để chúng tôi xử lý.</p>
      </div>
      <div class="footer__links">
        <a href="https://www.poewiki.net/" target="_blank" rel="noopener">POE Wiki</a>
        <a href="https://pathofexile.fandom.com/" target="_blank" rel="noopener">Fandom</a>
        <a href="https://pathofexile2.com/" target="_blank" rel="noopener">POE 2 Official</a>
        <a href="https://github.com/kzxl/POE_Lore" target="_blank" rel="noopener">GitHub</a>
      </div>
      <p class="footer__text">Được tạo bởi cộng đồng Path of Exile Việt Nam 🇻🇳</p>
    </footer>
  `;
}

// ================================
// INITIALIZATION
// ================================

function render() {
    const sections = Object.entries(LORE)
        .map(([key, data]) => renderSection(key, data))
        .join('');

    document.getElementById('app').innerHTML = `
    ${renderNav()}
    ${renderHero()}
    <main>
      ${sections}
    </main>
    ${renderFooter()}
  `;
}

// ---- Scroll Observer for Animations ----
function setupScrollObserver() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.card, .timeline__item').forEach((el) => {
        observer.observe(el);
    });
}

// ---- Sticky Nav Show/Hide ----
function setupNav() {
    const nav = document.getElementById('mainNav');
    const hero = document.getElementById('hero');

    const heroObserver = new IntersectionObserver(
        ([entry]) => {
            nav.classList.toggle('visible', !entry.isIntersecting);
        },
        { threshold: 0 }
    );
    heroObserver.observe(hero);

    // Active section highlight
    const sectionIds = NAV_ITEMS.map((i) => i.id);
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    nav.querySelectorAll('a').forEach((a) => {
                        a.classList.toggle('active', a.dataset.section === id);
                    });
                }
            });
        },
        { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) sectionObserver.observe(el);
    });
}

// ---- Smooth scroll for nav links ----
function setupSmoothScroll() {
    document.querySelectorAll('.nav a').forEach((a) => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ---- Boot ----
document.addEventListener('DOMContentLoaded', () => {
    render();
    setupScrollObserver();
    setupNav();
    setupSmoothScroll();
});

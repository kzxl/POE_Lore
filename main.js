// ================================
// POE LORE — APP LOGIC
// ================================
import loreVi from './data/vi/lore.json';
import loreEn from './data/en/lore.json';
import npcsVi from './data/vi/npcs.json';
import npcsEn from './data/en/npcs.json';

const DATA = {
    vi: { lore: loreVi, npcs: npcsVi },
    en: { lore: loreEn, npcs: npcsEn },
};

const NAV = {
    vi: [
        { id: 'origin', label: 'Khởi Nguyên' },
        { id: 'winter', label: 'Mùa Đông' },
        { id: 'vaal', label: 'Vaal' },
        { id: 'eternal', label: 'Đế Chế' },
        { id: 'modern', label: 'Hiện Đại' },
        { id: 'poe2', label: 'POE 2' },
        { id: 'items', label: 'Vật Phẩm' },
        { id: 'npcs', label: 'Nhân Vật' },
        { id: 'world', label: 'Thế Giới' },
    ],
    en: [
        { id: 'origin', label: 'Origins' },
        { id: 'winter', label: 'Winter' },
        { id: 'vaal', label: 'Vaal' },
        { id: 'eternal', label: 'Empire' },
        { id: 'modern', label: 'Modern' },
        { id: 'poe2', label: 'POE 2' },
        { id: 'items', label: 'Items' },
        { id: 'npcs', label: 'NPCs' },
        { id: 'world', label: 'World' },
    ],
};

const UI = {
    vi: {
        heroTitle: '<span>Path of Exile</span><br/>Lore & Dòng Thời Gian',
        heroBadge: 'Tổng hợp Lore tiếng Việt',
        heroSub: 'Hành trình xuyên suốt lịch sử đen tối của Wraeclast — từ thuở khai thiên lập địa cho đến thời đại của những Exile.',
        scrollHint: 'Khám phá',
        npcSectionTitle: 'Nhân Vật Chính',
        npcSectionSub: 'Click vào tên NPC để xem chi tiết backstory',
        detailBtn: 'Xem chi tiết',
        closeBtn: 'Đóng',
        footerLogo: '⚔️ POE Lore Việt Nam',
        footerCredit: 'Được tạo bởi cộng đồng Path of Exile Việt Nam 🇻🇳',
        disclaimer: '<p><strong>⚖️ Miễn Trừ Trách Nhiệm:</strong></p><p>Trang web này là dự án <strong>phi thương mại</strong>, được tạo bởi fan với mục đích <strong>sưu tầm và tổng hợp</strong> thông tin lore từ trong game Path of Exile và các nguồn công khai.</p><p>Mọi thương hiệu, tên nhân vật, hình ảnh và nội dung game thuộc về <strong>Grinding Gear Games (GGG)</strong>. Trang web không liên kết, được tài trợ hay chứng thực bởi GGG.</p><p>Nội dung sưu tầm từ: POE Wiki, Fandom, Reddit, YouTube và cộng đồng.</p>',
    },
    en: {
        heroTitle: '<span>Path of Exile</span><br/>Lore & Timeline',
        heroBadge: 'Lore Compendium',
        heroSub: 'Journey through the dark history of Wraeclast — from the dawn of creation to the age of the Exiles.',
        scrollHint: 'Explore',
        npcSectionTitle: 'Major Characters',
        npcSectionSub: 'Click an NPC name for detailed backstory',
        detailBtn: 'Details',
        closeBtn: 'Close',
        footerLogo: '⚔️ POE Lore',
        footerCredit: 'Created by POE community fans 🎮',
        disclaimer: '<p><strong>⚖️ Disclaimer:</strong></p><p>This is a <strong>non-commercial</strong> fan project for collecting and summarizing lore from Path of Exile and public sources.</p><p>All trademarks, character names, images and game content belong to <strong>Grinding Gear Games (GGG)</strong>. This website is not affiliated with, sponsored by, or endorsed by GGG.</p><p>Content sourced from: POE Wiki, Fandom, Reddit, YouTube and community.</p>',
    },
};

let currentLang = 'vi';

// ================================
// HELPERS
// ================================
function getLore() { return DATA[currentLang].lore; }
function getNpcs() { return DATA[currentLang].npcs; }
function getNav() { return NAV[currentLang]; }
function getUi() { return UI[currentLang]; }

// ================================
// RENDERING
// ================================

function renderLangToggle() {
    return `<button class="lang-toggle" id="langToggle" title="Switch language">
    ${currentLang === 'vi' ? '🇬🇧 EN' : '🇻🇳 VI'}
  </button>`;
}

function renderNav() {
    const links = getNav().map(
        (item) => `<a href="#${item.id}" data-section="${item.id}">${item.label}</a>`
    ).join('');
    return `<nav class="nav" id="mainNav">${links}${renderLangToggle()}</nav>`;
}

function renderHero() {
    const ui = getUi();
    return `
    <section class="hero" id="hero">
      <div class="hero__badge">${ui.heroBadge}</div>
      <h1 class="hero__title">${ui.heroTitle}</h1>
      <p class="hero__subtitle">${ui.heroSub}</p>
      <div class="hero__scroll-hint"><span>${ui.scrollHint}</span><div class="arrow"></div></div>
    </section>`;
}

function renderCards(cards) {
    return cards.map((c) => {
        let extra = '';
        if (c.quote) extra += `<div class="quote-box">${c.quote}</div>`;
        if (c.warning) extra += `<div class="warning-box"><strong>⚠️</strong> ${c.warning}</div>`;
        if (c.flavorText) extra += `<div class="flavor-text">${c.flavorText}</div>`;
        return `
      <div class="card">
        <div class="card__icon">${c.icon}</div>
        <div class="card__title">${c.title}</div>
        <div class="card__text">${c.text}</div>
        ${extra}
      </div>`;
    }).join('');
}

function renderTable(data) {
    if (!data) return '';
    const ths = data.headers.map((h) => `<th>${h}</th>`).join('');
    const trs = data.rows.map((row) => `<tr>${row.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('');
    return `
    <div class="card">
      <div class="card__title">${data.caption || ''}</div>
      <div class="table-scroll"><table class="info-table">
        <thead><tr>${ths}</tr></thead>
        <tbody>${trs}</tbody>
      </table></div>
    </div>`;
}

function renderTimeline(items) {
    if (!items) return '';
    const entries = items.map((it) => {
        const fText = it.flavorText ? `<div class="flavor-text">${it.flavorText}</div>` : '';
        return `
      <div class="timeline__item">
        <div class="timeline__dot"></div>
        <div class="timeline__content">
          <span class="timeline__date">${it.date}</span>
          <div class="timeline__title">${it.title}</div>
          <div class="timeline__text">${it.text}</div>
          ${fText}
        </div>
      </div>`;
    }).join('');
    return `<div class="timeline">${entries}</div>`;
}

function renderSummary(summary) {
    if (!summary) return '';
    return `
    <div class="card">
      <div class="card__title">${summary.title}</div>
      <ul class="lore-list">${summary.items.map((i) => `<li>${i}</li>`).join('')}</ul>
    </div>`;
}

function renderSection(key, data) {
    let content = '';
    if (data.cards) content += renderCards(data.cards);
    if (data.table) content += renderTable(data.table);
    if (data.timeline) content += renderTimeline(data.timeline);
    if (data.summary) content += renderSummary(data.summary);
    if (data.locations) content += renderTable({ ...data.locations, caption: '📍 ' + (currentLang === 'vi' ? 'Địa Điểm Quan Trọng' : 'Key Locations') });
    if (data.races) content += renderTable({ ...data.races, caption: '👥 ' + (currentLang === 'vi' ? 'Các Dân Tộc' : 'Races') });
    if (data.uniques) content += renderTable({ ...data.uniques, caption: '⚔️ ' + (currentLang === 'vi' ? 'Unique Items Huyền Thoại' : 'Legendary Unique Items') });

    return `
    <section class="section" id="${key}">
      <div class="section__header">
        <div class="section__era-badge">${data.era}</div>
        <h2 class="section__title">${data.title}</h2>
        <p class="section__subtitle">${data.subtitle}</p>
      </div>
      ${content}
    </section>
    <div class="divider"><span class="divider__icon">⬦</span></div>`;
}

// ================================
// NPC SECTION & MODAL
// ================================

function renderNpcSection() {
    const npcs = getNpcs();
    const ui = getUi();
    const groups = npcs.groups.map((g) => {
        const cards = g.npcs.map((id) => {
            const npc = npcs.profiles[id];
            if (!npc) return '';
            return `
        <div class="npc-card" data-npc="${id}">
          <div class="npc-card__name">${npc.name}</div>
          <div class="npc-card__title">${npc.title}</div>
          <div class="npc-card__location">${npc.location}</div>
          <div class="npc-card__summary">${npc.summary}</div>
          <button class="npc-card__btn" data-npc="${id}">${ui.detailBtn} →</button>
        </div>`;
        }).join('');
        return `
      <div class="npc-group">
        <h3 class="npc-group__title">${g.title}</h3>
        <div class="npc-group__grid">${cards}</div>
      </div>`;
    }).join('');

    return `
    <section class="section" id="npcs">
      <div class="section__header">
        <div class="section__era-badge">📜</div>
        <h2 class="section__title">${ui.npcSectionTitle}</h2>
        <p class="section__subtitle">${ui.npcSectionSub}</p>
      </div>
      ${groups}
    </section>
    <div class="divider"><span class="divider__icon">⬦</span></div>`;
}

function renderNpcModal() {
    return `
    <div class="modal-overlay" id="npcModal">
      <div class="modal">
        <button class="modal__close" id="modalClose">✕</button>
        <div class="modal__content" id="modalContent"></div>
      </div>
    </div>`;
}

function openNpcModal(npcId) {
    const npc = getNpcs().profiles[npcId];
    if (!npc) return;
    const modal = document.getElementById('npcModal');
    const content = document.getElementById('modalContent');
    content.innerHTML = `
    <div class="modal__name">${npc.name}</div>
    <div class="modal__title">${npc.title}</div>
    <div class="modal__location">📍 ${npc.location}</div>
    <div class="modal__story">${npc.story}</div>
    ${npc.flavorText ? `<div class="flavor-text modal__flavor">${npc.flavorText}</div>` : ''}
  `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeNpcModal() {
    document.getElementById('npcModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ================================
// FOOTER
// ================================

function renderFooter() {
    const ui = getUi();
    return `
    <footer class="footer">
      <div class="footer__logo">${ui.footerLogo}</div>
      <div class="footer__disclaimer">${ui.disclaimer}</div>
      <div class="footer__links">
        <a href="https://www.poewiki.net/" target="_blank" rel="noopener">POE Wiki</a>
        <a href="https://pathofexile.fandom.com/" target="_blank" rel="noopener">Fandom</a>
        <a href="https://pathofexile2.com/" target="_blank" rel="noopener">POE 2</a>
        <a href="https://github.com/kzxl/POE_Lore" target="_blank" rel="noopener">GitHub</a>
      </div>
      <p class="footer__text">${ui.footerCredit}</p>
    </footer>`;
}

// ================================
// MAIN RENDER
// ================================

function render() {
    const lore = getLore();

    // Separate NPC section — inserted between items and world
    const sectionOrder = ['origin', 'winter', 'vaal', 'eternal', 'modern', 'poe2', 'items'];
    let sections = sectionOrder
        .filter((k) => lore[k])
        .map((k) => renderSection(k, lore[k]))
        .join('');

    sections += renderNpcSection();

    if (lore.world) {
        sections += renderSection('world', lore.world);
    }

    document.getElementById('app').innerHTML = `
    ${renderNav()}
    ${renderHero()}
    <main>${sections}</main>
    ${renderFooter()}
    ${renderNpcModal()}
  `;

    setupInteraction();
}

// ================================
// INTERACTION
// ================================

function setupInteraction() {
    setupScrollObserver();
    setupNav();
    setupSmoothScroll();
    setupNpcClicks();
    setupLangToggle();
}

function setupScrollObserver() {
    const observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.card, .timeline__item, .npc-card').forEach((el) => observer.observe(el));
}

function setupNav() {
    const nav = document.getElementById('mainNav');
    const hero = document.getElementById('hero');
    new IntersectionObserver(
        ([entry]) => nav.classList.toggle('visible', !entry.isIntersecting),
        { threshold: 0 }
    ).observe(hero);

    const ids = getNav().map((i) => i.id);
    const sObserver = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
            if (e.isIntersecting) {
                nav.querySelectorAll('a').forEach((a) => a.classList.toggle('active', a.dataset.section === e.target.id));
            }
        }),
        { threshold: 0.3 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) sObserver.observe(el); });
}

function setupSmoothScroll() {
    document.querySelectorAll('.nav a[href^="#"]').forEach((a) => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const t = document.querySelector(a.getAttribute('href'));
            if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function setupNpcClicks() {
    document.querySelectorAll('.npc-card__btn, .npc-card').forEach((el) => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            const npcId = el.dataset.npc || el.closest('[data-npc]')?.dataset.npc;
            if (npcId) openNpcModal(npcId);
        });
    });

    document.getElementById('modalClose').addEventListener('click', closeNpcModal);
    document.getElementById('npcModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeNpcModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeNpcModal();
    });
}

function setupLangToggle() {
    document.getElementById('langToggle').addEventListener('click', () => {
        currentLang = currentLang === 'vi' ? 'en' : 'vi';
        window.scrollTo(0, 0);
        render();
    });
}

// ================================
// BOOT
// ================================
document.addEventListener('DOMContentLoaded', render);

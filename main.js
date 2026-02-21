// ================================
// POE LORE — DATA & RENDERING
// ================================

// ---- NAVIGATION ----
const NAV_ITEMS = [
  { id: 'origin', label: 'Khởi Nguyên' },
  { id: 'winter', label: 'Mùa Đông' },
  { id: 'vaal', label: 'Vaal' },
  { id: 'eternal', label: 'Đế Chế' },
  { id: 'modern', label: 'Hiện Đại' },
  { id: 'poe2', label: 'POE 2' },
  { id: 'world', label: 'Thế Giới' },
];

// ---- LORE DATA ----
const LORE = {
  origin: {
    era: 'Kỷ I',
    title: 'Thời Tiền Sử & Khởi Nguyên',
    subtitle: 'Những thực thể đầu tiên và nền văn minh đã mất',
    cards: [
      {
        icon: '🌊',
        title: 'Kalandra và Hồ Bí Ẩn',
        text: `Thực thể đầu tiên được biết đến trong lịch sử Wraeclast là <strong>Kalandra</strong> — một sinh vật cổ đại xuất hiện và bị giam giữ trong một hồ nước bí ẩn. Kalandra có khả năng phản chiếu và nhân đôi, trở thành nguồn gốc của nhiều huyền thoại.`,
      },
      {
        icon: '🏔️',
        title: 'Nền Văn Minh Tiền Sử (Proto-Vaal)',
        text: `Trước cả nền văn minh Vaal, Wraeclast đã tồn tại một nền văn minh <strong>tiên tiến vượt bậc</strong> — được gọi là "Proto-Vaal". Nền văn minh này đã bị xóa sổ bởi một thảm họa không rõ nguồn gốc. Dấu tích vẫn còn trong <strong>Mỏ Azurite</strong>. Các <strong>Titan</strong> cư ngụ trong núi lửa, cai quản vùng đất hoang sơ.`,
      },
    ],
    table: {
      headers: ['Thần', 'Vai trò'],
      rows: [
        ['Innocence', 'Thần Ánh Sáng, được tôn thờ như vị cứu tinh'],
        ['Sin', 'Anh em của Innocence, bị ghét bỏ và ruồng rẫy'],
        ['Tukohama', 'Thần Chiến Tranh của người Karui'],
        ['Kitava', 'Thần Đói Khát của người Karui'],
        ['Hinekora', 'Thần Chết của người Karui'],
      ],
      caption: 'Các Vị Thần Nguyên Thủy',
    },
  },

  winter: {
    era: 'Kỷ II',
    title: 'Mùa Đông Thế Giới',
    subtitle: 'The Great Wasting — Khi bóng tối nuốt chửng ánh sáng',
    cards: [
      {
        icon: '❄️',
        title: 'Thảm Họa Toàn Cầu',
        text: `Người <strong>Maraketh</strong> gọi là <em>"Mùa Đông của Thế Giới"</em>, người <strong>Karui</strong> gọi là <em>"Đại Hoang Tàn"</em>. Núi lửa phun trào trên diện rộng, che kín bầu trời. Mặt trời biến mất, thế giới chìm trong bóng tối. <strong>Lightless</strong> — những sinh vật bóng tối tấn công, tàn sát các nền văn minh non trẻ.`,
      },
      {
        icon: '⚔️',
        title: 'Order of the Djinn & Sự Thức Tỉnh',
        text: `<strong>Giáo Đoàn Djinn</strong> đã chiến đấu và đánh bại Lightless, khôi phục ánh sáng mặt trời. <strong>Innocence</strong> từ nhân vật thường dân trở thành vị thần. <strong>Sin</strong>, trong cơn giận dữ vì bị ruồng bỏ, đã gieo một <strong>"Tàn Lửa Bóng Tối" (Dark Ember)</strong> xuống lòng đất.`,
      },
      {
        icon: '🐉',
        title: 'Sự Ra Đời của The Beast',
        text: `Từ Dark Ember, sinh vật khổng lồ xuất hiện — <strong>The Beast</strong>. Đây là nguồn gốc của mọi phép thuật (thaumaturgy) trong Wraeclast. The Beast cũng đặt tất cả các vị thần khác vào <strong>giấc ngủ vĩnh hằng</strong>. Phép thuật không còn thuộc về thần linh mà trở thành sức mạnh có thể khai thác.`,
        quote: 'The Beast là bước ngoặt quan trọng nhất trong lịch sử Wraeclast — nguồn gốc của mọi Virtue Gem và thaumaturgy.',
      },
    ],
  },

  vaal: {
    era: 'Kỷ III',
    title: 'Nền Văn Minh Vaal',
    subtitle: '~900 – 400 BIC — Sự huy hoàng và diệt vong',
    cards: [
      {
        icon: '🏛️',
        title: 'Khởi Đầu Huy Hoàng',
        text: `Người Vaal là <strong>nền văn minh lớn đầu tiên</strong> được ghi nhận. Họ phát hiện ra <strong>Virtue Gems</strong> bên dưới <strong>Núi Veruso</strong> — những viên đá kết tinh sức mạnh của The Beast, cho phép con người sử dụng phép thuật.`,
      },
      {
        icon: '👑',
        title: 'Nữ Hoàng Atziri & Sự Sụp Đổ',
        text: `<strong>Atziri</strong> — Nữ Hoàng cuối cùng — bị ám ảnh bởi sự bất tử. Cùng thầy phép <strong>Doryani</strong>, bà thực hiện nghi lễ cuối cùng. Kết quả: <strong>Đại Thảm Họa Vaal (~400 BIC)</strong> — toàn bộ nền văn minh bị xóa sổ trong một đêm, năng lượng phép thuật mất kiểm soát, người Vaal biến thành sinh vật đột biến.`,
        warning: 'Đại Thảm Họa Vaal — Toàn bộ nền văn minh huy hoàng sụp đổ vì tham vọng bất tử.',
      },
    ],
    table: {
      headers: ['Lĩnh vực', 'Mô tả'],
      rows: [
        ['Thaumaturgy', 'Hệ thống phép thuật dựa trên Virtue Gems'],
        ['Kiến trúc', 'Kim Tự Tháp Cổ Đại, Tàn Tích Vaal'],
        ['Sinh học', 'Công nghệ sinh-thần học tiên tiến'],
        ['Hiến tế', 'Hiến tế người để duy trì sức mạnh'],
      ],
      caption: 'Thành Tựu Văn Minh Vaal',
    },
  },

  eternal: {
    era: 'Kỷ IV',
    title: 'Đế Chế Vĩnh Cửu',
    subtitle: '1 IC – ~1339 IC — Từ vinh quang đến Đại Thảm Họa',
    cards: [
      {
        icon: '⚜️',
        title: 'Sự Trỗi Dậy của Azmeri',
        text: `Sau sự sụp đổ của Vaal, người <strong>Azmeri</strong> từ Dãy Núi Azmerian nổi lên. <strong>Tarcus Veruso</strong> thành lập thành phố <strong>Sarn</strong> vào năm <strong>1 IC</strong>, đánh dấu sự khởi đầu của Đế Chế Vĩnh Cửu. Đế Chế nô dịch hóa người Ezomyte, Maraketh và Karui.`,
      },
      {
        icon: '🔮',
        title: 'Hoàng Đế Chitus & Malachai',
        text: `<strong>Hoàng Đế Chitus</strong> với cố vấn <strong>Malachai</strong> — thầy phép thiên tài nhưng điên loạn — khai thác Virtue Gems ở quy mô lớn, phát triển Thaumaturgy thành khoa học chính thống.`,
      },
      {
        icon: '🗡️',
        title: 'Cuộc Nổi Dậy Thanh Khiết (~1333 IC)',
        text: `<strong>Purity Rebellion</strong> — cuộc cách mạng do <strong>High Templar Voll</strong> lãnh đạo, cùng <strong>King Kaom</strong> (Vua Karui). Voll đánh bại Chitus, lên ngôi Hoàng Đế, nhưng tha cho Malachai với điều kiện phá hủy Virtue Gems.`,
      },
      {
        icon: '💀',
        title: 'Đại Thảm Họa (~1339 IC)',
        text: `Malachai <strong>phản bội</strong>. Thay vì phá hủy Virtue Gems, hắn tạo ra <strong>Rapture Device</strong> — dùng năng lượng của Lady Dialla để xâm nhập The Beast. Kết quả: <strong>Đại Thảm Họa</strong> hủy diệt Đế Chế, Wraeclast biến thành vùng đất bị nguyền rủa — người chết sống dậy, quái vật tràn ngập.`,
        warning: 'Malachai muốn chiếm sức mạnh The Beast. Sarn và toàn bộ Đế Chế bị hủy diệt.',
      },
    ],
    table: {
      headers: ['Nhân vật', 'Vai trò'],
      rows: [
        ['High Templar Voll', 'Lãnh đạo cuộc nổi dậy, phản đối thaumaturgy'],
        ['King Kaom', 'Vua Karui, đánh bại nhiều tướng lĩnh Đế Chế'],
        ['Daresso', 'Kiếm sĩ huyền thoại'],
        ['Lady Dialla', '"Gem Queen" — nạn nhân thí nghiệm của Malachai'],
        ['Malachai', 'Thầy phép thiên tài, kẻ gây ra Đại Thảm Họa'],
      ],
      caption: 'Nhân Vật Quan Trọng',
    },
  },

  modern: {
    era: 'Kỷ V',
    title: 'Thời Hiện Đại — Path of Exile 1',
    subtitle: 'Hành trình của Exile trên vùng đất bị nguyền',
    cards: [
      {
        icon: '⛓️',
        title: 'Wraeclast — Thuộc Địa Lưu Đày',
        text: `Sau Đại Thảm Họa, Wraeclast trở thành vùng đất chết. Quốc gia <strong>Oriath</strong> — đảo quốc ngoài khơi — sử dụng Wraeclast làm thuộc địa lưu đày cho tội phạm. Exile bị đày đến đây, dạt vào bờ biển <strong>Lioneye's Watch</strong>.`,
      },
    ],
    timeline: [
      {
        date: 'Act 1',
        title: 'Bờ Biển Hoang Dã',
        text: 'Sống sót tại bờ biển, khám phá hang động và đánh bại Merveil — nàng tiên cá bị nguyền.',
      },
      {
        date: 'Act 2',
        title: 'Rừng Rậm Bí Ẩn',
        text: 'Xâm nhập rừng rậm, đối đầu với giáo phái Vaal và Vaal Oversoul.',
      },
      {
        date: 'Act 3',
        title: 'Sarn Hoang Phế',
        text: 'Tiến vào thành phố Sarn, đối đầu với Dominus — High Templar đang thí nghiệm Virtue Gems.',
      },
      {
        date: 'Act 4',
        title: '⚠️ Giết Chết The Beast',
        text: 'Xâm nhập vào The Beast, đối đầu Malachai (vẫn sống bên trong). Giết The Beast — đánh thức tất cả các vị thần!',
      },
      {
        date: 'Act 5',
        title: 'Trở Về Oriath',
        text: 'Exile trở về Oriath, đối đầu với Kitava — Thần Đói Khát — lần đầu tiên.',
      },
      {
        date: 'Act 6-7',
        title: 'Thế Giới Thay Đổi',
        text: 'Quay lại Wraeclast — thế giới đã biến đổi hoàn toàn. Các vị thần thức dậy, chiến đấu trong rừng rậm.',
      },
      {
        date: 'Act 8-9',
        title: 'Liên Minh với Sin',
        text: 'Sarn chìm trong nước lũ và thần linh. Exile liên minh với Sin để đánh bại từng vị thần.',
      },
      {
        date: 'Act 10',
        title: '🔥 Đánh Bại Kitava',
        text: 'Trận chiến cuối cùng với Kitava tại Oriath, với sự giúp đỡ của Sin và Innocence đã được cứu chuộc.',
      },
    ],
    summary: {
      title: 'Kết Thúc POE 1',
      items: [
        '✅ Kitava bị đánh bại',
        '✅ Innocence được cứu chuộc',
        '✅ Sin hy sinh sức mạnh thần thánh',
        '⚠️ Wraeclast vẫn là vùng đất nguy hiểm',
        '⚠️ Nhiều mối đe dọa vẫn còn tiềm ẩn',
      ],
    },
  },

  poe2: {
    era: 'Kỷ VI',
    title: 'Path of Exile 2',
    subtitle: '20 năm sau khi Kitava bị đánh bại',
    cards: [
      {
        icon: '🔥',
        title: 'Thế Giới Mới',
        text: `Sự kiện diễn ra <strong>20 năm sau</strong> khi Kitava bị đánh bại. Các nền văn minh cổ đại đang được khám phá sâu hơn, xung đột mới giữa các phe phái, thế lực bóng tối mới trỗi dậy. Bí mật về nền văn minh tiền sử được hé lộ.`,
      },
      {
        icon: '🗺️',
        title: 'Exile Mới',
        text: `Người chơi đóng vai một <strong>Exile mới</strong>, tiếp tục khám phá lịch sử sâu thẳm của Wraeclast và đối mặt với những mối đe dọa chưa từng thấy. Các class mới, cơ chế gameplay hoàn toàn mới.`,
      },
    ],
  },

  world: {
    era: 'Phụ Lục',
    title: 'Thế Giới Wraeclast',
    subtitle: 'Địa điểm, dân tộc và thế lực',
    locations: {
      headers: ['Địa điểm', 'Mô tả'],
      rows: [
        ['Sarn', 'Thủ đô cũ của Đế Chế Vĩnh Cửu, giờ là đống hoang tàn'],
        ['Oriath', 'Đảo quốc, nơi Exile bị đày đi'],
        ["Lioneye's Watch", 'Điểm đầu tiên Exile đặt chân đến Wraeclast'],
        ['Highgate', 'Ngôi làng gần lối vào The Beast'],
        ['Tàn Tích Vaal', 'Di tích của nền văn minh Vaal'],
        ['Dãy Núi Azmerian', 'Quê hương người Azmeri'],
      ],
    },
    races: {
      headers: ['Dân tộc', 'Đặc điểm'],
      rows: [
        ['Azmeri', 'Người sáng lập Đế Chế Vĩnh Cửu'],
        ['Karui', 'Chiến binh mạnh mẽ, thờ nhiều vị thần'],
        ['Maraketh', 'Dân du mục sa mạc'],
        ['Ezomyte', 'Dân tộc bị nô dịch, sống ở phía bắc'],
        ['Vaal', 'Nền văn minh cổ đại đã diệt vong'],
      ],
    },
  },
};

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

  // World section — 2 tables
  if (data.locations) {
    content += renderTable({ ...data.locations, caption: '📍 Địa Điểm Quan Trọng' });
  }
  if (data.races) {
    content += renderTable({ ...data.races, caption: '👥 Các Dân Tộc' });
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
      <p class="footer__text">Nội dung lore thuộc bản quyền của Grinding Gear Games</p>
      <div class="footer__links">
        <a href="https://www.poewiki.net/" target="_blank" rel="noopener">POE Wiki</a>
        <a href="https://pathofexile.fandom.com/" target="_blank" rel="noopener">Fandom</a>
        <a href="https://pathofexile2.com/" target="_blank" rel="noopener">POE 2 Official</a>
        <a href="https://github.com/kzxl/POE_Lore" target="_blank" rel="noopener">GitHub</a>
      </div>
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

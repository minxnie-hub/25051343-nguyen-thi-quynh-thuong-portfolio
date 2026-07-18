const icons = {
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>`,
  folder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7h6l2 2h10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M3 7V5a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v2"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`,
  prompt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16v11H8l-4 4Z"/><path d="M8 9h8"/><path d="M8 12h5"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  spark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8Z"/><path d="m19 15 .8 1.8L22 18l-2.2 1.2L19 21l-.8-1.8L16 18l2.2-1.2Z"/><path d="m5 14 1.1 2.4L8.5 17.5 6.1 18.6 5 21l-1.1-2.4-2.4-1.1 2.4-1.1Z"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`
};

const assignments = [
  {
    id: 1,
    title: "Thao tác cơ bản với tệp tin và thư mục",
    short: "Quản lý dữ liệu có hệ thống bằng File Explorer: tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp.",
    objective: "Làm quen và thành thạo các thao tác quản lý dữ liệu cơ bản trên Windows, đồng thời hình thành thói quen tổ chức thư mục khoa học.",
    process: "Thực hiện tuần tự 12 thao tác từ mở File Explorer, tạo cấu trúc thư mục đến xóa, khôi phục dữ liệu và ghi lại minh chứng.",
    lesson: "Phím tắt giúp tiết kiệm thời gian; cấu trúc thư mục cha – con rõ ràng giúp tránh thất lạc; cần phân biệt xóa tạm thời và xóa vĩnh viễn.",
    icon: icons.folder,
    wash: "#f4e3df"
  },
  {
    id: 2,
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    short: "Xây dựng chiến lược tìm kiếm, thu thập tài liệu và đánh giá độ tin cậy của các nguồn về chuyển đổi số và AI.",
    objective: "Hình thành quy trình tìm kiếm tài liệu khoa học có hệ thống và phát triển tư duy phản biện khi thẩm định nguồn tin.",
    process: "Lựa chọn chủ đề SMEs tại Việt Nam, tìm kiếm trên nhiều cơ sở dữ liệu, thu thập 10 tài liệu và đánh giá theo tác giả, xuất bản, phương pháp, trích dẫn, tính cập nhật.",
    lesson: "Bài báo phản biện có độ tin cậy cao; nguồn mở phải được kiểm chứng; từ khóa chiến lược giúp giảm đáng kể thời gian lọc thông tin.",
    icon: icons.search,
    wash: "#e4ece5"
  },
  {
    id: 3,
    title: "Viết prompt hiệu quả cho tác vụ học tập",
    short: "Thiết kế và so sánh ba cấp độ prompt cho tóm tắt, giải thích khái niệm và tạo câu hỏi ôn tập.",
    objective: "Làm chủ cách giao tiếp với mô hình ngôn ngữ lớn và nhận diện mối liên hệ giữa cấu trúc prompt với chất lượng đầu ra.",
    process: "Xây dựng prompt cơ bản, cải tiến và nâng cao; thử nghiệm thực tế; so sánh kết quả; đúc kết khung G-R-I-S-C và C-L-E-A-R.",
    lesson: "Prompt tốt cần bối cảnh, vai trò, yêu cầu rõ ràng, định dạng và giới hạn; prompt chung chung khiến kết quả dễ sơ sài hoặc sai lệch.",
    icon: icons.prompt,
    wash: "#efe5ef"
  },
  {
    id: 4,
    title: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    short: "Phối hợp Google Sheets, Docs, Zalo, CapCut và AI để thực hiện tiểu phẩm “Vị bác sĩ số trong túi áo”.",
    objective: "Rèn luyện năng lực làm việc nhóm trực tuyến, lập kế hoạch, phân công, quản lý tiến độ và đồng sáng tạo trên không gian số.",
    process: "Thiết lập hệ công cụ, chia nhiệm vụ, ghi nhật ký ba buổi làm việc, tổ chức tài nguyên và hoàn thiện video đúng tiến độ.",
    lesson: "Kênh giao tiếp thống nhất, vai trò rõ ràng và kho tài nguyên chung là ba điều kiện cốt lõi để hạn chế chồng chéo công việc.",
    icon: icons.users,
    wash: "#e7edf2"
  },
  {
    id: 5,
    title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    short: "Dự án Empathy kết hợp Gemini, Canva AI, NotebookLM và CapCut để truyền thông về áp lực điểm số lớp 12.",
    objective: "Ứng dụng hệ sinh thái AI tạo sinh vào một quy trình sáng tạo hoàn chỉnh và đánh giá vai trò của con người trong sản phẩm cuối.",
    process: "Từ lên ý tưởng, viết kịch bản, thiết kế slide đến dựng video; mỗi đầu ra AI đều được chọn lọc, chỉnh sửa và bổ sung cảm xúc thật.",
    lesson: "AI tăng tốc khâu tạo khung nhưng không thay thế sự thấu cảm, trải nghiệm và trách nhiệm biên tập của con người.",
    icon: icons.spark,
    wash: "#f6e8d7"
  },
  {
    id: 6,
    title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    short: "Phân tích chính sách, thực hành báo cáo Kinh tế vĩ mô với AI và xây dựng bộ nguyên tắc liêm chính học thuật.",
    objective: "Nâng cao nhận thức về đạo đức, liêm chính học thuật, quyền sở hữu trí tuệ và bảo mật dữ liệu khi ứng dụng AI.",
    process: "So sánh chính sách UEB – NUS, ghi lại prompt và đầu ra, phân tích ranh giới hỗ trợ – gian lận, xây dựng bảy nguyên tắc và infographic.",
    lesson: "AI chỉ là công cụ hỗ trợ; người học phải kiểm chứng, chỉnh sửa, trích dẫn minh bạch và chịu trách nhiệm cuối cùng về nội dung.",
    icon: icons.shield,
    wash: "#e8e4dc"
  }
];

const main = document.querySelector('#main-content');
const nav = document.querySelector('#main-nav');
const menuButton = document.querySelector('.menu-toggle');

function figure(src, caption, className = '') {
  return `<figure class="evidence-figure ${className}">
    <button type="button" class="image-zoom" data-src="${src}" data-caption="${caption.replace(/"/g, '&quot;')}" aria-label="Phóng to ảnh: ${caption.replace(/"/g, '&quot;')}">
      <img src="${src}" alt="${caption.replace(/"/g, '&quot;')}" loading="lazy" decoding="async" />
    </button>
    <figcaption>${caption}</figcaption>
  </figure>`;
}

function table(headers, rows, extraClass = '') {
  return `<div class="table-wrap ${extraClass}" role="region" aria-label="Bảng dữ liệu" tabindex="0">
    <table>
      <thead><tr>${headers.map(h => `<th scope="col">${h}</th>`).join('')}</tr></thead>
      <tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
    </table>
  </div>`;
}

function downloadBanner(id) {
  return `<div class="download-banner">
    <div><h3>Tệp báo cáo gốc</h3><p>Tải bản PDF đầy đủ để đối chiếu nội dung và minh chứng.</p></div>
    <a class="button button-primary" href="./downloads/bai-tap-${id}.pdf" download>${icons.download} Tải PDF bài ${id}</a>
  </div>`;
}

function assignmentNav(id) {
  const prev = assignments.find(a => a.id === id - 1);
  const next = assignments.find(a => a.id === id + 1);
  return `<nav class="assignment-nav" aria-label="Chuyển bài tập">
    ${prev ? `<a href="#/bai-tap/${prev.id}"><small>← Bài trước</small><strong>${prev.title}</strong></a>` : `<a href="#/du-an"><small>← Quay lại</small><strong>Danh sách bài tập</strong></a>`}
    ${next ? `<a class="next" href="#/bai-tap/${next.id}"><small>Bài tiếp theo →</small><strong>${next.title}</strong></a>` : `<a class="next" href="#/tong-ket"><small>Tiếp theo →</small><strong>Tổng kết hành trình</strong></a>`}
  </nav>`;
}

function homePage() {
  return `<div class="page">
    <section class="hero">
      <div class="page-width hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">Portfolio · Nhập môn Công nghệ số & AI</p>
          <h1>Nguyễn Thị <em>Quỳnh Thương</em></h1>
          <p class="hero-subtitle">Một cuốn nhật ký số dịu dàng lưu lại hành trình tôi học cách tổ chức dữ liệu, tìm kiếm tri thức, cộng tác trực tuyến và sử dụng AI một cách sáng tạo, có trách nhiệm.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#/du-an">Khám phá 6 bài tập ${icons.arrow}</a>
            <a class="button button-secondary" href="#/gioi-thieu">Đọc câu chuyện của tôi</a>
          </div>
          <div class="stats-strip" aria-label="Thông tin tổng quan">
            <div class="stat"><strong>06</strong><span>Bài tập được hệ thống hóa</span></div>
            <div class="stat"><strong>30</strong><span>Minh chứng trực quan</span></div>
            <div class="stat"><strong>01</strong><span>Hành trình trưởng thành số</span></div>
          </div>
        </div>
        <aside class="profile-card" aria-label="Hồ sơ sinh viên">
          <div class="avatar-monogram" aria-hidden="true">QT</div>
          <h2>Nguyễn Thị Quỳnh Thương</h2>
          <p class="role">Sinh viên Kinh tế Quốc tế</p>
          <dl class="profile-meta">
            <div><dt>Mã sinh viên</dt><dd>25051343</dd></div>
            <div><dt>Trường</dt><dd>Đại học Kinh tế – ĐHQGHN</dd></div>
            <div><dt>Sở thích</dt><dd>Chụp ảnh lưu giữ kỷ niệm, nghe nhạc</dd></div>
            <div><dt>Email</dt><dd>nguyenthiquynhthuong07@gmail.com</dd></div>
          </dl>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="page-width intro-panel">
        <aside class="quote-card">
          <div class="quote-mark">“</div>
          <blockquote>Học tập không hướng đến một đích đến hoàn hảo, mà là hành trình tích lũy để ngày mai tốt hơn ngày hôm qua.</blockquote>
        </aside>
        <div class="prose">
          <p class="section-kicker">Một chút về tôi</p>
          <h2>Tôi học công nghệ để mở rộng tương lai của chính mình.</h2>
          <p>Tôi là sinh viên năm nhất ngành Kinh tế Quốc tế tại Trường Đại học Kinh tế – ĐHQGHN. Với tôi, ngành học không chỉ dẫn đến một tấm bằng mà còn là chiếc chìa khóa mở ra thế giới rộng lớn hơn để khám phá và chinh phục.</p>
          <p>Tôi đặt mục tiêu tốt nghiệp loại Giỏi và học thêm một ngoại ngữ trước khi ra trường. Xa hơn, tôi mong muốn trở thành một nhà lãnh đạo trong lĩnh vực kinh tế, có nền tảng vững chắc để chăm lo cho bản thân, gia đình và tạo ra những thay đổi tích cực cho cộng đồng.</p>
          <a class="button button-ghost" href="#/gioi-thieu">Xem mục tiêu và định hướng ${icons.arrow}</a>
        </div>
      </div>
    </section>

    <section class="section" id="projects-preview">
      <div class="page-width">
        <p class="section-kicker">Hành trình học tập</p>
        <h2 class="section-title">Sáu bài tập, sáu lát cắt của năng lực số.</h2>
        <p class="section-lead">Mỗi bài được trình bày theo đúng mạch nội dung: mục tiêu, quá trình thực hiện, bảng dữ liệu và ảnh minh chứng xuất hiện ngay tại phần liên quan.</p>
        <div class="project-grid">
          ${assignments.map(a => `<a class="project-card" href="#/bai-tap/${a.id}" style="--card-wash:${a.wash}">
            <div class="project-index"><span>Bài tập ${String(a.id).padStart(2,'0')}</span><span class="project-icon">${a.icon}</span></div>
            <div><h3>${a.title}</h3><p>${a.short}</p><span class="project-link">Xem bài chi tiết ${icons.arrow}</span></div>
          </a>`).join('')}
        </div>
      </div>
    </section>
  </div>`;
}

function aboutPage() {
  return `<div class="page">
    <section class="page-hero">
      <div class="page-width page-hero-grid">
        <div>
          <div class="breadcrumbs"><a href="#/">Trang chủ</a><span>/</span><span>Giới thiệu</span></div>
          <p class="eyebrow">Chân dung người học</p>
          <h1>Một cô gái năm nhất đang học cách làm chủ thế giới số.</h1>
          <p>Portfolio này lưu giữ cả sản phẩm, quá trình và những thay đổi trong tư duy của tôi sau từng bài thực hành.</p>
        </div>
        <div class="page-number" aria-hidden="true">QT</div>
      </div>
    </section>
    <section class="section">
      <div class="page-width intro-panel">
        <aside class="quote-card">
          <p class="eyebrow" style="color:#ecd0d5">Phong cách cá nhân</p>
          <blockquote>Dịu dàng không có nghĩa là đứng yên. Tôi muốn tiến về phía trước bằng sự kiên trì, tò mò và trách nhiệm.</blockquote>
        </aside>
        <article class="prose">
          <h2>Xin chào, tôi là Quỳnh Thương.</h2>
          <p>Tôi thích lưu giữ kỷ niệm qua những tấm ảnh hằng ngày và luôn có một danh sách nhạc yêu thích cho mọi trạng thái cảm xúc, kể cả những ngày mưa buồn. Hiện tại, tôi đang theo đuổi tương lai của mình qua ngành <strong>Kinh tế Quốc tế</strong> tại <strong>Trường Đại học Kinh tế – ĐHQGHN</strong>.</p>
          <h3>Mục tiêu học tập và định hướng</h3>
          <p>Hành trình học tập của tôi không hướng đến một đích đến hoàn hảo, mà là quá trình tích lũy để ngày mai tốt hơn ngày hôm qua. Tôi đặt mục tiêu tốt nghiệp loại Giỏi và học thêm một ngoại ngữ trước khi ra trường.</p>
          <p>Xa hơn, tôi mong muốn trở thành một CEO, một nhà kinh tế có năng lực và bản lĩnh, xây dựng chỗ dựa vững chắc cho bản thân và bố mẹ. Tôi tin kiến thức chỉ thực sự có giá trị khi được dùng để tạo ra thay đổi tích cực cho những người xung quanh.</p>
          <h3>Mục tiêu của Portfolio</h3>
          <p>Portfolio này không đơn thuần là một hồ sơ năng lực số. Với tôi, nó giống một cuốn nhật ký ghi lại từng bước chân còn chập chững nhưng đầy kiên trì trên hành trình học môn Công nghệ số và khám phá những điều mới mẻ của bản thân.</p>
          <p>Đây là nơi lưu giữ từng bài tập và dự án. Các sản phẩm có thể chưa hoàn hảo, nhưng mỗi trang đều chứa một phần nỗ lực của tôi khi tiếp cận học phần mới. Tôi mong Portfolio sẽ lưu lại khoảnh khắc cô gái năm nhất từng loay hoay tìm cách hoàn thành dự án, để một ngày nhìn lại, đó vẫn là một kỷ niệm đẹp và có ý nghĩa.</p>
          <div class="skills-cloud" aria-label="Thông tin cá nhân">
            <span class="skill-pill">Kinh tế Quốc tế</span><span class="skill-pill">Tư duy học hỏi</span><span class="skill-pill">Chụp ảnh</span><span class="skill-pill">Âm nhạc</span><span class="skill-pill">Công nghệ số</span><span class="skill-pill">AI có trách nhiệm</span>
          </div>
        </article>
      </div>
    </section>
  </div>`;
}

function projectsPage() {
  return `<div class="page">
    <section class="page-hero">
      <div class="page-width page-hero-grid">
        <div>
          <div class="breadcrumbs"><a href="#/">Trang chủ</a><span>/</span><span>Bài tập</span></div>
          <p class="eyebrow">Kho lưu trữ học tập</p>
          <h1>Toàn bộ 6 bài tập thành phần.</h1>
          <p>Mỗi bài là một trang riêng, có nội dung đầy đủ, bảng được dựng lại rõ ràng và ảnh minh chứng đặt đúng theo thứ tự thực hiện.</p>
        </div>
        <div class="page-number" aria-hidden="true">06</div>
      </div>
    </section>
    <section class="section">
      <div class="page-width">
        <div class="project-grid">
          ${assignments.map(a => `<a class="project-card" href="#/bai-tap/${a.id}" style="--card-wash:${a.wash}">
            <div class="project-index"><span>Bài tập ${String(a.id).padStart(2,'0')}</span><span class="project-icon">${a.icon}</span></div>
            <div><h3>${a.title}</h3><p>${a.short}</p><span class="project-link">Mở nội dung đầy đủ ${icons.arrow}</span></div>
          </a>`).join('')}
        </div>
      </div>
    </section>
  </div>`;
}

function assignmentShell(a, toc, content) {
  return `<div class="page">
    <section class="page-hero">
      <div class="page-width page-hero-grid">
        <div>
          <div class="breadcrumbs"><a href="#/">Trang chủ</a><span>/</span><a href="#/du-an">Bài tập</a><span>/</span><span>Bài ${a.id}</span></div>
          <p class="eyebrow">Bài tập ${String(a.id).padStart(2,'0')}</p>
          <h1>${a.title}</h1>
          <p>${a.short}</p>
        </div>
        <div class="page-number" aria-hidden="true">${String(a.id).padStart(2,'0')}</div>
      </div>
    </section>
    <div class="page-width assignment-overview">
      <div class="overview-card"><h3>Mục tiêu</h3><p>${a.objective}</p></div>
      <div class="overview-card"><h3>Quá trình</h3><p>${a.process}</p></div>
      <div class="overview-card"><h3>Bài học</h3><p>${a.lesson}</p></div>
    </div>
    <section class="section">
      <div class="page-width report-layout">
        <aside class="report-toc"><strong>Mục lục bài</strong>${toc}</aside>
        <article class="report-content">${content}${downloadBanner(a.id)}${assignmentNav(a.id)}</article>
      </div>
    </section>
  </div>`;
}

function assignment1() {
  const a = assignments[0];
  const toc = `<a href="#bt1-steps">12 bước thực hiện</a><a href="#bt1-result">Kết quả & bài học</a>`;
  const steps = [
    ["Mở File Explorer", "Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ."],
    ["Truy cập ổ đĩa hoặc thư mục", "Tại cột bên trái, chọn This PC và mở ổ đĩa không phải ổ hệ thống. Trong bài thực hành, tôi sử dụng ổ D:."],
    ["Tạo thư mục mới", "Nhấp chuột phải vào khoảng trống, chọn New → Folder và đặt tên thư mục là ThucHanh_NguyenThiQuynhThuong."],
    ["Mở thư mục vừa tạo", "Nhấp đúp vào thư mục ThucHanh_NguyenThiQuynhThuong để bắt đầu xây dựng cấu trúc dữ liệu bên trong."],
    ["Tạo tệp văn bản", "Nhấp chuột phải, chọn New → Text Document và đặt tên tệp là GhiChu.txt."],
    ["Đổi tên tệp", "Chọn Rename và đổi GhiChu.txt thành GhiChuQuanTrong.txt."],
    ["Tạo thư mục con", "Trong thư mục chính, tạo thư mục con TaiLieu để phân loại và lưu trữ tệp."],
    ["Sao chép tệp – Copy & Paste", "Sao chép GhiChuQuanTrong.txt bằng Ctrl + C, mở TaiLieu và dán bằng Ctrl + V. Bản gốc vẫn còn ở vị trí ban đầu."],
    ["Di chuyển tệp – Cut & Paste", "Tạo DiChuyen.txt, dùng Ctrl + X rồi dán vào TaiLieu bằng Ctrl + V. Tệp chỉ còn tại vị trí mới."],
    ["Xóa tệp vào Thùng rác", "Trong TaiLieu, chọn GhiChuQuanTrong.txt và nhấn Delete để đưa tệp vào Recycle Bin."],
    ["Xóa vĩnh viễn", "Chọn DiChuyen.txt, nhấn Shift + Delete và xác nhận cảnh báo. Tệp được xóa mà không đi qua Thùng rác."],
    ["Khôi phục từ Thùng rác", "Mở Recycle Bin, tìm GhiChuQuanTrong.txt, nhấp chuột phải và chọn Restore. Tệp quay lại vị trí ban đầu."]
  ];
  const figuresByStep = {
    1: `<div class="figure-grid">${figure('./assets/images/bt1/01.webp','Vị trí biểu tượng File Explorer trên thanh tác vụ.')}${figure('./assets/images/bt1/02.webp','Giao diện This PC sau khi mở File Explorer.')}</div>`,
    2: `<div class="figure-grid single">${figure('./assets/images/bt1/03.webp','Truy cập ổ New Volume (D:) để thực hiện bài tập.')}</div>`,
    3: `<div class="figure-grid single">${figure('./assets/images/bt1/04.webp','Thư mục ThucHanh_NguyenThiQuynhThuong đã được tạo và mở.')}</div>`,
    5: `<div class="figure-grid single">${figure('./assets/images/bt1/05.webp','Tệp GhiChu.txt xuất hiện trong thư mục thực hành.')}</div>`,
    6: `<div class="figure-grid">${figure('./assets/images/bt1/06.webp','Mở menu Rename cho tệp GhiChu.txt.')}${figure('./assets/images/bt1/07.webp','Đổi tên thành GhiChuQuanTrong.txt.')}</div>`,
    7: `<div class="figure-grid single">${figure('./assets/images/bt1/08.webp','Thư mục con TaiLieu được tạo bên cạnh tệp văn bản.')}</div>`,
    8: `<div class="figure-grid">${figure('./assets/images/bt1/09.webp','Bản sao GhiChuQuanTrong.txt được dán vào TaiLieu.')}${figure('./assets/images/bt1/10.webp','Cấu trúc thư mục sau thao tác Copy & Paste.')}</div>`,
    9: `<div class="figure-grid">${figure('./assets/images/bt1/11.webp','Tệp DiChuyen.txt được tạo và chuyển vào thư mục TaiLieu.')}${figure('./assets/images/bt1/12.webp','Kiểm tra tệp sau thao tác Cut & Paste.')}</div>`,
    10: `<div class="figure-grid single">${figure('./assets/images/bt1/13.webp','Hộp thoại xác nhận xóa tệp GhiChuQuanTrong.txt.')}</div>`,
    12: `<div class="figure-grid">${figure('./assets/images/bt1/14.webp','Tệp đã xóa xuất hiện trong Recycle Bin và có thể Restore.')}${figure('./assets/images/bt1/15.webp','Tệp GhiChuQuanTrong.txt đã được khôi phục về thư mục TaiLieu.')}</div>`
  };
  const content = `<section class="report-section" id="bt1-steps">
    <h2>12 bước thực hiện</h2>
    <p class="lead-note">Toàn bộ minh chứng được đặt ngay sau thao tác tương ứng để thể hiện rõ trình tự và kết quả của từng bước.</p>
    <div class="step-list">
      ${steps.map((s, i) => `<div class="step-card"><h3>${s[0]}</h3><p>${s[1]}</p>${figuresByStep[i+1] || ''}</div>`).join('')}
    </div>
  </section>
  <section class="report-section" id="bt1-result">
    <h2>Kết quả và bài học rút ra</h2>
    <p>Tôi đã hoàn thành toàn bộ chu trình quản lý tệp và thư mục: tạo mới, đổi tên, tổ chức thư mục con, sao chép, di chuyển, xóa tạm thời, xóa vĩnh viễn và khôi phục dữ liệu.</p>
    <ul>
      <li>Phím tắt Windows + E, Ctrl + C, Ctrl + X và Ctrl + V giúp thao tác nhanh hơn đáng kể.</li>
      <li>Cấu trúc thư mục cha – con giúp tài nguyên học tập được sắp xếp rõ ràng và giảm nguy cơ thất lạc.</li>
      <li>Delete và Shift + Delete có hậu quả khác nhau; hiểu rõ sự khác biệt giúp bảo vệ dữ liệu an toàn hơn.</li>
      <li>Recycle Bin là lớp bảo vệ quan trọng khi người dùng xóa nhầm tệp.</li>
    </ul>
  </section>`;
  return assignmentShell(a, toc, content);
}

function assignment2() {
  const a = assignments[1];
  const toc = `<a href="#bt2-topic">Chủ đề & phạm vi</a><a href="#bt2-method">Phương pháp tìm kiếm</a><a href="#bt2-sources">Nguồn tham khảo</a><a href="#bt2-evaluate">Đánh giá nguồn</a><a href="#bt2-analysis">Phân tích</a>`;
  const reliability = table(
    ['Nguồn', 'Tác giả', 'Cơ quan xuất bản', 'Phương pháp nghiên cứu', 'Mức trích dẫn', 'Cập nhật', 'Đánh giá'],
    [
      ['Journal of Business Research', 'Rõ ràng', 'Tạp chí Q1', 'Có nghiên cứu', 'Rất cao', 'Mới', '<strong>Rất cao</strong>'],
      ['FPT Digital', 'Tổ chức lớn', 'Uy tín', 'Dữ liệu thực tiễn', 'Cao', 'Mới', '<strong>Cao</strong>'],
      ['OECD', 'Tổ chức lớn', 'Rất uy tín', 'Dữ liệu và thống kê', 'Cao', 'Mới', '<strong>Rất cao</strong>'],
      ['Blog cá nhân', 'Không rõ', 'Thấp', 'Không rõ', 'Thấp', 'Mới', '<strong>Thấp</strong>']
    ]
  );
  const refs = [
    `Nguyễn, T.P.T. (2026). “Tác động của chuyển đổi số đến hiệu quả hoạt động của doanh nghiệp nhỏ và vừa tại Việt Nam”, <em>Nghiên cứu Kinh tế Tài chính</em>.`,
    `Vương, Q.T. và Vương, Q.H. (2025). “Chuyển đổi số cho doanh nghiệp vừa và nhỏ tại Việt Nam – Thực trạng và khuyến nghị chính sách”, <em>Lý luận Chính trị</em>.`,
    `Wang et al. (2026). “AI adoption and human value within organizations”, <em>Journal of Business Research</em>.`,
    `Thi, M.T., Thi, N.N., Thi Minh, T.V., Nguyen, D.T. và Nguyen, L.T. (2025). “Digital Technology Adoption and SME Performance in Vietnam: A Pilot Study of Innovation Capability and Entrepreneurial Orientation”, <em>Journal of Logistics, Informatics and Service Science</em>, 12(9), tr. 118–134.`,
    `Lê, H. (2025). “Doanh nghiệp triển khai quản trị hiệu suất nhưng hiệu quả vẫn ì ạch, do đâu?”, <em>Tuổi Trẻ</em>.`,
    `Bộ Thông tin và Truyền thông (2020). <em>Cẩm nang chuyển đổi số</em>. Nhà xuất bản Thông tin và Truyền thông.`,
    `Rogers, D.L. (2024). <em>Tóm lược chuyển đổi số: Chiến lược và lộ trình</em>. Nhà xuất bản Thông tin và Truyền thông.`,
    `OECD (2025). <em>AI adoption by small and medium-sized enterprises</em>. Có tại: https://www.oecd.org/en/publications/ai-adoption-by-small-and-medium-sized-enterprises_426399c1-en.html (truy cập ngày 18/04/2026).`,
    `Watts, S., Iqbal, M.S. và Rahim, Z.A. (2026). “Digital transformation and entrepreneurship in Vietnam: navigating challenges and policy impacts”. Có tại: https://link.springer.com/article/10.1007/s40497-026-00530-2 (truy cập ngày 18/04/2026).`,
    `FPT (2025). “Ứng dụng trí tuệ nhân tạo trong kinh doanh – tăng trưởng hiệu suất làm việc vượt trội với AI”. Có tại: https://digital.fpt.com/linh-vuc/ung-dung-tri-tue-nhan-tao-trong-kinh-doanh-tang-truong-hieu-suat-lam-viec-vuot-troi-voi-ai-2.html.`
  ];
  const content = `<section class="report-section" id="bt2-topic">
    <h2>I. Lựa chọn chủ đề và phạm vi tìm kiếm</h2>
    <h3>Chủ đề nghiên cứu</h3>
    <p class="lead-note"><strong>“Tác động của chuyển đổi số và ứng dụng trí tuệ nhân tạo đến hiệu quả hoạt động của các doanh nghiệp vừa và nhỏ tại Việt Nam.”</strong></p>
    <h3>Lý do lựa chọn</h3>
    <p>Doanh nghiệp nhỏ và vừa chiếm phần lớn tổng số doanh nghiệp đang hoạt động tại Việt Nam, đóng góp vào GDP và tạo nhiều việc làm cho xã hội. Trong bối cảnh cách mạng công nghệ phát triển nhanh, chuyển đổi số và AI trở thành yếu tố cấp thiết để nâng cao năng suất và hiệu quả.</p>
    <p>Tôi lựa chọn chủ đề vì có liên hệ trực tiếp với ngành Kinh tế Quốc tế và muốn tìm hiểu AI tác động như thế nào đến hiệu suất làm việc, sản xuất, quản trị và quá trình tạo giá trị trong doanh nghiệp.</p>
  </section>
  <section class="report-section" id="bt2-method">
    <h2>II. Phương pháp tìm kiếm thông tin</h2>
    <h3>Nguồn sử dụng</h3>
    <ul><li>Cơ sở dữ liệu học thuật: Google Scholar, ScienceDirect, ResearchGate.</li><li>Tạp chí chuyên ngành: Tạp chí Kinh tế – Tài chính, Tạp chí Kinh tế & Phát triển.</li><li>Sách chuyên khảo.</li><li>Nguồn mở trên Internet và báo cáo doanh nghiệp.</li><li>Thư viện số.</li><li>Trang tin tức, website UEB và mạng xã hội để tham khảo, sau đó kiểm chứng lại.</li></ul>
    <h3>Từ khóa tìm kiếm</h3>
    <div class="tag-row"><span class="tag">tác động của AI đến SMEs Việt Nam</span><span class="tag">tác động của chuyển đổi số</span><span class="tag">digital transformation</span><span class="tag">SME performance Vietnam</span><span class="tag">AI adoption</span><span class="tag">small and medium enterprises</span></div>
  </section>
  <section class="report-section" id="bt2-sources">
    <h2>III. Danh mục tài liệu tham khảo</h2>
    <p>Tôi thu thập đủ 10 tài liệu từ bài báo khoa học, sách chuyên khảo, báo chí, tổ chức quốc tế và báo cáo doanh nghiệp. Danh mục được trình bày theo định dạng Harvard.</p>
    <ol class="reference-list">${refs.map(r => `<li>${r}</li>`).join('')}</ol>
  </section>
  <section class="report-section" id="bt2-evaluate">
    <h2>IV. Bảng đánh giá độ tin cậy của nguồn</h2>
    <p class="table-caption">Các nguồn được đối chiếu theo tác giả, cơ quan xuất bản, phương pháp nghiên cứu, trích dẫn và tính cập nhật.</p>
    ${reliability}
  </section>
  <section class="report-section" id="bt2-analysis">
    <h2>V. Phân tích và đánh giá</h2>
    <h3>So sánh các loại nguồn</h3>
    <ul><li><strong>Bài báo khoa học:</strong> độ tin cậy cao nhất do có phương pháp nghiên cứu rõ ràng và quy trình phản biện.</li><li><strong>Sách chuyên khảo:</strong> cung cấp nền tảng lý thuyết vững chắc và hệ thống.</li><li><strong>Báo cáo doanh nghiệp:</strong> phản ánh thực tế thị trường, nhưng cần xem xét mục tiêu truyền thông của đơn vị phát hành.</li><li><strong>Nguồn Internet:</strong> thuận tiện và cập nhật nhanh nhưng cần chọn lọc, đối chiếu kỹ.</li></ul>
    <h3>Nhận xét chuyên sâu</h3>
    <p>Qua các tài liệu, doanh nghiệp Việt Nam đang từng bước đưa AI, điện toán đám mây và các giải pháp chuyển đổi số vào quy trình vận hành nhằm tối ưu hiệu suất và thích nghi với tốc độ phát triển công nghệ.</p>
    <p>Không phải nguồn nào cũng đáng tin cậy. Nguồn không rõ tác giả, thiếu phương pháp nghiên cứu hoặc không công bố dữ liệu thường có độ chính xác thấp và phải được kiểm chứng trước khi sử dụng trong báo cáo học thuật.</p>
  </section>`;
  return assignmentShell(a, toc, content);
}

function assignment3() {
  const a = assignments[2];
  const toc = `<a href="#bt3-tasks">Phân tích tác vụ</a><a href="#bt3-prompts">Ba cấp độ prompt</a><a href="#bt3-test">Thử nghiệm</a><a href="#bt3-reason">Phân tích hiệu quả</a><a href="#bt3-framework">Khung nguyên tắc</a>`;
  const taskTable = table(
    ['Tác vụ học tập', 'Mục tiêu cốt lõi', 'Thách thức khi làm thủ công', 'Lợi ích vượt trội từ AI'],
    [
      ['<strong>Tóm tắt bài đọc / tài liệu học thuật</strong>', 'Chuyển lượng thông tin lớn, phức tạp thành phiên bản ngắn gọn nhưng vẫn bảo toàn ý chính, phương pháp và kết luận.', 'Dễ quá tải bởi thuật ngữ; tốn nhiều giờ; dễ mang tính chủ quan khi tự tóm lược.', 'Quét cấu trúc nhanh; phân tách luận điểm chính/phụ; tùy biến độ dài dễ dàng.'],
      ['<strong>Giải thích khái niệm phức tạp</strong>', 'Chuyển lý thuyết trừu tượng, hàn lâm thành lời giải thích trực quan và phù hợp từng đối tượng.', 'Dễ rơi vào “bẫy chuyên môn”; thiếu ví dụ thực tế gần gũi.', 'Đóng vai linh hoạt; tạo phép ẩn dụ; cá nhân hóa theo độ tuổi và nền tảng người học.'],
      ['<strong>Tạo bộ câu hỏi ôn tập</strong>', 'Thiết kế câu hỏi đa dạng để kích thích tư duy chủ động và tự đánh giá năng lực.', 'Tạo phương án nhiễu chất lượng mất thời gian; người học dễ né phần kiến thức yếu.', 'Tự động tạo ngân hàng câu hỏi theo thang Bloom và kèm lời giải chi tiết.']
    ]
  );
  const promptTable = table(
    ['Tác vụ', 'Prompt cơ bản', 'Prompt cải tiến', 'Prompt nâng cao'],
    [
      [
        '<strong>Tóm tắt tài liệu học thuật</strong>',
        '“Hãy tóm tắt văn bản sau đây ngắn gọn: …”',
        '“Hãy tóm tắt văn bản dưới đây thành một đoạn khoảng 150 từ. Tập trung vào luận điểm chính và dẫn chứng quan trọng; sử dụng đầu dòng để phân tách ý. Văn bản: …”',
        '“Bạn là chuyên gia tóm tắt tài liệu học thuật. Hãy: (1) xác định mục đích nghiên cứu; (2) liệt kê tối đa ba phương pháp hoặc kết quả cốt lõi; (3) trích xuất kết luận chung; cuối cùng tổng hợp thành bản tóm tắt có cấu trúc, phù hợp sinh viên đại học. Văn bản: …”'
      ],
      [
        '<strong>Giải thích khái niệm AI</strong>',
        '“Giải thích khái niệm AI là gì.”',
        '“Hãy giải thích Trí tuệ nhân tạo (AI) cho người mới bắt đầu, gồm định nghĩa cơ bản, cách hoạt động chung và hai ví dụ trong đời sống.”',
        '“Bạn là giáo viên tiểu học có cách diễn đạt sinh động. Hãy giải thích AI cho trẻ 10 tuổi theo phương pháp ELI5, dùng ẩn dụ gần gũi và tuyệt đối tránh thuật ngữ công nghệ phức tạp.”'
      ],
      [
        '<strong>Câu hỏi ôn tập Python</strong>',
        '“Tạo câu hỏi ôn tập về ngôn ngữ lập trình Python.”',
        '“Hãy tạo 5 câu trắc nghiệm, mỗi câu 4 phương án và ghi rõ đáp án đúng, về vòng lặp và hàm trong Python cho người mới bắt đầu.”',
        '“Bạn là giảng viên Khoa học máy tính có 10 năm kinh nghiệm. Hãy tạo 3 câu trắc nghiệm và 1 câu tự luận phân tích lỗi code về vòng lặp Python; gán mức Dễ – Trung bình – Khó; cuối cùng cung cấp đáp án và lời giải chi tiết.”'
      ]
    ]
  );
  const resultTable = table(
    ['Phiên bản prompt', 'Chất lượng đầu ra', 'Điểm đánh giá'],
    [
      ['Prompt cơ bản', 'Đầu ra ngắn nhưng sơ sài, bỏ sót ý chính, ngôn từ khô khan và định dạng chưa rõ.', '<strong>4/10</strong>'],
      ['Prompt cải tiến', 'Đáp ứng tiêu chí về độ dài và thành phần; cấu trúc rõ, dễ đọc, phù hợp ôn tập nhanh.', '<strong>7/10</strong>'],
      ['Prompt nâng cao', 'Phân tích sâu, giọng điệu phù hợp, câu hỏi phân tầng rõ và có giải thích logic.', '<strong>9,5/10</strong>']
    ]
  );
  const content = `<section class="report-section" id="bt3-tasks"><h2>I. Lựa chọn và phân tích tác vụ học tập</h2>${taskTable}</section>
  <section class="report-section" id="bt3-prompts"><h2>II. Xây dựng các phiên bản prompt</h2><p>Mỗi tác vụ được viết ở ba mức độ để quan sát rõ sự khác biệt về bối cảnh, cấu trúc, vai trò và ràng buộc đầu ra.</p>${promptTable}</section>
  <section class="report-section" id="bt3-test"><h2>III. Thử nghiệm thực tế và so sánh đầu ra</h2>${resultTable}</section>
  <section class="report-section" id="bt3-reason"><h2>IV. Phân tích lý do khác biệt về hiệu quả</h2>
    <h3>Prompt cơ bản</h3><p>Hiệu quả thấp vì thiếu bối cảnh (Context Gap) và thiếu ràng buộc (Constraint Gap). AI phải tự phỏng đoán mục đích nên kết quả dễ chung chung, bỏ sót hoặc sai định dạng.</p>
    <h3>Prompt cải tiến</h3><p>Các thông số cụ thể như số lượng từ, số câu hỏi và hình thức đầu dòng đóng vai trò như bộ khung, giúp mô hình định hình dữ liệu đầu ra chính xác hơn.</p>
    <h3>Prompt nâng cao</h3><ul><li><strong>Role Prompting:</strong> kích hoạt vùng kiến thức chuyên biệt và căn chỉnh giọng điệu theo đối tượng.</li><li><strong>Chain-of-Thought:</strong> hướng mô hình xử lý tuần tự, giảm nguy cơ bỏ sót ý.</li><li><strong>Few-shot Prompting:</strong> cung cấp ví dụ mẫu để mô hình bắt chước đúng phong cách và cấu trúc mong muốn.</li></ul>
  </section>
  <section class="report-section" id="bt3-framework"><h2>V. Nguyên tắc và mẹo viết prompt hiệu quả</h2>
    <h3>Công thức G-R-I-S-C</h3>
    <ul><li><strong>G – Goal:</strong> xác định mục tiêu.</li><li><strong>R – Role:</strong> giao vai trò hoặc chuyên môn cho AI.</li><li><strong>I – Instructions:</strong> chỉ dẫn các bước thực hiện.</li><li><strong>S – Style & Tone:</strong> quy định giọng điệu và phong cách.</li><li><strong>C – Constraints:</strong> đặt giới hạn về độ dài, định dạng và nội dung.</li></ul>
    <h3>Công thức C-L-E-A-R</h3>
    <ul><li><strong>C – Context:</strong> cung cấp bối cảnh nền.</li><li><strong>L – Role:</strong> giao vai trò cụ thể.</li><li><strong>E – Explicit Instruction:</strong> nêu chính xác việc cần làm, số lượng và định dạng.</li><li><strong>A – Audience:</strong> xác định đối tượng đọc hoặc nghe.</li><li><strong>R – Refine:</strong> yêu cầu tinh chỉnh kết quả dựa trên phản hồi.</li></ul>
    <div class="prompt-card"><strong>Ví dụ hoàn chỉnh</strong><p>“Tôi đang chuẩn bị bài thuyết trình về phát triển bền vững. Hãy đóng vai chuyên gia môi trường, viết phần mở đầu khoảng 100 từ dưới dạng gạch đầu dòng, dành cho học sinh THPT; sau đó tự kiểm tra và viết lại bằng giọng văn trang trọng hơn.”</p></div>
  </section>`;
  return assignmentShell(a, toc, content);
}

function assignment4() {
  const a = assignments[3];
  const toc = `<a href="#bt4-tools">Công cụ</a><a href="#bt4-task">Phân công</a><a href="#bt4-log">Nhật ký làm việc</a><a href="#bt4-resource">Tài nguyên</a><a href="#bt4-review">Đánh giá</a>`;
  const tasks = table(
    ['Công việc', 'Mô tả', 'Người thực hiện', 'Thời hạn'],
    [
      ['Viết kịch bản', 'Viết tiểu phẩm phù hợp đề tài, mang tính thời sự và thể hiện ứng dụng AI.', 'Minh Thu, Toản', '17/04/2026'],
      ['Làm slide trình chiếu', 'Thiết kế bản slide tóm tắt nội dung, hình ảnh đẹp mắt.', 'Minh Thư', '20/04/2026'],
      ['Diễn kịch', 'Toản: Ngọc Hoàng, sếp, nông dân; Thương: Bắc Đẩu, nhân viên văn phòng; Thư: Táo Y tế, nhân viên, con gái nông dân; Thu: phóng viên, người thuyết trình.', 'Tất cả thành viên', '21/04/2026'],
      ['Chuẩn bị đạo cụ', 'Chuẩn bị trang phục, máy tính, bối cảnh, đồ ăn và vật dụng cần thiết.', 'Tất cả thành viên', '20/04/2026'],
      ['Quay phim', 'Ghi hình các cảnh quay theo kịch bản.', 'Thu', '21/04/2026'],
      ['Thiết kế video', 'Cắt ghép, thêm hiệu ứng, âm thanh và phụ đề để hoàn thiện sản phẩm.', 'Thương, Thư', '29/04/2026']
    ]
  );
  const meetings = table(
    ['Buổi làm việc', 'Mục tiêu', 'Nội dung thảo luận', 'Kết luận / nhiệm vụ tiếp theo', 'Thành viên'],
    [
      ['Buổi 1 · 15/04/2026 · 22:30–23:30', 'Chọn chủ đề, đề tài, hình thức và phân công.', 'Đề xuất các hướng AI trong sức khỏe, kinh tế và pháp luật; thống nhất làm tiểu phẩm. Cân nhắc bốn đề tài và chọn “AI – Vị bác sĩ số trong túi áo”.', 'Viết kịch bản và chuẩn bị quay. Thương phụ trách edit video và diễn; Thu, Toản phụ trách kịch bản và diễn.', 'Tất cả; không có thành viên vắng'],
      ['Buổi 2 · 20/04/2026 · 15:30–17:30', 'Ngày quay phim đầu tiên.', 'Sử dụng không gian lớp học để quay theo kịch bản.', 'Hoàn thành cảnh 2, 5, 6.', 'Tất cả; không có thành viên vắng'],
      ['Buổi 3 · 21/04/2026 · 07:30–09:30', 'Ngày quay phim thứ hai.', 'Tiếp tục ghi hình các cảnh còn lại.', 'Hoàn thành cảnh 1, 3, 4.', 'Tất cả; không có thành viên vắng']
    ]
  );
  const evalTable = table(
    ['Công cụ', 'Mục đích sử dụng', 'Cách thức triển khai', 'Đánh giá hiệu quả'],
    [
      ['ChatGPT và Gemini', 'Lên ý tưởng, viết kịch bản.', 'Đóng vai nhóm sinh viên ngành sức khỏe; yêu cầu xây dựng khung kịch bản có thông điệp, đối tượng và góc nhìn rõ ràng.', 'Tiết kiệm khoảng 50% thời gian lên ý tưởng.'],
      ['Canva và CapCut', 'Thiết kế video và phụ đề.', 'Dùng Auto-caption, mẫu thiết kế công nghệ và tính năng cắt nền tự động.', 'Video chuyên nghiệp hơn, hình ảnh bắt mắt.']
    ]
  );
  const content = `<section class="report-section" id="bt4-tools"><h2>I. Lựa chọn và thiết lập công cụ</h2>
    <p><strong>Tên nhóm:</strong> 41 · <strong>Mã lớp:</strong> VNU1001_E252041</p>
    <ul><li><strong>Google Sheets:</strong> quản lý dự án, phân công và theo dõi tiến độ.</li><li><strong>Google Docs:</strong> viết và chỉnh sửa kịch bản trực tuyến.</li><li><strong>Zalo:</strong> trao đổi thông tin, hẹn lịch quay, chia sẻ ý tưởng và đường dẫn tài liệu.</li><li><strong>CapCut:</strong> cắt ghép video, chỉnh hình ảnh, thêm phụ đề và âm thanh.</li><li><strong>ChatGPT, Gemini:</strong> hỗ trợ xây dựng sườn kịch bản và đề xuất hướng triển khai.</li></ul>
    <div class="figure-grid">${figure('./assets/images/bt4/01.webp','Google Sheets dùng để phân công vai trò và theo dõi thời hạn.')}${figure('./assets/images/bt4/02.webp','Google Docs dùng để đồng biên tập kịch bản “AI – Vị bác sĩ số trong túi áo”.')}</div>
    <div class="figure-grid">${figure('./assets/images/bt4/03.webp','Nhóm Zalo là kênh cập nhật tài liệu, lịch quay và tiến độ.')}${figure('./assets/images/bt4/04.webp','Minh chứng một cảnh quay trong tiểu phẩm của nhóm.')}</div>
    <div class="figure-grid">${figure('./assets/images/bt4/05.webp','ChatGPT gợi ý cấu trúc nghiên cứu và dàn ý cho chủ đề AI trong y tế.')}${figure('./assets/images/bt4/06.webp','Gemini đề xuất các hướng đề tài phù hợp với yêu cầu học phần.')}</div>
  </section>
  <section class="report-section" id="bt4-task"><h2>II. Thực hiện dự án và quản lý tác vụ</h2><p class="table-caption">Bảng phân công nhiệm vụ cụ thể</p>${tasks}</section>
  <section class="report-section" id="bt4-log"><h2>III. Quy trình và nhật ký làm việc</h2>${meetings}</section>
  <section class="report-section" id="bt4-resource"><h2>IV. Quản lý tài nguyên và tệp</h2>
    <p>Nhóm xây dựng chiến lược quản lý thông tin qua Zalo và Google Docs với lộ trình cụ thể. Nội dung gồm mục đích cuộc họp, mục tiêu cần đạt, nội dung thuyết trình, dữ liệu tham khảo và số liệu liên quan.</p>
    <p>Tất cả thành viên được cấp quyền truy cập phù hợp; tài liệu được sắp xếp để bảo đảm thông tin rõ ràng, thống nhất và có thể kiểm tra lại.</p>
  </section>
  <section class="report-section" id="bt4-review"><h2>V. Báo cáo, đánh giá và bài học</h2>
    <p>Dự án được hoàn thành đúng tiến độ. Sản phẩm cuối gồm video tiểu phẩm và slide Canva có dẫn chứng, phân tích.</p>
    ${evalTable}
    <div class="figure-grid single">${figure('./assets/images/bt4/07.webp','Bảng đánh giá hiệu quả của các công cụ AI và công cụ thiết kế trong dự án.')}</div>
    <h3>Thử thách gặp phải</h3>
    <ul><li>Ban đầu còn bỡ ngỡ với công cụ mới nên mất thời gian tìm hiểu.</li><li>Do chưa thành thạo, có lúc thao tác nhầm làm mất tệp và phải thực hiện lại.</li><li>Thời gian đầu các thành viên chưa quen cập nhật thông tin qua Zalo nên phản hồi chưa kịp thời.</li></ul>
    <h3>Kết luận</h3>
    <p>Dự án được hoàn thành nhờ hệ thống công cụ nhanh, tiện lợi và sự phân công rõ ràng. Tôi nhận thấy việc tận dụng đúng công năng của từng nền tảng giúp quản lý tiến độ, bao quát nhiệm vụ và phối hợp nhóm hiệu quả hơn. Trong tương lai, tôi muốn tiếp tục thử nghiệm các công cụ mới để nâng cao năng suất.</p>
  </section>`;
  return assignmentShell(a, toc, content);
}

function assignment5() {
  const a = assignments[4];
  const toc = `<a href="#bt5-intro">Giới thiệu dự án</a><a href="#bt5-tools">Công cụ AI</a><a href="#bt5-process">Quy trình sáng tạo</a><a href="#bt5-compare">So sánh công cụ</a><a href="#bt5-role">Vai trò & đạo đức</a>`;
  const compare = table(
    ['Công cụ AI', 'Điểm mạnh', 'Hạn chế'],
    [
      ['Google Gemini', '<ul><li>Phản hồi nhanh.</li><li>Ý tưởng đa dạng, cấu trúc logic.</li><li>Viết kịch bản dạng bảng tốt.</li></ul>', '<ul><li>Văn phong đôi khi lý thuyết, máy móc.</li><li>Cần chỉnh sửa để tăng cảm xúc và sự thấu cảm.</li></ul>'],
      ['Canva AI', '<ul><li>Giao diện trực quan.</li><li>Thiết kế slide và infographic đẹp.</li><li>Kho mẫu học đường phong phú.</li></ul>', '<ul><li>Dễ rập khuôn nếu lạm dụng mẫu.</li><li>Ít cá nhân hóa nếu không tự tinh chỉnh.</li></ul>'],
      ['NotebookLM', '<ul><li>Tóm tắt và tổng hợp câu chuyện thô nhanh.</li><li>Tạo file âm thanh hội thoại tự nhiên.</li></ul>', '<ul><li>Ít lựa chọn giọng đọc.</li><li>Hiệu ứng âm thanh đi kèm còn hạn chế.</li></ul>']
    ]
  );
  const content = `<section class="report-section" id="bt5-intro"><h2>I. Giới thiệu Dự án Empathy</h2>
    <p>Ở giai đoạn cuối cấp, học sinh lớp 12 phải đối diện khối lượng kiến thức lớn, kỳ vọng của gia đình, cuộc đua vào đại học và áp lực so sánh với bạn bè. Những yếu tố này có thể dẫn đến khủng hoảng tâm lý, kiệt sức và mất phương hướng.</p>
    <p class="lead-note">Nhóm triển khai <strong>“DỰ ÁN EMPATHY – Góc khuất phía sau những điểm số: Lắng nghe và sẻ chia áp lực cùng sĩ tử lớp 12”</strong>.</p>
  </section>
  <section class="report-section" id="bt5-tools"><h2>II. Các công cụ AI sử dụng</h2>
    <ol><li><strong>Google Gemini:</strong> lên ý tưởng, phát triển đề cương, phân tích tâm lý và viết kịch bản phân cảnh.</li><li><strong>Canva AI / Gamma:</strong> thiết kế nhận diện, slide và infographic.</li><li><strong>NotebookLM:</strong> tổng hợp câu chuyện, chuyển tài liệu thành audio và tạo khung nội dung.</li><li><strong>CapCut AI:</strong> tự động tạo phụ đề, cắt ghép và lồng hiệu ứng âm thanh.</li></ol>
  </section>
  <section class="report-section" id="bt5-process"><h2>III. Quy trình sáng tạo nội dung</h2>
    <h3>Giai đoạn 1 · Lên ý tưởng và xây dựng đề cương</h3>
    <div class="prompt-card"><strong>Prompt trên Google Gemini</strong><p>“Hãy lên ý tưởng và nội dung chi tiết về chủ đề áp lực điểm số của học sinh lớp 12, phân tích từ thực tiễn đến giải pháp; gồm thực trạng, biểu hiện tâm lý, mặt lợi – hại của việc đặt nặng điểm số và ý tưởng sáng tạo để giúp học sinh giải tỏa.”</p></div>
    <p><strong>Kết quả:</strong> AI đưa ra danh sách ý tưởng rõ ràng, có cấu trúc và nhanh, nhưng một số nội dung còn chung chung.</p>
    <div class="figure-grid single">${figure('./assets/images/bt5/01.webp','Đầu ra Gemini về thực trạng áp lực điểm số của học sinh lớp 12.')}</div>
    <h3>Giai đoạn 2 · Xây dựng kịch bản video 5–7 phút</h3>
    <div class="prompt-card"><strong>Prompt trên Google Gemini</strong><p>“Hãy tạo kịch bản chi tiết cho video khoảng 5 phút với chủ đề ‘Phía sau điểm 10’, trình bày theo bảng gồm Timeline, Visual, Voiceover và SFX/BGM.”</p></div>
    <p><strong>Kết quả:</strong> AI tạo bảng kịch bản chi tiết, nhưng nhóm phải chỉnh sửa lời thoại để rõ ràng và gần với trải nghiệm thật hơn.</p>
    <div class="figure-grid single">${figure('./assets/images/bt5/02.webp','Kịch bản chi tiết “Phía sau điểm 10” được trình bày theo timeline.')}</div>
    <h3>Giai đoạn 3 · Thiết kế hình ảnh và slide</h3>
    <p>Nhóm dùng Canva AI để tạo trang bìa “Dự án Empathy – Áp lực điểm số lớp 12”, sau đó lựa chọn ảnh thật của thành viên đang thảo luận để tăng kết nối và thể hiện tinh thần thấu cảm. Typography mạnh mẽ nhưng giản dị giúp thông điệp học đường nổi bật.</p>
    <div class="figure-grid single">${figure('./assets/images/bt5/03.webp','Slide dự án Empathy trên Canva, sử dụng hình ảnh thực tế của thành viên nhóm.')}</div>
    <h3>Giai đoạn 4 · Sản xuất video hoàn chỉnh</h3>
    <p>NotebookLM hỗ trợ tổng hợp dữ liệu và tạo audio; CapCut AI được dùng để cắt ghép, thêm phụ đề tự động, hiệu ứng âm thanh và hoàn thiện nhịp kể.</p>
    <div class="figure-grid single">${figure('./assets/images/bt5/04.webp','Khung hình trong video truyền thông hoàn chỉnh của Dự án Empathy.')}</div>
  </section>
  <section class="report-section" id="bt5-compare"><h2>IV. So sánh các công cụ AI</h2>${compare}<p><strong>Kết luận:</strong> Không có công cụ nào hoàn hảo cho mọi công đoạn. Hiệu quả đến từ việc phối hợp linh hoạt và chọn đúng công cụ cho từng nhiệm vụ.</p></section>
  <section class="report-section" id="bt5-role"><h2>V. Vai trò của AI, đạo đức và bài học</h2>
    <h3>Những phần AI làm tốt</h3><ul><li>Giảm đến khoảng 70% thời gian xây dựng khung kịch bản và dàn ý.</li><li>Gợi ý nhiều góc nhìn tâm lý học đường khi nhóm bí ý tưởng.</li><li>Đơn giản hóa thiết kế đồ họa và tạo phụ đề tự động.</li></ul>
    <h3>Hạn chế cốt lõi</h3><ul><li>AI không có trải nghiệm thật của học sinh lớp 12 nên khó tự tạo chiều sâu cảm xúc.</li><li>Ý tưởng dễ trùng lặp nếu prompt đơn giản.</li><li>Lời khuyên tâm lý có thể chung chung và phải được kiểm chứng.</li></ul>
    <h3>AI thay đổi quy trình sáng tạo</h3><p><strong>Trước đây:</strong> nghĩ ý tưởng thủ công → viết nháp → tìm số liệu → chỉnh sửa → hoàn thiện.</p><p><strong>Hiện nay:</strong> AI gợi ý → con người chọn lọc và lồng cảm xúc thật → cá nhân hóa → hoàn thiện bằng Canva và CapCut.</p>
    <h3>Vấn đề đạo đức</h3><ul><li>Không sao chép 100% nội dung do AI tạo; mọi lời thoại đều được viết lại bằng trải nghiệm thực tế.</li><li>Kiểm chứng số liệu tâm lý và áp lực học đường bằng nguồn chính thống hoặc khảo sát.</li><li>Khai báo công cụ AI đã tham gia hỗ trợ để bảo đảm minh bạch.</li></ul>
    <h3>Bài học kinh nghiệm và kết luận</h3><p>AI tiết kiệm thời gian nhưng không thay thế tư duy, sự thấu cảm và trải nghiệm của con người. Dự án Empathy cho thấy khi tốc độ công nghệ được kết hợp với chiều sâu cảm xúc, sản phẩm có thể vừa thẩm mỹ, vừa tạo giá trị thực tiễn cho cộng đồng học sinh lớp 12.</p>
  </section>`;
  return assignmentShell(a, toc, content);
}

function assignment6() {
  const a = assignments[5];
  const toc = `<a href="#bt6-policy">Chính sách AI</a><a href="#bt6-task">Nhiệm vụ học tập</a><a href="#bt6-ethic">Phân tích đạo đức</a><a href="#bt6-rules">Bộ nguyên tắc</a><a href="#bt6-info">Infographic</a>`;
  const policy = table(
    ['Nội dung', 'Đại học UEB', 'Đại học Quốc gia Singapore (NUS)'],
    [
      ['Quan điểm chung', 'Cho phép và khuyến khích sử dụng AI có trách nhiệm; AI là công cụ hỗ trợ học tập.', 'Chủ động tích hợp AI vào giảng dạy; coi AI là đối tác hỗ trợ tư duy và sáng tạo.'],
      ['Minh bạch', 'Yêu cầu khai báo hoặc trích dẫn rõ khi sử dụng AI trong bài tập, bài luận.', 'Yêu cầu minh bạch công cụ, phạm vi hỗ trợ và prompt khi được yêu cầu.'],
      ['Liêm chính học thuật', 'Nghiêm cấm dùng AI để gian lận, sao chép hoặc nộp toàn bộ bài do AI làm.', 'Nộp nguyên sản phẩm của AI bị xem là vi phạm nghiêm trọng Academic Integrity.']
    ]
  );
  const content = `<section class="report-section" id="bt6-policy"><h2>I. Nghiên cứu chính sách sử dụng AI</h2>
    <p>Sự phát triển của ChatGPT, Gemini và Microsoft Copilot giúp sinh viên tìm kiếm thông tin, tổng hợp tài liệu, viết báo cáo và học ngoại ngữ nhanh hơn. Đồng thời, AI làm phát sinh rủi ro về sao chép, gian lận và phụ thuộc công nghệ.</p>
    <h3>Nguyên tắc tại UEB</h3><ul><li>AI được dùng để hỗ trợ tìm hiểu kiến thức, không thay thế tư duy.</li><li>Sinh viên chịu trách nhiệm về nội dung bài làm.</li><li>Không dùng AI để gian lận trong thi cử.</li><li>Trích nguồn đầy đủ và kiểm tra độ tin cậy của thông tin do AI cung cấp.</li></ul>
    <h3>So sánh UEB và NUS</h3>${policy}
    <p>Xu hướng chung không phải cấm AI mà hướng dẫn người học sử dụng minh bạch và đúng mục đích. Theo tôi, chính sách UEB phù hợp với bối cảnh hiện tại, nhưng có thể chi tiết hơn về cách trích dẫn AI và mức độ được phép sử dụng trong từng loại bài tập.</p>
  </section>
  <section class="report-section" id="bt6-task"><h2>II. Thực hiện nhiệm vụ học tập với AI</h2>
    <p class="lead-note"><strong>Nhiệm vụ:</strong> Viết báo cáo môn Kinh tế vĩ mô về chính sách tài khóa của Việt Nam giai đoạn 2020–2025.</p>
    <h3>Prompt 1 · Xây dựng dàn ý</h3><div class="prompt-card"><strong>Câu lệnh</strong><p>“Hãy xây dựng dàn ý cho báo cáo về chính sách tài khóa Việt Nam giai đoạn 2020–2025.”</p></div><p><strong>Đánh giá:</strong> AI tạo bố cục nhanh và tương đối đầy đủ; tôi điều chỉnh thứ tự mục để phù hợp yêu cầu giảng viên.</p>
    <div class="figure-grid single">${figure('./assets/images/bt6/01.webp','Đầu ra dàn ý báo cáo chính sách tài khóa Việt Nam giai đoạn 2020–2025.')}</div>
    <h3>Prompt 2 · Phân tích bằng mô hình AD–AS</h3><div class="prompt-card"><strong>Câu lệnh</strong><p>“Phân tích tác động của chính sách tài khóa bằng mô hình AD–AS.”</p></div><p><strong>Đánh giá:</strong> AI giải thích khá đầy đủ nhưng chưa cung cấp mô hình phù hợp, vì vậy tôi tự vẽ và bổ sung biểu đồ.</p>
    <div class="figure-grid single">${figure('./assets/images/bt6/02.webp','Phần mô hình AD–AS được bổ sung để minh họa phân tích chính sách tài khóa.')}</div>
    <h3>Prompt 3 · Trích dẫn APA 7</h3><div class="prompt-card"><strong>Câu lệnh</strong><p>“Hãy hỗ trợ định dạng tài liệu tham khảo theo APA 7.”</p></div><p><strong>Đánh giá:</strong> AI hỗ trợ định dạng tốt, nhưng tôi vẫn kiểm tra URL, tên tác giả và tên báo cáo trên website chính thức.</p>
    <div class="figure-grid single">${figure('./assets/images/bt6/03.webp','Hướng dẫn nguyên tắc trích dẫn trong bài theo APA 7.')}</div>
    <h3>Minh bạch việc sử dụng AI</h3><p>AI chỉ được dùng để gợi ý ý tưởng, tóm tắt tài liệu, kiểm tra ngữ pháp và hỗ trợ trình bày APA. Các nhận định, phân tích và kết luận cuối cùng đều do tôi chỉnh sửa và chịu trách nhiệm.</p>
  </section>
  <section class="report-section" id="bt6-ethic"><h2>III. Phân tích các vấn đề đạo đức</h2>
    <h3>Ranh giới giữa hỗ trợ và gian lận</h3><p>AI có thể giúp người học hiểu nhanh hơn, nhưng không được thay thế toàn bộ quá trình tư duy. Sao chép nguyên văn nội dung AI để nộp là gian lận; dùng AI để gợi ý, giải thích hoặc chỉnh sửa, kèm kiểm chứng, là hỗ trợ hợp lý.</p>
    <h3>Quyền sở hữu trí tuệ</h3><ul><li>Không nhận nội dung AI là sản phẩm hoàn toàn của mình.</li><li>Kiểm tra nguồn thông tin và bản quyền.</li><li>Trích dẫn AI khi quy định yêu cầu.</li></ul>
    <h3>Tác động đến quá trình học tập</h3>${table(['Tác động tích cực','Tác động tiêu cực'],[['Tiết kiệm thời gian; học cá nhân hóa; hỗ trợ ngoại ngữ; gợi ý ý tưởng mới.','Phụ thuộc AI; giảm tư duy; dễ sao chép; tin tưởng thông tin sai.']])}
    <p>AI chỉ phát huy hiệu quả khi người học chủ động phân tích, kiểm chứng và dùng nó như trợ lý thay vì để công cụ làm thay.</p>
  </section>
  <section class="report-section" id="bt6-rules"><h2>IV. Bộ nguyên tắc sử dụng AI có trách nhiệm</h2>
    <ol><li>Chỉ dùng AI để hỗ trợ học tập, không dùng để gian lận.</li><li>Luôn kiểm chứng thông tin bằng nguồn chính thống.</li><li>Không sao chép nguyên văn nội dung AI.</li><li>Minh bạch khi sử dụng AI trong bài tập học thuật.</li><li>Tôn trọng bản quyền và quyền sở hữu trí tuệ.</li><li>Bảo vệ dữ liệu cá nhân khi tương tác với AI.</li><li>Luôn phát triển tư duy phản biện và coi AI là công cụ hỗ trợ.</li></ol>
  </section>
  <section class="report-section" id="bt6-info"><h2>V. Infographic và kết luận</h2>
    <div class="prompt-card"><strong>Prompt thiết kế</strong><p>“Thiết kế một trang với tiêu đề ‘Sử dụng AI có trách nhiệm trong học thuật’, tông màu tươi sáng, bắt mắt, minh họa dễ thương; nội dung gồm AI hỗ trợ học tập, kiểm chứng thông tin, không sao chép, trích dẫn AI, tôn trọng bản quyền, bảo vệ dữ liệu cá nhân và luôn tư duy độc lập.”</p></div>
    <div class="figure-grid single">${figure('./assets/images/bt6/04.webp','Infographic “Sử dụng AI có trách nhiệm trong học thuật”.')}</div>
    <p>AI đang trở thành công cụ quan trọng trong giáo dục đại học, nhưng không thể thay thế tư duy, sáng tạo và trách nhiệm của người học. Sử dụng AI có trách nhiệm góp phần xây dựng môi trường học thuật trung thực, minh bạch và chuyên nghiệp.</p>
    <h3>Tài liệu tham khảo</h3><ol class="reference-list"><li>Google (2025). Gemini – công cụ AI tạo sinh.</li><li>UNESCO (2023). <em>Guidance for Generative AI in Education and Research</em>.</li><li>NUS (2024). <em>Technology Leadership and Innovation Programme</em>. Có tại: https://nus.comp.emeritus.org/technology-leadership-and-innovation-programme.</li></ol>
  </section>`;
  return assignmentShell(a, toc, content);
}

function summaryPage() {
  return `<div class="page">
    <section class="page-hero">
      <div class="page-width page-hero-grid">
        <div>
          <div class="breadcrumbs"><a href="#/">Trang chủ</a><span>/</span><span>Tổng kết</span></div>
          <p class="eyebrow">Nhìn lại hành trình</p>
          <h1>Từ những thao tác đầu tiên đến tư duy sử dụng AI có trách nhiệm.</h1>
          <p>Sáu bài tập không còn là những nhiệm vụ rời rạc, mà trở thành bản ghi về sự trưởng thành của tôi trong kỷ nguyên số.</p>
        </div>
        <div class="page-number" aria-hidden="true">✓</div>
      </div>
    </section>
    <section class="section">
      <div class="page-width">
        <div class="summary-grid">
          <article class="summary-card"><span class="num">01</span><h3>Trải nghiệm và cảm nhận</h3><p>Nhìn lại từ Bài 1 đến Bài 6, tôi nhận ra Portfolio không chỉ là bài tập tổng hợp mà là cuốn nhật ký về quá trình trưởng thành. Từ những thao tác kỹ thuật đơn giản, tôi dần tự tin kết nối nhiều công cụ để giải quyết một dự án có ý nghĩa.</p></article>
          <article class="summary-card"><span class="num">02</span><h3>Kiến thức và kỹ năng</h3><p>Tôi học được cách biến AI từ công cụ trả lời thành cộng sự thông qua prompt nâng cao, đồng thời xây dựng bộ lọc tư duy khi đánh giá nguồn học thuật. Kỹ năng quản lý công việc và hợp tác trực tuyến cũng được cải thiện rõ rệt.</p></article>
          <article class="summary-card"><span class="num">03</span><h3>Điểm tâm đắc và thách thức</h3><p>Điều tâm đắc nhất là sự giao thoa giữa công nghệ và cảm xúc con người trong Dự án Empathy. Thách thức lớn nhất là chống lại sự “lười biếng tư duy”, luôn kiểm chứng và viết lại đầu ra AI bằng giọng nói của chính mình.</p></article>
        </div>
      </div>
    </section>
    <section class="section-tight">
      <div class="page-width intro-panel">
        <aside class="quote-card"><div class="quote-mark">“</div><blockquote>Công nghệ dù hiện đại đến đâu cũng chỉ là bệ đỡ; con người mới là người cầm lái và tạo ra giá trị cốt lõi.</blockquote></aside>
        <article class="prose">
          <h2>Những điều tôi mang theo sau học phần</h2>
          <p>Kiến thức quý giá nhất là tư duy đồng hành cùng công nghệ một cách thông minh và có trách nhiệm. Tôi không còn xem AI là một chiếc “máy trả lời”, mà là công cụ cần được định hướng bằng mục tiêu, bối cảnh, ràng buộc và phản biện.</p>
          <p>Về kỹ năng mềm, tôi hiểu một dự án nhóm thành công không chỉ dựa vào nỗ lực cá nhân. Sự đồng bộ của kho lưu trữ, kênh giao tiếp và quy trình phân vai mới tạo nên tiến độ minh bạch. Quan trọng nhất, tôi hình thành nguyên tắc liêm chính học thuật: dùng AI làm bệ phóng nhưng luôn tôn trọng sự thật, bản quyền, bảo mật và dấu ấn cá nhân.</p>
          <div class="skills-cloud"><span class="skill-pill">Quản lý tệp và dữ liệu</span><span class="skill-pill">Tìm kiếm học thuật</span><span class="skill-pill">Đánh giá nguồn</span><span class="skill-pill">Prompt Engineering</span><span class="skill-pill">Hợp tác trực tuyến</span><span class="skill-pill">Sáng tạo với AI</span><span class="skill-pill">Liêm chính học thuật</span><span class="skill-pill">Tư duy phản biện</span></div>
          <p style="margin-top:30px"><a class="button button-primary" href="#/du-an">Xem lại toàn bộ bài tập ${icons.arrow}</a></p>
        </article>
      </div>
    </section>
  </div>`;
}

function notFound() {
  return `<div class="page not-found"><div><p class="eyebrow">Không tìm thấy trang</p><h1>404</h1><p>Đường dẫn này chưa tồn tại trong Portfolio.</p><a class="button button-primary" href="#/">Về trang chủ</a></div></div>`;
}

function getRoute() {
  const hash = location.hash.replace(/^#/, '') || '/';
  const clean = hash.split('?')[0].replace(/\/$/, '') || '/';
  return clean;
}

function render() {
  const route = getRoute();
  let html;
  let title = 'Nguyễn Thị Quỳnh Thương | Digital Portfolio';
  if (route === '/') html = homePage();
  else if (route === '/gioi-thieu') { html = aboutPage(); title = 'Giới thiệu | Quỳnh Thương Portfolio'; }
  else if (route === '/du-an') { html = projectsPage(); title = 'Bài tập | Quỳnh Thương Portfolio'; }
  else if (route === '/tong-ket') { html = summaryPage(); title = 'Tổng kết | Quỳnh Thương Portfolio'; }
  else if (/^\/bai-tap\/\d+$/.test(route)) {
    const id = Number(route.split('/').pop());
    const renderers = {1: assignment1, 2: assignment2, 3: assignment3, 4: assignment4, 5: assignment5, 6: assignment6};
    if (renderers[id]) { html = renderers[id](); title = `Bài tập ${id} | Quỳnh Thương Portfolio`; }
    else html = notFound();
  } else html = notFound();

  main.innerHTML = html;
  document.title = title;
  window.scrollTo({top: 0, behavior: 'auto'});
  updateNav(route);
  bindZoom();
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}

function updateNav(route) {
  document.querySelectorAll('[data-nav]').forEach(link => link.classList.remove('active'));
  let key = 'home';
  if (route === '/gioi-thieu') key = 'about';
  else if (route === '/du-an' || route.startsWith('/bai-tap/')) key = 'projects';
  else if (route === '/tong-ket') key = 'summary';
  const active = document.querySelector(`[data-nav="${key}"]`);
  if (active) active.classList.add('active');
}

function bindZoom() {
  document.querySelectorAll('.image-zoom').forEach(button => {
    button.addEventListener('click', () => openLightbox(button.dataset.src, button.dataset.caption));
  });
}

const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('p');
function openLightbox(src, caption) {
  lightboxImage.src = src;
  lightboxImage.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  lightbox.querySelector('.lightbox-close').focus();
}
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lightboxImage.src = '';
}
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox(); });

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
window.addEventListener('scroll', () => document.querySelector('#site-header').classList.toggle('scrolled', window.scrollY > 10), {passive:true});
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);

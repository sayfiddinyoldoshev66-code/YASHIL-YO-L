const pptxgen = require("pptxgenjs");

const P = pptxgen;

const C = {
  paper: "FAF7F1",
  card: "FFFFFF",
  ink: "15171C",
  soft: "3A3D45",
  muted: "6E6C67",
  violet: "4636F0",
  violetInk: "2C22A8",
  coral: "FF6B3D",
  mint: "0FA98F",
  line: "E2DCD0",
};

const T = "Georgia";
const S = "Segoe UI";
const M = "Consolas";

const pptx = new P();
pptx.defineLayout({ name: "W16x9", width: 13.333, height: 7.5 });
pptx.layout = "W16x9";
pptx.author = "Xumoyun Sayfutdinov";
pptx.title = "YashilYo'l — bitiruv himoyasi";

function base(title, kicker) {
  const s = pptx.addSlide();
  s.background = { color: C.paper };

  // chapdagi aksent chiziq
  s.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 0.16, h: 7.5,
    fill: { color: C.violet },
    line: { color: C.violet },
  });

  if (kicker) {
    s.addText(kicker.toUpperCase(), {
      x: 0.85, y: 0.55, w: 8, h: 0.35,
      fontFace: M, fontSize: 11, color: C.violet, charSpacing: 2,
    });
  }

  s.addText(title, {
    x: 0.85, y: 0.95, w: 11.6, h: 1.25,
    fontFace: T, fontSize: 34, bold: true, color: C.ink, lineSpacingMultiple: 0.95,
  });

  // pastki kolontitul
  s.addText("YashilYo'l · PDP Academy 2026", {
    x: 0.85, y: 6.95, w: 6, h: 0.3,
    fontFace: M, fontSize: 9, color: "A6A29A", charSpacing: 1,
  });

  return s;
}

function card(s, o) {
  s.addShape(pptx.ShapeType.roundRect, {
    x: o.x, y: o.y, w: o.w, h: o.h,
    fill: { color: C.card },
    line: { color: C.line, width: 1 },
    rectRadius: 0.06,
  });

  let cursor = o.y + 0.22;

  if (o.num) {
    s.addText(o.num, {
      x: o.x + 0.24, y: cursor, w: o.w - 0.48, h: 0.28,
      fontFace: M, fontSize: 10, color: C.violet, charSpacing: 1.4,
    });
    cursor += 0.3;
  }

  s.addText(o.head, {
    x: o.x + 0.24, y: cursor, w: o.w - 0.48, h: 0.42,
    fontFace: S, fontSize: o.headSize || 14, bold: true, color: C.ink,
  });
  cursor += o.headSize ? 0.5 : 0.44;

  s.addText(o.body, {
    x: o.x + 0.24, y: cursor, w: o.w - 0.48, h: o.h - (cursor - o.y) - 0.18,
    fontFace: S, fontSize: o.bodySize || 11, color: C.muted, lineSpacingMultiple: 1.15,
    valign: "top",
  });
}

/* ============ 1. SARLAVHA ============ */
(() => {
  const s = pptx.addSlide();
  s.background = { color: C.paper };

  s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.16, h: 7.5, fill: { color: C.violet }, line: { color: C.violet } });

  s.addText("PDP ACADEMY  ·  BITIRUV HIMOYASI  ·  2026", {
    x: 0.85, y: 1.35, w: 11, h: 0.35,
    fontFace: M, fontSize: 11, color: C.muted, charSpacing: 2,
  });

  s.addText("YashilYo'l", {
    x: 0.85, y: 1.85, w: 11.5, h: 1.6,
    fontFace: T, fontSize: 66, bold: true, color: C.ink,
  });

  s.addText("Bekatdan eshikgacha 7 daqiqa — QR orqali mikrotransport ijarasi tarmog'i.", {
    x: 0.85, y: 3.5, w: 10.5, h: 0.8,
    fontFace: S, fontSize: 18, color: C.soft,
  });

  s.addShape(pptx.ShapeType.line, {
    x: 0.85, y: 4.65, w: 11.4, h: 0,
    line: { color: C.line, width: 1 },
  });

  const meta = [
    ["Muallif", "Xumoyun Sayfutdinov"],
    ["Yo'nalish", "Frontend dasturlash"],
    ["Texnologiya", "HTML · CSS · JavaScript"],
    ["Sana", "2026"],
  ];

  meta.forEach((m, i) => {
    s.addText(m[0], {
      x: 0.85 + i * 2.95, y: 4.95, w: 2.8, h: 0.3,
      fontFace: M, fontSize: 9, color: C.muted, charSpacing: 1.2,
    });
    s.addText(m[1], {
      x: 0.85 + i * 2.95, y: 5.25, w: 2.85, h: 0.4,
      fontFace: S, fontSize: 13, bold: true, color: C.ink,
    });
  });

  s.addNotes(
    "Assalomu alaykum, hurmatli komissiya a'zolari. Men — Xumoyun Sayfutdinov, PDP Academy'ning " +
    "frontend dasturlash yo'nalishi bitiruvchisiman. Bugun sizga YashilYo'l loyihasini taqdim etaman."
  );
})();

/* ============ 2. MUAMMO ============ */
(() => {
  const s = base("Jamoat transporti sizni eshikgacha olib bormaydi", "01 — Muammo");
  const y = 2.55, h = 3.1, w = 3.5;

  card(s, {
    x: 0.85, y, w, h, num: "A", head: "Oxirgi kilometr",
    body: "Metro yoki avtobusdan tushgandan keyin manzilgacha 1–2 km piyoda qoladi. Bu har kuni takrorlanadi.",
  });
  card(s, {
    x: 4.65, y, w, h, num: "B", head: "Taxi qisqa masofaga qimmat",
    body: "2–3 km uchun ham minimal tarif to'lanadi. Kuniga ikki marta bo'lsa — oyiga sezilarli xarajat.",
  });
  card(s, {
    x: 8.45, y, w, h, num: "C", head: "Vaqt qaytmaydi",
    body: "Piyoda 30 daqiqa, skuterda 7 daqiqa. Farq — kuniga bir soatdan ko'proq vaqt.",
  });

  s.addText("Muammo transportning o'zida emas — transport va manzil orasidagi masofada.", {
    x: 0.85, y: 5.95, w: 11.5, h: 0.6,
    fontFace: S, fontSize: 15, bold: true, color: C.violetInk,
  });

  s.addNotes(
    "Muammoning uch tomoni: oxirgi kilometr, narx va vaqt. Metro chiqishidan uyimgacha 1–2 km " +
    "piyoda 25–30 daqiqa ketadi, skuterda esa 7 daqiqa."
  );
})();

/* ============ 3. YECHIM ============ */
(() => {
  const s = base("To'rt qadam, bitta ilova", "02 — Yechim");
  const y = 2.5, h = 3.2, w = 2.85, gap = 0.32;

  const steps = [
    ["01", "Topish", "Eng yaqin stansiya va bo'sh transportlar soni xaritada ko'rinadi."],
    ["02", "Ochish", "QR kodni skanerlash — qulf ochiladi, hisob avtomatik boshlanadi."],
    ["03", "Yurish", "Belgilangan tezlikda, GPS nazorati ostida manzilgacha borish."],
    ["04", "Qaytarish", "Istalgan stansiyaga qo'yish — hisob avtomatik yopiladi."],
  ];

  steps.forEach((st, i) => {
    card(s, { x: 0.85 + i * (w + gap), y, w, h, num: st[0], head: st[1], body: st[2], headSize: 15 });
  });

  s.addText("Ro'yxatdan o'tishdan birinchi safargacha — jami 7 daqiqa.", {
    x: 0.85, y: 6.05, w: 11, h: 0.5,
    fontFace: S, fontSize: 15, bold: true, color: C.violetInk,
  });

  s.addNotes("Foydalanuvchi uchun to'rt qadam: topish, ochish, yurish, qaytarish. Hammasi 7 daqiqa ichida.");
})();

/* ============ 4. DEMO ============ */
(() => {
  const s = base("Loyiha qanday ishlaydi", "03 — Live demo");
  const y = 2.5, h = 3.15, w = 3.6;

  card(s, {
    x: 0.85, y, w, h, head: "Interaktiv stansiya xaritasi",
    body: "Kursor stansiya ustiga kelganda bo'sh transportlar soni ko'rsatiladi. To'r JavaScript bilan dinamik quriladi.",
  });
  card(s, {
    x: 4.7, y, w, h, head: "Narx kalkulyatori",
    body: "Masofa slayderini surish — vaqt, narx va taksiga nisbatan tejamkorlik jonli hisoblanadi.",
  });
  card(s, {
    x: 8.55, y, w, h, head: "Moliyaviy model grafigi",
    body: "12 oylik daromad va xarajat dinamikasi — grafik kutubxonasisiz, faqat CSS ustunlari bilan.",
  });

  s.addText("Demo: slayderni suring → xarita ustida yuring → grafikni ko'rsating", {
    x: 0.85, y: 5.95, w: 11.5, h: 0.5,
    fontFace: M, fontSize: 12, color: C.muted, charSpacing: 0.5,
  });

  s.addNotes(
    "Ekranda yashil-yol.html ochiq. Xarita ustiga kursor olib kelaman, keyin slayderni 3 km ga " +
    "suraman, oxirida moliya grafigini ko'rsataman."
  );
})();

/* ============ 5. IQTISOD ============ */
(() => {
  const s = base("Qancha yursangiz, shunga qarab", "04 — Iqtisod");

  const rows = [
    [
      { text: "Variant", options: { bold: true, color: C.muted, fontSize: 10, fontFace: M } },
      { text: "Narx", options: { bold: true, color: C.muted, fontSize: 10, fontFace: M } },
      { text: "Vaqt", options: { bold: true, color: C.muted, fontSize: 10, fontFace: M } },
      { text: "Izoh", options: { bold: true, color: C.muted, fontSize: 10, fontFace: M } },
    ],
    [
      { text: "YashilYo'l", options: { bold: true, color: C.ink } },
      { text: "1 500 so'm + 250 so'm/daqiqa", options: { bold: true, color: C.ink } },
      { text: "~7 daqiqa", options: { bold: true, color: C.mint } },
      { text: "Eng tez va arzon", options: { color: C.muted } },
    ],
    [
      { text: "Taxi", options: { color: C.ink } },
      { text: "8 000 so'm + 5 000 so'm/km (min. 12 000)", options: { color: C.ink } },
      { text: "~10 daqiqa", options: { color: C.muted } },
      { text: "Kutish bilan uzunroq", options: { color: C.muted } },
    ],
    [
      { text: "Piyoda", options: { color: C.ink } },
      { text: "0 so'm", options: { color: C.ink } },
      { text: "~30 daqiqa", options: { color: C.muted } },
      { text: "Bepul, lekin vaqt qaytmaydi", options: { color: C.muted } },
    ],
  ];

  s.addTable(rows, {
    x: 0.85, y: 2.55, w: 11.6,
    colW: [2.2, 4.3, 1.7, 3.4],
    fontFace: S, fontSize: 12,
    border: { type: "solid", color: C.line, pt: 1 },
    fill: { color: C.card },
    rowH: 0.62,
    valign: "middle",
    margin: 0.12,
  });

  s.addText("3 km masofada: YashilYo'l ~5 000 so'm, taxi ~25 000 so'm — 5 barobar farq.", {
    x: 0.85, y: 5.6, w: 11.5, h: 0.5,
    fontFace: S, fontSize: 15, bold: true, color: C.violetInk,
  });

  s.addNotes("Tarif masofaga bog'liq. 3 km safar taxminan 5 000 so'm, taxi bilan 25 000 so'm atrofida.");
})();

/* ============ 6. MOLIYA ============ */
(() => {
  const s = base("Pul qayerdan keladi, xarajat nima", "05 — Moliyaviy model");
  const y = 2.6, h = 2.2, w = 3.6;

  const stats = [
    ["41 mln", "12-oydagi oylik daromad (so'm)"],
    ["9 mln", "12-oydagi oylik xarajat (so'm)"],
    ["4-oy", "Oylik foyda ijobiy bo'ladigan davr"],
  ];

  stats.forEach((st, i) => {
    const x = 0.85 + i * (w + 0.35);
    s.addShape(pptx.ShapeType.roundRect, {
      x, y, w, h, fill: { color: C.card }, line: { color: C.line, width: 1 }, rectRadius: 0.06,
    });
    s.addText(st[0], {
      x: x + 0.28, y: y + 0.5, w: w - 0.56, h: 0.85,
      fontFace: T, fontSize: 40, bold: true, color: C.violetInk,
    });
    s.addText(st[1], {
      x: x + 0.28, y: y + 1.35, w: w - 0.56, h: 0.6,
      fontFace: S, fontSize: 11, color: C.muted,
    });
  });

  s.addText(
    [
      { text: "Daromad: ", options: { bold: true, color: C.ink } },
      { text: "safar to'lovlari va oylik obuna.\n", options: { color: C.soft } },
      { text: "Xarajat: ", options: { bold: true, color: C.ink } },
      { text: "texnik xizmat, quvvatlash, sug'urta va stansiya ijarsi.", options: { color: C.soft } },
    ],
    { x: 0.85, y: 5.15, w: 11.4, h: 1.1, fontFace: S, fontSize: 14, lineSpacingMultiple: 1.3 }
  );

  s.addNotes("Model saytda jonli grafik sifatida ko'rsatilgan. 4-oydan oylik foyda ijobiy bo'ladi.");
})();

/* ============ 7. XAVFSIZLIK ============ */
(() => {
  const s = base("Har bir safar nazorat ostida", "06 — Xavfsizlik");
  const y = 2.6, h = 3.0, w = 2.85, gap = 0.32;
  const items = [
    ["Tezlik cheklovi", "Shahar ichida 15–20 km/soat bilan cheklangan."],
    ["GPS kuzatuv", "Transport yo'qolsa yoki noto'g'ri joyga qo'yilsa, tizim darhol ko'rsatadi."],
    ["Kunlik texnik xizmat", "Har bir transport har kuni tekshiriladi, batareya zaxirasi nazoratda."],
    ["Sug'urta qamrovi", "Safar davomida foydalanuvchi sug'urta bilan qoplanadi."],
  ];

  items.forEach((it, i) => {
    card(s, { x: 0.85 + i * (w + gap), y, w, h, head: it[0], body: it[1], headSize: 14 });
  });

  s.addNotes("Xavfsizlik to'rt qatlamda: tezlik, GPS, texnik xizmat va sug'urta.");
})();

/* ============ 8. TEXNIK ============ */
(() => {
  const s = base("Arxitektura va texnologiyalar", "07 — Texnik jihatlar");
  const w = 5.7, h = 1.85;

  card(s, {
    x: 0.85, y: 2.3, w, h, head: "Nega tashqi kutubxonasiz?",
    body: "Loyiha bitta HTML fayl — internet bo'lmasa ham ishlaydi, yuklanish tez, hajmi kichik.",
  });
  card(s, {
    x: 6.8, y: 2.3, w, h, head: "JavaScript qayerda ishlatilgan?",
    body: "Xaritani dinamik qurish, narx hisoblash (Intl.NumberFormat), scroll-reveal (IntersectionObserver), mobil menyu.",
  });
  card(s, {
    x: 0.85, y: 4.35, w, h, head: "CSS yondashuvi",
    body: "Flexbox va Grid, custom properties bilan yagona dizayn tizimi, media queries bilan to'liq responsive.",
  });
  card(s, {
    x: 6.8, y: 4.35, w, h, head: "Mavjudlik (accessibility)",
    body: "Semantik HTML, aria-expanded bilan boshqariladigan menyu, kontrastli ranglar.",
  });

  s.addNotes(
    "Arxitektura uch qatlam: semantik HTML, CSS dizayn tizimi va IIFE ichidagi JavaScript. " +
    "Har bir funksiya mas'uliyat bo'yicha ajratilgan."
  );
})();

/* ============ 9. REJA ============ */
(() => {
  const s = base("Uch tuman pilotidan butun shaharga", "08 — Reja");
  const y = 2.6, h = 3.15, w = 3.6;

  card(s, {
    x: 0.85, y, w, h, num: "1-BOSQICH", head: "Pilot",
    body: "3 tuman, 48 stansiya, 1 240 transport. Talabalar va ofis xodimlari bilan sinov.",
  });
  card(s, {
    x: 4.7, y, w, h, num: "2-BOSQICH", head: "Kengaytirish",
    body: "Metro bekatlari va universitetlar atrofida tarmoqni ko'paytirish, ilovani chiqarish.",
  });
  card(s, {
    x: 8.55, y, w, h, num: "3-BOSQICH", head: "Shahar miqyosi",
    body: "Barcha tumanlar, hamkorlikdagi tariflar, biznes uchun korporativ paketlar.",
  });

  s.addNotes("Yo'l xaritasi: pilot, kengaytirish, shahar miqyosi.");
})();

/* ============ 10. XULOSA ============ */
(() => {
  const s = base("Nega bu loyiha qimmatli?", "09 — Xulosa");
  const y = 2.5, h = 2.1, w = 3.6;

  const stats = [
    ["7 daq", "Bekatdan eshigacha"],
    ["5x", "Taksidan arzon"],
    ["1 fayl", "Kutubxonasiz, tez ishlaydigan sayt"],
  ];

  stats.forEach((st, i) => {
    const x = 0.85 + i * (w + 0.35);
    s.addShape(pptx.ShapeType.roundRect, {
      x, y, w, h, fill: { color: C.card }, line: { color: C.line, width: 1 }, rectRadius: 0.06,
    });
    s.addText(st[0], {
      x: x + 0.28, y: y + 0.45, w: w - 0.56, h: 0.8,
      fontFace: T, fontSize: 36, bold: true, color: C.violetInk,
    });
    s.addText(st[1], {
      x: x + 0.28, y: y + 1.3, w: w - 0.56, h: 0.6,
      fontFace: S, fontSize: 11, color: C.muted,
    });
  });

  s.addText("Rahmat! Savollaringizni javob berishga tayyorman.", {
    x: 0.85, y: 5.05, w: 11.5, h: 0.6,
    fontFace: S, fontSize: 20, bold: true, color: C.ink,
  });

  s.addText("Loyiha kodi: github.com/sayfiddinyoldoshev66-code/YASHIL-YO-L", {
    x: 0.85, y: 5.7, w: 11.5, h: 0.4,
    fontFace: M, fontSize: 11, color: C.muted,
  });

  s.addNotes("Xulosa va minnatdorchilik. Savollarga tayyorman.");
})();

pptx.writeFile({ fileName: "../YashilYol-himoya.pptx" }).then((f) => {
  console.log("OK:", f);
});

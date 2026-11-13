# YashilYo'l — QR orqali mikrotransport ijarasi

Toshkent bo'ylab stansiyalardan QR orqali elektroskuter va velosiped ijaraga olish
tarmog'i uchun bir sahifali mahsulot sayti. PDP Academy bitiruv loyihasi.

## Fayllar

| Fayl | Tavsif |
| --- | --- |
| `yashil-yol.html` | Asosiy loyiha — 11 bo'limli bir sahifali sayt |
| `index.html` | Nexus Studio — raqamli studiya uchun landing sahifa |
| `cv.html` | Bitiruv uchun CV (A4, chop etishga tayyor) |
| `slaydlar.html` | Himoya uchun 10 slaydli taqdimot (`←` `→` bilan o'tish, `P` — chop etish) |
| `himoya-tayyorgarlik.md` | 10 daqiqalik nutq matni, demo ketma-ketligi, savol-javob tayyorgarligi |

## Sahifa tuzilmasi

`muammo` → `yechim` → `tarmoq` → `ilova` → `tariflar` → `hisob` → `moliya` →
`xavfsizlik` → `reja` → `savollar` → `pilot` (chaqiruv bloki)

## Texnik jihatlar

- Semantik HTML5, CSS3 (Flexbox, Grid, custom properties), tashqi kutubxonasiz vanilla JavaScript
- Interaktiv stansiya xaritasi: dot-matrix to'ri JS bilan dinamik quriladi
- Narx kalkulyatori: masofa slayderi, sayohat vaqti va taksiga nisbatan tejamkorlik
- Moliyaviy model grafigi: 12 oylik daromad/xarajat, faqat CSS ustunlari
- `IntersectionObserver` bilan scroll-reveal, sahifa progress indikatori, yopishib turuvchi sarlavha
- Mobil menyu `aria-expanded` bilan boshqariladi, sahifa to'liq moslashuvchan (responsive)

## Ishga tushirish

Hech qanday o'rnatish yoki server kerak emas — faylni brauzerda ochish kifoya:

```
yashil-yol.html
```

Lokal server bilan ochish uchun (ixtiyoriy):

```
python -m http.server 8000
```

Keyin brauzerda `http://localhost:8000/yashil-yol.html`.

## CV

`cv.html` — ATS-friendly, bir ustunli format. PDF olish uchun brauzerda ochib
`Ctrl + P` → "Save as PDF" (A4, standart chetlash).

# تقرير التسليم الشامل — تطبيق وازن (Wazen Handoff Report)

**تاريخ الحزمة / Package Date:** `2026-11-13`  
**الفرع المرجعي على GitHub / Git Branch:** `feat/website` (آخر كوميت: `56bc8a66`, محدث بالكامل على `origin/feat/website`؛ يسبق `origin/main` بـ 63 كوميت قابلة للدمج السريع بدون تعارضات).  
**الإصدارات الجاهزة / Release Versions:**
- **iOS (App Store):** `v2.0.2` (`Build 64`) — `com.wazen.health.ai` (App Store ID: `6760981534`)
- **Android (Google Play):** `v7.9` (`versionCode = 70`) — `com.wazen.health.wazen_app`

---

## 1. ملخص ما تم إنجازه (Executive Summary — العربية)

### أ. المزايا الجديدة والتحديثات على التطبيقين (iOS & Android)
استناداً إلى سجل التطوير الكامل في `05-CHANGELOG-GIT-LOG.txt` (`84432e92 .. 56bc8a66`):
1. **متابعة سكر الدم والسكري (CGM Blood Sugar & Meal Impact):**
   - إعادة تصميم بطاقة متابعة سكر الدم اليوم في شاشة التقدم (تبويب الوزن) وربط المستشعرات والقياس اليدوي مع تحليل أثر كل وجبة على مستوى السكر.
   - إضافة وضع الصيام الآمن ووضع المرافق / الطوارئ لمرضى السكري ووضع رمضان.
2. **الفيتامينات والمكملات اليومية والمجتمع والتحكم بالميزانية:**
   - تتبع الفيتامينات والمكملات اليومية مع تذكيرات وتقارير مفصلة.
   - شاشة التحكم بميزانية الأكل والمشتريات (`FoodBudget`)، ومجتمع وازن التفاعلي (`Wazen Community`).
3. **تجربة الشاشة الرئيسية والوجبات والمسح الذكي:**
   - شريط تسجيل سريع في الرئيسية (الماء، الصيام، التمرين، الوزن) بدون تداخل عناصر على الشاشات الضيقة.
   - تحسين شاشة إضافة الوجبة، ومسح الباركود (`GTIN`) وعرض مكونات المنتجات المعبأة، وترقيم دبابيس تعديل المكونات (`Pin Quick-Edit`)، وتقليل هلوسة الزيوت/المكملات.
4. **مكتبة التمارين والمدرب الذكي واللغة العربية:**
   - تعليمات تمارين عربية كاملة مع تشغيل فيديو التمرين داخل التطبيق.
   - توحيد واجهة التطبيقين والمدرب الذكي إلى العربية الفصحى السليمة مع تحديث الاقتراحات السريعة وصوت المدرب الذكي.
5. **الموقع الإلكتروني والسيو (`wazenai.com`):**
   - تحديث الموقع متعدد اللغات (`AR`, `EN`, `FR`) مع ربط الروابط الرسمية للمتجرين، `llms.txt`، `Schema.org JSON-LD`، `hreflang`، `AASA` / `AssetLinks`، وتوحيد العربية الفصحى.

### ب. حزم البناء والأصول الرسومية الجاهزة في هذا المجلد
- **`01-iOS-2.0.2-Build-64/`:**
  - `Wazen-v2.0.2-b64.ipa` (`69 MB`) — الحزمة الموقّعة لإصدار iOS `2.0.2 (Build 64)`.
  - `APPSTORE.md` + `store-metadata-ios/` — جميع نصوص ومعلومات App Store Connect.
  - *ملاحظة الرفع:* الأرشيف `Wazen_2.0.2_64.xcarchive` مبني ومجهز على Mac ويجب إكمال خطوة الرفع من Xcode Organizer (`Distribute App → App Store Connect → Upload`) أو باستخدام مفتاح API لـ App Store Connect.
- **`02-Android-v7.9-Build-70/`:**
  - `wazen-release.aab` (`35 MB`) — الحزمة الموقّعة الرسمية للرفع على Google Play Console (`versionName 7.9`, `versionCode 70`).
  - `wazen-release.apk` (`41 MB`) — نسخة التثبيت المباشر للاختبار.
  - `PLAYSTORE.md` + `store-metadata-play/` — بيانات ووصف المتجر.
- **`03-Google-Play-Store-Assets/` (`126` ملف PNG جاهز للرفع — خلفية بيضاء `Light Mode`):**
  - أيقونة المتجر `icon-512x512.png` (`512×512` RGB).
  - **Phone (`phone/`):** بنر الغلاف `00-feature-graphic-1024x500.png` (`1024×500`) + 8 صور واجهة تطبيق حقيقية `01..08` (`1080×2160` RGB) للغة العربية + مجلدات مترجمة لـ `en-US` و `fr-FR` و `de-DE` و `es-ES` فـ `phone/localized/`.
  - **7-inch Tablet (`tablet-7/`):** 8 صور `01..08` بمقاس `1080×1920` (نسبة `9:16` قياسية) للغات الخمس (`ar` + `localized/{en-US,fr-FR,de-DE,es-ES}`).
  - **10-inch Tablet (`tablet-10/`):** 8 صور `01..08` بمقاس `1440×2560` (نسبة `9:16` عالية الدقة) للغات الخمس (`ar` + `localized/{en-US,fr-FR,de-DE,es-ES}`).
- **`04-Store-Release-Notes-All-5-Locales.md`:** نصوص **What's New / ما الجديد** جاهزة للنسخ واللصق باللغات الخمس لـ App Store و Google Play.
- **`05-CHANGELOG-GIT-LOG.txt`:** السجل الزمني الكامل لكل الـ 63 التزاماً (Commit) على فرع `feat/website`.

---

## 2. Executive Summary (English)

- **Git State:** All code, store scripts, and store screenshot sets are committed and pushed cleanly to `origin/feat/website` (HEAD `56bc8a66`, 63 commits ahead of `origin/main` as a clean fast-forward).
- **iOS (`2.0.2 · Build 64`):** Signed `Wazen-v2.0.2-b64.ipa` + `APPSTORE.md` metadata included in `01-iOS-2.0.2-Build-64/`. Ready for App Store Connect distribution via Xcode Organizer (`Wazen_2.0.2_64.xcarchive`).
- **Android (`v7.9 · versionCode 70`):** Signed `wazen-release.aab` + test `wazen-release.apk` + `PLAYSTORE.md` metadata included in `02-Android-v7.9-Build-70/`.
- **Google Play Store Visuals (`126` verified 24-bit RGB PNGs, no alpha, < 8 MB each):** White studio background showcasing real Light-Mode Wazen screens across **5 store locales (`ar`, `en-US`, `fr-FR`, `de-DE`, `es-ES`)** for **Feature Graphic (`1024×500`)**, **Phone (`1080×2160`)**, **7-inch Tablet (`1080×1920`, 9:16)**, and **10-inch Tablet (`1440×2560`, 9:16)**.
- **Known Limitations / Notes:**
  - Tablet assets (`tablet-7` & `tablet-10`) present the mobile UI inside compliant `9:16` studio frames rather than split-pane Android tablet captures.
  - Final App Store Connect / Google Play Console web submission requires interactive developer account authentication.

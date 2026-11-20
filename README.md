# SMILE ওয়েবসাইট ডিজাইন

`index.html` ব্রাউজারে খুলুন। ফোল্ডারসহ রাখলে ছবি অফলাইনেও দেখা যাবে। HTML/CSS/JavaScript-এ তৈরি responsive design prototype; Figma source নয়।

## ডিজাইনের দিক

সানাবিল ফাউন্ডেশনের পরিচিতি → কার্যক্রম → অংশগ্রহণ → যোগাযোগ কাঠামো অনুসরণ করে SMILE-এর জন্য নিজস্ব গাঢ় সবুজ, হালকা জলপাই ও ক্রিম রঙের ডিজাইন। বাংলা কনটেন্ট, মোবাইল মেনু, বড় করে ছবি দেখা ও প্রশ্নোত্তর অন্তর্ভুক্ত।

## উৎস ও যাচাই

- রেফারেন্স: https://sanabilfoundation.org/
- SMILE: https://www.facebook.com/people/SMILE/100066981632845/
- পেজের পরিচিতি: Sylhet Bangladesh; Education, Health, Environment and Technology.
- পূর্ণ নাম পোস্টার থেকে: Society of Macro Improvement of Life and Environment.
- ফোন ও ইমেইল পেজের public Intro থেকে নেওয়া।
- স্বাস্থ্য ক্যাম্পের ছবি Facebook cover থেকে। বৃক্ষরোপণ ও থ্যালাসেমিয়া পোস্টার পেজের পোস্ট থেকে। অন্য প্রতিষ্ঠানের ছবি ব্যবহার করা হয়নি।
- বাংলা প্রচারমূলক শিরোনাম ও সংক্ষিপ্ত বর্ণনা প্রস্তাবিত খসড়া, সংগঠনের অনুমোদিত বক্তব্য নয়।
- ব্যবহারকারীর নির্দেশনা অনুযায়ী সংযুক্ত চিকিৎসাসেবার ছবির ব্যানারে থাকা কালো-লাল SMILE লেখার আদলে SVG লোগো পুনর্নির্মাণ করা হয়েছে। এটি মূল ভেক্টর ফাইল নয়।
- নতুন চিকিৎসাসেবা, মাস্ক বিতরণ, শীতবস্ত্র, কেন্দ্র ও সংবাদপত্রের ছবি ব্যবহারকারীর দেওয়া সংযুক্তি থেকে।
- দেওয়া লোকেশন লিংকের শিরোনাম Shibgonj, Sylhet; এটি Google Maps বা নিশ্চিত অফিস ঠিকানা নয়। যোগাযোগ বিভাগে শিবগঞ্জ, সিলেটকে কেবল লোকেশন লিংক হিসেবে রাখা হয়েছে।
- ফুটারে ব্যবহারকারীর চাওয়া বানান: ANA Soft।

## পরবর্তী কাজ

অনুমোদিত পূর্ণ অফিস ঠিকানা, পরিচিতি, সদস্যদের তথ্য এবং কার্যক্রমের বিস্তারিত পাওয়া গেলে আরও যুক্ত করা যাবে। শিক্ষা ও প্রযুক্তির নির্দিষ্ট প্রকল্পের তথ্য না পাওয়ায় কাল্পনিক প্রকল্প যোগ করা হয়নি। অনুদান gateway, নিবন্ধন backend বা message submission এখানে নেই। Email ও phone link ব্যবহারকারীর নিজস্ব app খুলবে।

`smile-bd.org` স্ক্রিনশট অনুযায়ী প্রস্তাবিত domain; মালিকানা বা availability যাচাই করা হয়নি। এই prototype-টি domain-এ deploy করা হয়নি।


## 20 November 2026 — Contact, Notice Board and Events update

- Replaced the old telephone and email links in the top bar, footer and volunteer call-to-action.
- Current phone: +880 1348-245365 (`tel:+8801348245365`).
- Email addresses: `smilesylhet02@gmail.com` and `Sylhetsmile492@gmail.com`.
- Added **Notice Board** (`#notices`) containing archived activity notices and a get-involved information link.
- Added **Past Events** (`#events`) with six photo-based entries based on existing website assets: health camp, thalassaemia awareness, winter clothing distribution, mask distribution, tree plantation and a community gathering. Image buttons open the existing lightbox.
- Added navigation and footer links, responsive layouts, and Bengali/English translations.
- No unverified event dates, future events or announcements were invented. This is a **static website**: to publish new notices/events, edit the corresponding HTML sections manually. There is no CMS or database.
- `index.html` is the entry point; keep the `assets/` folder alongside it. The live hosted site has not been modified by editing this ZIP.


## 20 November 2026 — Notice/event details popup and photo archive

- Notices now show dates and open an accessible, dismissible details dialog.
- Events now display date + venue on cards and open an accessible details dialog with full descriptions and a photo gallery (where multiple relevant photos are available).
- Switch gallery images using thumbnails, previous/next controls, or left/right arrow keys. Escape closes the popup.
- Full Bengali and English content for popup details; other language strings added to `assets/language.js`.
- Correct previously assumed dates/venues in `assets/notice-events.js` and on the visible cards in `index.html` when verified source data is available.
- **Source-backed dates/venues:** On the flyers, thalassaemia awareness and tree plantation events are listed on **02 August 2026** at **Dungria Government Primary School**. The notice for updated contact information uses the website's actual update date (20 November 2026), **not** an event date.
- **Provisional dates/venues:** Health camp (15 March 2025, Sylhet city), winter distribution (10 January 2025, Sylhet region), mask distribution (17 July 2021, Sylhet city), community gathering (20 February 2024, Sylhet region). They are labeled **Estimated / আনুমানিক** on the site and marked accordingly inside the popup. The names, dates and venues are placeholders, NOT confirmed historical records.
- Archives use photos from the supplied site assets; one-photo galleries are retained if there is no second relevant image. No unrelated picture is claimed as part of the same event.
- Static HTML/JS site; no admin panel, database, or live website deployment.

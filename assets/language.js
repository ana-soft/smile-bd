/* Bengali source text is kept intact; English is applied to text and accessible labels. */
(() => {
  const translations = {
    'যোগাযোগ: +880 1711-469678':'Contact: +880 1711-469678',
    'মানুষের পাশে, সুন্দর আগামীর পথে':'Together for a better tomorrow',
    'আমাদের কথা':'About us','কার্যক্রম':'Our work','ছবির গল্প':'Gallery','যোগাযোগ':'Contact','পাশে থাকুন':'Get involved',
    'মানুষের পাশে,':'By your side,','একটি সুন্দর':'for a better','আগামীর জন্য।':'tomorrow.',
    'একটু যত্ন, একটু সহযোগিতা—কারও জীবনে তা হয়ে উঠতে পারে অনেক বড় কিছু। শিক্ষা, স্বাস্থ্য, পরিবেশ ও প্রযুক্তিতে মানুষের পাশে SMILE।':'A little care and support can make a lasting difference. SMILE works alongside communities through education, healthcare, the environment and technology.',
    'আমাদের কার্যক্রম':'Our initiatives','আমাদের সঙ্গে যুক্ত হোন':'Join us','সিলেট, বাংলাদেশ':'Sylhet, Bangladesh',
    'যত্নে ও সেবায়, মানুষের পাশে।':'Bringing care closer to people.',
    'শিক্ষার্থীদের জন্য স্বাস্থ্যসেবা।':'Healthcare support for students.',
    'সহমর্মিতার উষ্ণতায়, একসাথে।':'Sharing warmth, together.',
    'বিরতি Ⅱ':'Pause Ⅱ','চালু ▶':'Play ▶',
    'শিক্ষা':'Education','স্বাস্থ্য':'Healthcare','পরিবেশ':'Environment','প্রযুক্তি':'Technology',
    'সমাজের জন্য, মানুষের জন্য':'For people and communities',
    'ছোট উদ্যোগে,':'Small steps,','বড় পরিবর্তনের স্বপ্ন।':'meaningful change.',
    'সিলেট, বাংলাদেশে শিক্ষা, স্বাস্থ্য, পরিবেশ ও প্রযুক্তি নিয়ে কাজ করা একটি সামাজিক সংগঠন SMILE। মানুষের প্রয়োজনের পাশে দাঁড়ানো এবং সহযোগিতার হাত বাড়িয়ে দেওয়াই আমাদের পথচলার প্রেরণা।':'SMILE is a social organisation based in Sylhet, Bangladesh, working in education, healthcare, the environment and technology. Our work is inspired by the desire to stand beside people and offer support where it is needed.',
    'স্বাস্থ্যসেবা ও সচেতনতা, শীতবস্ত্র বিতরণ, মাস্ক বিতরণ এবং বৃক্ষরোপণের মতো উদ্যোগে আমাদের কাজের কিছু মুহূর্ত এখানে তুলে ধরা হয়েছে।':'Here are moments from our healthcare and awareness activities, winter clothing distribution, mask distribution and tree plantation initiatives.',
    'আমাদের সঙ্গে পরিচিত হোন':'Connect with SMILE',
    'যেখানে প্রয়োজন, সেখানেই পাশে।':'Support where it matters.',
    'Facebook-এ সব কার্যক্রম':'More initiatives on Facebook',
    'স্বাস্থ্যসেবায় যত্নের হাত':'Care within reach',
    'শিক্ষার্থীদের চিকিৎসকের পরামর্শ ও স্বাস্থ্যসেবা দেওয়ার উদ্যোগ।':'Helping students access medical advice and healthcare support.',
    'আরও মুহূর্ত দেখুন':'Explore more moments',
    'সচেতনতায় সবার পাশে':'Awareness for everyone',
    'মাস্ক বিতরণ ও মানুষের কাছে স্বাস্থ্য সচেতনতার বার্তা পৌঁছে দেওয়ার প্রয়াস।':'Distributing masks and sharing health awareness messages within the community.',
    'শীতের দিনে উষ্ণতার ছোঁয়া':'Sharing warmth in winter',
    'শীতবস্ত্র বিতরণের মাধ্যমে শিশু ও পরিবারের পাশে থাকার উদ্যোগ।':'Supporting children and families through winter clothing distribution.',
    'পরিবেশের জন্যও আমাদের উদ্যোগ':'Taking care of our environment',
    'বৃক্ষরোপণ ও সচেতনতার মুহূর্ত দেখুন':'Discover our tree plantation and awareness activities',
    'আপনার একটু সময়,':'A little of your time,','কারও নতুন সম্ভাবনা।':'a new possibility for someone.',
    'স্বেচ্ছাসেবক হিসেবে কাজ করতে চান, অথবা কোনো উদ্যোগে সহযোগিতা করতে আগ্রহী? সরাসরি SMILE-এর সঙ্গে কথা বলুন।':'Interested in volunteering or supporting an initiative? Get in touch with SMILE to find out how you can take part.',
    'যুক্ত হওয়ার বিষয়ে লিখুন':'Write to us',
    'আমাদের কাজের কিছু মুহূর্ত।':'Our work, in moments.',
    'ছবিতে চাপ দিয়ে বড় করে দেখুন':'Select a photo to view it larger',
    'শিক্ষার্থীদের স্বাস্থ্যসেবায়':'Healthcare for students',
    'পরিবারের পাশে একসাথে':'Together with families',
    'মানুষের সঙ্গে, সমাজের সঙ্গে':'Connecting with communities',
    'স্বাস্থ্য সচেতনতার আয়োজনে':'Building health awareness',
    'সবুজ আগামী গড়ার উদ্যোগ':'Growing a greener tomorrow',
    'যত্নে ও সহযোগিতায়':'Care and cooperation',
    'সংবাদে আমাদের উদ্যোগ।':'Our initiatives in the news.',
    'প্রকাশিত সংবাদের কাটিং':'Published coverage of our initiatives',
    'দৈনিক সিলেটের ডাক':'The Daily Sylheter Dak','নকশী বাংলা':'Nokshi Bangla','দৈনিক ইনফো বাংলা':'Daily Info Bangla',
    'সংবাদটি বড় করে পড়ুন':'View the news clipping',
    'জানতে চান?':'Have a question?',
    'সহযোগিতার প্রথম ধাপ হোক পরিচয়।':'A conversation is the first step to getting involved.',
    'SMILE কোন কোন ক্ষেত্রে কাজ করে?':'What areas does SMILE work in?',
    'Facebook পেজের পরিচিতি অনুযায়ী SMILE শিক্ষা, স্বাস্থ্য, পরিবেশ ও প্রযুক্তিতে কাজ করে। সংগঠনটির কর্মস্থল সিলেট, বাংলাদেশ।':'SMILE works in education, healthcare, the environment and technology, as described on its Facebook page. The organisation is based in Sylhet, Bangladesh.',
    'স্বেচ্ছাসেবক হিসেবে কীভাবে যোগাযোগ করব?':'How can I get involved as a volunteer?',
    'পেজে দেওয়া ফোন নম্বরে কল করুন বা ইমেইলে আপনার আগ্রহ জানান। যোগাযোগের তথ্য নিচের বিভাগে পাবেন।':'Call us or email us to share your interest. You can find our contact details below.',
    'কোনো উদ্যোগে কীভাবে সহায়তা করব?':'How can I support an initiative?',
    'সহায়তার পদ্ধতি জানতে সরাসরি সংগঠনের সঙ্গে যোগাযোগ করুন। কোন উদ্যোগে অংশ নিতে চান তা জানিয়ে ফোন বা ইমেইলে কথা বলুন।':'Contact the organisation directly to discuss ways to help. Tell us which initiative you would like to support by phone or email.',
    'সুন্দর আগামীর পথে।':'Towards a better tomorrow.',
    'শিক্ষা, স্বাস্থ্য, পরিবেশ ও প্রযুক্তিতে':'Through education, healthcare, the environment and technology.',
    'একসাথে ভালো কিছুর প্রত্যয়ে।':'Together, with hope for positive change.',
    'আমাদের সঙ্গে থাকুন':'Stay connected','যুক্ত হোন':'Get involved','যোগাযোগ করুন':'Contact us',
    'শিবগঞ্জ, সিলেট':'Shibgonj, Sylhet',
    'বন্ধ করুন ×':'Close ×',
    'SMILE হোম':'SMILE home','মেনু খুলুন':'Open navigation','প্রধান মেনু':'Main navigation','ফুটার মেনু':'Footer navigation',
    'SMILE-এর কার্যক্রম':'SMILE activities','ব্যানার নিয়ন্ত্রণ':'Slideshow controls',
    'আগের ছবি':'Previous photo','পরের ছবি':'Next photo',
    'স্বয়ংক্রিয় স্লাইড বন্ধ করুন':'Pause slideshow','স্বয়ংক্রিয় স্লাইড চালু করুন':'Play slideshow',
    'কর্মসূচির ছবি':'Activity photo',
    'স্বাস্থ্য ক্যাম্পে শিশুকে পরীক্ষা করছেন চিকিৎসক':'A doctor examining a child at a health camp',
    'শিক্ষার্থীকে চিকিৎসকের পরামর্শ':'A student receiving medical advice',
    'শীতবস্ত্র হাতে শিশু ও পরিবারের সদস্যরা':'Children and families holding winter clothing',
    'সবুজ পরিবেশে SMILE-এর ব্যানারযুক্ত আঞ্চলিক কেন্দ্র':'A regional centre displaying a SMILE banner in green surroundings',
    'শিক্ষার্থীর সঙ্গে চিকিৎসকের পরামর্শের মুহূর্ত':'A doctor consulting with a student',
    'রাস্তায় মাস্ক বিতরণের মুহূর্ত':'Distributing masks in the community',
    'শীতবস্ত্র হাতে একটি শিশু':'A child holding winter clothing',
    'চিকিৎসকের পরামর্শ নিচ্ছেন একজন শিক্ষার্থী':'A student receiving a medical consultation',
    'শিশু ও পরিবারের সঙ্গে সামাজিক সহযোগিতার মুহূর্ত':'Supporting children and families in the community',
    'সামাজিক অনুষ্ঠানে বক্তব্য দেওয়ার মুহূর্ত':'Speaking at a community event',
    'থ্যালাসেমিয়া সচেতনতা কর্মসূচিতে অংশগ্রহণকারীরা':'Participants at a thalassaemia awareness programme',
    'দুংরিয়া বিদ্যালয়ে বৃক্ষরোপণ কর্মসূচির আয়োজন':'A tree plantation initiative at Dungria school',
    'স্বাস্থ্য পরীক্ষা কর্মসূচির একটি মুহূর্ত':'A moment from a health screening programme'
  };
  window.smileTranslations = translations;
  const originalText = new WeakMap(), originalAttrs = new WeakMap();
  let language = 'bn';
  function translate(text) {
    const leading = text.match(/^\s*/)[0], trailing = text.match(/\s*$/)[0];
    const core = text.trim();
    if (translations[core]) return leading + translations[core] + trailing;
    for (const suffix of [' ↗','  ↗',' ↗',' বড় করে দেখুন','-এর সংবাদ পড়ুন']) {
      if (core.endsWith(suffix)) {
        const key = core.slice(0,-suffix.length).trim();
        if (translations[key]) return leading + translations[key] + (suffix.includes('বড়') ? ' — view larger' : suffix.includes('সংবাদ') ? ' — view coverage' : ' ↗') + trailing;
      }
    }
    const press = core.match(/^(.+?)-এ (প্রকাশিত SMILE-এর কার্যক্রমের সংবাদ|SMILE-এর কার্যক্রমের সংবাদ)$/);
    if (press && translations[press[1]]) return 'Coverage of SMILE activities in ' + translations[press[1]];
    return text;
  }
  function applyLanguage(next, persist = true) {
    language = next === 'en' ? 'en' : 'bn';
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement.closest('script,style,[data-language-switch]')) continue;
      if (!originalText.has(node)) originalText.set(node,node.nodeValue);
      const base=originalText.get(node);
      if (/[\u0980-\u09ff]/.test(base)) node.nodeValue=language==='en'?translate(base):base;
    }
    document.querySelectorAll('[alt],[aria-label],[data-caption]').forEach(el=>{
      if(el.closest('[data-language-switch]')) return;
      if(!originalAttrs.has(el)) originalAttrs.set(el,Object.fromEntries(['alt','aria-label','data-caption'].filter(a=>el.hasAttribute(a)).map(a=>[a,el.getAttribute(a)])));
      for(const [a,v] of Object.entries(originalAttrs.get(el)))el.setAttribute(a,language==='en'?translate(v):v);
    });
    document.documentElement.lang=language;
    document.title=language==='en'?'SMILE — Together for a better tomorrow':'SMILE — মানুষের পাশে, সুন্দর আগামীর পথে';
    document.querySelector('meta[name="description"]').content=language==='en'?'SMILE is a social organisation in Sylhet, Bangladesh, working in education, healthcare, the environment and technology.':'সিলেটের সামাজিক সংগঠন SMILE। শিক্ষা, স্বাস্থ্য, পরিবেশ ও প্রযুক্তিতে মানুষের পাশে।';
    document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===language)));
    document.querySelector('#language-status').textContent=language==='en'?'English selected':'বাংলা নির্বাচন করা হয়েছে';
    if(window.refreshSlideLanguage) window.refreshSlideLanguage(language);
    if(document.querySelector('#viewer').open) document.querySelector('#viewer').close();
    if(persist)try{localStorage.setItem('smile-language',language)}catch{}
  }
  document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>applyLanguage(button.dataset.lang)));
  let initial='bn';try{initial=localStorage.getItem('smile-language')||'bn'}catch{}
  applyLanguage(initial,false);
})();

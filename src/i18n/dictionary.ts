export type Lang = "ar" | "en";

export const dict = {
  ar: {
    dir: "rtl" as "rtl" | "ltr",
    nav: {
      home: "الرئيسية",
      about: "عن محمد",
      services: "الخدمات",
      method: "المنهج",
      gallery: "المعرض",
      booking: "الحجز",
    },
    cta: {
      book: "احجز جلسة خاصة",
      explore: "استكشف البرامج",
      whatsapp: "تواصل عبر واتساب",
      learnMore: "اعرف المزيد",
      send: "إرسال طلب الحجز",
      visitIg: "زيارة إنستغرام",
      viewIg: "شاهد المزيد على إنستغرام",
      orWhatsapp: "أو تواصل مباشرة عبر واتساب",
    },
    header: {
      tagline: "Private Tennis Coaching in Dubai",
    },
    hero: {
      badge: "تدريب التنس الخاص في دبي",
      h1: "تجربة راقية لتدريب التنس الخاص في دبي",
      with: "مع محمد مسلم",
      sub: "تدريب تنس خاص وبرامج أداء وظيفي مصممة حسب مستواك، أهدافك، وأسلوب حياتك في دبي.",
    },
    trust: {
      title: "خبرة موثوقة",
      items: [
        "ماجستير في فسيولوجيا الرياضة",
        "تدريب خاص 1:1",
        "تدريب لجميع المستويات",
        "تنس + لياقة وظيفية",
        "مقيم في دبي",
      ],
    },
    about: {
      kicker: "تعريف",
      title: "عن محمد مسلم",
      sub: "مدرب تنس خاص ومدرب لياقة وظيفية في دبي",
      body: "محمد مسلم يساعد اللاعبين من مختلف المستويات على تطوير مهاراتهم في التنس، تحسين الحركة، وبناء أداء بدني أفضل من خلال برامج تدريبية شخصية تجمع بين التنس، اللياقة الوظيفية، وفهم علمي للأداء الرياضي.",
      badges: ["مدرب خاص", "لياقة وظيفية", "فسيولوجيا رياضة", "دبي"],
      quote: "التدريب الجيد لا يغيّر ضربتك فقط، بل يغيّر طريقة حركتك وثقتك داخل الملعب.",
    },
    services: {
      kicker: "البرامج",
      title: "برامج تدريبية مصممة حولك",
      items: [
        {
          t: "تدريب تنس خاص",
          d: "جلسات فردية لتحسين التقنية، الحركة، الثقة، وفهم اللعبة حسب مستواك وأهدافك.",
        },
        {
          t: "تدريب الأداء العالي",
          d: "برنامج للاعبين الذين يريدون تطوير مستواهم، سرعة الحركة، الاستمرارية، والجاهزية البدنية.",
        },
        {
          t: "لياقة وظيفية للأداء",
          d: "تمارين تساعدك على الحركة بشكل أفضل، تقوية الجسم، تقليل الإصابات، ودعم أدائك داخل الملعب.",
        },
        {
          t: "تنس للمبتدئين ونمط الحياة",
          d: "تجربة تدريب هادئة وممتعة لمن يريد تعلم التنس كجزء من أسلوب حياة صحي وراقي في دبي.",
        },
      ],
    },
    lifestyle: {
      kicker: "نمط حياة دبي",
      title: "حيث يلتقي التنس بأسلوب الحياة الراقي في دبي",
      points: [
        "مواعيد مرنة",
        "مواقع مختارة داخل دبي",
        "تدريب مناسب للمبتدئين والمحترفين",
        "جلسات شخصية بعيدة عن ازدحام المجموعات",
        "أسلوب تدريب هادئ، دقيق، وعملي",
      ],
      locations: ["دبي مارينا", "وسط دبي", "جميرا", "نخلة جميرا", "الخليج التجاري"],
    },
    method: {
      kicker: "المنهج",
      title: "منهج تدريبي واضح، شخصي، وفعّال",
      steps: [
        { n: "01", t: "التقييم", d: "فهم مستواك، أهدافك، طريقة حركتك، ونقاط التطوير." },
        { n: "02", t: "التقنية", d: "تحسين الضربات، التوازن، التوقيت، والتحكم." },
        { n: "03", t: "الحركة", d: "تطوير القدمين، الرشاقة، التموضع، والاستجابة." },
        { n: "04", t: "الثقة", d: "بناء الثقة، الاستمرارية، وقراءة اللعب داخل الملعب." },
      ],
    },
    fitness: {
      kicker: "اللياقة الوظيفية",
      title: "لياقة وظيفية تدعم أداءك في التنس",
      body: "يجمع التدريب بين مهارات التنس وتمارين اللياقة الوظيفية لتحسين القوة، التوازن، المرونة، الرشاقة، والقدرة على الحركة داخل الملعب.",
      cards: [
        { t: "الحركة والتوازن", d: "مرونة المفاصل، توازن، تموضع." },
        { t: "القوة والثبات", d: "قوة وظيفية، ثبات للجذع، حماية من الإصابات." },
        { t: "السرعة والرشاقة", d: "سرعة قدم، انفجار، تغيير اتجاه." },
      ],
    },
    gallery: {
      kicker: "المعرض",
      title: "لحظات من التدريب",
      reels: "ريلز إنستغرام / فيديوهات تدريبية",
      tiles: [
        "بورتريه المدرب",
        "جلسة تنس خاصة",
        "مضرب وكرة عن قرب",
        "ملعب فاخر عند الغروب",
        "تمرين لياقة وظيفية",
        "نمط حياة التنس في دبي",
      ],
    },
    testimonials: {
      kicker: "آراء اللاعبين",
      title: "ماذا يقول اللاعبون",
      items: [
        {
          q: "أسلوب محمد هادئ وواضح. ساعدني على تحسين حركتي وثقتي داخل الملعب.",
          n: "أحمد",
          l: "دبي مارينا",
        },
        {
          q: "الجلسات منظمة ومناسبة لمستواي. شعرت بتطور واضح من أول أسابيع.",
          n: "سارة",
          l: "وسط دبي",
        },
        {
          q: "الجمع بين التنس واللياقة الوظيفية جعل التدريب أكثر فائدة واحترافية.",
          n: "خالد",
          l: "جميرا",
        },
      ],
    },
    booking: {
      kicker: "الحجز",
      title: "احجز جلستك الخاصة",
      body: "ابدأ بتجربة تدريب شخصية مصممة حول مستواك، أهدافك، ووقتك في دبي.",
      benefits: [
        "تدريب خاص 1:1",
        "مناسب لجميع المستويات",
        "دمج التنس مع اللياقة الوظيفية",
        "مواعيد مرنة",
        "تواصل سريع عبر واتساب",
      ],
      fields: {
        name: "الاسم",
        phone: "رقم الهاتف / واتساب",
        email: "البريد الإلكتروني",
        program: "البرنامج المفضل",
        level: "المستوى الحالي",
        location: "الموقع المفضل",
        time: "الوقت المناسب",
        message: "رسالتك",
      },
      programs: [
        "تدريب تنس خاص",
        "تدريب الأداء العالي",
        "لياقة وظيفية",
        "تنس للمبتدئين / نمط الحياة",
      ],
      levels: ["مبتدئ", "متوسط", "متقدم", "غير متأكد"],
      success: "تم استلام طلبك. سيتم التواصل معك قريباً.",
    },
    instagram: {
      title: "تابع تدريبات محمد على إنستغرام",
    },
    footer: {
      tagline: "تدريب التنس الخاص في دبي",
      links: {
        home: "الرئيسية",
        about: "عن محمد",
        services: "الخدمات",
        method: "المنهج",
        booking: "الحجز",
        contact: "تواصل",
      },
      contact: "تواصل",
      location: "دبي، الإمارات العربية المتحدة",
      rights: "جميع الحقوق محفوظة",
    },
  },
  en: {
    dir: "ltr" as "rtl" | "ltr",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      method: "Method",
      gallery: "Gallery",
      booking: "Booking",
    },
    cta: {
      book: "Book Private Session",
      explore: "Explore Programs",
      whatsapp: "WhatsApp",
      learnMore: "Learn More",
      send: "Send Booking Request",
      visitIg: "Visit Instagram",
      viewIg: "View More on Instagram",
      orWhatsapp: "Or contact directly on WhatsApp",
    },
    header: {
      tagline: "Private Tennis Coaching in Dubai",
    },
    hero: {
      badge: "Private Tennis Coaching in Dubai",
      h1: "Private Tennis Coaching in Dubai",
      with: "with Mohammad Moslem",
      sub: "Personalized tennis coaching and functional performance training designed around your level, goals, and lifestyle.",
    },
    trust: {
      title: "Trusted Expertise",
      items: [
        "Master's in Sports Physiology",
        "Private 1:1 Coaching",
        "All Skill Levels",
        "Tennis + Functional Fitness",
        "Dubai-Based",
      ],
    },
    about: {
      kicker: "About",
      title: "About Mohammad Moslem",
      sub: "Private tennis coach and functional fitness coach in Dubai",
      body: "Mohammad Moslem helps players of all levels improve their tennis skills, movement, and physical performance through personalized coaching that combines tennis training, functional fitness, and a scientific understanding of sports performance.",
      badges: ["Private Coach", "Functional Fitness", "Sports Physiology", "Dubai"],
      quote:
        "Great coaching does not only change your stroke — it changes how you move and how confident you feel on court.",
    },
    services: {
      kicker: "Programs",
      title: "Coaching Programs Designed Around You",
      items: [
        {
          t: "Private Tennis Coaching",
          d: "One-on-one sessions to improve technique, movement, confidence, and game understanding.",
        },
        {
          t: "High-Performance Tennis",
          d: "For players who want to improve level, speed, consistency, and athletic readiness.",
        },
        {
          t: "Functional Fitness Coaching",
          d: "Training to help you move better, build strength, reduce injury risk, and support on-court performance.",
        },
        {
          t: "Beginner & Lifestyle Tennis",
          d: "A calm and enjoyable coaching experience for those learning tennis as part of a healthy Dubai lifestyle.",
        },
      ],
    },
    lifestyle: {
      kicker: "Dubai Lifestyle",
      title: "Where Tennis Meets Dubai's Premium Lifestyle",
      points: [
        "Flexible scheduling",
        "Selected Dubai locations",
        "Coaching for beginners and advanced players",
        "Private sessions away from crowded groups",
        "Calm, precise, and practical coaching style",
      ],
      locations: ["Dubai Marina", "Downtown Dubai", "Jumeirah", "Palm Jumeirah", "Business Bay"],
    },
    method: {
      kicker: "Method",
      title: "A Clear, Personal, and Effective Training Method",
      steps: [
        {
          n: "01",
          t: "Assessment",
          d: "Understand your level, goals, movement patterns, and growth areas.",
        },
        { n: "02", t: "Technique", d: "Improve strokes, balance, timing, and control." },
        { n: "03", t: "Movement", d: "Develop footwork, agility, positioning, and response." },
        {
          n: "04",
          t: "Confidence",
          d: "Build confidence, consistency, and on-court game reading.",
        },
      ],
    },
    fitness: {
      kicker: "Functional Fitness",
      title: "Functional Fitness That Supports Your Tennis Performance",
      body: "The coaching approach combines tennis skills with functional fitness to improve strength, balance, mobility, agility, and on-court movement.",
      cards: [
        { t: "Mobility & Balance", d: "Joint mobility, balance, positioning." },
        { t: "Strength & Stability", d: "Functional strength, core stability, injury prevention." },
        { t: "Speed & Agility", d: "Foot speed, explosiveness, change of direction." },
      ],
    },
    gallery: {
      kicker: "Gallery",
      title: "Training Moments",
      reels: "Instagram Reels / Training Videos",
      tiles: [
        "Coach Portrait",
        "Private Tennis Session",
        "Racket & Ball Close-up",
        "Luxury Court at Sunset",
        "Functional Fitness Drill",
        "Dubai Tennis Lifestyle",
      ],
    },
    testimonials: {
      kicker: "Testimonials",
      title: "What Players Say",
      items: [
        {
          q: "Mohammad's coaching style is calm and clear. He helped me improve my movement and confidence on court.",
          n: "Ahmed",
          l: "Dubai Marina",
        },
        {
          q: "The sessions are structured and adapted to my level. I felt real progress within the first weeks.",
          n: "Sara",
          l: "Downtown Dubai",
        },
        {
          q: "Combining tennis with functional fitness made the training more effective and professional.",
          n: "Khalid",
          l: "Jumeirah",
        },
      ],
    },
    booking: {
      kicker: "Booking",
      title: "Book Your Private Session",
      body: "Start with a personalized coaching experience designed around your level, goals, and schedule in Dubai.",
      benefits: [
        "Private 1:1 coaching",
        "All skill levels",
        "Tennis + functional fitness",
        "Flexible scheduling",
        "Fast WhatsApp contact",
      ],
      fields: {
        name: "Name",
        phone: "Phone / WhatsApp",
        email: "Email",
        program: "Preferred Program",
        level: "Current Level",
        location: "Preferred Location",
        time: "Preferred Time",
        message: "Message",
      },
      programs: [
        "Private Tennis Coaching",
        "High-Performance Tennis",
        "Functional Fitness",
        "Beginner / Lifestyle Tennis",
      ],
      levels: ["Beginner", "Intermediate", "Advanced", "Not sure"],
      success: "Your request has been received. You will be contacted soon.",
    },
    instagram: {
      title: "Follow Mohammad's Training on Instagram",
    },
    footer: {
      tagline: "Private Tennis Coaching in Dubai",
      links: {
        home: "Home",
        about: "About",
        services: "Services",
        method: "Method",
        booking: "Booking",
        contact: "Contact",
      },
      contact: "Contact",
      location: "Dubai, UAE",
      rights: "All rights reserved",
    },
  },
};

export type Dict = typeof dict.en;

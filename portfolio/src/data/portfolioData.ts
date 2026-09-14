import type { PortfolioData } from '../types';

// ============================================================
// CENTRAL PORTFOLIO DATA
// All content is sourced strictly from the verified CV and the
// project brief. Nothing here is invented. Items with unverifiable
// LinkedIn links are listed in `unmatchedLinkedInLinks` rather than
// attached to a specific card.
// ============================================================

export const portfolioData: PortfolioData = {
  personalInfo: {
    fullName: {
      en: 'Ahmed Hani Abdel Halim El-Gohary',
      ar: 'أحمد هاني عبد الحليم الجوهري',
    },
    title: {
      en: 'Mechatronics Engineering Student',
      ar: 'طالب هندسة ميكاترونكس',
    },
    location: {
      en: 'Cairo, Egypt',
      ar: 'القاهرة، مصر',
    },
    monogram: 'AH',
    photoUrl: '/images/profile/profile.jpg',
    photoAlt: {
      en: 'Portrait of Ahmed Hani Abdel Halim El-Gohary',
      ar: 'صورة شخصية لأحمد هاني عبد الحليم الجوهري',
    },
  },

  professionalSummary: {
    en: 'First-Class Mechatronics Engineering student at The British University in Egypt, expected to graduate in 2028. Possesses practical experience in mechanical maintenance, manufacturing operations, engineering design, programming, and industrial automation through multiple internships and technical projects.',
    ar: 'طالب هندسة ميكاترونكس بتقدير First-Class في الجامعة البريطانية في مصر، ومن المتوقع تخرجه عام 2028. يمتلك خبرة عملية في الصيانة الميكانيكية وعمليات التصنيع والتصميم الهندسي والبرمجة والأتمتة الصناعية من خلال عدد من التدريبات والمشروعات التقنية.',
  },

  contactInfo: {
    email: 'ahmedalgohary215006@gmail.com',
    phone: '+201097021034',
    location: {
      en: 'Cairo, Egypt',
      ar: 'القاهرة، مصر',
    },
    linkedin: 'https://www.linkedin.com/in/ahmed-hani-algohary',
    cvPath: '/ahmed-hani-CV.pdf',
  },

  socialLinks: [
    {
      label: { en: 'LinkedIn', ar: 'لينكدإن' },
      url: 'https://www.linkedin.com/in/ahmed-hani-algohary',
      icon: 'linkedin',
    },
    {
      label: { en: 'Email', ar: 'البريد الإلكتروني' },
      url: 'mailto:ahmedalgohary215006@gmail.com',
      icon: 'email',
    },
    {
      label: { en: 'Phone', ar: 'الهاتف' },
      url: 'tel:+201097021034',
      icon: 'phone',
    },
  ],

  education: [
    {
      id: 'edu-bue',
      degree: {
        en: 'Bachelor of Science in Mechatronics Engineering',
        ar: 'بكالوريوس العلوم في هندسة الميكاترونكس',
      },
      institution: {
        en: 'The British University in Egypt (BUE)',
        ar: 'الجامعة البريطانية في مصر',
      },
      institutionShort: 'BUE',
      location: {
        en: 'Cairo, Egypt',
        ar: 'القاهرة، مصر',
      },
      expectedGraduation: '2028',
      average: '73%',
      classification: {
        en: 'First-Class level (UK weighted average)',
        ar: 'مستوى الشرف الأول (المعدل الموزون البريطاني)',
      },
      coursework: [
        { en: 'Thermodynamics', ar: 'الديناميكا الحرارية' },
        { en: 'Electric Circuits', ar: 'الدوائر الكهربائية' },
        { en: 'Electronics', ar: 'الإلكترونيات' },
        { en: 'Mechanical Design', ar: 'التصميم الميكانيكي' },
        { en: 'Fluid Mechanics', ar: 'ميكانيكا الموائع' },
        { en: 'C Programming', ar: 'البرمجة بلغة C' },
        { en: 'Materials Science', ar: 'علم المواد' },
        { en: 'Project Management', ar: 'إدارة المشروعات' },
        { en: 'Mechanics of Machines', ar: 'ميكانيكا الآلات' },
      ],
    },
  ],

  experience: [
     {
  id: 'exp-gasco',
  company: 'Egyptian Natural Gas Company (GASCO)',
  role: {
    en: 'Gas Facilities Engineering Trainee',
    ar: 'متدرب هندسة منشآت الغاز',
  },
  location: {
    en: 'Fifth Settlement, New Cairo, Egypt',
    ar: 'التجمع الخامس، القاهرة الجديدة، مصر',
  },
  periodStart: '2026-08-03',
  periodEnd: '2026-08-26',
  period: {
    en: 'August 3, 2026 – August 26, 2026',
    ar: '3 أغسطس 2026 – 26 أغسطس 2026',
  },
  year: 2026,
  details: [
    {
      en: 'Completed a 144-hour summer training program within the Gas Facilities Department, gaining valuable exposure to a professional industrial environment and real-world engineering operations.',
      ar: 'أتممت برنامجًا تدريبيًا صيفيًا لمدة 144 ساعة داخل إدارة منشآت الغاز، واكتسبت خبرة قيّمة في بيئة صناعية احترافية وعمليات هندسية واقعية.',
    },
    {
      en: 'Developed a stronger understanding of gas facility operations, engineering practices, workplace safety, and technical workflows within the natural gas industry.',
      ar: 'طورت فهمًا أقوى لعمليات منشآت الغاز والممارسات الهندسية والسلامة المهنية ومسارات العمل الفنية في صناعة الغاز الطبيعي.',
    },
    {
      en: 'Enhanced technical and professional skills through practical guidance, career development sessions, and an applied workshop on the effective use of artificial intelligence in engineering careers.',
      ar: 'عززت مهاراتي التقنية والمهنية من خلال التوجيه العملي وجلسات التطوير الوظيفي وورشة تطبيقية حول الاستخدام الفعال للذكاء الاصطناعي في المجالات الهندسية.',
    },
  ],
  certificateUrl: '/documents/gasco-training-certificate.pdf',
},
    {
      id: 'exp-suez-steel',
      company: 'Suez Steel Company',
      role: {
        en: 'Mechanical Maintenance Intern',
        ar: 'متدرب صيانة ميكانيكية',
      },
      location: { en: 'Suez, Egypt', ar: 'السويس، مصر' },
      periodStart: '2026-07',
      periodEnd: '2026-08',
      period: { en: 'July 2026 – August 2026', ar: 'يوليو 2026 – أغسطس 2026' },
      year: 2026,
      details: [
        {
          en: 'Examined preventive and corrective maintenance procedures for heavy industrial equipment across multiple steel production plants.',
          ar: 'درس إجراءات الصيانة الوقائية والعلاجية للمعدات الصناعية الثقيلة عبر عدة مصانع لإنتاج الصلب.',
        },
        {
          en: 'Traced the steel production cycle across melting, casting, and rolling plants, identifying the function and maintenance requirements of key equipment.',
          ar: 'تتبع دورة إنتاج الصلب عبر مصانع الصهر والصب والدرفلة، وحدد وظيفة ومتطلبات صيانة المعدات الأساسية.',
        },
        {
          en: 'Observed equipment inspection, fault diagnosis, and maintenance activities involving pumps, bearings, gearboxes, conveyors, and hydraulic systems.',
          ar: 'شارك في مراقبة فحص المعدات وتشخيص الأعطال وأنشطة الصيانة الخاصة بالمضخات والمحامل وصناديق التروس والسيور الناقلة والأنظمة الهيدروليكية.',
        },
      ],
      certificateUrl: '/documents/suez-steel-training-certificate.pdf',
    },
    {
      id: 'exp-mdc',
      company: 'Modern Drilling Company (MDC)',
      role: {
        en: 'Mechanical Maintenance Intern',
        ar: 'متدرب صيانة ميكانيكية',
      },
      location: { en: 'Badr, Egypt', ar: 'بدر، مصر' },
      periodStart: '2026-01',
      periodEnd: '2026-02',
      period: { en: 'January 2026 – February 2026', ar: 'يناير 2026 – فبراير 2026' },
      year: 2026,
      details: [
        {
          en: 'Gained technical exposure to drilling systems, including top drives, mud pumps, rotary equipment, power transmission, and pressure-control systems.',
          ar: 'اكتسب خبرة فنية بأنظمة الحفر، بما في ذلك المحركات العلوية ومضخات الطين ومعدات الدوران وأنظمة نقل القدرة والتحكم في الضغط.',
        },
        {
          en: 'Studied the integration of mechanical equipment with electrical drives, sensors, actuators, feedback control, and automation to enable efficient and safe rig operations.',
          ar: 'درس تكامل المعدات الميكانيكية مع المحركات الكهربائية والحساسات والمشغلات والتحكم بالتغذية الراجعة والأتمتة لضمان تشغيل آمن وفعال لمنصة الحفر.',
        },
      ],
      certificateUrl: '/documents/mdc-certificate.pdf',
    },
    {
      id: 'exp-smart-furniture',
      company: 'Smart Furniture',
      role: {
        en: 'Mechanical Maintenance Intern',
        ar: 'متدرب صيانة ميكانيكية',
      },
      location: { en: '10th of Ramadan City, Egypt', ar: 'مدينة العاشر من رمضان، مصر' },
      periodStart: '2025-08',
      periodEnd: '2025-08',
      period: { en: 'August 2025', ar: 'أغسطس 2025' },
      year: 2025,
      details: [
        {
          en: 'Gained hands-on exposure to furniture manufacturing, industrial equipment, and mechanical and electrical maintenance practices supporting efficient production.',
          ar: 'اكتسب خبرة عملية في تصنيع الأثاث والمعدات الصناعية وممارسات الصيانة الميكانيكية والكهربائية الداعمة للإنتاج الفعال.',
        },
        {
          en: 'Strengthened problem-solving, teamwork, and cross-functional collaboration while developing awareness of quality standards, productivity targets, and workflow discipline.',
          ar: 'عزّز مهارات حل المشكلات والعمل الجماعي والتعاون بين الأقسام المختلفة، مع تنمية الوعي بمعايير الجودة وأهداف الإنتاجية وانضباط سير العمل.',
        },
      ],
      certificateUrl: '/documents/smart-furniture-certificate.pdf',
    },
    {
      id: 'exp-ideal-standard',
      company: 'Ideal Standard',
      role: {
        en: 'Mechanical Maintenance Intern',
        ar: 'متدرب صيانة ميكانيكية',
      },
      location: { en: '10th of Ramadan City, Egypt', ar: 'مدينة العاشر من رمضان، مصر' },
      periodStart: '2025-06',
      periodEnd: '2025-07',
      period: { en: 'June 2025 – July 2025', ar: 'يونيو 2025 – يوليو 2025' },
      year: 2025,
      details: [
        {
          en: 'Gained hands-on experience with automated production lines, industrial machinery, sensors, control panels, and maintenance operations in a large-scale manufacturing environment.',
          ar: 'اكتسب خبرة عملية بخطوط الإنتاج الآلية والآلات الصناعية والحساسات ولوحات التحكم وعمليات الصيانة في بيئة تصنيع واسعة النطاق.',
        },
        {
          en: 'Developed an understanding of PLC-based control, electromechanical troubleshooting, and the integration of mechanical and electrical systems in sanitary ware production.',
          ar: 'طوّر فهماً للتحكم القائم على وحدات PLC واستكشاف الأعطال الكهروميكانيكية وتكامل الأنظمة الميكانيكية والكهربائية في إنتاج الأدوات الصحية.',
        },
      ],
      certificateUrl: '/documents/ideal-standard-certificate.pdf',
    },
  ],

  skillGroups: [
    {
      id: 'skill-cad',
      title: { en: 'CAD & Design', ar: 'التصميم بالحاسوب' },
      skills: ['SolidWorks', '3D Modelling', 'Assemblies', 'Design Visualization', 'Basic FEA', 'Motion Simulation'],
    },
    {
      id: 'skill-programming',
      title: { en: 'Programming', ar: 'البرمجة' },
      skills: ['C', 'Python'],
    },
    {
      id: 'skill-electronics',
      title: { en: 'Electronics & Control', ar: 'الإلكترونيات والتحكم' },
      skills: ['EasyEDA', 'PCB Design', 'Basic PLC Knowledge', 'Sensors', 'Actuators'],
    },
    {
      id: 'skill-analysis',
      title: { en: 'Engineering Analysis', ar: 'التحليل الهندسي' },
      skills: ['Material Selection', 'Failure Analysis', 'HVAC Load Estimation', 'COP Evaluation', 'IPLV Evaluation'],
    },
    {
      id: 'skill-maintenance',
      title: { en: 'Maintenance & Manufacturing', ar: 'الصيانة والتصنيع' },
      skills: ['Preventive Maintenance', 'Corrective Maintenance', 'Fault Identification', 'Manufacturing Processes'],
    },
    {
      id: 'skill-productivity',
      title: { en: 'Productivity Tools', ar: 'أدوات الإنتاجية' },
      skills: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint'],
    },
    {
      id: 'skill-soft',
      title: { en: 'Soft Skills', ar: 'المهارات الشخصية' },
      skills: ['Teamwork', 'Problem Solving', 'Time Management', 'Self-Learning', 'Adaptability'],
    },
  ],

  projects: [
    {
      id: 'proj-spiral-extrusion',
      title: {
        en: 'Multi-Channel Spiral Extrusion Twist Project',
        ar: 'مشروع اللف الحلزوني متعدد القنوات للبثق',
      },
      year: 2025,
      category: { en: 'Mechanical Design', ar: 'التصميم الميكانيكي' },
      tools: ['SolidWorks', '3D Modelling', 'FEA', 'Motion Simulation'],
      description: {
        en: 'Designed a complete 3D mechanical system in SolidWorks, incorporating a transparent housing for internal flow visualization.',
        ar: 'صمم نظاماً ميكانيكياً ثلاثي الأبعاد كاملاً باستخدام SolidWorks، متضمناً غلافاً شفافاً لتصور التدفق الداخلي.',
      },
      result: {
        en: 'Performed FEA stress analysis and motion simulation to validate structural integrity and mechanical performance.',
        ar: 'أجرى تحليل إجهادات بطريقة العناصر المحددة ومحاكاة حركية للتحقق من السلامة الإنشائية والأداء الميكانيكي.',
      },
      linkedinUrl:
        'https://www.linkedin.com/posts/ahmed-hani-algohary_mechanicalengineering-solidworks-fea-activity-7338339085410861056-5C4T',
    },
    {
      id: 'proj-rov-frame',
      title: {
        en: 'ROV Frame Material Selection & Failure Analysis',
        ar: 'اختيار مواد هيكل الروبوت الغاطس وتحليل الأعطال',
      },
      year: 2025,
      category: { en: 'Material Engineering', ar: 'هندسة المواد' },
      tools: ['Material Selection', 'Failure Analysis', 'Engineering Evaluation'],
      description: {
        en: 'Evaluated Aluminum AA5083, Titanium Ti-6Al-4V, and Stainless Steel 17-4PH for a deep-sea ROV operating at 3,000 m depth.',
        ar: 'قيّم سبائك الألومنيوم AA5083 والتيتانيوم Ti-6Al-4V والفولاذ المقاوم للصدأ 17-4PH لروبوت غاطس يعمل على عمق 3000 متر.',
      },
      result: {
        en: 'Recommended Aluminum AA5083 based on its strength-to-weight ratio, corrosion resistance, manufacturability, and cost-effectiveness.',
        ar: 'أوصى باستخدام الألومنيوم AA5083 بناءً على نسبة القوة إلى الوزن ومقاومة التآكل وسهولة التصنيع والجدوى الاقتصادية.',
      },
      linkedinUrl:
        'https://www.linkedin.com/posts/ahmed-hani-algohary_rov-material-analysis-activity-7408156914968272896-_AMd',
    },
    {
      id: 'proj-hvac-chiller',
      title: {
        en: 'HVAC Chiller Performance Analysis',
        ar: 'تحليل أداء مبردات التكييف',
      },
      year: 2026,
      category: { en: 'Thermodynamics and HVAC', ar: 'الديناميكا الحرارية والتكييف' },
      tools: ['Heat Transfer', 'HVAC Load Estimation', 'COP Evaluation', 'IPLV Evaluation'],
      description: {
        en: 'Analyzed oil-free centrifugal chillers and estimated hotel cooling loads using heat-transfer and energy-balance principles.',
        ar: 'حلل مبردات طاردة مركزية خالية من الزيت وقدّر أحمال التبريد لفندق باستخدام مبادئ انتقال الحرارة والاتزان الطاقي.',
      },
      result: {
        en: 'Evaluated full-load and part-load performance under 40°C ambient conditions using COP and IPLV metrics.',
        ar: 'قيّم الأداء عند الحمل الكامل والجزئي في ظل درجة حرارة محيطة 40°م باستخدام مؤشري COP وIPLV.',
      },
      linkedinUrl:
        'https://www.linkedin.com/posts/ahmed-hani-algohary_thermodynamic-project-activity-7425999213643116544-H9vg',
    },
    {
      id: 'proj-maintenance-system',
      title: {
        en: 'Maintenance Management System',
        ar: 'نظام إدارة الصيانة',
      },
      year: 2026,
      category: { en: 'C Programming', ar: 'البرمجة بلغة C' },
      tools: ['C', 'Data Structures', 'File Handling', 'Input Validation', 'Date Validation'],
      description: {
        en: 'Developed a C-based maintenance management system featuring machine registration, maintenance request tracking, end-of-life monitoring, and an operational dashboard.',
        ar: 'طوّر نظام إدارة صيانة بلغة C يتضمن تسجيل الآلات وتتبع طلبات الصيانة ومراقبة نهاية العمر التشغيلي ولوحة تشغيلية.',
      },
      result: {
        en: 'Implemented data structures, date validation, file handling, input validation, and save/load functionality to support reliable equipment records and maintenance scheduling.',
        ar: 'نفّذ هياكل بيانات والتحقق من التواريخ والتعامل مع الملفات والتحقق من المدخلات ووظائف الحفظ والتحميل لدعم سجلات موثوقة للمعدات وجدولة الصيانة.',
      },
      // No confirmed LinkedIn post URL for this item — see unmatchedLinkedInLinks.
    },
    {
      id: 'proj-power-supply',
      title: {
        en: '12V DC Regulated Power Supply',
        ar: 'مزود طاقة منظم بجهد 12 فولت تيار مستمر',
      },
      year: 2026,
      category: { en: 'Electronics', ar: 'الإلكترونيات' },
      tools: ['EasyEDA', 'PCB Design', 'Circuit Design', 'LM7812', 'Electronics Testing'],
      description: {
        en: 'Designed and implemented a regulated power supply that converts 220V AC to 12V DC using a transformer, bridge rectifier, smoothing capacitors, and an LM7812 voltage regulator.',
        ar: 'صمم ونفّذ مزود طاقة منظماً يحول 220 فولت تيار متردد إلى 12 فولت تيار مستمر باستخدام محول ومقوم جسري ومكثفات تنعيم ومنظم جهد LM7812.',
      },
      result: {
        en: 'Developed the schematic and PCB using EasyEDA, assembled and tested the prototype, and achieved a 12.12V output with a ripple factor below 1%.',
        ar: 'طوّر المخطط الدائري ولوحة الدوائر المطبوعة باستخدام EasyEDA، وقام بتجميع واختبار النموذج الأولي، وحقق جهد خرج 12.12 فولت بمعامل تموج أقل من 1%.',
      },
      // No confirmed LinkedIn post URL for this item — see unmatchedLinkedInLinks.
    },
  ],

  certificates: [
    {
      id: 'cert-robotics-automation',
      title: {
        en: 'Fundamentals of Robotics & Industrial Automation',
        ar: 'أساسيات الروبوتات والأتمتة الصناعية',
      },
      issuer: { en: 'L&T EduTech — Coursera', ar: 'L&T EduTech — Coursera' },
      issueDate: { en: 'July 2026', ar: 'يوليو 2026' },
      year: 2026,
      credentialUrl: 'https://www.coursera.org/account/accomplishments/records/VF32RR9NJYEQ',
      imageUrl: '/images/certificates/robotics-industrial-automation.jpg',
      imageAlt: {
        en: 'Fundamentals of Robotics & Industrial Automation certificate',
        ar: 'شهادة أساسيات الروبوتات والأتمتة الصناعية',
      },
    },
    {
      id: 'cert-sensors',
      title: {
        en: 'Sensors and Sensor Circuit Design',
        ar: 'الحساسات وتصميم دوائر الحساسات',
      },
      issuer: { en: 'University of Colorado Boulder — Coursera', ar: 'University of Colorado Boulder — Coursera' },
      issueDate: { en: 'July 2026', ar: 'يوليو 2026' },
      year: 2026,
      credentialUrl: 'https://www.coursera.org/account/accomplishments/records/FCPJFPKBGPI1',
      imageUrl: '/images/certificates/sensors-circuit-design.jpg',
      imageAlt: {
        en: 'Sensors and Sensor Circuit Design certificate',
        ar: 'شهادة الحساسات وتصميم دوائر الحساسات',
      },
    },
    {
      id: 'cert-exploring-c',
      title: {
        en: 'Exploring C',
        ar: 'استكشاف لغة C',
      },
      issuer: { en: 'University of Michigan — Coursera', ar: 'University of Michigan — Coursera' },
      issueDate: { en: 'May 2026', ar: 'مايو 2026' },
      year: 2026,
      credentialUrl: 'https://www.coursera.org/account/accomplishments/records/5QQA3EX9EU9W',
      imageUrl: '/images/certificates/exploring-c.jpg',
      imageAlt: {
        en: 'Exploring C certificate',
        ar: 'شهادة استكشاف لغة C',
      },
    },
    {
      id: 'cert-big-data',
      title: {
        en: 'A Quick Tour of Big Data and Business Intelligence',
        ar: 'جولة سريعة في البيانات الضخمة وذكاء الأعمال',
      },
      issuer: {
        en: 'Federica Web Learning, University of Naples Federico II — Coursera',
        ar: 'Federica Web Learning, University of Naples Federico II — Coursera',
      },
      issueDate: { en: 'June 2026', ar: 'يونيو 2026' },
      year: 2026,
      credentialUrl: 'https://www.coursera.org/account/accomplishments/records/90CHM5CAQF68',
      imageUrl: '/images/certificates/big-data-business-intelligence.jpg',
      imageAlt: {
        en: 'A Quick Tour of Big Data and Business Intelligence certificate',
        ar: 'شهادة جولة سريعة في البيانات الضخمة وذكاء الأعمال',
      },
    },
    {
      id: 'cert-cybersecurity',
      title: {
        en: 'Introduction to Cybersecurity',
        ar: 'مقدمة في الأمن السيبراني',
      },
      issuer: { en: 'Almentor', ar: 'المنتور' },
      issueDate: { en: 'September 2025', ar: 'سبتمبر 2025' },
      year: 2025,
      credentialUrl: 'https://www.almentor.net/certificate/wexb5eomn',
      imageUrl: '/images/certificates/cybersecurity.jpg',
      imageAlt: {
        en: 'Introduction to Cybersecurity certificate',
        ar: 'شهادة مقدمة في الأمن السيبراني',
      },
    },
    {
      id: 'cert-leading-heart',
      title: {
        en: 'Leading from the Heart & Managing with Innovation',
        ar: 'القيادة بالقلب والإدارة بالابتكار',
      },
      issuer: { en: 'Almentor', ar: 'المنتور' },
      issueDate: { en: 'August 2025', ar: 'أغسطس 2025' },
      year: 2025,
      credentialUrl: 'https://www.almentor.net/certificate/ee3widkomn',
      imageUrl: '/images/certificates/leading-heart-innovation.jpg',
      imageAlt: {
        en: 'Leading from the Heart & Managing with Innovation certificate',
        ar: 'شهادة القيادة بالقلب والإدارة بالابتكار',
      },
    },
  ],

  activities: [
    {
      id: 'activity-edex-2025',
      title: {
        en: 'Egypt International Defense Expo — EDEX 2025',
        ar: 'معرض مصر الدولي للدفاع — EDEX 2025',
      },
      year: 2025,
      type: { en: 'Engineering Exhibition Visit', ar: 'زيارة معرض هندسي' },
      description: {
        en: 'Attended EDEX 2025 through The British University in Egypt, gaining exposure to military manufacturing, unmanned systems, advanced engineering technologies, heavy industry, and international engineering organizations.',
        ar: 'حضر معرض EDEX 2025 من خلال الجامعة البريطانية في مصر، واطّلع على التصنيع العسكري والأنظمة غير المأهولة والتقنيات الهندسية المتقدمة والصناعات الثقيلة والمؤسسات الهندسية الدولية.',
      },
      linkedinUrl:
        'https://www.linkedin.com/posts/ahmed-hani-algohary_edex2025-egyptianministrydefense-minsitrymiliatryproduction-activity-7402415881483350016--6W7',
    },
  ],

  // ============================================================
  // LINKEDIN LINK MATCHING REPORT
  // LinkedIn post pages cannot be crawled (robots.txt disallows
  // automated access), so shortened lnkd.in links and the two
  // "probably related but unverified" full URLs could not be
  // resolved or confirmed. Per the brief's own rule — do not
  // assign an uncertain URL to a portfolio card — they are kept
  // in unmatchedLinkedInLinks below instead of being guessed.
  // ============================================================
  linkedInMatches: [
    {
      originalUrl:
        'https://www.linkedin.com/posts/ahmed-hani-algohary_mechanicalengineering-solidworks-fea-activity-7338339085410861056-5C4T',
      assignedTo: 'proj-spiral-extrusion',
      confidence: 'confirmed',
      evidence: {
        en: 'Supplied in the brief as a confirmed post for the Multi-Channel Spiral Extrusion Twist Project.',
        ar: 'تم تزويدها في الملخص كمنشور مؤكد لمشروع اللف الحلزوني متعدد القنوات للبثق.',
      },
    },
    {
      originalUrl:
        'https://www.linkedin.com/posts/ahmed-hani-algohary_rov-material-analysis-activity-7408156914968272896-_AMd',
      assignedTo: 'proj-rov-frame',
      confidence: 'confirmed',
      evidence: {
        en: 'Supplied in the brief as a confirmed post for the ROV Frame Material Selection & Failure Analysis project.',
        ar: 'تم تزويدها في الملخص كمنشور مؤكد لمشروع اختيار مواد هيكل الروبوت الغاطس وتحليل الأعطال.',
      },
    },
    {
      originalUrl:
        'https://www.linkedin.com/posts/ahmed-hani-algohary_thermodynamic-project-activity-7425999213643116544-H9vg',
      assignedTo: 'proj-hvac-chiller',
      confidence: 'confirmed',
      evidence: {
        en: 'Supplied in the brief as a confirmed post for the HVAC Chiller Performance Analysis project.',
        ar: 'تم تزويدها في الملخص كمنشور مؤكد لمشروع تحليل أداء مبردات التكييف.',
      },
    },
    {
      originalUrl:
        'https://www.linkedin.com/posts/ahmed-hani-algohary_edex2025-egyptianministrydefense-minsitrymiliatryproduction-activity-7402415881483350016--6W7',
      assignedTo: 'activity-edex-2025',
      confidence: 'confirmed',
      evidence: {
        en: 'URL slug references "edex2025" and "egyptianministrydefense", matching the EDEX 2025 activity.',
        ar: 'يحتوي الرابط على "edex2025" و"egyptianministrydefense" وهو ما يطابق نشاط EDEX 2025.',
      },
    },
  ],

  unmatchedLinkedInLinks: [
    'https://lnkd.in/p/d3BTkf4s',
    'https://lnkd.in/p/dB6csMsM',
    'https://lnkd.in/p/d49zezPr',
    'https://lnkd.in/p/dyUmXjB2',
    'https://lnkd.in/p/dvQMnK6b',
    'https://lnkd.in/p/dM_B8pps',
    'https://lnkd.in/p/dC53i93f',
    'https://lnkd.in/p/dd-T4fFd',
    'https://www.linkedin.com/posts/ahmed-hani-algohary_engineering-mechatronics-industrialtraining-activity-7367908723140239361-4M_A',
    'https://www.linkedin.com/posts/ahmed-hani-algohary_%D8%AA%D8%B3%D8%B1%D9%86%D9%8A-%D9%85%D8%B4%D8%A7%D8%B1%D9%83%D8%A9-%D8%A3%D9%86%D9%86%D9%8A-%D8%AD%D8%B5%D9%84%D8%AA-%D8%B9%D9%84%D9%89-%D8%B4%D9%87%D8%A7%D8%AF%D8%A9-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9-activity-7360681990787923969-37P0',
  ],
};

// ============================================================
// DERIVED ANNUAL ACTIVITY DATA
// Computed programmatically from the arrays above so the chart
// and timeline can never drift from the source-of-truth data.
// ============================================================
export function getAnnualBreakdown(): import('../types').AnnualBreakdown[] {
  const years = Array.from(
    new Set([
      ...portfolioData.projects.map((p) => p.year),
      ...portfolioData.experience.map((e) => e.year),
      ...portfolioData.certificates.map((c) => c.year),
      ...portfolioData.activities.map((a) => a.year),
    ])
  ).sort((a, b) => a - b);

  return years.map((year) => {
    const projects = portfolioData.projects.filter((p) => p.year === year).length;
    const internships = portfolioData.experience.filter((e) => e.year === year).length;
    const certificates = portfolioData.certificates.filter((c) => c.year === year).length;
    const activities = portfolioData.activities.filter((a) => a.year === year).length;
    return {
      year,
      projects,
      internships,
      certificates,
      activities,
      total: projects + internships + certificates + activities,
    };
  });
}

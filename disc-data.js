const TEST_CONFIG = (function () {
  const QUESTIONS = [
    { no: 1, options: [
      { trait: 'S', leastTrait: 'S', text: 'Gampangan, Mudah setuju' },
      { trait: 'I', leastTrait: 'I', text: 'Percaya, Mudah percaya pada orang' },
      { trait: null, leastTrait: 'D', text: 'Petualang, Mengambil resiko' },
      { trait: 'C', leastTrait: 'C', text: 'Toleran, Menghormati' }
    ]},
    { no: 2, options: [
      { trait: 'C', leastTrait: null, text: 'Lembut suara, Pendiam' },
      { trait: 'D', leastTrait: 'D', text: 'Optimistik, Visioner' },
      { trait: null, leastTrait: 'I', text: 'Pusat Perhatian, Suka gaul' },
      { trait: 'S', leastTrait: 'S', text: 'Pendamai, Membawa Harmoni' }
    ]},
    { no: 3, options: [
      { trait: 'I', leastTrait: 'I', text: 'Menyemangati orang' },
      { trait: null, leastTrait: 'C', text: 'Berusaha sempurna' },
      { trait: null, leastTrait: 'S', text: 'Bagian dari kelompok' },
      { trait: 'D', leastTrait: null, text: 'Ingin membuat tujuan' }
    ]},
    { no: 4, options: [
      { trait: 'C', leastTrait: 'C', text: 'Menjadi frustrasi' },
      { trait: 'S', leastTrait: 'S', text: 'Menyimpan perasaan saya' },
      { trait: null, leastTrait: 'I', text: 'Menceritakan sisi saya' },
      { trait: 'D', leastTrait: 'D', text: 'Siap beroposisi' }
    ]},
    { no: 5, options: [
      { trait: 'I', leastTrait: null, text: 'Hidup, Suka bicara' },
      { trait: 'D', leastTrait: 'D', text: 'Gerak cepat, Tekun' },
      { trait: 'S', leastTrait: 'S', text: 'Usaha menjaga keseimbangan' },
      { trait: null, leastTrait: 'C', text: 'Usaha mengikuti aturan' }
    ]},
    { no: 6, options: [
      { trait: 'C', leastTrait: null, text: 'Kelola waktu secara efisien' },
      { trait: 'D', leastTrait: 'D', text: 'Sering terburu-buru, Merasa tertekan' },
      { trait: 'I', leastTrait: 'I', text: 'Masalah sosial itu penting' },
      { trait: 'S', leastTrait: 'S', text: 'Suka selesaikan apa yang saya mulai' }
    ]},
    { no: 7, options: [
      { trait: 'S', leastTrait: null, text: 'Tolak perubahan mendadak' },
      { trait: 'I', leastTrait: 'I', text: 'Cenderung janji berlebihan' },
      { trait: null, leastTrait: 'C', text: 'Tarik diri di tengah tekanan' },
      { trait: null, leastTrait: 'D', text: 'Tidak takut bertempur' }
    ]},
    { no: 8, options: [
      { trait: 'I', leastTrait: 'I', text: 'Penyemangat yang baik' },
      { trait: 'S', leastTrait: 'S', text: 'Pendengar yang baik' },
      { trait: 'C', leastTrait: 'C', text: 'Penganalisa yang baik' },
      { trait: 'D', leastTrait: 'D', text: 'Delegator yang baik' }
    ]},
    { no: 9, options: [
      { trait: 'D', leastTrait: 'D', text: 'Hasil adalah penting' },
      { trait: 'C', leastTrait: 'C', text: 'Lakukan dengan benar, Akurasi penting' },
      { trait: null, leastTrait: 'I', text: 'Dibuat menyenangkan' },
      { trait: null, leastTrait: 'S', text: 'Mari kerjakan bersama' }
    ]},
    { no: 10, options: [
      { trait: null, leastTrait: 'C', text: 'Akan berjalan terus tanpa kontrol diri' },
      { trait: 'D', leastTrait: 'D', text: 'Akan membeli sesuai dorongan hati' },
      { trait: 'S', leastTrait: 'S', text: 'Akan menunggu, Tanpa tekanan' },
      { trait: 'I', leastTrait: null, text: 'Akan mengusahakan yang kuinginkan' }
    ]},
    { no: 11, options: [
      { trait: 'S', leastTrait: null, text: 'Ramah, Mudah bergabung' },
      { trait: null, leastTrait: 'I', text: 'Unik, Bosan rutinitas' },
      { trait: 'D', leastTrait: 'D', text: 'Aktif mengubah sesuatu' },
      { trait: 'C', leastTrait: 'C', text: 'Ingin hal-hal yang pasti' }
    ]},
    { no: 12, options: [
      { trait: null, leastTrait: 'S', text: 'Non-konfrontasi, Menyerah' },
      { trait: 'C', leastTrait: null, text: 'Dipenuhi hal detail' },
      { trait: 'I', leastTrait: 'I', text: 'Perubahan pada menit terakhir' },
      { trait: 'D', leastTrait: 'D', text: 'Menuntut, Kasar' }
    ]},
    { no: 13, options: [
      { trait: 'D', leastTrait: 'D', text: 'Ingin kemajuan' },
      { trait: 'S', leastTrait: null, text: 'Puas dengan segalanya' },
      { trait: 'I', leastTrait: null, text: 'Terbuka memperlihatkan perasaan' },
      { trait: null, leastTrait: 'C', text: 'Rendah hati, Sederhana' }
    ]},
    { no: 14, options: [
      { trait: 'C', leastTrait: 'C', text: 'Tenang, Pendiam' },
      { trait: 'I', leastTrait: 'I', text: 'Bahagia, Tanpa beban' },
      { trait: 'S', leastTrait: null, text: 'Menyenangkan, Baik hati' },
      { trait: 'D', leastTrait: 'D', text: 'Tak gentar, Berani' }
    ]},
    { no: 15, options: [
      { trait: 'S', leastTrait: 'S', text: 'Menggunakan waktu berkualitas dengan teman' },
      { trait: 'C', leastTrait: null, text: 'Rencanakan masa depan, Bersiap' },
      { trait: 'I', leastTrait: 'I', text: 'Bepergian demi petualangan baru' },
      { trait: 'D', leastTrait: 'D', text: 'Menerima ganjaran atas tujuan yang dicapai' }
    ]},
    { no: 16, options: [
      { trait: null, leastTrait: 'D', text: 'Aturan perlu dipertanyakan' },
      { trait: 'C', leastTrait: null, text: 'Aturan membuat adil' },
      { trait: 'I', leastTrait: 'I', text: 'Aturan membuat bosan' },
      { trait: 'S', leastTrait: 'S', text: 'Aturan membuat aman' }
    ]},
    { no: 17, options: [
      { trait: null, leastTrait: 'C', text: 'Pendidikan, Kebudayaan' },
      { trait: 'D', leastTrait: 'D', text: 'Prestasi, Ganjaran' },
      { trait: 'S', leastTrait: 'S', text: 'Keselamatan, keamanan' },
      { trait: 'I', leastTrait: null, text: 'Sosial, Perkumpulan kelompok' }
    ]},
    { no: 18, options: [
      { trait: 'D', leastTrait: 'D', text: 'Memimpin, Pendekatan langsung' },
      { trait: null, leastTrait: 'I', text: 'Suka bergaul, Antusias' },
      { trait: null, leastTrait: 'S', text: 'Dapat diramal, Konsisten' },
      { trait: 'C', leastTrait: null, text: 'Waspada, Hati-hati' }
    ]},
    { no: 19, options: [
      { trait: 'D', leastTrait: 'D', text: 'Tidak mudah dikalahkan' },
      { trait: 'S', leastTrait: null, text: 'Kerjakan sesuai perintah, Ikut pimpinan' },
      { trait: 'I', leastTrait: 'I', text: 'Mudah terangsang, Riang' },
      { trait: null, leastTrait: 'C', text: 'Ingin segalanya teratur, Rapi' }
    ]},
    { no: 20, options: [
      { trait: 'D', leastTrait: null, text: 'Saya akan pimpin mereka' },
      { trait: 'S', leastTrait: 'S', text: 'Saya akan melaksanakan' },
      { trait: 'I', leastTrait: 'I', text: 'Saya akan meyakinkan mereka' },
      { trait: 'C', leastTrait: null, text: 'Saya dapatkan fakta' }
    ]},
    { no: 21, options: [
      { trait: 'S', leastTrait: 'S', text: 'Memikirkan orang dahulu' },
      { trait: 'D', leastTrait: 'D', text: 'Kompetitif, Suka tantangan' },
      { trait: 'I', leastTrait: 'I', text: 'Optimis, Positif' },
      { trait: null, leastTrait: 'C', text: 'Pemikir logis, Sistematik' }
    ]},
    { no: 22, options: [
      { trait: 'S', leastTrait: 'S', text: 'Menyenangkan orang, Mudah setuju' },
      { trait: null, leastTrait: 'I', text: 'Tertawa lepas, Hidup' },
      { trait: 'D', leastTrait: 'D', text: 'Berani, Tak gentar' },
      { trait: 'C', leastTrait: 'C', text: 'Tenang, Pendiam' }
    ]},
    { no: 23, options: [
      { trait: null, leastTrait: 'D', text: 'Ingin otoritas lebih' },
      { trait: 'I', leastTrait: null, text: 'Ingin kesempatan baru' },
      { trait: 'S', leastTrait: 'S', text: 'Menghindari konflik' },
      { trait: null, leastTrait: 'C', text: 'Ingin petunjuk yang jelas' }
    ]},
    { no: 24, options: [
      { trait: null, leastTrait: 'S', text: 'Dapat diandalkan, Dapat dipercaya' },
      { trait: 'I', leastTrait: 'I', text: 'Kreatif, Unik' },
      { trait: 'D', leastTrait: null, text: 'Garis dasar, Orientasi hasil' },
      { trait: 'C', leastTrait: null, text: 'Jalankan standar yang tinggi, Akurat' }
    ]}
  ];

// Data ini diekstrak otomatis dari file Excel "Test_DISC.xlsx" milik user
// (sheet Def + Result), mencakup 40 kode kepribadian DISC lengkap dengan
// daftar sifat, deskripsi, dan job match — serta logika skoring & scaling aslinya.

const DISC_CODES = [
  {
    pattern: "C", name: "LOGICAL THINKER",
    traits: ["Pendiam", "Anti Kritik", "Perfeksionis", "Cenderung Santai", "Detail", "Empati", "Rapi", "Organized", "Kaku pada Metode & Prosedur"],
    career: "Planner (any function), Engineer (Installation, Technical), Technical/Research (Chemist Technician), Academic, Statistician, Government Worker, IT Management, Prison Officer, Quality Controller.",
    desc: "Seorang yang praktis, cakap dan unik. Ia orang yang mampu menilai diri sendiri dan kritis terhadap dirinya dan orang lain. Ia menyukai hal yang detil dan logis; secara alamiah ia sangat analitis. Karena menyimpan informasi, ia meneliti isu berulang-ulang kali. Ia cenderung malu dan tertutup; ia hati-hati dalam membuat keputusan yang berdasarkan pada logika, bukan emosi, selalu menggunakan pertanyaan \"bagaimana dan mengapa\". Ia mengerjakan sesuatu dengan sistematis dan akurat. Ia rapi dan terorganisir sebab ia merasa bahwa keadaan berantakan sama dengan mutu yang rendah; demikian juga, rapi dan teratur merupakan mutu yang tinggi. Sangat teliti dalam segala sesuatu seperti halnya dalam pekerjaan dan penggunaan waktunya. Ia merencanakan dan mengorganisir semua sisi kehidupannya. Kelambanan sangat mengganggunya dan tak dapat ditolerir.",
    test: function(d,i,s,c) { return (d<=0) && (i<=0) && (s<=0) && (c>0); }
  },
  {
    pattern: "D", name: "ESTABLISHER",
    traits: ["Individualis", "Ego Tinggi, Kurang Sensitif", "Kurang Pertimbangan", "Efektif", "High Motivation", "Bersemangat Tinggi", "Percaya Diri, cenderung Nekat", "Kreatif", "Terlalu Dominan", "Agresif", "Terlalu Dinamis", "Penuh Ambisi"],
    career: "Attorney, Researcher, Sales Representative, Planning Consultant, Transport Personnel, Production (Director, Manager, Supervisor), Technologist, Strategic Planning, Trouble Shooting, Marketing Services, Consultant, Engineering (Director, Manager, Supervisor) and Self-Employment.",
    desc: "Memiliki rasa ego yang tinggi dan cenderung invidualis dengan standard yang sangat tinggi. Ia lebih suka menganalisa masalah sendirian daripada bersama orang lain. Rasa egoisnya yang kuat membuatnya tidak nyaman di bawah kendali orang lain; ia lebih suka menjadi \"boss\" dan menetapkan standard tinggi baik untuk dirinya maupun orang lain. Ia menghindari sesuatu yang biasa-biasa dan cenderung mencari tantangan yang baru. Ia menyukai petualangan dan kadang-kadang beralih ke dalam petualangan baru sebelum mempertimbangkannya secara menyeluruh. Mampu memimpin situasi dan orang lain dalam rangka mencapai sasarannya; ia ingin selalu unggul dalam persaingan dengan taruhan apapun.",
    test: function(d,i,s,c) { return (d>0) && (i<=0) && (s<=0) && (c<=0); }
  },
  {
    pattern: "D / C-D", name: "DESIGNER",
    traits: ["Sensitif", "Kurang Cepat", "Anti Tekanan", "Terlalu Mandiri", "Kurang Percaya Orang Lain", "Anti Kritik", "Dingin", "Kreatif", "Result Oriented", "Suka Tantangan"],
    career: "Engineering (Management, Research, Design), Research (R&D), Planning, Chemist, Accountancy, Specialist, Finance, Technician, Quality Control, Production Planning/Management, Design Engineer, Bookkeeper, Chemist Technician, Safety Officer, Librarian.",
    desc: "Seorang yang sangat berorientasi pada tugas dan sensitif pada permasalahan. Ia lebih mempedulikan tugas yang ada dibanding orang-orang di sekitarnya, termasuk perasaan mereka. Sangat kukuh/keras dan mempunyai pendekatan yang efektif dalam pemecahan masalah. Oleh karena sifat alamiah dan keinginannya akan hasil yang terukur, Akan tampak dingin, tidak berperasaan dan menjaga jarak. Ia membuat keputusan berdasar pada fakta, bukan emosi. Cenderung pendiam dan tidak mudah percaya.",
    test: function(d,i,s,c) { return (d>0) && (i<=0) && (s<=0) && (c>0) && (c>=d); }
  },
  {
    pattern: "D / I-D", name: "NEGOTIATOR",
    traits: ["Suka Bergaul", "Anti Rutin", "Aktif", "Terlalu Percaya Diri", "Agresif", "Optimis", "Kurang Detail", "Result Oriented"],
    career: "Sales and Marketing (Directing, Manager, Person), Public Relations, Recruitment Consultant, Politician, Director, Self-Employed, Hotelier, Travel Agent, Trainer, Hospitality, Lawyer, Solicitor, Motivators, Team Leader, Politician, Trainer, Lecturer, Theatrical Agent, General Management and Leading People, Attorney.",
    desc: "Merupakan seorang pemimpin integratif yang bekerja dengan dan melalui orang lain.  Ia ramah, memiliki perhatian yang tinggi akan orang dan juga mempunyai kemampuan untuk memperoleh hormat dan penghargaan dari berbagai tipe orang.  Melakukan pekerjaannya dengan cara yang bersahabat, baik dalam mencapai sasarannya maupun meyakinkan pandangannya kepada orang lain.  Ia tidak begitu memperhatikan hal-hal kecil.  Kadang bertindak sesuai dengan kata hati/impulsif, terlalu antusias dan sangat banyak bicara.  Ia terlalu berlebihan menilai kemampuannya dalam memotivasi atau mengubah perilaku orang lain.  Mencari kebebasan dari rutinitas, menginginkan otoritas/wewenang dan juga prestise.  Ia menginginkan aktivitas yang bervariasi dan bekerja lebih efisien jika data-data analitis disediakan oleh orang lain.  Menginginkan penugasan yang mengutamakan mobilitas dan tantangan.",
    test: function(d,i,s,c) { return (d>0) && (i>0) && (s<=0) && (c<=0) && (i>=d); }
  },
  {
    pattern: "D / I-D-C", name: "CONFIDENT & DETERMINED",
    traits: ["Pandai Memilih Orang", "Leader", "Good Interpersonal Skill", "Dominan", "Agresif", "Perfeksionis", "Good Communication Skill", "Aktif", "Need Recognition n Reward", "Kurang Peduli pada Aturan", "Terburu-buru"],
    career: "Specialist/Technical Selling (Computer, Finance, Engineer and others, Chef, Technical/Capital Equipment Selling), Financial (Manager, Specialist), Computer Hardware Sales, Engineering (Manager, Designer, Buyer, Draughtsman), Project Engineer, Sales Engineer, Consultant, Trainer, Lecturer, Hotelier, Insurance, Mortgage and Finance Sales, Teacher, Travel Agent, Personnel and Marketing Services.",
    desc: "Sangat berorientasi terhadap tugas dan juga menyukai orang.  Ia sangat baik dalam menarik orang/recruiting.  Seorang yang bersahabat, tetapi menyukai keadaan di mana tugas-tugas harus dilakukan dengan benar.  Ia kadang-kadang tampak dingin dan mendominasi.  Ia juga bisa sangat fokus pada tugas dan melupakan orang-orang di sekitarnya.  Sangat mengharapkan orang-orang terlibat dalam proyeknya, tetapi tidak memperdulikan apa yang diinginkan oleh orang-orang itu.  Ia perlu mendengar dan memikirkan  apa yang menjadi keinginan orang di sekitarnya, khususnya kesempatan untuk mencoba.  Ia sangat membutuhkan persetujuan sosial seperti halnya ia sangat mempercayai orang lain.  Karena itu, ia kadang-kadang berlebihan dalam menilai orang dan kemampuannya.  Ia tampak tidak konsisten dan tidak karuan karena ketidakmampuannya berkonsentrasi dan fokus dalam waktu yang lama.  Perlu belajar untuk secara sungguh-sungguh mendengarkan orang-orang di sekitarnya dari pada selalu berpikir apa yang ingin dikatakan.  Ia mempunyai kemampuan logika yang tinggi ketika ia mau menggunakannya.",
    test: function(d,i,s,c) { return (d>0) && (i>0) && (s<=0) && (c>0) && (i>=d>=c); }
  },
  {
    pattern: "D / I-D-S", name: "REFORMER",
    traits: ["Mudah Bergaul", "Leader", "Sadar Diri", "Butuh Pujian & Penghargaan", "Cepat Percaya Orang", "Mudah Simpati & Empati", "Motivator", "Optimis & Positif", "Anti Aturan", "Kurang Detail", "Terlalu Selektif"],
    career: "Hotelier, Customer Service, Complaints Manager, Recruiting Agent, Sales (Manager/Person), Marketing Services, Public Relations, Politician, Computer Software Sales, Lecturer, Engineering and Production (Manager/Supervisor).",
    desc: "Seorang yang bersahabat dan sosial; ia juga suka mengendalikan situasi dan menjadi pemimpin.  Ia menyelesaikan tugasnya melalui keterampilan sosialnya; ia peduli dan menerima orang lain.  Ia berkonsentrasi pada tugas yang ada di tangannya sampai selesai dan akan minta bantuan orang lain jika perlu.  Ia menyadari keterbatasannya dan meminta bantuan jika memerlukannya.  Ia disukai dan orang ingin menolongnya.  Senang membagi kebanggaannya dengan kelompok; ia seorang team player tetapi juga team leader.  Menginginkan popularitas dan pengakuan.",
    test: function(d,i,s,c) { return (d>0) && (i>0) && (s>0) && (c<=0) && (i>=d>=s); }
  },
  {
    pattern: "D / I-S-D", name: "MOTIVATOR",
    traits: ["Leader (Kelompok Kecil)", "Supporter", "Sosialisasi Baik", "Butuh Ketegasan", "Butuh Pujian & Penghargaan", "Kurang Detail", "Agak Kaku"],
    career: "Hotelier, Community Counseling, Customer Service, Complaints Manager, Community Work, Recruitment Consultant, Hospitality, Teacher, Telemarketing, Production Manager, Complaints Manager, Recruiting Agent, Sales (Manager/Person), Marketing Services, Public Relations, Politician, Call Centre Manager, Lecturer, Engineering and Production (Manager/Supervisor).",
    desc: "Seorang yang menampilkan gaya bersemangat ketika termotivasi pada sasaran.  Ia lebih suka memimpin atau melibatkan diri, walaupun ia juga mau melayani sebagai pembantu.  Ia membutuhkan pengakuan dan penghargaan serta senang pada peran pendukung.  Ia peduli kepada orang-orang di sekitarnya dan akan mempertimbangkan perasaan orang lain dalam proses pengambilan keputusan.  Menampilkan keterampilan berhubungan dan berkomunikasi dengan sangat baik.  Ia akan berusaha keras menyelesaikan tugas dengan cepat dan efisien.",
    test: function(d,i,s,c) { return (d>0) && (i>0) && (s>0) && (c<=0) && (i>=s>=d); }
  },
  {
    pattern: "D / S-D-C / S-C-D", name: "INQUIRER",
    traits: ["Full Self Control", "Sabar", "Penuh Pertimbangan", "Good Interpersonal", "Selektif", "Lambat Adaptasi", "Inisiatif kurang", "Result Oriented", "Kaku dan Keras Kepala", "Good Service", "Kurang dlm hal Managerial"],
    career: "Directing, Managing or Supervising (in Engineering, Accountancy, Research and Development and Computing disciplines), Research Manager, Scientific Work, Accountant, Administration, Project Engineer, Draughtsman, Designer, Analyst, Finance, Chemist, Technical Service Support, Flight Attendant, Technician, Service Engineer, Service Manager, Security Specialist.",
    desc: "Seorang yang sabar, terkontrol dan suka menggali fakta dan jalan keluar.  Ia tenang dan ramah.  Ia merencanakan pekerjaan dengan hati-hati, tetapi agresif, menanyakan sesuatu serta mengumpulkan data pendukung.  Kemudian ia bekerja dengan konsisten dengan arahan yang benar.  Menjadi individu yang penuh perhatian, rendah hati, dan ia berhubungan baik dengan hampir semua orang.  Seorang yang konsisten dan suka menolong. People skill darinya melebihi orientasi tugasnya.",
    test: function(d,i,s,c) { return (d>0) && (i<=0) && (s>0) && (c>0) && (s>=d) && (d>=c); }
  },
  {
    pattern: "D-I", name: "PENGAMBIL KEPUTUSAN",
    traits: ["Pekerja Keras", "Leader", "Banyak Minat", "Dingin / Task Oriented", "Kurang Pergaulan", "Kontrol Emosi Kurang", "Suka Tantangan", "Cepat Bosan", "Anti Aturan", "Kurang Detail", "Kurang Peduli Wewenang", "Argumentatif"],
    career: "General Management (Directing/Managing/Supervising, Public Relations, Business Management, Conflict Resolution, Industrial Relations, Business Consultant, Trouble Shooting, Sales and Sales Management, Marketing, Promoting, Production (Director, Manager, Supervisor), Consultancy, Publishing, Sales Executive, Promotional Work, Brokers, Self-Employment, Advertising, Lecturing, Dealing/Broking.",
    desc: "Tidak basa-basi dan tegas, ia cenderung merupakan seorang invidualis yang kuat. Ia berpandangan jauh ke depan, progresif dan mau berkompetisi untuk mencapai sasaran. DI seorang yang selalu ingin tahu dan mempunyai minat dengan cakupan yang luas. Ia seorang yang logis, kritis dan tajam dalam memecahkan masalah. Sering kali ia tampak imajinatif. Ia mempunyai kemampuan memimpinan yang baik. Ia kadang tampak keras kepala atau dingin karena orientasi dan prioritasnya pada tugas cenderung melebihi orientasi terhadap sesama. Ia mencanangkan standard tinggi pada dirinya dan akan sangat kritis ketika standard ini tidak dicapai. Ia juga menempatkan standard tinggi pada orang-orang di sekitarnya, serta mengutamakan kesempurnaan. Ia menginginkan otoritas yang jelas dan menyukai tugas-tugas baru.",
    test: function(d,i,s,c) { return (d>0) && (i>0) && (s<=0) && (c<=0) && (d>=i); }
  },
  {
    pattern: "D-I-S", name: "DIRECTOR",
    traits: ["Pengelola", "Enerjik", "Kurang Detail", "Mudah Bosan", "Agresif", "Arogan", "Kurang Focus"],
    career: "Engineering and Production (Directing, Managing, Supervising), Sales, Sales Management, Service Manager, Distribution, Public Relations, Office Management, Account Manager, Customer Service, Retail Manager, IT, Lecturer, Logistics, Manager-General, National Accounts Manager, Teacher, Projects Manager.",
    desc: "Fokus pada penyelesaian pekerjaan dan menunjukkan penghargaan yang tinggi kepada orang lain.  Ia memiliki kemampuan untuk menggerakkan orang dan pekerjaan dikarenakan keterampilannya berpikir ke depan dan hubungan antar manusia.  Tidak berorientasi detil, ia fokus pada target secara keseluruhan dengan menyerahkan hal detil kepada orang lain.  Enerjik dan sosial, ia mampu memotivasi orang lain sambil menyelesaikan pekerjaannya.  Ia menampilkan rasa percaya diri dan mampu meyakinkan orang lain.  Sekali ia memutuskan sesuatu, ia akan terus mengerjakannya dan bertahan sampai selesai.",
    test: function(d,i,s,c) { return (d>0) && (i>0) && (s>0) && (c<=0) && (d>=i>=s); }
  },
  {
    pattern: "D-S", name: "SELF-MOTIVATED",
    traits: ["Objektif & Analitis", "Mandiri", "Good Planner", "Komitmen thd Target", "Menghindari Konflik"],
    career: "Engineering and Production (Directing, Managing, Supervising), Project Management, Researcher, Chemist (R&D), Planner, Engineering (R&D), Systems Analyst, Commercial Planner, Computer Engineer, Programmer, IT, Other computer-related disciplines, Technical Trouble Shooting and Directing, Lawyer, Solicitor, Development Engineer, Work Study, Barrister, Attorney.",
    desc: "Seorang yang obyektif dan analitis.  Ia ingin terlibat dalam situasi, dan ia juga ingin memberikan bantuan dan dukungan kepada orang yang ia hormati.  Secara internal termotivasi oleh target pribadi, ia berorientasi terhadap pekerjaannya tapi juga menyukai hubungan dengan sesama.  Karena determinasinya yang kuat, ia sering berhasil dalam berbagai hal; karakternya yang tenang, stabil dan daya tahannya yang tinggi memiliki kontribusi dalam keberhasilannya.  Ulet dalam memulai pekerjaan. Ia akan berusaha keras untuk mencapai sasarannya.  Seorang yang mandiri dan cermat serta memiliki tindak lanjut yang baik.",
    test: function(d,i,s,c) { return (d>0) && (i<=0) && (s>0) && (c<=0) && (d>=s); }
  },
  {
    pattern: "I / C-I-S", name: "MEDIATOR",
    traits: ["Loyal", "Tight Scheduled", "Curious", "Sensitif", "Good Communication Skill", "Good Analitical Think", "Good Interpersonal Skill", "Cepat Beradaptasi", "Anti Kritik", "Not Leader", "Work/Play Conflict"],
    career: "Engineering and Production (Supervisor, Installer, Technician, Service and Design), Research (Supervisor, Chemist, Lab. Technician), Trainer, Finance (Supervisor, Accountant, Advisor), Public Relations, Administration, Office Administrator, Market Analyst, System Analyst, Programmer, Selling (Technical/Service).",
    desc: "Merupakan individu yang berorientasi pada orang, ia mampu menggabungkan ketepatan dan loyalitas.  Ia cenderung peka dan mempunyai standard yang tinggi.  Ia menginginkan stabilitas dan berorientasi terhadap sasaran.  Ia menginginkan pengakuan sosial dan perhatian pribadi.  Ia bersahabat, antusias, informal, banyak bicara, dan mungkin sangat mencemaskan apa yang dipikirkan oleh orang lain.  Ia menolak agresi, dan mengharapkan suasana harmonis.  Ia cenderung cukup cerdas dalam berbagai hal. Ia merupakan pencari fakta yang sangat baik dan akan membuat keputusan yang baik setelah mengumpulkan fakta dan data pendukung.",
    test: function(d,i,s,c) { return (d<=0) && (i>0) && (s>0) && (c>0) && (c>=i>=s); }
  },
  {
    pattern: "I / C-S-I", name: "PRACTITIONER",
    traits: ["Perfeksionis", "Quality Oriented", "Scheduled", "Anti Kejutan", "Good Interpersonal Skill", "Terlalu Detail", "Sistematis", "Kaku / Tidak fleksibel", "Monoton"],
    career: "Engineering and Production (Supervisor, Installer, Technician, Service and Design), Research (Supervisor, Chemist), Trainer, Finance (Manager, Supervisor, Accountant, Advisor), Public Relations-Administration, Purchasing, Chemist Research, Office Administrator, Computer Programmer, Market Analyst, System Analyst, Programmer, Research and Development Supervisor, Laboratory Technician, Legal, Selling (Technical/Service).",
    desc: "Merupakan individu yang berorientasi pada orang, ia mampu menggabungkan ketepatan dan loyalitas.  Ia cenderung peka dan mempunyai standard yang tinggi.  Ia menginginkan stabilitas dan berorientasi terhadap sasaran.  Ia menginginkan pengakuan sosial dan perhatian pribadi.  Bersahabat, antusias, informal, banyak bicara, dan mungkin sangat mencemaskan apa yang dipikirkan oleh orang lain.  Ia menolak agresi dan mengharapkan suasana harmonis.  Ia cenderung cukup cerdas dalam berbagai hal. Ia merupakan pencari fakta yang sangat baik dan akan membuat keputusan yang baik setelah mengumpulkan fakta dan data pendukung.",
    test: function(d,i,s,c) { return (d<=0) && (i>0) && (s>0) && (c>0) && (c>=s>=i); }
  },
  {
    pattern: "I-S-C / I-C-S", name: "RESPONSIVE & THOUGHTFUL",
    traits: ["High Energy", "Good Communication Skill", "To The Point", "Sensitif", "Banyak Bicara", "Need Recognation", "Need Socialism", "Anti thd Kritik", "Terlalu banyak bersosialisasi", "Leadership kurang", "Kurang Fokus", "Anti Deadline"],
    career: "Actors, Chef, Personnel, Welfare, Broadcasting, Training, Attorney, Teaching, Accounting, Technical Instructor, Accounting-General, Accounts Supervisor, Customer Services, Public Relations, Artist, Hotelier, Demonstrator, Florist/Floral Designer, Engineering (Sales, Service, Project, Draughtsman, Designer), Graphic Designer, Specialist (Soft/Services), Selling, Purchasing, Singers, Technical Instructor, Personnel Management, Politician, Supervising (Engineering, Production, Accounts), Administration Work, Sales Engineer, Secretarial, Industrial Relations Specialist.",
    desc: "Merupakan individu yang berorientasi pada orang dan lancar berkomunikasi serta loyal.  Ia cenderung sensitif dan mempunyai standard yang tinggi.  Keputusannya dibuat berdasarkan fakta dan data pendukung.  Ia sepertinya tidak bisa diam.  Ia perlu untuk lebih terus terang dan jangan terlalu subyektif.  Ia butuh pengakuan sosial dan perhatian pribadi; ia dapat cepat akrab dengan orang lain.  Ia bersahabat, antusias, informal, banyak bicara dan terlalu khawatir terhadap apa yang dipikirkan orang.  Ia menguasai banyak hal.  Ia ingin diterima sebagai anggota kelompok dan ingin mengetahui secara pasti apa yang diharapkan darinya sebelum ia memulai proyek baru.",
    test: function(d,i,s,c) { return (d<=0) && (i>0) && (s>0) && (c>0) && (i>=s) && (i>=c); }
  },
  {
    pattern: "S", name: "SPECIALIST",
    traits: ["Stabil & Konsisten", "Terkendali", "Nyaman di Belakang Layar", "Sabar", "Loyal", "Sulit Adaptasi", "Process Oriented", "Teguh", "Need for Peace", "Anti Perubahan", "Sulit Menentukan Prioritas"],
    career: "Administrative Work, Engineering and Production areas (Sales, Services, Project, Painter, Plumber, Draughtsman, Designer, Operative), Chef, Accounting, Telemarketing/Tele-Sales, Research and Development, Administrator, Florist/Floral Designer, Retail-General, Sales-General, Accounting-General, Service-General, Landscape Gardener.",
    desc: "Merupakan individu konsisten yang berusaha menjaga lingkungan/suasana yang tidak berubah.  Ia bekerja dengan baik bersama orang-orang dengan berbagai kepribadian karena perilakunya yang terkendali dan rendah hati.  Sabar, loyal dan suka menolong.  Persahabatan dikembangkannya dengan lambat dan selektif.  Ia tidak bosan dengan rutinitas dan sangat baik bekerja dengan petunjuk dan peraturan yang jelas. Ia mengharapkan bantuan dan supervisi pada saat mengawali proyek baru.  Ia butuh waktu untuk menyesuaikan diri dengan perubahan dan sungkan menjalankan \"cara-cara lama mengerjakan sesuatu\".  Ia akan menghindari konfrontasi dan berusaha sekuat tenaga memendam perasaannya.",
    test: function(d,i,s,c) { return (d<=0) && (i<=0) && (s>0) && (c<=0); }
  },
  {
    pattern: "S / C-S", name: "PERFECTIONIST",
    traits: ["Detail & Teliti", "Butuh Situasi Stabil", "Sistematik & Prosedural", "Menghindari Konflik", "Anti Kritik", "Lambat Memutuskan", "Sulit Adaptasi", "Pendendam", "Anti Perubahan"],
    career: "Researcher (Technician, Chemist, Quality Control), Engineer (Project, Draughtsman, Armed Forces, Designer), Statistician, Surveyor, Optician, Medical Specialist, Health Care, IT Management, Planner, Technical Writing, Production, Dentist, Quality Control, Planning, Dental Technician, Accounting, Computer Programmer, Psychologist, Surgeon, Architect, Medical Specialist.",
    desc: "Berpikir sistematis dan cenderung mengikuti prosedur dalam kehidupan pribadi dan pekerjaannya.  Teratur dan memiliki perencanaan yang baik, ia teliti dan fokus pada detil.  Bertindak dengan penuh kebijaksanaan, diplomatis dan jarang menentang rekan kerjanya dengan sengaja.  Ia sangat berhati-hati, sungguh-sungguh mengharapkan akurasi dan standard tinggi dalam pekerjaannya.  Ia cenderung terjebak dalam hal detil, khususnya jika harus memutuskan.  Menginginkan adanya petunjuk standard pelaksanaan kerja dan tanpa perubahan mendadak.",
    test: function(d,i,s,c) { return (d<=0) && (i<=0) && (s>0) && (c>0) && (c>=s); }
  },
  {
    pattern: "S-C", name: "PEACEMAKER, RESPECTFULL & ACCURATE",
    traits: ["Sulit Beradaptasi", "Anti Kritik", "Pendendam", "Sukar Berubah", "Detail", "Empati", "Memikirkan Dampak ke Orang Lain", "Terlalu Mendalam dalam Berpikir", "Concern ke Data dan Fakta", "Introvert", "Loyal"],
    career: "Office (Manager, Supervisor, Person), Chief Clerk, General Administrator, Production Supervisor, Planner, Accountant, Research and Development, Flight Attendant, Engineering (Project Manager, Supervisor, Technician), Computer Programmer, Draughtsman, Soft/Service Selling, Doctor, Cashier, Receptionist, Data Entry, Planner, Word Processing, Property Manager, Database Administrator, Health Care, Statistician, Nursing-Administration, Company Secretary, System Analyst, Programmer, Statistician, Accounting-General, Security Specialist.",
    desc: "Ia adalah orang yang baik secara alamiah dan sangat berorientasi detil.  Ia peduli dengan orang-orang di sekitarnya dan mempunyai kualitas yang membuatnya sangat teliti dalam penyelesaian tugas.  Ia mempertimbangkan sekelilingnya dengan hati-hati sebelum membuat keputusan untuk melihat pengaruhnya pada mereka; saat tertentu ia terlalu hati-hati.  Jika ia merasa seseorang memanfaatkan situasi, ia akan memperlambat kerjanya sehingga dapat mengamati apa yang sedang berlangsung di sekitarnya.",
    test: function(d,i,s,c) { return (d<=0) && (i<=0) && (s>0) && (c>0) && (s>=c); }
  },
  {
    pattern: "D-C", name: "CHALLENGER",
    traits: ["Seorang yang tekun", "Sensitif terhadap permasalahan", "Mempunyai keputusan yang kuat", "Kreatif  dalam memecahkan masalah", "Memiliki reaksi yang cepat", "Mampu mencari solusi permasalahan", "Banyak memberikan ide-ide.", "Usaha yang keras pada ketepatan", "Cenderung perfeksionis"],
    career: "Engineering (Management, Research, Design), Actuaries, Research (R&D), Planning, Chemist, Hospital Supervisor, Industrial Marketing, Investment Banking, Medical Administrator, Mortgage Brokers, Accountancy, Fund Management, Specialist Finance, Quality Control and Specialist work in any area where knowledge and experience is available, Production, Financial Services, Technical Management, Project Leader, Matron, Strategic Planning, Industrial Marketing.",
    desc: "Seorang yang sensitif terhadap permasalahan, dan memiliki kreativitas yang baik dalam memecahkan masalah. Ia dapat menyelesaikan tugas-tugas penting dalam waktu singkat karena mempunyai keputusan yang kuat. Seorang yang tekun dan memiliki reaksi yang cepat.  Ia akan meneliti dan mengejar semua kemungkinan yang ada dalam mencari solusi permasalahan.  Ia banyak memberikan ide-ide dengan berfokus pada pekerjaan. Usaha yang keras pada ketepatan akan mengimbangi keinginannya pada hasil yang terukur.  Ia cenderung perfeksionis dan dapat juga memperlambat pengambilan keputusan karena keinginannya untuk menentukan pilihan yang terbaik.",
    test: function(d,i,s,c) { return (i<=0) && (s<=0) && (d>0) && (c>0) && (d>=c); }
  },
  {
    pattern: "D-I-C", name: "CHANCELLOR",
    traits: ["Seorang yang ramah secara alami", "Menggabungkan kesenangan dengan pekerjaan", "Menyukai hubungan dengan sesama", "Menikmati interaksi dengan sesama", "Dapat mengerjakan hal-hal detil", "Ingin melakukan segala sesuatu dengan tepat", "Menilai orang dan tugas secara hati-hati", "Sering melalaikan perencanaan yang seksama", "Mudah beralih kepada proyek-proyek baru"],
    career: "Technical/Scientific (Directing, Management, Supervision), Engineering, Finance, Production Planning, Personnel Disciplines, Self-Employment, Credit Manager, Planner, Fund Management, Computer Hardware/Software Sales, IT, Business Consultant, Banking, Logistics, Lecturing, Work Study, Film Director, Transport, Consultancy, Industrial Relations and Computers (Selling, Software, Systems Analyst) and General Manager.",
    desc: "Ia menggabungkan antara kesenangan dengan pekerjaan/bisnis ketika melakukan sesuatu. Ia kelihatan menyukai hubungan dengan sesama tetapi juga dapat mengerjakan hal-hal detil. Ia ingin melakukan segala sesuatu dengan tepat, dan ia akan menyelesaikan tugasnya untuk meyakinkan ketepatan dan kelengkapannya. Seorang yang ramah secara alami dan menikmati interaksi dengan sesama, akan tetapi ia akan juga menilai orang dan tugas secara hati-hati; persahabatannya akan bergeser sesuai dengan dorongan hatinya pada orang lain di sekitarnya. Ia sering melalaikan perencanaan yang seksama dan akan beralih ke pada proyek-proyek baru tanpa pertimbangan yang menyeluruh.",
    test: function(d,i,s,c) { return (d>0) && (i>0) && (c>0) && (s<=0) && (d>=i>=c); }
  },
  {
    pattern: "D-S-I", name: "DIRECTOR",
    traits: ["Seorang yang obyektif dan analitis", "Ingin terlibat dalam situasi", "Ingin memberikan bantuan dan dukungan", "Termotivasi oleh target pribadi", "Berorientasi terhadap pekerjaannya", "Menyukai hubungan dengan sesama", "Mempunyai determinasi yang kuat", "Karakternya tenang", "Stabil dan daya tahannya tinggi", "Ulet dalam memulai pekerjaan", "Berusaha keras mencapai sasarannya", "Mandiri dan cermat"],
    career: "Engineering and Production (Directing, Managing, Supervising), Sales, Sales Management, Service Manager, Distribution, Public Relations, Creative Designer, Office Management, Chief Engineer, Business Consultant, Chief Financial Officer, Customer Service, National Accounts Manager, Chief Accountant, Lecturer, Projects Manager, Research Planning, Human Resources, Scientific Work, Security Specialist, Solicitor, Planner, Production Administrator.",
    desc: "Seorang yang obyektif dan analitis.  Ia ingin terlibat dalam situasi, dan ia juga ingin memberikan bantuan dan dukungan kepada orang yang ia hormati.  Secara internal termotivasi oleh target pribadi, ia berorientasi terhadap pekerjaannya tapi juga menyukai hubungan dengan sesama.  Karena determinasinya yang kuat, ia sering berhasil dalam berbagai hal; karakternya yang tenang, stabil dan daya tahannya yang tinggi memiliki kontribusi dalam keberhasilannya.  Ulet dalam memulai pekerjaan. Ia akan berusaha keras untuk mencapai sasarannya.  Seorang yang mandiri dan cermat serta memiliki tindak lanjut yang baik.",
    test: function(d,i,s,c) { return (d>0) && (s>0) && (i>0) && (c<=0) && (d>=s>=i); }
  },
  {
    pattern: "D-S-C", name: "Director",
    traits: ["Seorang yang obyektif dan analitis", "Ingin terlibat dalam situasi", "Ingin memberikan bantuan dan dukungan", "Termotivasi oleh target pribadi", "Berorientasi terhadap pekerjaannya", "Menyukai hubungan dengan sesama", "Mempunyai determinasi yang kuat", "Karakternya tenang", "Stabil dan daya tahannya tinggi", "Ulet dalam memulai pekerjaan", "Berusaha keras mencapai sasarannya", "Mandiri dan cermat"],
    career: "Engineering and Production (Directing, Managing, Supervising), Sales, Sales Management, Service Manager, Distribution, Public Relations, Creative Designer, Office Management, Chief Engineer, Business Consultant, Chief Financial Officer, Customer Service, National Accounts Manager, Chief Accountant, Lecturer, Projects Manager, Research Planning, Human Resources, Scientific Work, Security Specialist, Solicitor, Planner, Production Administrator.",
    desc: "Seorang yang obyektif dan analitis.  Ia ingin terlibat dalam situasi, dan ia juga ingin memberikan bantuan dan dukungan kepada orang yang ia hormati.  Secara internal termotivasi oleh target pribadi, ia berorientasi terhadap pekerjaannya tapi juga menyukai hubungan dengan sesama.  Karena determinasinya yang kuat, ia sering berhasil dalam berbagai hal; karakternya yang tenang, stabil dan daya tahannya yang tinggi memiliki kontribusi dalam keberhasilannya.  Ulet dalam memulai pekerjaan. Ia akan berusaha keras untuk mencapai sasarannya.  Seorang yang mandiri dan cermat serta memiliki tindak lanjut yang baik.",
    test: function(d,i,s,c) { return (d>0) && (s>0) && (c>0) && (i<=0) && (d>=s) && (s>=c); }
  },
  {
    pattern: "D-C-I", name: "CHALLENGER",
    traits: ["Seorang yang tekun", "Sensitif terhadap permasalahan", "Mempunyai keputusan yang kuat", "Kreatif  dalam memecahkan masalah", "Memiliki reaksi yang cepat", "Mampu mencari solusi permasalahan", "Banyak memberikan ide-ide.", "Usaha yang keras pada ketepatan", "Cenderung perfeksionis"],
    career: "Technical/Scientific (Directing, Management, Supervision), Engineering, Finance, Production Planning, Personnel Disciplines, Self-Employment, Credit Manager, Planner, Lecturing, Work Study, Transport, Consultancy, Industrial Relations and Computers (Selling, Software, Systems Analyst) and General Manager.",
    desc: "Seorang yang sensitif terhadap permasalahan, dan memiliki kreativitas yang baik dalam memecahkan masalah. Ia dapat menyelesaikan tugas-tugas penting dalam waktu singkat karena mempunyai keputusan yang kuat. Seorang yang tekun dan memiliki reaksi yang cepat.  Ia akan meneliti dan mengejar semua kemungkinan yang ada dalam mencari solusi permasalahan.  Ia banyak memberikan ide-ide dengan berfokus pada pekerjaan. Usaha yang keras pada ketepatan akan mengimbangi keinginannya pada hasil yang terukur.  Ia cenderung perfeksionis dan dapat juga memperlambat pengambilan keputusan karena keinginannya untuk menentukan pilihan yang terbaik.",
    test: function(d,i,s,c) { return (d>0) && (i>0) && (c>0) && (s<=0) && (d>=c) && (c>=i); }
  },
  {
    pattern: "D-C-S", name: "CHALLENGER",
    traits: ["Seorang yang tekun", "Sensitif terhadap permasalahan", "Mempunyai keputusan yang kuat", "Kreatif  dalam memecahkan masalah", "Memiliki reaksi yang cepat", "Mampu mencari solusi permasalahan", "Banyak memberikan ide-ide.", "Usaha yang keras pada ketepatan", "Cenderung perfeksionis"],
    career: "Engineering, Production and Finance (Directing, Administrating, Managing and Managing Specialist Work), Scientific, Research Planning, Personnel, Trouble Shooting, Credit Control, Chief Accountant, Accountant, Chief Engineer, Work Study, Consultancy, Designer, Draughtsman, Project Work, Security Specialist, Doctor, Attorney.",
    desc: "Seorang yang sensitif terhadap permasalahan, dan memiliki kreativitas yang baik dalam memecahkan masalah. Ia dapat menyelesaikan tugas-tugas penting dalam waktu singkat karena mempunyai keputusan yang kuat. Seorang yang tekun dan memiliki reaksi yang cepat.  Ia akan meneliti dan mengejar semua kemungkinan yang ada dalam mencari solusi permasalahan.  Ia banyak memberikan ide-ide dengan berfokus pada pekerjaan. Usaha yang keras pada ketepatan akan mengimbangi keinginannya pada hasil yang terukur.  Ia cenderung perfeksionis dan dapat juga memperlambat pengambilan keputusan karena keinginannya untuk menentukan pilihan yang terbaik.",
    test: function(d,i,s,c) { return (d>0) && (s>0) && (c>0) && (i<=0) && (d>=c) && (c>=s); }
  },
  {
    pattern: "I", name: "COMMUNICATOR",
    traits: ["Antusias", "Percaya", "Optimis", "Persuasif", "Bicara aktif", "Impulsif", "Emosional", "Ramah", "Inspirasional"],
    career: "Promoting, Demonstrating, Canvassing, Marketing Services, Public Relations, Lecturing, Advertising, Publican, Publishing, Hospitality, Retail-General, Human Resources, Journalist, Singers, Technical Writing, Tour Guide, Promotional Work, Hotelier, Dancers, Host, Actors, Travel Agent, Politician, and very soft selling.",
    desc: "Merupakan seorang yang antusias dan optimistik, ia lebih suka mencapai sasarannya melalui orang lain. Ia suka berhubungan dengan sesamanya - ia bahkan suka mengadakan “pesta” atau kegiatan untuk berkumpul, dan ini menunjukkan kepribadiannya yang ramah. Ia tidak suka bekerja sendirian dan cenderung bersama dengan orang lain dalam menyelesaikan proyek.  Perhatian dan fokusnya tidak sebaik apa yang dia inginkan -  maka ia membutuhkan energi yang besar untuk mampu bergerak cepat dari satu hal ke hal berikutnya tanpa penundaan.  Ia sangat menonjol dalam keterampilan berkomunikasi, dan ini merupakan salah satu kekuatan yang paling sering digunakan.  Ia memiliki kemampuan untuk memotivasi dan memberi semangat dengan kata-katanya, dan ia dikenal sebagai individu yang inspirasional. Ketika ia harus memusatkan perhatiannya pada tugas, Ia akan menjadi tidak akurat dan bahkan tidak terorganisir.  Tetapi ia akan memusatkan perhatian kepada yang harus ia senangkan, karena ia enggan sekali untuk menolak.  Ia menginginkan pengakuan sosial dan takut akan penolakan.  Ia mudah menemukan teman dan berusaha menciptakan suasana yang menyenangkan.  Ia membutuhkan seorang manajer atau supervisor untuk menentukan batas waktu yang jelas dalam pekerjaannya, ia lebih suka menggunakan gaya manajemen partisipatif yang dibangun berdasarkan hubungan yang kuat.",
    test: function(d,i,s,c) { return (d<=0) && (s<=0) && (c<=0) && (i>0); }
  },
  {
    pattern: "I-S", name: "ADVISOR",
    traits: ["Hangat", "Simpati", "Tenang dalam situasi sosial", "Pendengar yang baik", "Demonstratif", "Tidak memaksakan idenya pada orang lain", "Kurang tegas dalam memberi perintah", "Menerima kritik", "Toleran dan sabar", "Penjaga damai"],
    career: "Personnel, Welfare, Training, Hotelier, Promoting, Travel Agent, Lecturing, Upmarket/Speciality Sales, Soft/Service Selling, Beauty Therapist, Psychologist, Nursing, Human Resources, Retail-Specialist, Veterinarian, Social Work, Personal Assistant, Personnel-HR, Coach, Mentor.",
    desc: "Seorang yang mengesankan orang akan kehangatan, simpati dan pengertiannya.  Ia memiliki ketenangan dalam sebagian besar situasi sosial dan jarang tidak menyenangkan orang lain.  Faktanya, banyak orang datang padanya karena ia kelihatan sebagai pendengar yang baik.  Ia cenderung sangat demonstratif dan emosinya biasanya tampak jelas bagi orang di sekitarnya.  Ia tidak akan memaksakan idenya pada orang lain; ia tidak tegas dalam mengekspresikan atau memberi perintah.  Jika ia sangat kuat merasakan sesuatu, Ia akan bicara secara terbuka dan terus terang tentang pendiriannya.  Ia cenderung menerima kritik atas pekerjaannya sebagai serangan pribadi.  Ia dapat menjadi sangat toleran dan sabar kepada mereka yang tidak produktif di pekerjaan.  Ia merupakan \"penjaga damai\" dan akan bekerja untuk menjaga kedamaian dalam setiap keadaan.",
    test: function(d,i,s,c) { return (i>0) && (s>0) && (d<=0) && (c<=0) && (i>=s); }
  },
  {
    pattern: "I-C", name: "ASSESSOR",
    traits: ["Ramah", "Suka berteman", "Nyaman walapun dengan orang asing", "Mudah mengembangkan hubungan baru", "Dapat mengendalikan diri", "Sangat sosial", "Cenderung perfeksionis alamiah", "Mempromosikan tugas-tugas orang lain"],
    career: "Teaching, Training, Inventing, Specialist Selling (Engineering, Finance or any area involving capital equipment), Project Engineer, Finance, Service Engineer or Supervising within a Technical/Specialist Area, Public Relations, Environmentalist, Marketing, Conference Organiser, Estate Agent.",
    desc: "Merupakan seorang yang ramah dan suka berteman; ia merasa nyaman walaupun dengan orang asing. Ia dapat mengembangkan hubungan baru dengan mudah, dan pada umumnya dapat mengendalikan diri sampai pada tingkat dimana ia jarang menimbulkan rasa benci pada orang lain dengan sengaja. Ia seorang yang sangat sosial, menunjukkan kepedulian dan persahabatan ketika sedang melakukan tugas-tugas di tangannya. Ia cenderung perfeksionis secara alamiah, dan akan mengisolasi dirinya jika diperlukan untuk melaksanakan pekerjaan.  Ia berkeinginan mempromosikan tugas-tugas orang lain, juga kepunyaannya.  Kadang-kadang ia salah menilai kemampuan orang lain dikarenakan pandangan-pandangannya yang optimis.",
    test: function(d,i,s,c) { return (i>0) && (c>0) && (d<=0) && (s<=0) && (i>=c); }
  },
  {
    pattern: "I-C-D", name: "ASSESSOR",
    traits: ["Analitis", "Berwatak hati-hati", "Ramah pada saat merasa nyaman", "Sangat biasa dengan orang asing", "Mudah mengembangkan hubungan baru", "Dapat mengendalikan diri", "Peduli dan ramah", "Memusatkan perhatian pada penyelesaian tugas", "Perfeksionis secara alami", "Mengisolasi dirinya jika diperlukan", "Mudah diramalkan", "Berorientasi pada kualitas"],
    career: "Specialist/Technical Selling (Computer, Finance, Engineer and others, Technical/Capital Equipment Selling), Financial (Manager, Specialist), Engineering (Manager, Designer, Buyer, Draughtsman), Project Engineer, Sales Engineer, Consultant, Trainer, Lecturer, Hotelier, Travel Agent, Personnel and Marketing Services.",
    desc: "Merupakan seseorang yang analitis, berwatak hati-hati dan ramah pada saat merasa nyaman. Ia sangat biasa dengan orang asing, karena ia dapat menilai dan menyesuaikan diri dalam hubungan mereka. Ia dapat mengembangkan hubungan baru dengan mudah ketika ia ingin melakukannya, dan pada umumnya dapat mengendalikan diri sampai pada tingkat di mana ia jarang menimbulkan rasa benci pada orang lain dengan sengaja. Ia menampilkan sikap peduli dan ramah, namun mampu memusatkan perhatian pada penyelesaian tugas yang ada. Ia cenderung perfeksionis secara alami, dan akan mengisolasi dirinya jika diperlukan untuk melaksanakan pekerjaan. Ia suka berada pada situasi yang dapat diramalkan dan tidak ada kejutan. Ia sangat berorientasi pada kualitas dan akan bekerja dengan keras untuk menyelesaikan pekerjakan dengan benar. Ia ingin orang-orang berkenan akan pekerjaan yang sudah ia selesaikan dengan baik.",
    test: function(d,i,s,c) { return (d>0) && (i>0) && (c>0) && (s<=0) && (i>=c) && (c>=d); }
  },
  {
    pattern: "I-C-S", name: "RESPONSIVE & THOUGHTFUL",
    traits: ["High Energy", "Good Communication Skill", "To The Point", "Sensitif", "Banyak Bicara", "Need Recognation", "Need Socialism", "Anti thd Kritik", "Terlalu banyak bersosialisasi", "Leadership kurang", "Kurang Fokus", "Anti Deadline"],
    career: "Personnel, Welfare, Training, Attorney, Teaching, Accounting, Technical Instructor, Customer Services, Public Relations, Artist, Hotelier, Demonstrator, Engineering (Sales, Service, Project, Draughtsman, Designer), Specialist (Soft/Services), Selling, Purchasing, Supervising (Engineering, Production, Accounts), Administration Work, Secretarial, Industrial Relations Specialist.",
    desc: "Merupakan individu yang berorientasi pada orang dan lancar berkomunikasi serta loyal.  Ia cenderung sensitif dan mempunyai standard yang tinggi.  Keputusannya dibuat berdasarkan fakta dan data pendukung.  Ia sepertinya tidak bisa diam.  Ia perlu untuk lebih terus terang dan jangan terlalu subyektif.  Ia butuh pengakuan sosial dan perhatian pribadi; ia dapat cepat akrab dengan orang lain.  Ia bersahabat, antusias, informal, banyak bicara dan terlalu khawatir terhadap apa yang dipikirkan orang.  Ia menguasai banyak hal.  Ia ingin diterima sebagai anggota kelompok dan ingin mengetahui secara pasti apa yang diharapkan darinya sebelum ia memulai proyek baru.",
    test: function(d,i,s,c) { return (d<=0) && (i>0) && (s>0) && (c>0) && (i>=c) && (c>=s); }
  },
  {
    pattern: "S-D", name: "SELF-MOTIVATED",
    traits: ["Objektif & Analitis", "Mandiri", "Good planner", "Komitmen terhadap target", "Menghindari konflik", "Ingin terlibat dalam situasi", "Ingin memberikan bantuan dan dukungan", "Termotivasi oleh target pribadi", "Stabil", "Tekun"],
    career: "Investigator, Researcher, Accountant, Engineering, Production/Engineering Supervisor, Computer Specialist, Architect, Transport/Warehouse Supervisor, Credit Controller, DP Supervisor, Computer Specialist, Research and Development, Private Investigator, Quality Controller, Engineering (Designer, Draughtsman, Project Engineer), Sales and Service Engineer, Property Manager, Attorney, Administration Manager",
    desc: "Merupakan seorang yang obyektif dan analitis.  Ia ingin terlibat dalam situasi, dan juga ingin memberikan bantuan dan dukungan.  Secara internal termotivasi oleh target pribadi, Ia menyukai orang-orang, tetapi juga mempunyai kemampuan untuk berorientasi pada pekerjaannya pada saat dibutuhkan.  Karena determinasinya yang kuat, ia sering berhasil dalam berbagai hal; karakternya yang tenang, stabil dan daya tahannya memiliki kontribusi akan keberhasilannya.  Keuletannya setelah memulai pekerjaan, ia akan berusaha keras untuk mendapatkan sasarannya.  Seorang yang bebas, ia orang yang cermat dan memiliki tindak lanjut yang baik.  Ia bisa menjadi tidak ramah walaupun ia pada dasarnya ia yang berorientasi pada orang; dan pada situasi yang tidak membuatnya nyaman, ia lebih suka mendukung pemimpinnya dari pada keterlibatannya dengan situasi.",
    test: function(d,i,s,c) { return (d>0) && (i<=0) && (s>0) && (c<=0) && (s>=d); }
  },
  {
    pattern: "S-I", name: "ADVISOR",
    traits: ["Hangat", "Simpati dan Pengertian", "Tenang dalam situasi sosial", "Pendengar yang baik", "Demonstratif", "Tidak memaksakan idenya pada orang lain", "Kurang tegas dalam memberi perintah", "Menerima kritik", "Toleran dan sabar", "Penjaga damai"],
    career: "Personnel Welfare, Training, Hotelier, Promoting, Travel Agent, Lecturing, Child Care, Charitable Organizations, Soft or Service Selling, Psychologist, Therapist, Nurse, Personal Assistant, Hospitality Manager, Social Work, Student Services, Upmarket/Speciality Sales.",
    desc: "Seorang yang mengesankan orang akan kehangatan, simpati dan pengertiannya.  Ia memiliki ketenangan dalam sebagian besar situasi sosial dan jarang tidak menyenangkan orang lain.  Faktanya, banyak orang datang padanya karena ia kelihatan sebagai pendengar yang baik.  Ia cenderung sangat demonstratif dan emosinya biasanya tampak jelas bagi orang di sekitarnya.  Ia tidak akan memaksakan idenya pada orang lain; ia tidak tegas dalam mengekspresikan atau memberi perintah.  Jika ia sangat kuat merasakan sesuatu, Ia akan bicara secara terbuka dan terus terang tentang pendiriannya.  Ia cenderung menerima kritik atas pekerjaannya sebagai serangan pribadi.  Ia dapat menjadi sangat toleran dan sabar kepada mereka yang tidak produktif di pekerjaan.  Ia merupakan \"penjaga damai\" yang sebenarnya dan akan bekerja untuk menjaga kedamaian dalam setiap keadaan.",
    test: function(d,i,s,c) { return (i>0) && (s>0) && (d<=0) && (c<=0) && (s>=i); }
  },
  {
    pattern: "S-D-I", name: "DIRECTOR",
    traits: ["Seorang yang obyektif dan analitis", "Ingin terlibat dalam situasi", "Ingin memberikan bantuan dan dukungan", "Termotivasi oleh target pribadi", "Berorientasi terhadap pekerjaannya", "Menyukai hubungan dengan sesama", "Mempunyai determinasi yang kuat", "Karakternya tenang", "Stabil dan daya tahannya tinggi", "Ulet dalam memulai pekerjaan", "Berusaha keras mencapai sasarannya", "Mandiri dan cermat"],
    career: "Engineering and Production (Supervision), Service Selling, Distribution and Warehouse Supervision/Manager, Office Management, Customer Service, System Analyst, Radio Announcer, Technical Writing, Telemarketing, TV Presenter, Project Engineer, Film Producer, Programmer, Sales/Service Engineer, Accounting, Draughtsman, Project Engineer.",
    desc: "Seorang yang obyektif dan analitis.  Ia ingin terlibat dalam situasi, dan ia juga ingin memberikan bantuan dan dukungan kepada orang yang ia hormati.  Secara internal termotivasi oleh target pribadi, ia berorientasi terhadap pekerjaannya tapi juga menyukai hubungan dengan sesama.  Karena determinasinya yang kuat, ia sering berhasil dalam berbagai hal; karakternya yang tenang, stabil dan daya tahannya yang tinggi memiliki kontribusi dalam keberhasilannya.  Ulet dalam memulai pekerjaan. Ia akan berusaha keras untuk mencapai sasarannya.  Seorang yang mandiri dan cermat serta memiliki tindak lanjut yang baik.",
    test: function(d,i,s,c) { return (d>0) && (i>0) && (s>0) && (c<=0) && (s>=d) && (d>=i); }
  },
  {
    pattern: "S-I-D", name: "ADVISOR",
    traits: ["Hangat", "Simpati dan Pengertian", "Tenang dalam situasi sosial", "Pendengar yang baik", "Demonstratif", "Tidak memaksakan idenya pada orang lain", "Kurang tegas dalam memberi perintah", "Menerima kritik", "Toleran dan sabar", "Penjaga damai"],
    career: "Engineering and Production (Supervision), Service Selling, Distribution and Warehouse Supervision, Office Management, Customer Service, System Analyst, Programmer, Sales/Service Engineer, Accounting, Draughtsman, Project Engineer.",
    desc: "Seorang yang mengesankan orang akan kehangatan, simpati dan pengertiannya.  Ia memiliki ketenangan dalam sebagian besar situasi sosial dan jarang tidak menyenangkan orang lain.  Faktanya, banyak orang datang padanya karena ia kelihatan sebagai pendengar yang baik.  Ia cenderung sangat demonstratif dan emosinya biasanya tampak jelas bagi orang di sekitarnya.  Ia tidak akan memaksakan idenya pada orang lain; ia tidak tegas dalam mengekspresikan atau memberi perintah.  Jika ia sangat kuat merasakan sesuatu, Ia akan bicara secara terbuka dan terus terang tentang pendiriannya.  Ia cenderung menerima kritik atas pekerjaannya sebagai serangan pribadi.  Ia dapat menjadi sangat toleran dan sabar kepada mereka yang tidak produktif di pekerjaan.  Ia merupakan \"penjaga damai\" yang sebenarnya dan akan bekerja untuk menjaga kedamaian dalam setiap keadaan.",
    test: function(d,i,s,c) { return (d>0) && (i>0) && (s>0) && (c<=0) && (s>=i) && (i>=d); }
  },
  {
    pattern: "S-I-C", name: "ADVOCATE",
    traits: ["Stabil", "Ramah", "Detail ketika situasi membutuhkan", "Cenderung individualis", "Teguh pendirian", "Menyukai hubungan dengan orang", "Mendukung pihak yang lemah", "Ingin diterima sebagai anggota tim", "Ingin orang lain menyukainya", "Sulit membuat keputusan", "Moderat", "Cermat dan dapat diandalkan"],
    career: "Personnel Welfare, Training, Teaching, Attorney, Accounting, Technical Instructor, Customer Service, Public Relations, Artist, Hotelier, Demonstrator, Engineer (Sales, Service, Project, Draughtsman, Designer), Specialist (Soft/Service), Selling, Purchasing, Supervising (Engineering, Production, Accounts) Administrative Work, Secretarial.",
    desc: "Merupakan orang yang stabil, individu yang ramah yang berusaha keras membangun hubungan yang positif di tempat kerja dan di rumah.  Ia dapat menjadi sangat berorientasi detil ketika situasi membutuhkan; tetapi secara keseluruhan ia cenderung individualis, independen dan sedikit perhatian terhadap detil.  Sekali dia membuat keputusan, sangat sulit mengubah pendiriannya.  Ia menyukai hubungan dengan orang dan cenderung mendukung pihak yang lemah.  Ia akan mengambil posisi berlawanan dengan ketidaksepakatan dan merasa frustrasi jika sesuatu tidak sejalan dengannya.  Ia ingin diterima sebagai anggota tim, dan ia menginginkan orang lain menyukainya.  Ia cukup sulit membuat keputusan sampai parameter wewenang secara jelas ditentukan, dan ia mungkin cenderung tidak sungguh-sungguh jika dipaksa membuat keputusan ketika ia tidak ingin melakukannya.  Ia menginginkan orang lain yang membuat keputusan, khususnya jika ada orang yang sangat ia hargai dan hormati.  Ia cenderung moderat, cermat dan dapat diandalkan.",
    test: function(d,i,s,c) { return (i>0) && (s>0) && (c>0) && (d<=0) && (s>=i) && (i>=c); }
  },
  {
    pattern: "S-C-D", name: "INQUIRER",
    traits: ["Seorang yang baik", "Sangat berorientasi pada detil", "Sangat teliti dalam penyelesaian tugas", "Sangat berhati-hati", "Penuh pertimbangan", "Lambat adaptasi", "Kaku dan keras kepala"],
    career: "Directing, Managing or Supervising (in Engineering, Accountancy, Research and Development and Computing disciplines), Accountant, Project Engineer, Draughtsman, Designer, Analyst, Chemist, Technician, Service Engineer, Manager, Security Specialist.",
    desc: "Seorang yang baik secara alamiah dan sangat berorientasi detil.  Ia peduli dengan orang-orang di sekitarnya dan mempunyai kualitas yang membuatnya sangat teliti dalam penyelesaian tugas.  Ia mempertimbangkan sekelilingnya dengan hati-hati sebelum membuat keputusan untuk melihat pengaruhnya pada mereka; saat tertentu ia terlalu hati-hati.  Jika ia merasa seseorang memanfaatkan situasi, ia akan memperlambat kerjanya sehingga dapat mengamati apa yang sedang berlangsung di sekitarnya.",
    test: function(d,i,s,c) { return (d>0) && (i<=0) && (s>0) && (c>0) && (s>=c) && (c>=d); }
  },
  {
    pattern: "S-C-I", name: "ADVOCATE",
    traits: ["Stabil", "Ramah", "Detail ketika situasi membutuhkan", "Cenderung individualis", "Teguh pendirian", "Menyukai hubungan dengan orang", "Mendukung pihak yang lemah", "Ingin diterima sebagai anggota tim", "Ingin orang lain menyukainya", "Sulit membuat keputusan", "Moderat", "Cermat dan dapat diandalkan"],
    career: "Personnel Welfare, Administrator, Advisers, Training, Teaching, Attorney, Accounting, Counseling, Technical Instructor, Customer Service, Accounting-General, Public Relations, Accounts Supervisor, Artist, Hotelier, Demonstrator, Engineer (Sales, Service, Project, Draughtsman, Designer), Specialist (Soft/Service), Selling, Purchasing, Sales Engineer, Legal, Negotiator, Student Service, Photographer, Physiotherapist, Project Engineer, Vocational Education, Supervising (Engineering, Production, Accounts) Administrative Work, Demonstrator, Secretarial, Hospitality Manager.",
    desc: "Merupakan orang yang stabil, individu yang ramah yang berusaha keras membangun hubungan yang positif di tempat kerja dan di rumah.  Ia dapat menjadi sangat berorientasi detil ketika situasi membutuhkan; tetapi secara keseluruhan ia cenderung individualis, independen dan sedikit perhatian terhadap detil.  Sekali dia membuat keputusan, sangat sulit mengubah pendiriannya.  Ia menyukai hubungan dengan orang dan cenderung mendukung pihak yang lemah.  Ia akan mengambil posisi berlawanan dengan ketidaksepakatan dan merasa frustrasi jika sesuatu tidak sejalan dengannya.  Ia ingin diterima sebagai anggota tim, dan ia menginginkan orang lain menyukainya.  Ia cukup sulit membuat keputusan sampai parameter wewenang secara jelas ditentukan, dan ia mungkin cenderung tidak sungguh-sungguh jika dipaksa membuat keputusan ketika ia tidak ingin melakukannya.  Ia menginginkan orang lain yang membuat keputusan, khususnya jika ada orang yang sangat ia hargai dan hormati.  Ia cenderung moderat, cermat dan dapat diandalkan.",
    test: function(d,i,s,c) { return (i>0) && (s>0) && (c>0) && (d<=0) && (s>=c) && (c>=i); }
  },
  {
    pattern: "C-I", name: "ASSESSOR",
    traits: ["Analitis", "Berwatak hati-hati", "Ramah pada saat merasa nyaman", "Sangat biasa dengan orang asing", "Mudah mengembangkan hubungan baru", "Dapat mengendalikan diri", "Peduli dan ramah", "Memusatkan perhatian pada penyelesaian tugas", "Perfeksionis secara alami", "Mengisolasi dirinya jika diperlukan", "Mudah diramalkan", "Berorientasi pada kualitas"],
    career: "Sales (Technical/Specialist), Public Relations, Lecturer, Academic, Personnel Administration, Purchasing, Travel Agent, Training, Teaching, Real Estate Agent, Hospitality Administration, Sales-Technical, Hotelier, Project Engineer, Service Engineer.",
    desc: "Merupakan seseorang yang analitis, berwatak hati-hati dan ramah pada saat merasa nyaman. Ia sangat biasa dengan orang asing, karena ia dapat menilai dan menyesuaikan diri dalam hubungan mereka. Ia dapat mengembangkan hubungan baru dengan mudah ketika ia ingin melakukannya, dan pada umumnya dapat mengendalikan diri sampai pada tingkat di mana ia jarang menimbulkan rasa benci pada orang lain dengan sengaja. Ia menampilkan sikap peduli dan ramah, namun mampu memusatkan perhatian pada penyelesaian tugas yang ada. Ia cenderung perfeksionis secara alami, dan akan mengisolasi dirinya jika diperlukan untuk melaksanakan pekerjaan. Ia suka berada pada situasi yang dapat diramalkan dan tidak ada kejutan. Ia sangat berorientasi pada kualitas dan akan bekerja dengan keras untuk menyelesaikan pekerjakan dengan benar. Ia ingin orang-orang berkenan akan pekerjaan yang sudah ia selesaikan dengan baik.",
    test: function(d,i,s,c) { return (i>0) && (c>0) && (d<=0) && (s<=0) && (c>=i); }
  },
  {
    pattern: "C-D-I", name: "CHALLENGER",
    traits: ["Sangat berorientasi pada tugas", "Sensitif terhadap permasalahan", "Lebih mempedulikan tugas daripada orang", "Kukuh/keras", "Dingin", "Tidak berperasaan", "Menjaga jarak", "Membuat keputusan berdasarkan fakta", "Pendiam", "Tidak mudah percaya"],
    career: "Directing, Managing or Supervising (Engineering, Research, Finance, Planning), Designer, Work Study, Sales (Technical/ Specialist), Logistic Support, Systems Analyst, Lecturer, Company Secretary, Negotiator and Purchasing.",
    desc: "Seorang yang sangat berorientasi pada tugas dan sensitif pada permasalahan. Ia lebih mempedulikan tugas yang ada dibanding orang-orang di sekitarnya, termasuk perasaan mereka. Ia sangat kukuh/keras dan mempunyai pendekatan yang efektif dalam pemecahan masalah. Oleh karena sifat alamiah dan keinginannya akan hasil yang terukur, ia akan tampak dingin, tidak berperasaan dan menjaga jarak. Ia membuat keputusan berdasar pada fakta, bukan emosi. ia cenderung pendiam dan tidak mudah percaya.",
    test: function(d,i,s,c) { return (d>0) && (i>0) && (c>0) && (s<=0) && (c>=d) && (d>=i); }
  },
  {
    pattern: "C-D-S", name: "CONTEMPLATOR",
    traits: ["Berorientasi pada hal-hal detil", "Mempunyai standar tinggi untuk dirinya", "Logis dan analitis", "Ingin berbuat yang terbaik", "Selalu berpikir ada ruang untuk kemajuan", "Kompetitif", "Ingin menghasilkan mutu yang terbaik", "Mampu mencapai sasarannya", "Sangat memusatkan perhatian pada tugas", "Mantap dan dapat diandalkan"],
    career: "Engineering, Research, Production and Finance (Director, Manager atau Supervisor), Work Study, Accountant, Administrator, Quality Controller, Safety Officer, Market Analyst, Planner and Personnel (Director, Manager, Administrator), MIS Manager, Security Manager, Loss Control.",
    desc: "Berorientasi pada hal detil dan mempunyai standard tinggi untuk dirinya. Ia logis dan analitis. Ia ingin berbuat yang terbaik, dan ia selalu berpikir ada ruang untuk peningkatan/kemajuan. Ia cenderung kompetitif dan ingin menghasilkan pekerjaan dengan mutu yang terbaik. Ia sebenarnya sensitif terhadap orang-orang, tetapi karena sifat logisnya, orientasinya terhadap tugas dapat menutupinya dengan mudah. Ia suka dihargai untuk pekerjaannya yang berkualitas. Ia mampu mengerjakan tugas-tugas; dan mencapai sasarannya. Ia sangat memusatkan perhatian pada tugas yang ada, mantap dan dapat diandalkan.",
    test: function(d,i,s,c) { return (d>0) && (s>0) && (c>0) && (i<=0) && (c>=d) && (d>=s); }
  },
  {
    pattern: "C-I-D", name: "ASSESSOR",
    traits: ["Analitis", "Berwatak hati-hati", "Ramah pada saat merasa nyaman", "Sangat biasa dengan orang asing", "Mudah mengembangkan hubungan baru", "Dapat mengendalikan diri", "Peduli dan ramah", "Memusatkan perhatian pada penyelesaian tugas", "Perfeksionis secara alami", "Mengisolasi dirinya jika diperlukan", "Mudah diramalkan", "Berorientasi pada kualitas"],
    career: "Directing, Managing or Supervising (Engineering, Research, Finance, Planning), Designer, Work Study, Sales (Technical/Specialist), Lecturer, Company Secretary, Negotiator and Purchasing.",
    desc: "Merupakan seseorang yang analitis, berwatak hati-hati dan ramah pada saat merasa nyaman. Ia sangat biasa dengan orang asing, karena ia dapat menilai dan menyesuaikan diri dalam hubungan mereka. Ia dapat mengembangkan hubungan baru dengan mudah ketika ia ingin melakukannya, dan pada umumnya dapat mengendalikan diri sampai pada tingkat di mana ia jarang menimbulkan rasa benci pada orang lain dengan sengaja. Ia menampilkan sikap peduli dan ramah, namun mampu memusatkan perhatian pada penyelesaian tugas yang ada. Ia cenderung perfeksionis secara alami, dan akan mengisolasi dirinya jika diperlukan untuk melaksanakan pekerjaan. Ia suka berada pada situasi yang dapat diramalkan dan tidak ada kejutan. Ia sangat berorientasi pada kualitas dan akan bekerja dengan keras untuk menyelesaikan pekerjakan dengan benar. Ia ingin orang-orang berkenan akan pekerjaan yang sudah ia selesaikan dengan baik.",
    test: function(d,i,s,c) { return (d>0) && (i>0) && (c>0) && (s<=0) && (c>=i) && (i>=d); }
  },
  {
    pattern: "C-S-D", name: "PRECISIONIST",
    traits: ["Sistematis dan Prosedural", "Teratur & memiliki perencanaan yang baik", "Teliti", "Fokus pada detil", "Bijaksana", "Diplomatis", "Jarang menentang rekan kerjanya", "Ia sangat berhati-hati", "Mengharapkan akurasi dan standard tinggi", "Menginginkan adanya petunjuk standard", "Tidak menginginkan perubahan mendadak"],
    career: "Engineering, Research Director, Production and Finance (Director, Manager, Supervisor), Work Study, Accountant, Administrator, Quality Controller, Financial Services Manager, Safety Officer, Market Analyst, Planner and Personnel (Director, Manager, Administrator), MIS Manager, Electrician, Security Manager, Financial Researcher, Planner, Printer, Production Controller, Production Manager, Personnel Management, Loss Control.",
    desc: "Berpikir sistematis dan cenderung mengikuti prosedur dalam kehidupan pribadi dan pekerjaannya.  Teratur dan memiliki perencanaan yang baik, ia teliti dan fokus pada detil.  Ia bertindak dengan penuh kebijaksanaan, diplomatis dan jarang menentang rekan kerjanya dengan sengaja.  Ia sangat berhati-hati, ia sungguh-sungguh mengharapkan akurasi dan standard tinggi dalam pekerjaannya.  Ia cenderung terjebak dalam hal detil, khususnya jika harus memutuskan.  ia menginginkan adanya petunjuk standard pelaksanaan kerja dan tanpa perubahan mendadak.",
    test: function(d,i,s,c) { return (d>0) && (s>0) && (c>0) && (i<=0) && (c>=s) && (s>=d); }
  },
];

// key, [D,I,S,C-Most], [D,I,S,C-Least] gabung 1 baris: key,mD,mI,mS,mC,lD,lI,lS,lC
const SCALE_TABLE_MOST_LEAST = [[0, -6, -7, -5.7, -6, 7.5, 7.5, 7.5, 7.5], [1, -5.3, -4.6, -4.3, -4.7, 6.5, 6, 7, 7], [2, -4, -2.5, -3.5, -3.5, 4.3, 4, 6, 5.6], [3, -2.5, -1.3, -1.5, -1.5, 2.5, 2.5, 4, 4], [4, -1.7, 1, -0.7, 0.5, 1.5, 0.5, 2.5, 2.5], [5, -1.3, 3, 0.5, 2, 0.5, 0, 1.5, 1.5], [6, 0, 3.5, 1, 3, 0, -2, 0.5, 0.5], [7, 0.5, 5.3, 2.5, 5.3, -1.3, -3.5, -1.3, 0], [8, 1, 5.7, 3, 5.7, -1.5, -4.3, -2, -1.3], [9, 2, 6, 4, 6, -2.5, -5.3, -3, -2.5], [10, 3, 6.5, 4.6, 6.3, -3, -6, -4.3, -3.5], [11, 3.5, 7, 5, 6.5, -3.5, -6.5, -5.3, -5.3], [12, 4, 7, 5.7, 6.7, -4.3, -7, -6, -5.7], [13, 4.7, 7, 6, 7, -5.3, -7.2, -6.5, -6], [14, 5.3, 7, 6.5, 7.3, -5.7, -7.2, -6.7, -6.5], [15, 6.5, 7, 6.5, 7.3, -6, -7.2, -6.7, -7], [16, 7, 7.5, 7, 7.3, -6.5, -7.3, -7, -7.3], [17, 7, 7.5, 7, 7.5, 6.7, -7.3, -7.2, -7.5], [18, 7, 7.5, 7, 8, 7, -7.3, -7.3, -7.7], [19, 7.5, 7.5, 7.5, 8, -7.3, -7.5, -7.5, -7.9], [20, 7.5, 8, 7.5, 8, -7.5, -8, -8, -8]];
// key, D, I, S, C (untuk grafik Change)
const SCALE_TABLE_CHANGE = [[-22, -8, -8, -8, -7.5], [-21, -7.5, -8, -8, -7.3], [-20, -7, -8, -8, -7.3], [-19, -6.8, -8, -8, -7], [-18, -6.75, -7, -7.5, -6.7], [-17, -6.7, -6.7, -7.3, -6.7], [-16, -6.5, -6.7, -7.3, -6.7], [-15, -6.3, -6.7, -7, -6.5], [-14, -6.1, -6.7, -6.5, -6.3], [-13, -5.9, -6.7, -6.5, -6], [-12, -5.7, -6.7, -6.5, -5.85], [-11, -5.3, -6.7, -6.5, -5.85], [-10, -4.3, -6.5, -6, -5.7], [-9, -3.5, -6, -4.7, -4.7], [-8, -3.25, -5.7, -4.3, -4.3], [-7, -3, -4.7, -3.5, -3.5], [-6, -2.75, -4.3, -3, -3], [-5, -2.5, -3.5, -2, -2.5], [-4, -1.5, -3, -1.5, -0.5], [-3, -1, -2, -1, 0], [-2, -0.5, -1.5, -0.5, 0.3], [-1, -0.25, 0, 0, 0.5], [0, 0, 0.5, 1, 1.5], [1, 0.5, 1, 1.5, 3], [2, 0.7, 1.5, 2, 4], [3, 1, 3, 3, 4.3], [4, 1.3, 4, 3.5, 5.5], [5, 1.5, 4.3, 4, 5.7], [6, 2, 5, 4.5, 6], [7, 2.5, 5.5, 4.7, 6.3], [8, 3.5, 6.5, 5, 6.5], [9, 4, 6.7, 5.5, 6.7], [10, 4.7, 7, 6, 7], [11, 4.85, 7.3, 6.2, 7.3], [12, 5, 7.3, 6.3, 7.3], [13, 5.5, 7.3, 6.5, 7.3], [14, 6, 7.3, 6.7, 7.3], [15, 6.3, 7.3, 7, 7.3], [16, 6.5, 7.3, 7.3, 7.3], [17, 6.7, 7.3, 7.3, 7.5], [18, 7, 7.5, 7.3, 8], [19, 7.3, 8, 7.3, 8], [20, 7.3, 8, 7.5, 8], [21, 7.5, 8, 8, 8], [22, 8, 8, 8, 8]];

  // Cari baris scaling terdekat (meniru VLOOKUP approximate-match Excel):
  // ambil baris dengan key TERBESAR yang masih <= value.
  function scaleLookup(table, value) {
    let best = table[0];
    for (const row of table) {
      if (row[0] <= value) best = row; else break;
    }
    return best;
  }

  function scaleMost(raw) {
    const row = scaleLookup(SCALE_TABLE_MOST_LEAST, raw);
    return { D: row[1], I: row[2], S: row[3], C: row[4] };
  }
  function scaleLeast(raw) {
    const row = scaleLookup(SCALE_TABLE_MOST_LEAST, raw);
    return { D: row[5], I: row[6], S: row[7], C: row[8] };
  }
  function scaleChange(raw) {
    const row = scaleLookup(SCALE_TABLE_CHANGE, raw);
    return { D: row[1], I: row[2], S: row[3], C: row[4] };
  }

  // Cocokkan nilai d,i,s,c (yang sudah discale) ke salah satu dari 40 kode,
  // persis urutan pengecekan yang dipakai file Excel (MATCH(1,...,0) - ambil yang pertama cocok).
  function matchCode(vals) {
    for (const entry of DISC_CODES) {
      if (entry.test(vals.D, vals.I, vals.S, vals.C)) return entry;
    }
    return DISC_CODES[0]; // fallback, seharusnya selalu ada yang cocok
  }

  function primaryLetterFromPattern(pattern) {
    const m = pattern.match(/[DISC]/);
    return m ? m[0] : '?';
  }

  function buildProfile(rawValues, scaleFn) {
    const scaled = scaleFn(rawValues);
    const code = matchCode(scaled);
    const primary = primaryLetterFromPattern(code.pattern);
    const barPct = {};
    ['D', 'I', 'S', 'C'].forEach(k => {
      const clamped = Math.max(-8, Math.min(8, scaled[k]));
      barPct[k] = Math.round(((clamped + 8) / 16) * 100);
    });
    return { code, primary, values: scaled, barPct };
  }

  // data = { most: {D,I,S,C} jumlah mentah dipilih P, least: {D,I,S,C} jumlah mentah dipilih K }
  function computeResult(data) {
    const mostRaw = { D: data.most.D || 0, I: data.most.I || 0, S: data.most.S || 0, C: data.most.C || 0 };
    const leastRaw = { D: data.least.D || 0, I: data.least.I || 0, S: data.least.S || 0, C: data.least.C || 0 };
    const changeRaw = { D: mostRaw.D - leastRaw.D, I: mostRaw.I - leastRaw.I, S: mostRaw.S - leastRaw.S, C: mostRaw.C - leastRaw.C };

    const mostProfile = buildProfile(mostRaw, r => ({
      D: scaleMost(r.D).D, I: scaleMost(r.I).I, S: scaleMost(r.S).S, C: scaleMost(r.C).C
    }));
    const leastProfile = buildProfile(leastRaw, r => ({
      D: scaleLeast(r.D).D, I: scaleLeast(r.I).I, S: scaleLeast(r.S).S, C: scaleLeast(r.C).C
    }));
    const changeProfile = buildProfile(changeRaw, r => ({
      D: scaleChange(r.D).D, I: scaleChange(r.I).I, S: scaleChange(r.S).S, C: scaleChange(r.C).C
    }));

    // Hasil utama tetap berbasis grafik Change (Mirror Perceived Self),
    // sama seperti file Excel aslinya — Deskripsi Kepribadian & Job Match di sana
    // juga merujuk ke grafik Change ini (lihat sel B33 & B36 di sheet Result).
    const mainCode = changeProfile.code;

    const breakdown = ['D', 'I', 'S', 'C'].map(k => ({
      hiLabel: k === 'D' ? 'Dominance (D)' : k === 'I' ? 'Influence (I)' : k === 'S' ? 'Steadiness (S)' : 'Conscientiousness (C)',
      pct: changeProfile.barPct[k],
      narrative: 'Skor grafik Change: ' + changeProfile.values[k].toFixed(1) + ' (mentah: ' + (changeRaw[k] >= 0 ? '+' : '') + changeRaw[k] + ')'
    }));

    const threeProfiles = [
      { label: 'Mask Public Self', labelId: 'Kepribadian di Muka Umum', primary: mostProfile.primary, primaryName: mostProfile.code.name, values: mostProfile.values, barPct: mostProfile.barPct, traits: mostProfile.code.traits },
      { label: 'Core Private Self', labelId: 'Kepribadian Saat Mendapat Tekanan', primary: leastProfile.primary, primaryName: leastProfile.code.name, values: leastProfile.values, barPct: leastProfile.barPct, traits: leastProfile.code.traits },
      { label: 'Mirror Perceived Self', labelId: 'Kepribadian Asli yang Tersembunyi', primary: changeProfile.primary, primaryName: changeProfile.code.name, values: changeProfile.values, barPct: changeProfile.barPct, traits: changeProfile.code.traits }
    ];

    return {
      code: primaryLetterFromPattern(mainCode.pattern),
      name: mainCode.name,
      desc: mainCode.desc,
      kekuatan: mainCode.traits.slice(0, 5),
      berkembang: mainCode.traits.slice(5, 9).length ? mainCode.traits.slice(5, 9) : ['Tidak ada catatan tambahan untuk kode ini.'],
      kerja: mainCode.career,
      breakdown,
      threeProfiles,
      placeholders: {
        PRIMARY: primaryLetterFromPattern(mainCode.pattern), PRIMARY_NAME: mainCode.name,
        PCT_D: changeProfile.barPct.D + '%', PCT_I: changeProfile.barPct.I + '%',
        PCT_S: changeProfile.barPct.S + '%', PCT_C: changeProfile.barPct.C + '%',
        MOST_NAME: mostProfile.code.name,
        MOST_TRAITS: mostProfile.code.traits.join('\n'),
        LEAST_NAME: leastProfile.code.name,
        LEAST_TRAITS: leastProfile.code.traits.join('\n'),
        CHANGE_NAME: changeProfile.code.name,
        CHANGE_TRAITS: changeProfile.code.traits.join('\n'),
        DESKRIPSI: mainCode.desc,
        JOB_MATCH: mainCode.career
      }
    };
  }

  return {
    testType: 'DISC',
    brand: 'PETA GAYA KERJA',
    answerType: 'forced-choice',
    title: 'Kenali Gaya Kerja dan Komunikasimu',
    lede: 'Tes ini memakai format DISC — 24 nomor, tiap nomor berisi 4 pernyataan. Pada tiap nomor, pilih SATU yang PALING menggambarkan dirimu (P), dan SATU yang PALING TIDAK menggambarkan dirimu (K). Sekitar 6-8 menit.',
    legend: [
      { strong: 'D', desc: '- Dominance, tegas & berorientasi hasil' },
      { strong: 'I', desc: '- Influence, hangat & persuasif' },
      { strong: 'S', desc: '- Steadiness, sabar & konsisten' },
      { strong: 'C', desc: '- Conscientiousness, teliti & sistematis' }
    ],
    questions: QUESTIONS,
    computeResult
  };
})();

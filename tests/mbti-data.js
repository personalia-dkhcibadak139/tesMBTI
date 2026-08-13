const TEST_CONFIG = (function () {
  const TAGS = {
    EI: 'ARAH ENERGI',
    SN: 'CARA MENYERAP INFORMASI',
    TF: 'CARA MEMUTUSKAN',
    JP: 'CARA MENJALANI HIDUP'
  };

  const QUESTIONS = [
    { trait: 'E', tag: TAGS.EI, text: 'Saya merasa lebih bersemangat setelah menghabiskan waktu di tengah banyak orang, dibanding sendirian.' },
    { trait: 'E', tag: TAGS.EI, text: 'Saya suka melontarkan ide sambil berbicara, bukan memikirkannya matang-matang dulu.' },
    { trait: 'E', tag: TAGS.EI, text: 'Saya mudah akrab dengan orang baru di suatu acara atau pertemuan.' },
    { trait: 'E', tag: TAGS.EI, text: 'Saya lebih suka mengerjakan sesuatu bersama tim daripada sendirian.' },
    { trait: 'I', tag: TAGS.EI, text: 'Saya butuh waktu menyendiri untuk memulihkan energi setelah bersosialisasi lama.' },
    { trait: 'I', tag: TAGS.EI, text: 'Saya lebih suka memikirkan sesuatu secara matang sebelum mengucapkannya.' },
    { trait: 'I', tag: TAGS.EI, text: 'Saya lebih nyaman mengobrol dengan satu-dua orang dekat daripada di keramaian.' },
    { trait: 'I', tag: TAGS.EI, text: 'Saya lebih produktif saat bekerja sendirian tanpa banyak gangguan.' },

    { trait: 'S', tag: TAGS.SN, text: 'Saya lebih percaya pada fakta dan pengalaman nyata daripada firasat.' },
    { trait: 'S', tag: TAGS.SN, text: 'Saya lebih suka instruksi yang jelas dan rinci, langkah demi langkah.' },
    { trait: 'S', tag: TAGS.SN, text: 'Saya lebih memperhatikan detail konkret daripada gambaran besar.' },
    { trait: 'S', tag: TAGS.SN, text: 'Saya lebih suka menyelesaikan masalah dengan cara yang sudah terbukti berhasil.' },
    { trait: 'N', tag: TAGS.SN, text: 'Saya suka membayangkan berbagai kemungkinan dan pola tersembunyi di balik sesuatu.' },
    { trait: 'N', tag: TAGS.SN, text: 'Saya lebih tertarik pada ide dan konsep abstrak daripada rincian teknis.' },
    { trait: 'N', tag: TAGS.SN, text: 'Saya sering memikirkan skenario "bagaimana jika" tentang masa depan.' },
    { trait: 'N', tag: TAGS.SN, text: 'Saya lebih suka mencoba cara baru daripada mengikuti metode lama.' },

    { trait: 'T', tag: TAGS.TF, text: 'Saya mengambil keputusan berdasarkan logika dan analisis, bukan perasaan.' },
    { trait: 'T', tag: TAGS.TF, text: 'Saya lebih mengutamakan keadilan dan konsistensi aturan daripada situasi personal seseorang.' },
    { trait: 'T', tag: TAGS.TF, text: 'Saya cenderung memberi kritik langsung meski berisiko menyinggung perasaan orang.' },
    { trait: 'T', tag: TAGS.TF, text: 'Saya lebih fokus mencari kebenaran daripada menjaga suasana tetap nyaman.' },
    { trait: 'F', tag: TAGS.TF, text: 'Saya mempertimbangkan perasaan orang lain sebelum mengambil keputusan.' },
    { trait: 'F', tag: TAGS.TF, text: 'Saya lebih suka menjaga keharmonisan kelompok daripada memenangkan perdebatan.' },
    { trait: 'F', tag: TAGS.TF, text: 'Saya mudah berempati dengan apa yang sedang dirasakan orang lain.' },
    { trait: 'F', tag: TAGS.TF, text: 'Saya cenderung memberi apresiasi dulu sebelum menyampaikan kritik.' },

    { trait: 'J', tag: TAGS.JP, text: 'Saya suka membuat rencana matang sebelum memulai sesuatu.' },
    { trait: 'J', tag: TAGS.JP, text: 'Saya merasa lebih tenang ketika semuanya sudah diputuskan dan terjadwal.' },
    { trait: 'J', tag: TAGS.JP, text: 'Saya lebih suka menyelesaikan tugas jauh sebelum tenggat waktu.' },
    { trait: 'J', tag: TAGS.JP, text: 'Saya menyukai lingkungan kerja yang terstruktur dan rapi.' },
    { trait: 'P', tag: TAGS.JP, text: 'Saya lebih suka membiarkan opsi tetap terbuka daripada terikat pada satu rencana.' },
    { trait: 'P', tag: TAGS.JP, text: 'Saya sering bekerja lebih baik justru saat mendekati tenggat waktu.' },
    { trait: 'P', tag: TAGS.JP, text: 'Saya suka berimprovisasi dan beradaptasi di tempat daripada mengikuti jadwal ketat.' },
    { trait: 'P', tag: TAGS.JP, text: 'Saya merasa jadwal yang terlalu kaku itu membatasi.' }
  ];

  const TYPES = {
    INTJ:{name:'Sang Arsitek', desc:'Perencana strategis yang mandiri, suka menyusun sistem jangka panjang dan tak mudah puas dengan cara lama jika ada cara yang lebih efisien.',
      kekuatan:['Mampu melihat pola besar dan menyusun strategi jangka panjang.','Mandiri dan percaya diri mengambil keputusan sulit.','Terus mencari cara yang lebih efisien, tidak cepat puas dengan status quo.'],
      berkembang:['Kadang terlihat terlalu kaku atau dingin bagi orang lain saat fokus pada logika.','Perlu belajar menyampaikan ide dengan lebih sabar ke orang yang berpikir berbeda.','Cenderung meremehkan pekerjaan rutin yang dianggap kurang efisien.'],
      kerja:'Paling nyaman bekerja dengan otonomi tinggi, memegang proyek yang butuh visi jangka panjang dan pemikiran sistemik.'},
    INTP:{name:'Sang Logikawan', desc:'Pemikir analitis yang haus akan pemahaman mendalam, senang membongkar ide sampai ke akar logikanya sebelum menerimanya.',
      kekuatan:['Analitis dan objektif, jarang terburu-buru menyimpulkan sesuatu.','Kreatif dalam memecahkan masalah konseptual yang rumit.','Terbuka terhadap ide baru selama logikanya masuk akal.'],
      berkembang:['Bisa terjebak terlalu lama menganalisis tanpa mengeksekusi.','Kurang nyaman dengan rutinitas administratif atau detail berulang.','Perlu berlatih menyampaikan pemikiran dengan cara yang lebih ringkas untuk orang lain.'],
      kerja:'Cocok di peran yang memberi ruang eksplorasi ide dan pemecahan masalah, dengan sedikit birokrasi dan aturan kaku.'},
    ENTJ:{name:'Sang Komandan', desc:'Pemimpin tegas yang berorientasi hasil, cepat melihat peluang dan mengorganisir orang serta sumber daya untuk mencapainya.',
      kekuatan:['Tegas dan percaya diri dalam memimpin serta mengambil keputusan.','Pandai menyusun strategi dan mengorganisir sumber daya menuju target.','Berorientasi hasil, tidak mudah terdistraksi dari tujuan utama.'],
      berkembang:['Bisa terkesan mendominasi atau kurang sabar dengan proses orang lain.','Perlu melatih kepekaan terhadap perasaan tim saat menekan target.','Rentan mengabaikan detail kecil demi mengejar gambaran besar.'],
      kerja:'Berkembang pesat di posisi kepemimpinan yang menuntut pengambilan keputusan cepat dan pengelolaan tim menuju target jelas.'},
    ENTP:{name:'Sang Pendebat', desc:'Pencetus ide yang gesit dan suka menantang asumsi, menikmati diskusi terbuka dan eksplorasi kemungkinan baru.',
      kekuatan:['Cepat menangkap peluang dan menghasilkan ide-ide segar.','Piawai berargumen dan melihat berbagai sudut pandang sekaligus.','Adaptif terhadap perubahan dan tidak takut mencoba hal baru.'],
      berkembang:['Mudah bosan dengan tugas rutin atau yang sudah pasti hasilnya.','Kadang lebih suka berdebat daripada menyepakati keputusan akhir.','Perlu melatih konsistensi menyelesaikan apa yang sudah dimulai.'],
      kerja:'Cocok di lingkungan dinamis yang menghargai ide baru, brainstorming, dan pemecahan masalah non-konvensional.'},
    INFJ:{name:'Sang Advokat', desc:'Idealis yang tenang namun teguh, punya visi jangka panjang tentang bagaimana membantu orang lain berkembang.',
      kekuatan:['Punya visi dan nilai yang kuat, konsisten memperjuangkannya.','Peka terhadap kebutuhan orang lain meski tidak diucapkan.','Mampu memotivasi orang lain lewat empati dan ketulusan.'],
      berkembang:['Cenderung memendam perasaan sendiri demi menjaga keharmonisan.','Mudah kelelahan secara emosional jika terlalu banyak memikirkan orang lain.','Perlu belajar menerima bahwa tidak semua hal bisa sempurna sesuai idealismenya.'],
      kerja:'Berkembang di peran yang punya makna dan dampak jangka panjang bagi orang lain, dengan cukup ruang untuk bekerja secara mendalam dan tenang.'},
    INFP:{name:'Sang Mediator', desc:'Pribadi reflektif dengan nilai batin yang kuat, setia pada makna dan keaslian dalam setiap hal yang dikerjakan.',
      kekuatan:['Setia pada nilai pribadi dan integritas dalam bertindak.','Kreatif dan punya kepekaan yang dalam terhadap makna di balik sesuatu.','Empatik dan mudah memahami perasaan orang lain.'],
      berkembang:['Kadang terlalu idealis sehingga sulit menerima kompromi praktis.','Cenderung menghindari konflik langsung meski itu perlu dibicarakan.','Perlu melatih disiplin menyelesaikan tugas yang terasa kurang bermakna baginya.'],
      kerja:'Nyaman di pekerjaan yang selaras dengan nilai pribadi, memberi ruang berekspresi, dan tidak terlalu terikat rutinitas kaku.'},
    ENFJ:{name:'Sang Protagonis', desc:'Penggerak yang hangat dan persuasif, pandai membaca kebutuhan orang lain dan menyatukan mereka menuju tujuan bersama.',
      kekuatan:['Persuasif dan hangat, mudah menggerakkan orang lain.','Peka membaca dinamika dan kebutuhan kelompok.','Bertanggung jawab dan berkomitmen pada orang-orang yang dipimpinnya.'],
      berkembang:['Cenderung mengorbankan kebutuhan sendiri demi menyenangkan orang lain.','Bisa terlalu memaksakan visinya dianggap benar oleh semua orang.','Perlu belajar menerima kritik tanpa menganggapnya serangan pribadi.'],
      kerja:'Cocok di peran yang melibatkan orang banyak — mengajar, memimpin tim, atau membangun komunitas menuju tujuan bersama.'},
    ENFP:{name:'Sang Kampiun', desc:'Jiwa bebas yang antusias dan penuh ide, mudah terhubung dengan orang baru dan melihat potensi di mana-mana.',
      kekuatan:['Antusias dan mudah membangkitkan semangat orang di sekitarnya.','Kreatif, melihat banyak kemungkinan dan koneksi antar ide.','Mudah membangun hubungan hangat dengan orang baru.'],
      berkembang:['Mudah teralihkan dari satu ide ke ide lain sebelum menyelesaikannya.','Kurang sabar dengan detail teknis dan pekerjaan repetitif.','Perlu melatih fokus dan komitmen jangka panjang pada satu rencana.'],
      kerja:'Berkembang di lingkungan yang fleksibel dan penuh interaksi, terutama pekerjaan yang menggabungkan kreativitas dengan orang-orang.'},
    ISTJ:{name:'Sang Logistikus', desc:'Pribadi yang tertib dan bisa diandalkan, menjunjung tinggi tanggung jawab dan konsistensi dalam segala hal.',
      kekuatan:['Bisa diandalkan, konsisten menepati komitmen dan tenggat waktu.','Teliti dan terstruktur dalam bekerja.','Praktis, fokus pada solusi yang sudah terbukti berhasil.'],
      berkembang:['Bisa kaku menghadapi perubahan rencana yang mendadak.','Kurang nyaman mengekspresikan emosi secara terbuka.','Perlu melatih keterbukaan terhadap cara-cara baru yang belum teruji.'],
      kerja:'Cocok di peran yang butuh ketelitian, aturan jelas, dan tanggung jawab konsisten — administrasi, kepatuhan, atau operasional.'},
    ISFJ:{name:'Sang Pembela', desc:'Pribadi hangat dan teliti yang senang menjaga kestabilan dan kenyamanan orang-orang di sekitarnya.',
      kekuatan:['Teliti dan penuh perhatian pada detail kebutuhan orang lain.','Setia dan bisa diandalkan dalam jangka panjang.','Sabar menjaga stabilitas dan keharmonisan lingkungan sekitarnya.'],
      berkembang:['Cenderung mengabaikan kebutuhan sendiri demi orang lain.','Sulit menolak permintaan meski sudah kewalahan.','Perlu melatih keberanian menyuarakan pendapat berbeda secara terbuka.'],
      kerja:'Nyaman di peran pendukung yang butuh ketelitian dan kepedulian — layanan, administrasi personalia, atau perawatan.'},
    ESTJ:{name:'Sang Eksekutif', desc:'Pengatur yang tegas dan praktis, ahli dalam menjalankan rencana secara efisien dan menjaga semuanya tetap pada jalurnya.',
      kekuatan:['Terorganisir dan efisien dalam menjalankan rencana.','Tegas mengambil keputusan berdasarkan data dan fakta.','Bertanggung jawab penuh menjaga standar dan aturan tetap berjalan.'],
      berkembang:['Bisa terkesan terlalu kaku terhadap aturan dan kurang fleksibel.','Cenderung kurang sabar dengan pendekatan yang tidak sistematis.','Perlu melatih kepekaan terhadap perasaan tim, bukan hanya hasil kerja.'],
      kerja:'Berkembang di posisi manajerial atau operasional yang menuntut struktur, efisiensi, dan pengawasan langsung.'},
    ESFJ:{name:'Sang Konsul', desc:'Pribadi sosial dan penuh perhatian yang senang menjaga keharmonisan kelompok serta memastikan semua orang terlibat.',
      kekuatan:['Hangat dan penuh perhatian terhadap kebutuhan orang di sekitarnya.','Terorganisir dalam menjaga kelancaran kegiatan kelompok.','Setia dan bisa diandalkan sebagai penghubung antar orang.'],
      berkembang:['Terlalu bergantung pada validasi dan pengakuan dari orang lain.','Kesulitan menghadapi konflik atau kritik secara langsung.','Perlu melatih ketegasan saat kebutuhan sendiri berbenturan dengan orang lain.'],
      kerja:'Cocok di peran yang melibatkan koordinasi orang banyak, layanan pelanggan, atau pengelolaan acara dan komunitas.'},
    ISTP:{name:'Sang Virtuoso', desc:'Pemecah masalah yang praktis dan tenang, senang memahami cara kerja sesuatu langsung lewat tangan sendiri.',
      kekuatan:['Praktis dan tenang saat menghadapi masalah teknis mendadak.','Cepat memahami cara kerja sesuatu lewat eksperimen langsung.','Mandiri dan efisien, tidak butuh banyak arahan.'],
      berkembang:['Kurang nyaman dengan komitmen jangka panjang atau rutinitas kaku.','Cenderung menghindari ekspresi emosi secara verbal.','Perlu melatih kesabaran pada proses yang lambat dan penuh birokrasi.'],
      kerja:'Nyaman di peran teknis dan praktis yang butuh problem-solving langsung — teknik, perbaikan, atau pekerjaan lapangan.'},
    ISFP:{name:'Sang Petualang', desc:'Pribadi lembut dan artistik yang menjalani hidup mengikuti nilai pribadinya, menghargai kebebasan berekspresi.',
      kekuatan:['Sensitif secara estetika dan kreatif dalam berekspresi.','Setia pada nilai pribadi, tidak mudah terpengaruh tekanan sosial.','Fleksibel dan mudah beradaptasi dengan situasi baru.'],
      berkembang:['Cenderung menghindari konflik dan menahan pendapat sendiri.','Sulit merencanakan jangka panjang karena lebih suka mengalir.','Perlu melatih keberanian menyampaikan kebutuhan diri secara langsung.'],
      kerja:'Berkembang di lingkungan yang fleksibel dan memberi ruang ekspresi diri — desain, seni, atau pekerjaan langsung dengan orang/alam.'},
    ESTP:{name:'Sang Pengusaha', desc:'Pribadi enerjik dan spontan yang tanggap terhadap situasi nyata, senang bertindak cepat dan mengambil risiko terukur.',
      kekuatan:['Tanggap dan cepat bertindak dalam situasi yang butuh keputusan segera.','Pandai membaca situasi nyata dan peluang di lapangan.','Percaya diri mengambil risiko yang sudah diperhitungkan.'],
      berkembang:['Bisa kurang sabar dengan perencanaan panjang dan teori.','Cenderung bertindak dulu tanpa memikirkan konsekuensi jangka panjang.','Perlu melatih konsistensi pada komitmen yang butuh waktu lama.'],
      kerja:'Cocok di lingkungan dinamis dan cepat berubah yang menuntut aksi langsung — penjualan, operasional lapangan, atau situasi krisis.'},
    ESFP:{name:'Sang Penghibur', desc:'Pribadi ceria dan spontan yang hidup di momen saat ini, senang membawa keceriaan pada orang-orang di sekitarnya.',
      kekuatan:['Enerjik dan mudah mencairkan suasana di sekitarnya.','Spontan dan cepat beradaptasi dengan situasi baru.','Peka terhadap suasana hati orang lain dan pandai menghibur.'],
      berkembang:['Kurang sabar dengan perencanaan detail dan tugas jangka panjang.','Mudah teralihkan perhatian dari tanggung jawab yang membosankan.','Perlu melatih kemampuan menerima kritik tanpa terlalu terbawa perasaan.'],
      kerja:'Berkembang di peran yang melibatkan interaksi langsung dan energi tinggi — hospitality, event, atau layanan yang menghadapi banyak orang.'}
  };

  const AXIS_TRAITS = {
    E:'energimu terisi lewat interaksi dan lingkungan luar', I:'energimu terisi lewat waktu sendiri dan refleksi',
    S:'kamu mengandalkan fakta, detail, dan pengalaman konkret', N:'kamu tertarik pada pola, kemungkinan, dan gambaran besar',
    T:'kamu memutuskan berdasarkan logika dan analisis objektif', F:'kamu memutuskan dengan mempertimbangkan nilai dan perasaan orang lain',
    J:'kamu menyukai keteraturan, rencana, dan kepastian', P:'kamu menyukai fleksibilitas dan spontanitas'
  };

  function axisNarrative(pct, hi, lo) {
    if (pct >= 65) return 'Cenderung kuat ke arah ' + hi + ' (' + pct + '%) — ' + AXIS_TRAITS[hi] + '.';
    if (pct >= 55) return 'Sedikit condong ke arah ' + hi + ' (' + pct + '%), meski masih fleksibel ke sisi ' + lo + '.';
    if (pct > 45) return 'Cukup seimbang antara ' + hi + ' dan ' + lo + ' (' + pct + '% berbanding ' + (100 - pct) + '%).';
    if (pct > 35) return 'Sedikit condong ke arah ' + lo + ' (' + (100 - pct) + '%), meski masih fleksibel ke sisi ' + hi + '.';
    return 'Cenderung kuat ke arah ' + lo + ' (' + (100 - pct) + '%) — ' + AXIS_TRAITS[lo] + '.';
  }

  function computeResult(totals) {
    const code =
      (totals.E >= totals.I ? 'E' : 'I') +
      (totals.N >= totals.S ? 'N' : 'S') +
      (totals.T >= totals.F ? 'T' : 'F') +
      (totals.J >= totals.P ? 'J' : 'P');

    const info = TYPES[code];
    const pctE = Math.round(totals.E / (totals.E + totals.I) * 100);
    const pctN = Math.round(totals.N / (totals.N + totals.S) * 100);
    const pctT = Math.round(totals.T / (totals.T + totals.F) * 100);
    const pctJ = Math.round(totals.J / (totals.J + totals.P) * 100);

    return {
      code, name: info.name, desc: info.desc,
      kekuatan: info.kekuatan, berkembang: info.berkembang, kerja: info.kerja,
      breakdown: [
        { hiLabel: 'E · Extrovert', loLabel: 'I · Introvert', pct: pctE, narrative: axisNarrative(pctE, 'E', 'I') },
        { hiLabel: 'N · Intuition', loLabel: 'S · Sensing', pct: pctN, narrative: axisNarrative(pctN, 'N', 'S') },
        { hiLabel: 'T · Thinking', loLabel: 'F · Feeling', pct: pctT, narrative: axisNarrative(pctT, 'T', 'F') },
        { hiLabel: 'J · Judging', loLabel: 'P · Perceiving', pct: pctJ, narrative: axisNarrative(pctJ, 'J', 'P') }
      ],
      placeholders: {
        KODE: code, NAMA_TIPE: info.name,
        PCT_E: pctE + '%', PCT_N: pctN + '%', PCT_T: pctT + '%', PCT_J: pctJ + '%'
      }
    };
  }

  return {
    testType: 'MBTI',
    brand: 'PETA KEPRIBADIAN',
    title: 'Temukan Empat Huruf yang Memetakan Caramu Berpikir',
    lede: 'Tes ini memakai kerangka empat dimensi ala Myers–Briggs (MBTI) — 32 pernyataan singkat, sekitar 6–8 menit. Jawab sejujurnya berdasarkan kebiasaanmu sehari-hari, bukan versi ideal dirimu.',
    legend: [
      { strong: 'E vs I', desc: '— arah energi' },
      { strong: 'S vs N', desc: '— cara menyerap info' },
      { strong: 'T vs F', desc: '— cara memutuskan' },
      { strong: 'J vs P', desc: '— cara menjalani hidup' }
    ],
    questions: QUESTIONS,
    computeResult
  };
})();

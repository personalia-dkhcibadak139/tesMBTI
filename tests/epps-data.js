// Data ini diekstrak otomatis dari file "Soal_EPPS.pdf" dan kunci skoring
// "SKORING_EPPS_CLARA_SHINTA_AZAHRA.xls" milik user — termasuk 4 tabel norma
// persentil asli (College Men/Women, General Adult Men/Women) dari sheet EPPS TEST.

const TEST_CONFIG = (function () {

  const NEED_ORDER = ["ach", "def", "ord", "exh", "aut", "aff", "int", "suc", "dom", "aba", "nur", "chg", "end", "het", "agg"];
  const NEED_NAMES = {"ach": "Achievement (Berprestasi)", "def": "Deference (Menghormati Otoritas)", "ord": "Order (Keteraturan)", "exh": "Exhibition (Menonjolkan Diri)", "aut": "Autonomy (Kemandirian)", "aff": "Affiliation (Afiliasi/Persahabatan)", "int": "Intraception (Memahami Diri & Orang Lain)", "suc": "Succorance (Mencari Dukungan)", "dom": "Dominance (Dominasi/Memimpin)", "aba": "Abasement (Rendah Diri)", "nur": "Nurturance (Mengasuh/Menolong)", "chg": "Change (Perubahan/Variasi)", "end": "Endurance (Ketekunan)", "het": "Heterosexuality (Ketertarikan Lawan Jenis)", "agg": "Aggression (Agresivitas)"};
  const NEED_DESC = {"ach": "Dorongan untuk berprestasi, menyelesaikan tugas sulit, dan mengungguli diri sendiri maupun orang lain.", "def": "Kecenderungan menghormati pendapat orang lain, mengikuti arahan, dan menyesuaikan diri dengan otoritas.", "ord": "Kebutuhan akan keteraturan, kerapian, dan perencanaan yang sistematis dalam bekerja.", "exh": "Keinginan menjadi pusat perhatian dan dikenal atas apa yang dilakukan atau dikatakan.", "aut": "Dorongan untuk mandiri, bebas dari aturan, dan bertindak sesuai kehendak sendiri.", "aff": "Kebutuhan menjalin persahabatan, kedekatan, dan loyalitas dalam pertemanan.", "int": "Ketertarikan memahami perasaan dan motif diri sendiri maupun orang lain secara mendalam.", "suc": "Kebutuhan menerima dukungan, simpati, dan perhatian dari orang lain saat kesulitan.", "dom": "Dorongan memimpin, mempengaruhi, dan mengarahkan tindakan orang lain.", "aba": "Kecenderungan merasa bersalah, rendah diri, atau menyalahkan diri sendiri saat gagal.", "nur": "Kebutuhan menolong, mendukung, dan peduli terhadap orang lain yang kesulitan.", "chg": "Dorongan mencari variasi, pengalaman baru, dan menghindari rutinitas.", "end": "Ketekunan menyelesaikan tugas sampai tuntas meski menghadapi hambatan.", "het": "Ketertarikan terhadap lawan jenis dan aktivitas yang berkaitan dengannya.", "agg": "Kecenderungan menyerang pendapat orang lain, mengkritik, atau meluapkan amarah secara terbuka."};

  const QUESTIONS = [
    { no: 1, A: "Saya ingin menolong teman-teman saya, bila mereka berada dalam kesulitan.", B: "Saya ingin berkarya dan bekerja sebaik mungkin.", needA: null, needB: null },
    { no: 2, A: "Saya ingin mengetahui pandangan tokoh-tokoh dan para ahli mengenai berbagai masalah yang menarik perhatian saya.", B: "Saya ingin ahli dalam suatu pekerjaan, jabatan, atau bidang khusus.", needA: "def", needB: "ach" },
    { no: 3, A: "Saya ingin setiap pekerjaan, tulisan saya, teliti, rapi dan tersusun dengan baik.", B: "Saya ingin ahli dalam suatu pekerjaan, jabatan atau bidang khusus.", needA: "ord", needB: "ach" },
    { no: 4, A: "Saya suka menceritakan hal-hal yang lucu waktu pesta.", B: "Saya ingin menulis roman, atau sandiwara yang hebat.", needA: "exh", needB: "ach" },
    { no: 5, A: "Saya ingin dapat berbuat sekehendak hati.", B: "Saya ingin dapat menyatakan bahwa saya telah menyelesaikan dengan baik suatu pekerjaan yang memang sulit.", needA: "aut", needB: "ach" },
    { no: 6, A: "Saya ingin memecahkan teka-teki dan persoalan yang memang sukar bagi orang lain.", B: "Saya suka mengikuti petunjuk-petunjuk dan melakukan hal-hal yang orang harapkan dari diri saya.", needA: "ach", needB: "def" },
    { no: 7, A: "Saya ingin mengalami hal-hal yang baru dan perubahan-perubahan dalam kehidupan saya sehari-hari.", B: "Saya suka menyatakan pada atasan saya bahwa mereka telah melakukan suatu pekerjaan dengan baik, bila memang demikian halnya menurut pikiran saya.", needA: null, needB: null },
    { no: 8, A: "Saya terbiasa merencanakan dan mengatur detail-detail dari setiap pekerjaan yang harus saya lakukan.", B: "Saya suka mengikuti petunjuk-petunjuk dan melakukan hal-hal yang orang harapkan dari diri saya.", needA: "ord", needB: "def" },
    { no: 9, A: "Saya ingin orang memperhatikan dan berkomentar mengenai penampilan saya di depan umum.", B: "Saya suka membaca riwayat hidup orang-orang besar.", needA: "exh", needB: "def" },
    { no: 10, A: "Saya suka mengelakkan keadaan untuk berlaku secara konvensional (kebiasaan umum).", B: "Saya suka membaca riwayat hidup orang-orang besar.", needA: "aut", needB: "def" },
    { no: 11, A: "Saya ingin ahli dalam suatu pekerjaan, jabatan atau bidang khusus.", B: "Saya ingin pekerjaan saya diatur dan direncanakan sebelum dimulai.", needA: "ach", needB: "ord" },
    { no: 12, A: "Saya ingin mengetahui pandangan tokoh-tokoh dan para ahli mengenai berbagai masalah yang menarik perhatian saya.", B: "Jika saya harus bepergian, maka saya ingin segala sesuatunya telah direncanakan terlebih dahulu", needA: "def", needB: "ord" },
    { no: 13, A: "Saya ingin mengerjakan sampai benar-benar selesai setiap pekerjaan ataupun tugas yang telah saya mulai.", B: "Saya ingin perlengkapan keperluan saya tersusun rapi dan teratur di tempat yang semestinya atau di dalam ruang kerja saya.", needA: null, needB: null },
    { no: 14, A: "Saya suka bercerita kepada orang-orang lain tentang petualangan dan hal-hal aneh yang pernah saya alami.", B: "Saya suka makan saya teratur dan ada waktu tertentu untuk makan.", needA: "exh", needB: "ord" },
    { no: 15, A: "Saya tak ingin tergantung orang lain saat menentukan hal yang akan saya lakukan.", B: "Saya ingin perlengkapan keperluan saya tersusun rapi dan teratur di tempat yang semestinya atau di dalam ruang kerja saya.", needA: "aut", needB: "ord" },
    { no: 16, A: "Saya ingin mengerjakan segala sesuatu lebih baik daripada orang lain.", B: "Saya suka menceritakan hal-hal yang lucu waktu pesta.", needA: "ach", needB: "exh" },
    { no: 17, A: "Saya suka mengikuti adat istiadat dan menghindarkan hal-hal yang mungkin dianggap tak wajar oleh orang-orang yang saya hormati.", B: "Saya suka berbicara tentang hal-hal yang telah saya capai.", needA: "def", needB: "exh" },
    { no: 18, A: "Saya ingin agar hidup saya teratur sedemikian rupa sehingga berjalan lancar dan tanpa banyak perubahan rencana.", B: "Saya suka bercerita kepada orang-orang lain tentang petualangan dan hal-hal aneh yang pernah saya alami.", needA: "ord", needB: "exh" },
    { no: 19, A: "Saya suka membaca buku-buku atau sandiwara-sandiwara yang terutama berkisar sekitar soal-soal seks.", B: "Saya suka menjadi pusat perhatian dalam kelompok.", needA: null, needB: null },
    { no: 20, A: "Saya suka mengecam orang-orang yang dianggap berwenang.", B: "saya suka menggunakan kata-kata yang maknanya sering tak diketahui orang lain.", needA: "aut", needB: "exh" },
    { no: 21, A: "Saya ingin menyelesaikan tugas yang memang membutuhkan ketrampilan serta usaha.", B: "Saya ingin dapat berbuat sekehendak hati.", needA: "ach", needB: "aut" },
    { no: 22, A: "Saya suka memuji seseorang yang saya kagumi.", B: "Saya ingin merasa bebas melakukan yang saya kehendaki.", needA: "def", needB: "aut" },
    { no: 23, A: "Saya suka menyimpan surat, bon, dan kertas-kertas lain secara rapi dan menurut sistem tertentu.", B: "Saya tak ingin tergantung orang lain saat menentukan hal yang akan saya lakukan.", needA: "ord", needB: "aut" },
    { no: 24, A: "Saya suka mengajukan pertanyaan yang setahu saya tak seorangpun akan bisa menjawabnya.", B: "Saya suka mengecam orang-orang yang dianggap berwenang.", needA: "exh", needB: "aut" },
    { no: 25, A: "Saya menjadi sedemikian marah, rasanya ingin melemparkan, dan merusak barang- barang.", B: "Saya tak ingin memikul tanggungjawab dan kewajiban yang ditetapkan orang lain.", needA: null, needB: null },
    { no: 26, A: "Saya ingin berhasil dalam setiap hal yang saya lakukan.", B: "Saya suka memperoleh teman-teman baru.", needA: "ach", needB: "aff" },
    { no: 27, A: "saya suka mengikuti petunjuk-petunjuk dan melakukan hal-hal yang orang harapkan dari diri saya.", B: "Saya ingin keterikatan perasaan bersama yang kuat dengan teman-teman saya.", needA: "def", needB: "aff" },
    { no: 28, A: "Saya ingin setiap pekerjaan, tulisan saya, teliti, rapi dan tersusun dengan baik.", B: "Saya ingin memperoleh teman sebanyak mungkin.", needA: "ord", needB: "aff" },
    { no: 29, A: "Saya suka menceritakan hal-hal yang lucu waktu pesta.", B: "Saya suka berkirim surat kepada teman-teman saya.", needA: "exh", needB: "aff" },
    { no: 30, A: "Saya ingin dapat berbuat sekehendak hati.", B: "Saya suka melakukan atau menjalani sesuatu bersama teman-teman saya.", needA: "aut", needB: "aff" },
    { no: 31, A: "Saya ingin memecahkan teka-teki dan persoalan yang memang sukar bagi orang lain.", B: "Saya suka menilai orang berdasarkan alasan mereka melakukan sesuatu dan bukan atas dasar yang sesungguhnya mereka lakukan.", needA: "ach", needB: "int" },
    { no: 32, A: "Saya suka dipimpin orang-orang yang saya kagumi.", B: "Saya ingin memahami perasaan teman-teman saya dalam menghadapi berbagai masalah.", needA: "def", needB: "int" },
    { no: 33, A: "Saya suka makan saya teratur dan ada waktu tertentu untuk makan.", B: "Saya suka mempelajari dan menganalisa tingkah laku orang-orang lain.", needA: "ord", needB: "int" },
    { no: 34, A: "Saya ingin mengatakan hal-hal yang dianggap lucu dan cerdas oleh orang-orang lain.", B: "Saya suka menempatkan diri saya ke dalam kedudukan orang lain dan membayangkan bagaimana perasaan saya bila berada dalam keadaan yang sama.", needA: "exh", needB: "int" },
    { no: 35, A: "Saya ingin merasa bebas melakukan yang saya kehendaki.", B: "Saya suka mengamati perasaan orang lain dalam suatu keadaan tertentu.", needA: "aut", needB: "int" },
    { no: 36, A: "Saya ingin menyelesaikan tugas yang memang membutuhkan ketrampilan serta usaha.", B: "Saya ingin teman-teman memberi dorongan kepada saya bila saya menghadapi kegagalan.", needA: "ach", needB: "suc" },
    { no: 37, A: "Dalam merencanakan sesuatu, saya ingin mendapat saran-saran dari orang-orang yang pendapatnya saya hormati.", B: "Saya ingin diperlakukan dengan ramah oleh teman-teman saya.", needA: "def", needB: "suc" },
    { no: 38, A: "Saya ingin agar hidup saya teratur sedemikian rupa sehingga berjalan lancar dan tanpa banyak perubahan rencana.", B: "Saya ingin teman-teman saya merasa kasihan pada saya apabila saya sakit.", needA: "ord", needB: "suc" },
    { no: 39, A: "Saya suka menjadi pusat perhatian dalam kelompok.", B: "Saya ingin teman-teman saya meributkan tentang diri saya bila saya mendapat cedera atau sakit.", needA: "exh", needB: "suc" },
    { no: 40, A: "Saya suka mengelakkan keadaan untuk berlaku secara konvensional (kebiasaan umum).", B: "Saya ingin teman-teman saya bersimpati terhadap saya dan menghibur saya bila saya bersusah hati.", needA: "aut", needB: "suc" },
    { no: 41, A: "Saya ingin menulis roman, atau sandiwara yang hebat.", B: "Bila masuk dalam kepanitiaan, saya ingin ditunjuk atau dipilih sebagai ketuanya.", needA: "ach", needB: "dom" },
    { no: 42, A: "Bila saya berada dalam suatu kelompok, saya suka menerima pimpinan orang lain dalam memutuskan hal-hal yang akan dilakukan.", B: "Saya ingin mengawasi dan mengarahkan tindakan-tindakan orang lain bila keadaan memungkinkan.", needA: "def", needB: "dom" },
    { no: 43, A: "Saya suka menyimpan surat, bon, dan kertas-kertas lain secara rapi dan menurut sistem tertentu.", B: "Saya ingin menjadi salah seorang pemipin dalam oganisasi atau kelompok dimana saya menjadi anggotanya.", needA: "ord", needB: "dom" },
    { no: 44, A: "Saya suka mengajukan pertanyaan yang setahu saya tak seorangpun akan bisa menjawabnya.", B: "Saya suka mengarahkan orang lain bagaimana mereka melakukan pekerjaan mereka.", needA: "exh", needB: "dom" },
    { no: 45, A: "Saya tak ingin memikul tanggung jawab dan kewajiban yang ditetapkan orang lain.", B: "Saya ingin diminta menyelesaikan perdebatan atau perselisihan di antara orang lain.", needA: "aut", needB: "dom" },
    { no: 46, A: "Saya ingin ahli dalam suatu pekerjaan, jabatan atau bidang khusus.", B: "Saya merasa bersalah apabila melakukan sesuatu yang saya ketahui tidak baik.", needA: "ach", needB: "aba" },
    { no: 47, A: "Saya suka membaca riwayat hidup orang-orang besar.", B: "Saya merasa harus mengakui hal-hal tidak baik yang telah saya lakukan.", needA: "def", needB: "aba" },
    { no: 48, A: "Saya terbiasa merencanakan dan mengatur detail-detail dari setiap pekejaan yang harus saya lakukan.", B: "Bila keadaan kurang menguntungkan, saya merasa harus lebih disalahkan daripada orang lain.", needA: "ord", needB: "aba" },
    { no: 49, A: "Saya suka menggunakan kata-kata yang maknanya sering tak diketahui orang lain.", B: "Dalam banyak hal saya merasa kalah dibandingkan dengan orang-orang lain.", needA: "exh", needB: "aba" },
    { no: 50, A: "Saya suka mengecam orang-orang yang dianggap berwenang.", B: "Saya merasa canggung berada diantara orang-orang yang saya anggap sebagai atasan saya.", needA: "aut", needB: "aba" },
    { no: 51, A: "Saya ingin berkarya dan bekerja sebaik mungkin.", B: "Saya suka menolong orang-orang lain yang tidak begitu beruntung seperti saya.", needA: "ach", needB: "nur" },
    { no: 52, A: "Saya ingin mengetahui pandangan tokoh-tokoh dan para ahli mengenai berbagai masalah yang menarik perhatian saya.", B: "Saya suka bermurah hati kepada teman-teman saya.", needA: "def", needB: "nur" },
    { no: 53, A: "Saya suka membuat perencanaan sebelum memulai pekerjaan yang sulit.", B: "Saya suka memberi bantuan-bantuan kecil kepada teman-teman saya.", needA: "ord", needB: "nur" },
    { no: 54, A: "Saya suka bercerita kepada orang-orang lain tentang petualangan dan hal-hal aneh yang pernah saya alami.", B: "Saya ingin teman-teman saya mempercayai saya dan menceritakan kesulitan-kesulitan mereka kepada saya.", needA: "exh", needB: "nur" },
    { no: 55, A: "Saya suka menyatakan pendapat saya tentang berbagai hal.", B: "Saya suka memaafkan teman-teman saya yang kadang-kadang mungkain menyakiti hati saya.", needA: "aut", needB: "nur" },
    { no: 56, A: "Saya ingin mengerjakan segala sesuatu lebih baik daripada orang lain.", B: "Saya suka makan di restoran-restoran baru atau asing.", needA: "ach", needB: "chg" },
    { no: 57, A: "Saya suka mengikuti adat istiadat dan menghindarkan hal-hal yang mungkin dianggap tak wajar oleh orang-orang yang saya hormati.", B: "Saya suka mengikuti mode atau cara baru.", needA: "def", needB: "chg" },
    { no: 58, A: "Saya ingin pekerjaan saya diatur dan direncanakan sebelum dimulai.", B: "Saya suka bepergian melihat-lihat daerah pedalaman.", needA: "ord", needB: "chg" },
    { no: 59, A: "Saya ingin orang memperhatikan dan berkomentar mengenai penampilan saya di depan umum.", B: "Saya suka menjelajahi pedalaman dan tinggal di berbagai tempat.", needA: "exh", needB: "chg" },
    { no: 60, A: "Saya tak ingin tergantung orang lain saat menentukan hal yang akan saya lakukan.", B: "Saya suka melakukan hal-hal baru dan berbeda dari biasanya.", needA: "aut", needB: "chg" },
    { no: 61, A: "Saya ingin dapat menyatakan bahwa saya telah menyelesaikan dengan baik suatu pekerjaan yang memang sulit.", B: "Saya suka bekerja keras pada tiap pekerjaan yang saya hadapi.", needA: "ach", needB: "end" },
    { no: 62, A: "Saya suka menyatakan pada atasan saya bahwa mereka telah melakukan suatu pekerjaan dengan baik, bila memang demikian halnya menurut pikiran saya.", B: "Saya ingin menyelesaikan pekerjaan satu-persatu, sebelum memulai yang lainnya.", needA: "def", needB: "end" },
    { no: 63, A: "Jika saya harus bepergian, maka saya ingin segala sesuatunya telah direncanakan terlebih dahulu.", B: "Saya ingin mengerjakan teka-teki atau memecahkan persoalan-persoalan sampai selesai.", needA: "ord", needB: "end" },
    { no: 64, A: "Saya kadang-kadang suka melakukan hal-hal semata-mata untuk melihat reaksi orang lain.", B: "Saya suka bertahan menghadapi suatu pekerjaan atau masalah sekalipun tampaknya seolah-olah saya tak akan berhasil.", needA: "exh", needB: "end" },
    { no: 65, A: "Saya suka melakukan hal yang dianggap tak sesuai dengan adat kebiasaan.", B: "Saya ingin bekerja berjam-jam tanpa gangguan.", needA: "aut", needB: "end" },
    { no: 66, A: "Saya ingin mengerjakan sesuatu yang berarti.", B: "Saya suka mencium lawan jenis saya yang menarik.", needA: "ach", needB: "het" },
    { no: 67, A: "Saya suka memuji seseorang yang saya kagumi.", B: "Saya ingin dianggap punya daya tarik fisik oleh lawan jenis saya.", needA: "def", needB: "het" },
    { no: 68, A: "Saya ingin perlengkapan keperluan saya tersusun rapi dan teratur di tempat yang semestinya atau di dalam ruang kerja saya.", B: "Saya suka jatuh cinta kepada seseorang dari lawan jenis saya.", needA: "ord", needB: "het" },
    { no: 69, A: "Saya suka berbicara tentang hal-hal yang telah saya capai.", B: "Saya suka mendengarkan atau menceritakan sejumlah lelucon yang berkisar sekitar soal seks.", needA: "exh", needB: "het" },
    { no: 70, A: "Saya ingin melakukan setiap hal dengan cara saya sendiri tanpa menghiraukan pemikiran orang lain.", B: "Saya suka buku, sandiwara (film) yang berkisar soal seks.", needA: "aut", needB: "het" },
    { no: 71, A: "Saya ingin menulis roman, atau sandiwara yang hebat.", B: "Saya suka menyerang pendirian yang bertentangan dengan pendirian saya.", needA: "ach", needB: "agg" },
    { no: 72, A: "Bila saya berada dalam suatu kelompok, saya suka menerima pimpinan orang lain dalam memutuskan hal-hal yang akan dilakukan.", B: "Ingin rasanya saya mengecam seseorang di muka umum bila dia memang patut menerimanya.", needA: "def", needB: "agg" },
    { no: 73, A: "Saya ingin agar hidup saya teratur sedemikian rupa sehingga berjalan lancar dan tanpa banyak perubahan rencana.", B: "Saya menjadi sedemikian marah, ingin rasanya melemparkan, dan merusak barang- barang.", needA: "ord", needB: "agg" },
    { no: 74, A: "Saya suka mengajukan pertanyaan yang setahu saya tak seorangpun akan bisa menjawabnya.", B: "Saya suka mengatakan kepada orang lain pendapat saya mengenai mereka.", needA: "exh", needB: "agg" },
    { no: 75, A: "Saya tak ingin memikul tanggung jawab dan kewajiban yang ditetapkan orang lain.", B: "Ingin rasanya saya memperolok orang-orang yang melakukan hal-hal yang saya anggap bodoh.", needA: "aut", needB: "agg" },
    { no: 76, A: "Saya ingin setia terhadap teman-teman saya.", B: "Saya ingin berkarya dan bekerja sebaik mungkin.", needA: "aff", needB: "ach" },
    { no: 77, A: "Saya suka mengamati perasaan orang lain dalam suatu keadaan tertentu.", B: "Saya ingin dapat menyatakan bahwa saya telah menyelesaikan dengan baik suatu pekerjaan yang memang sulit.", needA: "int", needB: "ach" },
    { no: 78, A: "Saya ingin teman-teman memberi dorongan kepada saya bila saya menghadapi kegagalan.", B: "Saya ingin berhasil dalam setiap hal yang saya lakukan.", needA: "suc", needB: "ach" },
    { no: 79, A: "Saya ingin menjadi salah seorang pemimpin dalam organisasi atau kelompok dimana saya menjadi anggotanya.", B: "Saya ingin mengerjakan segala sesuatu lebih baik daripada orang lain.", needA: "dom", needB: "ach" },
    { no: 80, A: "Bila keadaan kurang menguntungkan, saya merasa harus lebih disalahkan daripada orang lain.", B: "Saya ingin memecahkan teka-teki dan persoalan yang memang sukar bagi orang lain.", needA: "aba", needB: "ach" },
    { no: 81, A: "Saya suka melakukan sesuatu untuk kepentingan teman-teman saya.", B: "Dalam merencanakan sesuatu, saya ingin mendapat saran-saran dari orang-orang yang pendapatnya saya hormati.", needA: "aff", needB: "def" },
    { no: 82, A: "Saya suka menempatkan diri saya ke dalam kedudukan orang lain dan membayangkan bagaimana perasaan saya bila berada dalam keadaan yang sama.", B: "Saya suka menyatakan pada atasan saya bahwa mereka telah melakukan suatu pekerjaan dengan baik, bila memang demikian halnya menurut pikiran saya.", needA: "int", needB: "def" },
    { no: 83, A: "Saya ingin teman-teman saya menunjukkan simpati dan pengertian bila saya mengalami kesukaran.", B: "Saya suka dipimpin orang-orang yang saya kagumi.", needA: "suc", needB: "def" },
    { no: 84, A: "Bila masuk dalam kepanitiaan, saya ingin ditunjuk atau di pilih sebagai ketuanya.", B: "Bila saya berada dalam suatu kelompok, saya suka menerima pimpinan orang lain dalam memutuskan hal-hal yang akan dilakukan.", needA: "dom", needB: "def" },
    { no: 85, A: "Bila saya melakukan kesalahan, saya merasa harus dihukum.", B: "Saya suka mengikuti adat-istiadat dan menghindarkan hal-hal yang mungkin dianggap tak wajar oleh orang-orang yang saya hormati.", needA: "aba", needB: "def" },
    { no: 86, A: "Saya suka melakukan atau menjalani sesuatu bersama teman-teman saya.", B: "Saya suka membuat perencanaan sebelum memulai pekerjaan yang sulit.", needA: "aff", needB: "ord" },
    { no: 87, A: "Saya ingin memahami perasaan teman-teman saya dalam menghadapi berbagai masalah.", B: "Jika saya harus bepergian, maka saya ingin segala sesuatunya telah direncanakan terlebih dahulu.", needA: "int", needB: "ord" },
    { no: 88, A: "Saya ingin diperlakukan dengan ramah oleh teman-teman saya.", B: "Saya ingin pekerjaan saya diatur dan direncanakan sebelum dimulai.", needA: "suc", needB: "ord" },
    { no: 89, A: "Saya ingin dianggap pemimpin oleh orang lain.", B: "Saya suka menyimpan surat, bon, dan kertas-kertas lain secara rapi dan menurut sistem tertentu.", needA: "dom", needB: "ord" },
    { no: 90, A: "Bagi saya kesedihan dan kesusahan saya, lebih banyak membawa kebaikan daripada kerugian.", B: "Saya ingin agar hidup saya teratur sedemikian rupa sehinga berjalan lancar dan tanpa banyak perubahan rencana.", needA: "aba", needB: "ord" },
    { no: 91, A: "Saya ingin keterikatan perasaan bersama yang kuat dengan teman-teman saya.", B: "Saya ingin mengatakan hal-hal yang dianggap lucu dan cerdas oleh orang-orang lain.", needA: "aff", needB: "exh" },
    { no: 92, A: "Saya suka merenungkan kepribadian teman-teman saya dan mencoba mengerti hal-hal yang menjadikan mereka sebagaimana terlihat.", B: "Saya kadang-kadang suka melakukan hal-hal semata-mata untuk melihat reaksi orang lain.", needA: "int", needB: "exh" },
    { no: 93, A: "Saya ingin teman-teman saya meributkan tentang diri saya bila saya mendapat cedera atau sakit.", B: "Saya suka berbicara tentang hal-hal yang telah saya capai.", needA: "suc", needB: "exh" },
    { no: 94, A: "Saya suka mengarahkan orang lain bagaimana mereka melakukan pekerjaan mereka.", B: "Saya suka menjadi pusat perhatian dalam kelompok.", needA: "dom", needB: "exh" },
    { no: 95, A: "Saya merasa canggung berada diantara orang-orang yang saya anggap sebagai atasan saya.", B: "Saya suka menggunakan kata-kata yang maknanya sering tak diketahui orang lain.", needA: "aba", needB: "exh" },
    { no: 96, A: "Saya lebih suka mengerjakan sesuatu bersama teman-teman saya daripada sendirian.", B: "Saya suka menyatakan pendapat saya tentang berbagai hal.", needA: "aff", needB: "aut" },
    { no: 97, A: "Saya suka mempelajari dan menganalisa tingkah laku orang-orang lain.", B: "Saya suka melakukan hal yang dianggap tak sesuai dengan adat kebiasaan.", needA: "int", needB: "aut" },
    { no: 98, A: "Saya ingin teman-teman saya merasa kasihan pada saya apabila saya sakit.", B: "Saya suka mengelakkan keadaan untuk berlaku secara konvensional (kebiasaan umum).", needA: "suc", needB: "aut" },
    { no: 99, A: "Saya ingin mengawasi dan mengarahkan tindakan-tindakan orang lain bila keadaan memungkinkan.", B: "Saya ingin melakukan setiap hal dengan cara saya sendiri tanpa menghiraukan pemikiran orang lain.", needA: "dom", needB: "aut" },
    { no: 100, A: "Dalam banyak hal saya merasa kalah dibandingkan dengan orang-orang lain.", B: "Saya tak ingin memikul tanggung jawab dan kewajiban yang ditetapkan orang lain.", needA: "aba", needB: "aut" },
    { no: 101, A: "Saya ingin berhasil dalam setiap hal yang saya lakukan.", B: "Saya suka memperoleh teman-teman baru.", needA: null, needB: null },
    { no: 102, A: "Saya suka menganalisa perasaan dan alasan saya melakukan sesuatu.", B: "Saya ingin memperoleh teman sebanyak mungkin.", needA: "int", needB: "aff" },
    { no: 103, A: "Saya ingin agar teman-teman saya membantu saya bila saya mengalami kesulitan.", B: "Saya suka melakukan sesuatu untuk kepentingan teman-teman saya.", needA: "suc", needB: "aff" },
    { no: 104, A: "Saya suka memperdebatkan pendirian saya bila diserang orang lain.", B: "Saya suka berkirim surat kepada teman-teman saya.", needA: "dom", needB: "aff" },
    { no: 105, A: "Saya merasa bersalah apabila melakukan sesuatu yang saya ketahui tidak baik.", B: "Saya ingin keterikatan perasaan bersama yang kuat dengan teman-teman saya.", needA: "aba", needB: "aff" },
    { no: 106, A: "Saya suka melakukan atau menjalani sesuatu bersama teman-teman saya.", B: "Saya suka menganalisa perasaan dan alasan saya melakukan sesuatu.", needA: "aff", needB: "int" },
    { no: 107, A: "Saya suka menerima pimpinan orang-orang yang saya kagumi.", B: "Saya ingin memahami perasaan teman-teman saya dalam menghadapi berbagai masalah.", needA: null, needB: null },
    { no: 108, A: "Saya ingin teman-teman saya dengan gembira memberikan bantuan-bantuan kecil kepada saya.", B: "Saya suka menilai orang berdasarkan alasan mereka melakukan sesuatu dan bukan atas dasar yang sesungguhnya mereka lakukan.", needA: "suc", needB: "int" },
    { no: 109, A: "Bila berada dalam suatu kelompok, saya ingin menentukan hal-hal yang akan dilakukan.", B: "Saya suka meramalkan bagaimana teman-teman saya akan bertindak dalam berbagai situasi.", needA: "dom", needB: "int" },
    { no: 110, A: "Saya lebih suka mengalah dan menghindarkan pertengkaran daripada memakasakan kemauan saya.", B: "Saya suka menganalisa perasaan orang lain dan alasan mereka melakkan sesuatu.", needA: "aba", needB: "int" },
    { no: 111, A: "Saya suka memperoleh teman-teman baru.", B: "Saya ingin agar teman-teman saya membantu saya bila saya mengalami kesulitan.", needA: "aff", needB: "suc" },
    { no: 112, A: "Saya suka menilai orang berdasarkan alasan mereka melakukan sesuatu dan bukan atas dasar yang sesungguhnya mereka lakukan.", B: "Saya ingin teman-teman saya banyak menunjukkan rasasayang mereka terhadap saya.", needA: "int", needB: "suc" },
    { no: 113, A: "Saya ingin agar hidup saya teratur sedemikian rupa sehingga berjalan lancar dan tanpa banyak perubahan-perubahan dalam rencana-rencana saya.", B: "Saya ingin teman-teman saya merasa kasihan pada saya apabila saya sakit.", needA: null, needB: null },
    { no: 114, A: "Saya ingin diminta menyelesaikan perdebatan atas perselisihan di antara orang lain.", B: "Saya ingin teman-teman saya dengan gembira memberikan bantuan-bantuan kecil kepada saya.", needA: "dom", needB: "suc" },
    { no: 115, A: "Saya merasa harus mengakui hal-hal tidak baik yang telah saya lakukan.", B: "Saya ingin teman-teman saya bersimpati terhadap saya dan menghibur saya bila saya bersusah hati.", needA: "aba", needB: "suc" },
    { no: 116, A: "Saya lebih suka mengerjakan sesuatu bersama teman-teman saya daripada sendirian.", B: "Saya suka memperdebatkan pendirian saya bila diserang orang lain.", needA: "aff", needB: "dom" },
    { no: 117, A: "Saya suka merenungkan kepribadian teman-teman saya dan mencoba mengerti hal-hal yang menjadikan mereka sebagaimana terlihat.", B: "Saya ingin mampu membujuk dan mempengaruhi orang lain melakukan hal-hal yang saya kehendaki.", needA: "int", needB: "dom" },
    { no: 118, A: "Saya ingin teman-teman saya bersimpati terhadap saya dan menghibur saya bila saya bersusah hati.", B: "Bila berada dalam suatu kelompok, saya ingin menentukan hal-hal yang akan dilakukan.", needA: "suc", needB: "dom" },
    { no: 119, A: "Saya suka mengajukan pertanyaan yang setahu saya tak seorangpun akan bisa menjawabnya.", B: "Saya suka mengarahkan orang lain bagaimana mereka melakukan pekerjaan mereka.", needA: null, needB: null },
    { no: 120, A: "Saya merasa canggung berada diantara orang-orang yang saya anggap sebagai atasan saya.", B: "Saya ingin mengawasi dan mengarahkan tindakan-tindakan orang lain bila keadaan memungkinkan.", needA: "aba", needB: "dom" },
    { no: 121, A: "Saya suka bergaul dalam lingkungan yang mempunyai perasaan akrab satu sama lain.", B: "Saya merasa bersalah apabila melakukan sesuatu yang saya ketahui tidak baik.", needA: "aff", needB: "aba" },
    { no: 122, A: "Saya suka menganalisa perasaan orang lain dan alasan mereka melakukan sesuatu.", B: "Saya merasa sedih atas ketidakmampuan saya menghadapi berbagai macam keadaan.", needA: "int", needB: "aba" },
    { no: 123, A: "Saya ingin teman-teman saya merasa kasihan pada saya apabila saya sakit.", B: "Saya lebih suka mengalah dan menghindarkan pertengkaran daripada memaksakan kemauan saya.", needA: "suc", needB: "aba" },
    { no: 124, A: "Saya ingin mampu membujuk dan mempengaruhi orang lain melakukan hal-hal yang saya kehendaki.", B: "Saya merasa sedih atas ketidakmampuan saya menghadapi berbagai macam keadaan.", needA: "dom", needB: "aba" },
    { no: 125, A: "Saya suka mengecam orang-orang yang dianggap berwenang.", B: "Saya merasa canggung berada diantara orang-orang yang saya anggap sebagai atasan saya.", needA: null, needB: null },
    { no: 126, A: "Saya suka bergaul dalam lingkungan yang mempunyai perasaan akrab satu sama lain.", B: "Saya suka menolong teman-teman saya bila mereka berada dalam kesulitan.", needA: "aff", needB: "nur" },
    { no: 127, A: "Saya suka menganalisa perasaan dan alasan saya melakukan sesuatu.", B: "Saya suka menunjukkan simpati saya kepada teman-teman saya bila mereka mendapat cedera atau sakit.", needA: "int", needB: "nur" },
    { no: 128, A: "Saya ingin agar teman-teman saya membantu saya bila saya mengalami kesulitan.", B: "Saya suka memperlakukan orang lain dengan ramah dan simpatik.", needA: "suc", needB: "nur" },
    { no: 129, A: "Saya ingin menjadi salah seorang pemimpin dalam organisasi atau kelompok dimana saya menjadi anggotanya.", B: "Saya suka menunjukkan simpati saya kepada teman-teman saya bila mereka mendapat cedera atau sakit.", needA: "dom", needB: "nur" },
    { no: 130, A: "Bagi saya kesedihan dan kesusahan saya, lebih banyak membawa kebaikan daripada kerugian.", B: "Saya suka berlaku sangat ramah terhadap teman-teman saya.", needA: "aba", needB: "nur" },
    { no: 131, A: "Saya lebih suka mengerjakan sesuatu bersama teman-teman saya daripada sendirian.", B: "Saya suka bereksperimen,dan mencoba hal-hal baru.", needA: "aff", needB: "chg" },
    { no: 132, A: "Saya suka merenungkan kepribadian teman-teman saya dan mencoba memahami hal-hal yang membuat mereka sebagaimana terlihat.", B: "Saya lebih menyukai mencoba pekerjaan baru daripada melakukan pekerjaan tetap.", needA: "int", needB: "chg" },
    { no: 133, A: "Saya ingin teman-teman saya menunjukkan simpati dan pengertian bila saya mengalami kesukaran.", B: "Saya suka bertemu dengan orang-orang baru.", needA: "suc", needB: "chg" },
    { no: 134, A: "Saya suka memperdebatkan pendirian saya bila diserang orang lain.", B: "Saya ingin mengalami hal-hal baru dan perubahan dalam kehidupan saya sehari-hari.", needA: "dom", needB: "chg" },
    { no: 135, A: "Saya suka bergaul dalam lingkungan yang mempunyai perasaan akrab satu sama lain.", B: "Saya suka menjelajahi pedalaman dan tinggal di berbagai tempat.", needA: "aba", needB: "chg" },
    { no: 136, A: "Saya suka melakukan sesuatu untuk kepentingan teman-teman saya.", B: "Bila saya melakukan suatu tugas, saya ingin mengerjakannya sampai benar-benar selesai.", needA: "aff", needB: "end" },
    { no: 137, A: "Saya suka menganalisa perasaan orang lain dan alasan mereka melakukan sesuatu.", B: "Saya ingin menghindarkan gangguan bila saya sedang bekerja.", needA: "int", needB: "end" },
    { no: 138, A: "Saya ingin teman-teman saya dengan gembira memberikan bantuan-bantuan kecil kepada saya.", B: "Saya suka bekerja sampai jauh malam menyelesaikan suatu pekerjaan.", needA: "suc", needB: "end" },
    { no: 139, A: "Saya ingin dianggap pemimpin oleh orang lain.", B: "Saya ingin bekerja berjam-jam tanpa gangguan.", needA: "dom", needB: "end" },
    { no: 140, A: "Bila saya melakukan kesalahan, saya merasa harus dihukum.", B: "Saya suka bertahan menghadapi suatu pekerjaan atau masalah sekalipun tampaknya seolah-olah saya tak akan berhasil.", needA: "aba", needB: "end" },
    { no: 141, A: "Saya ingin setia terhadap teman-teman saya.", B: "(untuk laki-laki) Saya suka bepergian dengan wanita-wanita yang menarik. (untuk wanita) Saya suka bepergian dengan laki-laki yang menarik.", needA: "aff", needB: "het" },
    { no: 142, A: "Saya suka meramalkan bagaimana teman-teman saya akan bertindak dalam berbagai situasi.", B: "Saya suka ikut serta dalam diskusi tentang seks dan aktivitas seksual.", needA: "int", needB: "het" },
    { no: 143, A: "Saya ingin agar teman-teman saya banyak menunjukkan rasa sayang mereka terhadap saya.", B: "Saya suka nafsu saya terangsang.", needA: "suc", needB: "het" },
    { no: 144, A: "Bila berada dalam suatu kelompok, saya ingin menentukan hal-hal yang akan dilakukan.", B: "Saya suka bersibuk dalam aktivitas sosial bersama orang-orang dari lawan jenis saya.", needA: "dom", needB: "het" },
    { no: 145, A: "Saya merasa sedih atas ketidakmampuan saya menghadapi berbagai macam keadaan.", B: "Saya suka buku, sandiwara (film) yang berkisar soal seks.", needA: "aba", needB: "het" },
    { no: 146, A: "Saya suka berkirim surat kepada teman-teman saya.", B: "Saya suka membaca berita kabar tentang pembunuhan, dan perbuatan kekerasan lain.", needA: "aff", needB: "agg" },
    { no: 147, A: "Saya suka meramalkan bagaimana teman-teman saya akan bertindak dalam berbagai situasi.", B: "Saya suka menyerang pendirian yang bertentangan dengan pendirian saya.", needA: "int", needB: "agg" },
    { no: 148, A: "Saya ingin teman-teman saya meributkan tentang diri saya bila saya mendapat cedera atau sakit.", B: "Bila keadaan kurang menguntungkan, ingin rasanya saya menyalahkan orang lain.", needA: "suc", needB: "agg" },
    { no: 149, A: "Saya suka mengarahkan orang lain bagaimana mereka melakukan pekerjaan mereka.", B: "Saya ingin membalas dendam terhadap orang yang menghina saya.", needA: "dom", needB: "agg" },
    { no: 150, A: "Dalam banyak hal saya merasa kalah dibandingkan dengan orang-orang lain.", B: "Ingin rasanya saya menghardik orang lain bila berbeda pendapat dengan mereka.", needA: "aba", needB: "agg" },
    { no: 151, A: "Saya suka menolong teman-teman saya bila mereka berada dalam kesulitan.", B: "Saya ingin berkarya dan bekerja sebaik mungkin.", needA: "nur", needB: "ach" },
    { no: 152, A: "Saya suka bepergian melihat-lihat daerah pedalaman.", B: "Saya ingin menyelesaikan tugas yang memang membutuhkan keterampilan serta usaha.", needA: "chg", needB: "ach" },
    { no: 153, A: "Saya suka bekerja keras pada tiap pekerjaan yang saya hadapi.", B: "Saya ingin mengerjakan sesuatu yang berarti.", needA: "end", needB: "ach" },
    { no: 154, A: "(untuk wanita) Saya suka bepergian dengan laki-laki yang menarik. (untuk laki-laki) Saya suka bepergian dengan wanita-wanita yang menarik.", B: "Saya ingin berhasil dalam setiap hal yang saya lakukan.", needA: "het", needB: "ach" },
    { no: 155, A: "Saya suka membaca berita kabar tentang pembunuhan, dan perbuatan kekerasan lain.", B: "Saya ingin menulis roman, atau sandiwara yang hebat.", needA: "agg", needB: "ach" },
    { no: 156, A: "Saya suka memberi bantuan-bantuan kecil kepada teman-teman saya.", B: "Dalam merencanakan sesuatu, saya ingin mendapat saran-saran dari orang-orang yang pendapatnya saya hormati.", needA: "nur", needB: "def" },
    { no: 157, A: "Saya ingin mengalami hal-hal baru dan perubahan dalam kehidupan saya sehari-hari.", B: "Saya suka menyatakan pada atasan saya bahwa mereka telah melakukan suatu pekerjaan dengan baik. Bila memang demikian halnya menurut pikiran saya.", needA: "chg", needB: "def" },
    { no: 158, A: "Saya suka bekerja sampai jauh malam menyelesaikan suatu pekerjaan.", B: "Saya suka memuji seseorang yang saya kagumi.", needA: "end", needB: "def" },
    { no: 159, A: "Saya suka nafsu saya terangsang.", B: "Saya suka dipimpin orang-orang yang saya kagumi.", needA: "het", needB: "def" },
    { no: 160, A: "Saya ingin membalas dendam terhadap orang yang menghina saya.", B: "Bila saya berada dalam suatu kelompok, saya suka menerima pimpinan orang lain dalam memutuskan hal-hal yang akan dilakukan.", needA: "agg", needB: "def" },
    { no: 161, A: "Saya suka bermurah hati kepada teman-teman saya.", B: "Saya suka membuat perencanaan sebelum memulai pekerjaan yang sulit.", needA: "nur", needB: "ord" },
    { no: 162, A: "Saya suka bertemu dengan orang-orang baru.", B: "Saya ingin setiap pekerjaan, tulisan saya, teliti, rapi dan tersusun dengan baik.", needA: "chg", needB: "ord" },
    { no: 163, A: "Saya ingin mengerjakan sampai benar-benar selesai setiap pekerjaan atau tugas yang telah saya mulai.", B: "Saya ingin perlengkapan keperluan saya tesusun rapi dan teratur di tempat yang semestinya atau di dalam ruang kerja saya.", needA: "end", needB: "ord" },
    { no: 164, A: "Saya ingin dianggap punya daya tarik fisik oleh lawan jenis saya.", B: "Saya terbiasa merencanakan dan mengatur detail-detail dari setiap pekerjaan yang harus saya lakukan.", needA: "het", needB: "ord" },
    { no: 165, A: "Saya suka mengatakan kepada orang lain pendapat saya mengenai mereka.", B: "saya suka makan saya teratur dan ada waktu tertentu untuk makan.", needA: "agg", needB: "ord" },
    { no: 166, A: "Saya suka berlaku sangat ramah terhadap teman-teman saya.", B: "Saya ingin mengatakan hal-hal yang dianggap lucu dan cerdas oleh orang-orang lain.", needA: "nur", needB: "exh" },
    { no: 167, A: "Saya lebih menyukai mencoba pekerjaan baru daripada melakukan pekerjaan tetap.", B: "Saya kadang-kadang suka melakukan hal-hal semata-mata untk melihat reaksi orang lain.", needA: "chg", needB: "exh" },
    { no: 168, A: "Saya suka bertahan menghadapi suatu pekerjaan atau masalah sekalipun tampaknya seolah-olah saya tak akan berhasil.", B: "Saya ingin orang memperhatikan dan berkomentar mengenai penampilan saya di depan umum.", needA: "end", needB: "exh" },
    { no: 169, A: "Saya suka buku, sandiwara (film) yang berkisar soal seks.", B: "Saya suka menjadi pusat perhatian dalam kelompok.", needA: "het", needB: "exh" },
    { no: 170, A: "Bila keadaan kurang menguntungkan, ingin rasanya saya menyalahkan orang lain.", B: "Saya suka mengajukan pertanyaan yang setahu saya tak seorangpun akan bisa menjawabnya.", needA: "agg", needB: "exh" },
    { no: 171, A: "Saya suka bertahan menghadapi suatu pekerjaan atau masalah sekalipun tampaknya seolah-olah saya tak akan berhasil.", B: "Saya suka mengatakan pendapat saya tentang berbagai hal.", needA: "nur", needB: "aut" },
    { no: 172, A: "Saya suka makan di restoran-restoran baru atau asing.", B: "Saya suka melakukan hal yang dianggap tak sesuai dengan adat kebiasaan.", needA: "chg", needB: "aut" },
    { no: 173, A: "Saya ingin menyelesaikan pekerjaan satu-persatu, sebelum memulai yang lain.", B: "Saya ingin merasa bebas melakukan yang saya kehendaki.", needA: "end", needB: "aut" },
    { no: 174, A: "Saya suka ikut serta dalam diskusi tentang seks dan aktivitas seksual.", B: "Saya ingin melakukan setiap hal dengan cara saya sendiri tanpa menghiraukan pemikiran orang lain.", needA: "het", needB: "aut" },
    { no: 175, A: "Saya menjadi sedemikian marah, ingin rasanya melemparkan, dan merusak barang- barang.", B: "Saya tak ingin memikul tanggung jawab dan kewajiban yang ditetapkan orang lain.", needA: "agg", needB: "aut" },
    { no: 176, A: "Saya suka menolong teman-teman saya bila mereka berada dalam kesulitan.", B: "Saya ingin setia terhadap teman-teman saya.", needA: "nur", needB: "aff" },
    { no: 177, A: "Saya suka melakukan hal-hal baru dan berbeda dari biasanya.", B: "Saya suka memperoleh teman-teman baru.", needA: "chg", needB: "aff" },
    { no: 178, A: "Bila saya melakukan suatu tugas, saya ingin mengerjakannya sampai benar-benar selesai.", B: "Saya suka bergaul dalam lingkungan yang mempunyai perasaan akrab satu sama lain.", needA: "end", needB: "aff" },
    { no: 179, A: "(untuk laki-laki) Saya suka bepergian dengan wanita-wanita yang menarik. (untuk wanita) Saya suka bepergian dengan laki-laki yang menarik.", B: "Saya ingin memperoleh teman sebanyak mungkin.", needA: "het", needB: "aff" },
    { no: 180, A: "Saya suka menyerang pendirian yang bertentangan dengan pendirian saya.", B: "Saya suka berkirim surat kepada teman-teman saya.", needA: "agg", needB: "aff" },
    { no: 181, A: "Saya suka bermurah hati kepada teman-teman saya.", B: "Saya suka mengamati perasaan orang lain dalam suatu keadaan tertentu.", needA: "nur", needB: "int" },
    { no: 182, A: "Saya suka makan di restoran-restoran baru atau asing.", B: "Saya suka menempatkan diri saya ke dalam kedudukan orang lain dan membayangkan bagaimana perasaan saya bila berada dalam keadaan yang sama.", needA: "chg", needB: "int" },
    { no: 183, A: "Saya suka bekerja sampai jauh malam menyelesaikan suatu pekerjaan.", B: "Saya ingin memahami perasaan teman-teman saya dalam menghadapi berbagai masalah.", needA: "end", needB: "int" },
    { no: 184, A: "Saya suka nafsu saya terangsang.", B: "Saya suka mempelajari dan menganalisa tingkah laku oang-orang lain.", needA: "het", needB: "int" },
    { no: 185, A: "Ingin rasanya saya memperolok orang-orang yang melakukan hal-hal yang saya anggap bodoh.", B: "Saya suka meramalkan bagaimana teman-teman saya akan bertindak dalam berbagai situasi.", needA: "agg", needB: "int" },
    { no: 186, A: "Saya suka memaafkan teman-teman saya yang kadang-kadang mungkin menyakiti hati saya.", B: "Saya ingin teman-teman memberi dorongan kepada saya bila saya mengalami kegagalan.", needA: "nur", needB: "suc" },
    { no: 187, A: "Saya suka bereksperimen, dan mencoba hal-hal baru.", B: "Saya ingin teman-teman saya menunjukkan simpati dan pengertian bila saya mengalami kesukaran.", needA: "chg", needB: "suc" },
    { no: 188, A: "Saya ingin mengerjakan teka-teki atau memecahkan persoalan-persoalan sampai selesai.", B: "Saya ingin diperlakukan dengan ramah oleh teman-teman saya.", needA: "end", needB: "suc" },
    { no: 189, A: "Saya ingin dianggap punya daya tarik fisik oleh lawan jenis saya.", B: "Saya ingin teman-teman saya banyak menunjukkan rasa sayang mereka terhadap saya.", needA: "het", needB: "suc" },
    { no: 190, A: "Ingin rasanya saya mengecam seseorag dimuka umum bila dia memang patut menerimanya.", B: "Saya ingin teman-teman saya meributkan tentang diri saya bila saya mendapat cedera atau sakit.", needA: "agg", needB: "suc" },
    { no: 191, A: "Saya suka berlaku sangat ramah terhadap teman-teman saya.", B: "Saya ingin dianggap pemimpin oleh orang lain.", needA: "nur", needB: "dom" },
    { no: 192, A: "Saya lebih menyukai mencoba pekerjaan baru daripada melakukan pekerjaan tetap.", B: "Bila masuk dalam kepanitiaan, saya ingin ditunjuk atau dipilih sebagai ketua.", needA: "chg", needB: "dom" },
    { no: 193, A: "Saya ingin mengerjakan sampai benar-benar selasai setiap pekerjaan atau tugas yang telah saya mulai.", B: "Saya ingin mampu membujuk dan mempengaruhi orang lain melakukan hal-hal yang saya kehendaki.", needA: "end", needB: "dom" },
    { no: 194, A: "Saya suka ikut serta dalam diskusi tentang seks dan aktivitas seksual.", B: "Saya ingin diminta menyelesaikan perdebatan atau perselisihan diantara orang lain.", needA: "het", needB: "dom" },
    { no: 195, A: "Saya menjadi sedemikian marah, ingin rasanya melemparkan, dan merusak barang- barang.", B: "Saya suka mengarahkan orang lain bagaimana mereka melakukan pekerjaan mereka.", needA: "agg", needB: "dom" },
    { no: 196, A: "Saya suka berlaku sangat ramah terhadap teman-teman saya.", B: "Bila keadaan kurang menguntungkan, saya merasa harus lebih disalahkan daripada orang lain.", needA: "nur", needB: "aba" },
    { no: 197, A: "Saya suka menjelajahi pedalaman dan tinggal di berbagai tempat.", B: "Bila saya melakukan kesalahan, saya merasa harus dihukum.", needA: "chg", needB: "aba" },
    { no: 198, A: "Saya suka bertahan menghadapi suatu pekerjaan atau masalah sekalipun tampaknya seolah-olah saya tak akan berhasil.", B: "Bagi saya kesedihan dan kesusahan saya, lebih banyak membawa kebaikan daripada kerugian.", needA: "end", needB: "aba" },
    { no: 199, A: "Saya suka buku, sandiwara (film) yang berkisar soal seks.", B: "Saya merasa harus mengakui hal-hal tidak baik yang telah saya lakukan.", needA: "het", needB: "aba" },
    { no: 200, A: "Bila keadaan kurang menguntungkan, ingin rasanya saya menyalahkan orang lain.", B: "Dalam banyak hal saya merasa kalah dibandingkan dengan orang-orang lain.", needA: "agg", needB: "aba" },
    { no: 201, A: "Saya ingin melakukan setiap pekerjaan sebaik mungkin.", B: "Saya suka menolong orang-orang lain yang tidak begitu beruntung seperti saya.", needA: null, needB: null },
    { no: 202, A: "Saya suka melakukan hal-hal baru dan berbeda dari biasanya.", B: "Saya suka memperlakukan orang lain dengan ramah dan simpatik.", needA: "chg", needB: "nur" },
    { no: 203, A: "Bila saya melakukan suatu tugas, saya ingin mengerjakannya sampai benar-banar selesai.", B: "Saya suka menolong orang-orang lain yang tidak begitu beruntung seperti saya.", needA: "end", needB: "nur" },
    { no: 204, A: "Saya suka bersibuk dalam aktivitas sosial bersama orang-orang dari lawan jenis saya.", B: "Saya suka memaafkan teman-teman saya yang kadang-kadang mungkin menyakiti hati saya.", needA: "het", needB: "nur" },
    { no: 205, A: "Saya akan menyerang pendirian yang bertentangan dengan pendirian saya.", B: "Saya ingin teman-teman saya mempercayai saya dan menceritakan kesulitan-kesulitan mereka kepada saya.", needA: "agg", needB: "nur" },
    { no: 206, A: "Saya suka memperlakukan orang lain dengan ramah dan simpatik.", B: "Saya suka bepergian melihat-lihat daerah pedalaman.", needA: "nur", needB: "chg" },
    { no: 207, A: "Saya suka mengikuti adat-istiadat dan menghindarkan melakukan hal-hal yang mungkin dianggap tidak wajar oleh orang-orang yang saya hormati.", B: "Saya suka mengikuti mode atau cara baru.", needA: null, needB: null },
    { no: 208, A: "Saya suka bekerja keras pada tiap pekerjaan yang saya hadapi.", B: "Saya ingin mengalami hal-hal baru dan perubahan dalam kehidupan saya sehari-hari.", needA: "end", needB: "chg" },
    { no: 209, A: "Saya suka mencium lawan jenis saya yang menarik.", B: "Saya suka bereksperimen, dan mencoba hal-hal baru.", needA: "het", needB: "chg" },
    { no: 210, A: "Ingin rasanya saya menghardik orang lain bila berbeda pendapat dengan mereka.", B: "Saya suka mengikuti mode atau cara baru.", needA: "agg", needB: "chg" },
    { no: 211, A: "Saya suka menolong orang-orang lain yang tidak begitu beruntung seperti saya.", B: "Saya ingin mengerjakan sampai benar-benar selesai setiap pekerjaan atau tugas yang telah saya mulai.", needA: "nur", needB: "end" },
    { no: 212, A: "Saya suka menjelajahi pedalaman dan tinggal di berbagai tempat.", B: "Saya ingin bekerja berjam-jam tanpa gangguan.", needA: "chg", needB: "end" },
    { no: 213, A: "Jika saya bepergian, saya ingin segala sesuatunya telah direncanakan terlebih dahulu.", B: "Saya ingin mengerjakan teka-teki atau memecahkan persoalan-persoalan sampai selesai.", needA: null, needB: null },
    { no: 214, A: "Saya suka jatuh cinta kepada seseorang dari lawan jenis saya.", B: "Saya ingin menyelesaikan pekerjaan satu-persatu, sebelum memulai yang baru.", needA: "het", needB: "end" },
    { no: 215, A: "Saya suka mengatakan kepada orang lain pendapat saya mengenai mereka.", B: "Saya ingin menghindarkan gangguan bila saya sedang bekerja.", needA: "agg", needB: "end" },
    { no: 216, A: "Saya suka memberi bantuan-bantuan kecil kepada teman-teman saya.", B: "Saya suka bersibuk dalam aktivitas sosial bersama orang-orang dari lawan jenis saya.", needA: "nur", needB: "het" },
    { no: 217, A: "Saya suka bertemu dengan orang-orang baru.", B: "Saya suka mencium lawan jenis saya yang menarik.", needA: "chg", needB: "het" },
    { no: 218, A: "Saya ingin mengerjakan teka-teki atau memecahkan persoalan-persoalan sampai selesai.", B: "Saya suka jatuh cinta kepada seseorang dari lawan jenis saya.", needA: "end", needB: "het" },
    { no: 219, A: "Saya suka berbicara tentang hal-hal yang telah saya capai.", B: "Saya suka mendengarkan atau menceritakan sejumlah lelucon yang berkisar sekitar soal seks.", needA: null, needB: null },
    { no: 220, A: "Ingin rasanya saya memperolok orang-orang yang melakukan hal-hal yang saya anggap bodoh.", B: "Saya suka mendengarkan atau menceritakan sejumlah lelucon yang berkisar sekitar soal seks.", needA: "agg", needB: "het" },
    { no: 221, A: "Saya ingin teman-teman saya mempercayai saya dan menceritakan kesulitan-kesulitan mereka kepada saya.", B: "Saya suka membaca berita surat kabar tentang pembunuhan, dan perbuatan kekerasan lain.", needA: "nur", needB: "agg" },
    { no: 222, A: "Saya suka mengikuti mode atau cara baru.", B: "Ingin rasanya saya mengecam seseorang di muka umum bila dia memang patut menerimanya.", needA: "chg", needB: "agg" },
    { no: 223, A: "Saya ingin menghindarkan gangguan bila saya sedang bekerja.", B: "Ingin rasanya saya menghardik orang lain bila berbeda pendapat dengan mereka.", needA: "end", needB: "agg" },
    { no: 224, A: "Saya suka mendengarkan atau menceritakan sejumlah lelucon yang berkisar sekitar soal seks.", B: "Saya ingin membalas dendam terhadap orang yang menghina saya.", needA: "het", needB: "agg" },
    { no: 225, A: "Saya suka mengelakkan tanggung jawab dan kewajiban-kewajiban.", B: "Ingin rasanya saya memperolok orang-orang yang melakukan hal-hal yang saya anggap bodoh.", needA: null, needB: null },
  ];

  const CON_PAIRS = [[1, 151], [7, 157], [13, 163], [19, 169], [25, 175], [26, 101], [32, 107], [38, 113], [44, 119], [50, 125], [51, 201], [57, 207], [63, 213], [69, 219], [75, 225]];

  // Tabel norma persentil asli. Tiap baris: [skor_mentah, ach%,def%,ord%,exh%,aut%,aff%,int%,suc%,dom%,aba%,nur%,chg%,end%,het%,agg%,con%]
  const NORM_TABLES = {
    1: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0], [2, 0, 0, 3, 0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 1, 0], [3, 0, 1, 6, 0, 0, 0, 0, 5, 0, 3, 1, 0, 3, 0, 2, 0], [4, 0, 3, 9, 0, 1, 1, 0, 9, 1, 5, 2, 1, 6, 1, 3, 0], [5, 0, 6, 14, 0, 2, 2, 1, 13, 2, 9, 3, 2, 10, 2, 6, 0], [6, 1, 10, 19, 1, 3, 3, 4, 20, 3, 12, 6, 3, 13, 3, 9, 1], [7, 2, 16, 27, 3, 6, 4, 5, 27, 4, 18, 10, 5, 18, 5, 13, 3], [8, 4, 23, 36, 6, 11, 7, 9, 34, 5, 24, 13, 7, 24, 6, 17, 6], [9, 7, 34, 46, 9, 15, 11, 13, 42, 8, 31, 18, 10, 29, 9, 24, 15], [10, 10, 43, 54, 15, 22, 16, 17, 50, 9, 38, 24, 15, 37, 12, 32, 27], [11, 16, 52, 63, 21, 38, 21, 19, 58, 13, 45, 31, 20, 44, 14, 40, 46], [12, 22, 63, 71, 28, 34, 28, 25, 65, 17, 53, 7, 28, 51, 19, 47, 68], [13, 30, 73, 78, 37, 43, 36, 32, 72, 21, 61, 46, 33, 57, 3, 57, 86], [14, 40, 81, 84, 49, 52, 45, 39, 78, 27, 67, 55, 41, 64, 27, 65, 96], [15, 50, 88, 88, 62, 61, 54, 45, 83, 32, 75, 63, 50, 69, 32, 72, 99], [16, 58, 93, 92, 72, 68, 64, 51, 87, 38, 79, 70, 57, 75, 39, 77, 99], [17, 66, 96, 95, 81, 76, 72, 57, 90, 45, 84, 75, 64, 79, 45, 84, 99], [18, 74, 98, 96, 89, 82, 79, 64, 93, 54, 88, 82, 71, 85, 53, 88, 99], [19, 83, 99, 97, 93, 86, 84, 72, 95, 63, 92, 86, 78, 89, 59, 92, 99], [20, 86, 99, 99, 97, 91, 89, 78, 97, 73, 94, 90, 84, 92, 67, 95, 99], [27, 99, 99, 99, 99, 99, 99, 99, 98, 99, 99, 99, 99, 99, 99, 99, 99]], // College Student (Men)
    2: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [2, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0], [3, 1, 1, 5, 0, 1, 0, 0, 1, 1, 0, 0, 0, 3, 2, 5, 0], [4, 2, 2, 9, 0, 3, 0, 0, 3, 2, 1, 0, 0, 5, 3, 9, 0], [5, 3, 3, 14, 0, 6, 0, 0, 6, 3, 2, 1, 1, 9, 5, 14, 0], [6, 5, 6, 20, 1, 9, 0, 0, 9, 5, 4, 2, 2, 13, 8, 21, 1], [7, 8, 9, 28, 3, 13, 1, 1, 13, 9, 7, 2, 3, 18, 11, 27, 2], [8, 13, 14, 37, 6, 20, 2, 3, 18, 11, 11, 3, 4, 24, 15, 36, 4], [9, 19, 21, 46, 10, 28, 3, 5, 25, 17, 14, 6, 7, 30, 19, 44, 11], [10, 27, 29, 55, 15, 36, 4, 9, 33, 23, 19, 9, 10, 36, 24, 51, 24], [11, 36, 41, 64, 21, 45, 7, 12, 44, 28, 25, 14, 13, 44, 31, 60, 43], [12, 47, 50, 70, 30, 53, 12, 16, 51, 36, 31, 20, 17, 50, 38, 66, 63], [13, 58, 62, 77, 42, 62, 17, 22, 59, 42, 37, 26, 21, 57, 45, 74, 83], [14, 64, 73, 83, 52, 70, 24, 28, 67, 51, 45, 32, 28, 63, 52, 79, 96], [15, 72, 80, 88, 63, 77, 32, 35, 76, 59, 51, 41, 35, 69, 57, 84, 99], [16, 79, 85, 91, 73, 82, 41, 43, 81, 67, 58, 50, 42, 76, 63, 89, 99], [17, 84, 91, 94, 82, 87, 50, 49, 86, 74, 66, 58, 52, 80, 69, 92, 99], [18, 90, 95, 96, 88, 92, 58, 58, 90, 83, 74, 66, 59, 85, 76, 95, 99], [19, 93, 98, 97, 92, 96, 68, 66, 93, 87, 81, 74, 68, 90, 81, 97, 99], [20, 96, 99, 98, 96, 97, 77, 73, 96, 92, 86, 82, 73, 93, 87, 98, 99], [27, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99]], // College Student (Women)
    3: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 10, 0, 0], [2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 15, 0, 0], [3, 0, 0, 0, 0, 0, 0, 0, 4, 1, 1, 0, 1, 0, 20, 1, 0], [4, 0, 0, 1, 1, 1, 0, 1, 8, 2, 2, 0, 2, 0, 24, 2, 0], [5, 1, 1, 3, 3, 2, 1, 2, 13, 3, 4, 1, 4, 1, 29, 5, 0], [6, 2, 2, 5, 5, 3, 3, 4, 19, 6, 6, 2, 6, 2, 33, 8, 1], [7, 4, 4, 8, 9, 7, 5, 6, 26, 9, 9, 5, 10, 3, 37, 11, 3], [8, 6, 8, 11, 14, 10, 8, 10, 33, 14, 12, 7, 14, 5, 42, 16, 8], [9, 10, 12, 15, 22, 15, 12, 15, 42, 19, 17, 11, 18, 7, 45, 22, 17], [10, 15, 18, 20, 29, 21, 18, 21, 50, 25, 21, 15, 24, 10, 50, 29, 29], [11, 21, 25, 26, 37, 29, 24, 28, 58, 31, 27, 20, 31, 13, 544, 37, 48], [12, 29, 32, 33, 47, 37, 31, 36, 65, 37, 33, 26, 38, 18, 58, 46, 70], [13, 37, 42, 40, 57, 46, 39, 44, 71, 44, 41, 33, 46, 23, 62, 54, 87], [14, 46, 52, 47, 66, 54, 48, 53, 77, 50, 49, 40, 54, 29, 66, 62, 97], [15, 56, 62, 55, 75, 62, 58, 61, 83, 57, 56, 47, 62, 37, 69, 69, 99], [16, 65, 71, 63, 82, 70, 67, 69, 87, 63, 62, 55, 70, 44, 73, 76, 99], [17, 74, 79, 71, 87, 77, 75, 77, 91, 69, 69, 63, 76, 52, 76, 82, 99], [18, 81, 86, 77, 92, 84, 81, 82, 93, 75, 75, 70, 82, 59, 80, 87, 99], [19, 86, 91, 83, 95, 88, 87, 87, 95, 80, 81, 76, 87, 67, 82, 91, 99], [20, 91, 95, 88, 97, 92, 91, 92, 96, 85, 86, 81, 91, 74, 85, 94, 99], [27, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 98, 99, 99]], // General Adult (Men)
    4: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0], [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 24, 2, 0], [3, 0, 0, 0, 1, 0, 0, 0, 1, 4, 0, 0, 0, 0, 30, 4, 0], [4, 0, 0, 0, 2, 2, 0, 0, 2, 9, 0, 0, 0, 0, 37, 9, 0], [5, 1, 1, 1, 5, 4, 0, 0, 5, 15, 1, 0, 1, 1, 42, 14, 0], [6, 3, 2, 3, 9, 8, 0, 1, 8, 22, 2, 0, 2, 2, 48, 20, 0], [7, 5, 3, 4, 15, 13, 1, 3, 12, 32, 4, 1, 3, 3, 53, 29, 2], [8, 9, 5, 6, 23, 20, 2, 5, 17, 40, 5, 2, 6, 5, 58, 38, 5], [9, 15, 9, 9, 32, 28, 3, 8, 24, 49, 7, 3, 9, 7, 63, 46, 12], [10, 21, 14, 14, 42, 36, 5, 12, 30, 56, 11, 4, 13, 11, 66, 55, 25], [11, 30, 19, 19, 51, 45, 7, 18, 38, 64, 14, 6, 18, 15, 71, 64, 45], [12, 40, 27, 24, 61, 54, 10, 25, 46, 71, 18, 9, 23, 20, 75, 71, 66], [13, 50, 37, 30, 70, 64, 15, 32, 55, 76, 23, 13, 30, 25, 78, 78, 85], [14, 60, 46, 38, 78, 72, 20, 42, 64, 80, 29, 18, 37, 32, 81, 83, 97], [15, 70, 56, 46, 84, 79, 27, 52, 72, 85, 36, 24, 45, 39, 84, 87, 99], [16, 77, 66, 56, 89, 85, 35, 62, 78, 89, 43, 31, 53, 47, 87, 91, 99], [17, 83, 75, 65, 93, 89, 44, 70, 84, 91, 51, 38, 60, 56, 89, 93, 99], [18, 88, 83, 73, 95, 93, 54, 77, 88, 94, 59, 47, 68, 64, 91, 96, 99], [19, 92, 89, 80, 97, 96, 63, 84, 92, 95, 68, 56, 76, 72, 93, 97, 99], [20, 95, 94, 85, 98, 97, 73, 89, 94, 97, 75, 64, 81, 79, 94, 98, 99], [27, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99]]  // General Adult (Women)
  };


  function pickKode(demo) {
    const isFemale = demo && demo.gender === 'P';
    const isStudent = demo && demo.status === 'mahasiswa';
    if (isStudent) return isFemale ? 2 : 1;
    return isFemale ? 4 : 3;
  }

  // Meniru VLOOKUP approximate-match Excel: cari baris dengan skor TERBESAR yang masih <= raw.
  function lookupRow(table, raw) {
    let best = table[0];
    for (const row of table) {
      if (row[0] <= raw) best = row; else break;
    }
    return best;
  }

  function categoryFromPercentile(pct) {
    if (pct <= 3) return 'Sangat Rendah';
    if (pct <= 16) return 'Rendah';
    if (pct <= 84) return 'Sedang';
    if (pct <= 96) return 'Tinggi';
    return 'Sangat Tinggi';
  }

  function computeResult(answers, demo) {
    const rawTotals = {};
    NEED_ORDER.forEach(k => { rawTotals[k] = 0; });

    QUESTIONS.forEach((q, idx) => {
      const ans = answers[idx];
      if (!ans) return;
      const need = ans === 'A' ? q.needA : q.needB;
      if (need) rawTotals[need] = (rawTotals[need] || 0) + 1;
    });

    let consistent = 0;
    CON_PAIRS.forEach(([itemA, itemB]) => {
      const ansA = answers[itemA - 1];
      const ansB = answers[itemB - 1];
      if (!ansA || !ansB) return;
      if (ansA === ansB) consistent++;
    });

    const kode = pickKode(demo);
    const table = NORM_TABLES[kode];

    const ranked = NEED_ORDER.map(k => {
      const raw = rawTotals[k];
      const row = lookupRow(table, raw);
      const pct = row[1 + NEED_ORDER.indexOf(k)];
      return {
        key: k, name: NEED_NAMES[k], desc: NEED_DESC[k],
        raw, pct, category: categoryFromPercentile(pct)
      };
    }).sort((a, b) => b.pct - a.pct);

    const conRow = lookupRow(table, consistent);
    const conPct = conRow[16]; // kolom ke-17 (index16) = con
    const conCategory = categoryFromPercentile(conPct);
    let conNote;
    if (conPct >= 84) {
      conNote = 'Jawaban konsisten — hasil tes ini dapat dipercaya (persentil ' + conPct + ').';
    } else if (conPct >= 16) {
      conNote = 'Konsistensi jawaban tergolong sedang (persentil ' + conPct + ').';
    } else {
      conNote = 'Konsistensi jawaban rendah (persentil ' + conPct + ') — kemungkinan menjawab terburu-buru, acak, atau kurang jujur. Pertimbangkan mengulang tes ini.';
    }

    const top3 = ranked.slice(0, 3);
    const primary = ranked[0];

    const breakdown = ranked.map(r => ({
      hiLabel: r.name,
      pct: Math.max(0, Math.min(100, r.pct)),
      narrative: r.desc + ' — Persentil ' + r.pct + ' (' + r.category + '), skor mentah ' + r.raw + '/28.'
    }));

    const kekuatan = top3.map(r => r.name + ' — persentil ' + r.pct + ' (' + r.category + ')');
    const berkembang = ranked.slice(-3).reverse().map(r => r.name + ' — persentil ' + r.pct + ' (' + r.category + ')');

    return {
      code: primary.key.toUpperCase(),
      name: primary.name,
      desc: 'Kebutuhan yang paling menonjol dalam profil kepribadianmu adalah ' + primary.name + ', berada di persentil ' + primary.pct + ' (' + primary.category + ') dibanding kelompok norma yang sesuai. ' + primary.desc,
      kekuatan,
      berkembang,
      kerja: 'Kombinasi 3 kebutuhan teratas (' + top3.map(r => r.name.split(' (')[0]).join(', ') + ') menggambarkan gaya kerja dan interaksi yang paling dominan pada dirimu.',
      breakdown,
      threeProfiles: null,
      placeholders: {
        PRIMARY: primary.key.toUpperCase(),
        PRIMARY_NAME: primary.name + ' (Persentil ' + primary.pct + ')',
        CONSISTENCY_SCORE: consistent + ' / 15 (Persentil ' + conPct + ')',
        CONSISTENCY_CATEGORY: conCategory,
        CONSISTENCY_NOTE: conNote,
        TOP3: top3.map(r => r.name + ' — Persentil ' + r.pct).join(', '),
        RANKING: ranked.map((r, i) => (i + 1) + '. ' + r.name + ' — Persentil ' + r.pct + ' (' + r.category + '), skor mentah ' + r.raw + '/28').join('\n')
      }
    };
  }


  return {
    testType: 'EPPS',
    brand: 'PETA KEBUTUHAN PSIKOLOGIS',
    answerType: 'pairwise',
    demographics: true,
    title: 'Kenali Kebutuhan Psikologis Utamamu',
    lede: 'Tes ini memakai format Edwards Personal Preference Schedule (EPPS) — 225 pasangan pernyataan. Untuk tiap nomor, pilih SATU pernyataan yang lebih menggambarkan dirimu. Ini bukan tes benar-salah, jawab jujur sesuai kebiasaanmu. Sekitar 25-35 menit.',
    legend: [
      { strong: '15 Kebutuhan', desc: '— dari Achievement sampai Aggression' },
      { strong: 'Skor Persentil', desc: '— dibandingkan norma kelompok sejenis' },
      { strong: '225 Nomor', desc: '— jawab semua tanpa dilewati' },
      { strong: '±30 menit', desc: '— sediakan waktu tenang tanpa gangguan' }
    ],
    questions: QUESTIONS,
    computeResult
  };
})();

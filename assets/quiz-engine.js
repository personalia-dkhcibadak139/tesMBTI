// Mesin kuis generik — dipakai oleh semua jenis tes (MBTI, DISC, dst).
// Setiap tes cukup menyediakan sebuah TEST_CONFIG object (lihat tests/*.js),
// mesin ini yang mengurus render soal, skala jawaban, animasi hasil, dan kirim ke Sheets.

const QuizEngine = (function () {
  // GANTI dengan URL Web App Apps Script kamu (satu URL untuk semua tes,
  // routing per-tes ditangani lewat field `testType` di payload).
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwz7SujuM5sYtSNVyDx9dvc4fyeZL98cVMhSH66Ate2bv2nYC5BGK6JNbNzbFPP69vO/exec';

  const DEFAULT_ICON = `<svg class="compass" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="50" cy="50" r="46" stroke="#C89A4A" stroke-width="1.2" opacity="0.55"/>
    <circle cx="50" cy="50" r="34" stroke="#C89A4A" stroke-width="1" opacity="0.35"/>
    <path d="M50 8 L50 20 M50 80 L50 92 M8 50 L20 50 M80 50 L92 50" stroke="#182238" stroke-width="1.4" opacity="0.5"/>
    <path d="M50 20 L58 50 L50 80 L42 50 Z" fill="#C89A4A"/>
    <circle cx="50" cy="50" r="4" fill="#182238"/>
  </svg>`;

  function init(config, rootEl) {
    const isForcedChoice = config.answerType === 'forced-choice';
    let answers = new Array(config.questions.length).fill(null);       // mode likert
    let forcedAnswers = new Array(config.questions.length).fill(null); // mode forced-choice: {most, least}
    let current = 0;
    let respondentName = '';

    rootEl.innerHTML = buildShell(config);

    const screens = {
      intro: rootEl.querySelector('#screen-intro'),
      name: rootEl.querySelector('#screen-name'),
      quiz: rootEl.querySelector('#screen-quiz'),
      result: rootEl.querySelector('#screen-result')
    };
    function show(key) {
      Object.values(screens).forEach(s => s.classList.add('hidden'));
      screens[key].classList.remove('hidden');
    }

    rootEl.querySelector('#startBtn').onclick = () => show('name');

    rootEl.querySelector('#toQuizBtn').onclick = () => {
      const val = rootEl.querySelector('#nameInput').value.trim();
      if (!val) { rootEl.querySelector('#nameError').style.display = 'block'; return; }
      respondentName = val;
      show('quiz');
      renderQuestion();
    };

    function renderQuestion() {
      rootEl.querySelector('#progressLabel').textContent = (current + 1) + ' / ' + config.questions.length;
      rootEl.querySelector('#progressFill').style.width = (current / config.questions.length * 100) + '%';
      rootEl.querySelector('#backBtn').style.visibility = current === 0 ? 'hidden' : 'visible';

      if (isForcedChoice) renderForcedChoiceQuestion();
      else renderLikertQuestion();
    }

    function renderLikertQuestion() {
      const q = config.questions[current];
      rootEl.querySelector('#axisTag').textContent = q.tag || '';
      rootEl.querySelector('#questionText').textContent = q.text;
      rootEl.querySelector('#scaleLabels').style.display = '';
      rootEl.querySelector('#scaleLabels').innerHTML = '<span>Sangat tidak setuju</span><span>Sangat setuju</span>';

      const row = rootEl.querySelector('#scaleRow');
      row.className = 'scale';
      row.innerHTML = '';
      for (let i = 1; i <= 5; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('aria-label', 'Skor ' + i);
        if (answers[current] === i) btn.classList.add('selected');
        const dot = document.createElement('span');
        dot.className = 'dot';
        btn.appendChild(dot);
        btn.onclick = () => selectAnswer(i);
        row.appendChild(btn);
      }
    }

    function selectAnswer(value) {
      answers[current] = value;
      renderQuestion();
      setTimeout(() => {
        if (current < config.questions.length - 1) { current++; renderQuestion(); }
        else finish();
      }, 180);
    }

    function renderForcedChoiceQuestion() {
      const q = config.questions[current];
      rootEl.querySelector('#axisTag').textContent = 'NO. ' + q.no + ' DARI ' + config.questions.length;
      rootEl.querySelector('#questionText').textContent = 'Pilih satu yang PALING menggambarkan dirimu, dan satu yang PALING TIDAK menggambarkan dirimu.';
      rootEl.querySelector('#scaleLabels').style.display = 'none';

      const row = rootEl.querySelector('#scaleRow');
      row.className = 'fc-list';
      row.innerHTML = '<div class="fc-legend"><span><b>P</b> = Paling menggambarkan diri</span><span><b>K</b> = Paling TIDAK menggambarkan diri</span></div>';

      const state = forcedAnswers[current] || { most: null, least: null };
      q.options.forEach((opt, idx) => {
        const item = document.createElement('div');
        item.className = 'fc-item';

        const label = document.createElement('span');
        label.className = 'fc-text';
        label.textContent = opt.text;

        const btnMost = document.createElement('button');
        btnMost.type = 'button';
        btnMost.className = 'fc-btn fc-most' + (state.most === idx ? ' active' : '');
        btnMost.textContent = 'P';
        btnMost.disabled = state.least === idx;
        btnMost.onclick = () => setForcedChoice(idx, 'most');

        const btnLeast = document.createElement('button');
        btnLeast.type = 'button';
        btnLeast.className = 'fc-btn fc-least' + (state.least === idx ? ' active' : '');
        btnLeast.textContent = 'K';
        btnLeast.disabled = state.most === idx;
        btnLeast.onclick = () => setForcedChoice(idx, 'least');

        item.appendChild(label);
        item.appendChild(btnMost);
        item.appendChild(btnLeast);
        row.appendChild(item);
      });
    }

    function setForcedChoice(idx, kind) {
      if (!forcedAnswers[current]) forcedAnswers[current] = { most: null, least: null };
      const st = forcedAnswers[current];
      if (kind === 'most') st.most = (st.most === idx ? null : idx);
      else st.least = (st.least === idx ? null : idx);
      renderQuestion();
      if (st.most !== null && st.least !== null) {
        setTimeout(() => {
          if (current < config.questions.length - 1) { current++; renderQuestion(); }
          else finish();
        }, 220);
      }
    }

    rootEl.querySelector('#skipBtn').onclick = () => {
      if (isForcedChoice) {
        forcedAnswers[current] = { most: null, least: null };
      } else if (answers[current] === null) {
        answers[current] = 3;
      }
      if (current < config.questions.length - 1) { current++; renderQuestion(); }
      else finish();
    };
    rootEl.querySelector('#backBtn').onclick = () => { if (current > 0) { current--; renderQuestion(); } };

    function finish() {
      let result;
      if (isForcedChoice) {
        const mostCounts = {};
        const leastCounts = {};
        config.questions.forEach((q, idx) => {
          const st = forcedAnswers[idx];
          if (!st) return;
          if (st.most !== null) {
            const t = q.options[st.most].trait;
            if (t) mostCounts[t] = (mostCounts[t] || 0) + 1;
          }
          if (st.least !== null) {
            const t = q.options[st.least].leastTrait !== undefined ? q.options[st.least].leastTrait : q.options[st.least].trait;
            if (t) leastCounts[t] = (leastCounts[t] || 0) + 1;
          }
        });
        result = config.computeResult({ most: mostCounts, least: leastCounts });
      } else {
        const totals = {};
        config.questions.forEach((q, idx) => {
          const val = answers[idx] === null ? 3 : answers[idx];
          totals[q.trait] = (totals[q.trait] || 0) + val;
        });
        result = config.computeResult(totals);
      }
      showResult(result);
    }

    function showResult(result) {
      show('result');

      const codeEl = rootEl.querySelector('#typeCode');
      codeEl.innerHTML = '';
      String(result.code).split('').forEach((ch, i) => {
        const span = document.createElement('span');
        span.textContent = ch;
        span.style.opacity = 0;
        span.style.transform = 'translateY(8px)';
        span.style.transition = 'all .35s ease ' + (i * 0.09) + 's';
        codeEl.appendChild(span);
      });
      requestAnimationFrame(() => requestAnimationFrame(() => {
        [...codeEl.children].forEach(s => { s.style.opacity = 1; s.style.transform = 'translateY(0)'; });
      }));

      rootEl.querySelector('#typeName').textContent = result.name;
      rootEl.querySelector('#typeDesc').textContent = result.desc;

      const barsEl = rootEl.querySelector('#axisBars');
      barsEl.innerHTML = '';
      result.breakdown.forEach(b => {
        const row = document.createElement('div');
        row.className = 'axis-bar-row';
        row.innerHTML = `
          <div class="axis-bar-top"><span class="lo">${b.loLabel || ''}</span><span class="hi">${b.hiLabel}</span></div>
          <div class="axis-bar-track"><div class="axis-bar-fill" style="width:0%"></div></div>
          <div class="axis-pct"><span>${b.loLabel ? (100 - b.pct) + '%' : ''}</span><span>${b.pct}%</span></div>
          <div class="axis-narrative">${b.narrative || ''}</div>
        `;
        barsEl.appendChild(row);
        const fill = row.querySelector('.axis-bar-fill');
        setTimeout(() => { fill.style.transition = 'width .6s ease'; fill.style.width = b.pct + '%'; }, 50);
      });

      const extraEl = rootEl.querySelector('#extraSection');
      if (result.threeProfiles) {
        extraEl.innerHTML = `
          <p class="analysis-heading" style="margin-bottom:14px;"><span class="swatch"></span>Tiga Sisi Kepribadianmu</p>
          <div class="profile-columns">
            ${result.threeProfiles.map(p => `
              <div class="profile-col">
                <div class="profile-col-label">${p.label}</div>
                <div class="profile-col-sub">${p.labelId}</div>
                <div class="profile-col-primary">${p.primary}</div>
                <div class="profile-col-name">${p.primaryName}</div>
                <div class="mini-bars">
                  ${['D', 'I', 'S', 'C'].map(k => `
                    <div class="mini-bar-row">
                      <span class="mini-bar-label">${k}</span>
                      <div class="mini-bar-track"><div class="mini-bar-fill" style="width:${p.barPct[k]}%"></div></div>
                      <span class="mini-bar-val">${p.values[k] >= 0 ? '+' : ''}${p.values[k]}</span>
                    </div>
                  `).join('')}
                </div>
                ${p.traits && p.traits.length ? `
                  <ul class="profile-traits">
                    ${p.traits.map(t => `<li>${t}</li>`).join('')}
                  </ul>
                ` : ''}
              </div>
            `).join('')}
          </div>
        `;
      } else {
        extraEl.innerHTML = '';
      }

      const analysisEl = rootEl.querySelector('#analysisSection');
      analysisEl.innerHTML = `
        <div class="analysis-block">
          <p class="analysis-heading"><span class="swatch"></span>Kekuatan Utama</p>
          <ul class="analysis-list">${result.kekuatan.map(k => '<li>' + k + '</li>').join('')}</ul>
        </div>
        <div class="analysis-block">
          <p class="analysis-heading"><span class="swatch"></span>Area yang Perlu Diperhatikan</p>
          <ul class="analysis-list">${result.berkembang.map(b => '<li>' + b + '</li>').join('')}</ul>
        </div>
        <div class="analysis-block">
          <p class="analysis-heading"><span class="swatch"></span>Gaya Kerja</p>
          <p class="analysis-p">${result.kerja}</p>
        </div>
      `;

      sendToSheet(result);

      rootEl.querySelector('#restartBtn').onclick = () => {
        answers = new Array(config.questions.length).fill(null);
        forcedAnswers = new Array(config.questions.length).fill(null);
        current = 0;
        respondentName = '';
        rootEl.querySelector('#nameInput').value = '';
        rootEl.querySelector('#nameError').style.display = 'none';
        rootEl.querySelector('#saveStatus').textContent = '';
        show('intro');
      };
    }

    function buildAnalysisText(result) {
      let t = result.desc + '\n\n';
      t += 'KEKUATAN:\n';
      result.kekuatan.forEach(k => { t += '- ' + k + '\n'; });
      t += '\nAREA YANG PERLU DIPERHATIKAN:\n';
      result.berkembang.forEach(b => { t += '- ' + b + '\n'; });
      t += '\nGAYA KERJA:\n' + result.kerja;
      return t;
    }

    function sendToSheet(result) {
      const statusEl = rootEl.querySelector('#saveStatus');
      statusEl.textContent = 'Menyimpan hasil...';

      const tanggal = new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date());

      const placeholders = Object.assign({
        NAMA: respondentName,
        TANGGAL: tanggal,
        ANALISA: buildAnalysisText(result)
      }, result.placeholders || {});

      const payload = {
        testType: config.testType,
        nama: respondentName,
        placeholders: placeholders,
        answers: isForcedChoice ? forcedAnswers : answers.map(a => a === null ? 3 : a)
      };

      fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Apps Script tidak mengizinkan baca respons lintas origin, ini normal
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      }).then(() => {
        statusEl.textContent = '✓ Hasil tersimpan atas nama ' + respondentName;
      }).catch(() => {
        statusEl.textContent = 'Gagal menyimpan hasil. Periksa koneksi internet.';
      });
    }
  }

  function buildShell(config) {
    const legendHtml = (config.legend || []).map(l =>
      `<div class="axis-chip"><b>${l.strong}</b> ${l.desc}</div>`
    ).join('');

    return `
    <div class="brandline"><span class="rule"></span> ${config.brand} <span class="rule"></span></div>
    <div class="card">

      <section id="screen-intro">
        ${config.icon || DEFAULT_ICON}
        <h1 class="title">${config.title}</h1>
        <p class="lede">${config.lede}</p>
        <div class="axis-legend">${legendHtml}</div>
        <button class="primary" id="startBtn">Mulai Tes</button>
        <p style="font-size:11.5px;color:var(--text-dim);text-align:center;margin-top:14px;">
          Hasil bersifat reflektif, bukan diagnosis psikologis resmi.
        </p>
      </section>

      <section id="screen-name" class="hidden">
        <h1 class="title">Siapa Namamu?</h1>
        <p class="lede">Nama ini dipakai untuk menyimpan hasil tesmu.</p>
        <input type="text" id="nameInput" placeholder="Tulis nama lengkap"
          style="width:100%;padding:14px 16px;border-radius:10px;border:1.5px solid var(--line);
          font-family:'Inter',sans-serif;font-size:15px;margin-bottom:20px;background:var(--paper-2);color:var(--ink);">
        <p id="nameError" style="color:#a0453a;font-size:12.5px;margin:-12px 0 16px;display:none;">Nama tidak boleh kosong.</p>
        <button class="primary" id="toQuizBtn">Lanjut ke Soal</button>
      </section>

      <section id="screen-quiz" class="hidden">
        <div class="progress-row">
          <div class="progress-track"><div class="progress-fill" id="progressFill"></div></div>
          <div class="progress-label" id="progressLabel">1 / ${config.questions.length}</div>
        </div>
        <div id="axisTag" class="q-axis-tag"></div>
        <p class="q-text" id="questionText">—</p>
        <div id="scaleRow"></div>
        <div class="scale-labels" id="scaleLabels"><span>Sangat tidak setuju</span><span>Sangat setuju</span></div>
        <div class="nav-row">
          <button class="ghost" id="backBtn">← Sebelumnya</button>
          <button class="ghost" id="skipBtn">Lewati →</button>
        </div>
      </section>

      <section id="screen-result" class="hidden">
        <div class="result-eyebrow">Hasil Kamu</div>
        <h2 class="type-code" id="typeCode"></h2>
        <p class="type-name" id="typeName"></p>
        <p class="type-desc" id="typeDesc"></p>
        <div class="axis-bars" id="axisBars"></div>
        <div id="extraSection"></div>
        <div class="divider"></div>
        <div id="analysisSection"></div>
        <p id="saveStatus" style="font-size:12.5px;color:var(--text-dim);text-align:center;margin:-14px 0 20px;"></p>
        <button class="primary" id="restartBtn">Ulangi Tes</button>
      </section>

    </div>`;
  }

  return { init };
})();

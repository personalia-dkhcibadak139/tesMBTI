// Tempel kode ini di Extensions > Apps Script pada Google Sheet tujuan.
// Satu Apps Script ini menangani SEMUA jenis tes — routing otomatis lewat
// field `testType` yang dikirim dari halaman HTML masing-masing tes.
//
// Untuk menambah tes baru nanti: cukup tambah 1 baris baru di TEST_REGISTRY
// di bawah, tidak perlu ubah kode lain di file ini.

const TEST_REGISTRY = {
  MBTI: {
    sheetName: 'Hasil_MBTI',
    templateId: '1v62tpdXs3SUHITzSi9o2XlLZsBPTGOEYvomE6OM5-qs',
    folderId: '1bwkVKiGL91EUiedSj-41vuzB0nwrbQZD'
  },
  DISC: {
    sheetName: 'Hasil_DISC',
    templateId: 'ISI_DENGAN_ID_TEMPLATE_DOC_DISC',
    folderId: '1bwkVKiGL91EUiedSj-41vuzB0nwrbQZD'
  }
  // Nanti nambah tes baru, tinggal tambah blok baru di sini, misal:
  // BIGFIVE: { sheetName: 'Hasil_BigFive', templateId: '...', folderId: '...' }
};

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var cfg = TEST_REGISTRY[data.testType];

  if (!cfg) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: 'testType tidak dikenali: ' + data.testType }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(cfg.sheetName) || ss.insertSheet(cfg.sheetName);

  var placeholderKeys = Object.keys(data.placeholders);

  if (sheet.getLastRow() === 0) {
    var header = ['Timestamp', 'Link PDF'].concat(placeholderKeys).concat(['Jawaban Mentah']);
    sheet.appendRow(header);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, header.length).setFontWeight('bold');
  }

  var pdfUrl = generatePdf(cfg, data.placeholders, data.nama, data.testType);

  var analisaColIndex = placeholderKeys.indexOf('ANALISA');

  var rowValues = [new Date(), pdfUrl]
    .concat(placeholderKeys.map(function (k) { return data.placeholders[k]; }))
    .concat([JSON.stringify(data.answers)]);

  sheet.appendRow(rowValues);

  if (analisaColIndex !== -1) {
    var lastRow = sheet.getLastRow();
    var colNum = 3 + analisaColIndex; // Timestamp, Link PDF, lalu placeholder ke-N
    sheet.getRange(lastRow, colNum).setWrap(true);
    sheet.getRange(lastRow, colNum).setVerticalAlignment('top');
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', pdfUrl: pdfUrl }))
    .setMimeType(ContentService.MimeType.JSON);
}

function generatePdf(cfg, placeholders, nama, testType) {
  var templateFile = DriveApp.getFileById(cfg.templateId);
  var folder = DriveApp.getFolderById(cfg.folderId);

  var copy = templateFile.makeCopy(testType + ' - ' + nama, folder);
  var doc = DocumentApp.openById(copy.getId());
  var body = doc.getBody();

  Object.keys(placeholders).forEach(function (key) {
    body.replaceText('{{' + key + '}}', String(placeholders[key]));
  });

  doc.saveAndClose();

  var pdfBlob = DriveApp.getFileById(copy.getId()).getAs('application/pdf');
  var pdfFile = folder.createFile(pdfBlob).setName(testType + ' - ' + nama + '.pdf');
  pdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

  DriveApp.getFileById(copy.getId()).setTrashed(true);

  return pdfFile.getUrl();
}

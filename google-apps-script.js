// ═══════════════════════════════════════════════════════════
//  GOOGLE APPS SCRIPT — Backend encuesta música y plantas
//  Proyecto: La Música en Nuestra Vida Diaria · 2º ESO
// ═══════════════════════════════════════════════════════════
//
//  INSTRUCCIONES (lee el archivo INSTRUCCIONES.md)
//
// ═══════════════════════════════════════════════════════════

const SHEET_NAME = 'Respuestas';

const HEADERS = [
  'Timestamp',
  'P1 — Playlist en casa',
  'P2 — Horas de música al día',
  'P3 — Estado de las plantas',
  'P4 — Cm planta más grande',
  'P5 — Qué dirían las plantas',
  'P6 — Cómo las cuida',
];

function doPost(e) {
  try {
    const sheet = getOrCreateSheet();
    const data  = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp,
      data.p1,
      data.p2,
      data.p3,
      data.p4_cm,
      data.p5,
      data.p6,
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const sheet = getOrCreateSheet();
    const rows  = sheet.getDataRange().getValues();

    const data = rows.slice(1).map(row => ({
      timestamp: row[0],
      p1:        row[1],
      p2:        row[2],
      p3:        row[3],
      p4_cm:     row[4],
      p5:        row[5],
      p6:        row[6],
    }));

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, data, total: data.length }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString(), data: [] }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet() {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  let sheet   = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);

    const hRange = sheet.getRange(1, 1, 1, HEADERS.length);
    hRange.setBackground('#2d6a4f');
    hRange.setFontColor('#ffffff');
    hRange.setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 180);
    sheet.setColumnWidth(2, 220);
    sheet.setColumnWidth(3, 160);
    sheet.setColumnWidth(4, 180);
    sheet.setColumnWidth(5, 100);
    sheet.setColumnWidth(6, 260);
    sheet.setColumnWidth(7, 160);
  }

  return sheet;
}

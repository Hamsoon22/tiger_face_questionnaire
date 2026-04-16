// ============================================================
// Google Apps Script — 호랑이 그림 지각 연구 설문 v2
// 총 66장 (동양 50 + 서양/기타 16) + 신뢰도 5장
// ============================================================

const SHEET_NAME = '응답데이터';
const TOTAL = 66;
const RELIABILITY = 5;
const QS = ['familiar', 'natural', 'artistic', 'balanced', 'distorted'];

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      const headers = buildHeaders();
      sheet.getRange(1,1,1,headers.length).setValues([headers]);
      sheet.getRange(1,1,1,headers.length)
        .setBackground('#1a6fa8').setFontColor('#fff').setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
    const data = JSON.parse(e.postData.contents);
    sheet.appendRow(buildRow(data));
    return ContentService.createTextOutput(JSON.stringify({status:'ok'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({status:'error',message:err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function buildHeaders() {
  const base = ['participant_id','timestamp','contact'];
  const main = [];
  for (let i = 1; i <= TOTAL; i++) {
    const n = String(i).padStart(2,'0');
    QS.forEach(q => main.push(`img${n}_${q}`));
    main.push(`img${n}_file`);   // 파일명 (분석용)
    main.push(`img${n}_style`);  // eastern / western
  }
  const rel = [];
  for (let i = 1; i <= RELIABILITY; i++) {
    const n = String(i).padStart(2,'0');
    QS.forEach(q => rel.push(`reliability_${n}_${q}`));
  }
  return [...base, ...main, ...rel];
}

function buildRow(data) {
  const base = [data.participant_id||'', data.timestamp||'', data.contact||''];
  const main = [];
  for (let i = 1; i <= TOTAL; i++) {
    const n = String(i).padStart(2,'0');
    QS.forEach(q => main.push(data[`img${n}_${q}`] ?? ''));
    main.push(data[`img${n}_file`] || '');
    main.push(data[`img${n}_style`] || '');
  }
  const rel = [];
  for (let i = 1; i <= RELIABILITY; i++) {
    const n = String(i).padStart(2,'0');
    QS.forEach(q => rel.push(data[`reliability_${n}_${q}`] ?? ''));
  }
  return [...base, ...main, ...rel];
}

function testSetup() {
  const h = buildHeaders();
  Logger.log('총 컬럼: ' + h.length);
  Logger.log('처음 10개: ' + h.slice(0,10).join(', '));
  Logger.log('마지막 5개: ' + h.slice(-5).join(', '));
}

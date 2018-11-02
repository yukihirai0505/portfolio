const bk = SpreadsheetApp.getActiveSpreadsheet()
const sheet = bk.getSheetByName('history')

const saveHistory = (email, message) => {
  const lastRow = sheet.getLastRow()
    ? sheet
        .getRange(1, 1, sheet.getLastRow(), 2)
        .getValues()
        .filter(e => e[0]).length
    : 0
  sheet.getRange(lastRow + 1, 1, 1, 2).setValues([[email, message]])
}

const createResponse = () => {
  const output = ContentService.createTextOutput()
  output.setMimeType(ContentService.MimeType.JSON)
  output.setContent(
    JSON.stringify({
      data: 'ok'
    })
  )
  return output
}

global.doPost = e => {
  const { email, message } = e.parameter
  saveHistory(email, message)
  GmailApp.sendEmail(
    'yukihirai0505@gmail.com',
    'Inquiry From Portfolio',
    `${message}\n\nby ${email}`
  )
  return createResponse()
}

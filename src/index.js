function generatePDFOnFormSubmit() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var folder = DriveApp.getFolderById('1pjWLMfl9ZCISRB7nkPiV1CIDuO3QH8y4'); // Replace with your folder ID

  var lastRow = sheet.getLastRow();

  // Get the data from the last form submission

  var formData = sheet
    .getRange(lastRow, 1, 1, sheet.getLastColumn())
    .getValues()[0];

  var sheet = SpreadsheetApp.getUi();

  // TODO: extract the second tab sheet wuth the Fiche Incident with right layout

  // If you want to create a new sheet with form responses:

  var newSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(
    'Form_Responses_' + lastRow,
  );

  newSheet.appendRow(sheet.getRange('1:1').getValues()[0]); // Add header

  newSheet.appendRow(formData); // Add latest form submission data

  // Define PDF export parameters

  var url =
    'https://docs.google.com/spreadsheets/d/' +
    SpreadsheetApp.getActiveSpreadsheet().getId() +
    '/export?' +
    'format=pdf&' +
    'size=letter&' + // Paper size
    'portrait=true&' + // Orientation
    'fitw=true&' + // Fit to width
    'sheetnames=false&' + // Hide sheet names
    'printtitle=false&' + // Don't repeat row headers
    'pagenumbers=true&' + // Include page numbers
    'gridlines=false&' + // Hide gridlines
    'fzr=false&' + // Freeze rows
    'gid=' +
    sheet.getSheetId(); // Get the current sheet ID

  // Get the Blob (PDF) from the URL

  var token = ScriptApp.getOAuthToken();

  var response = UrlFetchApp.fetch(url, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  var pdfBlob = response
    .getBlob()
    .setName('Fiche_Incident_generée_' + lastRow + +'.pdf');

  // Save the PDF to the designated folder in Drive

  folder.createFile(pdfBlob);

  // Optionally, you can email the PDF as an attachment

  // TODO: retrieve the email from the form and set as recipient

  MailApp.sendEmail(
    'claudia.cavallera@veolia.com',
    'Your PDF',
    'Here is your PDF',
    {
      attachments: [pdfBlob],
    },
  );
}

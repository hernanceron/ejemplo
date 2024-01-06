const ExcelJS = require('exceljs');

const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet('Sheet 1');

worksheet.columns = [
  { header: 'Name', key: 'name', width: 20 },
  { header: 'Email', key: 'email', width: 25 },
  { header: 'Age', key: 'age', width: 10 }
];

worksheet.addRow({ name: 'John Doe', email: 'johndoe@example.com', age: 30 });
worksheet.addRow({ name: 'Jane Smith', email: 'janesmith@example.com', age: 25 });

workbook.xlsx.writeFile('example.xlsx')
  .then(() => {
    console.log('Excel file created!');
  })
  .catch((error) => {
    console.log(error);
  });
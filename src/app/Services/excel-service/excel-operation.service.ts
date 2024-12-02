import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelOperationService {

  jsonData: any = null;

  constructor(private http: HttpClient) {}

  loadExcelFile(): void {
    const filePath = 'assets/excelSheets/SimpleData.xlsx'; // Path to the Excel file
    //const filePath = 'https://docs.google.com/spreadsheets/d/1rtc4LjKLRChMDWE26L2wFoDYd_z04QWn/edit?gid=23764170#gid=23764170'; // Path to the Excel file

    this.http.get(filePath, { responseType: 'arraybuffer' }).subscribe(
      (data) => {
        const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert sheet data to JSON
        const rawJson = XLSX.utils.sheet_to_json(sheet);

        // Filter out empty rows
        this.jsonData = rawJson.filter((row: any) =>
          Object.values(row).some((value) => value !== null && value !== undefined && value !== '')
        );

        console.log('Filtered JSON Data:', this.jsonData);
      },
      (error) => {
        console.error('Error loading Excel file:', error);
      }
    );
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0]; // Get the first sheet
        const sheet = workbook.Sheets[sheetName];
        this.jsonData = XLSX.utils.sheet_to_json(sheet); // Convert sheet to JSON
      };
      reader.readAsArrayBuffer(file); // Read the file as array buffer
    }
  }
}

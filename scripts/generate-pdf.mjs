import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generatePDF() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Read the HTML file
  const htmlPath = join(__dirname, '../public/Jeevanantham_P_Resume_2026.html');
  const htmlContent = readFileSync(htmlPath, 'utf-8');
  
  // Set content
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  
  // Generate PDF
  const pdfPath = join(__dirname, '../public/Jeevanantham_P_Resume_2026.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  
  console.log(`PDF generated: ${pdfPath}`);
  await browser.close();
}

generatePDF().catch(console.error);

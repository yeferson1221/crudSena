import { Component } from '@angular/core';
import { PdfMakeWrapper,Txt } from 'pdfmake-wrapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cliente';

  generatePDF(){
    const pdf = new PdfMakeWrapper();
    pdf.add(
      new Txt('hola mundo').bold().italics().end
    );
    pdf.create().open();
  }
}

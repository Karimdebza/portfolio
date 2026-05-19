import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-contact',
  imports: [CommonModule, TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  emailCopied = false;

copyEmail(): void {
  navigator.clipboard.writeText('debzakarim10@gmail.com').then(() => {
    this.emailCopied = true;
    setTimeout(() => this.emailCopied = false, 2000);
  });
}

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
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

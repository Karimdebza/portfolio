import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, TranslateModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class Experience {
  experiences = [
    {
      role: 'experience.scipline.role',
      company: 'Scipline',
      period: '2025 — ' + ('experience.present'),
      periodKey: 'experience.scipline.period',
      type: 'experience.type_alternance',
      location: 'Angoulême, France',
      description: [
        'experience.scipline.d1',
        'experience.scipline.d2',
        'experience.scipline.d3',
        'experience.scipline.d4',
        'experience.scipline.d5',
      ]
    },
    {
      role: 'experience.compufirst.role',
      company: 'Compufirst',
      periodKey: 'experience.compufirst.period',
      type: 'experience.type_alternance',
      location: 'Montpellier, France',
      description: [
        'experience.compufirst.d1',
        'experience.compufirst.d2',
        'experience.compufirst.d3',
      ]
    }
  ];
}
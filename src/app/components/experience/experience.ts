import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class Experience {
  experiences = [
    {
      role: 'Développeur Fullstack — Alternance',
      company: 'Scipline',
      period: '2025 — Présent',
      type: 'Alternance',
      location: 'angoulême, France',
      description: [
    "      Rôle clé en collaboration directe avec le lead developer\
      Maintenance d’un ERP commercial (Flask, PHP, JavaScript vanilla)\
      Participation à la refonte de l’ERP (Python, JavaScript)\
      Adaptation aux besoins clients et compréhension de la logique métier\
      Transformation de processus métiers en code (ex : système de trésorerie Excel)"
      ]
    },
    {
      role: 'Développeur — Alternance',
      company: 'Compufirst',
      period: '2024 — 2025',
      location: 'Montpellier, France',
      type: 'Alternance',
      description: [
      "Collaboration avec les pôles commercial et marketing \
      Adaptation du CRM selon les besoins métiers\
      Participation à la refonte du CRM (anciennement en Java 8)"
      ]
    }
  ];
}
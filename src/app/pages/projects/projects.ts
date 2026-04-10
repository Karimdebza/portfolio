import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {
  projects = [
    {
      icon: '📈',
      title: 'FX Predictor Dashboard',
      description: 'Dashboard de prédiction de taux de change en temps réel. Visualisation de données forex avec indicateurs techniques et modèles ML.',
      tags: ['Angular', 'Python', 'FastAPI', 'Chart.js', 'ML'],
      github: 'https://github.com/Karimdebza/fx-dashboard',
      live: 'https://fx-dashboard-beta.vercel.app/'
    },
    {
      icon: '☀️',
      title: 'SolarCast — En cours',
      description: 'Application de prévision de production solaire basée sur les données météo. Optimisation énergétique pour particuliers et entreprises.',
      tags: ['Angular', 'Node.js', 'Weather API', 'PostgreSQL'],
      github: null,
      live: null
    }
  ];
}
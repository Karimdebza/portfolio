import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {
  projects = [
    {
      icon: '🔭',
      title: 'ExoplanetHunter',
      description: 'Pipeline ML de détection d\'exoplanètes dans les données NASA Kepler. Architecture en 5 couches : ingestion → BLS → CNN (val_auc 0.846) → validation physique → API async. Déployé sur Render + Vercel.',
      tags: ['Angular 18', 'Python', 'FastAPI', 'TensorFlow', 'RxJS'],
      github: 'https://github.com/Karimdebza/exoplanet_hunter',
      live: 'https://exoplanet-hunter-two.vercel.app/results'
    },
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
      title: 'SolarCast ',
      description: 'Application de prévision de production solaire basée sur les données météo. Optimisation énergétique pour particuliers et entreprises.',
      tags: ['Angular', 'python', 'Weather API', 'redis'],
      github: 'https://github.com/Karimdebza/solarcast',
      live: 'https://solarcast-nine.vercel.app/'
    }
  ];
}
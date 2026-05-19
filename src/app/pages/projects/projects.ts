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
      descriptionKey: 'projects.exoplanet.desc',
      tags: ['Angular 18', 'Python', 'FastAPI', 'TensorFlow', 'RxJS'],
      github: 'https://github.com/Karimdebza/exoplanet_hunter',
      live: 'https://exoplanet-hunter.vercel.app'
    },
    {
      icon: '📈',
      title: 'FX Predictor Dashboard',
      descriptionKey: 'projects.fx.desc',
      tags: ['Angular', 'Python', 'FastAPI', 'Chart.js', 'ML'],
      github: 'https://github.com/Karimdebza/fx-dashboard',
      live: 'https://fx-dashboard-beta.vercel.app/'
    },
    {
        icon: '☀️',
      title: 'SolarCast',
      descriptionKey: 'projects.solar.desc',
      tags: ['Angular', 'python', 'Weather API', 'redis'],
      github: 'https://github.com/Karimdebza/solarcast',
      live: 'https://solarcast-nine.vercel.app/'
    },
        {
      icon: '🧩',
      title: 'PuzzleGame',
      descriptionKey: 'projects.puzzle.desc',
      tags: ['TypeScript', 'Canvas API', 'ES Modules'],
      github: 'https://github.com/Karimdebza/PuzzleGame',
      live: 'https://karimdebza.github.io/PuzzleGame/'
    }
  ];
}
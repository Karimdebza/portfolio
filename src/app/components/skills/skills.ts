import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { About } from '';
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillGroups = [
    {
      category: 'Frontend',
      skills: [
        { icon: 'devicon-angular-plain', name: 'Angular 18' },
        { icon: 'devicon-typescript-plain', name: 'TypeScript' },
        { icon: 'devicon-javascript-plain', name: 'JavaScript' },
        { icon: 'devicon-html5-plain', name: 'HTML5' },
        { icon: 'devicon-css3-plain', name: 'CSS3 / SCSS' },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { icon: 'devicon-python-plain', name: 'Python' },
        { icon: 'devicon-fastapi-plain', name: 'FastAPI' },
        { icon: 'devicon-flask-plain', name: 'Flask' },
        { icon: 'devicon-php-plain', name: 'PHP' },
        { icon: 'devicon-java-plain', name: 'Java' },
      ]
    },
    {
      category: 'Machine Learning',
      skills: [
        { icon: 'devicon-tensorflow-original', name: 'TensorFlow' },
        { icon: 'devicon-scikitlearn-plain', name: 'Scikit-learn' },
        { icon: 'devicon-numpy-plain', name: 'NumPy' },
        { icon: 'devicon-matplotlib-plain', name: 'Matplotlib' },
        { icon: 'devicon-pandas-plain', name: 'pandas' },
      ]
    },
    {
      category: 'Data & DevOps',
      skills: [
        { icon: 'devicon-mysql-plain', name: 'MySQL' },
        { icon: 'devicon-redis-plain', name: 'Redis' },
        { icon: 'devicon-mongodb-plain', name: 'MongoDB' },
        { icon: 'devicon-docker-plain', name: 'Docker' },
        { icon: 'devicon-git-plain', name: 'Git' },
      ]
    },
  ];
}

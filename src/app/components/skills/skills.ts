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
  skills = [
    { icon: 'devicon-angular-plain', name: 'Angular' },
    { icon: 'devicon-typescript-plain', name: 'TypeScript' },
    { icon: 'devicon-nodejs-plain', name: 'Node.js' },
    { icon: 'devicon-python-plain', name: 'Python' },  
      { icon: 'devicon-flask-plain', name: 'Flask' },
    { icon: 'devicon-mysql-plain', name: 'MySQL' },
    { icon: 'devicon-mongodb-plain', name: 'MongoDB' },
    { icon: 'devicon-docker-plain', name: 'Docker' },
    { icon: 'devicon-redis-plain', name: 'Redis' },
    { icon: 'devicon-java-plain', name: 'Java' },
    { icon: 'devicon-git-plain', name: 'Git' },
  ];
}

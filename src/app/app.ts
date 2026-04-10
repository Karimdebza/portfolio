import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';
import { Projects } from './pages/projects/projects';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';


@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Skills, Contact, Projects, About, Experience],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}

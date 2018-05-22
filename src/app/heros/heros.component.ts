import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './moock-heroes';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes: Hero[];

  hero: Hero;

  chooiseElement(element: Hero): void {
    this.hero = element;
  }

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
}

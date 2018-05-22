import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './moock-heroes';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes = HEROES;

  hero: Hero;

  chooiseElement(element: Hero): void {
    this.hero = element;
  }
  
  constructor() { }

  ngOnInit() {
  }

}

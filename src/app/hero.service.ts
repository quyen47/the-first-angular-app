import { Injectable } from '@angular/core';
import { Hero } from './heros/hero'
import { HEROES } from './heros/moock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  } 

  constructor() { }
}

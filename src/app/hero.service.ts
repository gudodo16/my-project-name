import { Injectable } from '@angular/core';
import { HEROES, Hero } from "./hero";
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private MessageService: MessageService

  ) { 

  }

  // getHeroes():Hero[]{
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    // return of(HEROES);
    // TODO: send the message _after_ fetching the heroes
    this.MessageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}

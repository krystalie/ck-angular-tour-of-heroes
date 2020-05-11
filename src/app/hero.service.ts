import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


//provided service at root level allows all classes to ask for its service
@Injectable({
  providedIn: 'root' //this is a provider for the service to be injected
})
export class HeroService {

	//declares a messageService property. Angular will inject the singleton 
	//MessageService into that property when it creates the HeroService.
  constructor(private messageService: MessageService) { }
  
  //Like getHeroes(), getHero() has an asynchronous signature. 
  //server request use observable
  
  
  /**Hero[] is enforced typing and makes sure the items are of Hero property 
  and it is an array[]**/
  getHeroes(): Observable<Hero[]> {
	  // TODO: send the message _after_ fetching the heroes
	  this.messageService.add('HeroService: fetched heroes');
	  return of(HEROES);
	  
  }
	  
	getHero(id: number): Observable<Hero> {
	// TODO: send the message _after_ fetching the hero
		this.messageService.add(`HeroService: fetched hero id=${id}`);
		return of(HEROES.find(hero => hero.id === id));
}
}
	

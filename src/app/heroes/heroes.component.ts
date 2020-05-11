import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	
	heroes: Hero[]//enforced typing
	
	/**The parameter simultaneously defines a private heroService property and 
	identifies it as a HeroService injection site.**/
	constructor(private heroService: HeroService, private messageService: MessageService) {}
	
	ngOnInit() {
	this.getHeroes();
	
	}
	
	getHeroes(): void {
		this.heroService.getHeroes()
		.subscribe(this.heroesObserver);
		// argument is the next handler to handle the observable ie the observer object
		//this.heroService.getHeroes() is the observable being observed	
	}
	
	heroesObserver = {
		next: herolist => this.heroes = herolist
	}
	
	
}

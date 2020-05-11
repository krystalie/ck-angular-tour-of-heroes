import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
  
})

export class HeroDetailComponent implements OnInit {
	
	hero: Hero;

	constructor(
	/**The ActivatedRoute holds information about the route 
	to this instance of the HeroDetailComponent**/
		private route: ActivatedRoute,
		private heroService: HeroService,
		private location: Location
	) {}

	ngOnInit(): void {
		this.getHero();
	}

	getHero(): void {
		//route.snapshot is a static image of the route information after the component was created.
		//The paramMap is a dictionary of route parameter values extracted from the URL.
		//Route parameters are always strings
		//(+) operator converts the string to a number
		const id = +this.route.snapshot.paramMap.get('id');
		this.heroService.getHero(id)
		.subscribe(hero => this.hero = hero);
	}
	
	goBack(): void {
		//need to import location from angular/common first
		this.location.back();
	}

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // routing functionality
import { HeroesComponent } from './heroes/heroes.component'; //destination for route 
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const routes: Routes = [
//path: string that matches url in browser
//component: the component the router should create when navigating this route
	{path: 'heroes', component: HeroesComponent },
	{path: 'dashboard', component: DashboardComponent },
	//The (:) in the path indicates that :id is a placeholder for a specific hero id.
	{path: 'detail/:id', component: HeroDetailComponent},
	//makes the default route to the dashboard view
	{path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
	//forRoot() method supplies the service providers 
	//and directives needed for routing
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

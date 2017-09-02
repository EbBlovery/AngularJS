import { Component } from '@angular/core'
import { Hero } from './hero'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html' 
})

export class AppComponent {
	title="Tour of Heroes";
	heroes = [
        new Hero(1,'Windows'),
        new Hero(2,'Winwetrdows'),
        new Hero(3,'Windgfwdows'),
        new Hero(4,'Widsfndows'),
	];
	myHero = this.heroes[0]

	onSubmit(item){
		console.log(item)
	}
	onSave(e){
		console.log(e)
	}
}
import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
// export class Hero {
//   id: number;
//   name: string;
// }

// const HEROES: Hero[] = [
// { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];
@Component({
  selector: 'my-heroes',
  templateUrl: `./heroes.component.html`,
  styleUrls: [`./heroes.component.css`]
    // providers: [HeroService],
})
export class HeroesComponent implements OnInit{
  constructor(private heroService: HeroService){}
  // title = 'Tour of Heroes';
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  heroes: Hero[];
  selectedHero:Hero; //声明selectedHero 为Hero类型；
  // heroes = HEROES;
  onSelect(hero: Hero): void {
  	this.selectedHero = hero;
  }
  getHeroes(): void{
  	this.heroService.getHeroes().then(res =>this.heroes = res);
  }
  ngOnInit(): void {
  	this.getHeroes();
  }
}
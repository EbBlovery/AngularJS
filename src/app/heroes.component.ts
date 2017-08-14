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
  template: `
    <h2>MY heroes</h2>
    <ul class="heroes">
       <li *ngFor = "let hero of heroes" (click)="onSelect(hero)"
         [class.selected]="hero===selectedHero">
          <span class="badge">{{hero.id}}</span>   {{hero.name}}     
       </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
    `,
    styles: [`
        .selected{
        	background-color: #cfd8dc !important;
        	color: white;
        }
        .heroes{
        	margin:0 0 2em 0;
        	list-style-type:none;
        	padding:0;
        	width:15em;
        }
        .heroes li {
        	cursor:pointer;
        	position:relative;
        	left:0;
        	background-color:#eee;
        	margin:.5em;
        	padding: .3em 0;
        	height: 1.6em;
        	border-radius:4px;
        }
        .heroes li.selected:hover{
        	background-color: #BBD8DC !important;
            color: white;
        }
        .heroes li:hover{
        	color: #607d8b;
        	background-color: #ddd;
        	left: .1em;
        }
        .heroes .text{
        	position: relative;
        	top: .1em;
        }
        .heroes .badge{
        	display:inline-block;
        	font-size: small;
        	color: white;
        	padding: .8em .7em 0 .7em;
        	background-color: #607d8b;
        	line-height: 1em;
        	position: relative;
        	left: -1px;
        	top: -4px;
        	height: 1.8em;
        	margin-right: .8em;
        	border-radius: 4px 0 0 4px;
        }
    `],
    providers: [HeroService],
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
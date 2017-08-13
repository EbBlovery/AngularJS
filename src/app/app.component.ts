import { Component } from '@angular/core';
 
export class Hero {
  id: number;
  name: string;
}
const HEROES: Hero[] = [
{ id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>MY heroes</h2>
    <ul class="heroes">
       <li *ngFor = "let hero of heroes">
          <span class="badge">{{hero.id}}</span>   {{hero.name}}     
       </li>
    </ul>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
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
    `]
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES;
}
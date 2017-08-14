import { Injectable } from '@angular/core';
import {Hero} from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService{
	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
		// return new Promise(resolve=>{
  //             setTimeout(()=>{
  //                 resolve(HEROES)
  //             },2000)
		//  }
		// )
	}
	getHero(id: number): Promise<Hero>{
		return this.getHeroes().then(res=>
			res.find(hero=> hero.id === id)
		)
	}
// 	getHero(id: number): Promise<Hero> {
//   return this.getHeroes()
//              .then(heroes => heroes.find(hero => hero.id === id));
// }
}
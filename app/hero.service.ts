
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

import {injectable} from 'angular2/core';
import {Hero} from './mock-heroes';

@injectable()

export class HeroService{
	getHeroes(){
		return Promise.resolve(Hero); //no se ejecuta en el momento sino a futuro
	};
	getHero(id:number){
		return Promise.resolve(Hero).then(heroes => heroes.filter(hero=>hero.id === id)[0]);
	}
}

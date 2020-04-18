import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
// import { HEROES } from "../hero";
import { HeroService } from "../hero.service";
import { MessageService  } from "../message.service";
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // heroes = HEROES;

  //  เรียน อินเตอร์เฟส Hero มาใช้
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    //  เรียกใช้ ฟังชั่น ของ heroService ทั้งหมด 
    private heroService: HeroService,
    private MessageService: MessageService

  ) { }
  
  //  เรียกใช้ ฟังชั่น getHeroes 
  // getHeroes(): void {
    // ประกาศให้ heroes ทั้งหมด ข้อมูล = ฟังชั่น getHeroes();
    // this.heroes = this.heroService.getHeroes();
  // }

  //  เขียน แบบนี้ ซิงแบบ 100
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    //  เรียกใช้ getHeroes ทันที
    this.getHeroes();
  }

  //  ฟังชั่น เมื่อเลือก 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    //  สามารถ เรียกใช้  MessageService ได้เลย จากการเรียกใช้  constructor
    this.MessageService.add(`HeroService: Selected hero id=${hero.id}`);
  }

}

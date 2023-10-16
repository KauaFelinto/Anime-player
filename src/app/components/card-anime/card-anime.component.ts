import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-anime',
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.css']
})
export class CardAnimeComponent implements OnInit {
  @Input()
  animeCover:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}

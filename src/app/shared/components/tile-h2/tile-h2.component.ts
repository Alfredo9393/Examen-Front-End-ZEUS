import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile-h2',
  templateUrl: './tile-h2.component.html',
  styleUrls: ['./tile-h2.component.css']
})
export class TileH2Component implements OnInit {
  
  @Input() text: string =''

  constructor() { }

  ngOnInit() {
  }

}

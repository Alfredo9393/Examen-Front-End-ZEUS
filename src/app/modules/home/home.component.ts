import { Component, OnInit } from '@angular/core';
import { ICarouselIem } from 'src/app/shared/components/carousel/icarousel.item.metadata';
import { dummy_data } from './data.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public carouselData:ICarouselIem[] = dummy_data;
  constructor() { }

  ngOnInit() {
  }

}

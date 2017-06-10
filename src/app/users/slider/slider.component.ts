import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [{provide: CarouselConfig, useValue: {interval: 3000, noPause: true}}]
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

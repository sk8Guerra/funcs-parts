import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as functionPlot from 'function-plot';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    this.printFunction("skateforever");
  }

  ngOnInit() {
  }

  printFunction (lol) : void {
    functionPlot.functionPlot({
      target: '#quadratic',
      data: [{
        fn: 'x^2'
      }]
    });
  }
}

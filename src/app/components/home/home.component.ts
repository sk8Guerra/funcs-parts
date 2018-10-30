import { Component, OnInit } from '@angular/core';
declare var functionPlot;


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  functions: any = [];
  model: any = {};
  options = {
    target: '#graphic',
    data: []
  };

  constructor() {}

  ngOnInit() {
    this.printFunction(this.options);
  }

  onSubmitFunction() {
    let newModel: any = {}
    let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    if ( typeof this.model.limit1 === 'undefined' &&
         typeof this.model.limit1 === 'undefined') {
      newModel = {
        fn: this.model.func,
        color: color
      }
    } else {
      newModel = {
        fn: this.model.func,
        range: [this.model.limit1, this.model.limit2],
        color: color
      }
    }
    this.functions.push(newModel);
    this.options.data = this.functions;
    this.printFunction(this.options);
  }

  printFunction (options) : void {
    functionPlot(options);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  src: string = 'assets/SkatePhrases.pdf';

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  input: string;
  output: string;
  fontsize = 16;
  tofixed = 3;
  ngOnInit() {

  }

  transform() {
    if (!this.input) {
      return;
    }
    const regex = /(\d+)\s*px/g;
    this.output = this.input.replace(regex, this.pxtorem.bind(this));
  }

  pxtorem(match) {
    const px = parseInt(match, 10);
    return ((px / (this.fontsize || 16)).toFixed(this.tofixed || 3) + 'rem');
  }

}

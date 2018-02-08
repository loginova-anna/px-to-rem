import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  input: string;
  output: string;

  ngOnInit() {

  }

  transform() {
    if (!this.input) {
      return;
    }
    var regex = /(\d+)\s*px/g;
    this.output = this.input.replace(regex, this.pxtorem);
  }

  pxtorem(match) {
    let px = parseInt(match);
    return px/16 + 'rem';
  }

}

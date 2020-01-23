import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DesignOrderPlatform';
  toggle = false;
  widthWindow: number;
  ngOnInit() {
    this.widthWindow = window.innerWidth;
    window.addEventListener('resize', this._reportWindowSize);
  }
  private _reportWindowSize() {
    const widthOutput = window.innerWidth;
    this.widthWindow = widthOutput;
  }
}

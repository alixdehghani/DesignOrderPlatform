import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit, OnChanges {
  @Input() widthWindow: number;
  @Output() drawer = new EventEmitter<void>();
  showMobileWindow = false;
  showDesktopWindow = false;
  constructor() { }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.widthWindow != null) {
      if (this.widthWindow >= 750) {
        this.showDesktopWindow = true;
        this.showMobileWindow = false;
      } else {
        this.showDesktopWindow = false;
        this.showMobileWindow = true;
      }
    }
  }

}

import { Component, OnInit, ViewChild, Input, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnChanges {
  @Input() toggle: boolean
  constructor() { }
  @ViewChild('drawer') drawer;
  ngOnInit() {
    this.drawer.toggle();
  }

  ngOnChanges() {
    this.drawer.toggle();
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rs-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ComponentBComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rs-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ComponentAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

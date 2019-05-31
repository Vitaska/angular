import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-three-comp',
  templateUrl: './three-comp.component.html',
  styleUrls: ['./three-comp.component.css']
})
export class ThreeCompComponent implements OnInit {

  @Input() myTitle;

  @Output() returnText: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(someText) {

    const newTitle = this.myTitle + ' ' + someText;

    this.returnText.emit(newTitle);

  }

}

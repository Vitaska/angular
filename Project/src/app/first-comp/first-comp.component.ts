import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  @Input() myTitle;

  @Output() returnText: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onReturnText(text) {
    this.returnText.emit(text);
  }

}

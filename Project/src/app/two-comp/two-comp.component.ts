import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-comp',
  templateUrl: './two-comp.component.html',
  styleUrls: ['./two-comp.component.css']
})
export class TwoCompComponent implements OnInit {

  @Input() myTitle;

  @Output() returnText: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onReturnText(text) {
    this.returnText.emit(text);
  }

}

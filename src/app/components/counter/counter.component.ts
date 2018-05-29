import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public counter = 0;
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.counter++;
  }
  onReset() {
    this.counter = 0;
  }
}

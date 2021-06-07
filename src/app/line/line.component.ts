import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    Chart.register(...registerables);

    new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Current Vallue',
          data: [0, 15, 40, 6],
          backgroundColor: "rgb(120 25 58 / 65%)",
          borderColor: "#007ee7",
          fill: true,
          tension: 0.2
        },
        {
          label: 'Invested Amount',
          data: [0, 56, 69, 58, 55],
          backgroundColor: "#47a0e8",
          borderColor: "#007ee7",
          fill: true,
          tension: 0.2
        }],
        labels: ['TP1', 'TP2', 'TP3', 'TP4']
      },
    });
  }


}

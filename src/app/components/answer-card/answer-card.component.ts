import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { CalculatePointService } from 'src/app/services/calculate-point.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-answer-card',
  templateUrl: './answer-card.component.html',
  styleUrls: ['./answer-card.component.scss']
})
export class AnswerCardComponent implements OnInit {
  canvas: any;
  show: boolean = false;
  ctx: any;

  labels: string[] = [];
  data: any[] = [];

  constructor(private questionService: QuestionsService,
    private calculateService: CalculatePointService) {

  }

  ngOnInit(): void {
    this.calculateService.$save.subscribe(res => {
      if (res) {
        this.show = true;
        this.getLabels();

      }
    });



  }



  getLabels() {

    this.labels = this.questionService.getTypeString();
    this.data = this.calculateService.getPointsByType();
    console.log(this.data);
    this.setGraph();
  }


  setGraph() {
    this.canvas = document.getElementById('myChart');

    this.ctx = this.canvas.getContext('2d');

    const myChart = new Chart(this.ctx, {
      type: 'radar',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Rueda de la vida',
          data: this.data,
          backgroundColor: "rgba(242, 196, 213, 0.5)",
          borderColor: "#F2ACC6",
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: false,
        elements: {
          line: {
            tension: 0.000001
          }
        },
        plugins: {
          filler: {
            propagate: true
          },
          'samples-filler-analyser': {
            target: 'chart-analyser'
          }
        },
        scale: {
          angleLines: {
            display: false
          },
          ticks: {
            suggestedMin: 10,
            suggestedMax: 100
          }
        }
      }
    });
  }

}

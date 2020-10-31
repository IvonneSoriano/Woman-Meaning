import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { CalculatePointService } from '../../services/calculate-point.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent implements OnInit {

  num: number =0;
  questions: string[];
  points: number[];
  pxq: object;

  constructor(private questionsService:QuestionsService,
  private calculatePoint: CalculatePointService) { 
    this.questions = this.questionsService.getQuestions();
    this.points = this.questionsService.getPoints();
    this.pxq = this.calculatePoint.getPointXQuestions();
    }

  ngOnInit(): void {
    this.questionsService.$num.subscribe( resp=>{
      console.log("estamos esperando que se inicie");
      if(resp){
        console.log("Suma");
        this.num++;
      }
      else if(this.num!=0){
        console.log("Resta");
        this.num--;
      }
    })
  }

  selectPoint(point:number, question){
    this.calculatePoint.setPointXQuestion(question, point);
    this.pxq = this.calculatePoint.getPointXQuestions();
    if(this.num != this.questionsService.getLastQuestion()){

      this.num++;
    }
  }

}

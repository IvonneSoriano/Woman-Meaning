import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { CalculatePointService } from '../../services/calculate-point.service';
import  {Question } from '../../model/question';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent implements OnInit {

  maxGrade:number = 10;
  num: number =0;
  questions: object[];
  points: number[] = [];
  pxq: object;

  constructor(private questionsService:QuestionsService,
  private calculatePoint: CalculatePointService) { 
    //Test
    //this.questionsService.countQuestionXType();
    this.questions = this.questionsService.getQuestions();
    this.getPoints();
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
    this.calculatePoint.setPointXQuestion(this.questions[question]["id"], point, this.questions[question]["type"]);
    this.pxq = this.calculatePoint.getPointXQuestions();
    setTimeout(() => {
      if(this.num != this.questionsService.getLastQuestion()){

        this.num++;
      }
    },700);
   
  }

  getPoints(){
    for (let index = 0; index < this.maxGrade; index++) {
      this.points.push(index+1);
      
    }
  }

}
